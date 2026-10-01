import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  BookOpen,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  FlaskConical,
  LibraryBig,
  Map,
  MessageCircleQuestion,
  Newspaper,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { CTASection } from "@/components/site/Cards";
import { SmartImage } from "@/components/site/SmartImage";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import ScienceOfGarbhSanskarPage from "@/pages/ScienceOfGarbhSanskarPage";
import {
  KNOWLEDGE_GUIDES,
  KNOWLEDGE_QA,
  KNOWLEDGE_RESOURCES,
  SCIENTIFIC_REFERENCES,
} from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import type { GuideStageCopy } from "@/i18n/types";
import { useExternalAskShree } from "@/hooks/useExternalAskShree";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BLOG_POSTS, getFeaturedBlog } from "@/data/blogs";
import type { BlogCategoryFilter } from "@/data/blogs";

/* ── Types ─────────────────────────────────────────────────────────────── */
type KnowledgeTab = "scienceOfGarbhSanskar" | "articles" | "news" | "guides" | "qa" | "resources" | "scientific";

/* ── Tab config ─────────────────────────────────────────────────────────── */
const TABS: {
  id: KnowledgeTab;
  icon: React.ElementType;
  accent: string;
  border: string;
  bg: string;
  text: string;
}[] = [
  {
    id: "scienceOfGarbhSanskar",
    icon: BookOpenText,
    accent: "var(--color-primary)",
    border: "border-primary",
    bg: "bg-primary/8",
    text: "text-primary",
  },
  {
    id: "articles",
    icon: BookOpen,
    accent: "var(--color-primary)",
    border: "border-primary",
    bg: "bg-primary/8",
    text: "text-primary",
  },
  {
    id: "news",
    icon: Newspaper,
    accent: "var(--color-secondary)",
    border: "border-secondary",
    bg: "bg-secondary/8",
    text: "text-secondary",
  },
  {
    id: "guides",
    icon: Map,
    accent: "var(--color-green)",
    border: "border-green",
    bg: "bg-green/8",
    text: "text-green",
  },
  {
    id: "qa",
    icon: MessageCircleQuestion,
    accent: "var(--color-gold)",
    border: "border-gold",
    bg: "bg-gold/10",
    text: "text-gold",
  },
  {
    id: "resources",
    icon: LibraryBig,
    accent: "var(--color-secondary)",
    border: "border-secondary",
    bg: "bg-secondary/8",
    text: "text-secondary",
  },
  {
    id: "scientific",
    icon: FlaskConical,
    accent: "var(--color-indigo)",
    border: "border-indigo",
    bg: "bg-indigo/8",
    text: "text-indigo",
  },
];

function ScienceOfGarbhSanskarTab() {
  return <ScienceOfGarbhSanskarPage />;
}

/* ──────────────────────────────────────────────────────────────────────────
   ArticlesTab — powered by the real blog system (public/Blogs/*.md)
   ─────────────────────────────────────────────────────────────────────── */
function ArticlesTab() {
  const { t } = useI18n();
  const copy = t.knowledge;

  const [activeCategory, setActiveCategory] = useState<BlogCategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = getFeaturedBlog();

  /* non-featured posts shown in the grid */
  const gridPosts = useMemo(
    () => BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug),
    [featuredPost.slug],
  );

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
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary">
          {copy.articlesSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.articlesSection.title}</h2>
      </div>

      {/* Featured post */}
      <div>
        <p className="mb-4 text-[0.65rem] uppercase tracking-[0.22em] text-secondary">
          Featured Article
        </p>
        <BlogCard post={featuredPost} variant="featured" />
      </div>

      {/* Filters */}
      <BlogFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={gridPosts.length}
        filteredCount={filteredPosts.length}
      />

      {/* Grid or empty state */}
      {filteredPosts.length === 0 ? (
        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center">
          <BookOpen className="mb-4 h-8 w-8 text-muted-foreground" aria-hidden="true" />
          <p className="text-base text-ink">No articles found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different category or clear your search.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="mt-4 cursor-pointer rounded-full border border-primary/35 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/8"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} variant="card" />
          ))}
        </div>
      )}
    </div>
  );
}

