/**
 * BlogGrid — responsive 1→2→3 column grid of BlogCards.
 * Handles the empty state when no articles match the active filter/search.
 */

import { BookOpen } from "lucide-react";
import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/types/blog";

interface BlogGridProps {
  posts: BlogPost[];
  onClearFilters?: () => void;
}

export function BlogGrid({ posts, onClearFilters }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-muted">
          <BookOpen className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg text-ink">No articles found</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
          Try adjusting your search or selecting a different category.
        </p>
        {onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-5 cursor-pointer rounded-full border border-primary/35 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/8"
          >
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Blog articles"
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} variant="card" />
      ))}
    </div>
  );
}
