import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkTo = { to: string; label?: string };

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
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}


export function FeatureCard({
  icon: Icon,
  title,
  hindi,
  body,
  to,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  hindi?: string;
  body?: string;
  to?: string;
  className?: string;
}) {
  return (
    <CardShell to={to} className={className}>
      {Icon && (
        <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
      )}
      <h3 className="text-lg text-ink">{title}</h3>
      {hindi && <p className="font-deva mt-1 text-sm text-primary/80">{hindi}</p>}
      {body && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>}
      {to && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
          Explore <ArrowRight className="h-3.5 w-3.5" />
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
  steps?: string[];
  to: string;
}) {
  return (
    <CardShell to={to} className="flex flex-col">
      <h3 className="text-lg text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      {steps && (
        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.72rem] text-muted-foreground">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="rounded-full bg-secondary px-2.5 py-1">{s}</span>
              {i < steps.length - 1 && <span className="text-gold">›</span>}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
        Start learning <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </CardShell>
  );
}

export function CourseCard({
  title,
  format,
  duration,
  body,
  level,
}: {
  title: string;
  format: string;
  duration: string;
  body: string;
  level: string;
}) {
  return (
    <CardShell className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="rounded-full border border-border px-2.5 py-1">{format}</span>
        <span className="rounded-full border border-border px-2.5 py-1">{duration}</span>
      </div>
      <h3 className="mt-4 text-lg text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <p className="mt-5 border-t border-border pt-4 text-xs text-primary">{level}</p>
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
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary">{category}</p>
      <h3 className="mt-3 text-lg leading-snug text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <p className="mt-5 text-xs text-muted-foreground">{readTime}</p>
    </CardShell>
  );
}

export function ResearchCard({
  topic,
  summary,
  field,
}: {
  topic: string;
  summary: string;
  field: string;
}) {
  return (
    <CardShell className="border-l-2 border-l-primary/40">
      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{field}</p>
      <h3 className="mt-2.5 text-base text-ink">{topic}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
    </CardShell>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  group,
}: {
  quote: string;
  name: string;
  role: string;
  group: string;
}) {
  return (
    <CardShell className="flex h-full flex-col">
      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-primary">{group}</p>
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
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="lg">
          <Link to={primary.to}>{primary.label ?? "Continue"}</Link>
        </Button>
        {secondary && (
          <Button asChild variant="outline" size="lg">
            <Link to={secondary.to}>{secondary.label ?? "Learn more"}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
