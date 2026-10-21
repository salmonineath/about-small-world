import { useEffect, useState } from "react";
import { heroSlideImages } from "../../data/homeContent";
import { cn } from "../../lib/cn";
import { fadeInSlide } from "../../lib/reveal";
import { useInView } from "../../hooks/useInView";

// The original markup had three slide layers but only two images.
const SLIDE_LAYER_COUNT = 3;

export function HeroSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });
  // No slide is active until the first 2s tick, as in the original script.
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  useEffect(() => {
    let next = 0;
    const timer = window.setInterval(() => {
      setActiveSlide(next);
      next = (next + 1) % heroSlideImages.length;
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className={cn(
        "bg-home-hero flex h-screen flex-col items-center justify-center text-center text-white",
        "[transition:opacity_0.25s_ease-out,transform_0.25s_ease-out]",
        fadeInSlide(inView),
      )}
    >
      {/*
        Cross-fading background layers (main.js). They show over the
        section's own background because the section's `transform` makes it
        the layers' containing block and stacking context. The second image
        URL no longer resolves, so that slide shows only the dark overlay.
      */}
      <div className="absolute top-0 left-0 -z-1 h-full w-full" aria-hidden="true">
        {Array.from({ length: SLIDE_LAYER_COUNT }, (_, index) => (
          <div
            key={index}
            className={cn(
              "absolute top-0 left-0 h-full w-full bg-cover bg-center transition-opacity duration-500 ease-in-out",
              activeSlide === index ? "opacity-100" : "opacity-0",
            )}
            style={
              heroSlideImages[index]
                ? {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${heroSlideImages[index]}')`,
                  }
                : undefined
            }
          />
        ))}
      </div>
      <div className="site-container z-1 text-center">
        <h1 className="text-white">Help Us Reforest the Planet</h1>
        <p className="text-white">
          Forests are vital for providing clean air, regulating the climate, and supporting small
          world company donating to protect them helps combat climate change and preserve
          essential ecosystems for future generations.
        </p>
        <a
          href="#donate"
          className="inline-block cursor-pointer rounded-[5px] border-0 bg-forest px-5 py-2.5 text-center align-middle text-[18px] leading-[1.5] font-medium text-white no-underline select-none [transition:background-color_0.3s,transform_0.2s] hover:bg-forest-hover hover:text-white focus-visible:shadow-[0_0_0_0.25rem_rgba(217,164,6,0.5)] active:[transform:scale(0.95)] active:bg-[#ffcd39]"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
