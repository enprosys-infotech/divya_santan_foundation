import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { freeServices, freeVideos } from "@/lib/content";

export const Route = createFileRoute("/free-services")({
  head: () => ({
    meta: [
      { title: "Free Education & Services — Divya Santan Foundation" },
      {
        name: "description",
        content:
          "Free online classes, educational videos, guidance sessions, community awareness programmes and bilingual publications.",
      },
      { property: "og:title", content: "Free Education & Services — Divya Santan Foundation" },
      {
        property: "og:description",
        content: "Garbh Sanskar education that stays free and open to every family.",
      },
    ],
  }),
  component: FreeServices,
});

const schedule = [
  ["Every Sunday", "Introduction to Garbh Sanskar", "Hindi · 60 min"],
  ["Every Wednesday", "Garbh Samvad Practice Circle", "Hindi & English · 45 min"],
  ["First Saturday", "Fathers & Family Session", "English · 60 min"],
  ["Monthly", "Community Awareness Programme", "Regional languages · varies"],
];

// YouTube video IDs for Garbh Sanskar educational content
const videos = freeVideos;

function FreeServices() {
  return (
    <>
      <PageHeader
        eyebrow="Free Education"
        title="Knowledge should never carry a price"
        hindi="नि:शुल्क शिक्षा"
        intro="Our core education is free, always. Guidance and courses exist to support learning — never to gate it."
      />

      <Section>
        <SectionHeading eyebrow="What is free" title="Open to every family" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freeServices.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* YouTube Video Section */}
      <Section className="bg-secondary/45">
        <SectionHeading
          eyebrow="Watch & Learn"
          title="Free Educational Videos"
          subtitle="Watch our Garbh Sanskar video series on YouTube — available in Hindi and English, free for every family."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div key={v.id + v.title} className="surface-card surface-card-hover overflow-hidden rounded-2xl">
              <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-ink">{v.title}</p>
                <p className="font-deva mt-0.5 text-xs text-primary/80">{v.hindi}</p>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@DivyaSantanPrakalp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View Full Playlist on YouTube
          </a>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <SectionHeading eyebrow="Weekly schedule" title="Upcoming free sessions" />
        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {schedule.map(([when, what, meta]) => (
            <li key={what} className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
              <div>
                <p className="text-base text-ink">{what}</p>
                <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1.5 text-xs text-primary">
                {when}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Register for a free class"
          body="Share your details and we will send joining instructions in your preferred language."
          primary={{ to: "/contact", label: "Register Now" }}
          secondary={{ to: "/courses", label: "See Courses" }}
        />
      </Section>
    </>
  );
}
