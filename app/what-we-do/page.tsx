import { BuildStage } from "@/src/components/what-we-do/build-stage";
import { EngineerStage } from "@/src/components/what-we-do/engineer-stage";
import { ExploreSection } from "@/src/components/what-we-do/explore-section";
import { ImpactStage } from "@/src/components/what-we-do/impact-stage";
import { IntegratedModel } from "@/src/components/what-we-do/integrated-model";
import { ResearchStage } from "@/src/components/what-we-do/research-stage";
import { ScaleStage } from "@/src/components/what-we-do/scale-stage";
import { WhatWeDoCta } from "@/src/components/what-we-do/what-we-do-cta";
import { WhatWeDoHero } from "@/src/components/what-we-do/what-we-do-hero";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

import { WorkScene } from "@/src/components/three/work-scene";

export default function WhatWeDoPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <WorkScene />
      </div>

      <div className="relative z-10">
        <WhatWeDoHero />
        <ExploreSection />
        <ResearchStage />
        <EngineerStage />
        <BuildStage />
        <ScaleStage />
        <ImpactStage />
        <IntegratedModel />
        <WhatWeDoCta />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}