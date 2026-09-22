import { Link } from "react-router-dom";
import dspImage from "@/assets/DspNewlogo.jpg";
import bsvafImage from "@/assets/BalajiLogo.png";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function BrandLock({
  className,
  compact = false,
  variant = "light",
}: {
  className?: string;
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const { t } = useI18n();

  const isDark = variant === "dark";

  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)}>
      <img
        src={dspImage}
        alt={t.brand.logoAlt}
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-sm object-contain sm:h-11 sm:w-11"
      />

      <span className="flex flex-col justify-center leading-tight">
        <span
          className={cn(
            "font-display text-[0.88rem] tracking-wide sm:text-[0.93rem]",
            isDark ? "text-indigo-foreground" : "text-ink"
          )}
        >
          {t.brand.prakalp}
        </span>
        <span
          className={cn(
            "text-[0.5rem] tracking-wide sm:text-[0.52rem]",
            isDark ? "text-indigo-foreground/70" : "text-muted-foreground/70"
          )}
        >
          {t.brand.supportedBy}
        </span>
        {!compact && (
          <span
            className={cn(
              "text-[0.53rem] uppercase tracking-[0.15em]",
              isDark ? "text-indigo-foreground/80" : "text-muted-foreground"
            )}
          >
            {t.brand.name}
          </span>
        )}
      </span>

      <span
        className={cn(
          "h-6 w-px",
          isDark ? "bg-indigo-foreground/20" : "bg-border"
        )}
      />

      <img
        src={bsvafImage}
        alt={t.brand.partnerLogoAlt}
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-sm object-contain opacity-85 sm:h-11 sm:w-11"
      />
    </Link>
  );
}
