import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  BookOpen,
  FlaskConical,
  Users,
  Award,
  Microscope,
  Star,
  Flower2,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/Cards";
import { getDictionary, seo, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => seo(getDictionary().about.meta),
  component: About,
});

// â”€â”€ Static data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const drAnilGargResponsibilities = [
  { icon: Stethoscope, label: "Medical Leadership" },
  { icon: BookOpen, label: "Garbh Sanskar Framework" },
  { icon: FlaskConical, label: "Research & Validation" },
  { icon: Users, label: "Training & Capacity Building" },
  { icon: Award, label: "Program Design" },
  { icon: Microscope, label: "Scientific Implementation" },
];

const boardMembers = [
  {
    name: "Shree Vinod Agarwal",
    role: "Founder & Chairman",
    img: "vinod-sir.png",
    desc: "Philanthropist and visionary driving the financial and institutional foundation of this national movement.",
  },
  {
    name: "Dr. Anil Garg",
    role: "Founder & Managing Director",
    credentials: "MBBS, MS, MCh Plastic Surgery, MA-Yog, ABHRS, ISHRS, Diploma in Garbh Sanskar",
    img: "anil-sir.png",
    desc: "Medical visionary integrating clinical expertise with ancient Garbh Sanskar wisdom for a comprehensive prenatal system.",
  },
  {
    name: "Shree Yogendra Ji Mehant",
    role: "Founder & Executive Director",
    img: "yogendra-sir.png",
    desc: "Operational leader ensuring seamless execution of the 20-year strategic plan across all regions of India.",
  },
  {
    name: "Shree RS Sharma",
    role: "Founder & Director",
    img: "sharma-sir.png",
    desc: "Spiritual guide and value-based leadership anchor for the entire movement and its programs.",
  },
  {
    name: "Dr. Hitesh Jani",
    role: "Founder & Director",
    img: "hitesh-sir.png",
    desc: "Medical and academic advisor ensuring evidence-based rigor in every program and curriculum.",
  },
];

const advisors = [
  {
    name: "Mr. Gunwantji Kothari",
    role: "National Coordinator, HSSF",
    img: "kothari-ji.png",
    contributions: ["Spiritual Guidance", "Advisory Support", "Value-Based Direction", "National Outreach Support"],
  },
  {
    name: "Mr. Raghavan",
    role: "All India Go Seva Head",
    img: "raghvan-ji.png",
    contributions: ["Spiritual Guidance", "Advisory Support", "Value-Based Direction", "National Outreach Support"],
  },
];

const patrons = [
  {
    name: "Pujya Swami Avdheshanand Giri Ji Maharaj",
    role: "Chief Patron",
    img: "Avdheshanand-maharaj.png",
    contributions: ["Spiritual Patronage", "National Awareness Support", "Cultural Preservation"],
  },
  {
    name: "Pundrik Goswami Ji Maharaj",
    role: "Patron",
    img: "Pundrik-ji-maharaj.png",
    contributions: ["Spiritual Patronage", "Guidance", "Cultural Preservation"],
  },
  {
    name: "Ranuka Goswami Ji",
    role: "Patron",
    img: "Renuka-Ji.png",
    contributions: ["Spiritual Patronage", "Guidance", "National Awareness"],
  },
];

const achievements = [
  "Project conceptualization completed",
  "Assessment and follow-up system developed",
  "Community outreach started",
  "Medical and spiritual framework developed",
  "Expert panel formation initiated",
  "Institutional partnerships under discussion",
  "Consultation formats prepared",
  "Awareness programs conducted",
  "Digital ecosystem planning initiated",
];

// â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// ——————————————————————————————————————————————————————————————————————————————————————

