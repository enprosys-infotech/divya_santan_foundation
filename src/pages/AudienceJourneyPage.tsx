import type { ComponentType } from "react";
import { useEffect } from "react";
import {
  ArrowRight,
  Baby,
  Brain,
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

  return (
    <section className="mandala-veil border-b border-border bg-warm px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
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

        <div className="rounded-3xl border border-primary/15 bg-background/70 p-5 shadow-[var(--shadow-soft)] sm:p-7">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">{pathLabel}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
            {journeyCopy.steps.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-medium text-ink">
                  {step}
                </span>
                {index < journeyCopy.steps.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold" />
                )}
              </span>
            ))}
          </div>
        </div>
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

      <section className="border-y border-border bg-warm px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow={learnCopy.sanskars.eyebrow}
            title={learnCopy.sanskars.headline}
            subtitle={learnCopy.sanskars.intro}
          />
          <article className="surface-card mx-auto mt-10 max-w-3xl overflow-hidden">
            <div className="border-b border-border bg-secondary/5 px-6 py-5 sm:px-8">
              <h3 className="text-xl text-ink">{garbhadhana.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{garbhadhana.subtitle}</p>
            </div>
            <div className="px-6 py-6 sm:px-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-warm px-3 py-1 text-xs text-muted-foreground">
                  {learnCopy.sanskars.timingLabel}: {garbhadhana.timing}
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs text-primary">
                  {garbhadhana.purpose}
                </span>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{garbhadhana.body}</p>
              <blockquote className="mt-6 border-l-2 border-gold/50 pl-4">
                <p className="text-sm italic leading-relaxed text-ink/80">"{garbhadhana.highlight}"</p>
              </blockquote>
            </div>
          </article>
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
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
