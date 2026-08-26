import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLock } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NAV_ITEMS } from "@/content/navigation";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { useChatWidget } from "@/hooks/useChatWidget";

export function Navbar() {
  const { t } = useI18n();
  const { open: openChat } = useChatWidget();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenKey(null);
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
        <BrandLock />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label={t.common.primaryNavigation}
        >
          {NAV_ITEMS.map((item) => {
            if (item.kind === "link") {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[0.82rem] transition-colors duration-300",
                    active ? "text-secondary" : "text-ink/75 hover:text-secondary",
                  )}
                >
                  {t.nav.links[item.id]}
                </Link>
              );
            }

            const open = openKey === item.id;
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setOpenKey(item.id)}
                onMouseLeave={() => setOpenKey(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenKey(open ? null : item.id)}
                  className={cn(
                    "flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-[0.82rem] transition-colors duration-300",
                    open ? "text-secondary" : "text-ink/75 hover:text-secondary",
                  )}
                >
                  {t.nav.mega[item.id]}
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
                          <div key={group.id}>
                            <p className="mb-2 px-2 text-[0.6rem] uppercase tracking-[0.22em] text-secondary/70">
                              {t.nav.groups[group.id]}
                            </p>
                            <div className="flex flex-col gap-0.5">
                              {group.children.map((child) => {
                                const copy = t.nav.children[child.id];
                                return (
                                  <Link
                                    key={child.id}
                                    to={child.to}
                                    className="group/item rounded-xl px-3 py-2.5 transition-colors hover:bg-accent"
                                  >
                                    <span className="block text-sm font-medium text-ink group-hover/item:text-secondary">
                                      {copy.label}
                                    </span>
                                    {copy.native && (
                                      <span className="font-deva block text-[0.72rem] text-secondary/70">
                                        {copy.native}
                                      </span>
                                    )}
                                    <span className="mt-0.5 block text-[0.72rem] leading-snug text-muted-foreground">
                                      {copy.note}
                                    </span>
                                  </Link>
                                );
                              })}
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

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex cursor-pointer"
            onClick={openChat}
            aria-label="Open Ask Shree AI chat"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.cta.askShree}
          </Button>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/free-services">{t.cta.joinFree}</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="animate-rise max-h-[80vh] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label={t.common.mobileNavigation}>
            {NAV_ITEMS.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    className="border-b border-border/60 py-3 text-[0.95rem] text-ink"
                  >
                    {t.nav.links[item.id]}
                  </Link>
                );
              }

              const expanded = mobileExpanded === item.id;
              return (
                <div key={item.id} className="border-b border-border/60">
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(expanded ? null : item.id)}
                    className="flex w-full items-center justify-between py-3 text-[0.95rem] text-ink"
                  >
                    {t.nav.mega[item.id]}
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
                        <div key={group.id}>
                          <p className="mb-1 text-[0.6rem] uppercase tracking-[0.2em] text-secondary/70">
                            {t.nav.groups[group.id]}
                          </p>
                          {group.children.map((child) => (
                            <Link
                              key={child.id}
                              to={child.to}
                              className="block py-1.5 text-sm text-muted-foreground hover:text-secondary"
                            >
                              {t.nav.children[child.id].label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => { setMobileOpen(false); openChat(); }}
              className="cursor-pointer border-b border-border/60 py-3 text-left text-[0.95rem] text-ink flex items-center gap-2 w-full"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              {t.cta.askShree}
            </button>
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/free-services">{t.cta.joinFree}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{t.cta.guidance}</Link>
            </Button>
            <LanguageSwitcher className="self-start sm:hidden" />
          </div>
        </div>
      )}
    </header>
  );
}
