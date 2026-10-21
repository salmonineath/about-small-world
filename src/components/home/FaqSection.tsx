import { useState } from "react";
import { faqItems, type FaqItem } from "../../data/homeContent";
import { Collapse } from "../ui/Collapse";
import { Reveal } from "../ui/Reveal";

export function FaqSection() {
  // Opening one answer closes the others.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="border-t border-ink/10">
      <div className="wrap grid gap-8 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <Reveal>
          <h2 className="text-4xl font-bold sm:text-5xl">Questions about trees</h2>
        </Reveal>
        <div className="border-t border-ink/15">
          {faqItems.map((item, index) => (
            <Reveal key={item.id} step={index + 1}>
              <FaqEntry
                item={item}
                open={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqEntry({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  const buttonId = `faq-${item.id}`;
  const panelId = `faq-${item.id}-answer`;

  return (
    <div className="border-b border-ink/15">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold tracking-normal hover:text-moss"
        >
          {item.question}
          <svg
            viewBox="0 0 20 20"
            className="size-5 shrink-0 transition-transform duration-200 group-aria-expanded:rotate-45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M10 3v14M3 10h14" />
          </svg>
        </button>
      </h3>
      <Collapse id={panelId} open={open} role="region" aria-labelledby={buttonId}>
        <p className="max-w-[62ch] pb-6 text-ink/80">{item.answer}</p>
      </Collapse>
    </div>
  );
}
