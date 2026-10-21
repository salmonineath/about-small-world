import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";
import { fadeInSlide } from "../../lib/reveal";

export function VisionSection() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="vision"
      ref={sectionRef}
      className={cn(
        "bg-kubota-forest relative flex min-h-[50vh] flex-col items-center justify-center p-8 text-white transition-opacity duration-150 ease-in-out",
        sectionInView ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-[800px] items-center">
        <div
          ref={contentRef}
          className={cn(
            "text-center [transition:opacity_0.25s_ease,transform_0.25s_ease]",
            fadeInSlide(contentInView),
          )}
        >
          <h1 className="text-white">Our Vision</h1>
          <p className="text-white">
            We envision a world where lush, thriving forests flourish across continents, nurturing
            biodiversity, combating climate change, and enhancing the well-being of all living
            beings. Through collaboration, education, and innovation, we strive to be a driving
            force behind the global effort to restore the balance between humanity and nature.
          </p>
        </div>
      </div>
    </section>
  );
}
