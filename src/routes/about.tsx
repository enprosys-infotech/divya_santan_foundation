import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { pillars } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Vision, mission, journey and the five pillars of Divya Santan Foundation, a global Garbh Sanskar education and awareness movement.",
      },
      { property: "og:title", content: "About — Divya Santan Foundation" },
      {
        property: "og:description",
        content:
          "Vision, mission, journey and five pillars of a global Garbh Sanskar education movement.",
      },
    ],
  }),
  component: About,
});

const journey = [
  { year: "Conceptualisation", body: "Divya Santan Prakalp is formed in Indore with an educational and cultural framework." },
  { year: "Framework", body: "Learning material, month-wise guidance and bilingual booklets are developed." },
  { year: "Awareness", body: "Community programmes, awareness sessions and volunteer enrolment begin." },
  { year: "Training", body: "Prerak and faculty training tracks are introduced for capacity building." },
  { year: "Going global", body: "Digital platform, multi-language content and institutional collaboration." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Divya Santan Foundation"
        hindi="दिव्य संतान फाउंडेशन"
        intro="A global Garbh Sanskar education, training and awareness platform. We are an educational and social movement — not a clinic, and not a commercial service."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-8">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-primary">Vision</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              To nurture physically healthy, emotionally balanced, spiritually rooted, culturally
              connected and socially responsible future generations.
            </p>
            <p className="font-deva mt-4 text-sm text-muted-foreground">
              व्यक्ति निर्माण से राष्ट्र निर्माण
            </p>
          </div>
          <div className="surface-card p-8">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-primary">Mission</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Make Garbh Sanskar education free and accessible to every family.</li>
              <li>Train educators, Preraks and volunteers to carry knowledge into communities.</li>
              <li>Support responsible, evidence-oriented research and documentation.</li>
              <li>Build a global, inclusive community rooted in वसुधैव कुटुम्बकम्.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <SectionHeading eyebrow="Our journey" title="How the movement grew" />
        <ol className="mx-auto mt-14 max-w-3xl">
          {journey.map((j, i) => (
            <li key={j.year} className="relative grid grid-cols-[auto_1fr] gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background text-xs text-primary">
                  {i + 1}
                </span>
                {i < journey.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
              </div>
              <div>
                <h3 className="text-base text-ink">{j.year}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our approach" title="Five Pillars" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Learn with us"
          body="Every part of our core education is open and free. Begin wherever you are."
          primary={{ to: "/learn", label: "Learn Garbh Sanskar" }}
          secondary={{ to: "/join", label: "Join the Mission" }}
        />
      </Section>
    </>
  );
}
