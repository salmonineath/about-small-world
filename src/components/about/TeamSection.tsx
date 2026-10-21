import { teamMembers } from "../../data/aboutContent";
import { Reveal } from "../ui/Reveal";

function initials(name: string) {
  const words = name.split(" ");
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function TeamSection() {
  return (
    <section className="border-t border-ink/10">
      <div className="wrap py-16 sm:py-24">
        <Reveal>
          <h2 className="text-4xl font-bold sm:text-5xl">The team</h2>
          <p className="mt-4 max-w-[60ch] text-lg text-ink/75">
            Wildwood is built by a team of three at Small World Company.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal as="li" key={member.name} step={index + 1} className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid size-16 shrink-0 place-items-center rounded-full bg-canopy text-xl font-bold text-pollen"
              >
                {initials(member.name)}
              </span>
              <div>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-ink/70">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
