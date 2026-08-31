import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Elements that can hold focus inside the dialog, used for the focus trap. */
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Accessible name, rendered in the sticky header. */
  title: ReactNode;
  /** Optional supporting line under the title. */
  description?: ReactNode;
  /** Optional actions rendered in the sticky footer. */
  footer?: ReactNode;
  closeLabel: string;
  children: ReactNode;
  className?: string;
}

/**
 * Accessible, responsive modal dialog rendered in a portal.
 *
 * Traps focus, restores it on close, closes on `Escape` or backdrop click, and locks background
 * scrolling while open. Sized as a bottom sheet on phones and a centred panel from `sm` upwards.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  footer,
  closeLabel,
  children,
  className,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const trapFocus = useCallback((event: KeyboardEvent) => {
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    if (focusable.length === 0) return;

    const first = focusable[0]!;
    const last = focusable[focusable.length - 1]!;
    const edge = event.shiftKey ? first : last;
    const wrapTo = event.shiftKey ? last : first;
    if (document.activeElement !== edge) return;

    event.preventDefault();
    wrapTo.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const keyHandlers: Record<string, (event: KeyboardEvent) => void> = {
      Escape: () => onClose(),
      Tab: trapFocus,
    };
    const onKeyDown = (event: KeyboardEvent) => keyHandlers[event.key]?.(event);
    document.addEventListener("keydown", onKeyDown);

    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      restoreFocusRef.current?.focus();
    };
  }, [open, onClose, trapFocus]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        className={cn(
          "flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-background shadow-[var(--shadow-lift)]",
          "sm:max-h-[88dvh] sm:max-w-3xl sm:rounded-3xl",
          className,
        )}
      >
        <header className="flex items-start gap-3 border-b border-border bg-background/95 px-5 py-4 sm:px-7 sm:py-5">
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-lg font-bold leading-snug text-primary sm:text-xl">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-7 sm:py-6">
          {children}
        </div>

        {footer && (
          <footer className="flex flex-wrap items-center justify-end gap-3 border-t border-border bg-warm px-5 py-4 sm:px-7">
            {footer}
          </footer>
        )}
      </div>
    </div>,
    document.body,
  );
}
