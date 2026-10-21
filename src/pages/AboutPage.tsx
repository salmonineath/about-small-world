import { AboutHero } from "../components/about/AboutHero";
import { CtaSection } from "../components/about/CtaSection";
import { ImpactStatsSection } from "../components/about/ImpactStatsSection";
import { ProgressSection } from "../components/about/ProgressSection";
import { SupportersSection } from "../components/about/SupportersSection";
import { TeamSection } from "../components/about/TeamSection";
import { TimelineSection } from "../components/about/TimelineSection";
import { SiteFooter } from "../components/layout/SiteFooter";

export function AboutPage() {
  return (
    <div className="font-system">
      <title>About - Wildwood</title>
      <AboutHero />
      <ImpactStatsSection />
      <ProgressSection />
      <TeamSection />
      <TimelineSection />
      <CtaSection />
      <SupportersSection />
      <SiteFooter variant="about" />
    </div>
  );
}
