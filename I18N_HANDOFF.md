# i18n Refactor — Handoff Context

> Working doc for whoever continues this task. Read top to bottom before touching code.
> Repo: `divya_santan_foundation` · Stack: React 19 + Vite + TanStack Router (file-based) + Tailwind v4 · Package manager: **bun**

---

## 1. The problem we are solving

The site (Divya Santan Foundation — Garbh Sanskar education platform) supports **English + Hindi**.

The old implementation was a hybrid mess:

- `src/lib/i18n.tsx` — flat `dict` of ~400 `"key.path": { en, hi }` entries, accessed via `t("some.key")` with `as any` casts everywhere.
- `src/lib/content.ts` — 741 lines of content arrays using suffix convention (`title` / `titleHindi`, `body` / `bodyHindi`).
- `src/hooks/use-bilingual-content.ts` — `bc(item, "field")` helper that looked up `field + "Hindi"`.
- Plus **~120 hardcoded English-only strings** inline in routes and components.

Result: switching to Hindi still showed English in many places. **Not end-to-end.**

### The user's explicit requirements

1. Manage both languages **efficiently and end-to-end** — nothing may leak in the wrong language.
2. To change copy, you go to **that language's own file** and edit it there.
3. Codebase must be **neat, clean and understandable**, because many more pages will be built on top of it.

### Decision made (and why)

We evaluated a runtime translation API (Google/Azure) and **rejected it**: per-visit cost, flash of untranslated content, no SEO indexing, and unreliable handling of domain terms (_Garbh Sanskar_, _Prerak_, _Garbh Samvad_). Instead we use **static locale files with a compile-time completeness guarantee**.

---

## 2. Target architecture (already built)

```
src/
  i18n/
    config.ts          # LANGUAGES list, Lang type, DEFAULT_LANG, storage key, isLang(), languageMeta()
    types.ts           # shared copy shapes: TitledCopy, AccentedCopy, JourneyCopy, CourseCopy,
                       # ArticleCopy, ResearchTopicCopy, TestimonialCopy, VideoCopy, SynergyCopy,
                       # StatCopy, ScheduleCopy, NavLinkCopy, PageMeta
    dictionary.ts      # export type Dictionary = typeof en   <-- the contract
    locales/
      en.ts            # reference locale. ALL English copy.
      hi.ts            # `export const hi: Dictionary = {...}` -> TS errors if a key is missing
      index.ts         # DICTIONARIES: Record<Lang, Dictionary>
    provider.tsx       # I18nProvider, useI18n(), getDictionary(), readStoredLang(), format()
    seo.ts             # seo({title, description, ogDescription?}) -> TanStack `head()` meta array
    index.ts           # public barrel — import everything from "@/i18n"
  content/
    registry.ts        # NON-translatable structure: stable ids + icons + youtube ids + symbols + stat values
    navigation.ts      # NAV_ITEMS, FOOTER_COLUMNS, CONTACT_DETAILS (routes + ids only, no labels)
```

### The core idea

**Structure and copy are separated.**

- `src/content/registry.ts` owns ids, icons, routes, YouTube ids, numeric stat values.
- Locale files own every user-facing string, keyed by those same ids using
  `satisfies Record<SomeId, SomeCopy>`.
- Because the locale maps are `Record<UnionOfIds, Copy>`, **TypeScript fails the build if any language is missing an entry**. That is the mechanism that enforces "end-to-end".

Example:

```ts
// registry.ts
export const PILLARS = defineItems([
  { id: "education", icon: BookOpen },
  { id: "training",  icon: GraduationCap },
  /* … */
]);
export type PillarId = (typeof PILLARS)[number]["id"];

// locales/en.ts
pillars: {
  education: { title: "Education", native: "शिक्षा", body: "…" },
  /* … */
} satisfies Record<PillarId, AccentedCopy>,

// component
const { t } = useI18n();
PILLARS.map((p) => <FeatureCard key={p.id} icon={p.icon} {...t.content.pillars[p.id]} />)
```

### API surface

```ts
import { useI18n, getDictionary, seo, format, LANGUAGES } from "@/i18n";

const { t, lang, setLang } = useI18n(); // `t` is the whole typed dictionary object
t.home.hero.title; // dot access, full autocomplete, no string keys
format(t.synergy.pillarCounter, { current: 1, total: 8 }); // "{placeholder}" substitution
```

For TanStack Router `head()` (runs outside React, no hooks):

```ts
head: () => seo(getDictionary().about.meta),
```

`getDictionary()` reads the persisted language from `localStorage` key `dsf-lang`.

### The `native` field convention

Several English headings show a Devanagari accent line underneath (design feature).

- In `en.ts`: `native: "गर्भ संस्कार"`.
- In `hi.ts`: `native: ""` (redundant when the page is already Hindi).
- Components render it conditionally: `{native && <p className="font-deva">{native}</p>}`.

