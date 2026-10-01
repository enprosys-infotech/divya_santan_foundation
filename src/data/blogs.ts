/**
 * Blog metadata registry — Divya Santan Foundation.
 *
 * Each entry describes one article. The actual article body lives in
 * public/Blogs/*.md and is fetched at runtime via src/lib/markdown.ts.
 *
 * To add a new blog:
 *   1. Drop the .md file into public/Blogs/ with a `slug` frontmatter field.
 *   2. Add a matching entry here.
 *   3. No other changes are required.
 */

import type { BlogPost } from "@/types/blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "garbh-sanskar-in-the-light-of-contemporary-science",
    title: "Garbh Sanskar in the Light of Contemporary Science",
    excerpt:
      "A rigorous, evidence-aligned narrative review examining how preconception care, maternal nutrition, yoga, mindfulness, music and prenatal bonding practices within Garbh Sanskar converge with modern biomedical and developmental science.",
    category: "Science",
    language: "en",
    author: "Dr. Anil Kumar Garg; Dr. Seema Garg",
    publishedAt: "2026-09",
    readingTime: "18 min read",
    coverImage: "/Blogs/lightOfCont.png",
    contentPath: "/Blogs/07-garbh-sanskar-in-the-light-of-contemporary-science.md",
    featured: true,
    tags: [
      "garbh sanskar",
      "science",
      "epigenetics",
      "prenatal",
      "maternal wellbeing",
      "DOHaD",
      "evidence-based",
    ],
    reviewRequired: true,
  },
  {
    slug: "garbh-sanskar-evidence-based-scientific-perspective",
    title: "Garbh Sanskar: An Evidence-Based Scientific Perspective",
    excerpt:
      "Dr. Anil Kumar Garg and Dr. Seema Garg present Garbh Sanskar as an integrative science harmonising epigenetics, neuroscience, endocrinology and ancient Vedic wisdom to support conscious prenatal development.",
    category: "Science",
    language: "en",
    author: "Dr. Anil Kumar Garg; Dr. Seema Garg",
    readingTime: "12 min read",
    coverImage: "/Blogs/garbhsanskarevidense.png",
    contentPath: "/Blogs/06-garbh-sanskar-evidence-based-scientific-perspective.md",
    featured: false,
    tags: [
      "garbh sanskar",
      "science",
      "epigenetics",
      "neuroscience",
      "prenatal",
      "Ayurveda",
    ],
    reviewRequired: true,
  },
  {
    slug: "garbh-sanskar-ka-mahatva",
    title: "गर्भ संस्कार का महत्व",
    excerpt:
      "गर्भ संस्कार भारतीय संस्कृति का एक महत्वपूर्ण भाग है। इसमें शिशु, माता, समाज और राष्ट्र — सभी के लिए लाभों की विस्तृत चर्चा की गई है।",
    category: "Garbh Sanskar",
    language: "hi",
    author: "Divya Santan Foundation",
    readingTime: "7 min read",
    coverImage: "/Blogs/garbh sanskar ka mahatva.png",
    contentPath: "/Blogs/01-garbh-sanskar-ka-mahatva.md",
    featured: false,
    tags: ["गर्भ संस्कार", "garbh sanskar", "शिशु विकास", "prenatal", "माता"],
    reviewRequired: true,
  },
  {
    slug: "sangeet-kya-hai-garbhavastha-mein-labh",
    title: "संगीत क्या है? संगीत के गर्भावस्था में लाभ",
    excerpt:
      "संगीत की न्यूरोकेमिकल कार्यप्रणाली और गर्भावस्था में इसके वैज्ञानिक लाभों की विस्तृत विवेचना — अनुशंसित भारतीय शास्त्रीय रागों सहित।",
    category: "Music and Wellbeing",
    language: "hi",
    author: "Dr. Seema Garg",
    readingTime: "8 min read",
    coverImage: "/Blogs/sangeetKyaHe.png",
    contentPath: "/Blogs/02-sangeet-kya-hai.md",
    featured: false,
    tags: [
      "संगीत",
      "music",
      "गर्भावस्था",
      "pregnancy",
      "wellbeing",
      "राग",
      "raga",
    ],
    reviewRequired: true,
  },
  {
    slug: "mata-pita-ka-shishu-ke-nirman-mein-yogdan",
    title: "माता-पिता का शिशु के निर्माण में योगदान",
    excerpt:
      "माता-पिता का शिशु के शारीरिक, मानसिक और आध्यात्मिक निर्माण में अतुलनीय योगदान है — गुणसूत्रों से लेकर संस्कारों तक की यह भावनात्मक और वैज्ञानिक यात्रा।",
    category: "Parenthood and Values",
    language: "hi",
    author: "Dr. Seema Garg",
    readingTime: "6 min read",
    coverImage: "/Blogs/Mata pita ka shishu.png",
    contentPath: "/Blogs/03-mata-pita-ka-shishu-ke-nirman-mein-yogdan.md",
    featured: false,
    tags: [
      "माता-पिता",
      "parenthood",
      "शिशु निर्माण",
      "संस्कार",
      "values",
      "family",
    ],
    reviewRequired: true,
  },
  {
    slug: "param-pita-parameshwar-ne-kyonki-rachna-srishti-ki",
    title: "परम पिता परमेश्वर ने क्योंकि रचना सृष्टि की",
    excerpt:
      "सृष्टि, जीवन और संतानोत्पत्ति के दार्शनिक एवं आध्यात्मिक आधार की विवेचना — प्रकृति, परिवार और सामाजिक सामंजस्य के संदर्भ में।",
    category: "Culture and Philosophy",
    language: "hi",
    author: "Dr. Anil Garg",
    readingTime: "7 min read",
    coverImage: "/Blogs/parampitaparmeshswar.png",
    contentPath: "/Blogs/04-param-pita-parameshwar-ne-kyonki-rachna-srishti-ki.md",
    featured: false,
    tags: [
      "दर्शन",
      "philosophy",
      "सृष्टि",
      "संतान",
      "culture",
      "spirituality",
      "family",
    ],
    reviewRequired: true,
  },
  {
    slug: "garbh-mein-vyakti-nirman-se-rashtra-nirman",
    title: "गर्भ में व्यक्ति निर्माण से राष्ट्र निर्माण",
    excerpt:
      "गर्भसंस्कार और व्यक्तित्व निर्माण के माध्यम से राष्ट्र निर्माण की दिशा में एक विचारोत्तेजक दृष्टिकोण — इतिहास, विज्ञान और संस्कृति के संगम पर।",
    category: "Nation Building",
    language: "hi",
    author: "Dr. Anil Garg",
    readingTime: "6 min read",
    coverImage: "/Blogs/vyaktiNirman Se rashtra.png",
    // No dedicated thumbnail provided — branded placeholder will be shown
    contentPath: "/Blogs/05-vyakti-nirman-se-rashtra-nirman.md",
    featured: false,
    tags: [
      "राष्ट्र निर्माण",
      "nation building",
      "व्यक्तित्व",
      "personality",
      "garbh sanskar",
      "epigenetics",
    ],
    reviewRequired: true,
  },
];

/** All unique categories present in the registry. */
export const BLOG_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
] as const;

export type BlogCategoryFilter = (typeof BLOG_CATEGORIES)[number];

/** Look up a blog post by its slug. Returns undefined if not found. */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Return the featured post, falling back to the first post in the list. */
export function getFeaturedBlog(): BlogPost {
  return BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
}

/**
 * Return related blogs for a given post.
 * Prefers posts sharing the same category, then falls back to tag overlap.
 * Always excludes the source post. Returns at most `limit` results.
 */
export function getRelatedBlogs(slug: string, limit = 3): BlogPost[] {
  const source = getBlogBySlug(slug);
  if (!source) return BLOG_POSTS.slice(0, limit);

  const others = BLOG_POSTS.filter((p) => p.slug !== slug);

  // Score each post: +2 for category match, +1 per shared tag
  const scored = others.map((post) => {
    let score = 0;
    if (post.category === source.category) score += 2;
    const sourceTags = source.tags ?? [];
    const postTags = post.tags ?? [];
    score += postTags.filter((t) => sourceTags.includes(t)).length;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}
