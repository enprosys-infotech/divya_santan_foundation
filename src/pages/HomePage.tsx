import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import androidBadge from "@/assets/DownloadAndroid.png";
import iosBadge from "@/assets/DownloadIOS.png";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  // Hub tab icons
  PlayCircle,
  Gift,
  GraduationCap,
  BookOpenCheck,
  MessageCircle,
  // Ecosystem tab icons
  Handshake,
  Globe,
  FlaskConical,
  Quote,
  // Free Services card icons
  CalendarCheck,
  BrainCircuit,
  BookMarked,
  BookText,
  Youtube,
  Instagram,
  // Social Mission pillar icons
  Bird,
  Heart,
  Leaf,
  Dna,
  Earth,
  ChevronDown,
  // Audience pill icons
  Baby,
  HeartHandshake,
  Users,
  Microscope,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import hero1 from "@/assets/Hero-1.png";
import hero2 from "@/assets/Hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import { AncientScienceBridge } from "@/components/site/AncientScienceBridge";
import { AskShreeChat } from "@/components/site/AskShreeChat";
import { useChatWidget } from "@/hooks/useChatWidget";
import {
  FeatureCard,
  KnowledgeCard,
  CourseCard,
  TestimonialCard,
  MobileAppCTA,
} from "@/components/site/Cards";
import { WhoCanBenefitPanel } from "@/components/site/WhoCanBenefitPanel";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { VideoCard } from "@/components/site/VideoCard";
import { InstaReelCard } from "@/components/site/InstaReelCard";
import { Button } from "@/components/ui/button";
import {
  AUDIENCE_PILLS,
  GARBH_BASICS,
  GLOBAL_STATS,
  INSTAGRAM_PROFILE_URL,
  INSTAGRAM_REELS,
  JOIN_ROLES,
  JOURNEYS,
  KNOWLEDGE_ARTICLES,
  PILLARS,
  COURSES,
  RESEARCH_TOPICS,
  ASK_SHREE_QUESTIONS,
  SCIENCE_STATS,
  TESTIMONIALS,
  VIDEOS,
  YOUTUBE_CHANNEL_URL,
  type AskShreeQuestionId,
} from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type HubTab = "videos" | "freeServices" | "courses" | "knowledge" | "consultation";
type EcosystemTab = "join" | "global" | "research" | "testimonials";

const HUB_TAB_ICONS: Record<HubTab, LucideIcon> = {
  freeServices: Gift,
  videos: PlayCircle,
  courses: GraduationCap,
  knowledge: BookOpenCheck,
  consultation: MessageCircle,
};

const ECOSYSTEM_TAB_ICONS: Record<EcosystemTab, LucideIcon> = {
  join: Handshake,
  global: Globe,
  research: FlaskConical,
  testimonials: Quote,
};

const FREE_SERVICE_ICONS: Record<string, LucideIcon> = {
  classes: CalendarCheck,
  ai: BrainCircuit,
  booklet: BookMarked,
  book: BookText,
  youtube: Youtube,
  instagram: Instagram,
};

const SOCIAL_MISSION_ICONS: Record<string, LucideIcon> = {
  peace: Bird,
  love: Heart,
  health: Leaf,
  epigenetics: Dna,
  global: Earth,
};

/** Maps each audience pill id to a Lucide icon for quick visual self-identification */
const AUDIENCE_PILL_ICONS: Record<string, LucideIcon> = {
  planningCouple: HeartHandshake,
  pregnantWoman: Baby,
  socialWorker: Users,
  academicPerson: Microscope,
  consultant: UserCheck,
};

const HERO_SLIDES = [hero1, hero2, hero3, hero4, hero5];
const SLIDE_INTERVAL = 10000;