Never re-introduce `lang === "hi" ? x : y` branching in components.

---

## 3. Dictionary top-level shape (`src/i18n/locales/en.ts`)

```
brand, common, cta, nav, footer, errors,
home, synergy, askShree,
about, learn, courses, knowledge, freeServices, research, join, contact,
content: {
  basics, timeline, pillars, journeys, learnTopics, freeServices, videos,
  courses, knowledgeCategories, knowledgeArticles, researchTopics,
  joinRoles, testimonials, synergy
}
```

Page slices follow a consistent pattern:

```ts
about: {
  meta:   { title, description },        // -> seo()
  header: { eyebrow, title, native, intro },  // -> <PageHeader {...t.about.header} />
  /* section-specific slices */
  cta:    { title, body, primary, secondary },
}
```

---

## 4. STATUS

### ✅ Done

| Area                                                           | State                                                                          |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `src/i18n/*` (config, types, dictionary, provider, seo, index) | Complete                                                                       |
| `src/i18n/locales/en.ts`                                       | Complete — reference locale                                                    |
| `src/i18n/locales/hi.ts`                                       | Complete — typechecks clean against `Dictionary`                               |
| `src/content/registry.ts`                                      | Complete                                                                       |
| `src/content/navigation.ts`                                    | Complete                                                                       |
| `src/components/site/Cards.tsx`                                | Migrated — props are plain pre-localized strings                               |
| `src/components/site/PageHeader.tsx`                           | Migrated (`eyebrow, title, native?, intro`)                                    |
| `src/components/site/LanguageSwitcher.tsx`                     | Migrated                                                                       |
| `src/components/site/Brand.tsx`                                | Migrated                                                                       |
| `src/components/site/Navbar.tsx`                               | Migrated — driven by `NAV_ITEMS` + `t.nav.*`                                   |
| `src/components/site/Footer.tsx`                               | Migrated — driven by `FOOTER_COLUMNS` + `t.footer.*`                           |
| `src/components/site/AskShreeChat.tsx`                         | Migrated — Q&A from `t.askShree.questions[id]`                                 |
| `src/components/site/VideoCard.tsx`                            | Migrated — flat props, no `VideoItem` object                                   |
| `src/components/site/AncientScienceBridge.tsx`                 | Migrated — uses `SYNERGY_PILLARS` + `t.synergy` + `format()`                   |
| `src/components/site/SectionHeading.tsx`                       | Unchanged (pure presentational, already fine)                                  |
| Old files deleted                                              | `src/lib/i18n.tsx`, `src/lib/content.ts`, `src/hooks/use-bilingual-content.ts` |

### ❌ Remaining work

1. **`src/routes/__root.tsx`** — still imports the deleted `LanguageProvider` from `@/lib/i18n`. **This currently breaks the build.**
   - Swap to `import { I18nProvider } from "@/i18n"` and wrap with `<I18nProvider>`.
   - `NotFoundComponent` and `ErrorComponent` have hardcoded English → use `t.errors.notFound.*` and `t.errors.generic.*`. Note: these render _inside_ the provider tree, so hooks are available.

2. **All 10 route files were deleted and must be rewritten** against the new API:
   `index.tsx`, `about.tsx`, `learn.tsx`, `courses.tsx`, `knowledge.tsx`, `free-services.tsx`, `research.tsx`, `join.tsx`, `contact.tsx`, `ask-shree.tsx`

3. `MULTILINGUAL_IMPLEMENTATION.md` in the repo root documents the **old** system — delete or rewrite it.

4. Optionally add an ESLint guard against raw JSX string literals so future pages cannot regress.

---

## 5. How to rewrite a route (template)

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { CTASection, FeatureCard } from "@/components/site/Cards";
import { PILLARS, ABOUT_MILESTONES } from "@/content/registry";
import { getDictionary, seo, useI18n } from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => seo(getDictionary().about.meta),
  component: About,
});

