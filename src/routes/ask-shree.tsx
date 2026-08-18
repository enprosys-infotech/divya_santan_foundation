import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Compass, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { AskShreeChat } from "@/components/site/AskShreeChat";
import { CTASection, FeatureCard } from "@/components/site/Cards";

export const Route = createFileRoute("/ask-shree")({
  head: () => ({
    meta: [
      { title: "Ask Shree AI — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Shree AI is an educational companion for Garbh Sanskar — ask what to learn, when to learn it, and where to find guidance.",
      },
      { property: "og:title", content: "Ask Shree AI — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "An educational Garbh Sanskar companion. Guidance for learning, not medical advice.",
      },
    ],
  }),
  component: AskShree,
});

function AskShree() {
  return (
    <>
      <PageHeader
        eyebrow="Learning companion"
        title="Ask Shree AI"
        hindi="श्री से पूछें"
        intro="Shree helps you find your next lesson. It answers educational questions about Garbh Sanskar and points you to relevant classes, articles and modules."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <AskShreeChat />
          <div className="grid content-start gap-6">
            <FeatureCard
              icon={Compass}
              title="Guides your learning path"
              body="Suggests where to begin based on your stage — pre-conception, pregnancy or postnatal."
            />
            <FeatureCard
              icon={BookOpen}
              title="Connects you to resources"
              body="Links questions to Knowledge Centre articles, free classes and learning modules."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Educational, not medical"
              body="Shree never diagnoses or prescribes. For medical concerns, always consult your doctor."
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Prefer speaking to a person?"
          body="Our educators offer free guidance sessions in Hindi and English."
          primary={{ to: "/contact", label: "Get Guidance" }}
          secondary={{ to: "/knowledge", label: "Browse Knowledge Centre" }}
        />
      </Section>
    </>
  );
}
