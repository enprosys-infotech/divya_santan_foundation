import { useState, useCallback, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import {
  Sparkles,
  FlaskConical,
  BookOpen,
  ArrowRight,
  Layers,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Touchpad,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ancientScienceSynergy } from "@/lib/content";
import { cn } from "@/lib/utils";

type ViewMode = "matrix" | "ancient" | "science";

export function AncientScienceBridge() {
  const [activeTab, setActiveTab] = useState<ViewMode>("matrix");
  const [selectedId, setSelectedId] = useState<string>(ancientScienceSynergy[0].id);

  // Embla Sling Carousel Setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setSelectedIndex(idx);
    if (ancientScienceSynergy[idx]) {
      setSelectedId(ancientScienceSynergy[idx].id);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const selectedItem =
    ancientScienceSynergy.find((item) => item.id === selectedId) ?? ancientScienceSynergy[0];

  const handlePillarClick = (id: string, index: number) => {
    setSelectedId(id);
    scrollTo(index);
  };

  return (
    <section className="mandala-veil relative overflow-hidden bg-warm py-16 sm:py-24">
      {/* Background Decorative Om Symbol */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 select-none text-[22rem] leading-none text-primary/4 blur-[1px]"
      >
        ॐ
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 select-none text-[22rem] leading-none text-gold/6 blur-[1px]"
      >
        🪷
      </span>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Convergence of Traditions & Research"
          title="Where Ancient Wisdom Synchronizes with Modern Science"
          subtitle="Garbh Sanskar is a timeless Vedic science of intra-uterine nurturing, validated step-by-step by 21st-century epigenetics, auditory neuroscience, and prenatal psychology."
        />

        {/* View Mode Switcher Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("matrix")}
            className={cn(
              "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95",
              activeTab === "matrix"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-ink",
            )}
          >
            <Layers className="h-3.5 w-3.5" />
            Unified Synergy Matrix
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ancient")}
            className={cn(
              "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95",
              activeTab === "ancient"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-ink",
            )}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Sacred Vedic Wisdom
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("science")}
            className={cn(
              "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95",
              activeTab === "science"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-ink",
            )}
          >
            <FlaskConical className="h-3.5 w-3.5" />
            Modern Neuroscience
          </button>
        </div>

        {/* Dynamic Touch Pillar Selector Filter Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {ancientScienceSynergy.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handlePillarClick(item.id, idx)}
              className={cn(
                "inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-300 active:scale-95",
                selectedId === item.id
                  ? "border-primary/60 bg-primary/10 text-primary shadow-sm ring-1 ring-primary/40"
                  : "border-border/60 bg-background/80 text-muted-foreground hover:border-primary/30 hover:bg-background hover:text-ink",
              )}
            >
              <span className="text-base leading-none">{item.symbol}</span>
              <span>{item.category}</span>
              {selectedId === item.id && <Sparkles className="h-3 w-3 text-gold" />}
            </button>
          ))}
        </div>

        {/* Featured Comparative Synergy Card (Interactive Split Showcase) */}
        {selectedItem && (
          <div className="mt-10 rounded-3xl border border-primary/20 bg-background/90 p-6 shadow-[var(--shadow-lift)] backdrop-blur-md sm:p-8">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary shadow-xs">
                  {selectedItem.symbol}
                </span>
                <div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
                    Pillar {selectedIndex + 1} of {ancientScienceSynergy.length}: {selectedItem.category}
                  </span>
                  <h3 className="text-xl font-medium text-ink sm:text-2xl">
                    {selectedItem.ancientTitle.split(" (")[0]}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold-foreground">
                <Zap className="h-3.5 w-3.5 text-gold" />
                <span>Verified Impact: <strong>{selectedItem.statValue}</strong></span>
              </div>
            </div>

            {/* Split Comparison View */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
              {/* Left Column: Ancient Sanatan Wisdom */}
              <div
                className={cn(
                  "flex flex-col rounded-2xl border p-6 transition-all duration-300",
                  activeTab === "science"
                    ? "opacity-60 bg-secondary/20 border-border"
                    : "border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/30 shadow-sm",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary">
                    <BookOpen className="h-3 w-3" />
                    Vedic Practice & Wisdom
                  </span>
                  <span className="text-3xl leading-none">{selectedItem.symbol}</span>
                </div>

                <h4 className="mt-4 text-lg font-medium text-ink">{selectedItem.ancientTitle}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {selectedItem.ancientDesc}
                </p>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary/90">
                    Sanatan Dharma Core Concept
                  </p>
                  <p className="font-deva mt-1 text-xs text-ink/80">
                    श्रीमद्भगवद्गीता एवं चरक संहिता अनुसार गर्भिणी चर्या
                  </p>
                </div>
              </div>

              {/* Center Bridge Divider */}
              <div className="flex flex-col items-center justify-center py-2 lg:py-0">
                <div className="hidden h-full w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 lg:block" />
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold shadow-sm">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
                <span className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] font-semibold text-primary">
                  Synthesized
                </span>
                <div className="hidden h-full w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 lg:block" />
              </div>

              {/* Right Column: Modern Science & Evidence */}
              <div
                className={cn(
                  "flex flex-col rounded-2xl border p-6 transition-all duration-300",
                  activeTab === "ancient"
                    ? "opacity-60 bg-secondary/20 border-border"
                    : "border-primary/30 bg-gradient-to-br from-secondary/40 via-background to-primary/5 shadow-sm",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink/80">
                    <FlaskConical className="h-3 w-3 text-primary" />
                    Neuroscience & Evidence
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {selectedItem.statLabel}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-medium text-ink">{selectedItem.scienceTitle}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {selectedItem.scienceDesc}
                </p>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Peer-Reviewed Scientific Field
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.65rem] text-ink/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Synergy Matrix Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/30 px-6 py-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <p className="text-xs text-ink/90 sm:text-sm">
                  <strong>Key Takeaway:</strong> Ancient Ayurvedic rules for Garbh Sanskar directly align with modern epigenetics — proving early environment shapes cellular and neural trajectories.
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="min-h-[44px]">
                <Link to="/research" className="gap-1.5">
                  View Full Research Papers <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* ── Sling Cards Carousel Header & Navigation Controls ── */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl text-ink sm:text-2xl">
                All {ancientScienceSynergy.length} Synergy Pillars
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-primary">
                <Touchpad className="h-3 w-3" /> Swipe / Sling Enabled
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Swipe horizontally or tap arrows to explore all {ancientScienceSynergy.length} Vedic & Neuroscience comparative cards.
            </p>
          </div>

          {/* Touch-Friendly Prev / Next Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-muted-foreground">
              {selectedIndex + 1} / {ancientScienceSynergy.length}
            </span>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                aria-label="Previous sling card"
                className="h-11 w-11 rounded-full border-primary/30 active:scale-90 transition-transform"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={scrollNext}
                aria-label="Next sling card"
                className="h-11 w-11 rounded-full border-primary/30 active:scale-90 transition-transform"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </Button>
            </div>
          </div>
        </div>

        {/* ── Sling Cards Touch Carousel viewport ── */}
        <div className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5 py-2">
            {ancientScienceSynergy.map((item, idx) => (
              <div
                key={item.id}
                className="flex-[0_0_88%] min-w-0 sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
              >
                <button
                  type="button"
                  onClick={() => handlePillarClick(item.id, idx)}
                  className={cn(
                    "surface-card surface-card-hover block h-full w-full p-6 text-left transition-all duration-300 cursor-pointer active:scale-[0.98]",
                    selectedId === item.id
                      ? "ring-2 ring-primary/60 border-primary/40 bg-gradient-to-b from-background via-primary/5 to-secondary/30 shadow-md"
                      : "bg-background",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl leading-none">{item.symbol}</span>
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-medium text-ink">{item.ancientTitle}</h4>
                  <p className="mt-1 text-xs font-semibold text-primary">{item.scienceTitle}</p>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {item.scienceDesc}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-[0.7rem]">
                    <span className="text-muted-foreground">Validation:</span>
                    <span className="font-semibold text-primary">{item.statValue}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {ancientScienceSynergy.map((item, idx) => (
            <button
              key={item.id + "dot"}
              type="button"
              onClick={() => handlePillarClick(item.id, idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer min-h-[20px] min-w-[20px] flex items-center justify-center",
              )}
            >
              <span
                className={cn(
                  "block h-2.5 rounded-full transition-all duration-300",
                  selectedIndex === idx ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/50",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
