import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import hero1 from "@/assets/Hero-1.png";
import hero2 from "@/assets/Hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import heroWomb from "@/assets/hero-womb-to-world.jpg";
import avdheshanand from "@/assets/avdheshanand.jpg";
import { ResultsProofSection } from "@/components/site/ResultsProofSection";
import { CardLinkIndicator, MobileAppCTA } from "@/components/site/Cards";
import { Section } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { AUDIENCE_PILLS } from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [hero1, hero2, hero3, hero4, hero5];
const SLIDE_INTERVAL = 10000;

export default function HomePage() {
  const { t } = useI18n();
  const copy = t.home;

  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const meta = getDictionary().home.meta;
    document.title = meta.title;
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning],
  );

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-15">
        <div
          className="pointer-events-none absolute inset-0 block bg-cover bg-center bg-no-repeat opacity-25 lg:hidden"
          style={{ backgroundImage: `url(${heroWomb})` }}
          aria-hidden="true"
        />
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-secondary lg:font-normal">
              {copy.hero.eyebrow}
            </p>
            <h1 className="animate-rise mt-5 text-5xl font-bold leading-tight text-ink sm:text-5xl lg:text-[5.9vh] lg:font-normal">
              {copy.hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-base-readable font-semibold text-ink lg:font-normal lg:text-muted-foreground">
              {copy.hero.subtitle}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-normal text-secondary lg:font-normal lg:text-secondary/60">
              {copy.hero.support}
            </p>

            {/* Audience pills — each family journey opens its own focused page. */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {AUDIENCE_PILLS.map((pill) => {
                return (
                  <Link
                    key={pill.id}
                    to={pill.to}
                    className="group relative flex h-full min-h-18 flex-col gap-1.5 rounded-xl border border-border bg-background/80 px-4 py-3 pr-10 text-left transition-all hover:border-primary/50 hover:bg-background hover:shadow-md active:scale-[0.97] cursor-pointer"
                  >
                    <CardLinkIndicator />
                    <span className="text-sm font-semibold text-ink leading-tight lg:font-medium">
                      {copy.hero.pills[pill.id].label}
                    </span>
                    <span className="text-[0.68rem] font-medium text-ink/80 leading-snug lg:font-normal lg:text-muted-foreground">
                      {copy.hero.pills[pill.id].sub}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Badge strip */}
            {/* <div className="mt-8 flex flex-wrap gap-2">
              {Object.values(copy.hero.badges).map((badge, i) => (
                <span
                  key={badge}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[0.7rem] font-medium",
                    i % 2 === 0
                      ? "border-secondary/25 bg-secondary/8 text-secondary"
                      : "border-primary/20 bg-primary/8 text-primary",
                  )}
                >
                  {badge}
                </span>
              ))}
            </div> */}

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/knowledge">{t.cta.learn}</Link>
              </Button>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/services">{t.cta.joinFree}</Link>
              </Button>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="/#mobile-app-cta">{t.cta.needGuidance}</a>
              </Button>
            </div>
          </div>

          {/* Hero image carousel */}
          <div
            className="relative hidden overflow-hidden rounded-3xl shadow-[var(--shadow-lift)] lg:block"
            role="region"
            aria-label="Hero image carousel"
          >
            {/* Slides */}
            <div className="relative h-[480px] w-full">
              {HERO_SLIDES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${copy.hero.imageAlt} ${i + 1}`}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    i === activeSlide ? "opacity-100" : "opacity-0",
                  )}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}

              {/* Gradient overlay at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/40 to-transparent rounded-b-3xl" />
            </div>

            {/* Prev / Next arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/70 text-ink shadow backdrop-blur-sm transition-all hover:scale-110 hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/70 text-ink shadow backdrop-blur-sm transition-all hover:scale-110 hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={i === activeSlide}
                  className={cn(
                    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "block h-2 rounded-full transition-all duration-300",
                    i === activeSlide
                      ? "w-6 bg-primary"
                      : "w-2 bg-background/70 hover:bg-background",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. RESULTS & SOCIAL PROOF — Success Stories, Stats, Videos, Reels ── */}
      <ResultsProofSection />


      {/* ── 7. Trust & Leadership ────────────────────────────────────── */}
      <section className="border-b border-border bg-background px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.leadership.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl text-ink sm:text-3xl">{copy.leadership.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
              {copy.leadership.subtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-gold/30 shadow-md">
                <img
                  src={avdheshanand}
                  alt={copy.leadership.members.avdheshanand.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">
                {copy.leadership.members.avdheshanand.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-foreground">
                {copy.leadership.members.avdheshanand.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {copy.leadership.members.avdheshanand.bio}
              </p>
            </div>
            <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 shadow-md">
                <img
                  src="/vinod-sir.png"
                  alt={copy.leadership.members.vinod.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">
                {copy.leadership.members.vinod.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary">
                {copy.leadership.members.vinod.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {copy.leadership.members.vinod.bio}
              </p>
            </div>
             <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 shadow-md">
                <img
                  src="/anil-sir.png"
                  alt={copy.leadership.members.anil.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">
                {copy.leadership.members.anil.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary">
                {copy.leadership.members.anil.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {copy.leadership.members.anil.bio}
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="sm">
              <Link to="/about" className="gap-1.5">
                {copy.leadership.meetTeam} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA: Mobile App Download ─────────────────────────── */}
      <Section id="mobile-app-cta">
        <MobileAppCTA />
      </Section>
    </>
  );
}
