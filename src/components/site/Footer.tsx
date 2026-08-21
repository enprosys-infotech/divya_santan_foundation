import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import dspImage from "@/assets/image.png";
import bsvafImage from "@/assets/image1.png";
import { CONTACT_DETAILS, FOOTER_COLUMNS } from "@/content/navigation";
import { useI18n } from "@/i18n";

const SOCIAL_LINKS = [
  { id: "facebook", icon: Facebook, href: CONTACT_DETAILS.socialLinks.facebook },
  { id: "instagram", icon: Instagram, href: CONTACT_DETAILS.socialLinks.instagram },
  { id: "youtube", icon: Youtube, href: CONTACT_DETAILS.socialLinks.youtube },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mandala-veil border-t border-indigo/20 bg-indigo">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={dspImage}
                alt={t.brand.logoAlt}
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-sm object-contain"
              />
              <img
                src={bsvafImage}
                alt={t.brand.partnerLogoAlt}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-sm object-contain"
              />
            </div>
            <h3 className="mt-6 text-xl text-indigo-foreground">{t.brand.name}</h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-indigo-foreground/80">
              {t.brand.positioning}. {t.footer.about}
            </p>
            <div className="mt-6 space-y-2 text-sm text-indigo-foreground/80">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> {CONTACT_DETAILS.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> {CONTACT_DETAILS.phone}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {t.footer.office}
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ id, icon: Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={t.common.socialMedia}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-indigo-foreground/20 text-indigo-foreground/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.id}>
                <h4 className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                  {t.footer.columnTitles[column.id]}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.to}
                        className="text-sm text-indigo-foreground/60 transition-colors duration-300 hover:text-gold"
                      >
                        {t.footer.links[link.id]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-indigo-foreground/10 pt-8 text-center">
          <p className="font-deva text-lg text-gold">{t.brand.vasudhaiva}</p>
          <p className="text-xs uppercase tracking-[0.24em] text-indigo-foreground/50">
            {t.brand.vasudhaivaSub}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-indigo-foreground/60">
            <Link to="/privacy-policy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-indigo-foreground/30">
              •
            </span>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-gold">
              Terms & Conditions
            </Link>
          </div>
          <p className="mt-2 text-xs text-indigo-foreground/50">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
