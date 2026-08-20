import { Navbar } from "../components/layout/navbar";
import { AboutSection } from "../components/sections/about-section";
import { CapabilitiesSection } from "../components/sections/capabilities-section";
import { ContactSection } from "../components/sections/contact-section";
import { HeroSection } from "../components/sections/hero-section";
import { PlaygroundSection } from "../components/sections/playground-section";
import { WorkSection } from "../components/sections/work-section";

import { getSiteHero } from "../lib/queries/hero";
import { getFeaturedProjects } from "../lib/queries/project";

export default async function Home() {
  const [hero, projects] = await Promise.all([
    getSiteHero(),
    getFeaturedProjects(),
  ]);

  return (
    <main>
      <Navbar />

      <HeroSection hero={hero} />

      <WorkSection projects={projects} />

      <AboutSection />

      <CapabilitiesSection />

      <PlaygroundSection />

      <ContactSection />
    </main>
  );
}
