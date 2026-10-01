/**
 * BlogContent — renders a fetched Markdown string as styled HTML.
 *
 * Uses react-markdown with remark-gfm (tables, strikethrough, task lists).
 * All styles are applied via Tailwind utilities; no external CSS prose plugin.
 *
 * Devanagari content is handled by the `font-deva` utility class scoped to
 * the article language, matching the site's existing typography system.
 */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SmartImage } from "@/components/site/SmartImage";
import { cn } from "@/lib/utils";

/* ── Heading anchor helper ─────────────────────────────────────────────── */

function toId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/* ── Custom component map ──────────────────────────────────────────────── */

const components: React.ComponentProps<typeof ReactMarkdown>["components"] = {
  // Headings
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 text-2xl leading-tight text-ink first:mt-0 sm:text-3xl" id={toId(String(children))}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-9 mb-3 text-xl leading-snug text-ink sm:text-2xl" id={toId(String(children))}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-7 mb-2 text-lg leading-snug text-ink" id={toId(String(children))}>
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-5 mb-2 text-base font-semibold text-ink">{children}</h4>
  ),

  // Body
  p: ({ children }) => (
    <p className="mb-5 text-base leading-[1.85] text-ink/85">{children}</p>
  ),

  // Blockquote — used for editorial notes
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-gold/60 bg-accent/50 px-5 py-4 text-sm leading-relaxed text-ink/75 italic">
      {children}
    </blockquote>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="mb-5 ml-5 space-y-1.5 list-disc marker:text-primary/60">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 ml-5 space-y-1.5 list-decimal marker:text-primary/60">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-[1.8] text-ink/85">{children}</li>
  ),

  // Inline
  strong: ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-ink/80">{children}</em>
  ),

  // Code
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block rounded-lg bg-muted px-4 py-3 font-mono text-sm text-ink/80 overflow-x-auto">
          {children}
        </code>
      );
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-secondary">
        {children}
      </code>
    );
  },

  // Horizontal rule
  hr: () => (
    <hr className="my-8 border-border" />
  ),

  // Links
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-primary underline underline-offset-2 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    >
      {children}
    </a>
  ),

  // Images
  img: ({ src, alt }) => (
    <span className="my-6 block overflow-hidden rounded-xl">
      <SmartImage
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="w-full object-cover"
      />
    </span>
  ),

  // Tables (via remark-gfm)
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-accent text-xs uppercase tracking-wide text-muted-foreground">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }) => <tr className="hover:bg-muted/30">{children}</tr>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-medium text-ink/70">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-ink/80">{children}</td>
  ),
};

/* ── BlogContent ───────────────────────────────────────────────────────── */

interface BlogContentProps {
  content: string;
  language?: "hi" | "en" | "mixed";
  className?: string;
}

export function BlogContent({ content, language, className }: BlogContentProps) {
  return (
    <article
      lang={language === "hi" ? "hi" : "en"}
      className={cn(
        "mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16",
        // Apply Devanagari font to Hindi articles at the container level
        language === "hi" && "font-deva",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
