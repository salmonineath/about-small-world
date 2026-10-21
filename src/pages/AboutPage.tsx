import { AboutHero } from "../components/about/AboutHero";
import { CtaSection } from "../components/about/CtaSection";
import { ImpactSection } from "../components/about/ImpactSection";
import { ProgressSection } from "../components/about/ProgressSection";
import { SupportersSection } from "../components/about/SupportersSection";
import { TeamSection } from "../components/about/TeamSection";
import { TimelineSection } from "../components/about/TimelineSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export function AboutPage() {
  return (
    <>
      <title>About us: Wildwood</title>
      <SiteHeader />
      <main>
        <AboutHero />
        <ImpactSection />
        <ProgressSection />
        <TimelineSection />
        <SupportersSection />
        <TeamSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
