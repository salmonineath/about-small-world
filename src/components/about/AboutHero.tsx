import { Link } from "react-router";
import { aosClasses, useAosReveal } from "../../hooks/useAosReveal";
import { cn } from "../../lib/cn";
import { Aos } from "../ui/Aos";

export function AboutHero() {
  const [homeLinkRef, homeLinkAnimated] = useAosReveal();

  return (
    <div className="bg-about-hero flex h-[400px] items-center justify-center text-white">
      <div className="site-container text-center">
        <Aos as="h1" animation="fade-down" className="display-4 mb-6">
          About Wildwood
        </Aos>
        <Aos as="p" animation="fade-up" className="text-[1.25rem] font-light">
          Committed to Reforesting Our Planet
        </Aos>
        <Link
          ref={homeLinkRef}
          to="/"
          className={cn(
            // Bootstrap `.btn.btn-lg.fw-medium` with the original inline colours.
            "inline-block cursor-pointer rounded-lg border border-transparent bg-forest px-4 py-2 text-center align-middle text-[1.25rem] leading-[1.5] font-medium text-white no-underline select-none hover:text-white",
            aosClasses("fade-up", homeLinkAnimated),
          )}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
