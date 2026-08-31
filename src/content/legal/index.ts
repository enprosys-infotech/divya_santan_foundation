/**
 * Registry of every legal document the site publishes.
 *
 * Routes, the footer and the "Important Notes" strip all read from here, so a new document only
 * needs a content module plus one entry below.
 */
import { Cookie, Scale, Shield, ShieldAlert } from "lucide-react";
import type { Lang } from "@/i18n";
import { cookieContent } from "./cookie";
import { grievanceContent } from "./grievance";
import { privacyContent } from "./privacy";
import { termsContent } from "./terms";
import type { LegalDocumentId, LegalSection, LocalizedLegalContent } from "./types";

export interface LegalDocumentDefinition {
  id: LegalDocumentId;
  /** Route of the standalone page for this document. */
  to: string;
  /** Icon used on buttons and modal headers. */
  icon: React.ElementType;
  /** Content for the document per language. */
  content: LocalizedLegalContent;
}

export const LEGAL_DOCUMENTS: LegalDocumentDefinition[] = [
  {
    id: "privacy",
    to: "/privacy-policy",
    icon: Shield,
    content: privacyContent,
  },
  {
    id: "terms",
    to: "/terms-and-conditions",
    icon: Scale,
    content: termsContent,
  },
  {
    id: "grievance",
    to: "/grievance-redressal",
    icon: ShieldAlert,
    content: grievanceContent,
  },
  {
    id: "cookie",
    to: "/cookie-policy",
    icon: Cookie,
    content: cookieContent,
  },
];

export const LEGAL_DOCUMENT_MAP: Record<LegalDocumentId, LegalDocumentDefinition> =
  Object.fromEntries(LEGAL_DOCUMENTS.map((doc) => [doc.id, doc])) as Record<
    LegalDocumentId,
    LegalDocumentDefinition
  >;

export type { LegalDocumentId, LegalSection } from "./types";
