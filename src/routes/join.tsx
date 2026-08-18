import { createFileRoute } from "@tanstack/react-router";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { JOIN_PROCESS_STEPS, JOIN_ROLES } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/join")({
  head: () => seo(getDictionary().join.meta),
  component: Join,
});

function Join() {
  const { t } = useI18n();
  const copy = t.join;

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Roles ────────────────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow={copy.roles.eyebrow} title={copy.roles.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JOIN_ROLES.map((role) => (
            <FeatureCard key={role.id} icon={role.icon} {...t.content.joinRoles[role.id]} />
          ))}
        </div>
      </Section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} />

        <div className="relative mt-14">
          {/* Horizontal connector on large screens */}
          <div className="absolute inset-y-5 hidden w-full lg:block">
            <div className="mx-auto h-px max-w-[70%] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {JOIN_PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-semibold text-primary shadow">
                  {index + 1}
                </span>
                <p className="mt-4 text-base text-ink">{copy.process.steps[step.id]}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/contact", label: copy.cta.primary }}
          secondary={{ to: "/courses", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