function About() {
  const { t } = useI18n();
  const copy = t.about;

  return (
    <>
      <PageHeader {...copy.header} />

      <Section>
        <SectionHeading eyebrow={copy.approach.eyebrow} title={copy.approach.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <FeatureCard key={p.id} icon={p.icon} {...t.content.pillars[p.id]} />
          ))}
        </div>
      </Section>

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
```

### Registry constants available to routes

`GARBH_BASICS`, `TIMELINE`, `PILLARS`, `JOURNEYS`, `AUDIENCE_PILLS`, `LEARN_TOPICS`,
`FREE_SERVICES`, `VIDEOS`, `YOUTUBE_CHANNEL_URL`, `COURSES`, `KNOWLEDGE_CATEGORIES`,
`KNOWLEDGE_ARTICLES`, `RESEARCH_TOPICS`, `JOIN_ROLES`, `JOIN_PROCESS_STEPS`,
`TESTIMONIALS`, `SYNERGY_PILLARS`, `SCIENCE_STATS`, `GLOBAL_STATS`, `CLASS_SCHEDULE`,
`ABOUT_MILESTONES`, `MISSION_POINTS`, `COURSE_STEPS`, `RESEARCH_COMMITMENTS`,
`ASK_SHREE_QUESTIONS`, `ASK_SHREE_FEATURES`, `CONTACT_TOPICS`, `CONTACT_DETAIL_FIELDS`

Each exports a matching `…Id` union type.

### Component prop contracts (post-migration)

```
FeatureCard      { icon?, title, native?, body?, to?, className? }
JourneyCard      { title, body, steps: string[], to }
CourseCard       { title, format, duration, level, body }
KnowledgeCard    { category, title, readTime, body }
ResearchCard     { field, topic, summary }
TestimonialCard  { group, quote, name, role }
CTASection       { title, body?, primary: {to,label}, secondary?: {to,label}, className? }
PageHeader       { eyebrow, title, native?, intro }
SectionHeading   { eyebrow?, title, subtitle?, align?, className? }
VideoCard        { youtubeId, title, native?, description, duration?, category?, className? }
AskShreeChat     { className?, externalQuestion?: AskShreeQuestionId }
```

> `VideoCard` takes **flat props**, not a `video` object. Spread the registry entry and locale entry:
> `<VideoCard key={v.id} youtubeId={v.youtubeId} duration={v.duration} {...t.content.videos[v.id]} />`

---

## 6. Notes on the homepage (`src/routes/index.tsx`) — the largest rewrite

It was ~544 lines. Structure to reproduce, all copy under `t.home.*`:

1. **Hero** — `t.home.hero` (eyebrow, title, subtitle, native, support, imageAlt, `badges.*`, `pills[AUDIENCE_PILLS.id]` = `{label, sub}`). Image: `@/assets/hero-womb-to-world.jpg`.
2. **Science stats bar** — `SCIENCE_STATS` (has `.value`) × `t.home.stats[id]` = `{label, sub}`.
3. **Foundations + 5 Pillars** — `t.home.foundations`, `GARBH_BASICS` × `t.content.basics`, `PILLARS` × `t.content.pillars`.
4. `<AncientScienceBridge />` — self-contained, no props.
5. **Media & Learning Hub** — 4-tab state machine (`videos | free | courses | knowledge`), copy in `t.home.hub.*`.
6. **Ask Shree section** — `t.home.ai.*`, prompt list from `ASK_SHREE_QUESTIONS` → `t.askShree.questions[id].question`; clicking sets `externalQuestion` (**pass the id, not the text**) on `<AskShreeChat />`.
7. **Ecosystem hub** — 4-tab state machine (`join | global | research | testimonials`), copy in `t.home.ecosystem.*`, `t.home.global.*`, `t.home.research.*`.
8. **Final CTA** — `t.home.finalCta`.

`head: () => seo(getDictionary().home.meta)` — `home.meta` includes an extra `ogDescription`.

---

## 7. Project conventions (from `.instructions.md` — MUST follow)

- **No `switch`/`case`, no `if…else-if` ladders, no nested ternaries** — regardless of language. Use maps, records, lookup tables, and polymorphism instead.
- Use proper design patterns, data structures and OO principles.
- Document code per the language's official documentation style (TSDoc here) — but keep comments minimal and only where the code can't speak for itself.
- **No hardcoding** — configuration/env/registry files instead.
- Prefer bullet points and minimal preamble in responses; be token-aware.

---

## 8. Verification checklist

```powershell
cd 'c:\Users\pc065\Desktop\Anuj\DivyaSantanPrakalp\divya_santan_foundation'
bunx tsc --noEmit      # must be clean — this is what proves locale completeness
bun run lint
bun run dev
```

Then manually:

1. Toggle EN ↔ हिन्दी in the navbar on **every** route.
2. Confirm zero English text remains while Hindi is active (and vice versa) — including nav, mega-menu notes, footer columns, tab labels, card CTAs (“Explore”, “Start learning”), form labels, select options, chat bot messages, 404/error pages, `aria-label`s and `alt` text.
3. Reload the page — language must persist (`localStorage` → `dsf-lang`).
4. Check `<html lang>` updates to `en-IN` / `hi-IN`.

---

## 9. Adding a third language later (e.g. Marathi)

1. Add `{ code: "mr", label: "मराठी", htmlLang: "mr-IN", nativeName: "मराठी" }` to `LANGUAGES` in `src/i18n/config.ts`.
2. Create `src/i18n/locales/mr.ts` as `export const mr: Dictionary = { … }`.
3. Register it in `src/i18n/locales/index.ts`.
4. Run `bunx tsc --noEmit` — the compiler lists every string still missing. No component changes required.
