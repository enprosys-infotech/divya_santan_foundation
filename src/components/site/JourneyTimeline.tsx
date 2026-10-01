/**
 * JourneyTimeline — scroll-driven winding-road / snake timeline
 *
 * Card design: image slideshow (full card width, ~200 px tall) at the top,
 * text content below. Multiple images get prev/next arrows + dot indicators.
 * Single images display without controls. No-image cards are text-only.
 *
 * Image mapping (from /public/Jorney/):
 *   1  → 1.1 JorneyP.jpg
 *   2  → JorneyP-2.1 (HSSF).jpg
 *   3  → 3.1 JorneyP.jfif, 3.2 JorneyP.jfif
 *   4  → (none)
 *   5  → Travel-5.1.jpg … Travel-5.5.jpg
 *   6  → (none)
 *   7  → 7.1 HSSF laal bagh mela.jpg, 7.2 JorneyP (HSSF).jpg
 *   8  → 8.1 OPD geetabhavan-1.jfif, 8.2 OPD geetabhavan-2.jfif
 *   9  → 9.1 VinodAggrwal-1.jfif, 9.2 VinodAggrwal-2.jfif, 9.3 VinodAggrwal-3.jfif
 *  10  → 10 BookPublish.jfif
 *  11  → (none)
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/site/SmartImage";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                        */
/* ─────────────────────────────────────────────────────────────────────────── */

export interface HistoryItem {
  title: string;
  body: string;
}

// Summarised bodies — shorter versions for the road-map cards
const SUMMARIES: Record<number, string> = {
  1: "Born from a powerful thought — if we wish to build a better nation, we must begin with the child, even before birth. Garbh Sanskar became the seed of a national vision.",
  2: "After three decades in medicine, Dr. Anil & Dr. Seema Garg found purpose in Garbh Sanskar after an inspiring HSSF workshop. Dr. Hitesh Jani and Dr. Karishma Nirvani guided the scientific foundation.",
  3: "Deep planning sessions with senior leaders of RSS, HSSF, and IMCTF shaped the mission — Shri Yogendra Mahant, Shri Vinod Birla, and many other dedicated well-wishers lent their wisdom.",
  4: "Dr. Anil & Dr. Seema Garg completed a Post Graduate Diploma in Garbh Sanskar from Lucknow University, blending ancient Indian wisdom with modern prenatal science.",
  5: "A grassroots survey across Indore, Rajasthan, villages, and diverse communities confirmed: families were eager for a practical, scientific approach to Garbh Sanskar.",
  6: 'On 19 May 2024, Divya Santan Prakalp was formally launched with a guiding principle — "Nation Building Begins in the Womb."',
  7: "Awareness programs reached thousands. At the HSSF Lalbagh Mela (December 2024), ~3,000 pregnant mothers attended, 20,000 booklets were distributed, and 2,200 Anganwadi workers were trained.",
  8: "Garbh Sanskar OPD services launched at Geeta Bhawan Hospital and RK Hospital, Indore — bringing specialist guidance and free online classes to families.",
  9: "Renowned philanthropist Shri Vinod Ji Agarwal joined as Founder & Chairman, providing vital guidance, vision, financial support, and infrastructure to expand the initiative.",
  10: "The book 'Garbh Sanskar Ka Vigyan' — nearly 400 pages integrating Vedic wisdom with science — was launched at Daly College Auditorium, graced by Shri Bhaiyyaji Joshi Ji and Chief Minister Dr. Mohan Yadav Ji.",
  11: "An online consultation platform, digital resources 'Divyankur', and AI guidance system 'Ask Shree' are being built to bring Garbh Sanskar to families worldwide.",
};

// Images per event index (1-based)
const IMAGES: Record<number, string[]> = {
  1: ["/Jorney/1.1 JorneyP.jpg"],
  2: ["/Jorney/JorneyP-2.1 (HSSF).jpg"],
  3: ["/Jorney/3.1 JorneyP.jfif", "/Jorney/3.2 JorneyP.jfif"],
  5: [
    "/Jorney/Travel-5.1.jpg",
    "/Jorney/Travel-5.2.jpg",
    "/Jorney/Travel-5.3.jpg",
    "/Jorney/Travel-5.4.jpg",
    "/Jorney/Travel-5.5.jpg",
  ],
  7: ["/Jorney/7.1 HSSF laal bagh mela.jpg", "/Jorney/7.2 JorneyP (HSSF).jpg"],
  8: ["/Jorney/8.1 OPD geetabhavan-1.jfif", "/Jorney/8.2 OPD geetabhavan-2.jfif"],
  9: [
    "/Jorney/9.1 VinodAggrwal-1.jfif",
    "/Jorney/9.2 VinodAggrwal-2.jfif",
    "/Jorney/9.3 VinodAggrwal-3.jfif",
  ],
  10: ["/Jorney/10 BookPublish.jfif"],
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Hook — reveal on scroll                                                     */
/* ─────────────────────────────────────────────────────────────────────────── */

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) { setVisible(true); return; }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Image Slideshow                                                             */
/* ─────────────────────────────────────────────────────────────────────────── */

