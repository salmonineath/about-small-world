import { impactStats } from "../../data/aboutContent";
import { Reveal } from "../ui/Reveal";

/** Headline numbers, each with its breakdown alongside. */
export function ImpactSection() {
  return (
    <section className="wrap py-16 sm:py-24">
      <Reveal>
        <h2 className="text-4xl font-bold sm:text-5xl">Our impact so far</h2>
      </Reveal>
      <dl className="mt-10 border-t border-ink/15">
        {impactStats.map((stat, index) => (
          <Reveal
            key={stat.label}
            step={index}
            className="grid gap-3 border-b border-ink/15 py-8 md:grid-cols-[minmax(0,1.3fr)_1fr] md:items-baseline md:gap-12"
          >
            <dt>
              <span className="text-[clamp(3rem,7vw,5.5rem)] leading-none block font-extrabold tracking-[-0.03em] text-canopy">
                {stat.value}
              </span>
              <span className="mt-1 block text-xl font-semibold">{stat.label}</span>
            </dt>
            <dd>
              <ul className="space-y-1 text-ink/75">
                {stat.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
