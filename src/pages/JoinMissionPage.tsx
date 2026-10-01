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
import { SmartImage } from "@/components/site/SmartImage";
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
  const [hoveredVolunteer, setHoveredVolunteer] = useState<number | null>(null);

  // Volunteer photos configuration with positions and sizes
  const volunteers = [
    { 
      img: '/volunteer/WhatsApp Image 2026-09-23 at 2.07.23 PM.jpeg',
      name: 'Volunteer',
      size: 'large',
      position: { top: '5%', left: '8%' }
    },
    { 
      img: '/volunteer/WhatsApp Image 2026-09-23 at 2.07.42 PM.jpeg',
      name: 'Volunteer',
      size: 'medium',
      position: { top: '12%', right: '12%' }
    },
    { 
      img: '/volunteer/WhatsApp Image 2026-09-23 at 2.07.43 PM.jpeg',
      name: 'Volunteer',
      size: 'small',
      position: { top: '45%', left: '5%' }
    },
    { 
      img: '/volunteer/WhatsApp Image 2026-09-23 at 2.07.44 PM.jpeg',
      name: 'Volunteer',
      size: 'medium',
      position: { bottom: '8%', left: '15%' }
    },
    { 
      img: '/volunteer/WhatsApp Image 2026-09-23 at 2.07.45 PM.jpeg',
      name: 'Volunteer',
      size: 'large',
      position: { bottom: '15%', right: '8%' }
    },
  ];

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

          {/* Desktop: Orbital Photo Gallery */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex lg:justify-self-end">
            {/* Background mandala with slow rotation */}
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite] opacity-5">
              <svg viewBox="0 0 200 200" className="h-full w-full text-secondary">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {[...Array(8)].map((_, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={100 + Math.cos((i * Math.PI) / 4) * 90}
                    y2={100 + Math.sin((i * Math.PI) / 4) * 90}
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

            {/* Orbital rings */}
            <div className="absolute inset-5 rounded-full border border-primary/25" />
            <div className="absolute inset-12 rounded-full border border-secondary/20" />

            {/* Center heart icon - smaller, subtle */}
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/20 text-secondary backdrop-blur-sm">
              <HandHeart className="h-10 w-10 text-primary" strokeWidth={1.2} />
            </div>

            {/* Floating volunteer photos in orbital positions */}
            {volunteers.map((volunteer, index) => {
              const sizeClasses = {
                small: 'h-16 w-16 sm:h-20 sm:w-20',
                medium: 'h-20 w-20 sm:h-24 sm:w-24',
                large: 'h-24 w-24 sm:h-28 sm:w-28'
              };
              const isHovered = hoveredVolunteer === index;
              
              return (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    ...volunteer.position,
                    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    zIndex: isHovered ? 20 : 10,
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`
                  }}
                  onMouseEnter={() => setHoveredVolunteer(index)}
                  onMouseLeave={() => setHoveredVolunteer(null)}
                >
                  <div
                    className={cn(
                      sizeClasses[volunteer.size as keyof typeof sizeClasses],
                      'overflow-hidden rounded-full border-2 border-primary/40 bg-warm shadow-lg transition-all duration-300',
                      isHovered && 'border-primary shadow-2xl'
                    )}
                  >
                    <SmartImage
                      src={volunteer.img}
                      alt={volunteer.name}
                      className={cn(
                        'h-full w-full object-cover transition-all duration-300',
                        !isHovered && 'grayscale-[30%] sepia-[20%]'
                      )}
                    />
                  </div>
                  {isHovered && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground shadow-lg">
                      {volunteer.name}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Accent dots */}
            <div className="absolute right-0 top-8 h-4 w-4 animate-pulse rounded-full bg-primary" />
            <div className="absolute bottom-12 left-5 h-3 w-3 animate-pulse rounded-full bg-secondary" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Mobile: Masonry Grid */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {volunteers.map((volunteer, index) => (
              <div
                key={index}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-warm shadow-md transition-all duration-300 hover:border-primary hover:shadow-xl',
                  index === 0 && 'col-span-2 aspect-[16/10]',
                  index === 4 && 'col-span-2 aspect-[16/10]',
                  (index === 1 || index === 2 || index === 3) && 'aspect-square'
                )}
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <SmartImage
                  src={volunteer.img}
                  alt={volunteer.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0 grayscale-[30%] sepia-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-secondary-foreground">{volunteer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom animations */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-8px) translateX(4px);
            }
            50% {
              transform: translateY(-4px) translateX(-4px);
            }
            75% {
              transform: translateY(-12px) translateX(2px);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
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
  const [activeImage, setActiveImage] = useState<number>(0);

  const collaborations = [
    { 
      img: '/Institutional Collab/WhatsApp Image 2026-09-23 at 2.28.50 PM.jpeg',
      title: 'Collaborative Excellence',
      subtitle: 'Building Bridges'
    },
    { 
      img: '/Institutional Collab/WhatsApp Image 2026-09-23 at 2.28.52 PM.jpeg',
      title: 'Institutional Partnership',
      subtitle: 'Shared Vision'
    },
  ];

  return (
    <>
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-rise">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">{page.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[4.2rem]">
              {page.narrative}
            </h1>
            <div className="mt-6 h-1 w-16 bg-primary" />
            <p className="mt-6 max-w-2xl text-base-readable text-muted-foreground">{page.intro}</p>
          </div>

          {/* Desktop: Split Narrative - Layered Cards */}
          <div className="relative mx-auto hidden aspect-[4/3] w-full max-w-lg lg:flex lg:justify-self-end">
            {/* Background geometric elements */}
            <div className="absolute -left-6 -top-6 h-24 w-24 border-2 border-primary/20" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 border-2 border-secondary/20" />
            
            {/* Animated connection line */}
            <svg className="absolute left-1/4 top-1/2 h-3/4 w-3/4 -translate-y-1/2" viewBox="0 0 100 100">
              <path
                d="M 10 30 Q 50 10, 90 50"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                strokeDasharray="2,3"
                className="animate-pulse"
                opacity="0.3"
              />
            </svg>

            {/* First Image - Larger, Background */}
            <div
              className={cn(
                'absolute left-0 top-6 w-[65%] cursor-pointer transition-all duration-700',
                activeImage === 0 ? 'z-20 scale-105' : 'z-10 scale-100'
              )}
              onMouseEnter={() => setActiveImage(0)}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Glowing border effect */}
                <div
                  className={cn(
                    'absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-primary/60 via-secondary/40 to-primary/60 transition-opacity duration-500',
                    activeImage === 0 ? 'opacity-100 animate-pulse' : 'opacity-0'
                  )}
                  style={{ animationDuration: '3s' }}
                />
                
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30">
                  <SmartImage
                    src={collaborations[0].img}
                    alt={collaborations[0].title}
                    className={cn(
                      'aspect-[4/3] w-full object-cover transition-all duration-700',
                      activeImage === 0 ? 'scale-100 grayscale-0' : 'scale-95 grayscale-[50%]'
                    )}
                  />
                  
                  {/* Overlay with info */}
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent transition-opacity duration-500',
                    activeImage === 0 ? 'opacity-100' : 'opacity-0'
                  )}>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-[0.65rem] uppercase tracking-[0.24em] text-primary font-semibold">
                        {collaborations[0].subtitle}
                      </div>
                      <div className="mt-1 text-lg font-medium text-secondary-foreground">
                        {collaborations[0].title}
                      </div>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/90 backdrop-blur-sm">
                    <span className="text-sm font-bold text-primary">01</span>
                  </div>
                </div>

                {/* Corner frame accents */}
                <div className={cn(
                  'absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 transition-all duration-500',
                  activeImage === 0 ? 'border-primary' : 'border-primary/30'
                )} />
                <div className={cn(
                  'absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all duration-500',
                  activeImage === 0 ? 'border-primary' : 'border-primary/30'
                )} />
              </div>
            </div>

            {/* Second Image - Overlapping, Foreground */}
            <div
              className={cn(
                'absolute bottom-0 right-0 w-[65%] cursor-pointer transition-all duration-700',
                activeImage === 1 ? 'z-20 scale-105' : 'z-10 scale-100'
              )}
              onMouseEnter={() => setActiveImage(1)}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Glowing border effect */}
                <div
                  className={cn(
                    'absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-secondary/60 via-primary/40 to-secondary/60 transition-opacity duration-500',
                    activeImage === 1 ? 'opacity-100 animate-pulse' : 'opacity-0'
                  )}
                  style={{ animationDuration: '3s' }}
                />
                
                <div className="relative overflow-hidden rounded-2xl border-2 border-secondary/30">
                  <SmartImage
                    src={collaborations[1].img}
                    alt={collaborations[1].title}
                    className={cn(
                      'aspect-[4/3] w-full object-cover transition-all duration-700',
                      activeImage === 1 ? 'scale-100 grayscale-0' : 'scale-95 grayscale-[50%]'
                    )}
                  />
                  
                  {/* Overlay with info */}
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent transition-opacity duration-500',
                    activeImage === 1 ? 'opacity-100' : 'opacity-0'
                  )}>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-[0.65rem] uppercase tracking-[0.24em] text-primary font-semibold">
                        {collaborations[1].subtitle}
                      </div>
                      <div className="mt-1 text-lg font-medium text-secondary-foreground">
                        {collaborations[1].title}
                      </div>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/90 backdrop-blur-sm">
                    <span className="text-sm font-bold text-primary">02</span>
                  </div>
                </div>

                {/* Corner frame accents */}
                <div className={cn(
                  'absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 transition-all duration-500',
                  activeImage === 1 ? 'border-secondary' : 'border-secondary/30'
                )} />
                <div className={cn(
                  'absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 transition-all duration-500',
                  activeImage === 1 ? 'border-secondary' : 'border-secondary/30'
                )} />
              </div>
            </div>

            {/* Central connection point indicator */}
            {/* <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/40" style={{ animationDuration: '2s' }} />
                <div className="relative rounded-full bg-primary p-2">
                  <Building2 className="h-5 w-5 text-secondary-foreground" strokeWidth={2} />
                </div>
              </div>
            </div> */}

            {/* Floating accent elements */}
            <div className="absolute right-8 top-4 h-3 w-3 animate-pulse rounded-full bg-primary" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-8 left-8 h-2 w-2 animate-pulse rounded-full bg-secondary" style={{ animationDelay: '1s' }} />
          </div>

          {/* Mobile: Clean Simple Cards */}
          <div className="grid gap-6 lg:hidden">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border-2 border-primary/30 bg-card shadow-lg">
                  <SmartImage
                    src={collab.img}
                    alt={collab.title}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Minimal gradient overlay - only at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent">
                    <div className="p-5">
                      <div className="text-[0.65rem] uppercase tracking-[0.24em] text-primary font-semibold">
                        {collab.subtitle}
                      </div>
                      <div className="mt-2 text-xl font-medium text-secondary-foreground">
                        {collab.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

      {/* ── DPES School Events Gallery ──────────────────────────────────── */}
      <section className="border-y border-border bg-warm px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">

          {/* Header */}
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">Partner Institution</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink sm:text-3xl lg:text-4xl">
                DPES School — Events &amp; Outreach
              </h2>
              <div className="mt-3 h-[3px] w-10 rounded-full bg-primary" />
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                A curated glimpse into the collaborative programmes, cultural events, and awareness
                drives conducted through our partnership with DPES School.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-secondary/20 bg-secondary/8 px-5 py-3 lg:self-end">
              <Building2 className="h-4 w-4 shrink-0 text-secondary" strokeWidth={1.6} />
              <span className="text-xs font-medium text-secondary/80">5 Featured Moments</span>
            </div>
          </div>

          {/* Bento mosaic — Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-[280px_280px] lg:gap-3">

            {/* [0] — Hero tile: col-span-1 row-span-2 (tall left column) */}
            <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <SmartImage
                src="/Institutional Collab/DPES-1.png"
                alt="DPES School Event — 1"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              {/* Numbered badge */}
              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/90 backdrop-blur-sm">
                <span className="text-xs font-bold text-primary">01</span>
              </div>
              {/* Corner accents */}
              <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-primary/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-primary/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-primary/80">DPES School</p>
                <p className="mt-1 text-sm font-semibold text-white">School Event — I</p>
              </div>
            </div>

            {/* [1] — Top middle */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <SmartImage
                src="/Institutional Collab/DPES-2.png"
                alt="DPES School Event — 2"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-secondary/85 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold text-primary">02</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-400 group-hover:translate-y-0">
                <p className="text-xs font-semibold text-white">School Event — II</p>
              </div>
            </div>

            {/* [2] — Top right */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <SmartImage
                src="/Institutional Collab/DPES-3.png"
                alt="DPES School Event — 3"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-secondary/85 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold text-primary">03</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-400 group-hover:translate-y-0">
                <p className="text-xs font-semibold text-white">School Event — III</p>
              </div>
            </div>

            {/* [3] — Bottom middle */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <SmartImage
                src="/Institutional Collab/DPES-4.png"
                alt="DPES School Event — 4"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-secondary/85 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold text-primary">04</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-400 group-hover:translate-y-0">
                <p className="text-xs font-semibold text-white">School Event — IV</p>
              </div>
            </div>

            {/* [4] — Bottom right */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <SmartImage
                src="/Institutional Collab/DPES-5.png"
                alt="DPES School Event — 5"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-secondary/85 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold text-primary">05</span>
              </div>
              {/* "Partnership" pill on last card */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-8 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md ring-1 ring-white/20 transition-all duration-400 group-hover:translate-y-0">
                <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-white">In Partnership</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-400 group-hover:translate-y-0">
                <p className="text-xs font-semibold text-white">School Event — V</p>
              </div>
            </div>
          </div>

          {/* Mobile layout — stacked with feature-first */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {/* Hero full-width */}
            <div className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <SmartImage
                src="/Institutional Collab/DPES-MobilePic-1.png"
                alt="DPES School Event — 1"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-secondary/85 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold text-primary">01</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[0.6rem] uppercase tracking-widest text-primary/80">DPES School</p>
                <p className="mt-0.5 text-sm font-semibold text-white">School Event — I</p>
              </div>
            </div>
            {/* 2 × 2 grid for remaining 4 */}
            {[
              { src: "/Institutional Collab/DPES-2.png", label: "School Event — II",   n: "02" },
              { src: "/Institutional Collab/DPES-3.png", label: "School Event — III",  n: "03" },
              { src: "/Institutional Collab/DPES-4.png", label: "School Event — IV",   n: "04" },
              { src: "/Institutional Collab/DPES-5.png", label: "School Event — V",    n: "05" },
            ].map(({ src, label, n }) => (
              <div key={n} className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card shadow">
                <SmartImage src={src} alt={label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-md bg-secondary/85 backdrop-blur-sm">
                  <span className="text-[0.58rem] font-bold text-primary">{n}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-[0.65rem] font-semibold text-white">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer ambient strip */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <div className="flex items-center gap-2 rounded-full border border-secondary/20 bg-background px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
              <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">DPES School Partnership</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>

        </div>
      </section>
      {/* ────────────────────────────────────────────────────────────────────── */}

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
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left: text */}
          <div className="animate-rise">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-[1.06] text-ink sm:text-4xl lg:text-[3.25rem]">
              {page.narrative}
            </h1>
            <div className="mt-5 h-1 w-14 bg-primary" />
            <p className="mt-5 max-w-xl text-base-readable text-muted-foreground">{page.intro}</p>
            {/* small count indicator */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-2xl font-semibold text-ink">{directoryPanel.consultants.length}</span>
              <span className="text-sm text-muted-foreground">qualified consultants &amp; specialists</span>
            </div>
          </div>

          {/* Right: Staggered Expert Wall */}
          <div className="lg:justify-self-end lg:w-full">
            {/* Desktop grid — featured card (row-span-2) + 8 smaller slots */}
            <div className="hidden lg:grid lg:grid-cols-4 lg:gap-2.5 lg:auto-rows-[80px]">
              {/* Featured card — Dr. Seema Garg, spans 2 cols × 2 rows */}
              {(() => {
                const featured = directoryPanel.consultants[0]!;
                const initials = featured.name.replace(/^Dr\.?\s*/i, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
                return (
                  <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl border border-primary bg-secondary shadow-md">
                    {featured.photo ? (
                      <SmartImage src={featured.photo} alt={featured.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary">
                        <span className="text-3xl font-semibold text-primary/60 select-none">{initials}</span>
                      </div>
                    )}
                    {/* Name strip on hover */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-secondary/95 via-secondary/70 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-[0.6rem] uppercase tracking-widest text-primary">Expert</p>
                      <p className="mt-0.5 text-sm font-medium leading-tight text-secondary-foreground">{featured.name}</p>
                    </div>
                    {/* Verified badge */}
                    <div className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-secondary/90 px-2 py-1 backdrop-blur-sm">
                      <UserRoundCheck className="h-3 w-3 text-primary" strokeWidth={2} />
                      <span className="text-[0.6rem] font-semibold text-primary">Verified</span>
                    </div>
                  </div>
                );
              })()}

              {/* Remaining consultant cards */}
              {directoryPanel.consultants.slice(1).map((consultant) => {
                const initials = consultant.name.replace(/^Dr\.?\s*/i, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
                return (
                  <div
                    key={consultant.name}
                    className="group relative overflow-hidden rounded-xl border border-primary bg-card transition-all duration-300 hover:border-primary hover:shadow-md"
                  >
                    {consultant.photo ? (
                      <SmartImage src={consultant.photo} alt={consultant.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      /* Monogram placeholder */
                      <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br from-warm to-card">
                        {/* subtle dot pattern */}
                        <div className="absolute inset-0 opacity-[0.04]"
                          style={{ backgroundImage: 'radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                        />
                        <span className="relative text-lg font-semibold text-secondary/50 select-none">{initials}</span>
                      </div>
                    )}
                    {/* Tooltip name on hover */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-secondary/90 px-2 py-1.5 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="truncate text-center text-[0.58rem] font-medium leading-none text-secondary-foreground">{consultant.name.replace(/^Dr\.?\s*/i, 'Dr. ')}</p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Mobile grid — 3 columns, featured spans 2 cols */}
            <div className="grid grid-cols-3 gap-2 lg:hidden">
              {/* Featured — 2 col × 2 row */}
              {(() => {
                const featured = directoryPanel.consultants[0]!;
                const initials = featured.name.replace(/^Dr\.?\s*/i, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
                return (
                  <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-primary bg-secondary" style={{ aspectRatio: '1 / 1' }}>
                    {featured.photo ? (
                      <SmartImage src={featured.photo} alt={featured.name} className="h-full w-full object-cover object-top" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-2xl font-semibold text-primary/60 select-none">{initials}</span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/90 to-transparent p-2.5">
                      <p className="text-[0.6rem] font-medium text-secondary-foreground leading-tight">{featured.name}</p>
                    </div>
                  </div>
                );
              })()}

              {/* Remaining consultants */}
              {directoryPanel.consultants.slice(1).map((consultant) => {
                const initials = consultant.name.replace(/^Dr\.?\s*/i, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
                return (
                  <div
                    key={consultant.name}
                    className="relative overflow-hidden rounded-xl border border-primary bg-card"
                    style={{ aspectRatio: '1 / 1' }}
                  >
                    {consultant.photo ? (
                      <SmartImage src={consultant.photo} alt={consultant.name} className="h-full w-full object-cover object-top" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-warm to-card">
                        <span className="text-base font-semibold text-secondary/40 select-none">{initials}</span>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
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
                          <div className="flex items-center gap-3">
                            {/* Photo thumbnail / monogram */}
                            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-gradient-to-br from-warm to-card">
                              {consultant.photo ? (
                                <SmartImage
                                  src={consultant.photo}
                                  alt={consultant.name}
                                  className="h-full w-full object-cover object-top"
                                />
                              ) : (
                                <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-secondary/50 select-none">
                                  {consultant.name
                                    .replace(/^Dr\.?\s*/i, '')
                                    .split(' ')
                                    .map((w) => w[0])
                                    .join('')
                                    .slice(0, 2)
                                    .toUpperCase()}
                                </span>
                              )}
                            </div>
                            <span>{consultant.name}</span>
                          </div>
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

            {/* ── OPD Clinic Showcase ─────────────────────────────────────────── */}
            <div className="mt-16">
              {/* Section header */}
              <div className="mb-10 flex flex-col items-center text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">Our Clinics</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  OPD Consultation Centres
                </h3>
                <div className="mt-3 h-[3px] w-10 rounded-full bg-primary" />
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  A glimpse inside our dedicated consultation spaces — designed for privacy, comfort,
                  and the highest standard of holistic care.
                </p>
              </div>

              {/* Photo duo */}
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {/* Card 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-(--shadow-soft) transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                  {/* Subtle glow ring on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-500 group-hover:ring-primary/20" />

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src="/OPD consultation/OPD-1.jfif"
                      alt="OPD Consultation Centre — View 1"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md ring-1 ring-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-white">Active Clinic</span>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[0.6rem] uppercase tracking-[0.22em] text-primary-foreground/70">OPD Centre</p>
                      <p className="mt-1 text-base font-semibold leading-snug text-white">Consultation Suite — I</p>
                    </div>
                  </div>

                  {/* Footer strip */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink">Consultation Room</p>
                        <p className="text-[0.65rem] text-muted-foreground">Expert-led OPD sessions</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/8 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-primary">View I</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-(--shadow-soft) transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-500 group-hover:ring-primary/20" />

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src="/OPD consultation/OPD-2.jfif"
                      alt="OPD Consultation Centre — View 2"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md ring-1 ring-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-white">Active Clinic</span>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[0.6rem] uppercase tracking-[0.22em] text-primary-foreground/70">OPD Centre</p>
                      <p className="mt-1 text-base font-semibold leading-snug text-white">Consultation Suite — II</p>
                    </div>
                  </div>

                  {/* Footer strip */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink">Consultation Room</p>
                        <p className="text-[0.65rem] text-muted-foreground">Holistic wellness &amp; guidance</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/8 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-primary">View II</span>
                  </div>
                </div>
              </div>

              {/* Bottom ambient strip */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Trusted by families across India
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>
            </div>
            {/* ────────────────────────────────────────────────────────────────── */}

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
  return (
    <>
      <PageHeader {...copy.header} />
      <div className="relative bg-background">
        <MissionLandingPage copy={copy} content={content} />
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
