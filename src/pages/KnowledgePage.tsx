import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Map,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";
import { CTASection } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import {
  KNOWLEDGE_ARTICLES,
  KNOWLEDGE_CATEGORIES,
  KNOWLEDGE_GUIDES,
  KNOWLEDGE_QA,
  SCIENTIFIC_REFERENCES,
} from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { useChatWidget } from "@/hooks/useChatWidget";
import { cn } from "@/lib/utils";

/* ── Types ─────────────────────────────────────────────────────────────── */
type KnowledgeTab = "articles" | "guides" | "qa" | "scientific";

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
    id: "articles",
    icon: BookOpen,
    accent: "var(--color-primary)",
    border: "border-primary",
    bg: "bg-primary/8",
    text: "text-primary",
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
    id: "scientific",
    icon: FlaskConical,
    accent: "var(--color-indigo)",
    border: "border-indigo",
    bg: "bg-indigo/8",
    text: "text-indigo",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   ArticlesTab
   ─────────────────────────────────────────────────────────────────────── */
function ArticlesTab() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const content = t.content;
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleArticles =
    activeCategory === "all"
      ? KNOWLEDGE_ARTICLES
      : KNOWLEDGE_ARTICLES.filter((a) => a.category === activeCategory);

  const heroArticle = visibleArticles[0];
  const restArticles = visibleArticles.slice(1);

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary">
          {copy.articlesSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">
          {copy.articlesSection.title}
        </h2>
      </div>

      {/* Category filter chips */}
      <div>
        <p className="mb-3 text-xs text-muted-foreground">
          {copy.articlesSection.filterLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {KNOWLEDGE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-ink",
              )}
            >
              {content.knowledgeCategories[cat.id]}
            </button>
          ))}
        </div>
      </div>

      {/* Hero article */}
      {heroArticle && (() => {
        const heroData = content.knowledgeArticles[heroArticle.id];
        const catLabel = content.knowledgeCategories[heroArticle.category];
        return (
          <div className="surface-card relative overflow-hidden p-0">
            {/* Accent lane */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-primary" />
            <div className="p-7 pl-9 sm:flex sm:items-start sm:gap-8">
              <div className="flex-1">
                <span className="inline-block rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-[0.62rem] uppercase tracking-widest text-primary">
                  {copy.articlesSection.heroLabel}
                </span>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {catLabel}
                </p>
                <h3 className="mt-2 text-xl text-ink sm:text-2xl">
                  {heroData.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {heroData.body}
                </p>
                <p className="mt-5 text-xs text-muted-foreground">
                  {heroData.readTime}
                </p>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Rest grid */}
      {restArticles.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {restArticles.map((article) => {
            const articleData = content.knowledgeArticles[article.id];
            const catLabel = content.knowledgeCategories[article.category];
            return (
              <div
                key={article.id}
                className="surface-card surface-card-hover flex flex-col p-6"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-secondary">
                  {catLabel}
                </p>
                <h3 className="mt-3 flex-1 text-base leading-snug text-ink">
                  {articleData.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {articleData.body}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                  {articleData.readTime}
                </p>
              </div>
            );
          })}
        </div>
      )}
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
    { border: "border-secondary", bg: "bg-secondary/8", text: "text-secondary", dot: "bg-secondary" },
    { border: "border-indigo", bg: "bg-indigo/8", text: "text-indigo-foreground", dot: "bg-indigo" },
  ];

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-green">
          {copy.guidesSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">
          {copy.guidesSection.title}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          {copy.guidesSection.subtitle}
        </p>
      </div>

      {/* Stage stepper */}
      <div className="space-y-4">
        {KNOWLEDGE_GUIDES.map((guide, idx) => {
          const guideData = content.knowledgeGuides[guide.id];
          const colors = STAGE_COLORS[idx % STAGE_COLORS.length]!;
          const isOpen = expandedId === guide.id;

          return (
            <div
              key={guide.id}
              className={cn(
                "surface-card overflow-hidden transition-all duration-300",
                isOpen && `border-l-4 ${colors.border}`,
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
                  <h3 className="text-base font-normal text-ink sm:text-lg">
                    {guideData.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {guideData.subtitle}
                  </p>
                </div>
                <span className="ml-2 mt-1 shrink-0 text-muted-foreground">
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="journey-panel-content border-t border-border px-6 pb-7 pt-5">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {guideData.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {guideData.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-start gap-3">
                        <span
                          className={cn(
                            "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                            colors.dot,
                          )}
                        />
                        <span className="text-sm leading-relaxed text-ink">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
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
  const { open: openChat } = useChatWidget();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="animate-rise space-y-10">
      {/* Section header */}
      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">
          {copy.qaSection.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">
          {copy.qaSection.title}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          {copy.qaSection.subtitle}
        </p>
      </div>

      {/* Q&A Accordion */}
      <div className="space-y-3">
        {KNOWLEDGE_QA.map((qa) => {
          const qaData = content.knowledgeQA[qa.id];
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
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="journey-panel-content border-t border-border bg-accent/40 px-5 pb-6 pt-4">
                  <p className="text-sm leading-[1.75] text-ink/90">
                    {qaData.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Ask Shree AI banner */}
      <div className="mandala-veil surface-glass flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2.5 text-sm text-ink">
          <Sparkles className="h-4 w-4 shrink-0 text-primary" />
          {copy.qaSection.askShreeBanner}
        </p>
        <button
          type="button"
          onClick={openChat}
          className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {copy.qaSection.askShreeLabel}
        </button>
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
        <h2 className="mt-2 text-2xl text-ink sm:text-3xl">
          {copy.scientificSection.title}
        </h2>
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
export default function KnowledgePage() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const { open: openChat } = useChatWidget();
  const [activeTab, setActiveTab] = useState<KnowledgeTab>("articles");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meta = getDictionary().knowledge.meta;
    document.title = meta.title;
  }, []);

  const handleTabChange = (tab: KnowledgeTab) => {
    setActiveTab(tab);
    if (contentRef.current) {
      const yOffset = -160;
      const y =
        contentRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeTabConfig = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <PageHeader {...copy.header} />

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
                  style={
                    isActive
                      ? { borderBottom: `2px solid ${tab.accent}` }
                      : undefined
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <span className="whitespace-nowrap">{copy.tabs[tab.id]}</span>
                </button>
              );
            })}
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
                    "flex cursor-pointer items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
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
            {activeTab === "articles" && <ArticlesTab />}
            {activeTab === "guides" && <GuidesTab />}
            {activeTab === "qa" && <QATab />}
            {activeTab === "scientific" && <ScientificTab />}
          </div>
        </Section>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ onClick: openChat, label: copy.cta.primary }}
          secondary={{ to: "/learn", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
