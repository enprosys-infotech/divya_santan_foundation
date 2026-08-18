import { createFileRoute } from "@tanstack/react-router";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { VideoCard } from "@/components/site/VideoCard";
import { Button } from "@/components/ui/button";
import { CLASS_SCHEDULE, FREE_SERVICES, VIDEOS, YOUTUBE_CHANNEL_URL } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/free-services")({
  head: () => seo(getDictionary().freeServices.meta),
  component: FreeServices,
});

function FreeServices() {
  const { t } = useI18n();
  const copy = t.freeServices;

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── What is free ─────────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow={copy.whatIsFree.eyebrow} title={copy.whatIsFree.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FREE_SERVICES.map((service) => (
            <FeatureCard key={service.id} icon={service.icon} {...t.content.freeServices[service.id]} />
          ))}
        </div>
      </Section>

      {/* ── Educational videos ───────────────────────────────────── */}
      <Section className="bg-warm">
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

      {/* ── Weekly schedule ──────────────────────────────────────── */}
      <Section>
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
