import { Link } from "react-router-dom";
import dspImage from "@/assets/DivyasantanLogo.png";
import bsvafImage from "@/assets/BalajiLogo.png";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function BrandLock({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { t } = useI18n();

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
        <span className="font-display text-[0.88rem] tracking-wide text-ink sm:text-[0.93rem]">
          {t.brand.prakalp}
        </span>
        <span className="text-[0.5rem] tracking-wide text-muted-foreground/70 sm:text-[0.52rem]">
          {t.brand.supportedBy}
        </span>
        {!compact && (
          <span className="text-[0.53rem] uppercase tracking-[0.15em] text-muted-foreground">
            {t.brand.name}
          </span>
        )}
      </span>

      <span className="h-6 w-px bg-border" />

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
