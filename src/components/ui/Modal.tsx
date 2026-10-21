import { useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModalBehavior } from "../../hooks/useModalBehavior";
import { usePresence } from "../../hooks/usePresence";
import { cn } from "../../lib/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  /** `lg` matches Bootstrap's `.modal-lg` (800px wide from 992px). */
  size?: "default" | "lg";
  children: ReactNode;
};

// Bootstrap's dialog slide-in takes 0.3s; the fade/backdrop 0.15s.
const EXIT_MS = 300;

const SIZE_CLASSES: Record<NonNullable<ModalProps["size"]>, string> = {
  default: "",
  lg: "lg:max-w-[800px]",
};

/**
 * Accessible modal dialog with the look and motion of a Bootstrap 5.3 modal
 * (fade + slide down, 50% black backdrop, closes on Esc / backdrop click).
 */
export function Modal({ open, onClose, title, size = "default", children }: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const { mounted, shown } = usePresence(open, EXIT_MS);
  useModalBehavior(mounted, dialogRef, onClose);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        data-shown={shown}
        className="fixed top-0 left-0 z-1050 h-screen w-screen bg-black opacity-0 transition-opacity duration-150 ease-linear data-[shown=true]:opacity-50"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        data-shown={shown}
        className="group fixed top-0 left-0 z-1055 block h-full w-full overflow-x-hidden overflow-y-auto opacity-0 outline-0 transition-opacity duration-150 ease-linear data-[shown=true]:opacity-100"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          className={cn(
            "pointer-events-none relative m-2 w-auto -translate-y-[50px] transition-transform duration-300 ease-out group-data-[shown=true]:translate-y-0 sm:mx-auto sm:my-7 sm:max-w-[500px]",
            SIZE_CLASSES[size],
          )}
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-lg border border-black/[0.175] bg-white bg-clip-padding text-body outline-0">
            <div className="flex shrink-0 items-center justify-between rounded-t-[calc(0.5rem-1px)] border-b border-border p-4">
              <h5 id={titleId} className="mb-0 leading-[1.5]">
                {title}
              </h5>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="-my-2 -mr-2 ml-auto box-content h-[1em] w-[1em] rounded-[0.375rem] border-0 bg-transparent bg-size-[1em_auto] bg-center bg-no-repeat bg-close-icon p-2 text-black opacity-50 hover:opacity-75 focus:opacity-100 focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)] focus:outline-0"
              />
            </div>
            <div className="relative flex-auto p-4">{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
