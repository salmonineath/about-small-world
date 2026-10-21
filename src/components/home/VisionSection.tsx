import { Reveal } from "../ui/Reveal";

export function VisionSection() {
  return (
    <section className="bg-canopy text-white">
      <div className="wrap py-20 sm:py-28">
        <Reveal>
          <h2 className="text-lg font-semibold text-fern">Our vision</h2>
        </Reveal>
        <Reveal step={1}>
          <p className="mt-4 max-w-[36ch] text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
          A world where thriving forests grow on every continent again.
          </p>
        </Reveal>
        <Reveal step={2}>
          <p className="mt-8 max-w-[62ch] text-lg text-white/80">
          Healthy forests nurture biodiversity, slow climate change and support the well-being of
          every living thing. Through collaboration, education and new ideas, we work to restore
          the balance between people and nature.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
