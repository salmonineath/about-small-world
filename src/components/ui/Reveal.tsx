import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";

const FROM: Record<"up" | "left" | "right", string> = {
  up: "0 24px",
  left: "-32px 0",
  right: "32px 0",
};

type RevealProps = {
  as?: "div" | "li";
  /** Direction the element slides in from. */
  from?: keyof typeof FROM;
  /** Position in a staggered group; each step waits 80ms longer. */
  step?: number;
  className?: string;
  children: ReactNode;
};

/** Slides its content into place the first time it scrolls into view. */
export function Reveal({ as: Tag = "div", from = "up", step = 0, className, children }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ once: true, threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      data-shown={inView || undefined}
      className={cn("reveal", className)}
      style={{ "--reveal-from": FROM[from], "--reveal-step": step } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
