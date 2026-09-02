import { CurrentResearch } from "@/src/components/research/current-research";
import { OpenQuestions } from "@/src/components/research/open-questions";
import { ResearchApplication } from "@/src/components/research/research-application";
import { ResearchAreas } from "@/src/components/research/research-areas";
import { ResearchCta } from "@/src/components/research/research-cta";
import { ResearchHero } from "@/src/components/research/research-hero";
import { ResearchMethod } from "@/src/components/research/research-method";
import { ResearchPrinciples } from "@/src/components/research/research-principles";
import { WhyResearch } from "@/src/components/research/why-research";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

import { ResearchSceneLoader } from "@/src/components/three/research-scene-loader";

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F8FAFC] text-[#0A1D2F] dark:bg-[#0D1117] dark:text-white">
      <Navbar />

      {/* =====================================================
          STATIC 3D RESEARCH ENVIRONMENT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <ResearchSceneLoader />
      </div>

      {/* =====================================================
          RESEARCH NARRATIVE
      ===================================================== */}

      <div className="relative z-10">
        <ResearchHero />
        <WhyResearch />
        <ResearchAreas />
        <ResearchMethod />
        <CurrentResearch />
        <ResearchApplication />
        <ResearchPrinciples />
        <OpenQuestions />
        <ResearchCta />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}