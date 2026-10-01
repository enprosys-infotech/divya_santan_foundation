import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/site/Cards";
import { SmartImage } from "@/components/site/SmartImage";
import { Section } from "@/components/site/SectionHeading";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

/* ─── SVG Motif: thin-line lotus used as a structural accent, not decoration ─── */
function LotusAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      {/* centre petal */}
      <path
        d="M60 72 C60 72 44 54 44 38 C44 24 52 14 60 10 C68 14 76 24 76 38 C76 54 60 72 60 72Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
      {/* left petal */}
      <path
        d="M60 72 C60 72 34 60 26 46 C18 32 22 18 30 14 C40 12 52 24 60 38"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      {/* right petal */}
      <path
        d="M60 72 C60 72 86 60 94 46 C102 32 98 18 90 14 C80 12 68 24 60 38"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      {/* far left petal */}
      <path
        d="M60 72 C60 72 18 66 10 52 C4 40 10 26 20 22 C32 18 50 32 60 50"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
      />
      {/* far right petal */}
      <path
        d="M60 72 C60 72 102 66 110 52 C116 40 110 26 100 22 C88 18 70 32 60 50"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
      />
      {/* stem */}
      <line x1="60" y1="72" x2="60" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/* ─── Course Card — thumbnail-led compact card, grid-ready for future courses ─── */
function FoundationCourseCard() {
  const { t } = useI18n();
  const course = t.content.courses.foundation;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_36px_-8px_color-mix(in_oklab,var(--color-gold)_32%,transparent)]"
      aria-label={course.title}
    >
      {/* ── Thumbnail ── */}
      <div className="relative overflow-hidden">
        <SmartImage
          src="/Cources/GarbhFoundationCource.png"
          alt="Garbh Sanskar Foundation Course"
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Subtle scrim so badges sit on any image colour */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Free badge — floated over image bottom-left */}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-gold/50 bg-black/55 px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
          <svg viewBox="0 0 10 10" fill="none" className="h-2 w-2" aria-hidden="true">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.1" />
            <path d="M3 5.5l1.5 1.5 2.5-3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Free
        </span>

        {/* Online badge — top-right */}
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[0.56rem] uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
          Online
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-1 flex-col p-4">

        {/* Title */}
        <h3 className="text-sm font-semibold leading-snug text-ink">{course.title}</h3>
        {course.native && (
          <p className="font-deva mt-0.5 text-[0.72rem] text-primary/75">{course.native}</p>
        )}

        {/* One-line summary */}
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          Intrauterine care, education &amp; holistic development of the child — from the very beginning of pregnancy.
        </p>

        {/* Pill facts */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[0.58rem] text-muted-foreground">
            ~3 months
          </span>
          <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[0.58rem] text-muted-foreground">
            12 classes
          </span>
          <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[0.58rem] text-muted-foreground">
            Hindi &amp; English
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Gold rule */}
        <span className="my-3.5 block h-px w-full bg-gradient-to-r from-gold/0 via-gold/35 to-gold/0" />

        {/* CTA row */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {course.ctaLabel ?? "Contact Us to Enrol"}
          <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/* ─── "How it works" — 3-step process strip ─── */
function HowItWorks() {
  const { t } = useI18n();
  const copy = t.courses;

  const stepIcons = [
    /* Contact */
    <svg key="contact" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
      <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5Z" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M3 5l7 6 7-6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>,
    /* Learn */
    <svg key="learn" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
      <path d="M10 2L2 6l8 4 8-4-8-4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M2 10l8 4 8-4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M2 14l8 4 8-4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>,
    /* Apply */
    <svg key="apply" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ];

  const stepKeys = Object.keys(copy.how.steps) as (keyof typeof copy.how.steps)[];

  return (
    <div className="relative">
      {/* Connecting line — desktop only */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-8 mx-auto hidden h-px max-w-[520px] bg-gradient-to-r from-gold/0 via-gold/35 to-gold/0 sm:block"
      />

      <div className="grid gap-8 sm:grid-cols-3">
        {stepKeys.map((key, idx) => {
          const step = copy.how.steps[key];
          return (
            <div key={key} className="relative flex flex-col items-center text-center">
              {/* Number + icon circle */}
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/35 bg-card shadow-sm">
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
                  {idx + 1}
                </span>
                <span className="text-primary">{stepIcons[idx]}</span>
              </div>
              <h4 className="text-sm font-semibold text-ink">{step.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function CoursesPage() {
  const { t } = useI18n();
  const copy = t.courses;

  useEffect(() => {
    const meta = getDictionary().courses.meta;
    document.title = meta.title;
  }, []);

  return (
    <>
      {/* ── Banner Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background image */}
        <SmartImage
          src="/Cources/courcebanner.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 opacity-[80%] h-full w-full object-cover object-center"
        />

        {/* Dark overlay so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-black/44 to-black/60" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-4xl px-5 pb-20 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-24">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-gold/90">
            {copy.header.eyebrow}
          </p>
          <h1 className="animate-rise mt-5 text-4xl leading-tight text-white sm:text-5xl">
            {copy.header.title}
          </h1>
          <span className="mx-auto mt-6 block h-px w-20 bg-gold/70" />
          <p className="mx-auto mt-6 max-w-2xl text-balance-pretty text-base leading-relaxed text-white/80">
            {copy.header.intro}
          </p>
        </div>
      </section>

      {/* ── Programmes section ──────────────────────────────────────── */}
      <Section>
        {/* Section heading — left-aligned to feel editorial, not generic */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {copy.programmes.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl leading-tight text-ink sm:text-4xl">
              {copy.programmes.title}
            </h2>
            <span className="mt-4 block h-px w-14 bg-gold/65" />
          </div>
          {/* Subtle "more coming" note — right side */}
          <p className="max-w-xs text-right text-xs leading-relaxed text-muted-foreground sm:mb-1">
            {copy.programmes.subtitle}
          </p>
        </div>

        {/* Course card — small, compact, grid-ready for future courses */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FoundationCourseCard />

          {/* Future course placeholder slots — shows the grid shape is intentional */}
          <div
            aria-hidden="true"
            className="hidden rounded-2xl border border-dashed border-border/50 bg-muted/20 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-2 sm:px-6 sm:py-10 sm:text-center lg:flex"
          >
            <LotusAccent className="h-10 w-16 text-gold/30" />
            <p className="mt-3 text-xs text-muted-foreground/50">More courses coming soon</p>
          </div>
          <div
            aria-hidden="true"
            className="hidden rounded-2xl border border-dashed border-border/50 bg-muted/20 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2 lg:px-6 lg:py-10 lg:text-center"
          >
            <LotusAccent className="h-10 w-16 text-gold/20" />
            <p className="mt-3 text-xs text-muted-foreground/40">More courses coming soon</p>
          </div>
        </div>
      </Section>

      {/* ── How learning works ─────────────────────────────────────── */}
      <section className="border-t border-border bg-warm px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {copy.how.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl leading-tight text-ink sm:text-4xl">{copy.how.title}</h2>
            <span className="mx-auto mt-4 block h-px w-14 bg-gold/65" />
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {copy.how.subtitle}
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/contact", label: copy.cta.primary }}
          secondary={{ to: "/ask-shree", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
