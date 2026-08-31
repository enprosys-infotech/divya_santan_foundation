import { useI18n } from "@/i18n";
import { Modal } from "@/components/ui/modal";
import { LEGAL_DOCUMENT_MAP, type LegalDocumentId } from "@/content/legal";
import { LegalDocumentBody } from "./LegalDocumentBody";


export function LegalDocumentModal({
  documentId,
  open,
  onClose,
}: {
  documentId: LegalDocumentId | null;
  open: boolean;
  onClose: () => void;
}) {
  const { lang, t } = useI18n();

  if (!documentId) return null;

  const doc = LEGAL_DOCUMENT_MAP[documentId];
  if (!doc) return null;

  const content = doc.content[lang];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2">
          <doc.icon className="h-5 w-5 text-primary" strokeWidth={2} />
          {content.title}
        </div>
      }
      description={content.subtitle}
      closeLabel={t.common.close || "Close"}
      className="sm:max-w-4xl"
    >
      {content.preamble && (
        <div className="mb-8 whitespace-pre-wrap rounded-2xl border border-secondary/20 bg-secondary/5 p-5 text-sm leading-relaxed text-ink/80">
          {content.preamble}
        </div>
      )}
      <LegalDocumentBody sections={content.sections} />
    </Modal>
  );
}
