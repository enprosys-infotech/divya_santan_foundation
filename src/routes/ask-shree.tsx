import { createFileRoute } from "@tanstack/react-router";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { AskShreeChat } from "@/components/site/AskShreeChat";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { ASK_SHREE_FEATURES } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/ask-shree")({
  head: () => seo(getDictionary().askShree.meta),
  component: AskShreePage,
});

function AskShreePage() {
  const { t } = useI18n();
  const copy = t.askShree;

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Chat widget ──────────────────────────────────────────── */}
      <Section>
        <AskShreeChat className="mx-auto max-w-2xl" />
      </Section>

      {/* ── Feature highlights ───────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading title={copy.header.title} align="left" />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {ASK_SHREE_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={copy.features[feature.id].title}
              body={copy.features[feature.id].body}
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
