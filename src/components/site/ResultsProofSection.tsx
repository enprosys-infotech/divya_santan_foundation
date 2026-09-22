import { useState, useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/site/VideoCard";
import { InstaReelCard } from "@/components/site/InstaReelCard";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import {
  SUCCESS_STORIES,
  RESULTS_STATS,
  VIDEOS,
  VIDEO_CATEGORIES,
  INSTAGRAM_REELS,
  YOUTUBE_CHANNEL_URL,
  INSTAGRAM_PROFILE_URL,
  type VideoCategoryId,
} from "@/content/registry";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

interface SuccessStoryCardProps {
  name: string;
  location: string;
  category: string;
  photo: string;
  quote: string;
  outcome: string;
  journey: string;
}

function SuccessStoryCard({
  name,
  location,
  category,
  photo,
  quote,
  outcome,
  journey,
}: SuccessStoryCardProps) {
  return (
    <div className="surface-card flex h-full min-w-[280px] flex-col overflow-hidden rounded-3xl sm:min-w-[320px] lg:min-w-0">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-background/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-secondary backdrop-blur-md">
          {category}
        </span>
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg">
          <Quote className="h-5 w-5 fill-current" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 border-b border-border pb-4">
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {location}
          </p>
        </div>

        <blockquote className="mb-4 flex-1 text-base italic leading-relaxed text-ink/90">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{journey}</p>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-secondary">
            Outcome
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{outcome}</p>
        </div>
      </div>
    </div>
  );
}

export function ResultsProofSection() {
  const { t } = useI18n();
  const copy = t.home.resultsProof;

  const [selectedVideoCategory, setSelectedVideoCategory] = useState<VideoCategoryId>("all");

  const storiesScrollRef = useRef<HTMLDivElement>(null);
  const videosScrollRef  = useRef<HTMLDivElement>(null);
  const reelsScrollRef   = useRef<HTMLDivElement>(null);

  const filteredVideos =
    selectedVideoCategory === "all"
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === selectedVideoCategory);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <>
  
      {/* 3. VIDEOS */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.videos.eyebrow}
          title={copy.videos.title}
          subtitle={copy.videos.subtitle}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {VIDEO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedVideoCategory(cat.id)}
              className={cn(
                "min-h-11 cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                selectedVideoCategory === cat.id
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "border border-border text-muted-foreground hover:border-secondary/40 hover:text-ink",
              )}
            >
              {copy.videos.categories[cat.id]}
            </button>
          ))}
        </div>

        <div className="relative mt-10">
          {/* <button
            type="button"
            onClick={() => scroll(videosScrollRef, "left")}
            aria-label="Previous videos"
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button> */}
          {/* <button
            type="button"
            onClick={() => scroll(videosScrollRef, "right")}
            aria-label="Next videos"
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button> */}

          {selectedVideoCategory === "testimonials" ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-background/60 py-20 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Sparkles className="h-7 w-7" />
              </span>
              <p className="text-base font-medium text-ink">Testimonial videos coming soon</p>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                We're collecting heartfelt stories from families. Check back shortly.
              </p>
            </div>
          ) : (
            <>
              <div
                ref={videosScrollRef}
                className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
              >
                {filteredVideos.map((v) => (
                  <div key={v.id} className="flex h-full min-w-[280px] sm:min-w-[320px] lg:min-w-0">
                    <VideoCard
                      youtubeId={v.youtubeId}
                      {...("duration" in v && v.duration ? { duration: v.duration } : {})}
                      {...t.content.videos[v.id]}
                      category={copy.videos.categories[v.category]}
                    />
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground lg:hidden">
                ← Swipe to see more videos →
              </p>
            </>
          )}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a href={'https://www.youtube.com/channel/UCKAkqYJmMyuQLAqT6nrCHlg'} target="_blank" rel="noopener noreferrer">
              {copy.videos.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* 4. INSTAGRAM REELS */}
      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.reels.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-snug text-ink sm:text-4xl">
              {copy.reels.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {copy.reels.subtitle}
            </p>
          </div>

          <div className="relative mt-12">
            <button
              type="button"
              onClick={() => scroll(reelsScrollRef, "left")}
              aria-label="Previous reels"
              className="absolute -left-4 top-1/2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 lg:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(reelsScrollRef, "right")}
              aria-label="Next reels"
              className="absolute -right-4 top-1/2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 lg:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={reelsScrollRef}
              className="scrollbar-hide mx-auto flex max-w-5xl gap-6 overflow-x-auto scroll-smooth pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
            >
              {INSTAGRAM_REELS.map((r) => (
                <div key={r.id} className="min-w-[220px] sm:min-w-[260px] lg:min-w-0">
                  <InstaReelCard
                    reelId={r.reelId}
                    duration={r.duration}
                    {...t.content.instagramReels[r.id]}
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground lg:hidden">
              ← Swipe to see more moments →
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <a href="https://www.instagram.com/divya_santan_foundation?igsi=MTVsOWZyeTFjeHZsOQ=" target="_blank" rel="noopener noreferrer">
                {copy.reels.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

        {/* 1. SUCCESS STORIES */}
      <section
        className="border-b border-border px-5 py-16 sm:px-8 sm:py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.945 0.055 82) 45%, oklch(0.920 0.072 70) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#e26300ff]">
              {copy.stories.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-snug text-ink sm:text-4xl lg:text-5xl">
              {copy.stories.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              {copy.stories.subtitle}
            </p>
            <div className="mx-auto mt-6 flex max-w-xs items-center gap-4">
              <span className="flex-1 border-t border-gold/40" />
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="flex-1 border-t border-gold/40" />
            </div>
          </div>

          <div className="relative mt-12">
            <button
              type="button"
              onClick={() => scroll(storiesScrollRef, "left")}
              aria-label="Previous stories"
              className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background lg:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(storiesScrollRef, "right")}
              aria-label="Next stories"
              className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-ink shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-background lg:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={storiesScrollRef}
              className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible"
            >
              {SUCCESS_STORIES.map((story) => (
                <SuccessStoryCard
                  key={story.id}
                  {...t.content.successStories[story.id]}
                />
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground lg:hidden">
              ← Swipe to see more stories →
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
