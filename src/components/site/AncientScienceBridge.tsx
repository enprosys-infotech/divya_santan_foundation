import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Layers,
  Sparkles,
  Touchpad,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SYNERGY_PILLARS, type SynergyPillarId } from "@/content/registry";
import { getIconByPillarId, SPIRITUAL_ICONS } from "@/content/spiritual-icons";
import { format, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type ViewMode = "matrix" | "ancient" | "science";

const VIEW_TABS: { id: ViewMode; icon: typeof Layers }[] = [
  { id: "matrix", icon: Layers },
  { id: "ancient", icon: BookOpen },
  { id: "science", icon: FlaskConical },
];

export function AncientScienceBridge() {
  const { t } = useI18n();
  const copy = t.synergy;
  const total = SYNERGY_PILLARS.length;

  const [activeTab, setActiveTab] = useState<ViewMode>("matrix");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, skipSnaps: false });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const selectedPillar = SYNERGY_PILLARS[selectedIndex] ?? SYNERGY_PILLARS[0];
  const selected = t.content.synergy[selectedPillar.id];

  const selectPillar = (index: number) => {
    setSelectedIndex(index);
    scrollTo(index);
  };

  const pillarCopy = (id: SynergyPillarId) => t.content.synergy[id];

  return (
    <section className="mandala-veil relative overflow-hidden bg-warm py-16 sm:py-24">
      <img
        src={SPIRITUAL_ICONS.om.src}
        alt={SPIRITUAL_ICONS.om.alt}
        className="pointer-events-none absolute -right-20 -top-20 select-none h-80 w-80 leading-none text-primary/4 blur-[1px] opacity-20"
      />
      <img
        src={SPIRITUAL_ICONS.lotus.src}
        alt={SPIRITUAL_ICONS.lotus.alt}
        className="pointer-events-none absolute -bottom-20 -left-20 select-none h-80 w-80 leading-none text-gold/6 blur-[1px] opacity-25"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {VIEW_TABS.map(({ id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={cn(
                "inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 active:scale-95",
                activeTab === id
                  ? "scale-105 bg-secondary text-secondary-foreground shadow-md shadow-secondary/20"
                  : "border border-border bg-background text-muted-foreground hover:border-secondary/40 hover:text-ink",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {copy.tabs[id]}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SYNERGY_PILLARS.map((pillar, index) => {
            const iconData = getIconByPillarId(pillar.id);
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => selectPillar(index)}
                className={cn(
                  "inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-300 active:scale-95",
                  selectedIndex === index
                    ? "border-secondary/50 bg-secondary/8 text-secondary ring-1 ring-secondary/30"
                    : "border-border/60 bg-background/80 text-muted-foreground hover:border-secondary/30 hover:bg-background hover:text-ink",
                )}
              >
                {iconData && (
                  <img src={iconData.src} alt={iconData.alt} className="h-4 w-4 object-contain" />
                )}
                <span>{pillarCopy(pillar.id).category}</span>
                {selectedIndex === index && <Sparkles className="h-3 w-3 text-gold" />}
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-primary/20 bg-background/90 p-6 shadow-[var(--shadow-lift)] backdrop-blur-md sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
            <div className="flex items-center gap-3">
              {getIconByPillarId(selectedPillar.id) && (
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/8 shadow-xs overflow-hidden">
                  <img
                    src={getIconByPillarId(selectedPillar.id)!.src}
                    alt={getIconByPillarId(selectedPillar.id)!.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                  {format(copy.pillarCounter, { current: selectedIndex + 1, total })}:{" "}
                  {selected.category}
                </span>
                <h3 className="text-xl font-medium text-ink sm:text-2xl">
                  {selected.ancientTitle.split(" (")[0]}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold-foreground">
              <Zap className="h-3.5 w-3.5 text-gold" />
              <span>
                {copy.verifiedImpact}: <strong>{selected.statValue}</strong>
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div
              className={cn(
                "flex flex-col rounded-2xl border p-6 transition-all duration-300",
                activeTab === "ancient"
                  ? "border-border bg-accent/20 opacity-60"
                  : "border-primary/30 bg-gradient-to-br from-accent/40 via-background to-primary/5 shadow-sm",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink/80">
                  <FlaskConical className="h-3 w-3 text-primary" />
                  {copy.scienceBadge}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {selected.statLabel}
                </span>
              </div>

              <h4 className="mt-4 text-lg font-medium text-ink">{selected.scienceTitle}</h4>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                {selected.scienceDesc}
              </p>

              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {copy.scienceFootnote}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent px-2.5 py-0.5 text-[0.65rem] text-ink/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-2 lg:py-0">
              <div className="hidden h-full w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 lg:block" />
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold shadow-sm">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
              <span className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-primary">
                {copy.bridgeLabel}
              </span>
              <div className="hidden h-full w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 lg:block" />
            </div>

            <div
              className={cn(
                "flex flex-col rounded-2xl border p-6 transition-all duration-300",
                activeTab === "science"
                  ? "border-border bg-accent/20 opacity-60"
                  : "border-primary/30 bg-gradient-to-br from-primary/5 via-background to-accent/30 shadow-sm",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gold/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold-foreground">
                  <BookOpen className="h-3 w-3" />
                  {copy.ancientBadge}
                </span>
                <span className="text-3xl leading-none">{selectedPillar.symbol}</span>
              </div>

              <h4 className="mt-4 text-lg font-medium text-ink">{selected.ancientTitle}</h4>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                {selected.ancientDesc}
              </p>

              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary/90">
                  {copy.ancientFootnote}
                </p>
                <p className="font-deva mt-1 text-xs text-ink/80">{copy.ancientFootnoteNative}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-accent/30 px-6 py-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-ink/90 sm:text-base">
                <strong>{copy.takeawayLabel}</strong> {copy.takeaway}
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="min-h-[44px]">
              <Link to="/research" className="gap-1.5">
                {copy.researchCta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
