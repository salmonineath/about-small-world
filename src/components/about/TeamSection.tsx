import { TEAM_PHOTO_PLACEHOLDER, teamMembers } from "../../data/aboutContent";
import { Aos } from "../ui/Aos";

const DELAYS = [100, 200, 300] as const;

export function TeamSection() {
  return (
    <div className="site-container my-12">
      <Aos as="h2" animation="fade-up" className="mb-6 text-center">
        Our Team
      </Aos>
      <div className="-mx-3 -mt-6 flex flex-wrap">
        {teamMembers.map((member, index) => (
          <Aos
            key={member.name}
            animation="fade-up"
            delay={DELAYS[index]}
            className="mt-6 w-full max-w-full shrink-0 px-3 md:w-1/3"
          >
            <div className="text-center [transition:transform_0.3s_ease] hover:[transform:scale(1.05)]">
              <img
                src={TEAM_PHOTO_PLACEHOLDER}
                alt={member.alt}
                className="mb-4 h-[150px] w-[150px] rounded-[50%] object-cover"
              />
              <h5>{member.name}</h5>
              <p>{member.role}</p>
            </div>
          </Aos>
        ))}
      </div>
    </div>
  );
}
