import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { joinRoles } from "@/lib/content";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Mission — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Become a Prerak, volunteer, faculty member or consultant, or collaborate with us as an institution or CSR partner.",
      },
      { property: "og:title", content: "Join the Mission — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "Ways to participate in a global Garbh Sanskar education movement.",
      },
    ],
  }),
  component: Join,
});

function Join() {
  return (
    <>
      <PageHeader
        eyebrow="Participate"
        title="Join the mission"
        hindi="अभियान से जुड़ें"
        intro="This movement grows through people. Choose the role that fits your time, skill and intent."
      />

      <Section>
        <SectionHeading eyebrow="Roles" title="Ways to contribute" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {joinRoles.map((r) => (
            <FeatureCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <SectionHeading eyebrow="Process" title="From interest to service" />
        <div className="mt-14 grid gap-6 sm:grid-cols-4">
          {["Express interest", "Orientation", "Training", "Serve your community"].map((s, i) => (
            <div key={s} className="surface-card p-6 text-center">
              <span className="text-xs text-primary">0{i + 1}</span>
              <p className="mt-3 text-sm text-ink">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Tell us how you'd like to help"
          body="Write to us with your role of interest and preferred language."
          primary={{ to: "/contact", label: "Contact the Team" }}
          secondary={{ to: "/courses", label: "See Training Tracks" }}
        />
      </Section>
    </>
  );
}
