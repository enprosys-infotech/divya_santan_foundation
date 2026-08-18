import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-womb-to-world.jpg";
import { AncientScienceBridge } from "@/components/site/AncientScienceBridge";
import { AskShreeChat } from "@/components/site/AskShreeChat";
import { CTASection, FeatureCard, JourneyCard, KnowledgeCard, CourseCard, TestimonialCard } from "@/components/site/Cards";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { VideoCard } from "@/components/site/VideoCard";
import { Button } from "@/components/ui/button";
import {
  AUDIENCE_PILLS,
  GARBH_BASICS,
  GLOBAL_STATS,
  JOURNEYS,
  KNOWLEDGE_ARTICLES,
  PILLARS,
  COURSES,
  RESEARCH_TOPICS,
  ASK_SHREE_QUESTIONS,
  SCIENCE_STATS,
  TESTIMONIALS,
  VIDEOS,
  YOUTUBE_CHANNEL_URL,
  type AskShreeQuestionId,
} from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => seo(getDictionary().home.meta),
  component: Home,
});

type HubTab = "videos" | "free" | "courses" | "knowledge";
type EcosystemTab = "join" | "global" | "research" | "testimonials";

function Home() {
  const { t } = useI18n();
  const copy = t.home;

  const [hubTab, setHubTab] = useState<HubTab>("videos");
  const [ecosystemTab, setEcosystemTab] = useState<EcosystemTab>("join");
  const [externalQuestion, setExternalQuestion] = useState<AskShreeQuestionId | undefined>();

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="mandala-veil relative overflow-hidden border-b border-border bg-warm px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              {copy.hero.eyebrow}
            </p>
            <h1 className="animate-rise mt-5 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="font-deva mt-4 text-lg text-primary/85">{copy.hero.native}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {copy.hero.subtitle}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-secondary/60">
              {copy.hero.support}
            </p>

            {/* Audience pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {AUDIENCE_PILLS.map((pill) => (
                <Link
                  key={pill.id}
                  to={pill.to}
                  className="flex flex-col rounded-xl border border-border bg-background/80 px-4 py-2.5 text-left transition-all hover:border-primary/50 hover:bg-background"
                >
                  <span className="text-sm text-ink">{copy.hero.pills[pill.id].label}</span>
                  <span className="text-[0.7rem] text-muted-foreground">
                    {copy.hero.pills[pill.id].sub}
                  </span>
                </Link>
              ))}
            </div>

            {/* Badge strip */}
            <div className="mt-8 flex flex-wrap gap-2">
              {Object.values(copy.hero.badges).map((badge, i) => (
                <span
                  key={badge}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[0.7rem] font-medium",
                    i % 2 === 0
                      ? "border-secondary/25 bg-secondary/8 text-secondary"
                      : "border-primary/20 bg-primary/8 text-primary"
                  )}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/free-services">{t.cta.joinFree}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ask-shree">{t.cta.askShree}</Link>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden overflow-hidden rounded-3xl shadow-[var(--shadow-lift)] lg:block">
            <img
              src={heroImage}
              alt={copy.hero.imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── Science stats bar ───────────────────────────────────────── */}
      <section className="border-b border-border bg-accent/50 px-5 py-10 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
          {SCIENCE_STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-2xl font-semibold text-secondary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-ink">{copy.stats[stat.id].label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{copy.stats[stat.id].sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Foundations & 5 Pillars ──────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow={copy.foundations.eyebrow}
          title={copy.foundations.title}
          subtitle={copy.foundations.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GARBH_BASICS.map((basic) => (
            <FeatureCard key={basic.id} icon={basic.icon} iconVariant={basic.iconVariant} {...t.content.basics[basic.id]} />
          ))}
        </div>

        <p className="mx-auto mt-16 mb-6 max-w-xs text-center text-[0.68rem] uppercase tracking-[0.26em] text-gold-foreground">
              {copy.foundations.pillarsLabel}
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar) => (
            <FeatureCard key={pillar.id} icon={pillar.icon} iconVariant={pillar.iconVariant} {...t.content.pillars[pillar.id]} />
          ))}
        </div>
      </Section>

      {/* ── Ancient Science Bridge (self-contained) ──────────────────── */}
      <AncientScienceBridge />

      {/* ── Media & Learning Hub ─────────────────────────────────────── */}
      <Section id="hub">
        <SectionHeading
          eyebrow={copy.hub.eyebrow}
          title={copy.hub.title}
          subtitle={copy.hub.subtitle}
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["videos", "free", "courses", "knowledge"] as HubTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setHubTab(tab)}
              className={cn(
                "cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                hubTab === tab
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "border border-border text-muted-foreground hover:border-secondary/40 hover:text-ink",
              )}
            >
              {copy.hub.tabs[tab]}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {hubTab === "videos" && (
            <>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                {copy.hub.videos.description}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {VIDEOS.slice(0, 3).map((v) => (
                  <VideoCard
                    key={v.id}
                    youtubeId={v.youtubeId}
                    duration={v.duration}
                    {...t.content.videos[v.id]}
                  />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    {copy.hub.videos.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </>
          )}

          {hubTab === "free" && (
            <>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                {copy.hub.free.description}
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Reuse first 3 journey cards as free service previews */}
                {JOURNEYS.slice(0, 3).map((j) => (
                  <JourneyCard key={j.id} to={j.to} {...t.content.journeys[j.id]} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/free-services">{t.cta.joinFree}</Link>
                </Button>
              </div>
            </>
          )}

          {hubTab === "courses" && (
            <>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                {copy.hub.courses.description}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {COURSES.slice(0, 3).map((c) => (
                  <CourseCard key={c.id} {...t.content.courses[c.id]} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/courses">
                    {copy.hub.courses.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}

          {hubTab === "knowledge" && (
            <>
              <p className="mb-8 text-center text-sm text-muted-foreground">
                {copy.hub.knowledge.description}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {KNOWLEDGE_ARTICLES.slice(0, 4).map((a) => {
                  const article = t.content.knowledgeArticles[a.id];
                  const catLabel = t.content.knowledgeCategories[a.category];
                  return (
                    <KnowledgeCard
                      key={a.id}
                      category={catLabel}
                      title={article.title}
                      readTime={article.readTime}
                      body={article.body}
                    />
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/knowledge">
                    {copy.hub.knowledge.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </Section>

      {/* ── Ask Shree section ────────────────────────────────────────── */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow={copy.ai.eyebrow}
          title={copy.ai.title}
          subtitle={copy.ai.subtitle}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {externalQuestion !== undefined ? (
            <AskShreeChat externalQuestion={externalQuestion} />
          ) : (
            <AskShreeChat />
          )}

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.24em] text-secondary">
              {copy.ai.eyebrow}
            </p>
            <div className="flex flex-col gap-2">
              {ASK_SHREE_QUESTIONS.map(({ id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setExternalQuestion(id)}
                  className="cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-left text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-ink active:scale-[0.98]"
                >
                  {t.askShree.questions[id].question}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild variant="hero" size="lg">
                <Link to="/ask-shree">{copy.ai.openFull}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">{copy.ai.bookConsultation}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Global Ecosystem ─────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow={copy.ecosystem.eyebrow}
          title={copy.ecosystem.title}
          subtitle={copy.ecosystem.subtitle}
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["join", "global", "research", "testimonials"] as EcosystemTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setEcosystemTab(tab)}
              className={cn(
                "cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                ecosystemTab === tab
                  ? "bg-secondary text-secondary-foreground shadow"
                  : "border border-border text-muted-foreground hover:border-secondary/40 hover:text-ink",
              )}
            >
              {copy.ecosystem.tabs[tab]}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {ecosystemTab === "join" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {JOURNEYS.map((j) => (
                <JourneyCard key={j.id} to={j.to} {...t.content.journeys[j.id]} />
              ))}
            </div>
          )}

          {ecosystemTab === "global" && (
            <div className="space-y-8">
              <h3 className="text-center text-2xl text-ink">{copy.global.title}</h3>
              <div className="mx-auto grid max-w-xl grid-cols-3 gap-6">
                {GLOBAL_STATS.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {copy.global.stats[stat.id]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ecosystemTab === "research" && (
            <div className="space-y-8">
              <div className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-warm p-8 text-center">
                <h3 className="text-xl text-ink">{copy.research.windowTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy.research.windowDesc}
                </p>
                <Button asChild variant="outline" size="lg" className="mt-6">
                  <Link to="/research">{copy.research.cta}</Link>
                </Button>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {RESEARCH_TOPICS.slice(0, 3).map((rt) => (
                  <FeatureCard
                    key={rt.id}
                    title={t.content.researchTopics[rt.id].topic}
                    body={t.content.researchTopics[rt.id].summary}
                  />
                ))}
              </div>
            </div>
          )}

          {ecosystemTab === "testimonials" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((tm) => (
                <TestimonialCard key={tm.id} {...t.content.testimonials[tm.id]} />
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <Section>
        <CTASection
          title={copy.finalCta.title}
          body={copy.finalCta.body}
          primary={{ to: "/free-services", label: copy.finalCta.primary }}
          secondary={{ to: "/contact", label: copy.finalCta.secondary }}
        />
      </Section>
    </>
  );
}
