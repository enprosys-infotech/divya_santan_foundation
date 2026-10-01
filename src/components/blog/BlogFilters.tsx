/**
 * BlogFilters — category pill filters + search input for the blog listing.
 *
 * All filtering is done client-side with controlled React state; there is no
 * network call for filtering.
 */

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BLOG_CATEGORIES, type BlogCategoryFilter } from "@/data/blogs";

interface BlogFiltersProps {
  activeCategory: BlogCategoryFilter;
  onCategoryChange: (category: BlogCategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function BlogFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: BlogFiltersProps) {
  const hasActiveFilter = activeCategory !== "All" || searchQuery.length > 0;

  return (
    <div className="space-y-5">
      {/* ── Search ──────────────────────────────────────────────────── */}
      <div className="relative max-w-md">
        <label htmlFor="blog-search" className="sr-only">
          Search articles
        </label>
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="blog-search"
          type="search"
          placeholder="Search articles…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={cn(
            "w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-muted-foreground",
            "transition-colors duration-300 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
          )}
          aria-label="Search blog articles"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-0.5 text-muted-foreground transition-colors hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* ── Category pills ──────────────────────────────────────────── */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter articles by category"
      >
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              aria-pressed={isActive}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-1.5 text-xs transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Results count / clear ───────────────────────────────────── */}
      {hasActiveFilter && (
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>
            Showing {filteredCount} of {totalCount} articles
          </span>
          <button
            type="button"
            onClick={() => {
              onCategoryChange("All");
              onSearchChange("");
            }}
            className="cursor-pointer text-primary underline-offset-2 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
