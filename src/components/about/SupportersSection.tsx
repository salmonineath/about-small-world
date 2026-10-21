import { supporters } from "../../data/aboutContent";
import { Reveal } from "../ui/Reveal";

export function SupportersSection() {
  return (
    <section id="supporters" className="bg-lichen">
      <div className="wrap py-16 sm:py-24">
        <Reveal>
          <h2 className="text-4xl font-bold sm:text-5xl">Notes from our supporters</h2>
        </Reveal>
        <ul className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {supporters.map((supporter, index) => (
            <Reveal as="li" key={supporter.name} step={index + 1}>
              <figure className="border-l-2 border-canopy pl-6">
                <blockquote className="text-xl leading-snug font-medium">
                  “{supporter.message}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img
                    src={supporter.image}
                    alt={supporter.imageAlt}
                    loading="lazy"
                    className="size-11 rounded-full object-cover"
                  />
                  <span className="text-sm">
                    <span className="block font-semibold">{supporter.name}</span>
                    <span className="text-ink/70">
                      {supporter.location}, donated {supporter.date}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
