/**
 * Navigation wiring — structure and destinations only. Every label, script accent and
 * description lives in the locale files under `nav.*` and `footer.columns.*`.
 */

export const NAV_ITEMS = [
  { kind: "link", id: "home", to: "/" },
  { kind: "link", id: "about", to: "/about" },
  {
    kind: "mega",
    id: "explore",
    groups: [
      {
        id: "knowledge",
        children: [{ id: "knowledgeCentre", to: "/knowledge" }],
      },
      {
        id: "training",
        children: [{ id: "courses", to: "/courses" }],
      },
      {
        id: "freeServices",
        children: [{ id: "freeServices", to: "/available-services" }],
      },
      {
        id: "research",
        children: [{ id: "researchScience", to: "/research" }],
      },
      {
        id: "joinMission",
        children: [{ id: "joinMission", to: "/join" }],
      },
    ],
  },
  { kind: "link", id: "contact", to: "/contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
export type NavLinkId = Extract<NavItem, { kind: "link" }>["id"];
export type NavMegaId = Extract<NavItem, { kind: "mega" }>["id"];
export type NavGroupId = Extract<NavItem, { kind: "mega" }>["groups"][number]["id"];
export type NavChildId = Extract<
  NavItem,
  { kind: "mega" }
>["groups"][number]["children"][number]["id"];

export const FOOTER_COLUMNS = [
  {
    id: "learn",
    links: [
      { id: "pregnantMother", to: "/journeys/pregnant-woman" },
      { id: "planningPregnancy", to: "/journeys/planning-pregnancy" },
    ],
  },
  {
    id: "knowledge",
    links: [
      { id: "scienceOfGarbhSanskar", to: "/knowledge?tab=scienceOfGarbhSanskar" },
      { id: "articlesAndBlogs", to: "/knowledge?tab=articles" },
      { id: "stepByStepGuides", to: "/knowledge?tab=guides" },
      { id: "qna", to: "/knowledge?tab=qa" },
      { id: "booksAndResources", to: "/knowledge?tab=resources" },
      { id: "scientificRef", to: "/knowledge?tab=scientific" },
    ],
  },
  {
    id: "courses",
    links: [
      { id: "foundationCourse", to: "/courses" },
    ],
  },
  {
    id: "joinMission",
    links: [
      { id: "becomeVolunteer", to: "/join/volunteer" },
      { id: "institutionalCollab", to: "/join/institutional-collaboration" },
      { id: "consultant", to: "/join/consultant" },
      { id: "researcher", to: "/join/academic-researcher" },
    ],
  },
] as const;

export type FooterColumnId = (typeof FOOTER_COLUMNS)[number]["id"];
export type FooterLinkId = (typeof FOOTER_COLUMNS)[number]["links"][number]["id"];

/** Contact details are language independent. */
export const CONTACT_DETAILS = {
  email: "santanprakalp@gmail.com",
  phone: "+91 94257 93409",
  address: "2/1, R.S. Bhandari Marg, Veer Savarkar Chauraha (Janjeerwala), Indore (M.P.) 452001",
  whatsapp: "https://wa.me/919425793409",
  app: {
    android: "https://play.google.com/store",
    ios: "https://apps.apple.com",
  },
  socialLinks: { facebook: "#", instagram: "#", youtube: "#" },
} as const;
