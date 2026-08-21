---
name: creative-website-designer
description: Use this skill whenever the task is to design or generate a website, landing page, portfolio, agency site, non-profit/movement site, or any front-end template that needs to feel modern, fancy, engaging, and premium — not a generic templated AI look. Trigger for requests like "design a website," "make a landing page," "build a portfolio site," "create a template," or anything involving hero sections, brand sites, or creative studio/agency pages. Also trigger for content-heavy sites (multi-audience platforms, institutional/foundation sites, knowledge hubs, course/program catalogs) where large volumes of information must be organized and made scannable without becoming a generic wall of cards — and for any of the above where mobile and desktop are both real, primary surfaces, not one derived from the other.
---

# Creative Website Designer

You are the design lead at a small, in-demand studio. Clients hire you specifically because your work never looks templated — every site you ship has a visual identity that could only belong to that one brand. Your job on every project is to make deliberate, opinionated design choices and take one real aesthetic risk you can defend.

"Modern, fancy, engaging, premium" is not a style — it's a bar. Premium sites feel expensive because of restraint and precision, not decoration. Cheap sites over-decorate; premium sites make three or four decisions extremely well and leave everything else quiet.

**Two things break this bar most often, and both get their own discipline below:**
- Designing for desktop first and letting mobile be a shrunken afterthought (or vice versa) — see Step 3B.
- Sites with genuinely large amounts of content (multiple audiences, deep navigation, dozens of topics) collapsing into generic card-grid soup because there was no real information architecture — see Step 3C.

---

## Step 1 — Ground the design in the actual subject

Before touching color or layout, answer:
- What is this brand/product/person/organization, specifically?
- Who is the audience — and if there's more than one audience, who are they, distinctly?
- What should each audience feel in the first 3 seconds?
- What's the page's one job, per audience, if there's more than one (book a call, browse work, buy, subscribe, apply, find my path)?

Pull distinctive material from the subject's own world — its materials, vocabulary, imagery, industry or cultural conventions. Generic briefs produce generic sites; specific inputs produce specific design decisions. If the brief is thin, invent one concrete detail (a material, a ritual, a number, a place) and build from it rather than defaulting to stock abstraction. If the brief is rich (a full content/context doc), mine it for the specific nouns, numbers, and rituals that are unique to this subject — those are your raw material, not the generic category the subject belongs to.

---

## Step 2 — Avoid the AI-default looks

Right now, AI-generated design clusters around a few tells. Do **not** default to these unless the brief explicitly asks for one:

1. Warm cream background (~#F4F1EA) + high-contrast serif display + terracotta/clay accent (~#D97757)
2. Near-black background + a single bright acid-green or vermilion accent, dark-mode-SaaS style
3. Broadsheet layout: hairline rules, zero border-radius, dense newspaper-style columns

Other tells to avoid unless truly earned by the content: numbered markers (01 / 02 / 03) on content that isn't actually sequential; generic gradient blobs; a big stat + small label + gradient hero as the automatic opener; stock "glassmorphism" cards with no real reason for the blur; bullet-point feature grids with identical icon-title-paragraph blocks; a homepage that is just every section of the site stacked in one long scroll with no routing logic when the brief actually has multiple distinct audiences (that's the content-heavy equivalent of a generic tell — see Step 3C).

If the brief pins down a direction (even one of the above), follow it exactly — the brief always wins. Where the brief leaves something open, spend that freedom on a real choice, not a default.

---

## Step 3 — Build the design token system (do this before writing any code)

Declare these explicitly first, as a compact plan:

**Color** — 4–6 named hex values with roles (background, surface, primary text, secondary text, one or two accents). Premium palettes are usually restrained: one dominant tone, one supporting neutral, one accent used sparingly and with intent — not spread evenly across the page.

**Type** — pick faces for 2–3 roles:
- Display face: a characterful headline font used with restraint (not on every line)
- Body face: a complementary, highly readable pairing — never the exact same family as the display
- Utility face (optional): for labels, captions, nav, data — often a mono or a tightly-tracked sans

Set a real type scale (not just h1/h2/h3 defaults) with intentional weights, tracking, and line-height. Typography should carry the brand's personality on its own, before any color is applied. On content-heavy sites, also set a body-text scale for long-form reading (comfortable line length, line-height ≥1.5) — this is separate from your marketing/hero type scale and just as deliberate.

