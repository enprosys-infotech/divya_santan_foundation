/**
 * Shared shapes for every legal document (Privacy, Cookie, Grievance, Terms).
 *
 * A single section type describes the union of every block a legal document can render, so one
 * renderer (`LegalDocumentBody`) can present all four documents inside a page or inside a modal.
 */
import type { Lang } from "@/i18n";

/** A titled paragraph nested under a numbered section. */
export interface LegalSubsection {
  heading: string;
  content: string;
}

/** Row of the "third party providers" table. */
export interface LegalProviderRow {
  purpose: string;
  providers: string;
}

/** Row of the "cookie categories" table. */
export interface LegalCategoryRow {
  name: string;
  desc: string;
}

/** Row of the "retention periods" table. */
export interface LegalRetentionRow {
  category: string;
  retention: string;
}

/** One numbered section of a legal document. Every block below the title is optional. */
export interface LegalSection {
  /** Lucide icon component rendered in the section medallion. */
  icon: React.ElementType;
  title: string;
  /** Paragraphs separated by a blank line (`\n\n`). */
  content?: string;
  listItems?: string[];
  subsections?: LegalSubsection[];
  tableRows?: LegalProviderRow[];
  categoryRows?: LegalCategoryRow[];
  retentionRows?: LegalRetentionRow[];
  tableFooter?: string;
  footerContent?: string;
  /** Optional in-app cross reference rendered at the end of the section. */
  link?: { label: string; to: string };
}

/** A legal document in one language. */
export interface LegalDocumentContent {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  preamble?: string;
  sections: LegalSection[];
}

/** The same document across every supported language. */
export type LocalizedLegalContent = Record<Lang, LegalDocumentContent>;

// /** Stable identifiers used by routes, the footer and the "Important Notes" strip. */
export type LegalDocumentId = "privacy" | "terms" | "cookie" | "grievance";
