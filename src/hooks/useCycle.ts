import { useEffect, useState } from "react";

/** Returns an index that advances through `length` items every `intervalMs`. */
export function useCycle(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [length, intervalMs]);

  return index;
}
