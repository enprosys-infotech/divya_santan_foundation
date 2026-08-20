import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sun, Flower2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  CONTACT_DETAIL_FIELDS,
  CONTACT_TOPICS,
} from "@/content/registry";
import { CONTACT_DETAILS } from "@/content/navigation";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => seo(getDictionary().contact.meta),
  component: Contact,
});

const CONTACT_VALUES: Record<string, string> = {
  email: CONTACT_DETAILS.email,
  phone: CONTACT_DETAILS.phone,
  office: "Indore, Madhya Pradesh, India",
};

function Contact() {
  const { t } = useI18n();
  const copy = t.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader {...copy.header} />

      {/* Decorative background wrapper */}
      <div className="relative overflow-hidden bg-background">
        {/* Subtle decorative background SVGs */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <Leaf className="absolute -left-12 top-20 h-64 w-64 text-green" />
          <Flower2 className="absolute -right-24 bottom-40 h-96 w-96 text-primary" />
          <Sun className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 text-gold" />
        </div>

        <Section className="relative z-10 pt-12">
          {/* New Introduction Section */}
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{copy.intro.title}</h2>
            <span className="mx-auto mt-4 block h-px w-16 bg-gold/70" />
            <p className="mt-5 text-balance-pretty text-base leading-relaxed text-muted-foreground">
              {copy.intro.subtitle}
            </p>
            <p className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.25em] text-primary/80">
              {copy.intro.support}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* ── Contact form ─────────────────────────────────────── */}
            <div className="surface-card p-8 sm:p-10 bg-white/50 dark:bg-white/5 backdrop-blur-md border-primary/10 relative overflow-hidden">
              {/* Subtle form decoration */}
              <div className="pointer-events-none absolute right-0 top-0 opacity-10">
                 <Flower2 className="h-32 w-32 translate-x-1/3 -translate-y-1/3 text-primary" />
              </div>
              
              {submitted ? (
                <p className="text-sm leading-relaxed text-muted-foreground relative z-10">{copy.form.success}</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-primary">
                      {copy.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="h-12 rounded-xl border border-primary/15 bg-background/60 px-4 text-sm outline-none transition-all focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/10 shadow-sm"
                    />
                  </div>

                  {/* Contact point */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact" className="text-xs uppercase tracking-[0.18em] text-primary">
                      {copy.form.contactPoint}
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      className="h-12 rounded-xl border border-primary/15 bg-background/60 px-4 text-sm outline-none transition-all focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/10 shadow-sm"
                    />
                  </div>

                  {/* Subject / topic */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs uppercase tracking-[0.18em] text-primary">
                      {copy.form.subject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="h-12 rounded-xl border border-primary/15 bg-background/60 px-4 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/10 shadow-sm"
                    >
                      {CONTACT_TOPICS.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                          {copy.form.topics[topic.id]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-primary">
                      {copy.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="rounded-xl border border-primary/15 bg-background/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/10 shadow-sm"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="group mt-2 w-max">
                    {copy.form.submit}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </div>

            {/* ── Contact details & note ───────────────────────────── */}
            <div className="flex flex-col gap-6">
              <div className="surface-card p-8">
                <div className="flex flex-col gap-6">
                  {CONTACT_DETAIL_FIELDS.map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.id} className="group flex items-start gap-4 transition-all">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                        <div className="flex flex-col justify-center min-h-[40px]">
                          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                            {copy.details[field.id]}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-ink">{CONTACT_VALUES[field.id]}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Advisory note */}
              <div className="surface-glass relative overflow-hidden rounded-2xl p-6 border border-gold/30">
                <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.08]">
                  <Sun className="h-24 w-24 text-gold" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-medium text-ink flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-gold" />
                    {copy.note.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy.note.body}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Be Part of the Movement CTA */}
        <section className="border-t border-border bg-warm px-5 py-16 sm:px-8 sm:py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{copy.movement.title}</h2>
            <p className="mt-5 text-balance-pretty text-base leading-relaxed text-muted-foreground mx-auto max-w-2xl">
              {copy.movement.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/courses">{copy.movement.ctaExplore}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/free-services">{copy.movement.ctaJoin}</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
