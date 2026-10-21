import type { ReactNode } from "react";
import type { SlideImage } from "../../data/homeContent";
import { useCycle } from "../../hooks/useCycle";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";
import { fadeInSlide } from "../../lib/reveal";

type SplitSectionProps = {
  id: string;
  images: SlideImage[];
  /** The introduction row aligned its columns to the top. */
  alignTop?: boolean;
  children: ReactNode;
};

/** Text column + cross-fading image column ("Why Forests Matter", "About Us"). */
export function SplitSection({ id, images, alignTop = false, children }: SplitSectionProps) {
  const [textRef, textInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [imageRef, imageInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const activeImage = useCycle(images.length, 2700);

  return (
    <section id={id} className="my-2 px-[15px] py-[60px]">
      <div className="site-container text-center">
        <div
          className={cn(
            "flex flex-wrap justify-between gap-6 upto-md:flex-col",
            alignTop ? "items-start" : "items-center",
          )}
        >
          <div
            ref={textRef}
            className={cn(
              "flex h-auto flex-1 flex-col items-start p-5 upto-md:w-full upto-md:flex-none upto-md:p-2.5 upto-md:[&_p]:wrap-break-word",
              "[transition:opacity_0.25s_ease,transform_0.25s_ease]",
              fadeInSlide(textInView),
            )}
          >
            {children}
          </div>
          <div
            ref={imageRef}
            className={cn(
              "relative h-[355px] w-full flex-1 overflow-hidden p-5 upto-md:flex-none upto-md:p-2.5",
              "[transition:opacity_0.25s_ease-out,transform_0.25s_ease-out]",
              fadeInSlide(imageInView),
            )}
          >
            {images.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={cn(
                  "absolute top-0 left-0 h-auto w-[95%] max-w-full cursor-pointer rounded-[10px] object-cover transition-opacity duration-1000 ease-in-out",
                  index === activeImage ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
