import { useEffect, useState } from "react";
import { supporters, type Supporter } from "../../data/aboutContent";
import { cn } from "../../lib/cn";

export function SupportersSection() {
  return (
    <div id="donor-wall" className="mx-auto w-full bg-light px-5 pt-6 pb-10 text-center font-arial">
      <h2 className="my-12 text-center font-bold">Our Supporters</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 p-4">
        {supporters.map((supporter) => (
          <SupporterCard key={supporter.name} supporter={supporter} />
        ))}
      </div>
    </div>
  );
}

type CardState = "hidden" | "in" | "out";

const SLIDE_OUT_MS = 500;

/**
 * Slides in from the left while on screen and slides out to the right when
 * it leaves, then resets (the `slide-in` / `slide-out` classes in about.js).
 */
function useSlideInOut() {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [state, setState] = useState<CardState>("hidden");

  useEffect(() => {
    if (!element) return;
    let resetTimer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(resetTimer);
        if (entry.isIntersecting) {
          setState("in");
        } else {
          setState((current) => (current === "hidden" ? current : "out"));
          resetTimer = window.setTimeout(() => setState("hidden"), SLIDE_OUT_MS);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(resetTimer);
    };
  }, [element]);

  return [setElement, state] as const;
}

const STATE_CLASSES: Record<CardState, string> = {
  hidden: "opacity-0 [transform:translateX(-50px)] [transition:all_0.5s_ease-out]",
  in: "opacity-100 [transform:translateX(0)] [transition:all_0.5s_ease-out]",
  out: "opacity-0 [transform:translateX(50px)] [transition:all_0.5s_ease-in]",
};

function SupporterCard({ supporter }: { supporter: Supporter }) {
  const [ref, state] = useSlideInOut();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-[15px] bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)] upto-md:p-[15px]",
        "before:absolute before:top-0 before:left-0 before:h-[5px] before:w-full before:origin-left before:scale-x-0 before:bg-linear-to-r before:from-pine before:to-leaf before:transition-transform before:duration-300 before:ease-[ease] before:content-['']",
        "hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:[transform:translateY(-5px)] hover:before:scale-x-100",
        STATE_CLASSES[state],
      )}
    >
      <img
        src={supporter.image}
        alt={supporter.imageAlt}
        className="relative mb-2 h-[100px] w-[100px] max-w-full rounded-[50%] [transition:transform_0.3s_ease] group-hover:[transform:scale(1.1)]"
      />
      <div className="mt-4 w-full text-left">
        <h3 className="text-center text-[1.25rem]">{supporter.name}</h3>
        <p className="text-[1rem]">{supporter.message}</p>
        <p className="text-[1rem]">Date of Donation: {supporter.date}</p>
        <p className="text-[1rem]">Location: {supporter.location}</p>
      </div>
    </div>
  );
}