function About() {
  const { t } = useI18n();
  const copy = t.about;

  return (
    <>
      {/* —————————————————————————————————————————————————————————————————————————————————————— */}
      <PageHeader {...copy.header} />

      {/* —————————————————————————————————————————————————————————————————————————————————————— */}
      <Section>
        <SectionHeading
          eyebrow="Governance"
          title="Board of Directors"
          subtitle="Divya Santan Prakalp Foundation — Chapter 8 Company"
          eyebrowVariant="secondary"
        />

        {/* All Board Members: unified grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2 auto-rows-fr">

          {/* ── Tile: Shree Vinod Agarwal ── */}
          <article className="surface-card surface-card-hover flex flex-col sm:flex-row overflow-hidden p-0 h-full">
            {/* Image Section */}
            <div className="relative h-48 sm:h-full sm:w-40 shrink-0">
              <img
                src="vinod-sir.png"
                alt="Portrait of Shree Vinod Agarwal"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 h-1 w-full bg-secondary/60 sm:h-full sm:w-1" />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
              <div>
                <p className="text-lg font-medium text-ink">Shree Vinod Agarwal</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-secondary">Founder &amp; Chairman</p>
              </div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                Philanthropist and visionary driving the financial and institutional foundation
                of this national movement. His unwavering commitment to the cause of Garbh
                Sanskar has made Divya Santan Prakalp a reality for millions of families
                across India.
              </p>
              {/* Tag pills */}
              <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                {["Strategic Vision", "Institutional Foundation", "National Movement", "Philanthropy"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-secondary/25 bg-secondary/6 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.14em] text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* ── Tile: Dr. Anil Garg ── */}
          <article className="surface-card surface-card-hover flex flex-col sm:flex-row overflow-hidden p-0 h-full">
            {/* Image Section */}
            <div className="relative h-48 sm:h-full sm:w-40 shrink-0">
              <img
                src="doctor-anil.png"
                alt="Dr. Anil Garg — Founder & Managing Director"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 h-1 w-full bg-secondary/60 sm:h-full sm:w-1" />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
              <div>
                <p className="text-lg font-medium text-ink">Dr. Anil Garg</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-secondary">Founder &amp; Managing Director</p>
                <div className="mt-2 inline-block rounded-lg border border-secondary/25 bg-secondary/6 px-2 py-1 text-[0.55rem] leading-snug text-secondary">
                  MBBS, MS, MCh Plastic Surgery · MA-Yog · ABHRS · ISHRS · Diploma in Garbh Sanskar
                </div>
              </div>
              {/* Bio */}
              <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                Dr. Anil Garg brings a rare convergence of clinical medical expertise and deep
                Vedic knowledge. His integration of modern plastic surgery, yogic sciences, and
                Garbh Sanskar has shaped the scientific framework of Divya Santan Prakalp.
              </p>
              {/* Tag pills */}
              <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                {["Medical Leadership", "Garbh Sanskar", "Research", "Scientific Implementation"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-secondary/25 bg-secondary/6 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.14em] text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
          {/* ── Remaining Tiles ── */}
          {boardMembers.slice(2).map(({ name, role, credentials, img, desc }) => (
            <article
              key={name}
              className="surface-card surface-card-hover flex flex-col sm:flex-row overflow-hidden p-0 h-full"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-full sm:w-40 shrink-0">
                <img
                  src={img}
                  alt={`Portrait of ${name}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 h-1 w-full bg-secondary/60 sm:h-full sm:w-1" />
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <div>
                  <p className="text-lg font-medium text-ink">{name}</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-secondary">{role}</p>
                  {credentials && (
                    <div className="mt-2 inline-block rounded-lg border border-secondary/20 bg-secondary/5 px-2 py-1 text-[0.55rem] leading-snug text-secondary">
                      {credentials}
                    </div>
                  )}
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* â”€â”€ Advisory Council + Achievements â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <Section className="bg-warm">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Advisory Council */}
          <div>
            <SectionHeading
              eyebrow="Advisory Council"
              title="Guided by Wisdom"
              subtitle="Driven by Values. Committed to Nation."
              align="left"
              eyebrowVariant="secondary"
            />
            <div className="mt-8 flex flex-col gap-4">
              {advisors.map(({ name, role, img, contributions }) => (
                <article
                  key={name}
                  className="surface-card surface-card-hover flex gap-4 border-l-2 border-l-secondary/40 p-5"
                >
                  <img
                    src={img}
                    alt={`Portrait of ${name}`}
                    className="size-16 shrink-0 rounded-2xl object-cover ring-1 ring-secondary/15"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base text-ink">{name}</h3>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-secondary">{role}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {contributions.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-1 rounded-full border border-secondary/20 bg-secondary/5 px-2.5 py-0.5 text-[0.62rem] text-secondary"
                        >
                          <Star className="h-2 w-2 shrink-0" />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Current Achievements */}
          <div>
            <SectionHeading
              eyebrow="Progress"
              title="Current Achievements"
              subtitle="What we have accomplished so far."
              align="left"
              eyebrowVariant="primary"
            />
            <div className="mt-8 flex flex-col gap-2">
              {achievements.map((item, i) => (
                <div
                  key={item}
                  className={cn(
                    "surface-card flex items-center gap-3 px-4 py-3 transition-shadow hover:shadow-[var(--shadow-lift)]",
                    i % 2 === 0 ? "border-l-2 border-l-primary/40" : "border-l-2 border-l-secondary/40",
                  )}
                >
                  <CheckCircle2
                    className={cn("h-4 w-4 shrink-0", i % 2 === 0 ? "text-primary" : "text-secondary")}
                    strokeWidth={1.8}
                  />
                  <span className="text-sm text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* â”€â”€ Chief Patrons & Patrons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <Section>
        <SectionHeading
          eyebrow="Divine Blessings"
          title="Chief Patrons & Patrons"
          subtitle="Formal acceptance is awaited. Their blessings and spiritual support are the foundation of this mission."
          eyebrowVariant="gold"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {patrons.map(({ name, role, img, contributions }) => (
            <article
              key={name}
              className="surface-card surface-card-hover flex gap-4 p-5"
            >
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-1 rounded-full bg-gold/12 blur-md"
                />
                <img
                  src={img}
                  alt={`Portrait of ${name}`}
                  className={cn("relative size-16 rounded-2xl object-cover ring-2 ring-gold/30")}
                  style={{ boxShadow: "var(--shadow-lift)" }}
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm leading-snug text-ink">{name}</h3>
                <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.18em] text-gold-foreground">{role}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {contributions.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-[0.6rem] text-muted-foreground"
                    >
                      <Flower2 className="h-2 w-2 shrink-0 text-gold-foreground" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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

