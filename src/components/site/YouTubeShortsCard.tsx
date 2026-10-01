import { useState } from "react";
import { Play, X, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/site/SmartImage";

export interface YouTubeShortsCardProps {
  youtubeId: string;
  title: string;
  native?: string;
  description: string;
  category?: string;
  className?: string;
}

const YOUTUBE_THUMBNAIL_FALLBACK =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";

export function YouTubeShortsCard({
  youtubeId,
  title,
  native,
  description,
  category,
  className,
}: YouTubeShortsCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "surface-card group flex flex-col overflow-hidden rounded-2xl transition-all duration-300",
        isPlaying && "ring-2 ring-secondary",
        className,
      )}
    >
      {/* Portrait video frame — 9:16 aspect ratio */}
      <div className="relative w-full overflow-hidden bg-black/90" style={{ aspectRatio: "9/16" }}>
        {isPlaying ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&loop=1&playlist=${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="absolute right-2 top-2 inline-flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              aria-label="Close video"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play: ${title}`}
            className="group/btn relative flex h-full w-full cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
          >
            {/* Thumbnail — YouTube uses maxresdefault for Shorts too */}
            <SmartImage
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:opacity-100"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = YOUTUBE_THUMBNAIL_FALLBACK;
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            {/* Category badge */}
            {category && (
              <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-secondary backdrop-blur-md">
                {category}
              </span>
            )}

            {/* Shorts pill */}
            <span className="absolute right-3 top-3 rounded-full bg-red-600/90 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Shorts
            </span>

            {/* Play button */}
            <span className="glow-secondary absolute flex h-14 w-14 items-center justify-center rounded-full bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/30 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-secondary">
              <Play className="h-6 w-6 translate-x-0.5 fill-current" />
            </span>

            {/* Quote icon at bottom */}
            <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-secondary backdrop-blur-md">
              <Quote className="h-3.5 w-3.5 fill-current" />
            </span>
          </button>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-4">
        <h4 className="line-clamp-2 text-sm font-medium leading-snug text-ink transition-colors group-hover:text-secondary">
          {title}
        </h4>
        {native && (
          <p className="font-deva mt-1 line-clamp-1 text-[0.7rem] text-secondary/80">{native}</p>
        )}
        <p className="mt-2 line-clamp-3 flex-1 text-[0.72rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
