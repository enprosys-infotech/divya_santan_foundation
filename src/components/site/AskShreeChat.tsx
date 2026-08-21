import { useEffect, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASK_SHREE_QUESTIONS, type AskShreeQuestionId } from "@/content/registry";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "shree"; text: string };

export function AskShreeChat({
  className,
  externalQuestion,
}: {
  className?: string;
  /** Question id raised from elsewhere on the page, e.g. the homepage prompt list. */
  externalQuestion?: AskShreeQuestionId;
}) {
  const { t, lang } = useI18n();
  const chat = t.askShree.chat;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // Reset the transcript when the language changes so no stale copy survives the switch.
  useEffect(() => {
    setMessages([{ role: "shree", text: chat.greeting }]);
  }, [lang, chat.greeting]);

  const answerFor = (question: string) =>
    ASK_SHREE_QUESTIONS.map(({ id }) => t.askShree.questions[id]).find(
      (entry) => entry.question === question,
    )?.answer ?? chat.fallback;

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    setInput("");
    setMessages((current) => [...current, { role: "user", text: trimmed }]);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "shree", text: answerFor(trimmed) }]);
    }, 450);
  };

  useEffect(() => {
    if (externalQuestion) ask(t.askShree.questions[externalQuestion].question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalQuestion, lang]);

  return (
    <div className={cn("surface-card flex flex-col overflow-hidden p-0", className)}>
      <div className="flex items-center gap-3 border-b border-border bg-accent/60 px-5 py-4">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary">
          <Sparkles className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-sm text-ink">{chat.name}</p>
          <p className="text-xs text-muted-foreground">{chat.role}</p>
        </div>
      </div>

      <div className="flex max-h-[26rem] min-h-[16rem] flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
        {messages.map((message, i) => (
          <div
            key={i}
            className={cn(
              "animate-rise max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
              message.role === "user"
                ? "self-end bg-primary text-primary-foreground"
                : "self-start bg-accent text-accent-foreground",
            )}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex flex-wrap gap-2">
          {ASK_SHREE_QUESTIONS.map(({ id }) => (
            <button
              key={id}
              type="button"
              onClick={() => ask(t.askShree.questions[id].question)}
              className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              {t.askShree.questions[id].question}
            </button>
          ))}
        </div>
        <form
          className="mt-4 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={chat.placeholder}
            aria-label={chat.inputLabel}
            className="h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary/60"
          />
          <Button type="submit" variant="hero" size="icon" aria-label={chat.sendLabel}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="mt-3 text-[0.7rem] leading-relaxed text-muted-foreground">
          {chat.disclaimer}
        </p>
      </div>
    </div>
  );
}
