import { useEffect, useState, useRef } from "react";
import {
  Flower2,
  Leaf,
  HeartHandshake,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Building2,
  Stethoscope,
  Users,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/Cards";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

type AboutTab = "vision" | "pillars" | "journey" | "leadership";

export default function AboutPage() {
  const { t } = useI18n();
  const copy = t.about;
  const aboutData = t.aboutPage;
  const [activeTab, setActiveTab] = useState<AboutTab>("vision");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meta = getDictionary().about.meta;
    document.title = meta.title;
  }, []);

  const tabs: Record<AboutTab, string> = {
    vision: aboutData.labels.tabs.vision,
    pillars: aboutData.labels.tabs.pillars,
    journey: aboutData.labels.tabs.journey,
    leadership: aboutData.labels.tabs.leadership,
  };

  const handleTabClick = (tab: AboutTab) => {
    setActiveTab(tab);
    // Scroll to just below the sticky tab bar
    if (contentRef.current) {
      const yOffset = -140; // Adjust to account for navbar and sticky tab bar heights
      const y = contentRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  

  return (
    <>
      <PageHeader {...copy.header} />

      {/* Tabs Navigation */}
      <div className="sticky top-[58px] sm:top-[68px] lg:top-[74px] z-40 w-full border-b border-border bg-background/80 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-5">
          {(Object.keys(tabs) as AboutTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabClick(tab)}
              className={cn(
                "cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                activeTab === tab
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "border border-border bg-background text-muted-foreground hover:border-secondary/40 hover:text-ink",
              )}
            >
              {tabs[tab]}
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef} className="relative overflow-hidden bg-background min-h-[50vh]">
        {/* Subtle decorative background SVGs */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <Leaf className="absolute -left-12 top-20 h-64 w-64 text-green" />
          <Flower2 className="absolute -right-24 bottom-40 h-96 w-96 text-primary" />
        </div>

        <Section className="relative z-10 pt-12">
          {activeTab === "vision" && (
            <div className="mx-auto max-w-4xl space-y-16 animate-rise">
              {/* Vision Intro */}
              <div className="space-y-6 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {aboutData.vision.intro}
                </p>
                <h2 className="text-3xl leading-tight text-ink sm:text-4xl">
                  {aboutData.vision.title}
                </h2>
                <span className="mx-auto block h-px w-16 bg-gold/70" />
                <div className="space-y-4 text-left sm:text-center text-muted-foreground leading-relaxed mt-6">
                  {aboutData.vision.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Core Objective */}
              <div className="surface-card bg-warm p-8 sm:p-12 text-center border-gold/30 relative overflow-hidden">
                <div className="pointer-events-none absolute -bottom-4 -left-4 opacity-10">
                  <HeartHandshake className="h-32 w-32 text-primary" />
                </div>
                <h3 className="text-2xl font-medium text-ink relative z-10">
                  {aboutData.vision.coreObjectiveTitle}
                </h3>
                <div className="mt-6 flex flex-wrap justify-center gap-3 relative z-10">
                  {aboutData.vision.coreObjectiveList.map((obj, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-background/80 border border-border px-4 py-2 text-sm font-medium text-ink shadow-sm"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm text-muted-foreground leading-relaxed relative z-10">
                  {aboutData.vision.coreObjectiveDesc}
                </p>
              </div>

              {/* Section 8 Organization */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-ink">{aboutData.section8.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {aboutData.section8.description}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed font-medium text-ink">
                    {aboutData.section8.vision}
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="surface-glass p-6 rounded-2xl border-primary/20">
                    <h4 className="font-medium text-lg text-ink mb-4">
                      {aboutData.section8.whatIsSection8.title}
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      {aboutData.section8.whatIsSection8.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="surface-glass p-6 rounded-2xl border-secondary/20">
                    <h4 className="font-medium text-lg text-ink mb-4">
                      {aboutData.section8.largerPurpose.title}
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      {aboutData.section8.largerPurpose.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-medium text-lg text-ink mb-6 text-center">
                    {aboutData.labels.keyObjectivesTitle}
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {aboutData.section8.keyObjectives.map((obj, i) => (
                      <div key={i} className="flex gap-3 items-start surface-card p-4">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-ink leading-relaxed">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "pillars" && (
            <div className="mx-auto max-w-5xl space-y-12 animate-rise">
              <div className="text-center mb-10">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-secondary">
                  {aboutData.labels.pillarsEyebrow}
                </p>
                <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">
                  {aboutData.labels.pillarsTitle}
                </h2>
                <span className="mx-auto mt-4 block h-px w-16 bg-gold/70" />
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {aboutData.fivePillars.map((pillar) => {
                  // Fallback icons since we can't easily serialize React components in i18n
                  let Icon = CheckCircle2;
                  if (pillar.id === "awareness") Icon = Globe2;
                  else if (pillar.id === "training") Icon = GraduationCap;
                  else if (pillar.id === "centres") Icon = Building2;
                  else if (pillar.id === "research") Icon = Stethoscope;
                  else if (pillar.id === "association") Icon = Users;

                  return (
                    <div
                      key={pillar.id}
                      className="surface-card p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden group"
                    >
                      <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]">
                        <Icon className="h-40 w-40 text-secondary" />
                      </div>

                      <div className="flex items-center gap-4 relative z-10">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
                        </span>
                        <h3 className="text-lg sm:text-xl font-medium text-ink">{pillar.title}</h3>
                      </div>

                      <div className="space-y-6 relative z-10">
                        {pillar.sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="font-medium text-sm text-primary mb-2">
                              {section.subtitle}
                            </h4>
                            {section.body && (
                              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                {section.body}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {section.points.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-2 text-sm text-ink leading-relaxed"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "journey" && (
            <div className="mx-auto max-w-3xl space-y-12 animate-rise">
              <div className="text-center mb-10">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold-foreground">
                  {aboutData.labels.historyEyebrow}
                </p>
                <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">
                  {aboutData.labels.historyTitle}
                </h2>
                <span className="mx-auto mt-4 block h-px w-16 bg-gold/70" />
              </div>

              <div className="relative border-l border-primary/20 pl-6 sm:pl-10 space-y-10 py-4">
                {aboutData.history.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[1.65rem] sm:-left-[2.65rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary/40 ring-4 ring-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "leadership" && (
            <div className="mx-auto max-w-5xl space-y-20 animate-rise">
              {/* Patrons */}
              <div>
                <SectionHeading
                  eyebrow={aboutData.labels.patronsEyebrow}
                  title={aboutData.labels.patronsTitle}
                  subtitle={aboutData.labels.patronsSubtitle}
                  eyebrowVariant="gold"
                />
                <div className="mt-10 grid gap-5 sm:grid-cols-3">
                  {aboutData.leadership.patrons.map(({ name, role, img, contributions }) => (
                    <article key={name} className="surface-card surface-card-hover flex gap-4 p-5">
                      <div className="relative shrink-0">
                        <span
                          aria-hidden
                          className="pointer-events-none absolute -inset-1 rounded-full bg-gold/12 blur-md"
                        />
                        <img
                          src={img}
                          alt={`Portrait of ${name}`}
                          className={cn(
                            "relative size-16 rounded-2xl object-cover ring-2 ring-gold/30",
                          )}
                          style={{ boxShadow: "var(--shadow-lift)" }}
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <h3 className="text-sm font-medium leading-snug text-ink">{name}</h3>
                        <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.18em] text-gold-foreground">
                          {role}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Founders */}
              <div>
                <SectionHeading
                  eyebrow={aboutData.labels.foundersEyebrow}
                  title={aboutData.labels.foundersTitle}
                  subtitle={aboutData.labels.foundersSubtitle}
                  eyebrowVariant="secondary"
                />
                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  {aboutData.leadership.founders.map(({ name, role, credentials, img, desc }) => (
                    <article
                      key={name}
                      className="surface-card surface-card-hover flex flex-col sm:flex-row overflow-hidden p-0 h-full"
                    >
                      <div className="relative h-48 sm:h-full sm:w-40 shrink-0 bg-muted/20">
                        <img
                          src={img}
                          alt={`Portrait of ${name}`}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                        <div className="absolute top-0 left-0 h-1 w-full bg-secondary/60 sm:h-full sm:w-1" />
                      </div>
                      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                        <div>
                          <p className="text-lg font-medium text-ink">{name}</p>
                          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-secondary">
                            {role}
                          </p>
                          {credentials && (
                            <div className="mt-2 inline-block rounded-lg border border-secondary/20 bg-secondary/5 px-2 py-1 text-[0.55rem] leading-snug text-secondary">
                              {credentials}
                            </div>
                          )}
                        </div>
                        <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                          {desc}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Advisory & Executive */}
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <SectionHeading
                    eyebrow={aboutData.labels.advisorsEyebrow}
                    title={aboutData.labels.advisorsTitle}
                    subtitle={aboutData.labels.advisorsSubtitle}
                    align="left"
                    eyebrowVariant="primary"
                  />
                  <div className="mt-8 flex flex-col gap-4">
                    {aboutData.leadership.advisors.map(({ name, role, img }) => (
                      <article
                        key={name}
                        className="surface-card surface-card-hover flex gap-4 border-l-2 border-l-primary/40 p-5"
                      >
                        <img
                          src={img}
                          alt={`Portrait of ${name}`}
                          className="size-16 shrink-0 rounded-2xl object-cover ring-1 ring-primary/15"
                          loading="lazy"
                        />
                        <div className="min-w-0 flex flex-col justify-center">
                          <h3 className="text-base font-medium text-ink">{name}</h3>
                          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-primary">
                            {role}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading
                    eyebrow={aboutData.labels.councilEyebrow}
                    title={aboutData.labels.councilTitle}
                    subtitle={aboutData.labels.councilSubtitle}
                    align="left"
                    eyebrowVariant="secondary"
                  />
                  <div className="mt-8 surface-card p-6 bg-warm">
                    <div className="flex flex-wrap gap-2">
                      {aboutData.leadership.executiveCouncil.map((name, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-xs text-ink shadow-sm hover:border-secondary/30 transition-colors"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>

      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/learn", label: copy.cta.primary }}
          secondary={{ to: "/join", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
