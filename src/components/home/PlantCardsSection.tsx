import type { PlantCard } from "../../data/homeContent";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";

type PlantCardsSectionProps = {
  id: string;
  title: string;
  cards: PlantCard[];
  /** Top padding as a percentage of the page width (9% trees, 5% seeds). */
  paddingTopClass: string;
};

// `.animate-on-view`: elements faded/slid in whenever they were on screen.
function onViewClasses(inView: boolean) {
  return inView
    ? "opacity-100 [transform:translateY(0)_scale(1)]"
    : "opacity-0 [transform:translateY(50px)]";
}

const SECTION_TRANSITION = "[transition:opacity_0.3s_ease-out,transform_0.15s_ease-in-out]";

// Same transition with the staggered delays from `.animate-card:nth-child(n)`.
const CARD_TRANSITIONS = [
  "[transition:opacity_0.3s_ease-out_0.05s,transform_0.15s_ease-in-out_0.05s]",
  "[transition:opacity_0.3s_ease-out_0.1s,transform_0.15s_ease-in-out_0.1s]",
  "[transition:opacity_0.3s_ease-out_0.15s,transform_0.15s_ease-in-out_0.15s]",
  "[transition:opacity_0.3s_ease-out_0.2s,transform_0.15s_ease-in-out_0.2s]",
  "[transition:opacity_0.3s_ease-out_0.25s,transform_0.15s_ease-in-out_0.25s]",
  "[transition:opacity_0.3s_ease-out_0.3s,transform_0.15s_ease-in-out_0.3s]",
];

/** Grid of image cards, used for both the "Trees" and "Seeds" sections. */
export function PlantCardsSection({ id, title, cards, paddingTopClass }: PlantCardsSectionProps) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id={id} ref={ref} className={cn(paddingTopClass, SECTION_TRANSITION, onViewClasses(inView))}>
      <div className="site-container text-center">
        <h2 className="my-12 text-center font-semibold">{title}</h2>
        <div className="-mx-3 flex flex-wrap">
          {cards.map((card, index) => (
            <PlantCardItem key={card.title} card={card} transitionClass={CARD_TRANSITIONS[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlantCardItem({ card, transitionClass }: { card: PlantCard; transitionClass?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-6 flex w-full max-w-full shrink-0 flex-col px-3 md:w-1/3",
        transitionClass,
        onViewClasses(inView),
      )}
    >
      <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[#ddd] bg-white bg-clip-border wrap-break-word hover:[transform:scale(1.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:[transition:0.5s_ease]">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="aspect-video h-auto w-full cursor-pointer rounded-t-[calc(0.375rem-1px)] object-cover"
        />
        <div className="flex flex-1 flex-col justify-between p-4 text-left">
          <h5 className="heading-h3 mb-2">{card.title}</h5>
          {card.latinName && <h5 className="text-[1.25rem]">{card.latinName}</h5>}
          <p className="mb-0">{card.description}</p>
        </div>
      </div>
    </div>
  );
}
