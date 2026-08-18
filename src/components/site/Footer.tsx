import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import dspImage from "@/assets/image.png";
import bsvafImage from "@/assets/image1.png";
import { useLanguage } from "@/lib/i18n";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Learn",
    links: [
      { label: "Learn Garbh Sanskar", to: "/learn" },
      { label: "Learning Journeys", to: "/learn" },
      { label: "Ask Shree AI", to: "/ask-shree" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { label: "Knowledge Centre", to: "/knowledge" },
      { label: "Month-by-Month", to: "/knowledge" },
      { label: "Garbh Samvad", to: "/knowledge" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "Foundation Course", to: "/courses" },
      { label: "Prerak Training", to: "/courses" },
      { label: "Certification", to: "/courses" },
    ],
  },
  {
    title: "Free Services",
    links: [
      { label: "Free Classes", to: "/free-services" },
      { label: "Educational Videos", to: "/free-services" },
      { label: "Books & Publications", to: "/free-services" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Research & Science", to: "/research" },
      { label: "Research Topics", to: "/research" },
      { label: "Collaboration", to: "/contact" },
    ],
  },
  {
    title: "Join Mission",
    links: [
      { label: "Become a Prerak", to: "/join" },
      { label: "Volunteer", to: "/join" },
      { label: "Institutional & CSR", to: "/join" },
    ],
  },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mandala-veil border-t border-border bg-warm">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={dspImage}
                alt="Divya Santan Prakalp, Indore"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-sm object-contain"
              />
              <img
                src={bsvafImage}
                alt="Balaji Sewarth Vinod Agarwal Foundation, Indore"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-sm object-contain"
              />
            </div>
            <h3 className="mt-6 text-xl text-ink">{t("brand.name")}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("brand.positioning")}. We educate, train, create awareness and support research so
              that every family can nurture healthy, cultured and compassionate generations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> contact@divyasantan.org
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +91 00000 00000
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Divya Santan Prakalp,
                Indore, Madhya Pradesh, India
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[0.7rem] uppercase tracking-[0.22em] text-primary">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-border pt-8 text-center">
          <p className="font-deva text-lg text-primary">{t("brand.vasudhaiva")}</p>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {t("brand.vasudhaiva.sub")}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Divya Santan Foundation · Supported by Balaji Sewarth Vinod
            Agarwal Foundation · Demo website
          </p>
        </div>
      </div>
    </footer>
  );
}
