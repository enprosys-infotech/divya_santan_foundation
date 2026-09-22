import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n";
import { Modal } from "@/components/ui/modal";
import {
  ExternalAskShreeContext,
  type ExternalAskShreeContextValue,
} from "@/hooks/useExternalAskShree";

const ASK_SHREE_URL =
  import.meta.env["VITE_ASK_SHREE_URL"] ?? "https://divyasantanprakalp.com/askshree/";

export function ExternalAskShreeProvider({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const contextValue: ExternalAskShreeContextValue = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return (
    <ExternalAskShreeContext.Provider value={contextValue}>
      {children}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={t.cta.askShree}
        description={t.askShree.chat.role}
        closeLabel="Close Ask Shree AI"
        fullScreen
        className="sm:rounded-none"
        contentClassName="overflow-hidden overflow-y-hidden p-0 sm:px-0 sm:py-0"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex min-h-12 shrink-0 items-center justify-end border-b border-border bg-warm px-4 py-2 sm:px-6">
            <a
              href={ASK_SHREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/8"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Open full assistant
            </a>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden bg-warm">
            <iframe
              title="Ask Shree AI assistant"
              src={ASK_SHREE_URL}
              scrolling="yes"
              className="block h-full min-h-0 w-full border-0 touch-auto"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </Modal>
    </ExternalAskShreeContext.Provider>
  );
}