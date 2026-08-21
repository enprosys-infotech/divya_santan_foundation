import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SPIRITUAL_ICONS, type SpiritualIconKey } from "@/content/spiritual-icons";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

export { MobileAppCTA } from "./MobileAppCTA";

/**
 * Presentational cards. They receive copy that is already resolved for the active
 * language, so they never branch on the language themselves.
 */

type LinkTo = { to: string; label: string };

function CardShell({
  children,
  className,
  to,
}: {
  children: React.ReactNode;
  className?: string | undefined;
  to?: string | undefined;
}) {
  const cls = cn(
    "surface-card surface-card-hover block h-full p-6 sm:p-7 active:scale-[0.98] transition-all duration-200 touch-manipulation",
    className,
  );

  return to ? (
    <Link to={to} className={cls}>
      {children}
    </Link>
  ) : (
    <div className={cls}>{children}</div>
  );
}

export function FeatureCard({
  icon: Icon,
  spiritualIcon,
  title,
  native,
  body,
  to,
  className,
  iconVariant,
}: {
  icon?: LucideIcon;
  spiritualIcon?: SpiritualIconKey;
  title: string;
  /** Devanagari accent shown beneath the title; empty in the Hindi locale. */
  native?: string;
  body?: string;
  to?: string;
  className?: string;
  /** Semantic variant for the icon background circle. Defaults to "primary" (orange). */
  iconVariant?: "primary" | "secondary" | "gold";
}) {
  const { t } = useI18n();

  const iconClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    gold: "bg-gold/15 text-gold",
  };

  const spiritualIconData = spiritualIcon ? SPIRITUAL_ICONS[spiritualIcon] : null;

  return (
    <CardShell to={to} className={className}>
      {spiritualIconData ? (
        <div
          className={cn(
            "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-2",
            iconClasses[iconVariant || "primary"],
          )}
        >
          <img
            src={spiritualIconData.src}
            alt={spiritualIconData.alt}
            className="h-full w-full object-contain"
          />
        </div>
      ) : Icon ? (
        <span
          className={cn(
            "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full",
            iconClasses[iconVariant || "primary"],
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
      ) : null}
      <h3 className="text-lg text-ink">{title}</h3>
      {native && <p className="font-deva mt-1 text-sm text-primary/80">{native}</p>}
      {body && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{body}</p>}
      {to && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
          {t.common.explore} <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </CardShell>
  );
}

export function JourneyCard({
  title,
  body,
  steps,
  to,
}: {
  title: string;
  body: string;
  steps: string[];
  to: string;
}) {
  const { t } = useI18n();

  return (
    <CardShell to={to} className="flex flex-col">
      <h3 className="text-lg text-ink">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{body}</p>
      <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.72rem] text-muted-foreground">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1">{step}</span>
            {i < steps.length - 1 && <span className="text-gold">›</span>}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
        {t.common.startLearning} <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </CardShell>
  );
}

export function CourseCard({
  title,
  format,
  duration,
  level,
  body,
}: {
  title: string;
  format: string;
  duration: string;
  level: string;
  body: string;
}) {
  return (
    <CardShell className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="rounded-full border border-border px-2.5 py-1">{format}</span>
        <span className="rounded-full border border-border px-2.5 py-1">{duration}</span>
      </div>
      <h3 className="mt-4 text-lg text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">{body}</p>
      <p className="mt-5 border-t border-border pt-4 text-xs text-secondary">{level}</p>
    </CardShell>
  );
}

export function KnowledgeCard({
  category,
  title,
  readTime,
  body,
}: {
  category: string;
  title: string;
  readTime: string;
  body: string;
}) {
  return (
    <CardShell className="flex flex-col">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-secondary">{category}</p>
      <h3 className="mt-3 text-lg leading-snug text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">{body}</p>
      <p className="mt-5 text-xs text-muted-foreground">{readTime}</p>
    </CardShell>
  );
}

export function ResearchCard({
  field,
  topic,
  summary,
}: {
  field: string;
  topic: string;
  summary: string;
}) {
  return (
    <CardShell className="border-l-2 border-l-primary/40">
      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{field}</p>
      <h3 className="mt-2.5 text-base text-ink">{topic}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{summary}</p>
    </CardShell>
  );
}

export function TestimonialCard({
  group,
  quote,
  name,
  role,
}: {
  group: string;
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <CardShell className="flex h-full flex-col">
      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-gold-foreground">{group}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/90 italic">“{quote}”</p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm text-ink">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </CardShell>
  );
}

export function CTASection({
  title,
  body,
  primary,
  secondary,
  className,
}: {
  title: string;
  body?: string;
  primary: LinkTo;
  secondary?: LinkTo;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mandala-veil relative overflow-hidden rounded-3xl border border-border bg-warm px-6 py-14 text-center sm:px-12",
        className,
      )}
    >
      <h2 className="text-2xl text-ink sm:text-3xl">{title}</h2>
      {body && (
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="lg">
          <Link to={primary.to}>{primary.label}</Link>
        </Button>
        {secondary && (
          <Button asChild variant="outline" size="lg">
            <Link to={secondary.to}>{secondary.label}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
