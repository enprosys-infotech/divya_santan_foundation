import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* ── Contact form ─────────────────────────────────────── */}
          <div className="surface-card p-8">
            {submitted ? (
              <p className="text-sm leading-relaxed text-muted-foreground">{copy.form.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                    className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary/60"
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
                    className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary/60"
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
                    className="h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
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
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg">
                  {copy.form.submit}
                </Button>
              </form>
            )}
          </div>

          {/* ── Contact details & note ───────────────────────────── */}
          <div className="flex flex-col gap-8">
            <div className="surface-card p-6">
              <div className="flex flex-col gap-4">
                {CONTACT_DETAIL_FIELDS.map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.id} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-primary">
                          {copy.details[field.id]}
                        </p>
                        <p className="mt-0.5 text-sm text-ink">{CONTACT_VALUES[field.id]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Advisory note */}
            <div className="surface-card border-l-2 border-l-gold p-6">
              <p className="text-sm font-medium text-ink">{copy.note.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy.note.body}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
