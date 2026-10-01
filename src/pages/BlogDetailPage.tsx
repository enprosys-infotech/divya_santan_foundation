/**
 * BlogDetailPage — /blog/:slug
 *
 * Fetches the markdown file for the requested slug at mount time, renders the
 * article, and shows related posts below.  Handles loading, error and not-found
 * states cleanly without crashing the rest of the app.
 */

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogDetailHeader } from "@/components/blog/BlogDetailHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogShareButtons } from "@/components/blog/BlogShareButtons";
import { RelatedBlogs } from "@/components/blog/RelatedBlogs";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import { fetchMarkdown } from "@/lib/markdown";
import type { BlogPost } from "@/types/blog";

/* ── Loading skeleton ─────────────────────────────────────────────────── */

function LoadingSkeleton() {
  return (
    <div className="animate-pulse" aria-busy="true" aria-label="Loading article">
      {/* Header skeleton */}
      <div className="border-b border-border bg-warm px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="mx-auto w-full max-w-3xl space-y-4">
          <div className="h-3 w-32 rounded-full bg-muted" />
          <div className="h-8 w-3/4 rounded-xl bg-muted" />
          <div className="h-4 w-full rounded-lg bg-muted" />
          <div className="h-4 w-5/6 rounded-lg bg-muted" />
          <div className="flex gap-3">
            <div className="h-3 w-24 rounded-full bg-muted" />
            <div className="h-3 w-20 rounded-full bg-muted" />
          </div>
        </div>
      </div>
      {/* Body skeleton */}
      <div className="mx-auto w-full max-w-3xl space-y-4 px-5 py-12 sm:px-8 sm:py-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded-lg bg-muted"
            style={{ width: `${70 + Math.random() * 30}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Not found ────────────────────────────────────────────────────────── */

function ArticleNotFound({ slug }: { slug: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">Article Not Found</p>
      <h1 className="mt-4 text-3xl text-ink">We couldn't find this article</h1>
      <p className="mt-3 max-w-md text-base text-muted-foreground">
        The article <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-secondary">{slug}</code> doesn't exist or may have been moved.
      </p>
      <Link
        to="/knowledge"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/35 px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Knowledge Center
      </Link>
    </div>
  );
}

/* ── Fetch error ──────────────────────────────────────────────────────── */

function ArticleFetchError({
  post,
  onRetry,
}: {
  post: BlogPost;
  onRetry: () => void;
}) {
  return (
    <div>
      <BlogDetailHeader post={post} />
      <div className="mx-auto w-full max-w-3xl px-5 py-16 text-center sm:px-8">
        <p className="text-base text-muted-foreground">
          The article content couldn't be loaded right now.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onRetry}
            className="cursor-pointer rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/knowledge?tab=articles"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── BlogDetailPage ───────────────────────────────────────────────────── */

type LoadState = "idle" | "loading" | "success" | "error";

export default function BlogDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();

  const post = getBlogBySlug(slug);
  const related = post ? getRelatedBlogs(slug, 3) : [];

  const [content, setContent] = useState<string>("");
  const [loadState, setLoadState] = useState<LoadState>("idle");

  const loadContent = () => {
    if (!post) return;
    setLoadState("loading");
    fetchMarkdown(post.contentPath)
      .then(({ content: md }) => {
        setContent(md);
        setLoadState("success");
      })
      .catch(() => setLoadState("error"));
  };

  useEffect(() => {
    if (!post) return;
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  /* ── SEO ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!post) {
      document.title = "Article Not Found | Divya Santan Foundation";
      return;
    }

    document.title = `${post.title} | Divya Santan Foundation`;

    // Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", post.excerpt);

    // Open Graph title
    let ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", post.title);

    // Open Graph description
    let ogDesc = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", post.excerpt);

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/blog/${post.slug}`);
  }, [post]);

  /* ── Render states ──────────────────────────────────────────────── */

  if (!post) return <ArticleNotFound slug={slug} />;

  if (loadState === "loading" || loadState === "idle") {
    return <LoadingSkeleton />;
  }

  if (loadState === "error") {
    return <ArticleFetchError post={post} onRetry={loadContent} />;
  }

  return (
    <>
      {/* Article header */}
      <BlogDetailHeader post={post} />

      {/* Markdown body */}
      <BlogContent content={content} language={post.language} />

      {/* Share + back link row */}
      <div className="mx-auto w-full max-w-3xl border-t border-border px-5 pb-8 pt-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/knowledge?tab=articles"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Articles
          </Link>
          <BlogShareButtons title={post.title} />
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && <RelatedBlogs posts={related} />}
    </>
  );
}
