import { Link } from "react-router";
import { heroImage } from "../../data/homeContent";
import { buttonOnDark, buttonPrimary } from "../../lib/styles";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-canopy-deep text-white">
      <img
        src={heroImage}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-canopy-deep via-canopy-deep/55 to-canopy-deep/10" />

      <div className="wrap pt-40 pb-14 sm:pb-20">
        <h1 className="max-w-[12ch] animate-rise text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
          Help us reforest the planet.
        </h1>
        <p className="mt-6 max-w-[52ch] animate-rise text-lg text-white/85 [animation-delay:120ms] sm:text-xl">
          Forests clean our air, steady the climate and shelter countless species. Your donation
          helps Wildwood plant native trees where forests have been lost.
        </p>
        <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
          <Link to="/#donate" className={buttonPrimary}>
            Donate
          </Link>
          <Link to="/#plant" className={buttonOnDark}>
            See what we plant
          </Link>
        </div>
      </div>
    </section>
  );
}
