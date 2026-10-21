import { useLayoutEffect, useState, type RefObject } from "react";

type Rect = { top: number; left: number; width: number; height: number };

/**
 * Position of the selected element among `refs` (relative to its positioned
 * parent), for markers that slide to the current choice. `resetKey` re-measures
 * when the set of elements changes.
 */
export function useSelectedRect(
  refs: RefObject<Array<HTMLElement | null>>,
  selected: number,
  resetKey: string,
): Rect {
  const [rect, setRect] = useState<Rect>({ top: 0, left: 0, width: 0, height: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const node = refs.current[selected];
      if (node) {
        setRect({ top: node.offsetTop, left: node.offsetLeft, width: node.offsetWidth, height: node.offsetHeight });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [refs, selected, resetKey]);

  return rect;
}
