/**
 * BlogDetailHeader — breadcrumb + article meta header on the detail page.
 * Sits above the article body and follows the PageHeader visual language:
 * mandala-veil overlay on a warm cream background.
 */

import { Link } from "react-router-dom";
import { ChevronRight, Clock, User, Calendar, AlertTriangle } from "lucide-react";
import { SmartImage } from "@/components/site/SmartImage";
import type { BlogPost } from "@/types/blog";
import { cn } from "@/lib/utils";

/* ── Breadcrumb ───────────────────────────────────────────────────────── */

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        <li>
          <Link
            to="/"
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3" />
        </li>
        <li>
          <Link
            to="/knowledge"
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
          >
            Knowledge Center
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3" />
        </li>
        <li className="line-clamp-1 max-w-[220px] text-ink" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}

/* ── Category badge ───────────────────────────────────────────────────── */

function CategoryBadge({ category }: { category: BlogPost["category"] }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-primary">
      {category}
    </span>
  );
}

/* ── Language badge ───────────────────────────────────────────────────── */

function LanguageBadge({ language }: { language: BlogPost["language"] }) {
  if (language === "en") return null;
  return (
    <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-secondary">
      हिंदी
    </span>
  );
}

/* ── BlogDetailHeader ─────────────────────────────────────────────────── */

export interface BlogDetailHeaderProps {
  post: BlogPost;
  className?: string;
}

export function BlogDetailHeader({ post, className }: BlogDetailHeaderProps) {
  return (
    <header
      className={cn(
        "mandala-veil border-b border-border bg-warm px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-3xl">
        <Breadcrumb title={post.title} />

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={post.category} />
          <LanguageBadge language={post.language} />
        </div>

        {/* Title */}
        <h1
          className={cn(
            "animate-rise mt-5 text-3xl leading-tight text-ink sm:text-4xl",
            post.language === "hi" && "font-deva",
          )}
        >
          {post.title}
        </h1>

        {/* Gold rule */}
        <span className="mt-5 block h-px w-16 bg-gold/70" aria-hidden="true" />

        {/* Excerpt */}
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground",
            post.language === "hi" && "font-deva",
          )}
        >
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          {post.author && (
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
              {post.author}
            </span>
          )}
          {post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
              {post.publishedAt}
            </span>
          )}
          {post.readingTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
              {post.readingTime}
            </span>
          )}
        </div>

        {/* Cover image (if present) */}
        {post.coverImage && (
          <div className="mt-8 overflow-hidden rounded-2xl">
            <SmartImage
              src={post.coverImage}
              alt={post.title}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full object-cover object-top"
            />
          </div>
        )}

        {/* Editorial review notice */}
        {post.reviewRequired && (
          <div
            role="note"
            aria-label="Editorial notice"
            className="mt-6 flex gap-3 rounded-xl border border-gold/40 bg-gold/8 px-4 py-3 text-xs leading-relaxed text-gold-foreground"
          >
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-gold"
              aria-hidden="true"
            />
            <p>
              This article is currently under editorial review. Some claims presented
              reflect the authors' perspective or traditional sources and may not
              represent established scientific consensus. Please consult qualified
              medical or research professionals for clinical guidance.
            </p>
          </div>
        )}
      </div>
    </header>
  );
}
