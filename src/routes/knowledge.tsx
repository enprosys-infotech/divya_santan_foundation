import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { CTASection, KnowledgeCard } from "@/components/site/Cards";
import { knowledgeArticles, knowledgeCategories } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Centre — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Articles on Garbh Sanskar foundations, pregnancy month-by-month, Garbh Samvad, nutrition, science and cultural traditions.",
      },
      { property: "og:title", content: "Knowledge Centre — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "Responsible, readable articles on Garbh Sanskar practice, science and culture.",
      },
    ],
  }),
  component: Knowledge,
});

function Knowledge() {
  const [active, setActive] = useState("All");
  const articles =
    active === "All" ? knowledgeArticles : knowledgeArticles.filter((a) => a.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Centre"
        title="Read, reflect, apply"
        hindi="ज्ञान केंद्र"
        intro="Short, carefully written articles for families, students and educators — cultural wisdom presented alongside contemporary understanding."
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {knowledgeCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-xs transition-colors duration-300",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <KnowledgeCard key={a.title} {...a} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Have a question while reading?"
          body="Ask Shree AI to point you to the right lesson or article."
          primary={{ to: "/ask-shree", label: "Ask Shree AI" }}
          secondary={{ to: "/learn", label: "Learn Garbh Sanskar" }}
        />
      </Section>
    </>
  );
}
