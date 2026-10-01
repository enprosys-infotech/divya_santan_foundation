import type { ComponentType } from "react";
import { useEffect } from "react";
import {
  ArrowRight,
  Baby,
  Brain,
  Download,
  Heart,
  HeartHandshake,
  Leaf,
  Music,
  Sparkles,
  Sun,
  Users,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCTA } from "@/components/site/ContactCTA";
import { SmartImage } from "@/components/site/SmartImage";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import type { AudienceJourneyPageId } from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import type { Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

type JourneyCopy = Dictionary["content"]["journeys"][AudienceJourneyPageId];
type LearnPageCopy = Dictionary["learnPage"];

type JourneyContentProps = {
  journeyCopy: JourneyCopy;
  learnCopy: LearnPageCopy;
};

const JOURNEY_ICONS: Record<AudienceJourneyPageId, ComponentType<{ className?: string }>> = {
  planningCouple: HeartHandshake,
  pregnantWoman: Baby,
};

const PRE_CONCEPTION_ELEMENTS = ["ritukala", "kshetra", "ambu", "beej"] as const;
const PRE_CONCEPTION_STEPS = [
  "physical",
  "diet",
  "lifestyle",
  "yoga",
  "ayurvedic",
  "panchakarma",
  "spiritual",
  "health",
  "positiveThinking",
] as const;
const PREGNANCY_PRACTICES = [
  "diet",
  "yoga",
  "meditation",
  "music",
  "garbhSamvad",
  "surya",
  "family",
  "ayurveda",
] as const;
const PREGNANCY_SANSKARS = ["garbhadhan", "punswan", "simantonayan"] as const;
const FAMILY_ROLES = ["husband", "family", "mother"] as const;

const ROLE_ICONS = [HeartHandshake, Users, Heart] as const;
const PRACTICE_ICONS = [Leaf, Wind, Brain, Music, Heart, Sun, Users, Sparkles] as const;

const JOURNEY_HERO_IMAGE: Partial<Record<AudienceJourneyPageId, { src: string; alt: string; tag: string }>> = {
  planningCouple: {
    src: "/couple planning/plannigcouple2.png",
    alt: "Indian baby shower celebration — expecting couple in a beautifully decorated setting",
    tag: "A sacred beginning",
  },
  pregnantWoman: {
    src: "/PregnantWomen/Im preganant.png",
    alt: "Pregnant mother in a serene, nurturing environment — a journey of Garbh Sanskar",
    tag: "A mother's sacred journey",
  },
};

function JourneyHero({
  journeyId,
  journeyCopy,
  eyebrow,
  pathLabel,
}: {
  journeyId: AudienceJourneyPageId;
  journeyCopy: JourneyCopy;
  eyebrow: string;
  pathLabel: string;
}) {
  const Icon = JOURNEY_ICONS[journeyId];
  const heroImage = JOURNEY_HERO_IMAGE[journeyId];

  /* ── Full-bleed background variant (when a hero image exists) ── */
  if (heroImage) {
    return (
      <section className="relative border-b border-border overflow-hidden" style={{ minHeight: "520px" }}>
        {/* Full-bleed background photograph */}
        <SmartImage
          src={heroImage.src}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />

        {/* Layered overlay: rich warm-dark gradient so copy always reads */}
        {/* Left-side: strong dark veil for the copy column */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
        {/* Bottom fade for overall depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
        {/* Subtle warm gold tint at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

        {/* Sacred-geometry mandala ring — ambient background layer */}
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.07]"
          style={{ animation: "spin 60s linear infinite" }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full text-gold-foreground">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.4" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100" y1="100"
                x2={100 + Math.cos((i * Math.PI) / 6) * 90}
                y2={100 + Math.sin((i * Math.PI) / 6) * 90}
                stroke="currentColor" strokeWidth="0.3"
              />
            ))}
          </svg>
        </div>

        {/* Content — left-aligned, over the veil */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm ring-1 ring-primary/40">
                <Icon className="h-5 w-5 text-primary-foreground" strokeWidth={1.6} />
              </span>
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-primary-foreground/80">
                {eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h1 className="animate-rise mt-6 text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {journeyCopy.title}
            </h1>

            {/* Gold divider */}
            <span className="mt-6 block h-[2px] w-16 bg-gold/80" />

            {/* Body */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/75">
              {journeyCopy.body}
            </p>

            {/* Floating caption pill */}
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-background/15 px-4 py-2 backdrop-blur-md ring-1 ring-white/20">
              <span
                className="h-2 w-2 rounded-full bg-primary"
                style={{ animation: "pulse 2.5s ease-in-out infinite" }}
              />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/90">
                {heroImage.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom-right gold corner accent bracket */}
        <div className="pointer-events-none absolute bottom-6 right-8 h-12 w-12 border-b-2 border-r-2 border-gold/50" />
        {/* Top-right gold corner accent bracket */}
        <div className="pointer-events-none absolute right-8 top-6 h-12 w-12 border-r-2 border-t-2 border-gold/50" />
      </section>
    );
  }

  /* ── Default no-image variant (all other journey pages) ── */
  return (
    <section className="mandala-veil border-b border-border bg-warm px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3 text-primary">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <p className="text-[0.68rem] uppercase tracking-[0.3em]">{eyebrow}</p>
        </div>
        <h1 className="animate-rise mt-6 max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
          {journeyCopy.title}
        </h1>
        <span className="mt-6 block h-px w-20 bg-gold/70" />
        <p className="mt-6 max-w-2xl text-base-readable text-muted-foreground">
          {journeyCopy.body}
        </p>
      </div>
    </section>
  );
}

function PlanningJourneyContent({ learnCopy }: JourneyContentProps) {
  const preConception = learnCopy.preConception;
  const garbhadhana = learnCopy.sanskars.stages.garbhadhan;
  const family = learnCopy.family;

  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow={preConception.eyebrow}
            title={`${preConception.headline1} ${preConception.headline2}`}
            subtitle={preConception.intro}
            align="left"
          />
          <div>
            <blockquote className="rounded-2xl border border-gold/25 bg-accent/40 px-6 py-5">
              <p className="text-sm italic leading-relaxed text-ink/80">
                "{preConception.devoteQuote}"
              </p>
            </blockquote>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {PRE_CONCEPTION_ELEMENTS.map((id) => {
                const element = preConception.elements[id];
                return (
                  <div key={id} className="rounded-xl border border-border bg-warm/70 px-4 py-4">
                    <p className="font-deva text-xs text-primary">{element.native}</p>
                    <p className="mt-2 text-sm font-medium text-ink">{element.desc}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{element.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 text-[0.65rem] uppercase tracking-[0.25em] text-secondary">
            {preConception.stepsLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRE_CONCEPTION_STEPS.map((id, index) => {
              const step = preConception.steps[id];
              return (
                <article key={id} className="surface-card flex gap-4 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}

function PregnantJourneyContent({ learnCopy }: JourneyContentProps) {
  const monthJourney = learnCopy.monthJourney;
  const family = learnCopy.family;

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={monthJourney.eyebrow}
          title={`${monthJourney.headline1} ${monthJourney.headline2}`}
          subtitle={monthJourney.intro}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.25em] text-secondary">
              {monthJourney.nineMonthsLabel}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PREGNANCY_PRACTICES.map((id, index) => {
                const practice = monthJourney.practices[id];
                const Icon = PRACTICE_ICONS[index];
                return (
                  <div key={id} className="rounded-xl border border-border bg-warm/70 px-3 py-4 text-center">
                    <Icon className="mx-auto h-5 w-5 text-primary" strokeWidth={1.5} />
                    <p className="mt-2 text-xs font-medium leading-tight text-ink">{practice.label}</p>
                    <p className="mt-1 text-[0.65rem] leading-snug text-muted-foreground">{practice.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* ── Monthly Guidance Download Card ── */}
            <a
              href="https://drive.google.com/uc?export=download&id=1bXOo4WKw72BHJloPrmjV0KLyao3Z6G2t"
              download="Chapter_19_MonthlyAdviceByGarbhSanskarKaVigyan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-5 flex min-h-[130px] w-full cursor-pointer items-stretch overflow-hidden rounded-2xl border border-[#E3A430]/40 no-underline transition-all duration-300 hover:border-[#E3A430]/80 hover:shadow-[0_8px_32px_rgba(227,164,48,0.18)]"
              style={{
                background:
                  "linear-gradient(135deg, #FDF6EC 0%, #FBF0E0 40%, #F5E6CE 70%, rgba(122,31,43,0.06) 100%)",
              }}
            >
              {/* Left content */}
              <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-5">
                {/* Eyebrow pill */}
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#E3A430]/50 bg-[#E3A430]/12 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#8B6200]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E3A430]" />
                  Free PDF Guide
                </span>

                {/* Headline */}
                <h4 className="text-sm font-semibold leading-snug text-[#3D1A00] sm:text-base">
                  Month-by-Month
                  <br />
                  <span className="text-[#7A1F2B]">Garbh Sanskar Guide</span>
                </h4>

                {/* Sub-line */}
                <p className="mt-1.5 text-[0.68rem] leading-snug text-[#7A1F2B]/70">
                  Diet · Yoga · Ragas · Rituals — all 9 months
                </p>

                {/* CTA button */}
                <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#7A1F2B] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 group-hover:bg-[#9B2535] group-hover:shadow-md group-hover:gap-3">
                  <Download className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  Download PDF
                </div>
              </div>

              {/* Right — lotus motif (structural, fills the visual space) */}
              <div className="relative flex w-[110px] shrink-0 items-center justify-center sm:w-[130px]">
                {/* Warm radial glow behind the lotus */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(227,164,48,0.35) 0%, transparent 72%)",
                  }}
                />
                {/* Fine-line lotus — 8 petals, structural anchor */}
                <svg
                  viewBox="0 0 120 120"
                  className="relative z-10 h-20 w-20 transition-transform duration-700 group-hover:rotate-[15deg] sm:h-24 sm:w-24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Outer ring */}
                  <circle cx="60" cy="60" r="56" stroke="#E3A430" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
                  {/* Inner ring */}
                  <circle cx="60" cy="60" r="40" stroke="#E3A430" strokeWidth="0.4" opacity="0.35" />
                  {/* 8 petals — alternate maroon / gold */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const cx = 60 + Math.cos(rad) * 22;
                    const cy = 60 + Math.sin(rad) * 22;
                    return (
                      <ellipse
                        key={angle}
                        cx={cx}
                        cy={cy}
                        rx="8"
                        ry="16"
                        transform={`rotate(${angle}, ${cx}, ${cy})`}
                        stroke={i % 2 === 0 ? "#7A1F2B" : "#E3A430"}
                        strokeWidth="0.7"
                        fill="none"
                        opacity="0.75"
                      />
                    );
                  })}
                  {/* Centre bindu */}
                  <circle cx="60" cy="60" r="5" stroke="#E3A430" strokeWidth="0.8" fill="rgba(227,164,48,0.15)" />
                  <circle cx="60" cy="60" r="2" fill="#E3A430" opacity="0.7" />
                  {/* 4 axis spokes */}
                  {[0, 90, 180, 270].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line
                        key={angle}
                        x1={60 + Math.cos(rad) * 7}
                        y1={60 + Math.sin(rad) * 7}
                        x2={60 + Math.cos(rad) * 36}
                        y2={60 + Math.sin(rad) * 36}
                        stroke="#E3A430"
                        strokeWidth="0.4"
                        opacity="0.4"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Top-left corner bracket — premium detail */}
              <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[#E3A430]/50" />
              {/* Bottom-right corner bracket */}
              <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#E3A430]/50" />
            </a>
          </div>
          <div className="relative space-y-3">
            {monthJourney.months.map((month, index) => (
              <article key={index} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-xl border border-border/70 bg-background px-4 py-3">
                  <h3 className="text-sm font-medium text-ink">{month.focus}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{month.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-warm px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow={learnCopy.sanskars.eyebrow}
            title={learnCopy.sanskars.headline}
            subtitle={learnCopy.sanskars.intro}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {PREGNANCY_SANSKARS.map((id) => {
              const sanskar = learnCopy.sanskars.stages[id];
              return (
                <article key={id} className="surface-card flex flex-col p-6">
                  <h3 className="text-lg text-ink">{sanskar.label}</h3>
                  <p className="mt-1 text-sm text-secondary">{sanskar.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{sanskar.body}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-ink/80">
                    {sanskar.highlight}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow={family.eyebrow}
            title={`${family.headline1} ${family.headline2}`}
            subtitle={family.intro}
            align="left"
          />
          <div className="space-y-4">
            {FAMILY_ROLES.map((id, index) => {
              const role = family.roles[id];
              const Icon = ROLE_ICONS[index];
              return (
                <article key={id} className="surface-card flex gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-base text-ink">{role.role}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{role.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}

const JOURNEY_CONTENT: Record<AudienceJourneyPageId, ComponentType<JourneyContentProps>> = {
  planningCouple: PlanningJourneyContent,
  pregnantWoman: PregnantJourneyContent,
};

export default function AudienceJourneyPage({ journeyId }: { journeyId: AudienceJourneyPageId }) {
  const { t } = useI18n();
  const journeyCopy = t.content.journeys[journeyId];
  const JourneyContent = JOURNEY_CONTENT[journeyId];
  const journeyEyebrows = {
    planningCouple: t.learnPage.preConception.eyebrow,
    pregnantWoman: t.learnPage.monthJourney.eyebrow,
  } as const;

  useEffect(() => {
    document.title = `${journeyCopy.title} — ${getDictionary().brand.prakalp}`;
  }, [journeyCopy.title]);

  return (
    <>
      <JourneyHero
        journeyId={journeyId}
        journeyCopy={journeyCopy}
        eyebrow={journeyEyebrows[journeyId]}
        pathLabel={t.common.startLearning}
      />
      <JourneyContent journeyCopy={journeyCopy} learnCopy={t.learnPage} />
      <ContactCTA copy={t.join.contactCta} />
    </>
  );
}
