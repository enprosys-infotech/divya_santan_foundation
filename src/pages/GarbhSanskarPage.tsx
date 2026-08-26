import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Heart,
  Leaf,
  Sparkles,
  Users,
  ChevronDown,
  ChevronRight,
  Sun,
  Music,
  Apple,
  Wind,
  Baby,
  Star,
  Flame,
  Brain,
  Eye,
  HandHeart,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";
import { getDictionary, useI18n } from "@/i18n";

// ─── Tab key types ────────────────────────────────────────────────────────────

type PhilosophyTab = "garbh" | "sanskar" | "together";
type ScienceTab = "epigenetics" | "bonding" | "stress" | "sound";
type StageTab = "garbhadhan" | "punswan" | "simantonayan";
type JourneyDeepTab = "premarital" | "dreamChild" | "astrology";

// ─── Icon maps (icon objects don't need translation) ─────────────────────────

// ─── Icon helpers (indexed access always returns a valid component) ───────────

function getIcon(arr: React.ElementType[], i: number): React.ElementType {
  return arr[i % arr.length] ?? Heart;
}

const STEP_ICONS: React.ElementType[] = [Leaf, Apple, Sun, Wind, Flame, FlaskConical, Leaf, Wind, Sparkles];
const PRACTICE_ICONS: React.ElementType[] = [Apple, Wind, Brain, Music, Heart, Sun, Users, Leaf];
const ELEMENT_ICONS: React.ElementType[] = [Sun, Heart, Leaf, Sparkles];
const EXTRA_ICONS: React.ElementType[] = [Baby, Sun, Eye, Star];
const ROLE_ICONS: React.ElementType[] = [HandHeart, Users, Heart];

const SCIENCE_ICONS: Record<ScienceTab, React.ElementType> = {
  epigenetics: FlaskConical,
  bonding: Heart,
  stress: Brain,
  sound: Music,
};

const STAGE_ICONS: Record<StageTab, React.ElementType> = {
  garbhadhan: Sparkles,
  punswan: Leaf,
  simantonayan: Brain,
};

const ROLE_COLORS = [
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-gold/20 text-gold-foreground",
] as const;

