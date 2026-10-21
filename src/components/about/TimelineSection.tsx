import { timeline, type TimelineEntry } from "../../data/aboutContent";
import { aosClasses, useAosReveal } from "../../hooks/useAosReveal";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";
import { Aos } from "../ui/Aos";

const DELAYS = [100, 200, 300, 400] as const;

export function TimelineSection() {
  return (
    <div className="site-container my-12">
      <Aos as="h2" animation="fade-up" className="mb-6 text-center">
        Our Journey
      </Aos>
      <div id="timeline" className="relative flex flex-row py-5">
        {timeline.map((entry, index) => (
          <TimelineItem key={entry.year} entry={entry} delay={DELAYS[index]} />
        ))}
      </div>
    </div>
  );
}

/**
 * Original quirk kept: about.js also gave each item a `visible` class the
 * first time it entered the viewport, which cancelled AOS's 100px offset.
 * Since that happens just before AOS triggers, items fade in without
 * sliding, and only their opacity animates afterwards.
 */
function TimelineItem({ entry, delay }: { entry: TimelineEntry; delay: (typeof DELAYS)[number] }) {
  const [aosRef, animated] = useAosReveal();
  const [seenRef, seen] = useInView<HTMLDivElement>({ once: true });

  return (
    <div
      ref={(node) => {
        aosRef(node);
        seenRef.current = node;
      }}
      className={cn(
        "mb-5 rounded-[8px] bg-white p-5 shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
        aosClasses("fade-up", animated, delay, !seen),
      )}
    >
      <h5>{entry.year}</h5>
      <p>{entry.text}</p>
    </div>
  );
}
