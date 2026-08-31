import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { VideoCard } from "@/components/site/VideoCard";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Video,
  Users,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Apple,
  Salad,
  HeartPulse,
  Baby,
  Smile,
  Leaf,
  Globe2,
  QrCode,
} from "lucide-react";
import {
  CLASS_SCHEDULE,
  VIDEOS,
  YOUTUBE_CHANNEL_URL,
  ASK_SHREE_FEATURES,
} from "@/content/registry";
import { getDictionary, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { useChatWidget } from "@/hooks/useChatWidget";

type MainTab = "content" | "videos";
type FreeTab = "onlineClasses" | "opd";

const TOPIC_ICONS: Record<string, React.ElementType> = {
  nutrition: Salad,
  yoga: Leaf,
  babyTalk: Baby,
  lifestyle: Smile,
  emotional: HeartPulse,
  pregnancy: Apple,
};

export default function FreeServicesPage() {
  const { t } = useI18n();
  const copy = t.freeServices;
  const [mainTab, setMainTab] = useState<MainTab>("content");
  const [freeTab, setFreeTab] = useState<FreeTab>("onlineClasses");
  const { open: openChat } = useChatWidget();

  useEffect(() => {
    const meta = getDictionary().freeServices.meta;
    document.title = meta.title;
  }, []);

  const mainTabs = [
    { id: "content" as MainTab, label: copy.mainTabs.content },
    { id: "videos" as MainTab, label: copy.mainTabs.videos },
  ];

  return (
    <>
      <PageHeader {...copy.header} />

      {/* ── Top Tab Navigation ─────────────────────────────────────── */}
      <Section className="pb-0">
        <div className="flex flex-wrap items-center gap-2 border-b border-border">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMainTab(tab.id)}
              className={cn(
                "rounded-t-lg px-6 py-3 text-sm font-medium transition-colors",
                mainTab === tab.id
                  ? "border-b-2 border-primary bg-accent text-primary"
                  : "text-muted-foreground hover:text-ink",
              )}
            >
              {tab.label}
            </button>
          ))}

          {/* Ask Shree AI — opens widget */}
          {/* <button
            type="button"
            onClick={openChat}
            className="ml-auto flex cursor-pointer items-center gap-2 rounded-full border border-primary/40 bg-primary/8 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/15 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Ask Shree AI
          </button> */}
        </div>
      </Section>

      {/* ── Free Service Content Tab ───────────────────────────────── */}
      {mainTab === "content" && (
        <>
          {/* ── Hero banner with mission statement ── */}
          <section
            className="border-b border-border px-5 py-14 sm:px-8 sm:py-20"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.945 0.055 82) 45%, oklch(0.920 0.072 70) 100%)",
            }}
          >
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                {/* Left: impact stats */}
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                    {copy.header.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl leading-snug text-ink sm:text-4xl">
                    {copy.header.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    {copy.header.intro}
                  </p>

                  {/* Free badge pills */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {copy.heroPills.map(({ label }, idx) => {
                      const PillIcon = [Video, Building2, Users, Globe2][idx] ?? Video;
                      return (
                        <span
                          key={label}
                          className="flex items-center gap-2 rounded-full border border-primary/25 bg-white/60 px-4 py-2 text-sm text-secondary shadow-sm backdrop-blur-sm"
                        >
                          <PillIcon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Right: 2-column stat cards */}
                <div className="grid grid-cols-2 gap-4">
                  {copy.heroStats.map(({ value, label, sub }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-primary/15 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
                    >
                      <p className="text-3xl font-semibold text-secondary">{value}</p>
                      <p className="mt-1 text-sm font-medium text-ink">{label}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Subtab Navigation ── */}
          <Section className="pb-0">
            <div className="flex flex-wrap gap-1 rounded-2xl border border-border bg-warm p-1.5 sm:w-fit">
              {(["onlineClasses", "opd"] as FreeTab[]).map((tab) => {
                const labels = copy.subtabs;
                const TabIcon = tab === "onlineClasses" ? Video : Building2;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFreeTab(tab)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200",
                      freeTab === tab
                        ? "bg-background text-ink shadow-sm"
                        : "text-muted-foreground hover:text-ink",
                    )}
                  >
                    <TabIcon className="h-4 w-4" strokeWidth={1.75} />
                    {labels[tab]}
                  </button>
                );
              })}
            </div>
          </Section>

          {/* ══════════════════════════════════════════════
              SUBTAB 1 — Free Online Classes
          ══════════════════════════════════════════════ */}
          {freeTab === "onlineClasses" && (
            <>
              {/* Section intro */}
              <Section>
                <div className="grid gap-12 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
                  {/* Left — intro text */}
                  <div className="lg:pr-12">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                      {copy.onlineClasses.eyebrow}
                    </p>
                    <h2 className="mt-4 text-3xl leading-snug text-ink sm:text-4xl">
                      {copy.onlineClasses.title}
                    </h2>

                    <div className="mt-6 space-y-4">
                      <p className="text-base leading-relaxed text-ink/80">
                        {copy.onlineClasses.intro}
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {copy.onlineClasses.sessionInfo}
                      </p>
                    </div>

                    {/* Key bullet points */}
                    <div className="mt-8 space-y-3">
                      {[
                        copy.onlineClasses.qAndA,
                        copy.onlineClasses.free,
                        copy.onlineClasses.contact,
                      ].map((point, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                            strokeWidth={1.75}
                          />
                          <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild variant="hero" size="lg">
                        <Link to="/contact">
                          {copy.onlineClasses.contactCta} <ArrowRight className="ml-1.5 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Vertical rule */}
                  <div className="hidden lg:block border-l border-border" />

                  {/* Right — topics covered */}
                  <div className="lg:pl-12">
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-secondary">
                      {copy.onlineClasses.topicsHeading}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                      {copy.onlineClasses.topics.map((topic) => {
                        const TopicIcon = TOPIC_ICONS[topic.icon] ?? Leaf;
                        return (
                          <div
                            key={topic.icon}
                            className="flex flex-col items-center gap-2 rounded-2xl border border-primary/15 bg-background p-4 text-center shadow-sm transition-all hover:border-primary/35 hover:shadow-md"
                          >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <TopicIcon className="h-5 w-5" strokeWidth={1.5} />
                            </span>
                            <p className="text-xs font-medium text-ink leading-tight">
                              {topic.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Free badge */}
                    <div className="mt-8 rounded-2xl border border-secondary/25 bg-secondary/8 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        {copy.onlineClasses.alwaysFreeLabel}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {copy.onlineClasses.free}
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* QR Code section */}
              <section
                className="border-y border-border px-5 py-16 sm:px-8 sm:py-20"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.950 0.035 88) 100%)",
                }}
              >
                <div className="mx-auto w-full max-w-6xl">
                  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left: QR code image */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-xl" />
                        <img
                          src="/dsf-qr-whatsapp.png "
                          alt="Divya Santan Foundation QR Code – WhatsApp करें हमारा QR कोड Scan करें"
                          className="relative max-h-[480px] w-auto rounded-3xl shadow-[var(--shadow-lift)]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right: instructions */}
                    <div>
                      <div className="mb-6 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <QrCode className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                          {copy.onlineClasses.qrSectionLabel}
                        </p>
                      </div>
                      <h3 className="text-2xl leading-snug text-ink sm:text-3xl">
                        {copy.onlineClasses.qrScan}
                      </h3>

                      <div className="mt-8 space-y-5">
                        {copy.onlineClasses.qrSteps.map(({ title, body }, i) => (
                          <div key={i} className="flex gap-4">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                              {i + 1}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-ink">{title}</p>
                              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                                {body}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* WhatsApp CTA */}
                      <div className="mt-8 flex flex-wrap gap-3">
                        <a
                          href="https://wa.me/919425793409"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1ebe5d] hover:shadow-lg active:scale-95"
                        >
                          <Phone className="h-4 w-4" />
                          WhatsApp: +91 94257 93409
                        </a>
                        <Button asChild variant="outline" size="lg">
                          <Link to="/contact">{copy.onlineClasses.contactOffice}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Class schedule */}
              <Section className="bg-warm">
                <SectionHeading
                  eyebrow={copy.schedule.eyebrow}
                  title={copy.schedule.title}
                />
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {CLASS_SCHEDULE.map((session) => {
                    const s = copy.schedule.sessions[session.id];
                    return (
                      <div key={session.id} className="surface-card flex gap-4 p-6">
                        <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-primary">{s.when}</p>
                          <p className="mt-1 text-base text-ink">{s.what}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{s.meta}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Section>
            </>
          )}

          {/* ══════════════════════════════════════════════
              SUBTAB 2 — Free Garbh Sanskar OPD
          ══════════════════════════════════════════════ */}
          {freeTab === "opd" && (
            <>
              {/* Main intro section */}
              <Section>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                  {/* Left: OPD description */}
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
                      {copy.opd.eyebrow}
                    </p>
                    <h2 className="mt-4 text-3xl leading-snug text-ink sm:text-4xl">
                      {copy.opd.title}
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-ink/80">{copy.opd.intro}</p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {copy.opd.currentlyAt}
                    </p>

                    {/* Services chips */}
                    <div className="mt-8">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        {copy.opd.servicesLabel}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {copy.opd.services.map((service) => (
                          <span
                            key={service.label}
                            className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm text-primary"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
                            {service.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: hospital card + expansion */}
                  <div className="space-y-5">
                    {/* Hospital highlight card */}
                    <div
                      className="relative overflow-hidden rounded-3xl p-7"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.945 0.055 82) 0%, oklch(0.920 0.072 70) 100%)",
                      }}
                    >
                      <div className="absolute top-4 right-4 text-4xl opacity-20">🏥</div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e26300ff]">
                        {copy.opd.hospitalLabel}
                      </p>
                      <div className="mt-4 flex items-start gap-3">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                          <Building2 className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <div>
                          <p className="text-lg font-medium text-ink">{copy.opd.hospital}</p>
                          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 text-secondary" strokeWidth={1.75} />
                            {copy.opd.currentCity}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm font-medium text-secondary">
                        {copy.opd.runningStatus}
                      </p>
                    </div>

                    {/* Expansion card */}
                    <div className="rounded-3xl border border-border bg-background p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        {copy.opd.expandingLabel}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {copy.opd.expansion}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                        <Globe2 className="h-4 w-4" strokeWidth={1.75} />
                        <span className="font-medium">{copy.opd.charitableHospitals}</span>
                      </div>
                    </div>

                    {/* Aim card */}
                    <div className="rounded-3xl border border-secondary/20 bg-secondary/5 p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        {copy.opd.aimLabel}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/80">{copy.opd.aim}</p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Mission visual section */}
              <section
                className="border-y border-border px-5 py-14 sm:px-8 sm:py-20"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.975 0.018 96) 0%, oklch(0.945 0.055 82) 45%, oklch(0.920 0.072 70) 100%)",
                }}
              >
                <div className="mx-auto w-full max-w-6xl text-center">
                  <p className="text-[0.80rem] font-bold uppercase tracking-[0.3em] text-[#e26300ff]">
                    {copy.opd.commitmentEyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl leading-snug text-secondary sm:text-3xl">
                    {copy.opd.commitmentTitle}
                  </h3>
                  <div className="mx-auto mt-6 flex items-center gap-4 max-w-xs">
                    <span className="flex-1 border-t border-gold/40" />
                    <span className="text-gold text-lg">✦</span>
                    <span className="flex-1 border-t border-gold/40" />
                  </div>

                  {/* Timeline of vision */}
                  <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    {copy.opd.visionCards.map(({ title, body }, i) => {
                      const colors = [
                        { color: "text-primary", bg: "bg-primary/10" },
                        { color: "text-secondary", bg: "bg-secondary/10" },
                        { color: "text-[#e26300ff]", bg: "bg-[#e26300]/10" },
                      ];
                      const VIcon = [Building2, Users, Globe2][i] ?? Building2;
                      const { color, bg } = colors[i % colors.length]!;
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center rounded-3xl border border-primary/15 bg-white/70 p-7 shadow-sm backdrop-blur-sm text-center"
                        >
                          <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", bg, color)}>
                            <VIcon className="h-6 w-6" strokeWidth={1.5} />
                          </span>
                          <p className={cn("mt-4 text-base font-medium", color)}>{title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ── Ask Shree AI promo ────────────────────────────────── */}
          <Section className="pt-0">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-secondary/5 to-primary/5 px-6 py-10 text-center">
              <p className="text-xs uppercase tracking-[0.22em] text-secondary">{copy.askShree.eyebrow}</p>
              {/* <h2 className="mt-2 text-2xl text-ink sm:text-3xl">{copy.askShree.title}</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {copy.askShree.body}
              </p> */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto mb-8">
                {ASK_SHREE_FEATURES.map((feature) => (
                  <div key={feature.id} className="surface-card p-4 text-left">
                    <p className="text-sm font-medium text-ink">
                      {t.askShree.features[feature.id].title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t.askShree.features[feature.id].body}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" onClick={openChat} className="cursor-pointer">
                <Sparkles className="h-4 w-4" />
                {copy.askShree.cta}
              </Button>
            </div>
          </Section>
        </>
      )}

      {/* ── Videos & Lectures Tab ─────────────────────────────────── */}
      {mainTab === "videos" && (
        <Section>
          <SectionHeading
            eyebrow={copy.videos.eyebrow}
            title={copy.videos.title}
            subtitle={copy.videos.subtitle}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((v) => (
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
                {copy.videos.playlistCta}
              </a>
            </Button>
          </div>
        </Section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <CTASection
          title={copy.cta.title}
          body={copy.cta.body}
          primary={{ to: "/contact", label: copy.cta.primary }}
          secondary={{ to: "/courses", label: copy.cta.secondary }}
        />
      </Section>
    </>
  );
}
