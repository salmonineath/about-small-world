import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";

type StorySectionProps = {
  id?: string;
  title: string;
  image: { src: string; alt: string };
  /** Puts the photo on the left from tablet width up. */
  imageFirst?: boolean;
  children: ReactNode;
};

/** A heading and short text beside one photo ("Why forests matter", "About us"). */
export function StorySection({ id, title, image, imageFirst = false, children }: StorySectionProps) {
  return (
    <section id={id} className="wrap grid items-center gap-8 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
      <Reveal className={cn(imageFirst && "md:order-2")}>
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <div className="mt-6 max-w-[60ch] space-y-4 text-lg text-ink/80">{children}</div>
      </Reveal>
      {/* The photo slides in from its own side of the layout. */}
      <Reveal from={imageFirst ? "left" : "right"} step={1}>
        <div className="glare rounded-md">
          <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
      </Reveal>
    </section>
  );
}
