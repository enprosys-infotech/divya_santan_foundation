import { createFileRoute } from "@tanstack/react-router";
import { CTASection, CourseCard, FeatureCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { COURSES, COURSE_STEPS } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/courses")({
  head: () => seo(getDictionary().courses.meta),
  component: Courses,
});

function Courses() {
  const { t } = useI18n();
  const copy = t.courses;

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Course tracks ────────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow={copy.programmes.eyebrow} title={copy.programmes.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.id} {...t.content.courses[course.id]} />
          ))}
        </div>
      </Section>

      {/* ── How learning works ───────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.how.eyebrow}
          title={copy.how.title}
          subtitle={copy.how.subtitle}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {COURSE_STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                {index + 1}
              </span>
              <FeatureCard
                title={copy.how.steps[step.id].title}
                body={copy.how.steps[step.id].body}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/free-services", label: copy.cta.primary }}
          secondary={{ to: "/contact", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
