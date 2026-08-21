import { CTASection, FeatureCard, ResearchCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { RESEARCH_COMMITMENTS, RESEARCH_TOPICS } from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { useEffect } from "react";

export default function ResearchPage() {
  const { t } = useI18n();
  const copy = t.research;

  useEffect(() => {
    const meta = getDictionary().research.meta;
    document.title = meta.title;
  }, []);

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Evidence landscape ───────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow={copy.fields.eyebrow} title={copy.fields.title} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_TOPICS.map((topic) => (
            <ResearchCard key={topic.id} {...t.content.researchTopics[topic.id]} />
          ))}
        </div>
      </Section>

      {/* ── Editorial commitments ────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading eyebrow={copy.commitments.eyebrow} title={copy.commitments.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {RESEARCH_COMMITMENTS.map((rc) => (
            <FeatureCard
              key={rc.id}
              title={copy.commitments.items[rc.id].title}
              body={copy.commitments.items[rc.id].body}
            />
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/contact", label: copy.cta.primary }}
          secondary={{ to: "/knowledge", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