const MONTH_COLORS: Array<{ color: string; bg: string }> = [
  { color: "text-primary", bg: "bg-primary/10" },
  { color: "text-primary", bg: "bg-primary/10" },
  { color: "text-secondary", bg: "bg-secondary/10" },
  { color: "text-gold-foreground", bg: "bg-gold/15" },
  { color: "text-gold-foreground", bg: "bg-gold/15" },
  { color: "text-secondary", bg: "bg-secondary/10" },
  { color: "text-primary", bg: "bg-primary/10" },
  { color: "text-primary", bg: "bg-primary/10" },
  { color: "text-secondary", bg: "bg-secondary/10" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GarbhSanskarPage() {
  const { t } = useI18n();
  const copy = t.learnPage;

  const [philosophyTab, setPhilosophyTab] = useState<PhilosophyTab>("garbh");
  const [scienceTab, setScienceTab] = useState<ScienceTab>("epigenetics");
  const [stageTab, setStageTab] = useState<StageTab>("garbhadhan");
  const [journeyDeepTab, setJourneyDeepTab] = useState<JourneyDeepTab>("premarital");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const meta = getDictionary().learn.meta;
    document.title = meta.title;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal-id");
            if (id) setVisibleSections((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.12 },
    );
    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  // ── Derived tab data from copy ─────────────────────────────────────────────

  const philosophyTabs = (["garbh", "sanskar", "together"] as PhilosophyTab[]).map((id) => ({
    id,
    label: copy.philosophy.tabs[id].label,
    native: copy.philosophy.tabs[id].native,
  }));

  const scienceTabs = (["epigenetics", "bonding", "stress", "sound"] as ScienceTab[]).map((id) => ({
    id,
    label: copy.science.tabs[id].label,
    Icon: SCIENCE_ICONS[id],
  }));

  const stages = (["garbhadhan", "punswan", "simantonayan"] as StageTab[]).map((id) => ({
    id,
    Icon: STAGE_ICONS[id],
    ...copy.sanskars.stages[id],
  }));

  const preConceptionSteps = (
    ["physical", "diet", "lifestyle", "yoga", "ayurvedic", "panchakarma", "spiritual", "health", "positiveThinking"] as const
  ).map((id, i) => ({
    Icon: getIcon(STEP_ICONS, i),
    ...copy.preConception.steps[id],
  }));

  const fourElements = (["ritukala", "kshetra", "ambu", "beej"] as const).map((id, i) => ({
    id,
    Icon: getIcon(ELEMENT_ICONS, i),
    ...copy.preConception.elements[id],
  }));

  const practiceKeys = (
    ["diet", "yoga", "meditation", "music", "garbhSamvad", "surya", "family", "ayurveda"] as const
  ).map((id, i) => ({
    Icon: getIcon(PRACTICE_ICONS, i),
    ...copy.monthJourney.practices[id],
  }));

  const extraTopicKeys = (["postnatal", "surya", "ayurveda", "dreamChild"] as const).map(
    (id, i) => ({
      Icon: getIcon(EXTRA_ICONS, i),
      ...copy.extraTopics[id],
    }),
  );

  const roles = (["husband", "family", "mother"] as const).map((id, i) => ({
    Icon: getIcon(ROLE_ICONS, i),
    colorClass: ROLE_COLORS[i],
    ...copy.family.roles[id],
  }));

  const pathIcons: React.ElementType[] = [Heart, Baby, BookOpen];
  const pathHrefs = ["#pre-conception", "#pregnancy-journey", "#ritual-or-science"] as const;

  return (
    <>
      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-secondary">
              {copy.hero.eyebrow}
            </p>
            <span className="text-gold text-xs">·</span>
            <p className="font-deva text-sm text-primary/80">{copy.hero.nativeEyebrow}</p>
          </div>

          {/* Editorial headline */}
          <div className="mt-6 max-w-4xl">
            <h1 className="animate-rise text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-[3.5rem]">
              {copy.hero.headline1}
              <br />
              <span className="text-primary">{copy.hero.headline2}</span>
            </h1>
            <div className="mt-5 h-px w-20 bg-gold/60" />
            <p className="mt-5 max-w-2xl text-base-readable text-muted-foreground">
              {copy.hero.intro}
            </p>
          </div>

          {/* Audience routing strip */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {(["planning", "pregnant", "science"] as const).map((key, i) => {
              const Icon = getIcon(pathIcons, i);
              const colorCls =
                i === 0 ? "text-primary" : i === 1 ? "text-secondary" : "text-gold-foreground";
              return (
                <a
                  key={key}
                  href={pathHrefs[i]}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetHref = pathHrefs[i];
                    if (targetHref) {
                      document
                        .querySelector(targetHref)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-background/80 px-5 py-4 transition-all duration-200 hover:border-primary/40 hover:bg-background hover:shadow-md active:scale-[0.98]"
                >
                  <Icon
                    className={cn("mt-0.5 h-5 w-5 shrink-0 transition-colors", colorCls)}
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-sm font-medium text-ink">{copy.hero.paths[key].label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {copy.hero.paths[key].sub}
                    </p>
                  </div>
                  <ChevronRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. PHILOSOPHY ────────────────────────────────────────────── */}
      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_2px_1fr] lg:gap-0">
            {/* LEFT */}
            <div className="lg:pr-14">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                {copy.philosophy.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
                {copy.philosophy.headline1}
                <br />
                {copy.philosophy.headline2}
              </h2>
              <div className="mt-5 h-px w-14 bg-gold/60" />
              <p className="mt-6 text-base-readable text-muted-foreground">
                {copy.philosophy.intro}
              </p>

              <blockquote className="mt-8 rounded-2xl border border-gold/25 bg-accent/40 px-6 py-5">
                <p className="text-sm italic leading-relaxed text-ink/80">
                  "{copy.philosophy.principleQuote}"
                </p>
                <footer className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-gold-foreground">
                  — {copy.philosophy.principleLabel}
                </footer>
              </blockquote>

              <p className="mt-6 text-xs italic text-muted-foreground/70">
                {copy.philosophy.disclaimer}
              </p>
            </div>

            {/* Vertical rule */}
            <div className="hidden border-l border-border lg:block" />

            {/* RIGHT — tabbed */}
            <div className="lg:pl-14">
              <div role="tablist" className="flex rounded-xl border border-border bg-warm p-1">
                {philosophyTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={philosophyTab === tab.id}
                    onClick={() => setPhilosophyTab(tab.id)}
                    className={cn(
                      "flex-1 rounded-lg px-3 py-2.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      philosophyTab === tab.id
                        ? "bg-background text-ink shadow-sm"
                        : "text-muted-foreground hover:text-ink",
                    )}
                  >
                    <span className="block">{tab.label}</span>
                    <span className="font-deva mt-0.5 block text-[0.7rem] text-primary/70">
                      {tab.native}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 min-h-[240px]">
                <h3 className="text-xl text-ink">{copy.philosophy.content[philosophyTab].title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {copy.philosophy.content[philosophyTab].body}
                </p>
                {copy.philosophy.content[philosophyTab].quote && (
                  <blockquote className="mt-5 border-l-2 border-secondary/40 pl-4">
                    <p className="text-sm italic leading-relaxed text-secondary">
                      "{copy.philosophy.content[philosophyTab].quote}"
                    </p>
                  </blockquote>
                )}
              </div>

              <p className="mt-6 text-[0.65rem] italic text-muted-foreground/70">
                {copy.philosophy.reference}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RITUAL OR SCIENCE ─────────────────────────────────────── */}
      <section
        id="ritual-or-science"
        className="border-b border-border px-5 py-16 sm:px-8 sm:py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.945 0.055 82) 45%, oklch(0.920 0.072 70) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.science.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              {copy.science.headline1}
            </h2>
            <div className="mx-auto mt-5 h-px w-14 bg-gold/60" />
            <p className="mx-auto mt-5 max-w-2xl text-base-readable text-muted-foreground">
              {copy.science.intro}
            </p>
          </div>

          <div className="mt-12">
            {/* Tab strip */}
            <div
              role="tablist"
              className="flex gap-2 overflow-x-auto pb-1 sm:justify-center sm:overflow-visible"
            >
              {scienceTabs.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={scienceTab === id}
                  onClick={() => setScienceTab(id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    scienceTab === id
                      ? "bg-secondary text-secondary-foreground shadow"
                      : "border border-border bg-background/80 text-muted-foreground hover:border-secondary/40 hover:text-ink",
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                  {label}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="mx-auto mt-8 max-w-3xl">
              <div className="surface-card p-6 sm:p-8">
                <h3 className="text-xl text-ink">{copy.science.content[scienceTab].title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {copy.science.content[scienceTab].body}
                </p>
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/8 px-5 py-4">
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                    {copy.science.keyFindingLabel}
                  </p>
                  <p className="text-sm leading-relaxed text-ink">
                    {copy.science.content[scienceTab].finding}
                  </p>
                </div>
                <p className="mt-4 text-xs italic text-muted-foreground/70">
                  {copy.science.content[scienceTab].source}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs italic text-muted-foreground/70">
            {copy.science.reference}
          </p>
        </div>
      </section>

      {/* ── 4. PRE-CONCEPTION ────────────────────────────────────────── */}
      <section
        id="pre-conception"
        className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div
            ref={registerRef("pre-conception")}
            data-reveal-id="pre-conception"
            className={cn(
              "transition-all duration-700",
              isVisible("pre-conception")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6",
            )}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.preConception.eyebrow}
            </p>
            <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1fr]">
              {/* Left */}
              <div>
                <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
                  {copy.preConception.headline1}
                  <br />
                  <span className="text-primary">{copy.preConception.headline2}</span>
                </h2>
                <div className="mt-5 h-px w-14 bg-gold/60" />
                <p className="mt-6 text-base-readable text-muted-foreground">
                  {copy.preConception.intro}
                </p>
                <blockquote className="mt-6 border-l-2 border-primary/40 pl-4">
                  <p className="text-sm italic leading-relaxed text-ink/80">
                    "{copy.preConception.devoteQuote}"
                  </p>
                </blockquote>

                {/* 4 Elements */}
                <div className="mt-8">
                  <p className="mb-4 text-[0.65rem] uppercase tracking-[0.26em] text-gold-foreground">
                    {copy.preConception.fourElementsLabel}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {fourElements.map(({ id, Icon, native, desc, detail }) => (
                      <div
                        key={id}
                        className="rounded-xl border border-border bg-warm/80 px-4 py-3"
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                          <p className="font-deva text-xs text-primary">{native}</p>
                        </div>
                        <p className="text-sm font-medium text-ink">{desc}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — steps */}
              <div>
                <p className="mb-5 text-[0.65rem] uppercase tracking-[0.26em] text-secondary">
                  {copy.preConception.stepsLabel}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {preConceptionSteps.map(({ Icon, title, body }, i) => (
                    <div
                      key={title}
                      className="surface-card p-4 transition-colors duration-200 hover:border-primary/30"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-ink">{title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {body}
                          </p>
                        </div>
                      </div>
                      <span className="mt-2 block text-right text-[0.6rem] text-muted-foreground/50">
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs italic text-muted-foreground/60">
                  {copy.preConception.reference}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4b. STEPS TO FOLLOW GARBH SANSKAR ─────────────────────── */}
      <section
        id="steps-to-follow"
        className="border-b border-border px-5 py-16 sm:px-8 sm:py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.950 0.040 85) 50%, oklch(0.930 0.055 75) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.stepsToFollow.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.stepsToFollow.headline1}
              <br />
              <span className="text-primary">{copy.stepsToFollow.headline2}</span>
            </h2>
            <div className="mx-auto mt-5 h-px w-14 bg-gold/60" />
            <p className="mx-auto mt-5 max-w-2xl text-base-readable text-muted-foreground">
              {copy.stepsToFollow.intro}
            </p>
          </div>

          {/* ── Six-stage timeline ── */}
          <div className="mt-14">
            <p className="mb-8 text-center text-[0.65rem] uppercase tracking-[0.28em] text-gold-foreground">
              {copy.stepsToFollow.stagesLabel}
            </p>

            {/* Desktop: 3-col grid — Mobile: stacked */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {copy.stepsToFollow.stages.map((stage, i) => {
                const colorMap = {
                  primary: {
                    num: "bg-primary/15 text-primary border-primary/25",
                    border: "border-primary/20",
                    dot: "bg-primary",
                  },
                  secondary: {
                    num: "bg-secondary/15 text-secondary border-secondary/25",
                    border: "border-secondary/20",
                    dot: "bg-secondary",
                  },
                  gold: {
                    num: "bg-gold/20 text-gold-foreground border-gold/30",
                    border: "border-gold/25",
                    dot: "bg-gold",
                  },
                } as const;
                const c = colorMap[stage.color as keyof typeof colorMap] ?? colorMap.primary;

                return (
                  <div
                    key={i}
                    className={cn(
                      "surface-card flex flex-col gap-3 p-5 transition-all duration-200 hover:shadow-md",
                      c.border,
                    )}
                  >
                    {/* Stage number badge + label */}
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                          c.num,
                        )}
                      >
                        {stage.number}
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-snug text-ink">{stage.label}</p>
                        <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground/70">
                          {stage.sub}
                        </p>
                      </div>
                    </div>
                    {/* Description */}
                    <p className="pl-12 text-xs leading-relaxed text-muted-foreground">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Deep-dive tabbed section ── */}
          <div className="mt-16">
            <p className="mb-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {copy.stepsToFollow.deepDiveLabel}
            </p>

            {/* Tab strip */}
            <div
              role="tablist"
              className="mx-auto flex max-w-2xl gap-1 overflow-x-auto rounded-2xl border border-border bg-background/70 p-1.5 sm:overflow-visible"
            >
              {(["premarital", "dreamChild", "astrology"] as JourneyDeepTab[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={journeyDeepTab === id}
                  onClick={() => setJourneyDeepTab(id)}
                  className={cn(
                    "flex shrink-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-3 py-2.5 text-center text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    journeyDeepTab === id
                      ? "bg-background text-ink shadow-sm"
                      : "text-muted-foreground hover:text-ink",
                  )}
                >
                  <span>{copy.stepsToFollow.tabs[id].label}</span>
                  <span className="font-deva text-[0.65rem] text-primary/70">
                    {copy.stepsToFollow.tabs[id].native}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="mx-auto mt-6 max-w-3xl">

              {/* ── Premarital Counselling panel ── */}
              {journeyDeepTab === "premarital" && (
                <div className="surface-card overflow-hidden">
                  <div className="border-b border-border bg-secondary/5 px-6 py-5">
                    <h3 className="text-xl text-ink">
                      {copy.stepsToFollow.content.premarital.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {copy.stepsToFollow.content.premarital.body}
                    </p>
                  </div>
                  <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                    {/* Medical checklist */}
                    <div>
                      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.22em] text-secondary">
                        {copy.stepsToFollow.content.premarital.medicalLabel}
                      </p>
                      <ul className="space-y-2">
                        {copy.stepsToFollow.content.premarital.medical.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary/70" strokeWidth={1.75} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* GS perspective */}
                    <div>
                      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.22em] text-primary">
                        {copy.stepsToFollow.content.premarital.gsLabel}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {copy.stepsToFollow.content.premarital.gs}
                      </p>
                      <div className="mt-4 rounded-xl border border-border bg-warm/60 px-4 py-3">
                        <p className="text-[0.65rem] italic leading-relaxed text-muted-foreground/80">
                          {copy.stepsToFollow.content.premarital.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Dream-Child panel ── */}
              {journeyDeepTab === "dreamChild" && (
                <div className="surface-card overflow-hidden">
                  <div className="border-b border-border bg-gold/8 px-6 py-5">
                    <h3 className="text-xl text-ink">
                      {copy.stepsToFollow.content.dreamChild.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {copy.stepsToFollow.content.dreamChild.body}
                    </p>
                  </div>
                  <div className="px-6 py-6">
                    {/* Four dimensions grid */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {copy.stepsToFollow.content.dreamChild.dimensions.map((dim, i) => {
                        const dimColors = [
                          "border-primary/20 bg-primary/6",
                          "border-secondary/20 bg-secondary/6",
                          "border-gold/25 bg-gold/8",
                          "border-primary/20 bg-primary/6",
                        ] as const;
                        return (
                          <div
                            key={i}
                            className={cn(
                              "rounded-xl border px-4 py-3",
                              dimColors[i % dimColors.length],
                            )}
                          >
                            <p className="text-sm font-medium text-ink">{dim.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{dim.desc}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-6 rounded-2xl border border-gold/30 bg-accent/50 px-5 py-4">
                      <p className="text-sm italic leading-relaxed text-ink/80">
                        "{copy.stepsToFollow.content.dreamChild.quote}"
                      </p>
                    </blockquote>

                    {/* Practice guidance */}
                    <div className="mt-5">
                      <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-gold-foreground">
                        {copy.stepsToFollow.content.dreamChild.practiceLabel}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {copy.stepsToFollow.content.dreamChild.practice}
                      </p>
                    </div>

                    <p className="mt-4 text-[0.62rem] italic text-muted-foreground/60">
                      {copy.stepsToFollow.content.dreamChild.source}
                    </p>
                  </div>
                </div>
              )}

              {/* ── Astrology panel ── */}
              {journeyDeepTab === "astrology" && (
                <div className="surface-card overflow-hidden">
                  <div className="border-b border-border bg-primary/5 px-6 py-5">
                    <h3 className="text-xl text-ink">
                      {copy.stepsToFollow.content.astrology.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {copy.stepsToFollow.content.astrology.body}
                    </p>
                  </div>
                  <div className="px-6 py-6">
                    <div className="space-y-4">
                      {copy.stepsToFollow.content.astrology.points.map((pt, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <MapPin className="h-4 w-4" strokeWidth={1.75} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-ink">{pt.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{pt.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-xl border border-border bg-warm/60 px-4 py-3">
                      <p className="text-[0.65rem] italic leading-relaxed text-muted-foreground/80">
                        {copy.stepsToFollow.content.astrology.note}
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THREE PREGNANCY SANSKARS ─────────────────────────────── */}
      <section className="border-b border-border bg-warm px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.sanskars.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.sanskars.headline}
            </h2>
            <div className="mx-auto mt-5 h-px w-14 bg-gold/60" />
            <p className="mx-auto mt-5 max-w-xl text-base-readable text-muted-foreground">
              {copy.sanskars.intro}
            </p>
          </div>

          {/* Stage tabs */}
          <div className="mt-12">
            <div
              role="tablist"
              className="mx-auto flex max-w-2xl gap-1 overflow-x-auto rounded-2xl border border-border bg-background/60 p-1.5 sm:overflow-visible"
            >
              {stages.map(({ id, Icon, label, native }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={stageTab === id}
                  onClick={() => setStageTab(id)}
                  className={cn(
                    "flex shrink-0 flex-1 flex-col items-center gap-1 rounded-xl px-4 py-3 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    stageTab === id
                      ? "bg-background text-ink shadow-sm"
                      : "text-muted-foreground hover:text-ink",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                      stageTab === id
                        ? "bg-secondary/15 text-secondary"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium leading-tight">{label}</span>
                  <span className="font-deva text-[0.65rem] text-primary/70">{native}</span>
                </button>
              ))}
            </div>

            {/* Active stage card */}
            {stages
              .filter((s) => s.id === stageTab)
              .map(({ id, Icon, label, native, subtitle, timing, purpose, body, highlight }) => (
                <div key={id} className="mx-auto mt-6 max-w-3xl">
                  <div className="surface-card overflow-hidden">
                    <div
                      className="flex items-center gap-4 border-b border-border px-6 py-5"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.375 0.115 22.5 / 0.08) 0%, transparent 70%)",
                      }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl text-ink">{label}</h3>
                          <span className="font-deva text-base text-primary/80">{native}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{subtitle}</p>
                      </div>
                    </div>
                    <div className="px-6 py-6">
                      <div className="mb-5 flex flex-wrap gap-3">
                        <span className="rounded-full border border-border bg-warm px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {copy.sanskars.timingLabel}: {timing}
                        </span>
                        <span className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-primary">
                          {purpose}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
                      <blockquote className="mt-6 rounded-xl border border-gold/30 bg-accent/50 px-5 py-4">
                        <p className="text-sm italic leading-relaxed text-ink/80">
                          "{highlight}"
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── 6. MONTH-BY-MONTH ────────────────────────────────────────── */}
      <section
        id="pregnancy-journey"
        ref={registerRef("pregnancy-journey")}
        data-reveal-id="pregnancy-journey"
        className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24"
      >
        <div
          className={cn(
            "mx-auto w-full max-w-6xl transition-all duration-700",
            isVisible("pregnancy-journey")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6",
          )}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            {/* Left */}
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                {copy.monthJourney.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
                {copy.monthJourney.headline1}
                <br />
                {copy.monthJourney.headline2}
              </h2>
              <div className="mt-5 h-px w-14 bg-gold/60" />
              <p className="mt-6 text-base-readable text-muted-foreground">
                {copy.monthJourney.intro}
              </p>

              {/* Practice grid */}
              <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {practiceKeys.map(({ Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-warm/60 px-3 py-3 text-center"
                  >
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <p className="text-xs font-medium leading-tight text-ink">{label}</p>
                    <p className="text-[0.65rem] leading-snug text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 9-month stepper */}
            <div>
              <p className="mb-5 text-[0.65rem] uppercase tracking-[0.26em] text-gold-foreground">
                {copy.monthJourney.nineMonthsLabel}
              </p>
              <div className="relative">
                <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-gold/30 sm:block" />
                <div className="space-y-3">
                  {copy.monthJourney.months.map((month, i) => {
                    const mc = MONTH_COLORS[i] ?? { color: "text-primary", bg: "bg-primary/10" };
                    return (
                      <div key={i} className="flex items-start gap-4 sm:pl-1">
                        <div
                          className={cn(
                            "z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                            mc.bg,
                            mc.color,
                          )}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1 rounded-xl border border-border/60 bg-warm/40 px-4 py-3">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-ink">{month.focus}</p>
                            <span className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground/60">
                              {i + 1}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {month.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <Button asChild variant="outline" size="sm">
                  <Link to="/free-services" className="gap-1.5">
                    {copy.monthJourney.joinClassesCta}{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAMILY'S ROLE ─────────────────────────────────────────── */}
      <section
        className="border-b border-border px-5 py-14 sm:px-8 sm:py-20"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.945 0.055 82) 45%, oklch(0.920 0.072 70) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                {copy.family.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
                {copy.family.headline1}
                <br />
                <span className="text-primary">{copy.family.headline2}</span>
              </h2>
              <div className="mt-5 h-px w-14 bg-gold/60" />
              <p className="mt-6 text-base-readable text-muted-foreground">{copy.family.intro}</p>
              <blockquote className="mt-6 border-l-2 border-gold/40 pl-4">
                <p className="text-sm italic leading-relaxed text-ink/80">
                  "{copy.family.familyQuote}"
                </p>
              </blockquote>
            </div>

            <div className="flex flex-col gap-4">
              {roles.map(({ Icon, role, desc, colorClass }) => (
                <div key={role} className="surface-card flex gap-4 p-5">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                      colorClass,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{role}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. EXTRA TOPICS ──────────────────────────────────────────── */}
      <section className="border-b border-border bg-background px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extraTopicKeys.map(({ Icon, tag, label, desc }) => (
              <div key={label} className="surface-card p-6">
                <p className="mb-3 text-[0.62rem] uppercase tracking-[0.22em] text-secondary">
                  {tag}
                </p>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base text-ink">{label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.faq.eyebrow}
          title={copy.faq.headline}
          subtitle={copy.faq.subtitle}
        />

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {copy.faq.items.map((item, i) => (
            <div key={i} className="surface-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === String(i) ? null : String(i))}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                aria-expanded={openFaq === String(i)}
              >
                <span className="text-sm font-medium leading-relaxed text-ink">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    openFaq === String(i) && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              {openFaq === String(i) && (
                <div className="border-t border-border px-6 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── 10. CTA ──────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <div className="mandala-veil relative overflow-hidden rounded-3xl border border-border bg-warm px-6 py-16 text-center sm:px-12">
          <div className="mx-auto mb-6 flex max-w-xs items-center gap-3">
            <span className="flex-1 border-t border-gold/40" />
            <span className="text-gold">✦</span>
            <span className="flex-1 border-t border-gold/40" />
          </div>

          <h2 className="text-2xl text-ink sm:text-3xl">{copy.cta.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {copy.cta.body}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/free-services">{copy.cta.freeClasses}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/courses">{copy.cta.courses}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{copy.cta.guidance}</Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/70">{copy.cta.note}</p>
        </div>
      </Section>
    </>
  );
}
