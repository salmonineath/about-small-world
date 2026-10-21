import { useState } from "react";
import { Link } from "react-router";
import { DonationSection } from "../components/home/DonationSection";
import { FaqSection } from "../components/home/FaqSection";
import { HeroSection } from "../components/home/HeroSection";
import { HomeHeader } from "../components/home/HomeHeader";
import { PlantCardsSection } from "../components/home/PlantCardsSection";
import { SplitSection } from "../components/home/SplitSection";
import { VisionSection } from "../components/home/VisionSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { aboutImages, introductionImages, seeds, trees } from "../data/homeContent";

export function HomePage() {
  // The original main.js marked the last clicked `.nav-link` (header OR
  // footer) as active, which keeps its underline visible.
  const [activeLinkId, setActiveLinkId] = useState("#home");

  return (
    <div className="home-page font-poppins">
      <title>Wildwood</title>
      <HomeHeader activeLinkId={activeLinkId} onLinkClick={setActiveLinkId} />
      <HeroSection />

      <SplitSection id="introduction" images={introductionImages} alignTop>
        <h2 className="text-left">Why Forests Matter</h2>
        <p className="text-left">
          Forests are vital to life on Earth. They provide clean air, regulate the climate, and
          support countless species, including humans. Protecting forests is crucial for
          biodiversity, combating climate change, and ensuring a sustainable future for all.
        </p>
        <p className="text-left">
          By supporting reforestation efforts, you help restore ecosystems, protect wildlife, and
          mitigate the effects of deforestation.
        </p>
      </SplitSection>

      <SplitSection id="about" images={aboutImages}>
        <h2 className="text-left">About Us</h2>
        <div className="relative overflow-hidden">
          <p className="mb-4 text-left">
            Welcome to Small World Company, where we believe that every tree planted is a step
            toward a healthier, greener planet.
          </p>
        </div>
        <Link
          to="/about"
          className="mt-4 inline-block cursor-pointer rounded-[10px] border-2 border-black bg-moss px-6 py-2 text-center font-medium text-white no-underline transition-all duration-150 ease-[ease] [border-style:outset] hover:bg-moss-hover hover:text-white"
        >
          Learn more
        </Link>
      </SplitSection>

      <VisionSection />
      <PlantCardsSection
        id="trees"
        title="How Trees Combat Climate Change"
        cards={trees}
        paddingTopClass="pt-[9%]"
      />
      <PlantCardsSection
        id="seeds"
        title="How Seeds are Important and contribute to The World"
        cards={seeds}
        paddingTopClass="pt-[5%]"
      />
      <DonationSection />
      <FaqSection />
      <SiteFooter variant="home" activeLinkId={activeLinkId} onLinkClick={setActiveLinkId} />
    </div>
  );
}
