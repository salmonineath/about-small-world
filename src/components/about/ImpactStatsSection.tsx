import { useEffect, useState } from "react";
import { impactDetails, impactStats, type ImpactStat } from "../../data/aboutContent";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";
import { button, buttonOutlineSuccess } from "../../lib/styles";
import { Aos } from "../ui/Aos";
import { Modal } from "../ui/Modal";

const CARD_DELAYS = [100, 200, 300, 400] as const;

export function ImpactStatsSection() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="site-container my-12">
      <Aos as="h2" animation="fade-up" className="mb-6 text-center">
        Our Impact
      </Aos>
      <Aos as="p" animation="fade-up" className="mb-12 text-center text-[1.25rem] font-light text-muted">
        Making measurable progress in global forest conservation
      </Aos>
      <div className="-mx-3 -mt-6 flex flex-wrap">
        {impactStats.map((stat, index) => (
          <Aos
            key={stat.label}
            animation="fade-up"
            delay={CARD_DELAYS[index]}
            className="mt-6 w-full max-w-full shrink-0 px-3 md:w-1/4"
          >
            <StatCard stat={stat} />
          </Aos>
        ))}
      </div>

      <div className="-mx-3 mt-12 flex flex-wrap">
        <div className="mx-auto w-full max-w-full shrink-0 px-3 text-center md:w-2/3">
          <p className="text-muted">
            Our impact grows every day through dedicated conservation efforts and community
            support.
          </p>
          <button
            type="button"
            className={cn(button, buttonOutlineSuccess, "mt-4")}
            onClick={() => setDetailsOpen(true)}
          >
            Learn More About Our Impact
          </button>
        </div>
      </div>

      <Modal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        title="Our Impact in Detail"
        size="lg"
      >
        <div className="-mx-3 flex flex-wrap">
          {impactDetails.map((group) => (
            <div key={group.title} className="mb-6 w-full max-w-full shrink-0 px-3 md:w-1/2">
              <h5>
                <i className={cn("fas", group.icon, group.iconColor)} aria-hidden="true" />{" "}
                {group.title}
              </h5>
              <ul className="list-none pl-0">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

function StatCard({ stat }: { stat: ImpactStat }) {
  return (
    <div className="overflow-hidden rounded-[0.375rem] border-0 bg-white p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] [transition:transform_0.3s_ease,box-shadow_0.3s_ease] hover:[transform:translateY(-10px)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
      <i className={cn("fas mb-4 text-[2rem]", stat.icon, stat.iconColor)} aria-hidden="true" />
      <Counter target={stat.target} />
      <h3 className="mb-2 text-[1.25rem]">{stat.label}</h3>
      <p className="mb-0 text-[0.875em] text-muted">{stat.caption}</p>
      <div className="mt-4 flex h-[5px] overflow-hidden rounded-[0.375rem] bg-progress-track text-[0.75rem]">
        <div
          role="progressbar"
          aria-label={stat.label}
          aria-valuenow={stat.barPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          className={cn(
            "flex flex-col justify-center overflow-hidden text-center whitespace-nowrap text-white",
            stat.barColor,
          )}
          style={{ width: `${stat.barPercent}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Counts up from 0 the first time it scrolls into view: +1% of the target
 * every 20ms, formatted with thousands separators once finished (about.js).
 */
function Counter({ target }: { target: number }) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    let timer: number | undefined;
    const step = () => {
      current = Math.ceil(current + target / 100);
      setCount(current);
      if (current < target) timer = window.setTimeout(step, 20);
    };
    step();
    return () => window.clearTimeout(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="display-4 mb-2 text-pine">
      {count < target ? count : target.toLocaleString()}
    </div>
  );
}
