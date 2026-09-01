import { EngineerStage } from "@/src/components/what-we-do/engineer-stage";
import { ExploreSection } from "@/src/components/what-we-do/explore-section";
import { ImpactStage } from "@/src/components/what-we-do/impact-stage";
import { IntegratedModel } from "@/src/components/what-we-do/integrated-model";
import { ResearchStage } from "@/src/components/what-we-do/research-stage";
import { ScaleStage } from "@/src/components/what-we-do/scale-stage";
import { WhatWeDoCta } from "@/src/components/what-we-do/what-we-do-cta";
import { WhatWeDoHero } from "@/src/components/what-we-do/what-we-do-hero";
import { BuildStage } from "@/src/components/what-we-do/build-stage";

import { WorkScene } from "@/src/components/three/work-scene";
import { WorkSceneExperienceProvider } from "@/src/components/three/work-scene-experience";
import { WorkSceneSection } from "@/src/components/three/work-scene-section";
import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";

export default function WhatWeDoPage() {
  return (
    <WorkSceneExperienceProvider>
      <Navbar />

      <div className="relative isolate overflow-x-clip">
        {/* =====================================================
            PERSISTENT 3D WORLD

            This Canvas never unmounts while moving through the page.
            Each section changes the state of the same 3D environment.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <WorkScene />
        </div>

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        <main className="relative z-10">
          <WorkSceneSection scene="hero">
            <WhatWeDoHero />
          </WorkSceneSection>

          <WorkSceneSection scene="explore">
            <ExploreSection />
          </WorkSceneSection>

          <WorkSceneSection scene="research">
            <ResearchStage />
          </WorkSceneSection>

          <WorkSceneSection scene="engineer">
            <EngineerStage />
          </WorkSceneSection>

          <WorkSceneSection scene="build">
            <BuildStage />
          </WorkSceneSection>

          <WorkSceneSection scene="scale">
            <ScaleStage />
          </WorkSceneSection>

          <WorkSceneSection scene="impact">
            <ImpactStage />
          </WorkSceneSection>

          <WorkSceneSection scene="integrated">
            <IntegratedModel />
          </WorkSceneSection>

          <WorkSceneSection scene="cta">
            <WhatWeDoCta />
          </WorkSceneSection>

          <Footer />
        </main>
      </div>
    </WorkSceneExperienceProvider>
  );
}