export default function HomePage() {
  const { t } = useI18n();
  const copy = t.home;
  const { open: openChat } = useChatWidget();

  const [hubTab, setHubTab] = useState<HubTab>("freeServices");
  const [ecosystemTab, setEcosystemTab] = useState<EcosystemTab>("join");
  const [gsTab, setGsTab] = useState<"etymology" | "practice" | "science">("etymology");
  const [externalQuestion, setExternalQuestion] = useState<AskShreeQuestionId | undefined>();

  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const meta = getDictionary().home.meta;
    document.title = meta.title;
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning],
  );

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-15">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.hero.eyebrow}
            </p>
            <h1 className="animate-rise mt-5 text-5xl leading-tight text-ink sm:text-5xl lg:text-[5.9vh]">
              {copy.hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-base-readable text-muted-foreground">
              {copy.hero.subtitle}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-secondary/60">
              {copy.hero.support}
            </p>

            {/* Audience pills — 5 visitor categories, each scrolls to the matching card below */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {AUDIENCE_PILLS.map((pill) => {
                const PillIcon = AUDIENCE_PILL_ICONS[pill.id] ?? Heart;
                return (
                  <a
                    key={pill.id}
                    href="#who-can-benefit"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("who-can-benefit")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="flex flex-col gap-1.5 rounded-xl border border-border bg-background/80 px-4 py-3 text-left transition-all hover:border-primary/50 hover:bg-background hover:shadow-md active:scale-[0.97] cursor-pointer"
                  >
                    <PillIcon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-ink leading-tight">
                      {copy.hero.pills[pill.id].label}
                    </span>
                    <span className="text-[0.68rem] text-muted-foreground leading-snug">
                      {copy.hero.pills[pill.id].sub}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Badge strip */}
            <div className="mt-8 flex flex-wrap gap-2">
              {Object.values(copy.hero.badges).map((badge, i) => (
                <span
                  key={badge}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[0.7rem] font-medium",
                    i % 2 === 0
                      ? "border-secondary/25 bg-secondary/8 text-secondary"
                      : "border-primary/20 bg-primary/8 text-primary",
                  )}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/garbh-sanskar">{t.cta.learn}</Link>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/free-services">{t.cta.joinFree}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">{t.cta.needGuidance}</Link>
              </Button>
            </div>
          </div>

          {/* Hero image carousel */}
          <div className="relative hidden overflow-hidden rounded-3xl shadow-[var(--shadow-lift)] lg:block">
            {/* Slides */}
            <div className="relative h-[480px] w-full">
              {HERO_SLIDES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${copy.hero.imageAlt} ${i + 1}`}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    i === activeSlide ? "opacity-100" : "opacity-0",
                  )}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}

              {/* Gradient overlay at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/40 to-transparent rounded-b-3xl" />
            </div>

            {/* Prev / Next arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-ink shadow backdrop-blur-sm transition-all hover:bg-background/90 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-ink shadow backdrop-blur-sm transition-all hover:bg-background/90 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === activeSlide
                      ? "w-6 bg-primary"
                      : "w-2 bg-background/70 hover:bg-background",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What is Garbh Sanskar? ───────────────────────────────── */}
      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          {/* Eyebrow */}
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
            {copy.foundations.eyebrow}
          </p>

          {/* ── Main two-column layout ── */}
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
            {/* LEFT — Anchor statement + principle */}
            <div className="lg:pr-12">
              {/* Large editorial headline */}
              <div className="border-l-2 border-gold/60 pl-5">
                <h2 className="text-3xl font-light leading-snug text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
                  {copy.foundations.whatIs.title}
                </h2>
              </div>

              {/* Distilled essence — the one line a visitor will remember */}
              <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                {copy.foundations.whatIs.definition}
              </p>

              {/* Principle callout — quiet gold block, not a decorative gradient box */}
              <div className="mt-8 border-t border-gold/25 pt-7">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-foreground">
                  {copy.foundations.whatIs.principle.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  {copy.foundations.whatIs.principle.body}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy.foundations.whatIs.principle.conclusion}
                </p>
              </div>
            </div>

            {/* Vertical rule — visible on lg only */}
            <div className="hidden lg:block border-l border-border" />

            {/* RIGHT — Tabbed accordion: Etymology / Practice / Modern Science */}
            <div className="lg:pl-12">
              {/* Tab strip */}
              <div
                role="tablist"
                aria-label="Garbh Sanskar detail tabs"
                className="flex gap-1 rounded-xl border border-border bg-warm p-1"
              >
                {(
                  [
                    { id: "etymology" as const, label: "Philosophy" },
                    { id: "practice" as const, label: "Practice" },
                    { id: "science" as const, label: "Science" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={gsTab === tab.id}
                    onClick={() => setGsTab(tab.id)}
                    className={cn(
                      "flex-1 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      gsTab === tab.id
                        ? "bg-background text-ink shadow-sm"
                        : "text-muted-foreground hover:text-ink",
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Panel */}
              <div
                role="tabpanel"
                className="mt-5 min-h-[11rem] text-sm leading-relaxed text-muted-foreground transition-opacity duration-200"
              >
                {gsTab === "etymology" && <p>{copy.foundations.whatIs.philosophy}</p>}
                {gsTab === "practice" && <p>{copy.foundations.whatIs.approach}</p>}
                {gsTab === "science" && <p>{copy.foundations.whatIs.science}</p>}
              </div>

              {/* Pull-quote — sits below the panel, always visible */}
              <blockquote className="mt-6 border-l border-secondary/40 pl-4">
                <p className="text-sm italic leading-relaxed text-secondary">
                  &ldquo;{copy.foundations.whatIs.quote}&rdquo;
                </p>
              </blockquote>

              {/* CTA link */}
              <div className="mt-8">
                <Button asChild variant="outline" size="sm">
                  <Link to="/garbh-sanskar" className="gap-1.5">
                    {t.cta.learn} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* ── Bottom disclaimer strip — quiet, not a card ── */}
          <details className="group mt-12 border-t border-border pt-5">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-xs text-muted-foreground hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              <ChevronDown
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
              <span className="uppercase tracking-[0.18em]">
                ⚕️ Medical disclaimer &amp; source
              </span>
            </summary>
            <div className="mt-3 space-y-1.5 pl-5">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {copy.foundations.whatIs.disclaimer}
              </p>
              <p className="text-[0.68rem] italic text-muted-foreground/70">
                {copy.foundations.whatIs.source}
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ── 3. Why It Matters — Science / Stats ─────────────────────── */}
      <section className="border-b border-border bg-accent/50 px-5 py-10 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.foundations.whatIs.whyMatters.title}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {copy.foundations.whatIs.whyMatters.body}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {SCIENCE_STATS.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="text-2xl font-semibold text-secondary sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-ink">{copy.stats[stat.id].label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{copy.stats[stat.id].sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Who Can Benefit? — 5 User Journeys ───────────────────── */}
      <Section id="who-can-benefit" className="border-b border-border bg-warm">
        <SectionHeading
          eyebrow={copy.whoBenefits.eyebrow}
          title={copy.whoBenefits.title}
          subtitle={copy.whoBenefits.subtitle}
        />
        <WhoCanBenefitPanel journeys={JOURNEYS as unknown as any} icons={AUDIENCE_PILL_ICONS} />
      </Section>

      {/* ── 5. Our Social Mission ────────────────────────────────────── */}
      <section
        className="border-b border-border px-5 py-16 sm:px-8 sm:py-20"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.945 0.055 82) 45%, oklch(0.920 0.072 70) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Eyebrow */}
          <p className="text-center text-[0.80rem] font-bold uppercase tracking-[0.3em] text-[#e26300ff]">
            {copy.socialMission.eyebrow}
          </p>

          {/* Sanskrit headline */}
          <div className="mt-4 text-center">
            <p className="font-deva text-3xl text-secondary sm:text-4xl">
              {copy.socialMission.vasudhaiva}
            </p>
            <p className="mt-2 text-sm italic text-ink/60">
              — {copy.socialMission.vasudhaivaMeaning}
            </p>
          </div>

          {/* Decorative gold divider */}
          <div className="mx-auto mt-6 flex items-center gap-4 max-w-xs">
            <span className="flex-1 border-t border-gold/40" />
            <span className="text-gold text-lg">✦</span>
            <span className="flex-1 border-t border-gold/40" />
          </div>

          {/* Section title */}
          <h2 className="mt-6 text-center text-2xl leading-snug text-secondary sm:text-3xl lg:text-4xl">
            {copy.socialMission.title}
          </h2>

          {/* Body copy */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <p className="text-base leading-relaxed text-ink/80">{copy.socialMission.body}</p>
            <p className="text-base leading-relaxed text-ink/80">
              {copy.socialMission.epigenetics}
            </p>
          </div>

          {/* Pillar pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {copy.socialMission.pillars.map((p) => {
              const PillarIcon = SOCIAL_MISSION_ICONS[p.icon] ?? Heart;
              return (
                <span
                  key={p.label}
                  className="flex items-center gap-2 rounded-full border border-primary/25 bg-white/60 px-4 py-2 text-sm text-secondary shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-primary/10 hover:border-primary/40"
                >
                  <PillarIcon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  {p.label}
                </span>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="border border-secondary/30 bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90"
            >
              <Link to="/about">{copy.socialMission.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 6. Trust & Leadership ────────────────────────────────────── */}
      <section className="border-b border-border bg-background px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.leadership.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl text-ink sm:text-3xl">{copy.leadership.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
              {copy.leadership.subtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-gold/30 shadow-md">
                <img
                  src="/Avdheshanand-maharaj.png"
                  alt={copy.leadership.members.avdheshanand.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">
                {copy.leadership.members.avdheshanand.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-foreground">
                {copy.leadership.members.avdheshanand.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {copy.leadership.members.avdheshanand.bio}
              </p>
            </div>
            <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 shadow-md">
                <img
                  src="/vinod-sir.png"
                  alt={copy.leadership.members.vinod.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">
                {copy.leadership.members.vinod.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary">
                {copy.leadership.members.vinod.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {copy.leadership.members.vinod.bio}
              </p>
            </div>
             <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 shadow-md">
                <img
                  src="/anil-sir.png"
                  alt={copy.leadership.members.anil.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">
                {copy.leadership.members.anil.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary">
                {copy.leadership.members.anil.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {copy.leadership.members.anil.bio}
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="sm">
              <Link to="/about" className="gap-1.5">
                {copy.leadership.meetTeam} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 7. Five Pillars of Divya Santan Prakalp ─────────────────── */}
      <Section className="border-b border-border">
        <SectionHeading
          eyebrow={copy.foundations.eyebrow}
          title={copy.foundations.title}
          subtitle={copy.foundations.subtitle}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GARBH_BASICS.map((basic) => {
            const iconMap: Record<string, any> = {
              preConception: "leaf",
              pregnancyJourney: "lotus",
              garbhSamvad: "om",
              familyEnvironment: "sun",
            };
            return (
              <FeatureCard
                key={basic.id}
                spiritualIcon={iconMap[basic.id] as any}
                iconVariant={basic.iconVariant}
                {...t.content.basics[basic.id]}
              />
            );
          })}
        </div>
        <div className="gold-rule mx-auto mt-16 mb-6 max-w-xs" />
        <p className="mx-auto mb-6 max-w-xs text-center text-[0.68rem] uppercase tracking-[0.26em] text-gold-foreground">
          {copy.foundations.pillarsLabel}
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar) => (
            <FeatureCard
              key={pillar.id}
              icon={pillar.icon}
              iconVariant={pillar.iconVariant}
              {...t.content.pillars[pillar.id]}
            />
          ))}
        </div>
      </Section>

      {/* ── 8. Ancient Science Bridge ────────────────────────────────── */}
      <AncientScienceBridge />

      {/* ── Comprehensive Learning & Support Hub ─────────────────────── */}
      <Section id="hub">
        <SectionHeading
          eyebrow={copy.hub.eyebrow}
          title={copy.hub.title}
          subtitle={copy.hub.subtitle}
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["freeServices", "videos", "courses", "knowledge", "consultation"] as HubTab[]).map(
            (tab) => {
              const TabIcon = HUB_TAB_ICONS[tab];
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setHubTab(tab)}
                  className={cn(
                    "cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                    hubTab === tab
                      ? "bg-secondary text-secondary-foreground shadow"
                      : "border border-border text-muted-foreground hover:border-secondary/40 hover:text-ink",
                  )}
                >
                  <TabIcon className="h-4 w-4" strokeWidth={1.75} />
                  {copy.hub.tabs[tab]}
                </button>
              );
            },
          )}
        </div>

        <div className="mt-10">
          {hubTab === "videos" && (
            <>
              {/* YouTube Videos Section */}
              <div className="mb-12">
                <h3 className="mb-4 text-center text-xl font-medium text-ink">
                  {copy.hub.videos.youtubeHeading}
                </h3>
                <p className="mb-8 text-center text-base text-muted-foreground">
                  {copy.hub.videos.description}
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {VIDEOS.slice(0, 3).map((v) => (
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
                      {copy.hub.videos.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Instagram Reels Section */}
              <div className="border-t border-border pt-12">
                <h3 className="mb-4 text-center text-xl font-medium text-ink">
                  {copy.hub.videos.instagramHeading}
                </h3>
                <p className="mb-8 text-center text-base text-muted-foreground">
                  {copy.hub.videos.instagramDescription}
                </p>
                <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {INSTAGRAM_REELS.slice(0, 3).map((r) => (
                    <InstaReelCard
                      key={r.id}
                      reelId={r.reelId}
                      duration={r.duration}
                      {...t.content.instagramReels[r.id]}
                    />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild variant="outline" size="lg">
                    <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                      {copy.hub.videos.instagramCta} <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}

          {hubTab === "freeServices" && (
            <>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-medium text-ink">{copy.hub.freeServices.title}</h3>
                <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
                  {copy.hub.freeServices.description}
                </p>
              </div>

              {/* Free Services Grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {copy.hub.freeServices.items.map((item) => {
                  const ServiceIcon = FREE_SERVICE_ICONS[item.icon] ?? CalendarCheck;
                  return (
                    <div key={item.title} className="surface-card flex flex-col p-6">
                      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ServiceIcon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <h4 className="text-base font-medium text-ink">{item.title}</h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Upcoming Classes Schedule */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-warm p-8">
                <h3 className="text-center text-xl font-medium text-ink">
                  {copy.hub.freeServices.schedule.title}
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-center text-base text-muted-foreground">
                  {copy.hub.freeServices.schedule.subtitle}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {copy.hub.freeServices.schedule.sessions.map((session) => (
                    <div
                      key={session.topic}
                      className="rounded-xl border border-border bg-background p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                        {session.day}
                      </p>
                      <p className="mt-2 text-base font-medium text-ink">{session.topic}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{session.duration}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/free-services">{copy.hub.freeServices.schedule.cta}</Link>
                  </Button>
                </div>
              </div>
            </>
          )}

          {hubTab === "courses" && (
            <>
              <p className="mb-8 text-center text-base text-muted-foreground">
                {copy.hub.courses.description}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {COURSES.slice(0, 3).map((c) => (
                  <CourseCard key={c.id} {...t.content.courses[c.id]} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/courses">
                    {copy.hub.courses.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}

          {hubTab === "knowledge" && (
            <>
              <p className="mb-8 text-center text-base text-muted-foreground">
                {copy.hub.knowledge.description}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {KNOWLEDGE_ARTICLES.slice(0, 4).map((a) => {
                  const article = t.content.knowledgeArticles[a.id];
                  const catLabel = t.content.knowledgeCategories[a.category];
                  return (
                    <KnowledgeCard
                      key={a.id}
                      category={catLabel}
                      title={article.title}
                      readTime={article.readTime}
                      body={article.body}
                    />
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/knowledge">
                    {copy.hub.knowledge.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}

          {hubTab === "consultation" && (
            <div className="mandala-veil relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-secondary/20 bg-warm px-6 py-10 sm:px-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-center">
                {/* Left: Info */}
                <div>
                  <span className="rounded-full border border-secondary/30 bg-secondary/8 px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary">
                    {copy.hub.consultation.badge}
                  </span>
                  <h3 className="mt-4 text-2xl text-ink sm:text-3xl">
                    {copy.hub.consultation.title}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-primary">
                    {copy.hub.consultation.tagline}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {copy.hub.consultation.description}
                  </p>

                  {/* Steps */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {copy.hub.consultation.steps.map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-ink">
                          {step}
                        </span>
                        {i < copy.hub.consultation.steps.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-gold" />
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-xs italic text-muted-foreground">
                    * {copy.hub.consultation.note}
                  </p>
                </div>

                {/* Right: App Download */}
                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <p className="text-sm font-medium text-ink">{copy.hub.consultation.cta}</p>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-105 active:scale-95"
                    aria-label={copy.hub.consultation.androidLabel}
                  >
                    <img
                      src={androidBadge}
                      alt={copy.hub.consultation.androidLabel}
                      className="h-16 w-auto rounded-lg"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-105 active:scale-95"
                    aria-label={copy.hub.consultation.iosLabel}
                  >
                    <img
                      src={iosBadge}
                      alt={copy.hub.consultation.iosLabel}
                      className="h-12 pl-3 w-auto rounded-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* ── Ask Shree section ────────────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.ai.eyebrow}
          title={copy.ai.title}
          subtitle={copy.ai.subtitle}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {externalQuestion !== undefined ? (
            <AskShreeChat externalQuestion={externalQuestion} />
          ) : (
            <AskShreeChat />
          )}

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.24em] text-secondary">{copy.ai.eyebrow}</p>
            <div className="flex flex-col gap-2">
              {ASK_SHREE_QUESTIONS.map(({ id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setExternalQuestion(id)}
                  className="cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-left text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-ink active:scale-[0.98]"
                >
                  {t.askShree.questions[id].question}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="hero" size="lg" onClick={openChat} className="cursor-pointer">
                {copy.ai.openFull}
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">{t.cta.guidance}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Global Ecosystem ─────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow={copy.ecosystem.eyebrow}
          title={copy.ecosystem.title}
          subtitle={copy.ecosystem.subtitle}
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["join", "global", "research", "testimonials"] as EcosystemTab[]).map((tab) => {
            const EcoIcon = ECOSYSTEM_TAB_ICONS[tab];
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setEcosystemTab(tab)}
                className={cn(
                  "cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  ecosystemTab === tab
                    ? "bg-secondary text-secondary-foreground shadow"
                    : "border border-border text-muted-foreground hover:border-secondary/40 hover:text-ink",
                )}
              >
                <EcoIcon className="h-4 w-4" strokeWidth={1.75} />
                {copy.ecosystem.tabs[tab]}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          {ecosystemTab === "join" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {JOIN_ROLES.map((role) => {
                const roleData = t.content.joinRoles[role.id];
                return (
                  <Link
                    key={role.id}
                    to="/join"
                    className="surface-card surface-card-hover flex flex-col p-6"
                  >
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <role.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="text-lg text-ink">{roleData.title}</h3>
                    {roleData.native && (
                      <p className="font-deva mt-1 text-sm text-primary/80">{roleData.native}</p>
                    )}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {roleData.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
                      {t.common.learnMore} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {ecosystemTab === "global" && (
            <div className="space-y-8">
              <h3 className="text-center text-2xl text-ink">{copy.global.title}</h3>
              <div className="mx-auto grid max-w-xl grid-cols-3 gap-6">
                {GLOBAL_STATS.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {copy.global.stats[stat.id]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ecosystemTab === "research" && (
            <div className="space-y-8">
              <div className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-warm p-8 text-center">
                <h3 className="text-xl text-ink">{copy.research.windowTitle}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {copy.research.windowDesc}
                </p>
                <Button asChild variant="outline" size="lg" className="mt-6">
                  <Link to="/research">{copy.research.cta}</Link>
                </Button>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {RESEARCH_TOPICS.slice(0, 3).map((rt, idx) => {
                  // Map research topics to spiritual icons
                  const iconMap: Record<number, any> = {
                    0: "om",
                    1: "yoga",
                    2: "leaf",
                  };
                  const spiritualIconKey = iconMap[idx];
                  return (
                    <FeatureCard
                      key={rt.id}
                      spiritualIcon={spiritualIconKey}
                      title={t.content.researchTopics[rt.id].topic}
                      body={t.content.researchTopics[rt.id].summary}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {ecosystemTab === "testimonials" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((tm) => (
                <TestimonialCard key={tm.id} {...t.content.testimonials[tm.id]} />
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* ── Final CTA: Mobile App Download ─────────────────────────── */}
      <Section>
        <MobileAppCTA />
      </Section>
    </>
  );
}
