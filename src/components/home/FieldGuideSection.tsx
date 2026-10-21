import { useRef, useState } from "react";
import { seeds, trees, type Species } from "../../data/homeContent";
import { useSelectedRect } from "../../hooks/useSelectedRect";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";

const collections = {
  trees: { label: "Trees", intro: "How trees fight climate change", items: trees },
  seeds: { label: "Seeds", intro: "How seeds restore the land", items: seeds },
} satisfies Record<string, { label: string; intro: string; items: Species[] }>;

type CollectionKey = keyof typeof collections;
const collectionKeys = Object.keys(collections) as CollectionKey[];

/**
 * "What we plant": pick Trees or Seeds, then a species from the index to see
 * its photo and notes. Replaces the two long grids of identical cards.
 */
export function FieldGuideSection() {
  const [collectionKey, setCollectionKey] = useState<CollectionKey>("trees");
  const [selected, setSelected] = useState(0);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const collection = collections[collectionKey];
  const toggleRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const marker = useSelectedRect(itemRefs, selected, collectionKey);
  const pill = useSelectedRect(toggleRefs, collectionKeys.indexOf(collectionKey), collectionKey);

  function selectCollection(key: CollectionKey) {
    setCollectionKey(key);
    setSelected(0);
  }

  return (
    <section id="plant" className="bg-lichen py-16 sm:py-24">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">What we plant</h2>
            <p className="mt-3 text-lg text-ink/75">{collection.intro}</p>
          </div>
          <div role="group" aria-label="Show" className="relative flex rounded-full bg-paper p-1">
            {/* One pill slides behind the buttons to the selected option. */}
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 left-0 rounded-full bg-canopy transition-[translate,width] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ translate: `${pill.left}px 0`, width: pill.width }}
            />
            {collectionKeys.map((key, index) => (
              <button
                key={key}
                ref={(node) => {
                  toggleRefs.current[index] = node;
                }}
                type="button"
                aria-pressed={key === collectionKey}
                onClick={() => selectCollection(key)}
                className="relative rounded-full px-5 py-2 font-semibold text-ink/70 transition-colors duration-300 hover:text-ink aria-pressed:text-white"
              >
                {collections[key].label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal step={1} className="mt-10 grid gap-8 md:grid-cols-[15rem_1fr] md:gap-12">
          {/* min-w-0 lets the phone chip row scroll instead of widening the page. */}
          <div className="relative min-w-0">
            {/* Slides between species on wide screens instead of jumping. */}
            <span
              aria-hidden="true"
              className="absolute left-0 hidden w-0.5 bg-canopy transition-[top,height] duration-300 ease-out md:block"
              style={{ top: marker.top, height: marker.height }}
            />
            <ul
              aria-label={`${collection.label} in this guide`}
              className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:border-l-2 md:border-ink/10 md:p-0"
            >
              {collection.items.map((item, index) => (
                <li key={item.title} className="shrink-0">
                  <button
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    type="button"
                    aria-current={index === selected ? "true" : undefined}
                    onClick={() => setSelected(index)}
                    className={cn(
                      "w-full rounded-full border border-ink/15 bg-paper px-4 py-2 text-left whitespace-nowrap transition-colors duration-200 hover:border-ink/40",
                      "md:rounded-none md:border-0 md:bg-transparent md:py-3 md:pl-5 md:text-ink/60 md:hover:text-ink",
                      "aria-[current=true]:border-canopy aria-[current=true]:bg-canopy aria-[current=true]:text-white md:aria-[current=true]:bg-transparent md:aria-[current=true]:text-ink",
                    )}
                  >
                    <span className="font-semibold">{item.title}</span>
                    {item.latinName && (
                      <span className="ml-2 font-serif text-[1.05em] italic opacity-75 md:ml-0 md:block">
                        {item.latinName}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/*
            Every species is rendered into the same grid cell and only the
            selected one is visible, so switching crossfades (old fades out
            while new fades in), photos are already loaded, and the height
            stays fixed to the tallest entry.
          */}
          <div key={collectionKey} className="grid animate-plate-in gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
            <div className="glare grid self-start rounded-md bg-paper">
              {collection.items.map((item, index) => (
                <img
                  key={item.title}
                  src={item.image}
                  alt={index === selected ? item.imageAlt : ""}
                  aria-hidden={index !== selected}
                  className={cn(
                    "col-start-1 row-start-1 aspect-[4/3] w-full object-cover transition-[opacity,scale] duration-500 ease-out",
                    index === selected ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                  )}
                />
              ))}
            </div>
            <div className="grid self-center">
              {collection.items.map((item, index) => (
                <article
                  key={item.title}
                  inert={index !== selected}
                  className={cn(
                    "col-start-1 row-start-1 transition-[opacity,translate] ease-out",
                    index === selected
                      ? "translate-y-0 opacity-100 delay-100 duration-300"
                      : "translate-y-2 opacity-0 duration-150",
                  )}
                >
                  <h3 className="text-3xl font-bold sm:text-4xl">
                    {item.title}
                    {collectionKey === "seeds" && " seed"}
                  </h3>
                  {item.latinName && (
                    <p className="mt-1 font-serif text-2xl text-moss italic">{item.latinName}</p>
                  )}
                  <p className="mt-5 max-w-[60ch] text-lg text-ink/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
