/**
 * Navigation wiring — structure and destinations only. Every label, script accent and
 * description lives in the locale files under `nav.*` and `footer.columns.*`.
 */

export const NAV_ITEMS = [
  { kind: "link", id: "home", to: "/" },
  { kind: "link", id: "about", to: "/about" },
  { kind: "link", id: "garbhSanskar", to: "/garbh-sanskar" },
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
        children: [{ id: "freeServices", to: "/free-services" }],
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
      { id: "learnGarbhSanskar", to: "/learn" },
      { id: "journeys", to: "/learn" },
      { id: "askShree", to: "/ask-shree" },
    ],
  },
  {
    id: "knowledge",
    links: [
      { id: "knowledgeCentre", to: "/knowledge" },
      { id: "monthByMonth", to: "/knowledge" },
      { id: "garbhSamvad", to: "/knowledge" },
    ],
  },
  {
    id: "courses",
    links: [
      { id: "foundationCourse", to: "/courses" },
      { id: "prerakTraining", to: "/courses" },
      { id: "certification", to: "/courses" },
    ],
  },
  {
    id: "freeServices",
    links: [
      { id: "freeClasses", to: "/free-services" },
      { id: "educationalVideos", to: "/free-services" },
      { id: "publications", to: "/free-services" },
    ],
  },
  {
    id: "research",
    links: [
      { id: "researchScience", to: "/research" },
      { id: "researchTopics", to: "/research" },
      { id: "collaboration", to: "/contact" },
    ],
  },
  {
    id: "joinMission",
    links: [
      { id: "becomePrerak", to: "/join" },
      { id: "volunteer", to: "/join" },
      { id: "institutionalCsr", to: "/join" },
    ],
  },
] as const;

export type FooterColumnId = (typeof FOOTER_COLUMNS)[number]["id"];
export type FooterLinkId = (typeof FOOTER_COLUMNS)[number]["links"][number]["id"];

/** Contact details are language independent. */
export const CONTACT_DETAILS = {
  email: "contact@divyasantan.org",
  phone: "+91 00000 00000",
  socialLinks: { facebook: "#", instagram: "#", youtube: "#" },
} as const;
