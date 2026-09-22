/**
 * Shapes shared by every locale file. They exist so that `en.ts` and `hi.ts` describe the
 * same records and so a missing/extra field is a compile error rather than a runtime gap.
 */

/** A card with a heading and a paragraph. */
export interface TitledCopy {
  title: string;
  body: string;
}

/**
 * A card that may also render a script accent under its title.
 * English pages show the Devanagari original; the Hindi locale leaves `native` empty.
 */
export interface AccentedCopy extends TitledCopy {
  native: string;
}

export interface JourneyCopy extends AccentedCopy {
  steps: string[];
}

export interface CourseCopy extends AccentedCopy {
  format: string;
  duration: string;
  level: string;
}

export interface ArticleCopy {
  title: string;
  body: string;
  readTime: string;
}

/** A stage or phase in a step-by-step Garbh Sanskar guide. */
export interface GuideStageCopy {
  label: string;
  title: string;
  subtitle: string;
  body: string;
  steps: string[];
}

/** A question-and-answer pair in the Q\u0026A section. */
export interface QACopy {
  question: string;
  answer: string;
  tag: string;
}

/** A peer-reviewed scientific reference with an editorial summary. */
export interface ScientificRefCopy {
  field: string;
  citation: string;
  summary: string;
  year: string;
}

/** A book or supporting document in the Knowledge Centre resource library. */
export interface ResourceCopy {
  title: string;
  body: string;
  meta: string;
}

export interface ResearchTopicCopy {
  field: string;
  topic: string;
  summary: string;
}

export interface TestimonialCopy {
  group: string;
  quote: string;
  name: string;
  role: string;
}

export interface CompletedEventCopy {
  category: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  details: string;
  photoAlts: string[];
}

export interface VideoCopy {
  title: string;
  native: string;
  description: string;
  category: string;
}

export interface InstaReelCopy {
  title: string;
  native: string;
  description: string;
  category: string;
}

export interface SuccessStoryCardContent {
  name: string;
  location: string;
  category: string;
  photo: string;
  quote: string;
  journey: string;
  outcome: string;
}

export interface SynergyCopy {
  category: string;
  ancientTitle: string;
  ancientDesc: string;
  scienceTitle: string;
  scienceDesc: string;
  statLabel: string;
  statValue: string;
  tags: string[];
}

export interface StatCopy {
  label: string;
  sub: string;
}

export interface ScheduleCopy {
  when: string;
  what: string;
  meta: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface NavLinkCopy {
  label: string;
  native: string;
  note: string;
}
