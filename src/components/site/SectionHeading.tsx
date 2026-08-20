import { cn } from "@/lib/utils";

const EYEBROW_VARIANTS = {
  primary: "text-primary",
  secondary: "text-secondary",
  gold: "text-gold-foreground",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  eyebrowVariant = "secondary",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  /** Colour of the small uppercase eyebrow label. Defaults to maroon (secondary). */
  eyebrowVariant?: keyof typeof EYEBROW_VARIANTS;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-[0.68rem] uppercase tracking-[0.28em]", EYEBROW_VARIANTS[eyebrowVariant])}>{eyebrow}</p>
      )}
      <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <span
        className={cn(
          "mt-4 block h-px w-16 bg-gold/70",
          align === "center" ? "mx-auto" : undefined,
        )}
      />
      {subtitle && (
        <p className="mt-5 text-balance-pretty text-base-readable text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
