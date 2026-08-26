import { useEffect, useState } from "react";
import { CTASection, FeatureCard, AskShreeFeatureId } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { VideoCard } from "@/components/site/VideoCard";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  CLASS_SCHEDULE,
  FREE_SERVICES,
  VIDEOS,
  YOUTUBE_CHANNEL_URL,
  ASK_SHREE_FEATURES,
} from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { useChatWidget } from "@/hooks/useChatWidget";

type TabId = "content" | "videos";

export default function FreeServicesPage() {
  const { t } = useI18n();
  const copy = t.freeServices;
  const [activeTab, setActiveTab] = useState<TabId>("content");
  const { open: openChat } = useChatWidget();

  useEffect(() => {
    const meta = getDictionary().freeServices.meta;
    document.title = meta.title;
  }, []);

  const tabs = [
    { id: "content" as TabId, label: "Free Service Content" },
    { id: "videos" as TabId, label: "Videos & Lectures" },
  ];

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Tabs Navigation ──────────────────────────────────────── */}
      <Section className="pb-0">
        <div className="flex flex-wrap items-center gap-2 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-t-lg px-6 py-3 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "border-b-2 border-primary bg-accent text-primary"
                  : "text-muted-foreground hover:text-ink",
              )}
            >
              {tab.label}
            </button>
          ))}

          {/* Ask Shree AI — opens widget instead of tab */}
          <button
            type="button"
            onClick={openChat}
            className="ml-auto flex cursor-pointer items-center gap-2 rounded-full border border-primary/40 bg-primary/8 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/15 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Ask Shree AI
          </button>
        </div>
      </Section>

      {/* ── Free Service Content Tab ─────────────────────────────── */}
      {activeTab === "content" && (
        <>
          <Section>
            <SectionHeading eyebrow={copy.whatIsFree.eyebrow} title={copy.whatIsFree.title} />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FREE_SERVICES.map((service) => (
                <FeatureCard
                  key={service.id}
                  icon={service.icon}
                  {...t.content.freeServices[service.id]}
                />
              ))}
            </div>
          </Section>

          <Section className="bg-warm">
            <SectionHeading eyebrow={copy.schedule.eyebrow} title={copy.schedule.title} />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {CLASS_SCHEDULE.map((session) => {
                const s = copy.schedule.sessions[session.id];
                return (
                  <div key={session.id} className="surface-card flex gap-4 p-6">
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

          {/* Ask Shree AI features promo banner */}
          <Section className="pt-0">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-secondary/5 to-primary/5 px-6 py-10 text-center">
              <p className="text-xs uppercase tracking-[0.22em] text-secondary">AI Companion</p>
              <h2 className="mt-2 text-2xl text-ink sm:text-3xl">Have questions? Ask Shree AI</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Our educational AI companion guides you to the right resources — from Knowledge Centre
                articles to free classes — based on your stage of learning.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto mb-8">
                {ASK_SHREE_FEATURES.map((feature) => (
                  <div key={feature.id} className="surface-card p-4 text-left">
                    <p className="text-sm font-medium text-ink">{t.askShree.features[feature.id].title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t.askShree.features[feature.id].body}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" onClick={openChat} className="cursor-pointer">
                <Sparkles className="h-4 w-4" />
                Chat with Shree AI
              </Button>
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
