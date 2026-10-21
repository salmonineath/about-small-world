import { progressGoals, type ProgressGoal } from "../../data/aboutContent";
import { useInView } from "../../hooks/useInView";
import { Reveal } from "../ui/Reveal";

export function ProgressSection() {
  return (
    <section className="bg-lichen">
      <div className="wrap grid gap-10 py-16 sm:py-20 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Progress on this year's goals</h2>
        </Reveal>
        <Reveal step={1} className="space-y-8">
          {progressGoals.map((goal) => (
            <GoalBar key={goal.label} goal={goal} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Fills from 0 to the goal the first time the bar scrolls into view. */
function GoalBar({ goal }: { goal: ProgressGoal }) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between font-semibold">
        <span>{goal.label}</span>
        <span className="tabular-nums">{goal.percent}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={goal.label}
        aria-valuenow={goal.percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-3 overflow-hidden rounded-full bg-paper"
      >
        <div
          className="h-full rounded-full bg-canopy transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${goal.percent}%` : 0 }}
        />
      </div>
    </div>
  );
}
