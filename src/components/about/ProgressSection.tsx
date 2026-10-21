import { progressGoals, type ProgressGoal } from "../../data/aboutContent";
import { useInView } from "../../hooks/useInView";
import { Aos } from "../ui/Aos";

export function ProgressSection() {
  return (
    <div className="site-container my-12">
      <Aos as="h2" animation="fade-up" className="mb-6 text-center">
        Our Progress
      </Aos>
      <div className="-mx-3 -mt-6 flex flex-wrap">
        {progressGoals.map((goal) => (
          <Aos
            key={goal.label}
            animation={goal.aos}
            className="mt-6 w-full max-w-full shrink-0 px-3 md:w-1/2"
          >
            <h5>{goal.label}</h5>
            <GoalProgressBar goal={goal} />
          </Aos>
        ))}
      </div>
    </div>
  );
}

/** Fills from 0% to the goal once the bar scrolls into view (about.js). */
function GoalProgressBar({ goal }: { goal: ProgressGoal }) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true });
  const percent = inView ? goal.percent : 0;

  return (
    <div className="flex h-4 overflow-hidden rounded-[0.375rem] bg-progress-track text-[0.75rem]">
      <div
        ref={ref}
        role="progressbar"
        aria-label={goal.label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="flex flex-col justify-center overflow-hidden bg-bs-success text-center whitespace-nowrap text-white transition-[width] duration-600 ease-[ease] motion-reduce:transition-none"
        style={{ width: `${percent}%` }}
      >
        {percent}%
      </div>
    </div>
  );
}
