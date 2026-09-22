import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { useI18n } from "@/i18n";

interface CompletedEventCardProps {
  photos: readonly string[];
  category: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  details: string;
  photoAlts: readonly string[];
  previousLabel: string;
  nextLabel: string;
  goToLabel: string;
  viewDetailsLabel: string;
  closeLabel: string;
}

export function CompletedEventCard({
  photos,
  category,
  title,
  date,
  location,
  summary,
  details,
  photoAlts,
  previousLabel,
  nextLabel,
  goToLabel,
  viewDetailsLabel,
  closeLabel,
}: CompletedEventCardProps) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isOpen, photos.length]);

  const movePhoto = (direction: 1 | -1) => {
    setActivePhoto((current) => (current + direction + photos.length) % photos.length);
  };

  const openGallery = () => {
    setActivePhoto(0);
    setIsOpen(true);
  };

  return (
    <>
      <article className="surface-card surface-card-hover overflow-hidden rounded-3xl transition-transform duration-300">
        <button
          type="button"
          onClick={openGallery}
          className="group block min-h-11 w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
        >
          <div className="relative aspect-[1.35/1] overflow-hidden bg-secondary/10">
            <img
              src={photos[0]}
              alt={photoAlts[0]}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-secondary backdrop-blur-sm">
              {category}
            </span>
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
              <Images className="h-3.5 w-3.5" />
              {photos.length}
            </span>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[0.64rem] uppercase tracking-[0.22em] text-primary">{category}</p>
            <h3 className="mt-2 text-xl leading-tight text-ink">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary" />
                {date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {location}
              </span>
            </div>
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
            <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-secondary underline decoration-gold underline-offset-4">
              {viewDetailsLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </button>
      </article>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={summary}
        closeLabel={closeLabel}
      >
        <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="relative aspect-[1.35/1] overflow-hidden rounded-2xl bg-secondary/10">
            {photos.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={photoAlts[index]}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === activePhoto ? "opacity-100" : "opacity-0"}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
              <p className="text-sm">
                {activePhoto + 1} / {photos.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => movePhoto(-1)}
                  aria-label={previousLabel}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/25 transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => movePhoto(1)}
                  aria-label={nextLabel}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/25 transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-primary">{category}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary" />
                {date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {location}
              </span>
            </div>
            <p className="mt-7 text-base font-medium leading-relaxed text-ink">{summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{details}</p>
            <div className="mt-7 flex gap-2" aria-label={goToLabel}>
              {photos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  aria-label={`${goToLabel} ${index + 1}`}
                  aria-current={index === activePhoto}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-2.5 rounded-full transition-all ${index === activePhoto ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"}`}
                  />
                </button>
              ))}
            </div>
            <p className="mt-7 border-t border-border pt-4 text-xs text-muted-foreground">
              {t.brand.prakalp}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
