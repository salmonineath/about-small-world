import { Link } from "react-router";
import { buttonPrimary } from "../../lib/styles";
import { Reveal } from "../ui/Reveal";

export function CtaSection() {
  return (
    <section className="bg-canopy text-white">
      <div className="wrap flex flex-col gap-8 py-16 sm:py-20 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <h2 className="text-4xl font-bold sm:text-5xl">Join our mission</h2>
          <p className="mt-4 max-w-[56ch] text-lg text-white/80">
            We help communities protect and restore their forests. Every donation puts more
            native trees in the ground.
          </p>
        </Reveal>
        <Reveal step={1}>
          <Link to="/#donate" className={buttonPrimary}>
            Donate
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
