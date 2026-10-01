/**
 * BlogHero — the hero / page-header band for the /blog listing page.
 * Mirrors the PageHeader pattern (mandala-veil + bg-warm) used on every
 * inner page, with a wider max-width to accommodate the two-column layout.
 */

import { BookOpen } from "lucide-react";

export function BlogHero() {
  return (
    <section
      className="mandala-veil border-b border-border bg-warm px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20"
      aria-labelledby="blog-hero-heading"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-[0.3em] text-primary">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          Knowledge &amp; Insights
        </p>

        {/* Title */}
        <h1
          id="blog-hero-heading"
          className="animate-rise mt-5 text-4xl leading-tight text-ink sm:text-5xl"
        >
          Wisdom from Womb to World
        </h1>

        {/* Devanagari accent */}
        <p className="font-deva mt-3 text-lg text-primary/85">
          ज्ञान — गर्भ से विश्व तक
        </p>

        {/* Gold rule */}
        <span className="mx-auto mt-6 block h-px w-20 bg-gold/70" aria-hidden="true" />

        {/* Intro */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Explore research, traditional wisdom, and evidence-informed insights on Garbh
          Sanskar, prenatal wellbeing, music, parenthood, and the science of nurturing healthy,
          cultured, and compassionate generations.
        </p>
      </div>
    </section>
  );
}
