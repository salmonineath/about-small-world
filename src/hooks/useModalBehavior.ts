import { useEffect, useEffectEvent, type RefObject } from "react";

/**
 * While `active`: locks page scrolling like Bootstrap's `body.modal-open`
 * (compensating for the scrollbar width), moves focus into the dialog,
 * closes on Escape, and restores focus afterwards.
 */
export function useModalBehavior(
  active: boolean,
  dialogRef: RefObject<HTMLElement | null>,
  onClose: () => void,
) {
  // Always calls the latest `onClose` without re-running the effect.
  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
  });

  useEffect(() => {
    if (!active) return;
    const { body } = document;
    const previousStyle = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => handleKeyDown(event);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.overflow = previousStyle.overflow;
      body.style.paddingRight = previousStyle.paddingRight;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, dialogRef]);
}
