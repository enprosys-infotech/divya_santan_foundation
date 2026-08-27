import { useCallback, useEffect, useRef, useState } from "react";
import { Send, Sparkles, X, ChevronRight, RefreshCw, AlertCircle, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASK_SHREE_QUESTIONS } from "@/content/registry";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { ChatWidgetContext } from "@/hooks/useChatWidget";
import { useLocation } from "react-router-dom";
import { streamShreeAI, type ChatMessage } from "@/lib/shree-ai";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── Types ────────────────────────────────────────────────────────────────────
type MessageStatus = "done" | "streaming" | "error";

interface Message {
  id: string;
  role: "user" | "shree";
  text: string;
  status: MessageStatus;
}

// ─── Greeting constant ────────────────────────────────────────────────────────
const GREETING =
  "Namaste 🙏 I am Shree AI, your educational companion for Garbh Sanskar and the Womb-to-World journey. Ask me anything about prenatal wellness, Garbh Samvad, nutrition, yoga, mantras, or how to join Divya Santan Foundation's mission. How may I guide you today?";

// ─── Simple inline markdown renderer ─────────────────────────────────────────
// Converts **bold**, bullet lists (- / •), and numbered lists to JSX.
function ShreeMessageText({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="flex flex-col gap-1">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-1" />;

        // Numbered list item
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
        if (numberedMatch) {
          return (
            <div key={idx} className="flex gap-2">
              <span className="mt-0.5 shrink-0 font-semibold text-primary/80 text-xs">
                {numberedMatch[1]}.
              </span>
              <span className="text-sm leading-relaxed">
                <InlineBold text={numberedMatch[2]} />
              </span>
            </div>
          );
        }

        // Bullet list item (- or •)
        if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
          const content = trimmed.slice(2);
          return (
            <div key={idx} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span className="text-sm leading-relaxed">
                <InlineBold text={content} />
              </span>
            </div>
          );
        }

        // Section heading (ends with : and is short)
        if (trimmed.endsWith(":") && trimmed.length < 60) {
          return (
            <p key={idx} className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary/70">
              {trimmed}
            </p>
          );
        }

        // Normal paragraph
        return (
          <p key={idx} className="text-sm leading-relaxed">
            <InlineBold text={trimmed} />
          </p>
        );
      })}
    </div>
  );
}

