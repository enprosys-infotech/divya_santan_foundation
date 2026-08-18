import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLock } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ── Nav structure ───────────────────────────────────────────────── */
type NavChild = { label: string; hindi?: string; to: string; note: string };
type NavGroup = { label: string; children: NavChild[] };
type NavItem =
  | { kind: "link"; label: string; to: string }
  | { kind: "mega"; label: string; groups: NavGroup[] };

const NAV: NavItem[] = [
  { kind: "link", label: "Home", to: "/" },

  {
    kind: "mega",
    label: "Explore",
    groups: [
      {
        label: "Learn",
        children: [
          { label: "Garbh Sanskar", hindi: "गर्भ संस्कार", to: "/learn", note: "Foundations of conscious nurturing" },
          { label: "Knowledge Centre", hindi: "ज्ञान केंद्र", to: "/knowledge", note: "Articles & month-by-month guides" },
          { label: "Free Services", hindi: "नि:शुल्क सेवाएँ", to: "/free-services", note: "Classes, videos & books — always free" },
        ],
      },
      {
        label: "Grow",
        children: [
          { label: "Courses & Training", hindi: "पाठ्यक्रम", to: "/courses", note: "Foundation course, Prerak training" },
          { label: "Join the Mission", hindi: "अभियान से जुड़ें", to: "/join", note: "Volunteer, Prerak or faculty" },
          { label: "Research & Science", hindi: "अनुसंधान", to: "/research", note: "Epigenetics, prenatal psychology" },
        ],
      },
    ],
  },

  { kind: "link", label: "About", to: "/about" },
  { kind: "link", label: "Contact", to: "/contact" },
];

/* ── Component ───────────────────────────────────────────────────── */
export function Navbar() {
  const { t } = useLanguage();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenKey(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/75 backdrop-blur-sm",
      )}
    >
      <div
        ref={navRef}
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6"
      >
        {/* Brand */}
        <BrandLock />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            if (item.kind === "link") {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[0.82rem] transition-colors duration-300",
                    active ? "text-primary" : "text-ink/75 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            // Mega dropdown
            const open = openKey === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenKey(item.label)}
                onMouseLeave={() => setOpenKey(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenKey(open ? null : item.label)}
                  className={cn(
                    "flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-[0.82rem] transition-colors duration-300",
                    open ? "text-primary" : "text-ink/75 hover:text-primary",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      open && "rotate-180",
                    )}
                  />
                </button>

                {open && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="surface-card animate-rise w-[38rem] p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {item.groups.map((group) => (
                          <div key={group.label}>
                            <p className="mb-2 px-2 text-[0.6rem] uppercase tracking-[0.22em] text-primary">
                              {group.label}
                            </p>
                            <div className="flex flex-col gap-0.5">
                              {group.children.map((c) => (
                                <Link
                                  key={c.label}
                                  to={c.to}
                                  className="group/item rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                                >
                                  <span className="block text-sm font-medium text-ink group-hover/item:text-primary">
                                    {c.label}
                                  </span>
                                  {c.hindi && (
                                    <span className="font-deva block text-[0.72rem] text-primary/70">
                                      {c.hindi}
                                    </span>
                                  )}
                                  <span className="mt-0.5 block text-[0.72rem] leading-snug text-muted-foreground">
                                    {c.note}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <Link to="/ask-shree">
              <Sparkles className="h-3.5 w-3.5" />
              {t("cta.askShree")}
            </Link>
          </Button>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/free-services">{t("cta.joinFree")}</Link>
          </Button>
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("nav.menu")}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-rise max-h-[80vh] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="border-b border-border/60 py-3 text-[0.95rem] text-ink"
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileExpanded === item.label;
              return (
                <div key={item.label} className="border-b border-border/60">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(expanded ? null : item.label)}
                    className="flex w-full items-center justify-between py-3 text-[0.95rem] text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform duration-300",
                        expanded && "rotate-180",
                      )}
                    />
                  </button>
                  {expanded && (
                    <div className="mb-3 flex flex-col gap-3 pl-3">
                      {item.groups.map((group) => (
                        <div key={group.label}>
                          <p className="mb-1 text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                            {group.label}
                          </p>
                          {group.children.map((c) => (
                            <Link
                              key={c.label}
                              to={c.to}
                              className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {c.label}
                              {c.hindi && (
                                <span className="font-deva ml-2 text-xs text-primary/60">
                                  {c.hindi}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/ask-shree"
              className="border-b border-border/60 py-3 text-[0.95rem] text-ink"
            >
              {t("nav.ask")}
            </Link>
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/free-services">{t("cta.joinFree")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{t("cta.guidance")}</Link>
            </Button>
            <LanguageSwitcher className="self-start sm:hidden" />
          </div>
        </div>
      )}
    </header>
  );
}
