import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, FeatureCard, TestimonialCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { JOIN_PROCESS_STEPS, JOIN_ROLES, TESTIMONIALS } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/join")({
  head: () => seo(getDictionary().join.meta),
  component: Join,
});

type TabId = "mission" | "events" | "testimonials";

function Join() {
  const { t } = useI18n();
  const copy = t.join;
  const eventsCopy = t.events;
  const testimonialsCopy = t.testimonials;
  const [activeTab, setActiveTab] = useState<TabId>("mission");

  const tabs = [
    { id: "mission" as TabId, label: "Join the Mission" },
    { id: "events" as TabId, label: "Events & Activities" },
    { id: "testimonials" as TabId, label: "Testimonials" },
  ];

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Tabs Navigation ──────────────────────────────────────── */}
      <Section className="pb-0">
        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-t-lg px-6 py-3 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "border-b-2 border-primary bg-accent text-primary"
                  : "text-muted-foreground hover:text-ink"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Section>

      {/* ── Join the Mission Tab ─────────────────────────────────── */}
      {activeTab === "mission" && (
        <>
          <Section>
            <SectionHeading eyebrow={copy.roles.eyebrow} title={copy.roles.title} />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {JOIN_ROLES.map((role) => (
                <FeatureCard key={role.id} icon={role.icon} {...t.content.joinRoles[role.id]} />
              ))}
            </div>
          </Section>

          <Section className="bg-warm">
            <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} />

            <div className="relative mt-14">
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
        </>
      )}

      {/* ── Events & Activities Tab ──────────────────────────────── */}
      {activeTab === "events" && (
        <>
          <Section>
            <SectionHeading 
              eyebrow={eventsCopy.upcoming.eyebrow} 
              title={eventsCopy.upcoming.title}
              subtitle={eventsCopy.upcoming.subtitle}
            />

            <div className="mt-14 space-y-6">
              <div className="surface-card p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">Coming Soon</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink">Events & Activities</h3>
                    <p className="mt-3 text-muted-foreground">
                      Join us for workshops, seminars, and community gatherings focused on Garbh Sanskar 
                      education and awareness. Check back soon for upcoming events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section className="bg-warm">
            <SectionHeading 
              eyebrow={eventsCopy.past.eyebrow} 
              title={eventsCopy.past.title}
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon="calendar"
                title="Workshop Series"
                body="Educational workshops on Garbh Sanskar fundamentals"
              />
              <FeatureCard
                icon="users"
                title="Community Gatherings"
                body="Regular meetups for expecting parents and families"
              />
              <FeatureCard
                icon="presentation"
                title="Expert Seminars"
                body="Talks by specialists in prenatal care and development"
              />
            </div>
          </Section>
        </>
      )}

      {/* ── Testimonials Tab ─────────────────────────────────────── */}
      {activeTab === "testimonials" && (
        <>
          <Section>
            <SectionHeading 
              eyebrow={testimonialsCopy.stories.eyebrow} 
              title={testimonialsCopy.stories.title}
              subtitle={testimonialsCopy.stories.subtitle}
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  {...t.content.testimonials[testimonial.id]}
                />
              ))}
            </div>
          </Section>

          <Section className="bg-warm">
            <div className="mx-auto max-w-4xl text-center">
              <SectionHeading 
                eyebrow={testimonialsCopy.impact.eyebrow} 
                title={testimonialsCopy.impact.title}
              />

              <div className="mt-14 grid gap-8 sm:grid-cols-3">
                <div className="surface-card p-6">
                  <p className="text-4xl font-bold text-primary">1000+</p>
                  <p className="mt-2 text-sm text-muted-foreground">{testimonialsCopy.impact.families}</p>
                </div>
                <div className="surface-card p-6">
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="mt-2 text-sm text-muted-foreground">{testimonialsCopy.impact.births}</p>
                </div>
                <div className="surface-card p-6">
                  <p className="text-4xl font-bold text-primary">95%</p>
                  <p className="mt-2 text-sm text-muted-foreground">{testimonialsCopy.impact.satisfaction}</p>
                </div>
              </div>
            </div>
          </Section>
        </>
      )}

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
