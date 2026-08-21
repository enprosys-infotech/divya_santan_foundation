import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

/* ── Types ─────────────────────────────────────────────────────────────── */

interface Journey {
  id: string;
  to: string;
}

interface JourneyCopy {
  title: string;
  native?: string;
  body: string;
  steps: string[];
}

interface WhoCanBenefitPanelProps {
  journeys: Journey[];
  /** Icon map: journey id → Lucide icon */
  icons: Record<string, LucideIcon>;
}

/* ── Main Component ─────────────────────────────────────────────────────── */

export function WhoCanBenefitPanel({ journeys, icons }: WhoCanBenefitPanelProps) {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState(journeys[0].id);
  const [animKey, setAnimKey] = useState(0);

  // Content for currently selected journey
  const journeysCopy = t.content.journeys as Record<string, JourneyCopy>;
  const active = journeys.find((j) => j.id === activeId)!;
  const copy = journeysCopy[activeId];

  function selectJourney(id: string) {
    if (id === activeId) return;
    setActiveId(id);
    // bump key to re-trigger CSS animation on panel content
    setAnimKey((k) => k + 1);
  }

  return (
    <div className="mt-14 flex flex-col gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] lg:flex-row">
      {/* ── Left: Identity selector tabs ───────────────────────────────── */}
      <nav
        aria-label="Who can benefit — select your journey"
        className="grid grid-cols-2 border-b border-border sm:grid-cols-3 lg:grid-cols-1 lg:w-[38%] lg:border-b-0 lg:border-r"
      >
        {journeys.map((j, idx) => {
          const Icon = icons[j.id];
          const jCopy = journeysCopy[j.id];
          const isActive = j.id === activeId;

          return (
            <button
              key={j.id}
              id={`journey-tab-${j.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls="journey-panel"
              onClick={() => selectJourney(j.id)}
              className={cn(
                // base — stacked (icon above text) on mobile, side-by-side on desktop
                "group relative flex cursor-pointer flex-col items-center gap-2 px-3 py-4 text-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary sm:flex-row sm:gap-4 sm:px-5 sm:text-left lg:min-w-0 lg:flex-row lg:px-7 lg:py-6 lg:text-left",
                // grid cell borders — right border for left column items, bottom for all but last row
                idx % 2 === 0 && "border-r border-border sm:border-r-0 lg:border-r-0",
                idx < journeys.length - 2 && "border-b border-border sm:border-b-0 lg:border-b-0",
                idx < journeys.length - 1 && "sm:border-b sm:border-border lg:border-b-0 lg:border-t",
                idx === 0 && "sm:border-t-0 lg:border-t-0",
                // active state
                isActive ? "bg-primary/[0.06]" : "hover:bg-primary/[0.03]",
              )}
            >
              {/* Active indicator — bottom bar on mobile, left bar on desktop */}
              <span
                className={cn(
                  "absolute bottom-0 left-0 block h-[3px] w-full transition-all duration-300 lg:hidden",
                  isActive ? "bg-primary" : "bg-transparent group-hover:bg-primary/20",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-0 hidden transition-all duration-300 lg:block",
                  isActive
                    ? "h-full w-[3px] rounded-r-full bg-primary"
                    : "h-full w-[3px] bg-transparent group-hover:bg-primary/20",
                )}
              />

              {/* Icon bubble */}
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 sm:h-10 sm:w-10",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-primary/10 text-primary group-hover:bg-primary/20",
                )}
              >
                {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />}
              </span>

              {/* Text */}
              <span className="flex min-w-0 flex-col gap-0.5">
                <span
                  className={cn(
                    "text-xs font-medium leading-snug transition-colors duration-200 sm:text-sm",
                    isActive ? "text-ink" : "text-ink/70 group-hover:text-ink/90",
                  )}
                >
                  {jCopy.title}
                </span>
                {jCopy.native && (
                  <span
                    className={cn(
                      "font-deva hidden text-xs leading-snug lg:block",
                      isActive ? "text-primary/80" : "text-muted-foreground/70",
                    )}
                  >
                    {jCopy.native}
                  </span>
                )}
              </span>

              {/* Active chevron (desktop only) */}
              <ArrowRight
                className={cn(
                  "ml-auto hidden h-4 w-4 shrink-0 transition-all duration-200 lg:block",
                  isActive
                    ? "translate-x-0 text-primary opacity-100"
                    : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-40",
                )}
              />
            </button>
          );
        })}
      </nav>

      {/* ── Right: Content reveal panel ─────────────────────────────────── */}
      <div
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${activeId}`}
        className="relative flex flex-1 flex-col justify-between gap-6 overflow-hidden px-5 py-7 sm:gap-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
      >
        {/* Decorative background glow — unique to this panel */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 18%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        {/* Animated content — key forces re-mount = re-animation */}
        <div key={animKey} className="journey-panel-content relative z-10 flex flex-col gap-6">
          {/* Header */}
          <div>
            <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-primary">
              Your Path
            </p>
            <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl lg:text-4xl">
              {copy.title}
            </h3>
            {copy.native && (
              <p className="font-deva mt-1.5 text-lg text-secondary/80">{copy.native}</p>
            )}
          </div>

          {/* Body */}
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">{copy.body}</p>

          {/* Step flow — arrow chain, not pill tags */}
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
            {copy.steps.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-[0.7rem] font-medium text-secondary sm:px-3.5 sm:py-1.5 sm:text-[0.72rem]">
                  {step}
                </span>
                {i < copy.steps.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-gold" />}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div key={`cta-${animKey}`} className="journey-panel-cta relative z-10">
          <Link
            to={active.to}
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-200 hover:gap-3"
          >
            <span className="border-b border-primary/0 transition-all duration-200 group-hover:border-primary/60">
              {t.common.startLearning}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
