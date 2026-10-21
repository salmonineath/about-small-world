import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

/**
 * Replacement for the AOS (Animate On Scroll 2.3.4) library the original
 * about page loaded from a CDN with its default settings:
 * offset 120px, duration 400ms, easing "ease", once: false, mirror: false.
 */
export type AosAnimation = "fade-up" | "fade-down" | "fade-left" | "fade-right";

const AOS_OFFSET = 120;

// AOS measures position with offsetTop, which ignores CSS transforms.
function getDocumentTop(element: HTMLElement) {
  let top = 0;
  let current: HTMLElement | null = element;
  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return top;
}

/**
 * Returns a callback ref and whether the element has scrolled past AOS's trigger
 * point. Like AOS, the animation reverses when the element is scrolled back
 * below the trigger point, but not when it leaves through the top.
 */
export function useAosReveal() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!element) return;

    const update = () => {
      const triggerPoint = getDocumentTop(element) - window.innerHeight + AOS_OFFSET;
      setAnimated(window.scrollY > triggerPoint);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [element]);

  // A callback ref works with any element type (h2, p, div, router links…).
  return [setElement, animated] as const;
}

const HIDDEN_TRANSFORM: Record<AosAnimation, string> = {
  "fade-up": "[transform:translate3d(0,100px,0)]",
  "fade-down": "[transform:translate3d(0,-100px,0)]",
  "fade-left": "[transform:translate3d(100px,0,0)]",
  "fade-right": "[transform:translate3d(-100px,0,0)]",
};

// AOS only applies `data-aos-delay` while animating in.
const DELAY: Record<number, string> = {
  0: "",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
};

/**
 * Tailwind classes reproducing AOS's CSS for one animation state.
 * `withOffset: false` keeps a hidden element in place (fade only).
 */
export function aosClasses(animation: AosAnimation, animated: boolean, delayMs = 0, withOffset = true) {
  return cn(
    "transition-[opacity,transform] duration-400 ease-[ease]",
    animated
      ? cn("opacity-100 [transform:translateZ(0)]", DELAY[delayMs])
      : cn("opacity-0", withOffset ? HIDDEN_TRANSFORM[animation] : "[transform:translateY(0)]"),
  );
}
