import type { ReactNode } from "react";
import { aosClasses, useAosReveal, type AosAnimation } from "../../hooks/useAosReveal";
import { cn } from "../../lib/cn";

type AosProps = {
  as?: "div" | "h1" | "h2" | "p";
  animation: AosAnimation;
  /** Same values the original used for `data-aos-delay`. */
  delay?: 0 | 100 | 200 | 300 | 400;
  className?: string;
  children: ReactNode;
};

/** Element that animates in on scroll, like the original `data-aos` markup. */
export function Aos({ as: Tag = "div", animation, delay = 0, className, children }: AosProps) {
  const [ref, animated] = useAosReveal();
  return (
    <Tag ref={ref} className={cn(className, aosClasses(animation, animated, delay))}>
      {children}
    </Tag>
  );
}
