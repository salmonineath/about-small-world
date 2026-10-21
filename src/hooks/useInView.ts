import { useEffect, useRef, useState } from "react";

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
  /** Stop observing after the element has been seen once. */
  once?: boolean;
};

/**
 * Tracks whether an element intersects the viewport.
 * Replaces the IntersectionObserver / scroll-listener code from the original
 * main.js and about.js that toggled `visible`, `fade-in` and `slide-in` classes.
 */
export function useInView<T extends Element>({
  threshold = 0,
  rootMargin = "0px",
  once = false,
}: InViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView] as const;
}
