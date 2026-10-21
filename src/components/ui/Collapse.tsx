import {
  useLayoutEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { cn } from "../../lib/cn";

type Phase = "hidden" | "showing" | "shown" | "hiding";

type CollapseProps = ComponentPropsWithoutRef<"div"> & {
  open: boolean;
};

// Matches Bootstrap's `.collapsing { transition: height 0.35s ease }`.
const TRANSITION_MS = 350;

const ANIMATING =
  "h-0 overflow-hidden transition-[height] duration-350 ease-[ease] motion-reduce:transition-none";

const PHASE_CLASSES: Record<Phase, string> = {
  hidden: "hidden",
  showing: ANIMATING,
  shown: "",
  hiding: ANIMATING,
};

/**
 * Height-animated show/hide panel, replacing Bootstrap's collapse plugin
 * (used by the mobile navbar and the FAQ accordion).
 *
 * Exposes `data-shown="true"` once fully expanded, mirroring Bootstrap's
 * `.collapse.show` class so children can fade in afterwards.
 */
export function Collapse({ open, className, children, ...rest }: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(open ? "shown" : "hidden");
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    setPhase(open ? "showing" : "hiding");
  }

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || (phase !== "showing" && phase !== "hiding")) return;
    return animateHeight(element, phase === "showing", () =>
      setPhase(phase === "showing" ? "shown" : "hidden"),
    );
  }, [phase]);

  return (
    <div
      ref={ref}
      data-shown={phase === "shown"}
      className={cn(className, PHASE_CLASSES[phase])}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Animates between 0 and the content height, as Bootstrap does. Returns a cleanup. */
function animateHeight(element: HTMLElement, expanding: boolean, onDone: () => void) {
  const fullHeight = `${element.scrollHeight}px`;
  element.style.height = expanding ? "0px" : fullHeight;
  void element.offsetHeight; // force a reflow so the next height change animates
  element.style.height = expanding ? fullHeight : "0px";

  // A timer (not transitionend) so reduced-motion users are not left stuck.
  const timer = window.setTimeout(() => {
    element.style.height = "";
    onDone();
  }, TRANSITION_MS);
  return () => window.clearTimeout(timer);
}
