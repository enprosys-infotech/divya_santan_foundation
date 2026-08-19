import { useState } from "react";
import { Clock, Play, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export interface InstaReelCardProps {
  reelId: string;
  title: string;
  /** Devanagari accent under the title; empty in the Hindi locale. */
  native?: string;
  description: string;
  duration?: string;
  category?: string;
  className?: string;
}

const INSTAGRAM_THUMBNAIL_FALLBACK =
  "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop";

export function InstaReelCard({
  reelId,
  title,
  native,
  description,
  duration,
  category,
  className,
}: InstaReelCardProps) {
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
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black/90">
        {isPlaying ? (
          <iframe
            src={`https://www.instagram.com/p/${reelId}/embed`}
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
            <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 via-purple-600/30 to-orange-600/20" />
            <img
              src={INSTAGRAM_THUMBNAIL_FALLBACK}
              alt={title}
              className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:opacity-95"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <span className="glow-primary absolute flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover/btn:scale-110">
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
