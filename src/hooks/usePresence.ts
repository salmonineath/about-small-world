import { useEffect, useState } from "react";

/**
 * Keeps an element mounted long enough to play its enter/exit CSS
 * transition. `shown` turns on one frame after mounting (so the enter
 * transition runs) and off immediately on close; `mounted` turns off
 * after `exitMs`.
 */
export function usePresence(open: boolean, exitMs: number) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setMounted(true);
    else setShown(false);
  }

  useEffect(() => {
    if (!mounted) return;
    if (open) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    const timer = window.setTimeout(() => setMounted(false), exitMs);
    return () => window.clearTimeout(timer);
  }, [open, mounted, exitMs]);

  return { mounted, shown };
}
