import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  FlaskConical,
  HeartHandshake,
  Leaf,
  Layers3,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useExternalAskShree } from "@/hooks/useExternalAskShree";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type LensId = "meaning" | "mechanism" | "mission";
type DomainId = "epigenetics" | "neuroscience" | "wellbeing" | "tradition";
type ResearchAreaId =
  | "epigenetics"
  | "fetalLearning"
  | "neuroscience"
  | "psychology"
  | "yoga"
  | "ayurveda";

const LENS_ICONS: Record<LensId, React.ElementType> = {
  meaning: BookOpen,
  mechanism: Microscope,
  mission: HeartHandshake,
};

const DOMAIN_ICONS: Record<DomainId, React.ElementType> = {
  epigenetics: FlaskConical,
  neuroscience: Brain,
  wellbeing: ShieldCheck,
  tradition: Layers3,
};

const LENS_TONES: Record<LensId, string> = {
  meaning: "text-primary",
  mechanism: "text-indigo",
  mission: "text-green",
};

const DOMAIN_TONES: Record<DomainId, string> = {
  epigenetics: "border-primary bg-primary/8 text-primary",
  neuroscience: "border-indigo bg-indigo/8 text-indigo-foreground",
  wellbeing: "border-green bg-green/8 text-green",
  tradition: "border-gold bg-gold/10 text-gold-foreground",
};

const RESEARCH_AREA_ICONS: Record<ResearchAreaId, React.ElementType> = {
  epigenetics: FlaskConical,
  fetalLearning: Brain,
  neuroscience: Microscope,
  psychology: HeartHandshake,
  yoga: Sparkles,
  ayurveda: Leaf,
};

const RESEARCH_AREA_IDS: ResearchAreaId[] = [
  "epigenetics",
  "fetalLearning",
  "neuroscience",
  "psychology",
  "yoga",
  "ayurveda",
];

export default function ScienceOfGarbhSanskarPage() {
  const { t } = useI18n();
  const copy = t.sciencePage;
  const { open: openExternalAskShree } = useExternalAskShree();
  const [activeLens, setActiveLens] = useState<LensId>("meaning");
  const [activeDomain, setActiveDomain] = useState<DomainId>("epigenetics");

  const lensIds: LensId[] = ["meaning", "mechanism", "mission"];
  const domainIds: DomainId[] = ["epigenetics", "neuroscience", "wellbeing", "tradition"];
  const activeDomainCopy = copy.domains.panels[activeDomain];

  return (
    <div className="-mx-5 -my-12 overflow-hidden sm:-mx-8 sm:-my-16">
      <section className="mandala-veil relative overflow-hidden bg-secondary px-5 py-16 text-secondary-foreground sm:px-8 sm:py-24">
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-gold">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-[4.1rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium text-gold sm:text-lg">
              {copy.hero.context}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              {copy.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                {copy.hero.primaryAction}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={openExternalAskShree}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-secondary-foreground/30 px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Sparkles className="h-4 w-4" />
                {copy.hero.secondaryAction}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-secondary-foreground/20 bg-secondary-foreground/8 p-6 backdrop-blur-sm sm:p-7">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold">
              {copy.hero.mapLabel}
            </p>
            <div className="mt-5 space-y-5">
              {copy.hero.map.map((item) => (
                <div key={item.label} className="border-l border-gold/60 pl-4">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-foreground/65">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">
              {copy.lenses.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.lenses.title}
            </h2>
            <p className="mt-5 max-w-md text-base-readable text-muted-foreground">
              {copy.lenses.intro}
            </p>
          </div>

          <div>
            <div
              role="tablist"
              aria-label={copy.lenses.title}
              className="grid gap-2 sm:grid-cols-3"
            >
              {lensIds.map((id) => {
                const Icon = LENS_ICONS[id];
                const isActive = activeLens === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveLens(id)}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                      isActive
                        ? `border-border bg-card shadow-sm ${LENS_TONES[id]}`
                        : "border-transparent bg-muted/50 text-muted-foreground hover:border-border hover:text-ink",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.7} />
                    {copy.lenses.items[id].label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-t border-border pt-6" role="tabpanel">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                {copy.lenses.items[activeLens].kicker}
              </p>
              <h3 className="mt-3 text-2xl text-ink">{copy.lenses.items[activeLens].title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {copy.lenses.items[activeLens].body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-indigo-foreground/70">
              {copy.domains.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.domains.title}
            </h2>
            <p className="mt-5 text-base-readable text-muted-foreground">{copy.domains.intro}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_AREA_IDS.map((id) => {
              const Icon = RESEARCH_AREA_ICONS[id];
              const area = copy.domains.researchAreas[id];
              return (
                <div key={id} className="border border-border bg-background p-5">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  <h3 className="mt-4 text-base text-ink">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist">
              {domainIds.map((id) => {
                const Icon = DOMAIN_ICONS[id];
                const isActive = activeDomain === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveDomain(id)}
                    className={cn(
                      "flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                      isActive
                        ? `${DOMAIN_TONES[id]} shadow-sm`
                        : "border-border bg-background/70 text-muted-foreground hover:bg-background hover:text-ink",
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                    <span className="text-sm font-medium">{copy.domains.tabs[id]}</span>
                    <ArrowRight className="ml-auto h-4 w-4 opacity-50" />
                  </button>
                );
              })}
            </div>

            <div className="surface-card overflow-hidden" role="tabpanel">
              <div className="border-b border-border bg-background/70 p-6 sm:p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                  {activeDomainCopy.kicker}
                </p>
                <h3 className="mt-3 text-2xl text-ink">{activeDomainCopy.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {activeDomainCopy.body}
                </p>
              </div>
              <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-green">
                    {copy.domains.evidenceLabel}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    {activeDomainCopy.evidence}
                  </p>
                </div>
                <div className="border-t border-border pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold-foreground">
                    {copy.domains.boundaryLabel}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {activeDomainCopy.boundary}
                  </p>
                </div>
              </div>
              <p className="border-t border-border px-6 py-4 text-xs italic leading-relaxed text-muted-foreground/75 sm:px-8">
                {activeDomainCopy.source}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">
              {copy.knowledgeCentre.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.knowledgeCentre.title}
            </h2>
            <p className="mt-5 text-base-readable text-muted-foreground">
              {copy.knowledgeCentre.intro}
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.knowledgeCentre.topics.map((topic) => (
              <div key={topic.title} className="border-t border-border py-5">
                <h3 className="text-base text-ink">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-green">
              {copy.practice.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.practice.title}
            </h2>
            <p className="mt-5 text-base-readable text-muted-foreground">{copy.practice.intro}</p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {copy.practice.principles.map((principle) => (
              <div key={principle.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green" strokeWidth={1.7} />
                <div>
                  <h3 className="text-base text-ink">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-14 text-secondary-foreground sm:px-8 sm:py-18">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-gold">
              {copy.closing.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl">{copy.closing.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75">
              {copy.closing.body}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              {copy.closing.primaryAction}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/research"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-secondary-foreground/30 px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-gold hover:text-gold"
            >
              {copy.closing.secondaryAction}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
