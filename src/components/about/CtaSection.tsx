import { Aos } from "../ui/Aos";

export function CtaSection() {
  return (
    <div className="bg-kubota-forest py-[60px] text-white">
      <div className="site-container text-center">
        <Aos as="h2" animation="fade-up" className="mb-6">
          Join Our Mission
        </Aos>
        <Aos as="p" animation="fade-up" className="mb-6 text-[1.25rem] font-light">
          Our mission is to inspire and empower communities to take meaningful action for the
          conservation and restoration of forests. By raising awareness about the critical role
          forests play in sustaining life on Earth, we aim to create a global movement that
          prioritizes reforestation and environmental preservation.
        </Aos>
      </div>
    </div>
  );
}
