/**
 * BlogPage — /blog listing page.
 *
 * Sections:
 *   1. BlogHero        — page title and intro
 *   2. Featured post   — large BlogCard in "featured" variant
 *   3. BlogFilters     — category pills + search
 *   4. BlogGrid        — responsive 3-col card grid
 *
 * All filtering is client-side; no network calls after initial render.
 */

import { useEffect, useMemo, useState } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Section } from "@/components/site/SectionHeading";
import { BLOG_POSTS, getFeaturedBlog } from "@/data/blogs";
import type { BlogCategoryFilter } from "@/data/blogs";

export default function BlogPage() {
  /* ── SEO ──────────────────────────────────────────────────────────── */
  useEffect(() => {
    document.title =
      "Blog — Wisdom from Womb to World | Divya Santan Foundation";

    // Update meta description
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Explore research, traditional wisdom and evidence-informed insights on Garbh Sanskar, prenatal wellbeing, music, parenthood and nation building.",
    );
  }, []);

  /* ── Filter state ─────────────────────────────────────────────────── */
  const [activeCategory, setActiveCategory] =
    useState<BlogCategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = getFeaturedBlog();

  /* Non-featured posts shown in the grid */
  const gridPosts = useMemo(() => {
    return BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);
  }, [featuredPost.slug]);

  /* Apply category + search filters to the grid posts */
  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return gridPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.tags ?? []).some((tag) => tag.toLowerCase().includes(q)) ||
        (post.author ?? "").toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [gridPosts, activeCategory, searchQuery]);

  const handleClearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <>
      {/* 1. Hero */}
      <BlogHero />

      {/* 2. Featured post */}
      <Section className="pb-8 sm:pb-10">
        <div className="mb-6">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
            Featured Article
          </p>
        </div>
        <BlogCard post={featuredPost} variant="featured" />
      </Section>

      {/* 3. Filters + Grid */}
      <Section className="pt-2 sm:pt-4">
        <div className="mb-8">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
            All Articles
          </p>
          <BlogFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={gridPosts.length}
            filteredCount={filteredPosts.length}
          />
        </div>

        {/* 4. Grid */}
        <BlogGrid posts={filteredPosts} onClearFilters={handleClearFilters} />
      </Section>
    </>
  );
}
