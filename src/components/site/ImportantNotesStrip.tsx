import { useState } from "react";
import { LEGAL_DOCUMENTS, type LegalDocumentId } from "@/content/legal";
import { LegalDocumentModal } from "./LegalDocumentModal";
import { useI18n } from "@/i18n";

export function ImportantNotesStrip({
  currentDocumentId,
}: {
  currentDocumentId: LegalDocumentId;
}) {
  const { lang, t } = useI18n();
  const [activeModalId, setActiveModalId] = useState<LegalDocumentId | null>(null);

  // We want to show buttons for every legal document EXCEPT the one we are currently viewing
  const relatedDocuments = LEGAL_DOCUMENTS.filter((doc) => doc.id !== currentDocumentId);

  return (
    <>
      <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
          {t.common?.importantNotes || "Important Notes"}
        </h3>
        <p className="mt-2 text-sm text-ink/80">
          {lang === "hi"
            ? "कृपया हमारी अन्य महत्वपूर्ण नीतियों की भी समीक्षा करें:"
            : "Please also review our other important policies:"}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {relatedDocuments.map((doc) => {
            const content = doc.content[lang];
            const Icon = doc.icon;
            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setActiveModalId(doc.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-all hover:bg-primary/5 hover:shadow-md"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                {content.title}
              </button>
            );
          })}
        </div>
      </div>

      <LegalDocumentModal
        documentId={activeModalId}
        open={activeModalId !== null}
        onClose={() => setActiveModalId(null)}
      />
    </>
  );
}