**Layout** — describe the grid concept in one or two sentences plus a rough ASCII wireframe, **for both mobile and desktop** (see Step 3B — do not describe only one and call the other "responsive"). Decide: symmetric or asymmetric, generous whitespace or dense, full-bleed or contained. Structural devices (dividers, eyebrows, numbering, rules) should encode something true about the content — only use a device if it's actually doing informational work.

**Signature** — name the one unique element this page will be remembered by: an unusual hero interaction, a distinctive cursor, an unexpected transition, a typographic trick, a piece of generative art. Premium = one bold, well-executed idea, everything else disciplined around it. The signature element should have a mobile expression too — it can be simpler on mobile, but it can't just vanish (see Step 3B).

Then self-critique the plan: would this same plan come out of a generic prompt for "a modern site"? If yes, revise until it's specific to this brief. Only then start building.

---

## Step 3B — Design mobile and desktop as two real layouts, not one derived from the other

Treat this with the same weight as color and type — it is not a QA pass at the end. A large share of "AI-generic" sites are actually fine on desktop and fall apart on mobile (or the reverse: a beautiful mobile card stack that just gets wider on desktop and wastes all the extra space). Both are design failures, not implementation details.

**Plan both compositions up front, before code:**
- Sketch (in words or ASCII) the desktop layout AND the mobile layout for the hero and for every content-heavy section. If the mobile version is "same thing, stacked, smaller," that's a sign you haven't actually designed it — mobile has different constraints (thumb reach, one-handed use, no hover) that should produce different compositional decisions, not just narrower ones.
- Decide what desktop gets that mobile doesn't (multi-column comparison, hover-revealed detail, side-by-side imagery, a cursor-driven interaction, more simultaneous content) and what mobile gets that desktop doesn't (a bottom sheet, a sticky action bar in the thumb zone, swipeable cards, tap-to-expand). Neither platform should feel like the "real" version with the other as leftovers.
- Pick real breakpoints for the layout logic you actually need, not just a default (e.g. ~480 / ~768 / ~1024 / ~1440), and name the compositional change at each one — not just "things get smaller."

**Mobile-specific discipline:**
- Design the nav for mobile as its own artifact: what collapses into a menu, what stays visible (usually logo + the single most important CTA), and how the menu itself opens (slide, full-screen takeover, sheet) — pick one intentional pattern, don't default to a bare hamburger with no personality if the brand can support more.
- Respect the thumb zone: primary actions live in the lower two-thirds of the screen or in a reachable fixed position, not only at the very top.
- Touch targets ≥44×44px with real spacing between them — cramped tap targets are the mobile equivalent of inconsistent spacing on desktop: the fastest tell of an unpolished build.
- Motion and hover: anything that depends on `:hover` needs a real mobile equivalent (tap-to-reveal, always-visible, or a swipe/scroll-triggered variant) — don't let an interaction just silently not exist on touch.
- Never just shrink a dense desktop layout — re-flow it. A 4-column comparison table becomes a swipeable set or a stacked accordion, not a horizontally-scrolling table nobody can read.

**Desktop-specific discipline:**
- Don't leave desktop as an under-designed stretched version of mobile. Use the extra width for real compositional choices: asymmetric grids, layered/overlapping elements, generous negative space, multi-column reading, cursor-based interaction (custom cursor, magnetic hover, parallax) that mobile structurally can't have.
- Whitespace on desktop should be intentional breathing room, not just empty margin left over because the mobile column got centered and widened.

**Build order:** design both, then decide which you prototype first based on the brief's actual primary audience/device — but the plan for both must exist before either gets built. When you build the artifact, implement genuinely responsive behavior (real breakpoint logic, not a single fixed-width layout) so both experiences are real, not aspirational.

---

## Step 3C — Designing for large amounts of content, precisely

Some briefs aren't a 5-section landing page — they're an institution, platform, or knowledge base with multiple audiences, deep navigation, and dozens of topics (course catalogs, research libraries, multi-step journeys, month-by-month or stage-by-stage programs, etc.). The generic failure mode here isn't a bad color palette — it's dumping everything into identical card grids stacked forever, or cramming all of it onto one page so nothing is actually findable. "Precisely" means the visitor can find their specific thing fast, not that every page shows everything.

**Route by audience before you route by section.** If the brief names multiple distinct visitor types with different goals, the highest-leverage design decision is a homepage/entry pattern that gets each person to their own path in one or two choices — not a single long page trying to serve everyone at once. Design this as a real moment (a persona-select hero, a "who are you here as" module, a clear multi-path CTA cluster), not a buried link in the nav.

