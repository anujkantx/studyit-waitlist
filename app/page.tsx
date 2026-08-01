"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { ProductPillars } from "@/components/sections/ProductPillars";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UniversityExperience } from "@/components/sections/UniversityExperience";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { Roadmap } from "@/components/sections/Roadmap";
import { BuildInPublic } from "@/components/sections/BuildInPublic";
import { CampusSection } from "@/components/sections/CampusSection";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProductPreview />
        <ProductPillars />
        <HowItWorks />
        <UniversityExperience />
        <CommunitySection />
        <EarlyAccess />
        <Roadmap />
        <BuildInPublic />
        <CampusSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