// Renders **bold** text segments inline
function InlineBold({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

// ─── Main widget ──────────────────────────────────────────────────────────────
/**
 * AskShreeChatWidget
 * ------------------
 * Global left-side sliding chat panel powered by the Groq API (Shree AI).
 * Wraps children and provides ChatWidgetContext for open/close/toggle from anywhere.
 *
 * Features:
 * • Streaming token-by-token responses with live cursor
 * • Full conversation history passed to model for context
 * • Abort ongoing stream when user sends a new message
 * • Inline markdown rendering (bold, bullet lists, numbered lists)
 * • Error state with retry
 * • Quick question chips
 * • Keyboard shortcuts: Escape to close
 */
export function AskShreeChatWidget({ children }: { children: React.ReactNode }) {
  const { t, lang } = useI18n();
  const chat = t.askShree.chat;
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  // ── State ─────────────────────────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "greeting", role: "shree", text: GREETING, status: "done" },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  // ── Refs ──────────────────────────────────────────────────────────────────
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Conversation history for API ──────────────────────────────────────────
  // Keep a parallel array of API-format messages for context
  const historyRef = useRef<ChatMessage[]>([]);

  // ── Effects ───────────────────────────────────────────────────────────────

  // Reset on language change
  useEffect(() => {
    setMessages([{ id: "greeting", role: "shree", text: GREETING, status: "done" }]);
    historyRef.current = [];
  }, [lang]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 350);
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // ── Core send/stream logic ────────────────────────────────────────────────
  const sendMessage = useCallback(
    async (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || isStreaming) return;

      // Abort any in-flight stream
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      setInput("");

      // Append user message
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmed,
        status: "done",
      };
      setMessages((prev) => [...prev, userMsg]);

      // Track in history
      historyRef.current = [
        ...historyRef.current,
        { role: "user", content: trimmed },
      ];

      // Create streaming assistant message placeholder
      const assistantId = `shree-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "shree", text: "", status: "streaming" },
      ]);
      setIsStreaming(true);

      let fullResponse = "";

      await streamShreeAI(
        historyRef.current,
        // onChunk — called for each streamed token
        (chunk) => {
          fullResponse += chunk;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, text: fullResponse, status: "streaming" }
                : m,
            ),
          );
        },
        // onDone
        () => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, status: "done" } : m,
            ),
          );
          // Store completed response in history for next turn
          if (fullResponse) {
            historyRef.current = [
              ...historyRef.current,
              { role: "assistant", content: fullResponse },
            ];
          }
          setIsStreaming(false);
        },
        // onError
        (errorMsg) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    text: `I encountered an issue: ${errorMsg}\n\nPlease try again or contact Divya Santan Foundation directly at contact@divyasantan.org`,
                    status: "error",
                  }
                : m,
            ),
          );
          setIsStreaming(false);
        },
        abortRef.current.signal,
      );
    },
    [isStreaming],
  );

  const stopStreaming = () => {
    abortRef.current?.abort();
    setIsStreaming(false);
    setMessages((prev) =>
      prev.map((m) =>
        m.status === "streaming" ? { ...m, status: "done" } : m,
      ),
    );
  };

  const clearChat = () => {
    abortRef.current?.abort();
    setIsStreaming(false);
    historyRef.current = [];
    setMessages([{ id: "greeting", role: "shree", text: GREETING, status: "done" }]);
  };

  // ── Context value ─────────────────────────────────────────────────────────
  const ctx = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v),
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <ChatWidgetContext.Provider value={ctx}>
      {children}

      {/* ── Floating trigger button (mobile only) ─────────────────────── */}
      {isMobile && (
        <button
          id="ask-shree-widget-trigger"
          type="button"
          aria-label="Open Ask Shree AI chat"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className={cn(
            "group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full px-5 py-3.5",
            "bg-gradient-to-r from-secondary to-primary text-primary-foreground",
            "shadow-[0_4px_24px_-4px_oklch(0.648_0.182_48.5/0.55)]",
            "transition-all duration-300 hover:shadow-[0_6px_32px_-4px_oklch(0.648_0.182_48.5/0.7)]",
            "hover:scale-105 active:scale-100",
            isOpen && "opacity-0 pointer-events-none scale-90",
          )}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping [animation-duration:2.4s]" />
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <span className="relative text-sm font-medium tracking-wide">{t.cta.askShree}</span>
          <ChevronRight className="relative h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      )}

      {/* ── Backdrop ────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-[350ms]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      {/* ── Chat panel ──────────────────────────────────────────────────── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Ask Shree AI chat"
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-full max-w-[430px] flex-col",
          "bg-background shadow-[4px_0_40px_-8px_oklch(0.2_0.05_30/0.3)]",
          "transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* ── Panel Header ─────────────────────────────────────────────── */}
        <div className="relative flex items-center gap-3 border-b border-border bg-gradient-to-r from-secondary/95 to-primary/90 px-5 py-4 shrink-0">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 opacity-10 [background:radial-gradient(ellipse_at_right,white_0%,transparent_70%)]" />

          {/* Avatar */}
          <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/30">
            <Sparkles className="h-4.5 w-4.5 text-white" strokeWidth={1.5} />
            {/* Live indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-secondary bg-green-400" />
          </span>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white leading-tight">{chat.name}</p>
            <p className="text-[0.68rem] text-white/70 leading-tight">{chat.role}</p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1">
            {/* Clear chat */}
            <button
              type="button"
              onClick={clearChat}
              aria-label="Clear conversation"
              title="Clear conversation"
              className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/15 hover:text-white"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
            {/* Close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Ask Shree AI chat"
              className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Messages area ────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5 scroll-smooth">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "animate-rise flex flex-col max-w-[90%] gap-1",
                msg.role === "user" ? "self-end items-end" : "self-start items-start",
              )}
            >
              {/* Bubble */}
              <div
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : msg.status === "error"
                    ? "rounded-bl-sm bg-destructive/10 text-destructive border border-destructive/20"
                    : "rounded-bl-sm bg-accent text-accent-foreground",
                )}
              >
                {msg.role === "user" ? (
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                ) : (
                  <>
                    {msg.status === "error" && (
                      <div className="mb-1.5 flex items-center gap-1.5 text-destructive">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span className="text-xs font-medium">Connection issue</span>
                      </div>
                    )}
                    <ShreeMessageText text={msg.text || "…"} />
                    {/* Streaming cursor */}
                    {msg.status === "streaming" && (
                      <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-primary/70 align-middle" />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* ── Quick question chips ─────────────────────────────────────── */}
        <div className="shrink-0 border-t border-border bg-muted/40 px-4 pt-3 pb-2">
          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
            Suggested questions
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ASK_SHREE_QUESTIONS.map(({ id }) => (
              <button
                key={id}
                type="button"
                disabled={isStreaming}
                onClick={() => sendMessage(t.askShree.questions[id].question)}
                className="cursor-pointer rounded-full border border-border bg-background px-3 py-1 text-[0.7rem] text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t.askShree.questions[id].question}
              </button>
            ))}
          </div>
        </div>

        {/* ── Input area ───────────────────────────────────────────────── */}
        <div className="shrink-0 border-t border-border bg-background px-4 py-4">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isStreaming ? "Shree AI is responding…" : chat.placeholder}
              aria-label={chat.inputLabel}
              disabled={isStreaming}
              className="h-11 flex-1 rounded-full border border-input bg-muted/40 px-4 text-sm outline-none transition-colors focus:border-primary/60 focus:bg-background disabled:opacity-60"
            />

            {isStreaming ? (
              /* Stop button while streaming */
              <button
                type="button"
                onClick={stopStreaming}
                aria-label="Stop response"
                title="Stop response"
                className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-secondary/15 text-secondary transition-colors hover:bg-secondary/25"
              >
                <Square className="h-4 w-4 fill-current" />
              </button>
            ) : (
              /* Send button */
              <Button
                type="submit"
                variant="hero"
                size="icon"
                aria-label={chat.sendLabel}
                disabled={!input.trim()}
                className="h-11 w-11 shrink-0 rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            )}
          </form>

          {/* Disclaimer */}
          <p className="mt-2.5 text-[0.63rem] leading-relaxed text-muted-foreground">
            {chat.disclaimer}
          </p>
        </div>
      </aside>
    </ChatWidgetContext.Provider>
  );
}