const NEWS_ARTICLE_IMAGES = [
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.32 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.33 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.35 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.37 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.37 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.38 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.38 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.39 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.40 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.41 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.42 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.43 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.44 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.46 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.46 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.49 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.49 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.51 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.52 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.52 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.54 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.55 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.56 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.58 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.06.59 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.01 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.02 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.03 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.03 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.08 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.09 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.11 PM (1).jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.11 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.12 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.14 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.15 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.16 PM.jpeg",
  "/Articles/WhatsApp Image 2026-09-23 at 2.07.17 PM.jpeg",
];

function NewsTab() {
  const { t } = useI18n();
  const copy = t.knowledge.newsSection;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedImage = selectedIndex === null ? null : NEWS_ARTICLE_IMAGES[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedIndex !== null && !dialog.open) dialog.showModal();
    if (selectedIndex === null && dialog.open) dialog.close();
  }, [selectedIndex]);

  return (
    <div className="animate-rise -mx-5 -mt-12 space-y-12 sm:-mx-8 sm:-mt-16 sm:space-y-16">
      <section className="overflow-hidden bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-14 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">{copy.title}</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-secondary-foreground/80 sm:text-lg">
              {copy.intro}
            </p>
            <a
              href="#news-archive"
              className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-gold/70 pb-1 text-sm font-semibold text-gold transition-colors hover:text-secondary-foreground"
            >
              {copy.browseLabel}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setSelectedIndex(0)}
            aria-label={`${copy.openImageLabel} 1`}
            className="group relative mx-auto block w-full max-w-sm cursor-zoom-in bg-background p-2 text-left shadow-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-offset-4"
          >
            <span className="absolute -right-2 -top-2 z-10 bg-gold px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-foreground">
              {copy.archiveLabel}
            </span>
            <span className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-white">
              <SmartImage
                src={encodeURI(NEWS_ARTICLE_IMAGES[0])}
                alt={`${copy.imageAlt} 1`}
                className="h-full w-full object-contain"
                fetchPriority="high"
                loading="eager"
              />
            </span>
            <span className="flex items-center justify-between px-2 pt-3 text-xs font-semibold uppercase tracking-wider text-secondary">
              <span>{copy.archiveLabel}</span>
              <span>01 / {NEWS_ARTICLE_IMAGES.length}</span>
            </span>
          </button>
        </div>
      </section>

      <section id="news-archive" className="scroll-mt-36 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4 sm:mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {copy.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.archiveTitle}</h3>
            </div>
            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {NEWS_ARTICLE_IMAGES.length} {copy.itemsLabel}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {NEWS_ARTICLE_IMAGES.slice(1).map((image, index) => {
              const imageIndex = index + 1;
              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedIndex(imageIndex)}
                  aria-label={`${copy.openImageLabel} ${imageIndex + 1}`}
                  className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden border border-border bg-white p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-offset-4"
                >
                  <SmartImage
                    src={encodeURI(image)}
                    alt={`${copy.imageAlt} ${imageIndex + 1}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-2 right-2 bg-background/95 px-2 py-1 text-[0.65rem] font-semibold tabular-nums text-secondary">
                    {String(imageIndex + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        aria-label={copy.viewerLabel}
        onClose={() => setSelectedIndex(null)}
        className="m-auto h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 text-white backdrop:bg-ink/95"
      >
        {selectedImage && selectedIndex !== null && (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-4 py-5 sm:px-8">
            <div className="flex w-full max-w-6xl items-center justify-between gap-4">
              <p className="text-sm font-medium text-white/80">
                {copy.imageAlt} {selectedIndex + 1} <span aria-hidden="true">/</span>{" "}
                {NEWS_ARTICLE_IMAGES.length}
              </p>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label={copy.closeLabel}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/15"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <SmartImage
              src={encodeURI(selectedImage)}
              alt={`${copy.imageAlt} ${selectedIndex + 1}`}
              className="max-h-[calc(100dvh-9rem)] max-w-full object-contain"
            />
            <div className="flex w-full max-w-6xl justify-between">
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex + NEWS_ARTICLE_IMAGES.length - 1) % NEWS_ARTICLE_IMAGES.length,
                  )
                }
                aria-label={copy.previousLabel}
                className="flex min-h-11 items-center gap-2 px-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                {copy.previousLabel}
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex + 1) % NEWS_ARTICLE_IMAGES.length)}
                aria-label={copy.nextLabel}
                className="flex min-h-11 items-center gap-2 px-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                {copy.nextLabel}
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   GuidesTab
   ─────────────────────────────────────────────────────────────────────── */
function GuidesTab() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const content = t.content;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const STAGE_COLORS = [
    { border: "border-primary", bg: "bg-primary/8", text: "text-primary", dot: "bg-primary" },
    { border: "border-green", bg: "bg-green/8", text: "text-green", dot: "bg-green" },
    { border: "border-gold", bg: "bg-gold/15", text: "text-gold-foreground", dot: "bg-gold" },
    {
      border: "border-secondary",
      bg: "bg-secondary/8",
      text: "text-secondary",
      dot: "bg-secondary",
    },
    {
      border: "border-indigo",
      bg: "bg-indigo/10",
      text: "text-indigo",
      dot: "bg-indigo",
    },
  ];

  // color cycle with 8 entries to cover all guides
  const STAGE_COLORS_EXTENDED = [
    ...STAGE_COLORS,
    { border: "border-primary", bg: "bg-primary/8", text: "text-primary", dot: "bg-primary" },
    { border: "border-green", bg: "bg-green/8", text: "text-green", dot: "bg-green" },
    { border: "border-gold", bg: "bg-gold/15", text: "text-gold-foreground", dot: "bg-gold" },
    { border: "border-secondary", bg: "bg-secondary/8", text: "text-secondary", dot: "bg-secondary" },
  ];

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-green">
          {copy.guidesSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.guidesSection.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          {copy.guidesSection.subtitle}
        </p>
      </div>

      {/* Stage stepper */}
      <div className="space-y-4">
        {KNOWLEDGE_GUIDES.map((guide, idx) => {
          const guideData = content.knowledgeGuides[guide.id] as GuideStageCopy;
          const colors = STAGE_COLORS_EXTENDED[idx % STAGE_COLORS_EXTENDED.length]!;
          const isOpen = expandedId === guide.id;
          const isDosAndDonts = guide.id === "dosAndDonts";

          return (
            <div
              key={guide.id}
              className={cn(
                "surface-card overflow-hidden transition-all duration-300",
                isOpen && `border-l-4 ${colors.border}`,
                isDosAndDonts && isOpen && "border-l-4 border-secondary",
              )}
            >
              {/* Header row */}
              <button
                type="button"
                className="flex w-full cursor-pointer items-start gap-4 p-6 text-left"
                onClick={() => setExpandedId(isOpen ? null : guide.id)}
                aria-expanded={isOpen}
              >
                {/* Stage badge */}
                <span
                  className={cn(
                    "mt-0.5 shrink-0 rounded-full px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-wider",
                    colors.bg,
                    colors.text,
                  )}
                >
                  {guideData.label}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-normal text-ink sm:text-lg">{guideData.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{guideData.subtitle}</p>
                </div>
                <span className="ml-2 mt-1 shrink-0 text-muted-foreground">
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>

              {/* Expanded content — Dos & Don'ts special layout */}
              {isOpen && isDosAndDonts && (
                <div className="journey-panel-content border-t border-border px-6 pb-8 pt-5">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {guideData.body}
                  </p>

                  {/* Two-column DOs / DON'Ts grid */}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {/* DOs column */}
                    <div className="rounded-xl border border-green/30 bg-green/5 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green text-[0.7rem] font-bold text-white">✓</span>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-green">
                          Do's
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {(guideData.dos ?? []).map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                            <span className="text-sm leading-relaxed text-ink">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DON'Ts column */}
                    <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.7rem] font-bold text-white">✗</span>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Don'ts
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {(guideData.donts ?? []).map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="text-sm leading-relaxed text-ink">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded content — regular layout */}
              {isOpen && !isDosAndDonts && (
                <div className="journey-panel-content border-t border-border px-6 pb-7 pt-5">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {guideData.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {guideData.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-start gap-3">
                        <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", colors.dot)} />
                        <span className="text-sm leading-relaxed text-ink">{step}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Download option for Monthly Pregnancy Guidance */}
                  {guide.id === "pregnancyMonthByMonth" && (
                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/8 px-5 py-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20">
                        <Download className="h-4 w-4 text-gold-foreground" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-ink">Monthly Guidance PDF</p>
                        <p className="text-xs text-muted-foreground">
                          Download the complete month-by-month Garbh Sanskar guide
                        </p>
                      </div>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1bXOo4WKw72BHJloPrmjV0KLyao3Z6G2t"
                        download="Chapter_19_MonthlyAdviceByGarbhSanskarKaVigyan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gold/20 px-4 py-2 text-xs font-medium text-gold-foreground transition-colors hover:bg-gold/30"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   QATab
   ─────────────────────────────────────────────────────────────────────── */
function QATab() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const content = t.content;
  const { open: openExternalAskShree } = useExternalAskShree();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">
          {copy.qaSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.qaSection.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">{copy.qaSection.subtitle}</p>
      </div>

      {/* Q&A Accordion */}
      <div className="space-y-3">
        {KNOWLEDGE_QA.map((qa) => {
          const qaData = content.knowledgeQA[qa.id];

          // Safety check: skip if qaData is undefined
          if (!qaData) {
            console.warn(`Q&A data not found for ID: ${qa.id}`);
            return null;
          }

          const isOpen = openId === qa.id;

          return (
            <div
              key={qa.id}
              className={cn(
                "surface-card overflow-hidden transition-all duration-200",
                isOpen && "border-l-4 border-gold glow-gold",
              )}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-start gap-4 p-5 text-left"
                onClick={() => setOpenId(isOpen ? null : qa.id)}
                aria-expanded={isOpen}
              >
                {/* Tag badge */}
                <span className="mt-0.5 shrink-0 rounded-full bg-gold/15 px-2 py-0.5 text-[0.6rem] uppercase tracking-wider text-gold-foreground">
                  {qaData.tag}
                </span>
                <p className="flex-1 text-sm font-medium leading-snug text-ink sm:text-base">
                  {qaData.question}
                </p>
                <span className="ml-2 mt-0.5 shrink-0 text-muted-foreground">
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="journey-panel-content border-t border-border bg-accent/40 px-5 pb-6 pt-4">
                  <p className="text-sm leading-[1.75] text-ink/90">{qaData.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResourcesTab() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const content = t.content;

  // Only one resource remains — the book
  const book = KNOWLEDGE_RESOURCES[0];
  const bookData = content.knowledgeResources[book.id];

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div className="max-w-3xl">
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-secondary">
          {copy.resourcesSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.resourcesSection.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {copy.resourcesSection.subtitle}
        </p>
      </div>

      {/* Rich book card */}
      <article className="surface-card group relative overflow-hidden">
        {/* Decorative warm gradient band behind the authors */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/6 via-transparent to-primary/4"
        />

        <div className="relative flex flex-col gap-0 sm:flex-row">
          {/* ── Left: book image ── */}
          <div className="flex shrink-0 items-center justify-center bg-gradient-to-b from-secondary/10 to-secondary/4 sm:w-96 sm:rounded-l-xl">
            <SmartImage
              src="/CoupleBook.png"
              alt="Garbh Sanskar Ka Vigyan book cover"
              className="h-full w-full object-cover sm:rounded-l-xl"
            />
          </div>

          {/* ── Right: book details ── */}
          <div className="flex flex-1 flex-col justify-center gap-5 p-7 sm:p-9">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                {copy.resourcesSection.types[book.type]}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-[0.6rem] text-muted-foreground">
                {bookData.meta}
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-[0.6rem] font-medium text-primary">
                Available on Amazon
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {bookData.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                By Dr. Anil Kumar Garg &amp; Dr. Seema Garg
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">{bookData.body}</p>

            {/* Key highlights */}
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2" aria-label="Book highlights">
              {[
                "Vedic Garbh Sanskar practices",
                "Modern epigenetics & science",
                "Month-by-month guidance",
                "Bilingual — Hindi & English",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Purchase CTA */}
            <a
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit items-center gap-2.5 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.8} />
              {copy.resourcesSection.purchase}
            </a>
          </div>
        </div>
      </article>

      {/* Disclaimer */}
      <div className="rounded-xl border border-secondary/20 bg-secondary/5 px-5 py-4">
        <p className="text-xs leading-relaxed text-muted-foreground">{copy.resourcesSection.note}</p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   ScientificTab
   ─────────────────────────────────────────────────────────────────────── */
function ScientificTab() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const content = t.content;

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-indigo-foreground/70">
          {copy.scientificSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.scientificSection.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          {copy.scientificSection.subtitle}
        </p>
      </div>

      {/* Reference cards */}
      <div className="space-y-4">
        {SCIENTIFIC_REFERENCES.map((ref, idx) => {
          const refData = content.scientificRefs[ref.id];
          return (
            <div
              key={ref.id}
              className="surface-card group relative overflow-hidden border-l-4 border-l-indigo/60 p-6 transition-all hover:border-l-indigo"
            >
              {/* Year badge — top right */}
              <span className="absolute right-5 top-5 rounded-full border border-border bg-muted px-2.5 py-1 text-[0.6rem] tracking-widest text-muted-foreground">
                {refData.year}
              </span>

              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                {refData.field}
              </p>
              <p className="mt-3 pr-16 text-sm font-medium leading-relaxed text-ink">
                {refData.citation}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {refData.summary}
              </p>
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-border bg-muted/60 px-5 py-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {copy.scientificSection.disclaimer}
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   KnowledgePage — root
   ─────────────────────────────────────────────────────────────────────── */
const VALID_TABS = new Set<KnowledgeTab>([
  "scienceOfGarbhSanskar",
  "articles",
  "news",
  "guides",
  "qa",
  "resources",
  "scientific",
]);

function resolveInitialTab(param: string | null): KnowledgeTab {
  if (param && VALID_TABS.has(param as KnowledgeTab)) {
    return param as KnowledgeTab;
  }
  return "scienceOfGarbhSanskar";
}

export default function KnowledgePage() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const { open: openExternalAskShree } = useExternalAskShree();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<KnowledgeTab>(
    () => resolveInitialTab(searchParams.get("tab")),
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dictionary = getDictionary();
    const meta =
      activeTab === "scienceOfGarbhSanskar"
        ? dictionary.sciencePage.meta
        : dictionary.knowledge.meta;
    document.title = meta.title;
  }, [activeTab]);

  // Sync tab when ?tab= search param changes (e.g. navigating here from the navbar book button)
  useEffect(() => {
    const tab = resolveInitialTab(searchParams.get("tab"));
    setActiveTab(tab);
    if (contentRef.current) {
      const yOffset = -160;
      const y = contentRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [searchParams]);

  const handleTabChange = (tab: KnowledgeTab) => {
    setActiveTab(tab);
    if (contentRef.current) {
      const yOffset = -160;
      const y = contentRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeTabConfig = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <PageHeader {...copy.header} bgImage="/KnowledgeBanner.png" />

      {/* ── Tab Bar ────────────────────────────────────────────────────────── */}
      <div className="sticky top-[58px] sm:top-[68px] lg:top-[74px] z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4">
          {/* Mobile: horizontal scroll tabs */}
          <div className="flex gap-0.5 overflow-x-auto scrollbar-none py-2 sm:gap-1 lg:hidden">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "flex shrink-0 cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? `${tab.bg} ${tab.text} shadow-sm`
                      : "text-muted-foreground hover:text-ink",
                  )}
                  style={isActive ? { borderBottom: `2px solid ${tab.accent}` } : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <span className="whitespace-nowrap">{copy.tabs[tab.id]}</span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-end gap-1 pb-2 pr-1 text-xs text-muted-foreground sm:hidden">
            <span>{copy.tabScrollHint}</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </div>

          {/* Desktop: larger pill tabs */}
          <div className="hidden gap-1 py-3 lg:flex">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-3 py-2.5 text-[0.8rem] font-medium transition-all",
                    isActive
                      ? `${tab.bg} ${tab.text}`
                      : "text-muted-foreground hover:bg-muted/60 hover:text-ink",
                  )}
                  style={
                    isActive
                      ? {
                          boxShadow: `0 2px 0 0 ${tab.accent}`,
                        }
                      : undefined
                  }
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                  {copy.tabs[tab.id]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Layout: sidebar accent + content ──────────────────────────── */}
      <div ref={contentRef} className="relative bg-background">
        {/* Desktop: left accent ribbon showing active tab color */}
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 lg:block"
          style={{ backgroundColor: activeTabConfig.accent, opacity: 0.35 }}
        />

        <Section className="py-12 lg:py-16">
          <div className="lg:pl-6">
            {activeTab === "scienceOfGarbhSanskar" && <ScienceOfGarbhSanskarTab />}
            {activeTab === "articles" && <ArticlesTab />}
            {activeTab === "news" && <NewsTab />}
            {activeTab === "guides" && <GuidesTab />}
            {activeTab === "qa" && <QATab />}
            {activeTab === "resources" && <ResourcesTab />}
            {activeTab === "scientific" && <ScientificTab />}
          </div>
        </Section>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ onClick: openExternalAskShree, label: copy.cta.primary }}
        />
      </Section>
    </>
  );
}
