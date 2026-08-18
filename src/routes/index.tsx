import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FlaskConical,
  Globe2,
  Sparkles,
  UserCheck,
  Video,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Users,
  Layers,
} from "lucide-react";


import heroImage from "@/assets/hero-womb-to-world.jpg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import {
  CTASection,
  CourseCard,
  FeatureCard,
  JourneyCard,
  KnowledgeCard,
  ResearchCard,
  TestimonialCard,
} from "@/components/site/Cards";
import { AskShreeChat } from "@/components/site/AskShreeChat";
import { AncientScienceBridge } from "@/components/site/AncientScienceBridge";
import { VideoCard } from "@/components/site/VideoCard";
import { useLanguage } from "@/lib/i18n";
import {
  courses,
  freeServices,
  freeVideos,
  garbhSanskarBasics,
  journeys,
  knowledgeArticles,
  joinRoles,
  pillars,
  researchTopics,
  testimonials,
  timeline,
} from "@/lib/content";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divya Santan Foundation — From Womb to World" },
      {
        name: "description",
        content:
          "A global Garbh Sanskar education, training, awareness and research movement nurturing healthy, cultured and compassionate generations.",
      },
      { property: "og:title", content: "Divya Santan Foundation — From Womb to World" },
      {
        property: "og:description",
        content:
          "Education, training, awareness, guidance and research for Garbh Sanskar. वसुधैव कुटुम्बकम् — one world, one family.",
      },
    ],
  }),
  component: Home,
});

/* ── Science stats banner data ── */

const SCIENCE_STATS = [
  { n: "1,000+", label: "Days", sub: "The critical window from conception to age 2" },
  { n: "70%", label: "Brain Development", sub: "Occurs before birth and in first 2 years" },
  { n: "25,000+", label: "Peer-reviewed studies", sub: "On prenatal environment and child outcomes" },
  { n: "3 Trimesters", label: "Learning opportunity", sub: "Fetal senses active from week 8" },
];

