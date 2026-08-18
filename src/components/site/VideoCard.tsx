import { useState } from "react";
import { Play, Sparkles, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  hindi?: string;
  desc: string;
  duration?: string;
  category?: string;
}

export function VideoCard({ video, className }: { video: VideoItem; className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "surface-card surface-card-hover group flex flex-col overflow-hidden rounded-2xl transition-all duration-300",
        isPlaying ? "ring-2 ring-primary" : "",
        className,
      )}
    >
      {/* Video Player Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/90">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="relative flex h-full w-full items-center justify-center cursor-pointer group/btn"
          >
            {/* Real YouTube HQ Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:opacity-95"
              loading="lazy"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";
              }}
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Glowing Central Play Button */}
            <span className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-primary glow-primary">
              <Play className="h-7 w-7 fill-current translate-x-0.5" />
            </span>

            {/* Category Tag Top Left */}
            {video.category && (
              <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                {video.category}
              </span>
            )}

            {/* Duration Tag Bottom Right */}
            {video.duration && (
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2.5 py-1 text-[0.68rem] font-medium text-white backdrop-blur-md">
                <Clock className="h-3 w-3 text-gold" />
                {video.duration}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Video Information */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-medium text-ink group-hover:text-primary transition-colors">
            {video.title}
          </h4>
          {isPlaying && (
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-ink"
              aria-label="Close video player"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {video.hindi && <p className="font-deva mt-1 text-xs text-primary/90">{video.hindi}</p>}
        <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted-foreground">{video.desc}</p>
      </div>
    </div>
  );
}
