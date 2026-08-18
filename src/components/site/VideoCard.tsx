import { useState } from "react";
import { Clock, Play, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export interface VideoCardProps {
  youtubeId: string;
  title: string;
  /** Devanagari accent under the title; empty in the Hindi locale. */
  native?: string;
  description: string;
  duration?: string;
  category?: string;
  className?: string;
}

const YOUTUBE_THUMBNAIL_FALLBACK =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";

export function VideoCard({
  youtubeId,
  title,
  native,
  description,
  duration,
  category,
  className,
}: VideoCardProps) {
  const { t } = useI18n();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "surface-card surface-card-hover group flex flex-col overflow-hidden rounded-2xl transition-all duration-300",
        isPlaying && "ring-2 ring-primary",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black/90">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={title}
            className="group/btn relative flex h-full w-full cursor-pointer items-center justify-center"
          >
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:opacity-95"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = YOUTUBE_THUMBNAIL_FALLBACK;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <span className="glow-primary absolute flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-primary">
              <Play className="h-7 w-7 translate-x-0.5 fill-current" />
            </span>
            {category && (
              <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                {category}
              </span>
            )}
            {duration && (
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2.5 py-1 text-[0.68rem] font-medium text-white backdrop-blur-md">
                <Clock className="h-3 w-3 text-gold" />
                {duration}
              </span>
            )}
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-medium text-ink transition-colors group-hover:text-primary">
            {title}
          </h4>
          {isPlaying && (
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-muted-foreground hover:text-ink"
              aria-label={t.common.continue}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {native && <p className="font-deva mt-1 text-xs text-primary/90">{native}</p>}
        <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