function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      if (isAnimating || next === current) return;
      setIsAnimating(true);
      setCurrent(next);
      setTimeout(() => setIsAnimating(false), 350);
    },
    [current, isAnimating],
  );

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  // Auto-advance every 3.5 s when multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % images.length);
    }, 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, images.length, goTo]);

  const single = images.length === 1;

  return (
    <div className="journey-slideshow">
      {/* Image track */}
      <div className="journey-slideshow-track" aria-label={`${title} — photo ${current + 1} of ${images.length}`}>
        {images.map((src, i) => (
          <SmartImage
            key={src}
            src={src}
            alt={`${title} — photo ${i + 1}`}
            className={cn(
              "journey-slideshow-img",
              i === current ? "journey-slide-active" : "journey-slide-hidden",
            )}
            loading="lazy"
          />
        ))}

        {/* Gradient scrim — ensures text legibility if we ever overlay */}
        <div className="journey-slideshow-scrim" aria-hidden="true" />

        {/* Photo counter badge */}
        {!single && (
          <div className="journey-slide-counter" aria-hidden="true">
            {current + 1} / {images.length}
          </div>
        )}

        {/* Prev / Next arrows */}
        {!single && (
          <>
            <button
              type="button"
              onClick={prev}
              className="journey-slide-btn journey-slide-btn-prev"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="journey-slide-btn journey-slide-btn-next"
              aria-label="Next photo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {!single && (
        <div className="journey-slide-dots" role="tablist" aria-label="Photo navigation">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn("journey-slide-dot", i === current && "journey-slide-dot-active")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Spine badge                                                                 */
/* ─────────────────────────────────────────────────────────────────────────── */

function SpineBadge({ n, side }: { n: number; side: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setPopped(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e && e.isIntersecting) { setPopped(true); obs.disconnect(); }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "journey-spine-badge",
        side === "right" && "journey-spine-badge-right",
        popped && "journey-badge-visible",
      )}
      aria-hidden="true"
    >
      <span className="journey-spine-number">{n}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Event card                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

function EventCard({ item, index, side }: { item: HistoryItem; index: number; side: "left" | "right" }) {
  const { ref, visible } = useReveal();
  const images = IMAGES[index] ?? [];
  const summary = SUMMARIES[index] ?? item.body;
  const hasImages = images.length > 0;

  return (
    <div
      ref={ref}
      className={cn(
        "journey-event",
        side === "left" ? "journey-event-left" : "journey-event-right",
        visible && "journey-event-visible",
      )}
      aria-label={`Milestone ${index}: ${item.title}`}
    >
      <div className="journey-card">
        {/* Gradient top bar */}
        <div className="journey-card-top-bar" aria-hidden="true" />

        {/* ── Image slideshow (full card width, sits above text) ── */}
        {hasImages && <ImageSlideshow images={images} title={item.title} />}

        {/* ── Text content ── */}
        <div className="journey-card-inner">
          <span className="journey-step-pill">Step {index}</span>
          <h3 className="journey-card-title">{item.title}</h3>
          <p className="journey-card-body">{summary}</p>
        </div>

        {/* Connector arrow toward spine */}
        <div
          className={cn(
            "journey-card-arrow",
            side === "left" ? "journey-card-arrow-right" : "journey-card-arrow-left",
          )}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Winding road SVG spine                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

function SnakePath({ count }: { count: number }) {
  const segH = 380; // taller to accommodate larger cards
  const totalH = count * segH;
  const cx = 50;
  const amp = 20;

  const points: string[] = [`M ${cx} 0`];
  for (let i = 0; i < count; i++) {
    const y0 = i * segH;
    const y1 = y0 + segH;
    const cpx = i % 2 === 0 ? cx + amp : cx - amp;
    points.push(`C ${cpx} ${y0 + segH * 0.35}, ${cpx} ${y0 + segH * 0.65}, ${cx} ${y1}`);
  }

  return (
    <svg
      className="journey-snake-svg"
      viewBox={`0 0 100 ${totalH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={points.join(" ")}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="4"
        strokeOpacity="0.15"
        strokeLinecap="round"
      />
      <path
        className="journey-snake-path"
        d={points.join(" ")}
        fill="none"
        stroke="url(#journey-road-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="8 5"
      />
      <defs>
        <linearGradient id="journey-road-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.7" />
          <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Main export                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

export function JourneyTimeline({ items }: { items: HistoryItem[] }) {
  return (
    <div className="journey-root" role="list" aria-label="Foundation milestones">
      <SnakePath count={items.length} />

      {items.map((item, i) => {
        const n = i + 1;
        const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
        return (
          <div key={n} className="journey-row" role="listitem">
            <div className="journey-slot journey-slot-left">
              {side === "left" && <EventCard item={item} index={n} side="left" />}
            </div>
            <div className="journey-spine">
              <SpineBadge n={n} side={side} />
            </div>
            <div className="journey-slot journey-slot-right">
              {side === "right" && <EventCard item={item} index={n} side="right" />}
            </div>
          </div>
        );
      })}

      <div className="journey-end-node" aria-hidden="true">
        <span className="journey-end-icon">🕉</span>
        <p className="journey-end-label">Journey Continues…</p>
      </div>
    </div>
  );
}
