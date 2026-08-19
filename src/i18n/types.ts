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
