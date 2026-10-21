import { useState } from "react";
import { faqItems, type FaqItem } from "../../data/homeContent";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";
import { Collapse } from "../ui/Collapse";

export function FaqSection() {
  // Like the original Bootstrap accordion, opening one answer closes the others.
  const [openId, setOpenId] = useState<string | null>(null);
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1, rootMargin: "50px", once: true });

  return (
    <section
      id="faq"
      ref={ref}
      className={cn(
        "bg-light py-12 [transition:opacity_0.8s_ease-out,transform_0.8s_ease-out]",
        inView ? "opacity-100 [transform:translateY(0)]" : "opacity-0 [transform:translateY(30px)]",
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-8">
        <h2 className="mb-12 text-center font-semibold">FAQ</h2>
        <div>
          {faqItems.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type FaqAccordionItemProps = {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
};

function FaqAccordionItem({ item, open, onToggle }: FaqAccordionItemProps) {
  const headerId = `faq${item.id}`;
  const panelId = `collapse${item.id}`;

  return (
    <div className="group/item mb-1 overflow-hidden rounded-[8px] border-2 border-solid border-border bg-white p-1 text-body [transition:transform_0.3s_ease-out] hover:[transform:translateX(5px)]">
      <h2 id={headerId} className="mb-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "relative flex w-full items-center border-none bg-transparent px-5 py-4 text-left text-[1rem] font-medium text-black [overflow-anchor:none] [transition:background-color_0.3s_ease] hover:z-2 focus:z-3 focus:border-transparent focus:shadow-none focus:outline-0",
            "after:bg-accordion-icon after:ml-auto after:h-5 after:w-5 after:shrink-0 after:bg-size-[20px] after:bg-no-repeat after:content-[''] after:[transition:transform_0.2s_ease-in-out] motion-reduce:after:transition-none",
            // Bootstrap's inner corner radii on the first / last (closed) item.
            "group-first/item:rounded-t-[calc(0.375rem-1px)] group-last/item:aria-[expanded=false]:rounded-b-[calc(0.375rem-1px)]",
            "aria-expanded:bg-[rgba(0,0,0,0.05)] aria-expanded:text-[#0a58ca] aria-expanded:after:bg-accordion-icon-active aria-expanded:after:[transform:rotate(-180deg)]",
          )}
        >
          {item.question}
        </button>
      </h2>
      <Collapse id={panelId} open={open} role="region" aria-labelledby={headerId} className="group">
        <div className="p-5 text-black opacity-0 [transform:translateY(-10px)] [transition:opacity_0.3s_ease-out,transform_0.3s_ease-out] group-data-[shown=true]:opacity-100 group-data-[shown=true]:[transform:translateY(0)]">
          {item.answer}
        </div>
      </Collapse>
    </div>
  );
}
