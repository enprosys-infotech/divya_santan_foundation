import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/SectionHeading";
import { LEGAL_DOCUMENTS, LEGAL_DOCUMENT_MAP, type LegalDocumentId } from "@/content/legal";
import { useI18n } from "@/i18n";
import { LegalDocumentBody } from "@/components/site/LegalDocumentBody";

import { Leaf, Sun, Flower2 } from "lucide-react";

export default function LegalPage() {
  const location = useLocation();
  const { lang } = useI18n();

  const doc = LEGAL_DOCUMENTS.find((d) => d.to === location.pathname);

  if (!doc) {
    return <Navigate to="/" replace />;
  }

  const content = doc.content[lang];

  useEffect(() => {
    document.title = `${content.title} | Divya Santan Foundation`;
  }, [content.title]);

  return (
    <>
      <PageHeader
        title={content.title || ""}
        subtitle={content.subtitle}
        eyebrow={content.eyebrow || "Legal"}
        intro={""}
      />

      <div className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <Leaf className="absolute -left-12 top-20 h-64 w-64 text-green" />
          <Flower2 className="absolute -right-24 bottom-40 h-96 w-96 text-primary" />
          <Sun className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 text-gold" />
        </div>

        <Section className="relative z-10 mx-auto max-w-4xl pb-16 pt-12 sm:px-4 px-0">
          {content.preamble && (
            <div className="mb-10 whitespace-pre-wrap rounded-3xl border border-secondary/20 bg-secondary/5 p-6 sm:p-8 text-base leading-relaxed text-ink/80">
              {content.preamble}
            </div>
          )}

          <LegalDocumentBody sections={content.sections} />


        </Section>
      </div>
    </>
  );
}
