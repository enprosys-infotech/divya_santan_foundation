/**
 * BlogShareButtons — share and copy-link actions shown on the detail page.
 * No tracking or third-party scripts. Uses the Web Share API where available,
 * falling back to direct link copy.
 */

import { useState } from "react";
import { Link2, Share2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogShareButtonsProps {
  title: string;
  className?: string;
}

export function BlogShareButtons({ title, className }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API not available — silently ignore
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed — no action needed
      }
    } else {
      // Fallback to copy
      await handleCopy();
    }
  };

  const buttonBase = cn(
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition-all duration-300",
    "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  );

  return (
    <div
      className={cn("flex flex-wrap items-center gap-3", className)}
      aria-label="Share this article"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Share</span>

      {/* Copy link */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Link copied!" : "Copy link"}
        className={cn(
          buttonBase,
          copied
            ? "border-green/40 bg-green/8 text-green"
            : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
        )}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            Copied!
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
            Copy link
          </>
        )}
      </button>

      {/* Native share (mobile) */}
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share article"
        className={cn(
          buttonBase,
          "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
        )}
      >
        <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
        Share
      </button>
    </div>
  );
}
