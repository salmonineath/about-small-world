import { Link } from "react-router";
import { DonationSection } from "../components/home/DonationSection";
import { FaqSection } from "../components/home/FaqSection";
import { FieldGuideSection } from "../components/home/FieldGuideSection";
import { HeroSection } from "../components/home/HeroSection";
import { StorySection } from "../components/home/StorySection";
import { VisionSection } from "../components/home/VisionSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { aboutImage, whyImage } from "../data/homeContent";

export function HomePage() {
  return (
    <>
      <title>Wildwood: help us reforest the planet</title>
      <SiteHeader />
      <main>
        <HeroSection />

        <StorySection id="why" title="Why forests matter" image={whyImage}>
          <p>
            Forests are vital to life on Earth. They provide clean air, regulate the climate, and
            support countless species, including us. Protecting them is crucial for biodiversity
            and for a sustainable future.
          </p>
          <p>
            Reforestation restores ecosystems, protects wildlife, and reverses some of the damage
            done by deforestation.
          </p>
        </StorySection>

        <VisionSection />
        <FieldGuideSection />

        <StorySection title="Who we are" image={aboutImage} imageFirst>
          <p>
            Wildwood is run by Small World Company. We believe every tree planted is a step toward
            a healthier, greener planet, and we plant with local communities who look after the
            trees as they grow.
          </p>
          <p>
            <Link to="/about" className="font-semibold text-moss underline underline-offset-4 hover:text-ink">
              Meet the team and see our impact
            </Link>
          </p>
        </StorySection>

        <DonationSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
