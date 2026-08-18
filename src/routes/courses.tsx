import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CourseCard, CTASection } from "@/components/site/Cards";
import { courses } from "@/lib/content";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Training — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Foundation course, couple education, Prerak training, recorded classes and educator certification in Garbh Sanskar.",
      },
      { property: "og:title", content: "Courses & Training — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "Structured Garbh Sanskar courses and training tracks for families and educators.",
      },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Courses & Training"
        title="Structured learning tracks"
        hindi="पाठ्यक्रम एवं प्रशिक्षण"
        intro="Courses are educational programmes designed for families, volunteers and educators. Core community education always remains free."
      />

      <Section>
        <SectionHeading eyebrow="Programmes" title="Choose your track" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <SectionHeading
          eyebrow="How learning works"
          title="Simple, respectful, self-paced"
          subtitle="Live sessions are recorded, material is bilingual, and no learner is turned away for want of means."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            ["Enrol", "Register for a course or a free class in Hindi or English."],
            ["Learn", "Attend live sessions or study recorded modules at your own pace."],
            ["Practise & serve", "Apply learning at home, or train further to teach others."],
          ].map(([title, body], i) => (
            <div key={title} className="surface-card p-7">
              <span className="text-xs text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Start with a free class"
          body="Attend an introductory session before choosing a longer track."
          primary={{ to: "/free-services", label: "Join Free Classes" }}
          secondary={{ to: "/contact", label: "Ask a Question" }}
        />
      </Section>
    </>
  );
}
