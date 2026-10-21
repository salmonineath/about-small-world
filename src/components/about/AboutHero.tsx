import { aboutHeroImage } from "../../data/aboutContent";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-canopy-deep text-white">
      <img src={aboutHeroImage} alt="" fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-canopy-deep via-canopy-deep/70 to-canopy-deep/30" />
      <div className="wrap pt-32 pb-14 sm:pt-44 sm:pb-20">
        <h1 className="max-w-[14ch] animate-rise text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.04em]">
          We grow forests back.
        </h1>
        <p className="mt-6 max-w-[52ch] animate-rise text-lg text-white/85 [animation-delay:120ms] sm:text-xl">
          Since 2020, Wildwood has planted native trees with local partners in 25 countries.
        </p>
      </div>
    </section>
  );
}
