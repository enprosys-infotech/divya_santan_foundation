import { useEffect, useRef, useState, type ComponentType } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Building2,
  FlaskConical,
  Globe2,
  GraduationCap,
  HandHeart,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Presentation,
  Users,
  UserRoundCheck,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FeatureCard } from "@/components/site/Cards";
import { CompletedEventCard } from "@/components/site/CompletedEventCard";
import { TestimonialCard } from "@/components/site/Cards";
import { ContactCTA, ContactPageButton } from "@/components/site/ContactCTA";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import {
  COMPLETED_EVENTS,
  JOIN_PROCESS_STEPS,
  TESTIMONIALS,
  MISSION_ROUTES,
  type MissionPageId,
} from "@/content/registry";
import type { ConsultantProfile } from "@/content/consultants";
import { CONTACT_DETAILS } from "@/content/navigation";
import { getDictionary, useI18n } from "@/i18n";
import type { Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

type JoinCopy = Dictionary["join"];
type ContentCopy = Dictionary["content"];
type PageProps = { copy: JoinCopy; content: ContentCopy };
type ConsultantTab = "directory" | "application" | "academic";
type ConsultantPageCopy = {
  title: string;
  eyebrow: string;
  intro: string;
  narrative: string;
  imageAlt: string;
  roleMeta: string;
  meaningEyebrow: string;
  meaningTitle: string;
  meaningBody: string;
  mapLabels: string[];
  contributionEyebrow: string;
  contributionTitle: string;
  contributionBody: string;
  contributionItems: Array<{ title: string; body: string }>;
  standardsEyebrow: string;
  standardsTitle: string;
  standardsBody: string;
  standardsItems: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  tabs: Record<ConsultantTab, string>;
  panels: {
    directory: {
      eyebrow: string;
      title: string;
      body: string;
      tableHeaders: {
        name: string;
        qualification: string;
        specializedCourses: string;
      };
      consultants: ConsultantProfile[];
    };
    application: {
      eyebrow: string;
      title: string;
      body: string;
      steps: string[];
      androidLabel: string;
      iosLabel: string;
    };
    academic: {
      eyebrow: string;
      title: string;
      body: string;
      programs: Array<{ title: string; body: string }>;
    };
  };
};

const CATEGORY_ICONS: Record<MissionPageId, LucideIcon> = {
  volunteer: HandHeart,
  institutionalCollaboration: Building2,
  consultant: UserRoundCheck,
  academicResearcher: FlaskConical,
};

const CATEGORY_ORDER: MissionPageId[] = [
  "volunteer",
  "institutionalCollaboration",
  "consultant",
  "academicResearcher",
];

const RESEARCH_CONTACT_METHODS = [
  { id: "email", icon: Mail, href: `mailto:${CONTACT_DETAILS.email}` },
  { id: "phone", icon: Phone, href: `tel:${CONTACT_DETAILS.phone.replaceAll(" ", "")}` },
  { id: "whatsapp", icon: MessageCircle, href: CONTACT_DETAILS.whatsapp },
] as const;

type MissionTab = "mission" | "events" | "testimonials";

const MISSION_TABS: Array<{
  id: MissionTab;
  icon: LucideIcon;
  accent: string;
  bg: string;
  text: string;
}> = [
  {
    id: "mission",
    icon: HandHeart,
    accent: "var(--color-secondary)",
    bg: "bg-secondary/10",
    text: "text-secondary",
  },
  {
    id: "events",
    icon: CalendarDays,
    accent: "var(--color-primary)",
    bg: "bg-primary/8",
    text: "text-primary",
  },
  {
    id: "testimonials",
    icon: MessageCircle,
    accent: "var(--color-gold)",
    bg: "bg-gold/10",
    text: "text-gold-foreground",
  },
];

const EVENT_FORMATS = [
  { id: "workshops", icon: Presentation },
  { id: "onlineClasses", icon: Video },
  { id: "conferences", icon: CalendarDays },
  { id: "bookLaunches", icon: CalendarDays },
  { id: "awareness", icon: Megaphone },
] as const;

function MissionLandingPage({ copy, content }: PageProps) {
  return (
    <Section>
      <SectionHeading
        eyebrow={copy.categories.eyebrow}
        title={copy.categories.title}
        subtitle={copy.categories.subtitle}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {CATEGORY_ORDER.map((id) => {
          const category = copy.categories.items[id];
          const Icon = CATEGORY_ICONS[id];
          return (
            <FeatureCard
              key={id}
              icon={Icon}
              title={category.title}
              body={category.body}
              to={MISSION_ROUTES[id]}
              className="p-7 sm:p-8"
              iconVariant={id === "academicResearcher" ? "secondary" : "primary"}
            />
          );
        })}
      </div>
    </Section>
  );
}

function VolunteerPage({ copy, content }: PageProps) {
  const page = copy.pages.volunteer;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-warm px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-18">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-rise">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
              {copy.volunteer.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-ink sm:text-6xl lg:text-[4.6rem]">
              {page.title}
            </h1>
            <div className="mt-7 h-1 w-16 bg-primary" />
            <p className="mt-7 max-w-2xl text-base-readable text-muted-foreground">{page.intro}</p>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center lg:justify-self-end">
            <div className="absolute inset-5 rounded-full border border-primary/25" />
            <div className="absolute inset-12 rounded-full border border-secondary/20" />
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-(--shadow-lift) sm:h-52 sm:w-52">
              <HandHeart className="h-20 w-20 text-primary" strokeWidth={1.2} />
            </div>
            <div className="absolute right-0 top-8 h-4 w-4 rounded-full bg-primary" />
            <div className="absolute bottom-12 left-5 h-3 w-3 rounded-full bg-secondary" />
          </div>
        </div>
      </section>

      <Section className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
              {page.preparationEyebrow}
            </p>
            <h2 className="mt-4 max-w-sm text-3xl leading-tight text-ink sm:text-4xl">
              {page.preparationTitle}
            </h2>
          </div>
          <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8">
            <BookOpenCheck className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <p className="mt-5 max-w-3xl text-base-readable leading-relaxed text-muted-foreground">
              {page.preparationBody}
            </p>
            <div className="mt-7 h-px w-full bg-border" />
            <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-secondary">
              <GraduationCap className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span>{page.preparationEyebrow}</span>
            </div>
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-primary-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionHeading
              align="left"
              eyebrow={page.contributionEyebrow}
              title={page.contributionTitle}
              subtitle={page.contributionBody}
              eyebrowVariant="secondary"
            />
            <div className="divide-y divide-secondary/15 border-y border-secondary/20">
              <article className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-[0.18em] text-primary">01</span>
                  <Megaphone className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-xl text-ink">{page.individualTitle}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{page.individualBody}</p>
                </div>
              </article>
              <article className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-[0.18em] text-primary">02</span>
                  <HandHeart className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-xl text-ink">{page.associationTitle}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{page.associationBody}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-5 py-16 text-secondary sm:px-8 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">{page.contactEyebrow}</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">{page.contactTitle}</h2>
          </div>
          <div className="lg:border-l lg:border-secondary/20 lg:pl-10">
            <p className="max-w-2xl text-base leading-relaxed text-secondary/75">
              {page.contactBody}
            </p>
            <ContactPageButton label={page.contactAction} />
          </div>
        </div>
      </section>
    </>
  );
}
function InstitutionalPage({ copy }: PageProps) {
  const page = copy.pages.institutionalCollaboration;

  return (
    <>
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="animate-rise">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">{page.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[4.2rem]">
              {page.narrative}
            </h1>
            <div className="mt-6 h-1 w-16 bg-primary" />
            <p className="mt-6 max-w-2xl text-base-readable text-muted-foreground">{page.intro}</p>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center lg:justify-self-end">
            <div className="absolute inset-5 rounded-full border border-primary/25" />
            <div className="absolute inset-12 rounded-full border border-secondary/20" />
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-(--shadow-lift) sm:h-52 sm:w-52">
              <Building2 className="h-20 w-20 text-primary" strokeWidth={1.2} />
            </div>
            <div className="absolute right-0 top-8 h-4 w-4 rounded-full bg-primary" />
            <div className="absolute bottom-12 left-5 h-3 w-3 rounded-full bg-secondary" />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow={page.meaningEyebrow}
            title={page.meaningTitle}
            subtitle={page.meaningBody}
          />
          <div className="border-l-2 border-primary/30 pl-6 sm:pl-8">
            <Building2 className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <p className="mt-5 max-w-2xl text-base-readable leading-relaxed text-muted-foreground">
              {page.networkBody}
            </p>
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-primary-soft px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow={page.networkEyebrow}
            title={page.networkTitle}
            subtitle={page.contributionBody}
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {page.networkNodes.map((node, index) => (
              <article key={node.title} className="border-t border-secondary/20 bg-background/60 p-5">
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-base text-ink">{node.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/25 bg-background px-5 py-16 text-secondary sm:px-8 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">{page.ctaEyebrow}</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">{page.ctaTitle}</h2>
          </div>
          <div className="lg:border-l lg:border-secondary/20 lg:pl-10">
            <p className="max-w-2xl text-base leading-relaxed text-secondary/75">{page.ctaBody}</p>
            <ContactPageButton label={page.ctaPrimary} />
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultantPage({ copy }: PageProps) {
  const page = copy.pages.consultant as ConsultantPageCopy;
  const [activeTab, setActiveTab] = useState<ConsultantTab>("directory");
  const tabs: Array<{ id: ConsultantTab; icon: LucideIcon }> = [
    { id: "directory", icon: Users },
    { id: "application", icon: UserRoundCheck },
    { id: "academic", icon: GraduationCap },
  ];
  const directoryPanel = page.panels.directory;
  const applicationPanel = page.panels.application;
  const academicPanel = page.panels.academic;

  return (
    <>
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="animate-rise">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-[1.06] text-ink sm:text-4xl lg:text-[3.25rem]">
              {page.narrative}
            </h1>
            <div className="mt-5 h-1 w-14 bg-primary" />
            <p className="mt-5 max-w-xl text-base-readable text-muted-foreground">{page.intro}</p>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center lg:justify-self-end">
            <div className="absolute inset-5 rounded-full border border-primary/25" />
            <div className="absolute inset-12 rounded-full border border-secondary/20" />
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-(--shadow-lift) sm:h-44 sm:w-44">
              <UserRoundCheck className="h-16 w-16 text-primary" strokeWidth={1.2} />
            </div>
            <div className="absolute right-0 top-8 h-4 w-4 rounded-full bg-primary" />
            <div className="absolute bottom-12 left-5 h-3 w-3 rounded-full bg-secondary" />
          </div>
        </div>
      </section>

      <Section>
        <div className="sticky top-14.5 z-30 -mx-5 border-y border-border bg-background/90 px-5 py-2 backdrop-blur-md sm:top-17 sm:-mx-8 sm:px-8 lg:top-18.5">
          <div role="tablist" aria-label={page.title} className="mx-auto flex max-w-4xl gap-1 overflow-x-auto">
            {tabs.map(({ id, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(id)}
                  className={cn(
                    "flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive ? "bg-primary/8 text-primary shadow-sm" : "text-muted-foreground hover:text-ink",
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                  {page.tabs[id]}
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === "directory" && (
          <div className="mt-10">
            <SectionHeading
              eyebrow={directoryPanel.eyebrow}
              title={directoryPanel.title}
              subtitle={directoryPanel.body}
            />
            <div className="mx-auto mt-10 overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-(--shadow-soft)">
              <div className="overflow-x-auto">
                <table className="min-w-[58rem] w-full border-collapse text-left">
                  <caption className="sr-only">{directoryPanel.title}</caption>
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      <th className="w-[24%] border-r border-secondary-foreground/20 px-5 py-4 text-sm font-semibold">
                        {directoryPanel.tableHeaders.name}
                      </th>
                      <th className="w-[26%] border-r border-secondary-foreground/20 px-5 py-4 text-sm font-semibold">
                        {directoryPanel.tableHeaders.qualification}
                      </th>
                      <th className="w-[50%] px-5 py-4 text-sm font-semibold">
                        {directoryPanel.tableHeaders.specializedCourses}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {directoryPanel.consultants.map((consultant) => (
                      <tr key={consultant.name} className="align-top transition-colors hover:bg-warm/60">
                        <th scope="row" className="border-r border-border px-5 py-5 text-sm font-semibold leading-relaxed text-ink">
                          {consultant.name}
                        </th>
                        <td className="border-r border-border px-5 py-5 text-sm leading-relaxed text-muted-foreground">
                          {consultant.qualification}
                        </td>
                        <td className="px-5 py-5 text-sm leading-relaxed text-muted-foreground">
                          {consultant.specializedCourses}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "application" && (
          <div className="mt-10">
            <SectionHeading
              eyebrow={applicationPanel.eyebrow}
              title={applicationPanel.title}
              subtitle={applicationPanel.body}
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              {applicationPanel.steps.map((step, index) => (
                <div key={step} className="surface-card p-6">
                  <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary">0{index + 1}</span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={CONTACT_DETAILS.app.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/35 px-5 text-sm text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                {applicationPanel.androidLabel}
              </a>
              <ContactPageButton label={page.ctaPrimary} />
            </div>
          </div>
        )}

        {activeTab === "academic" && (
          <div className="mt-10">
            <SectionHeading
              eyebrow={academicPanel.eyebrow}
              title={academicPanel.title}
              subtitle={academicPanel.body}
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              {academicPanel.programs.map((program) => (
                <article key={program.title} className="surface-card p-6">
                  <GraduationCap className="h-5 w-5 text-secondary" strokeWidth={1.6} />
                  <h3 className="mt-5 text-base text-ink">{program.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.body}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </Section>

      <section className="border-y border-primary/25 bg-background px-5 py-16 text-secondary sm:px-8 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">{page.ctaEyebrow}</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">{page.ctaTitle}</h2>
          </div>
          <div className="lg:border-l lg:border-secondary/20 lg:pl-10">
            <p className="max-w-2xl text-base leading-relaxed text-secondary/75">{page.ctaBody}</p>
            <ContactPageButton label={page.ctaPrimary} />
          </div>
        </div>
      </section>
    </>
  );
}

function AcademicResearcherPage({ copy }: PageProps) {
  const page = copy.pages.academicResearcher;

  return (
    <>
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="animate-rise">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-[1.06] text-ink sm:text-4xl lg:text-[3.25rem]">
              {page.contentTitle}
            </h1>
            <div className="mt-5 h-1 w-14 bg-primary" />
            <p className="mt-5 max-w-xl text-base-readable text-muted-foreground">{page.intro}</p>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center lg:justify-self-end">
            <div className="absolute inset-5 rounded-full border border-primary/25" />
            <div className="absolute inset-12 rounded-full border border-secondary/20" />
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-(--shadow-lift) sm:h-44 sm:w-44">
              <FlaskConical className="h-16 w-16 text-primary" strokeWidth={1.2} />
            </div>
            <div className="absolute right-0 top-8 h-4 w-4 rounded-full bg-primary" />
            <div className="absolute bottom-12 left-5 h-3 w-3 rounded-full bg-secondary" />
          </div>
        </div>
      </section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <article>
            <SectionHeading
              align="left"
              eyebrow={page.contentEyebrow}
              title={page.contentTitle}
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="surface-card h-fit border-t-4 border-t-primary p-7 sm:p-8">
            <FlaskConical className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <p className="mt-7 text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
              {page.focusEyebrow}
            </p>
            <h2 className="mt-3 text-2xl text-ink">{page.focusTitle}</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {page.focusAreas.map((area) => (
                <li key={area.title} className="py-4">
                  <h3 className="text-base text-ink">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mandala-veil mt-16 rounded-3xl border border-secondary/20 bg-secondary px-7 py-9 text-secondary-foreground shadow-(--shadow-soft) sm:px-10 sm:py-11">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">{page.invitationEyebrow}</p>
          <p className="mt-4 max-w-4xl text-xl leading-relaxed text-secondary-foreground sm:text-2xl">
            {page.invitation}
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">{page.contactEyebrow}</p>
            <h2 className="mt-3 text-3xl text-ink">{page.contactTitle}</h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{page.contactBody}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {RESEARCH_CONTACT_METHODS.map(({ id, icon: Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target={id === "whatsapp" ? "_blank" : undefined}
                  rel={id === "whatsapp" ? "noreferrer" : undefined}
                  className="interactive-surface flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm text-ink"
                >
                  <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                  <span>{page.contactLabels[id]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function EventsTab({ copy }: { copy: JoinCopy }) {
  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <SectionHeading
          eyebrow={copy.events.completed.eyebrow}
          title={copy.events.completed.title}
          subtitle={copy.events.completed.subtitle}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPLETED_EVENTS.map((event) => {
            const eventCopy = copy.events.completed.items[event.id];
            return (
              <CompletedEventCard
                key={event.id}
                photos={event.photos}
                {...eventCopy}
                previousLabel={copy.events.completed.previous}
                nextLabel={copy.events.completed.next}
                goToLabel={copy.events.completed.goTo}
                viewDetailsLabel={copy.events.completed.viewDetails}
                closeLabel={copy.events.completed.close}
              />
            );
          })}
        </div>
      </Section>

      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.events.eyebrow}
          title={copy.events.title}
          subtitle={copy.events.subtitle}
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card border-l-4 border-l-primary p-7 sm:p-9">
            <CalendarDays className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <p className="mt-8 text-[0.68rem] uppercase tracking-[0.24em] text-primary">
              {copy.events.comingSoonLabel}
            </p>
            <h3 className="mt-3 text-2xl text-ink">{copy.events.comingSoonTitle}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {copy.events.comingSoonBody}
            </p>
          </div>
          <div>
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-secondary">
              {copy.events.formatsLabel}
            </p>
            <div className="divide-y divide-border border-y border-border">
              {EVENT_FORMATS.map(({ id, icon: Icon }) => (
                <div key={id} className="flex gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{copy.events.catalogue[id].title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {copy.events.catalogue[id].body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-gold/40 bg-card p-5">
              <p className="text-sm text-secondary">{copy.events.archiveTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {copy.events.archiveBody}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary">
                {copy.events.archiveLinks.map((link) => (
                  <span key={link}>{link}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function TestimonialsTab({ copy, content }: PageProps) {
  return (
    <Section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
      <SectionHeading
        eyebrow={copy.testimonialSection.eyebrow}
        title={copy.testimonialSection.title}
        subtitle={copy.testimonialSection.subtitle}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...content.testimonials[testimonial.id]} />
        ))}
      </div>
    </Section>
  );
}

function JoinMissionHub({ copy, content }: PageProps) {
  const [activeTab, setActiveTab] = useState<MissionTab>("mission");
  const contentRef = useRef<HTMLDivElement>(null);
  const activeTabConfig = MISSION_TABS.find((tab) => tab.id === activeTab) ?? MISSION_TABS[0]!;
  const tabLabels: Record<MissionTab, string> = {
    mission: copy.navigation.joinMission,
    events: copy.navigation.events,
    testimonials: copy.navigation.testimonials,
  };

  const handleTabChange = (tab: MissionTab) => {
    setActiveTab(tab);
    if (contentRef.current) {
      const yOffset = -160;
      const y = contentRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHeader {...copy.header} />

      <div className="sticky top-[58px] z-40 w-full border-b border-border bg-background/85 backdrop-blur-md sm:top-[68px] lg:top-[74px]">
        <div className="mx-auto max-w-6xl px-4">
          <div role="tablist" aria-label={copy.header.title} className="flex gap-1 overflow-x-auto py-2 lg:py-3">
            {MISSION_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                    isActive ? `${tab.bg} ${tab.text} shadow-sm` : "text-muted-foreground hover:text-ink",
                  )}
                  style={isActive ? { borderBottom: `2px solid ${tab.accent}` } : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <span className="whitespace-nowrap">{tabLabels[tab.id]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="relative bg-background">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 lg:block"
          style={{ backgroundColor: activeTabConfig.accent, opacity: 0.35 }}
        />
        {activeTab === "mission" && <MissionLandingPage copy={copy} content={content} />}
        {activeTab === "events" && <EventsTab copy={copy} />}
        {activeTab === "testimonials" && <TestimonialsTab copy={copy} content={content} />}
      </div>

      <ContactCTA copy={copy.contactCta} />
    </>
  );
}

const PAGE_RENDERERS: Record<MissionPageId, ComponentType<PageProps>> = {
  volunteer: VolunteerPage,
  institutionalCollaboration: InstitutionalPage,
  consultant: ConsultantPage,
  academicResearcher: AcademicResearcherPage,
};

export default function JoinMissionPage({ pageId }: { pageId?: MissionPageId }) {
  const { t } = useI18n();
  const copy = t.join;

  useEffect(() => {
    const title = pageId ? copy.pages[pageId].title : copy.meta.title;
    document.title = `${title} — ${getDictionary().brand.prakalp}`;
  }, [copy, pageId]);

  if (!pageId) {
    return <JoinMissionHub copy={copy} content={t.content} />;
  }

  const Page = PAGE_RENDERERS[pageId];
  return <Page copy={copy} content={t.content} />;
}
