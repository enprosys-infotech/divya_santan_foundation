import { useEffect, type ReactElement } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Building2,
  CalendarDays,
  CircleHelp,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CardLinkIndicator } from "@/components/site/Cards";
import { Button } from "@/components/ui/button";
import { useExternalAskShree } from "@/hooks/useExternalAskShree";
import { useI18n } from "@/i18n";
import type { Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";
import { ContactCTA } from "@/components/site/ContactCTA";

type ServiceTabId = "guidance" | "learning" | "local" | "askShree" | "upcoming";
type ServicesCopy = Dictionary["servicesPage"];

const SERVICE_TABS: Array<{
  id: ServiceTabId;
  icon: LucideIcon;
}> = [
  { id: "guidance", icon: Baby },
  { id: "learning", icon: BookOpen },
  { id: "local", icon: MapPin },
  { id: "askShree", icon: MessageCircle },
  { id: "upcoming", icon: CalendarDays },
];

function isServiceTab(value: string | null): value is ServiceTabId {
  return SERVICE_TABS.some((tab) => tab.id === value);
}

function ServiceTabRail({
  activeTab,
  onSelect,
  copy,
}: {
  activeTab: ServiceTabId;
  onSelect: (tab: ServiceTabId) => void;
  copy: ServicesCopy;
}) {
  return (
    <nav
      aria-label="Services available"
      className="border-y border-border bg-background/90 py-3 backdrop-blur-sm"
    >
      <div
        className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 sm:px-8"
        role="tablist"
        aria-label="Service categories"
      >
        {SERVICE_TABS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            id={`service-tab-${id}`}
            aria-selected={activeTab === id}
            aria-controls="services-panel"
            role="tab"
            className={cn(
              "group flex min-h-12 shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-left text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              activeTab === id
                ? "border-primary/40 bg-primary/10 text-ink shadow-sm"
                : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-ink",
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-300",
                activeTab === id ? "text-primary" : "text-secondary/70 group-hover:text-primary",
              )}
              strokeWidth={1.6}
            />
            <span className="hidden sm:inline">{copy.tabs[id].label}</span>
            <span className="sm:hidden">{copy.tabs[id].shortLabel}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function ServiceBlock({
  icon: Icon,
  eyebrow,
  title,
  children,
  action,
  actionTo,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  children: string;
  action: string;
  actionTo: string;
}) {
  return (
    <article className="group border-t border-border pt-6 transition-colors duration-300 hover:border-primary/50">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/8 text-primary">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <span className="pt-1 text-[0.65rem] uppercase tracking-[0.22em] text-secondary">
          {eyebrow}
        </span>
      </div>
      <h3 className="mt-6 text-2xl leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{children}</p>
      <Link
        to={actionTo}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        {action}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

function GuidancePanel({ copy }: { copy: ServicesCopy }) {
  const guidance = copy.guidance;

  return (
    <div className="animate-rise">
      <Section className="pb-14 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="mandala-veil border border-primary/20 bg-warm p-8 sm:p-12">
            <div className="flex items-center gap-3 text-primary">
              <Baby className="h-6 w-6" strokeWidth={1.5} />
              <p className="text-[0.68rem] uppercase tracking-[0.3em]">{guidance.eyebrow}</p>
            </div>
            <h2 className="mt-7 max-w-xl text-4xl leading-tight text-ink sm:text-5xl">
              {guidance.title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
              {guidance.intro}
            </p>
            <p className="mt-8 border-t border-primary/20 pt-7 text-lg leading-8 text-ink">
              {guidance.freeOfCost}
            </p>
          </div>

          <div className="border-l border-border pl-6 sm:pl-10">
            <p className="text-base leading-8 text-muted-foreground">{guidance.sessions}</p>
            <p className="mt-8 text-base leading-8 text-muted-foreground">
              {guidance.registration}
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contact">
                {guidance.registrationAction} <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

const LEARNING_PATHWAY_ROUTES = [
  "/journeys/pregnant-woman",
  "/courses",
  "/join/volunteer",
] as const;

function LearningPanel({ copy }: { copy: ServicesCopy }) {
  const learning = copy.learning;

  return (
    <div className="animate-rise">
      <Section className="pb-14 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow={learning.eyebrow}
            title={learning.title}
            subtitle={learning.subtitle}
          />
          <div className="border-l border-border pl-6 sm:pl-10">
            <p className="text-sm uppercase tracking-[0.22em] text-secondary">{learning.courseEyebrow}</p>
            <p className="mt-4 text-lg leading-8 text-ink">
              {learning.courseIntro}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              {learning.courseDescription}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {learning.audiences.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/courses">
                {learning.courseCta} <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-0 border-y border-border md:grid-cols-3">
          {learning.pathways.map((pathway, index) => (
            <Link
              key={pathway.title}
              to={LEARNING_PATHWAY_ROUTES[index] ?? LEARNING_PATHWAY_ROUTES[0]}
              className={cn(
                "group relative border-b border-border px-1 py-8 pr-12 transition-colors hover:bg-primary/5 md:border-b-0 md:px-8 md:pr-12",
                index < 2 ? "md:border-r" : undefined,
              )}
            >
              <CardLinkIndicator />
              <span className="text-xs uppercase tracking-[0.22em] text-primary">
                {pathway.eyebrow}
              </span>
              <h3 className="mt-4 text-2xl text-ink">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{pathway.body}</p>
              <ArrowRight className="mt-6 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

function LocalPanel({ copy }: { copy: ServicesCopy }) {
  const local = copy.local;

  return (
    <div className="animate-rise">
      <Section className="pb-14 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <SectionHeading
            align="left"
            eyebrow={local.eyebrow}
            title={local.title}
            subtitle={local.subtitle}
          />
          <div className="mandala-veil border border-primary/20 bg-warm p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background text-primary">
                <MapPin className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <p className="text-xs uppercase tracking-[0.22em] text-secondary">
                {local.locationEyebrow}
              </p>
            </div>
            <h3 className="mt-5 text-2xl text-ink">{local.locationTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{local.locationBody}</p>
            <Button asChild variant="outline" className="mt-6 w-full">
              <Link to="/contact">{local.locationAction}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-12">
          <ServiceBlock
            icon={Building2}
            eyebrow={local.blocks.opd.eyebrow}
            title={local.blocks.opd.title}
            action={local.blocks.opd.action}
            actionTo="/contact"
          >
            {local.blocks.opd.body}
          </ServiceBlock>
          <ServiceBlock
            icon={Megaphone}
            eyebrow={local.blocks.awareness.eyebrow}
            title={local.blocks.awareness.title}
            action={local.blocks.awareness.action}
            actionTo="/contact"
          >
            {local.blocks.awareness.body}
          </ServiceBlock>
          <ServiceBlock
            icon={HeartHandshake}
            eyebrow={local.blocks.centre.eyebrow}
            title={local.blocks.centre.title}
            action={local.blocks.centre.action}
            actionTo="/join/institutional-collaboration"
          >
            {local.blocks.centre.body}
          </ServiceBlock>
        </div>
      </Section>
    </div>
  );
}

function AskShreePanel({ copy }: { copy: ServicesCopy }) {
  const { open: openExternalAskShree } = useExternalAskShree();
  const askShree = copy.askShree;

  return (
    <div className="animate-rise">
      <Section className="pb-14 sm:pb-16">
        <div className="mx-auto max-w-4xl border border-secondary/25 bg-secondary px-6 py-10 text-secondary-foreground shadow-(--shadow-lift) sm:px-12 sm:py-14">
          <div className="flex items-center gap-3 text-gold">
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
            <p className="text-[0.68rem] uppercase tracking-[0.3em]">{askShree.eyebrow}</p>
          </div>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-5xl">
            {askShree.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-secondary-foreground/75">
            {askShree.intro}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-secondary-foreground/75">
            {askShree.basis}
          </p>
          <ul className="mt-7 grid gap-2 text-sm leading-6 text-secondary-foreground/80 sm:grid-cols-2">
            {askShree.topics.map((topic) => (
              <li key={topic} className="border-l border-gold/70 pl-3">
                {topic}
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-2xl text-base leading-8 text-secondary-foreground/75">
            {askShree.service}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              onClick={openExternalAskShree}
              variant="gold"
              size="lg"
              className="sm:min-w-52"
            >
              {askShree.action} <ArrowRight />
            </Button>
          </div>
          <p className="mt-9 border-t border-secondary-foreground/20 pt-5 text-xs leading-6 text-secondary-foreground/70">
            {askShree.disclaimer}
          </p>
        </div>
      </Section>
    </div>
  );
}

function UpcomingPanel({ copy }: { copy: ServicesCopy }) {
  const upcoming = copy.upcoming;

  return (
    <div className="animate-rise">
      <Section className="pb-14 sm:pb-16">
        <div className="mx-auto max-w-3xl border-y border-border py-16 text-center sm:py-24">
          <CalendarDays className="mx-auto h-8 w-8 text-primary" strokeWidth={1.4} />
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
            {upcoming.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl text-ink sm:text-4xl">{upcoming.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            {upcoming.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-primary/80">
            {upcoming.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

const SERVICE_PANELS: Record<
  ServiceTabId,
  (props: { copy: ServicesCopy }) => ReactElement
> = {
  guidance: GuidancePanel,
  learning: LearningPanel,
  local: LocalPanel,
  askShree: AskShreePanel,
  upcoming: UpcomingPanel,
};

const START_PATHWAY_ROUTES = [
  "/journeys/pregnant-woman",
  "/knowledge",
  "/services?tab=local",
] as const;
const START_PATHWAY_ICONS = [Baby, BookOpen, MapPin] as const;

function StartWhereYouAre({ copy }: { copy: ServicesCopy }) {
  const { open: openExternalAskShree } = useExternalAskShree();
  const start = copy.start;
  const pathways = start.pathways.slice(0, 3);
  const questionPathway = start.pathways[3]!;

  return (
    <Section className="border-t border-border bg-warm py-16 sm:py-20">
      <SectionHeading
        eyebrow={start.eyebrow}
        title={start.title}
        subtitle={start.subtitle}
      />
      <div className="mt-10 grid gap-3 md:grid-cols-4">
        {pathways.map(({ label, description }, index) => {
          const Icon = START_PATHWAY_ICONS[index] ?? Baby;
          const pathwayRoute = START_PATHWAY_ROUTES[index] ?? START_PATHWAY_ROUTES[0];
          return (
          <Link
            key={label}
            to={pathwayRoute}
            className="group flex min-h-36 flex-col justify-between border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-(--shadow-soft) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span>
              <span className="block text-base font-semibold text-ink">{label}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{description}</span>
            </span>
          </Link>
          );
        })}
        <button
          type="button"
          onClick={openExternalAskShree}
          className="group flex min-h-36 flex-col justify-between border border-border bg-background p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-(--shadow-soft) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <CircleHelp className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <span>
            <span className="block text-base font-semibold text-ink">{questionPathway.label}</span>
            <span className="mt-1 block text-xs text-muted-foreground">{questionPathway.description}</span>
          </span>
        </button>
      </div>
    </Section>
  );
}

export default function ServicesPage() {
  const { t } = useI18n();
  const copy = t.servicesPage;
  const [searchParams, setSearchParams] = useSearchParams();
  const queryTab = searchParams.get("tab");
  const activeTab = isServiceTab(queryTab) ? queryTab : "guidance";
  const ActivePanel = SERVICE_PANELS[activeTab];

  useEffect(() => {
    document.title = copy.meta.title;
  }, [copy.meta.title]);

  const selectTab = (tab: ServiceTabId) => {
    setSearchParams({ tab }, { replace: true });
  };

  return (
    <>
      <PageHeader
        {...copy.header}
      />
      <ServiceTabRail activeTab={activeTab} onSelect={selectTab} copy={copy} />
      <div
        id="services-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${activeTab}`}
        aria-label="Selected service"
      >
        <ActivePanel copy={copy} />
      </div>
      {activeTab !== "guidance" && <ContactCTA copy={t.join.contactCta} />}
    </>
  );
}
