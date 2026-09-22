import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { CardLinkIndicator } from "@/components/site/Cards";
import { Button } from "@/components/ui/button";
import { CONTACT_DETAILS } from "@/content/navigation";
import { useI18n } from "@/i18n";

const CONTACT_ADDRESS = CONTACT_DETAILS.address;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`;
const APP_LINKS = [
  { label: "Android", href: CONTACT_DETAILS.app.android },
  { label: "iOS", href: CONTACT_DETAILS.app.ios },
] as const;

const CONTACT_CHANNELS = [
  {
    id: "email",
    icon: Mail,
    href: `mailto:${CONTACT_DETAILS.email}`,
    value: CONTACT_DETAILS.email,
    external: false,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    href: CONTACT_DETAILS.whatsapp,
    value: CONTACT_DETAILS.phone,
    external: true,
  },
  { id: "app", icon: Smartphone, href: "/#mobile-app-cta", value: "", external: false },
  { id: "visit", icon: MapPin, href: MAP_URL, value: CONTACT_ADDRESS, external: true },
] as const;

const ROLE_ROUTES = [
  "/join/volunteer",
  "/join/consultant",
  "/join/academic-researcher",
  "/join/institutional-collaboration",
] as const;

const ROLE_ICONS = [UsersRound, MessageCircle, Mail, MapPin] as const;

export default function ContactPage() {
  const { t } = useI18n();
  const copy = t.contact;

  useEffect(() => {
    document.title = copy.meta.title;
  }, [copy.meta.title]);

  return (
    <>

      <main className="overflow-hidden bg-background">
        <Section className="relative pb-16 pt-14 sm:pb-20 sm:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">
                {copy.intro.eyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[1.08] text-ink sm:text-6xl">
                {copy.intro.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                {copy.intro.subtitle}
              </p>
              <p className="mt-7 text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
                {copy.intro.support}
              </p>
            </div>

            <div className="bg-indigo relative overflow-hidden px-7 py-8 text-indigo-foreground sm:px-9 sm:py-10">
              <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full border border-gold/30" />
              <div className="pointer-events-none absolute -right-5 -top-9 h-24 w-24 rounded-full border border-gold/20" />
              <Clock3 className="relative h-6 w-6 text-gold" strokeWidth={1.4} />
              <p className="relative mt-7 text-[0.68rem] uppercase tracking-[0.28em] text-gold">
                {copy.availability.eyebrow}
              </p>
              <p className="relative mt-3 text-2xl leading-tight sm:text-3xl">
                {copy.availability.title}
              </p>
              <p className="relative mt-4 text-sm leading-7 text-indigo-foreground/75">
                {copy.availability.body}
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-y border-border bg-warm py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
                {copy.channels.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
                {copy.channels.title}
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
                {copy.channels.body}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {CONTACT_CHANNELS.map(({ id, icon: Icon, href, value, external }) => {
                const channel = copy.channels.items[id];
                const cardContent = (
                  <>
                    <CardLinkIndicator />

                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-secondary">
                        {channel.eyebrow}
                      </span>
                      <span className="mt-3 block text-xl text-ink">{channel.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                        {channel.body}
                      </span>
                      <span className="mt-4 block break-words text-sm font-semibold text-ink">
                        {value}
                      </span>
                      {id === "app" ? (
                        <span className="mt-3 flex flex-wrap gap-x-4 gap-y-2 break-words text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          {APP_LINKS.map((appLink) => (
                            <a
                              key={appLink.label}
                              href={appLink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              {appLink.label}
                            </a>
                          ))}
                        </span>
                      ) : (
                        <span className="mt-3 block break-words text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          {channel.action}
                        </span>
                      )}
                    </span>
                  </>
                );

                if (id === "app") {
                  return (
                    <div
                      key={id}
                      className="group relative flex min-h-52 flex-col justify-between border border-border bg-background p-6 pr-14 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-(--shadow-soft)"
                    >
                      {cardContent}
                    </div>
                  );
                }

                return (
                  <a
                    key={id}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group relative flex min-h-52 flex-col justify-between border border-border bg-background p-6 pr-14 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-(--shadow-soft) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {cardContent}
                  </a>
                );
              })}
            </div>
          </div>
        </Section>

        <Section className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">
                {copy.roles.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
                {copy.roles.title}
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                {copy.roles.body}
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-secondary">
                <UsersRound className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span>{copy.roles.note}</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {copy.roles.items.map((role, index) => {
                const Icon = ROLE_ICONS[index] ?? UsersRound;
                const route = ROLE_ROUTES[index] ?? ROLE_ROUTES[0];
                return (
                  <Link
                    key={role.title}
                    to={route}
                    className="group border-t border-border py-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                      <ArrowRight className="h-4 w-4 text-primary/60 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="mt-5 block text-xl text-ink">{role.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                      {role.body}
                    </span>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {role.action}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>

       

    
      </main>
    </>
  );
}