function Home() {
  const { t, lang } = useLanguage();
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>();
  const [activeHubTab, setActiveHubTab] = useState<"videos" | "free" | "courses" | "knowledge">("videos");
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<"join" | "global" | "research" | "testimonials">("join");

  return (
    <>
      {/* ── Hero ── */}
      <section className="mandala-veil relative overflow-hidden bg-warm px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise text-center lg:text-left">
            <p className="inline-block rounded-full border border-primary/30 bg-primary/8 px-4 py-1 text-[0.65rem] uppercase tracking-[0.26em] text-primary">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/80 sm:text-xl">
              {t("hero.subtitle")}
            </p>

            {/* Quick Audience Role Pills */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {[
                { label: "Planning Couple", sub: "गर्भधारण पूर्व", to: "/learn" },
                { label: "Pregnant Mother", sub: "गर्भावस्था", to: "/knowledge" },
                { label: "Father & Family", sub: "परिवार", to: "/learn" },
                { label: "Educator / Prerak", sub: "प्रेरक", to: "/courses" },
              ].map((pill) => (
                <Link
                  key={pill.label}
                  to={pill.to}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/90 px-3.5 py-1.5 text-xs font-medium text-ink transition-all hover:border-primary hover:bg-primary/10 hover:text-primary shadow-xs active:scale-95"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{pill.label}</span>
                  <span className="font-deva text-[0.65rem] text-primary/70">{pill.sub}</span>
                </Link>
              ))}
            </div>

            {lang === "en" && (
              <p className="font-deva mt-4 text-base font-medium text-primary/85">
                गर्भ से विश्व तक – स्वस्थ, संस्कारित और करुणामय पीढ़ी का निर्माण
              </p>
            )}
            <p className="mt-3 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
              {t("hero.support")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild variant="hero" size="lg" className="glow-primary min-h-[44px]">
                <Link to="/learn">{t("cta.learn")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[44px]">
                <Link to="/free-services">{t("cta.joinFree")}</Link>
              </Button>
              <Button asChild variant="gold" size="lg" className="glow-gold min-h-[44px]">
                <Link to="/ask-shree">
                  <Sparkles className="h-4 w-4" />
                  {t("cta.askShree")}
                </Link>
              </Button>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {t("cta.needGuidance")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/12 blur-3xl animate-soft-pulse" />

            {/* Floating Glassmorphic Badges */}
            <div className="absolute -left-5 top-8 z-10 hidden items-center gap-3 rounded-2xl border border-gold/40 bg-background/95 p-3 shadow-lg backdrop-blur-md sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold-foreground">
                  First 1,000 Days
                </p>
                <p className="text-xs font-medium text-ink">Critical Neural Window</p>
              </div>
            </div>

            <div className="absolute -right-5 bottom-8 z-10 hidden items-center gap-3 rounded-2xl border border-primary/40 bg-background/95 p-3 shadow-lg backdrop-blur-md sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-xl font-medium text-primary">
                ॐ
              </span>
              <div className="text-left">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                  Vedic + Science
                </p>
                <p className="text-xs font-medium text-ink">Epigenetics Synthesized</p>
              </div>
            </div>

            <img
              src={heroImage}
              alt="Symbolic illustration of a mother, lotus and connected world — Garbh Sanskar"
              width={1408}
              height={1408}
              className="w-full rounded-[2.5rem] border border-primary/20 object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      {/* ── Science stats bar ── */}
      <div className="border-y border-border bg-secondary/30 py-1">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {SCIENCE_STATS.map(({ n, label, sub }) => (
            <div
              key={label}
              className="surface-glass flex flex-col items-center px-6 py-5 text-center transition-all hover:bg-background"
            >
              <span className="text-2xl font-medium text-primary sm:text-3xl">{n}</span>
              <span className="mt-1 text-sm font-medium text-ink">{label}</span>
              <span className="mt-0.5 text-[0.68rem] leading-snug text-muted-foreground">{sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 1. Consolidated Foundations & 5 Pillars ── */}
      <Section>
        <SectionHeading
          eyebrow="Foundations & Approach"
          title="What is Garbh Sanskar & Our 5 Pillars"
          subtitle="Combining ancient intra-uterine nurturing wisdom with a structured 5-pillar educational framework."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {garbhSanskarBasics.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </div>

        {/* 5 Pillars Row */}
        <div className="mt-10 rounded-3xl border border-primary/20 bg-secondary/30 p-6 sm:p-8">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-primary font-semibold text-center">
            Our 5 Pillars of Action
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <div key={p.title} className="surface-card p-5 text-center">
                {p.icon && (
                  <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                )}
                <h4 className="text-sm font-medium text-ink">{p.title}</h4>
                <p className="font-deva text-xs text-primary/80 mt-0.5">{p.hindi}</p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 2. Unified Ancient Wisdom & Modern Science Bridge (Sling Cards) ── */}
      <AncientScienceBridge />

      {/* ── 3. Interactive Learning & Media Hub (CONSOLIDATED - LESS SCROLLABLE) ── */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Comprehensive Media & Learning Hub"
          title="Videos, Free Classes, Courses & Knowledge"
          subtitle="Everything in one interactive place — watch reference video lessons, access free classes, browse accredited courses, or read research articles."
        />

        {/* Tab Navigation Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "videos", label: "🎥 Reference YouTube Videos", icon: Video },
            { id: "free", label: "🎁 Free Education & Services", icon: Sparkles },
            { id: "courses", label: "🎓 Courses & Training", icon: GraduationCap },
            { id: "knowledge", label: "📖 Knowledge Articles", icon: BookOpen },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveHubTab(tab.id as any)}
              className={cn(
                "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95",
                activeHubTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-ink",
              )}
            >
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="mt-10">
          {activeHubTab === "videos" && (
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Educational Garbh Sanskar reference YouTube videos. Click any video card to play directly in-page.
                </p>
                <Button asChild variant="outline" size="sm" className="min-h-[40px]">
                  <Link to="/free-services">Watch All Videos</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {freeVideos.map((v) => (
                  <VideoCard key={v.id + v.title} video={v} />
                ))}
              </div>
            </div>
          )}

          {activeHubTab === "free" && (
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Our core Garbh Sanskar educational services are, and will remain, 100% free to all families.
                </p>
                <Button asChild variant="hero" size="sm" className="min-h-[40px]">
                  <Link to="/free-services">{t("cta.joinFree")}</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {freeServices.map((s) => (
                  <FeatureCard key={s.title} {...s} />
                ))}
              </div>
            </div>
          )}

          {activeHubTab === "courses" && (
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Structured learning tracks certified for parents, educators, Preraks, and academic faculty.
                </p>
                <Button asChild variant="outline" size="sm" className="min-h-[40px]">
                  <Link to="/courses">View All Courses</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.slice(0, 3).map((c) => (
                  <CourseCard key={c.title} {...c} />
                ))}
              </div>
            </div>
          )}

          {activeHubTab === "knowledge" && (
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Concise articles based on cultural wisdom and verified developmental science.
                </p>
                <Button asChild variant="outline" size="sm" className="min-h-[40px]">
                  <Link to="/knowledge">Browse Knowledge Base</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {knowledgeArticles.slice(0, 4).map((a) => (
                  <KnowledgeCard key={a.title} {...a} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* ── 4. Ask Shree AI & Consultation Guidance ── */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Learning companion & guidance"
              title="Ask Shree AI or Get Personal Support"
              subtitle="Your educational companion for Garbh Sanskar. Ask what to learn, or connect with qualified educational consultants."
            />
            <ul className="mt-8 space-y-2.5">
              {[
                "What should I learn before pregnancy?",
                "What is Garbh Samvad?",
                "What should I learn during the 5th month?",
                "What role can the father play?",
              ].map((q) => (
                <li key={q}>
                  <button
                    type="button"
                    onClick={() => setSelectedQuestion(q)}
                    className="flex items-start gap-2.5 text-left text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer group"
                  >
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold transition-transform group-hover:scale-125" />
                    <span className="group-hover:underline">{q}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="min-h-[44px]">
                <Link to="/ask-shree">Open Full Ask Shree AI</Link>
              </Button>
              <Button asChild variant="hero" className="min-h-[44px]">
                <Link to="/contact">Book Consultation Guidance</Link>
              </Button>
            </div>
          </div>
          <AskShreeChat externalQuestion={selectedQuestion} />
        </div>
      </Section>

      {/* ── 5. Global Ecosystem & Impact Hub (CONSOLIDATED - LESS SCROLLABLE) ── */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Global Movement & Community"
          title="Participate, Collaborate & Connect"
          subtitle="Discover how educators, researchers, volunteers, and institutions build the Garbh Sanskar ecosystem together."
        />

        {/* Ecosystem Tab Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "join", label: "🤝 Join the Mission", icon: Users },
            { id: "global", label: "🌍 Global Reach", icon: Globe2 },
            { id: "research", label: "🔬 Research & Evidence", icon: FlaskConical },
            { id: "testimonials", label: "💬 Testimonials", icon: HeartHandshake },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveEcosystemTab(tab.id as any)}
              className={cn(
                "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95",
                activeEcosystemTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-ink",
              )}
            >
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {activeEcosystemTab === "join" && (
            <div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {joinRoles.map((r) => (
                  <FeatureCard key={r.title} {...r} />
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button asChild variant="hero" size="lg" className="min-h-[44px]">
                  <Link to="/join">Join the Mission</Link>
                </Button>
              </div>
            </div>
          )}

          {activeEcosystemTab === "global" && (
            <div className="mandala-veil rounded-3xl border border-primary/20 bg-warm p-8 lg:p-12">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-3xl text-ink">Global Movement & Network</h3>
                  <p className="font-deva mt-4 text-2xl font-medium text-primary">वसुधैव कुटुम्बकम्</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    One World, One Family
                  </p>
                  <dl className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      ["12+", "States & regions"],
                      ["100+", "Volunteers enrolled"],
                      ["2", "Languages, more coming"],
                    ].map(([n, l]) => (
                      <div key={l} className="surface-card p-4 text-center">
                        <dt className="text-2xl font-medium text-primary">{n}</dt>
                        <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="relative mx-auto aspect-square w-full max-w-sm">
                  <div className="absolute inset-0 rounded-full border border-dashed border-gold/50 animate-slow-spin" />
                  <Globe2
                    className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-primary/70"
                    strokeWidth={0.8}
                  />
                </div>
              </div>
            </div>
          )}

          {activeEcosystemTab === "research" && (
            <div>
              <div className="mb-8 rounded-2xl border border-primary/30 bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FlaskConical className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-ink">The First 1,000 Days Window</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Developmental neuroscience acknowledges conception through age two as the primary window for lifelong health, cognition and emotional resilience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {researchTopics.map((r) => (
                  <ResearchCard key={r.topic} {...r} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="min-h-[44px]">
                  <Link to="/research">View Full Research & Science</Link>
                </Button>
              </div>
            </div>
          )}

          {activeEcosystemTab === "testimonials" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((tm) => (
                <TestimonialCard key={tm.name} {...tm} />
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection
          title="Begin with knowledge, not obligation"
          body="Start with a free class, explore the Knowledge Centre, or ask Shree AI where to begin. Personal guidance is always available if you need it."
          primary={{ to: "/free-services", label: "Join Free Classes" }}
          secondary={{ to: "/contact", label: "Get Guidance" }}
        />
      </Section>
    </>
  );
}

