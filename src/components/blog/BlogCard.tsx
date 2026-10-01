/**
 * BlogCard — reusable card for the blog listing grid.
 * Follows the same CardShell + surface-card / interactive-surface pattern
 * used throughout the DSF site (src/components/site/Cards.tsx).
 */

import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import { SmartImage } from "@/components/site/SmartImage";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

/* ── Language badge ───────────────────────────────────────────────────── */

function LanguageBadge({ language }: { language: BlogPost["language"] }) {
  if (language === "en") return null; // English is the default — no badge needed
  return (
    <span className="inline-flex items-center rounded-full bg-secondary/10 px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.18em] text-secondary">
      हिंदी
    </span>
  );
}

/* ── Category badge ───────────────────────────────────────────────────── */

function CategoryBadge({ category }: { category: BlogPost["category"] }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-primary">
      {category}
    </span>
  );
}

/* ── Cover image ──────────────────────────────────────────────────────── */

function CoverImage({
  src,
  alt,
  featured,
}: {
  src?: string;
  alt: string;
  featured?: boolean;
}) {
  const aspectClass = featured ? "aspect-[16/7]" : "aspect-[16/9]";

  if (!src) {
    // Consistent branded placeholder when no cover image is supplied
    return (
      <div
        className={cn(
          "w-full overflow-hidden rounded-xl bg-warm",
          aspectClass,
        )}
        aria-hidden="true"
      >
        <div className="mandala-veil flex h-full w-full items-center justify-center">
          <span className="font-deva text-4xl text-primary/20">॥</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden rounded-xl", aspectClass)}>
      <SmartImage
        src={src}
        alt={alt}
        loading={featured ? "eager" : "lazy"}
        fetchPriority={featured ? "high" : "auto"}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}

/* ── BlogCard ─────────────────────────────────────────────────────────── */

export interface BlogCardProps {
  post: BlogPost;
  /** Visual variant — compact card or a wide featured banner. */
  variant?: "card" | "featured";
  className?: string;
}

export function BlogCard({ post, variant = "card", className }: BlogCardProps) {
  const to = `/blog/${post.slug}`;
  const isFeatured = variant === "featured";

  const containerCls = cn(
    "surface-card group block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4",
    isFeatured
      ? "overflow-hidden"
      : "flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] hover:border-[color-mix(in_oklab,var(--color-gold)_45%,transparent)]",
    className,
  );

  if (isFeatured) {
    return (
      <Link to={to} className={containerCls} aria-label={`Read: ${post.title}`}>
        {/* Wide two-column layout on md+ */}
        <div className="grid md:grid-cols-2">
          <CoverImage src={post.coverImage} alt={post.title} featured />
          <div className="flex flex-col justify-center p-7 sm:p-9">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold-foreground">
                Featured
              </span>
              <CategoryBadge category={post.category} />
              <LanguageBadge language={post.language} />
            </div>

            <h2 className="mt-4 text-2xl leading-snug text-ink sm:text-3xl">{post.title}</h2>

            <span className="mt-4 block h-px w-12 bg-gold/60" aria-hidden="true" />

            <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="h-3 w-3" />
                  {post.author}
                </span>
              )}
              {post.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
              )}
            </div>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-300 group-hover:text-secondary">
              Read Article <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Standard card
  return (
    <Link to={to} className={containerCls} aria-label={`Read: ${post.title}`}>
      <CoverImage src={post.coverImage} alt={post.title} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={post.category} />
          <LanguageBadge language={post.language} />
        </div>

        <h3 className="mt-3 text-lg leading-snug text-ink">{post.title}</h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.7rem] text-muted-foreground">
          {post.author && (
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author.split(";")[0].trim()}
            </span>
          )}
          {post.publishedAt && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.publishedAt}
            </span>
          )}
          {post.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary transition-colors duration-300 group-hover:text-secondary">
          Read More <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
