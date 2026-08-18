import { useEffect, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SAMPLE_QUESTIONS = [
  "What should I learn before pregnancy?",
  "What is Garbh Samvad?",
  "What should I learn during the 5th month?",
  "What role can the father play?",
  "Show me relevant learning resources.",
];

const MOCK_ANSWERS: Record<string, string> = {
  "What should I learn before pregnancy?":
    "Preconception learning usually begins three to six months ahead. Explore the Pre-Conception module in Learn: daily routine, sattvic diet, rest, gentle movement, and preparing the home environment together as a couple.",
  "What is Garbh Samvad?":
    "Garbh Samvad is the practice of conscious communication with the unborn child — speaking, reading, singing, or simply sitting in stillness each day. Our Knowledge Centre has a short guide with daily practices.",
  "What should I learn during the 5th month?":
    "Month five in our month-by-month guide covers hearing development, gentle music and mantra listening, iron- and calcium-rich sattvic food, restful sleep posture, and a short daily Garbh Samvad routine.",
  "What role can the father play?":
    "A great deal. Fathers shape the emotional environment: shared learning, reading aloud, calm conversation, help with daily work, and attending classes together. See Father & Family in Learn.",
  "Show me relevant learning resources.":
    "Start with the Foundation Course, the Knowledge Centre articles on Garbh Samvad and month-by-month learning, and the free weekly classes — all available in Hindi and English.",
};

const FALLBACK =
  "Thank you for asking. In this demo, Shree AI responds to the example questions shown. In the full platform it will guide you to relevant lessons, articles and classes from our Knowledge Centre.";

type Msg = { role: "user" | "shree"; text: string };

export function AskShreeChat({
  className,
  externalQuestion,
}: {
  className?: string;
  externalQuestion?: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "shree",
      text: "Namaste 🙏 I am Shree, your educational companion for Garbh Sanskar. Ask me what to learn, or pick one of the questions below.",
    },
  ]);
  const [input, setInput] = useState("");

  const ask = (question: string) => {
    const q = question.trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "shree", text: MOCK_ANSWERS[q] ?? FALLBACK }]);
    }, 450);
  };

  useEffect(() => {
    if (externalQuestion) {
      ask(externalQuestion);
    }
  }, [externalQuestion]);


  return (
    <div className={cn("surface-card flex flex-col overflow-hidden p-0", className)}>
      <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-5 py-4">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary">
          <Sparkles className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-sm text-ink">Ask Shree AI</p>
          <p className="text-xs text-muted-foreground">Educational companion · demo</p>
        </div>
      </div>

      <div className="flex max-h-[26rem] min-h-[16rem] flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "animate-rise max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
              m.role === "user"
                ? "self-end bg-primary text-primary-foreground"
                : "self-start bg-secondary text-ink",
            )}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="border-t border-border px-5 py-4">
        <div className="flex flex-wrap gap-2">
          {SAMPLE_QUESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => ask(q)}
              className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              {q}
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
            placeholder="Ask about learning Garbh Sanskar…"
            aria-label="Ask Shree AI a question"
            className="h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary/60"
          />
          <Button type="submit" variant="hero" size="icon" aria-label="Send question">
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="mt-3 text-[0.7rem] leading-relaxed text-muted-foreground">
          Shree AI provides educational guidance and does not replace professional medical
          consultation.
        </p>
      </div>
    </div>
  );
}
