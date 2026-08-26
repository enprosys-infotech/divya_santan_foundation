import { useEffect, useState } from "react";
import { CTASection, KnowledgeCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { KNOWLEDGE_ARTICLES, KNOWLEDGE_CATEGORIES } from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { useChatWidget } from "@/hooks/useChatWidget";

export default function KnowledgePage() {
  const { t } = useI18n();
  const copy = t.knowledge;
  const [activeCategory, setActiveCategory] = useState("all");
  const { open: openChat } = useChatWidget();

  useEffect(() => {
    const meta = getDictionary().knowledge.meta;
    document.title = meta.title;
  }, []);

  const visibleArticles =
    activeCategory === "all"
      ? KNOWLEDGE_ARTICLES
      : KNOWLEDGE_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <>
      <PageHeader {...copy.header} />

      <Section>
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {KNOWLEDGE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-ink",
              )}
            >
              {t.content.knowledgeCategories[cat.id]}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleArticles.map((article) => {
            const articleCopy = t.content.knowledgeArticles[article.id];
            const catLabel = t.content.knowledgeCategories[article.category];
            return (
              <KnowledgeCard
                key={article.id}
                category={catLabel}
                title={articleCopy.title}
                readTime={articleCopy.readTime}
                body={articleCopy.body}
              />
            );
          })}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
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
