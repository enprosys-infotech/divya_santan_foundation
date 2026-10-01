/**
 * RelatedBlogs — 2–3 card strip shown at the bottom of each article.
 * Uses the standard BlogCard component in "card" variant.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { Section } from "@/components/site/SectionHeading";
import type { BlogPost } from "@/types/blog";

interface RelatedBlogsProps {
  posts: BlogPost[];
}

export function RelatedBlogs({ posts }: RelatedBlogsProps) {
  if (posts.length === 0) return null;

  return (
    <Section className="border-t border-border bg-warm">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
          Continue Reading
        </p>
        <h2 className="mt-3 text-2xl text-ink sm:text-3xl">Related Articles</h2>
        <span className="mt-4 block h-px w-12 bg-gold/60" aria-hidden="true" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} variant="card" />
        ))}
      </div>

      {/* Back to blog CTA */}
      <div className="mt-10 text-center">
        <Link
          to="/knowledge?tab=articles"
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/35 px-5 py-2.5 text-sm text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          All Articles <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  );
}