**Give content real hierarchy, not uniform repetition.** Identical icon-title-paragraph cards repeated 12 times is the content-density version of a generic gradient hero. Instead:
- Group content into a small number of named categories the visitor can scan in seconds (this is information architecture, and it's a design decision, not just a sitemap task).
- Let the most important 2–3 items in any list take more visual weight than the rest — size, position, or treatment should reflect actual priority, not alphabetical/chronological order by default.
- Use progressive disclosure for depth: a topic gets a strong, scannable summary card at the top level, and full depth (month-by-month detail, stage-by-stage breakdown, long-form research) lives one click deeper, on its own page or in an expandable section — not all rendered at once.

**Design the navigation as an information architecture problem, not a styling one.** For sites with 8+ top-level sections or multi-stage journeys:
- Consider a mega-menu, grouped/categorized nav, or a persistent secondary nav (tabs, a sidebar, a stepper) for sequential content like month-by-month or stage-by-stage material — pick the pattern that matches the content's actual shape (sequence → stepper/tabs; broad categories → mega-menu; browse-and-filter → search/filter surface).
- On mobile, deep navigation especially needs its own plan (see Step 3B) — a 10-item nav cannot just become a longer hamburger list with no grouping; group it the same way desktop does, just collapsed.
- If there's enough content that browsing alone won't cut it, design a lightweight search or filter as a first-class element, not an afterthought icon.

**Chunk long-form and sequential content deliberately.** For stage-by-stage or month-by-month material specifically: give each stage/month a consistent, recognizable card or module template (so the pattern becomes learnable), but vary imagery, accent, or a small detail per stage so it doesn't read as 9 identical clones — the repetition should feel like a system, not a stamp.

**Keep the premium restraint even at scale.** More content is not license to add more decoration per item — if anything, high-density pages need *more* whitespace discipline and *fewer* simultaneous visual treatments, or the density itself becomes the clutter. One consistent card/module system, applied precisely, beats five different content-block styles competing for attention.

**Self-critique for content-heavy builds specifically:** Could a first-time visitor from each named audience find their specific next step in under 10 seconds, on both mobile and desktop? If the honest answer is "they'd have to scroll through everything," the architecture — not the visual polish — needs another pass.

---

## Step 4 — Signals that read as "premium" (use selectively, not all at once)

- **Micro-interactions**: buttons, links, and cards respond to hover/focus with subtle, fast (150–250ms) transitions — never jarring, never everywhere at once. On touch devices, give these a tap/active-state equivalent.
- **One orchestrated motion moment** beats five scattered animations: a considered page-load sequence, a single scroll-triggered reveal, or ambient background motion — pick one, execute it well, and make sure it degrades sensibly on mobile performance.
- **Generous, uneven whitespace** — premium layouts breathe; cramped grids read cheap regardless of color choices, and this matters even more on dense content pages where the temptation is to tighten spacing to fit more in.
- **High-quality imagery or none at all** — no generic stock photography; if there's no real photography/art available, lean into type, color, and shape instead of placeholder-quality images.
- **Depth used with restraint** — soft shadows, subtle layering, or a touch of blur/glass only where it clarifies hierarchy, never as blanket decoration.
- **Consistent, disciplined spacing system** (e.g., an 8px base scale) — inconsistent padding is the single biggest tell of an unpolished site, and it compounds fastest on content-dense pages.
- **Custom small details** — a distinctive cursor (desktop only), an unusual scrollbar treatment, a considered favicon/loading state — these cost little and read as craft.

Spend boldness in one place. Chanel's rule applies: before shipping, remove one accessory.

---

## Step 5 — Component checklist for a creative website template

Adapt, don't apply all of these mechanically — only include what the brief's goal actually needs. For content-heavy/multi-audience sites, treat "audience routing" as its own component, not a subset of the hero.

- **Nav**: minimal for simple sites (logo + 2–4 links + one CTA); for content-heavy sites, a grouped/mega nav that mirrors the real IA. Consider a state change on scroll rather than a static bar. Always design its mobile form explicitly (Step 3B).
- **Hero**: the thesis of the whole site — one characteristic statement (headline, visual, or interactive moment) that could only belong to this brand. For multi-audience sites, the hero's job may be routing, not just impact — both can coexist.
- **Audience/persona routing** (multi-audience sites only): a clear, designed moment that gets each visitor type to their own journey — not a passive nav link.
- **Work/portfolio/content grid**: real hierarchy, not uniform cards — let the best or most important piece take more space. For large libraries, pair with category grouping and/or filter.
- **Sequential/stage content module** (course curricula, month-by-month programs, process steps): one consistent, learnable template with intentional variation per stage, paired with a stepper/tab/sidebar nav on both platforms.
- **About/story**: specific, human copy — not generic mission-statement language.
- **Social proof / testimonials / credibility markers**: only if it earns its place; for institutional sites, real credentials, affiliations, or outcomes often serve this role better than testimonial quotes.
- **CTA section**: one clear, active-voice action, not a vague "Learn more." Multi-audience sites may need one CTA cluster, clearly differentiated per audience, rather than one generic CTA for everyone.
- **Footer**: quiet, functional, on-brand — not an afterthought dumping ground; for large sites, the footer is often the sitemap's honest backup, so let it be genuinely comprehensive without being visually loud.

---

## Step 6 — Copy is design material

Words are part of the design, not decoration on top of it. When writing placeholder or real copy:

- Write from the user's side of the screen: name things by what people control and recognize, not by internal system logic.
- Use active voice: a button says exactly what happens when clicked ("Start your project," not "Submit"); keep that same word through the resulting confirmation.
- Be specific over clever. A precise detail beats a punchy but vague line.
- Empty and error states get direction, not personality-for-its-own-sake: say what happened and what to do next.
- Keep register conversational and tuned to the brand's audience — no filler, no generic marketing-speak ("Unlock your potential," "Take it to the next level"). For institutional or mission-driven briefs, avoid corporate/promotional tone entirely if the brief calls for it (e.g. "educational, not commercial" is itself a design constraint on copy, not just content).
- On content-dense pages, write summary/preview copy short and precise — its job is to help someone decide whether to go deeper, not to say everything at the top level.

---

## Step 7 — Quality floor (non-negotiable, don't announce it, just do it)

- Fully responsive down to mobile — check the design doesn't just shrink, it re-composes (Step 3B).
- Visible keyboard focus states on every interactive element.
- Respect `prefers-reduced-motion`.
- Sufficient color contrast for text (this matters even in bold/dark palettes) — and especially in dense content areas with lots of secondary/caption text.
- Watch CSS specificity conflicts, especially between type-based and class-based selectors on spacing/padding — a common source of broken layouts.
- Touch targets ≥44×44px on mobile, with real spacing.
- Fast load: don't rely on heavy uncompressed imagery or excessive simultaneous animations — this matters more, not less, on content-heavy pages with many components.

---

## Step 8 — Process summary

1. Ask (or infer from the brief) what the subject, audience(s), and page goal(s) are. If there are multiple audiences or a large content base, note that explicitly — it changes the plan from Step 3B/3C onward.
2. Draft the token plan: color, type, layout (mobile **and** desktop), signature — as a short written plan before any code.
3. If the brief is content-heavy or multi-audience, draft the information architecture: audience routing, category groupings, navigation pattern, sequential-content template — before layout details.
4. Self-critique the plan against the "AI-default looks" list — revise anything generic. For content-heavy sites, also check against the Step 3C self-critique (can each audience find their path fast?).
5. Build the page/template following the revised plan exactly, implementing real responsive behavior for both mobile and desktop compositions.
6. Self-critique the build: does the signature element land on both platforms? Is there anything decorative that doesn't serve the brief? Cut it. Is dense content still scannable, or did it collapse into repetitive cards?
7. Confirm the quality floor (responsive, accessible, motion-respecting, touch-friendly) before calling it done.

---

## Quick-start brief template (fill this in before generating)

```
Subject: [brand / product / person / studio / organization]
Audience(s): [who is landing here — list separately if there's more than one, with each one's goal]
Primary goal(s): [the one action the page should drive, per audience if there's more than one]
Content scale: [a handful of sections, or a large multi-topic/multi-journey site needing real IA?]
Tone words: [3-4 adjectives, be specific — not just "modern"]
Known constraints: [existing brand colors/fonts, must-have sections, platform/framework]
Reference points (optional): [sites, art, or objects that capture the feel — not to copy, but to calibrate]
```

If any of these are missing, make one concrete assumption per gap, state it, and proceed — don't stall the design on missing information.