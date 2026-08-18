import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CTASection, ResearchCard } from "@/components/site/Cards";
import { researchTopics } from "@/lib/content";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Science — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Epigenetics, fetal development, prenatal psychology, maternal wellbeing and nutrition — the evidence landscape behind our educational work.",
      },
      { property: "og:title", content: "Research & Science — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "How contemporary science informs Garbh Sanskar education and our research agenda.",
      },
    ],
  }),
  component: Research,
});

function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research & Science"
        title="Tradition studied with care"
        hindi="अनुसंधान एवं विज्ञान"
        intro="We read the evidence honestly. Where science is clear we teach it; where it is emerging we say so."
      />

      <Section>
        <SectionHeading eyebrow="Fields we study" title="The evidence landscape" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchTopics.map((r) => (
            <ResearchCard key={r.topic} {...r} />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <SectionHeading eyebrow="Our commitments" title="How we handle claims" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            ["No guarantees", "We never promise outcomes for a child. Education is not a prediction."],
            ["Cite the source", "Cultural practice and scientific literature are clearly distinguished."],
            ["Invite scrutiny", "We welcome collaboration with universities, hospitals and researchers."],
          ].map(([title, body]) => (
            <div key={title} className="surface-card p-7">
              <h3 className="text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Collaborate with us"
          body="Researchers and institutions are invited to study, document and publish with the Foundation."
          primary={{ to: "/join", label: "Propose a Collaboration" }}
          secondary={{ to: "/knowledge", label: "Read Our Articles" }}
        />
      </Section>
    </>
  );
}
