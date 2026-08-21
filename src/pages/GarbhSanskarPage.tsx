import { useEffect } from "react";
import { CTASection, FeatureCard, JourneyCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { JOURNEYS, LEARN_TOPICS } from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";

export default function GarbhSanskarPage() {
  const { t } = useI18n();
  const copy = t.learn;

  useEffect(() => {
    const meta = getDictionary().learn.meta;
    document.title = meta.title;
  }, []);

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Learning modules ─────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow={copy.modules.eyebrow} title={copy.modules.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEARN_TOPICS.map((topic) => (
            <FeatureCard key={topic.id} icon={topic.icon} {...t.content.learnTopics[topic.id]} />
          ))}
        </div>
      </Section>

      {/* ── Learning journeys ────────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.journeys.eyebrow}
          title={copy.journeys.title}
          subtitle={copy.journeys.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNEYS.map((journey) => (
            <JourneyCard key={journey.id} to={journey.to} {...t.content.journeys[journey.id]} />
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/ask-shree", label: copy.cta.primary }}
          secondary={{ to: "/free-services", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
