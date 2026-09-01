import { CurrentResearch } from "@/src/components/research/current-research";
import { OpenQuestions } from "@/src/components/research/open-questions";
import { ResearchApplication } from "@/src/components/research/research-application";
import { ResearchAreas } from "@/src/components/research/research-areas";
import { ResearchCta } from "@/src/components/research/research-cta";
import { ResearchHero } from "@/src/components/research/research-hero";
import { ResearchMethod } from "@/src/components/research/research-method";
import { ResearchPrinciples } from "@/src/components/research/research-principles";
import { WhyResearch } from "@/src/components/research/why-research";

import { ResearchPageScene } from "@/src/components/three/research-page-scene";
import { ResearchSceneExperienceProvider } from "@/src/components/three/research-scene-experience";
import { ResearchSceneSection } from "@/src/components/three/research-scene-section";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export default function ResearchPage() {
  return (
    <ResearchSceneExperienceProvider>
      <Navbar />
      <div className="relative isolate min-h-screen overflow-x-clip bg-[#F8FAFC] text-[#0A1D2F] dark:bg-[#0D1117] dark:text-white">
        {/* =====================================================
            PERSISTENT 3D RESEARCH ENVIRONMENT

            Mounted once for the entire page.

            The HTML sections below control which research world
            is active as the visitor moves through the page.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <ResearchPageScene />
        </div>

        {/* =====================================================
            RESEARCH NARRATIVE
        ===================================================== */}

        <main className="relative z-10">
          {/* 01 — QUESTIONS WORTH INVESTIGATING */}

          <ResearchSceneSection scene="hero">
            <ResearchHero />
          </ResearchSceneSection>

          {/* 02 — WHY RESEARCH */}

          <ResearchSceneSection scene="why">
            <WhyResearch />
          </ResearchSceneSection>

          {/* 03 — RESEARCH AREAS */}

          <ResearchSceneSection scene="areas">
            <ResearchAreas />
          </ResearchSceneSection>

          {/* 04 — RESEARCH METHOD */}

          <ResearchSceneSection scene="method">
            <ResearchMethod />
          </ResearchSceneSection>

          {/* 05 — CURRENT RESEARCH */}

          <ResearchSceneSection scene="current">
            <CurrentResearch />
          </ResearchSceneSection>

          {/* 06 — RESEARCH TO APPLICATION */}

          <ResearchSceneSection scene="application">
            <ResearchApplication />
          </ResearchSceneSection>

          {/* 07 — RESEARCH PRINCIPLES */}

          <ResearchSceneSection scene="principles">
            <ResearchPrinciples />
          </ResearchSceneSection>

          {/* 08 — OPEN QUESTIONS */}

          <ResearchSceneSection scene="questions">
            <OpenQuestions />
          </ResearchSceneSection>

          {/* 09 — KEEP QUESTIONING */}

          <ResearchSceneSection scene="cta">
            <ResearchCta />
          </ResearchSceneSection>
          <Footer />
        </main>
      </div>
    </ResearchSceneExperienceProvider>
  );
}