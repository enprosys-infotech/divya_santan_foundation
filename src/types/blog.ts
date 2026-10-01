/**
 * Blog system types for Divya Santan Foundation.
 *
 * Metadata is kept separate from article content. The content lives in
 * public/Blogs/*.md and is fetched at runtime; this interface describes
 * the statically-known metadata maintained in src/data/blogs.ts.
 */

export type BlogLanguage = "hi" | "en" | "mixed";

export type BlogCategory =
  | "Garbh Sanskar"
  | "Science"
  | "Music and Wellbeing"
  | "Parenthood and Values"
  | "Culture and Philosophy"
  | "Nation Building";

export interface BlogPost {
  /** URL-friendly unique identifier. Must match the `slug` frontmatter field. */
  slug: string;
  /** Full article title (supports Hindi and English). */
  title: string;
  /** Short summary shown on cards and article headers (1–2 sentences). */
  excerpt: string;
  /** Thematic category used for filtering. */
  category: BlogCategory;
  /** Primary language of the article. */
  language: BlogLanguage;
  /** Author name(s). Optional but shown when available. */
  author?: string;
  /** ISO date string (YYYY-MM or YYYY-MM-DD). Displayed on cards. */
  publishedAt?: string;
  /** Human-readable estimated reading time, e.g. "5 min read". */
  readingTime?: string;
  /** Path to a cover image inside /public, e.g. "/assets/cover-blog.jpg". Optional. */
  coverImage?: string;
  /** Public path to the markdown file, e.g. "/Blogs/01-garbh-sanskar-ka-mahatva.md". */
  contentPath: string;
  /** Whether to feature this post prominently at the top of the listing. */
  featured?: boolean;
  /** Free-form tags for related-articles matching. */
  tags?: string[];
  /**
   * When true the article contains claims that require editorial/medical review
   * before public publication. Shown as a notice on the detail page.
   */
  reviewRequired?: boolean;
}

/** A lightweight card-safe subset used where the full interface is unnecessary. */
export type BlogCardData = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "category" | "language" | "author" | "publishedAt" | "readingTime" | "coverImage" | "featured" | "tags"
>;
