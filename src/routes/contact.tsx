import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Guidance — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Reach the Divya Santan Foundation team for free educational guidance, class registration, volunteering or collaboration.",
      },
      { property: "og:title", content: "Contact & Guidance — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "Free educational guidance, class registration and collaboration enquiries.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: "Email", value: "contact@divyasantan.org" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000" },
  { icon: MapPin, label: "Office", value: "Indore, Madhya Pradesh, India" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get guidance"
        hindi="संपर्क एवं मार्गदर्शन"
        intro="Ask about classes, courses, volunteering or collaboration. Educational guidance is always free."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="surface-card space-y-5 p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-ink">
                Name
                <input
                  required
                  className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm outline-none focus:border-primary/60"
                />
              </label>
              <label className="block text-sm text-ink">
                Email or phone
                <input
                  required
                  className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm outline-none focus:border-primary/60"
                />
              </label>
            </div>
            <label className="block text-sm text-ink">
              I am writing about
              <select className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm outline-none focus:border-primary/60">
                <option>Free classes</option>
                <option>Courses & training</option>
                <option>Volunteering / Prerak</option>
                <option>Research collaboration</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-sm text-ink">
              Message
              <textarea
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-3 text-sm outline-none focus:border-primary/60"
              />
            </label>
            <Button type="submit" variant="hero" size="lg">
              Send message
            </Button>
            {sent && (
              <p className="text-sm text-primary">
                Thank you — this is a demo form, so nothing was sent. In the live site our team
                replies within two working days.
              </p>
            )}
          </form>

          <div className="grid content-start gap-6">
            <div className="surface-card p-8">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5 py-3">
                  <Icon className="mt-0.5 h-4 w-4 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 text-sm text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="surface-card p-8">
              <h2 className="text-lg text-ink">A note on guidance</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our guidance is educational. For any medical question or concern during pregnancy,
                please consult your doctor or a qualified healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
