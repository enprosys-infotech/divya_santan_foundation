import { createFileRoute } from "@tanstack/react-router";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { ABOUT_MILESTONES, MISSION_POINTS, PILLARS } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => seo(getDictionary().about.meta),
  component: About,
});

function About() {
  const { t } = useI18n();
  const copy = t.about;

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Vision & Mission ─────────────────────────────────────── */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div className="surface-card p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">
              {copy.vision.label}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">{copy.vision.body}</p>
            <p className="font-deva mt-6 text-sm text-primary/80">{copy.vision.native}</p>
          </div>

          {/* Mission */}
          <div className="surface-card p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">
              {copy.mission.label}
            </p>
            <ul className="mt-4 space-y-3">
              {MISSION_POINTS.map((mp) => (
                <li key={mp.id} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {copy.mission.points[mp.id]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Journey / Milestones ──────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading eyebrow={copy.journey.eyebrow} title={copy.journey.title} />

        <div className="relative mt-14">
          {/* Vertical connector line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary/30 via-primary/60 to-primary/10 lg:left-1/2" />

          <div className="space-y-10">
            {ABOUT_MILESTONES.map((milestone, index) => {
              const item = copy.journey.milestones[milestone.id];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex items-start gap-6 pl-14 lg:pl-0 ${
                    isEven ? "lg:justify-start" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <span className="absolute left-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background shadow lg:left-1/2 lg:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>

                  <div className="surface-card max-w-sm p-6 lg:w-[45%]">
                    <h3 className="text-lg text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── Five Pillars ─────────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow={copy.approach.eyebrow} title={copy.approach.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <FeatureCard key={p.id} icon={p.icon} {...t.content.pillars[p.id]} />
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/learn", label: copy.cta.primary }}
          secondary={{ to: "/join", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
