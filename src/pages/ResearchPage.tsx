import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { useI18n } from "@/i18n";
import { getDictionary } from "@/i18n";
import { useEffect } from "react";
import { FlaskConical, Clock, Bell } from "lucide-react";

export default function ResearchPage() {
  const { t } = useI18n();
  const copy = t.research;

  useEffect(() => {
    const meta = getDictionary().research.meta;
    document.title = meta.title;
  }, []);

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Coming Soon ───────────────────────────────────────────── */}
      <Section className="py-20 lg:py-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">

          {/* Icon badge */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
            <FlaskConical className="h-9 w-9 text-primary" strokeWidth={1.4} />
          </div>

          {/* Eyebrow */}
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary">
            Coming Soon
          </p>

          {/* Headline */}
          <h2 className="text-3xl leading-snug text-ink sm:text-4xl">
            Research & Science
            <br />
            <span className="text-muted-foreground">is on its way</span>
          </h2>

          {/* Body */}
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            We are carefully building our research section — bringing together epigenetics, fetal
            development, prenatal psychology and maternal wellbeing with the rigour they deserve.
            Check back soon.
          </p>

          {/* Divider */}
          <div className="h-px w-16 bg-border" />

          {/* Feature preview cards */}
          <div className="grid w-full gap-4 sm:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: "Evidence Landscape",
                body: "Curated studies on epigenetics, fetal development & prenatal psychology.",
              },
              {
                icon: Clock,
                title: "Editorial Standards",
                body: "Every claim cited, every source transparent, every uncertainty acknowledged.",
              },
              {
                icon: Bell,
                title: "Collaborations",
                body: "Open partnerships with universities, hospitals and independent researchers.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-5 py-7 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/8">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-ink">{title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          {/* Soft note */}
          <p className="text-xs text-muted-foreground/70">
            In the meantime, explore our{" "}
            <a href="/knowledge" className="underline underline-offset-4 hover:text-primary transition-colors">
              Knowledge Hub
            </a>{" "}
            for articles, guides and scientific references.
          </p>
        </div>
      </Section>
    </>
  );
}
