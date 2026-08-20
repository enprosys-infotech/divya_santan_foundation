import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, FeatureCard, AskShreeFeatureId } from "@/components/site/Cards";
import { AskShreeChat } from "@/components/site/AskShreeChat";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { VideoCard } from "@/components/site/VideoCard";
import { Button } from "@/components/ui/button";
import { CLASS_SCHEDULE, FREE_SERVICES, VIDEOS, YOUTUBE_CHANNEL_URL, ASK_SHREE_FEATURES } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/free-services")({
  head: () => seo(getDictionary().freeServices.meta),
  component: FreeServices,
});

type TabId = "content" | "videos" | "askshree";

function FreeServices() {
  const { t } = useI18n();
  const copy = t.freeServices;
  const [activeTab, setActiveTab] = useState<TabId>("content");

  const tabs = [
    { id: "content" as TabId, label: "Free Service Content" },
    { id: "videos" as TabId, label: "Videos & Lectures" },
    { id: "askshree" as TabId, label: "Ask Shree AI" },
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

      {/* ── Free Service Content Tab ─────────────────────────────── */}
      {activeTab === "content" && (
        <>
          <Section>
            <SectionHeading eyebrow={copy.whatIsFree.eyebrow} title={copy.whatIsFree.title} />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FREE_SERVICES.map((service) => (
                <FeatureCard key={service.id} icon={service.icon} {...t.content.freeServices[service.id]} />
              ))}
            </div>
          </Section>

          <Section className="bg-warm">
            <SectionHeading eyebrow={copy.schedule.eyebrow} title={copy.schedule.title} />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {CLASS_SCHEDULE.map((session) => {
                const s = copy.schedule.sessions[session.id];
                return (
                  <div
                    key={session.id}
                    className="surface-card flex gap-4 p-6"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-primary">{s.when}</p>
                      <p className="mt-1 text-base text-ink">{s.what}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.meta}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        </>
      )}

      {/* ── Videos & Lectures Tab ────────────────────────────────── */}
      {activeTab === "videos" && (
        <Section>
          <SectionHeading
            eyebrow={copy.videos.eyebrow}
            title={copy.videos.title}
            subtitle={copy.videos.subtitle}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v) => (
              <VideoCard
                key={v.id}
                youtubeId={v.youtubeId}
                duration={v.duration}
                {...t.content.videos[v.id]}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                {copy.videos.playlistCta}
              </a>
            </Button>
          </div>
        </Section>
      )}

      {/* ── Ask Shree AI Tab ─────────────────────────────────────── */}
      {activeTab === "askshree" && (
        <>
          <Section>
            <AskShreeChat className="mx-auto max-w-2xl" />
          </Section>

          <Section className="bg-warm">
            <SectionHeading title="Why Ask Shree AI?" align="left" />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {ASK_SHREE_FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={t.askShree.features[feature.id].title}
                  body={t.askShree.features[feature.id].body}
                />
              ))}
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
