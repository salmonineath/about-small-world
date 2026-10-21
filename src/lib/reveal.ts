/*
 * Shared scroll-reveal states from the original animation.css.
 *
 * `.animate-on-scroll` elements got a `fade-in` class while on screen, which
 * set them visible AND replayed the `fadeInSlide` keyframes. `transform` is
 * written as an arbitrary property (not Tailwind's `translate-*`) so the
 * keyframes and the transition act on the same property, as they did before.
 */
export function fadeInSlide(inView: boolean) {
  return inView
    ? "animate-fade-in-slide opacity-100 [transform:translateY(0)]"
    : "opacity-0 [transform:translateY(20px)]";
}
