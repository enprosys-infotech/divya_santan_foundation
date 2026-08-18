import { Link } from "@tanstack/react-router";
import dspImage from "@/assets/image.png";
import bsvafImage from "@/assets/image1.png";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function BrandLock({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)}>
      {/* Primary logo — image.png. Swap to @/assets/logo.png once that file is added to src/assets */}
      <img
        src={dspImage}
        alt="Divya Santan Prakalp"
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-sm object-contain sm:h-11 sm:w-11"
      />

      <span className="flex flex-col justify-center leading-tight">
        <span className="font-display text-[0.88rem] tracking-wide text-ink sm:text-[0.93rem]">
          {t("brand.prakalp")}
        </span>
        {!compact && (
          <span className="text-[0.56rem] uppercase tracking-[0.15em] text-muted-foreground">
            {t("brand.name")}
          </span>
        )}
      </span>

      {/* Divider */}
      <span className="hidden h-6 w-px bg-border lg:block" />

      {/* Secondary logo — image1.png */}
      <img
        src={bsvafImage}
        alt="Balaji Sewarth Vinod Agarwal Foundation"
        width={32}
        height={32}
        className="hidden h-7 w-7 shrink-0 rounded-sm object-contain opacity-85 lg:block"
      />
    </Link>
  );
}


