import { Smartphone } from "lucide-react";
import androidBadge from "@/assets/DownloadAndroid.png";
import iosBadge from "@/assets/DownloadIOS.png";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

/**
 * Mobile App CTA Section
 * Promotes the mobile app with download badges for Android and iOS
 * Fully internationalized with Hindi and English support
 */

export function MobileAppCTA({ className }: { className?: string }) {
  const { t } = useI18n();
  const copy = t.home.mobileApp;

  return (
    <section
      className={cn(
        "mandala-veil relative overflow-hidden rounded-3xl border border-primary/20 bg-warm px-6 py-16 sm:px-12 sm:py-20",
        className,
      )}
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-gold/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            {/* Icon Badge */}
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
              <Smartphone className="h-7 w-7 text-primary" strokeWidth={1.5} />
            </div>

            {/* Eyebrow */}
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
              {copy.eyebrow}
            </p>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {copy.title}
              <br />
              <span className="text-primary">{copy.titleAccent}</span>
            </h2>

            {/* Devanagari Accent (only in English locale) */}
            {copy.native && <p className="font-deva mt-3 text-lg text-primary/80">{copy.native}</p>}

            {/* Description */}
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:max-w-none">
              {copy.description}
            </p>

            {/* Features List */}
            <ul className="mt-6 space-y-2.5 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  ✓
                </span>
                <span>{copy.features.classes}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  ✓
                </span>
                <span>{copy.features.askShree}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  ✓
                </span>
                <span>{copy.features.reminders}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  ✓
                </span>
                <span>{copy.features.tracking}</span>
              </li>
            </ul>
          </div>

          {/* Download Badges Side */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="mb-5 text-sm font-medium tracking-wide text-ink">{copy.downloadLabel}</p>

            <div className="flex flex-col gap-4">
              {/* Android Badge */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105 active:scale-95"
                aria-label="Download on Google Play Store"
              >
                <img
                  src={androidBadge}
                  alt="Get it on Google Play"
                  className="h-18 w-auto rounded-lg "
                />
              </a>

              {/* iOS Badge */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105 active:scale-95"
                aria-label="Download on Apple App Store"
              >
                <img
                  src={iosBadge}
                  alt="Download on the App Store"
                  className="h-14 w-auto rounded-lg pl-3"
                />
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 rounded-2xl border border-border bg-background/60 px-5 py-4 backdrop-blur-sm">
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                <span className="font-medium text-ink">{copy.info.free}</span>
                <br />
                {copy.info.languages}
                <br />
                {copy.info.offline}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 text-center">
          <div>
            <p className="text-2xl font-semibold text-secondary">50K+</p>
            <p className="mt-1 text-xs text-muted-foreground">{copy.stats.users}</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-secondary">4.8★</p>
            <p className="mt-1 text-xs text-muted-foreground">{copy.stats.rating}</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-secondary">2+</p>
            <p className="mt-1 text-xs text-muted-foreground">{copy.stats.languages}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
