import { timeline } from "../../data/aboutContent";
import { Reveal } from "../ui/Reveal";

export function TimelineSection() {
  return (
    <section className="wrap py-16 sm:py-24">
      <Reveal>
        <h2 className="text-4xl font-bold sm:text-5xl">How we got here</h2>
      </Reveal>
      <ol className="mt-10 grid gap-8 border-l-2 border-canopy/20 pl-6 md:grid-cols-4 md:gap-6 md:border-t-2 md:border-l-0 md:pt-8 md:pl-0">
        {timeline.map((entry, index) => (
          <Reveal as="li" key={entry.year} from="left" step={index + 1} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-canopy ring-4 ring-paper md:-top-[39px] md:left-0"
            />
            <p className="text-3xl font-extrabold tracking-tight text-canopy tabular-nums">{entry.year}</p>
            <p className="mt-2 max-w-[28ch] text-ink/80">{entry.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
