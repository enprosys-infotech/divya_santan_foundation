import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CTASection, FeatureCard, JourneyCard } from "@/components/site/Cards";
import { journeys, learnTopics } from "@/lib/content";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn Garbh Sanskar — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Structured learning on Garbh Sanskar: pre-conception, pregnancy journey, Garbh Samvad, father and family, Ayurveda and postnatal care.",
      },
      { property: "og:title", content: "Learn Garbh Sanskar — Divya Santan Foundation" },
      {
        property: "og:description",
        content:
          "Pre-conception, pregnancy journey, Garbh Samvad, family, lifestyle and postnatal learning modules.",
      },
    ],
  }),
  component: Learn,
});

function Learn() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Learn Garbh Sanskar"
        hindi="गर्भ संस्कार सीखें"
        intro="A calm, structured learning path for couples, families, educators and volunteers. Study at your own pace, in Hindi or English."
      />

      <Section>
        <SectionHeading eyebrow="Learning modules" title="Where would you like to begin?" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learnTopics.map((topic) => (
            <FeatureCard key={topic.title} {...topic} />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <SectionHeading
          eyebrow="Journeys"
          title="Learn by your journey"
          subtitle="Each journey is a sequence of learning steps — not a service package."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeys.map((j) => (
            <JourneyCard key={j.title} {...j} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Not sure where to start?"
          body="Ask Shree AI for a suggested learning path, or join a free introductory class."
          primary={{ to: "/ask-shree", label: "Ask Shree AI" }}
          secondary={{ to: "/free-services", label: "Join Free Classes" }}
        />
      </Section>
    </>
  );
}
