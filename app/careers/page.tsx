import { CareersCta } from "@/src/components/careers/careers-cta";
import { CareersHero } from "@/src/components/careers/careers-hero";
import { CareersProcess } from "@/src/components/careers/careers-process";
import { CareersValues } from "@/src/components/careers/careers-values";
import { GrowthCulture } from "@/src/components/careers/growth-culture";
import { HowWeWork } from "@/src/components/careers/how-we-work";
import { OpenRoles } from "@/src/components/careers/open-roles";
import { WhyJoin } from "@/src/components/careers/why-join";

import { CareersScene } from "@/src/components/three/careers-scene";
import { CareersSceneExperienceProvider } from "@/src/components/three/careers-scene-experience";
import { CareersSceneSection } from "@/src/components/three/careers-scene-section";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export default function CareersPage() {
  return (
    <CareersSceneExperienceProvider>
      <Navbar />
      <main className="relative isolate overflow-x-clip">
        {/* =====================================================
            PERSISTENT 3D ENVIRONMENT

            Mounted once for the entire Careers page.
            Every CareersSceneSection below updates the
            active 3D state as the visitor moves through
            the page.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <CareersScene />
        </div>

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        <div className="relative z-10">
          {/* 01 — INDIVIDUAL CAPABILITY */}

          <CareersSceneSection scene="hero">
            <CareersHero />
          </CareersSceneSection>

          {/* 02 — CONNECTION */}

          <CareersSceneSection scene="why">
            <WhyJoin />
          </CareersSceneSection>

          {/* 03 — COLLABORATION */}

          <CareersSceneSection scene="work">
            <HowWeWork />
          </CareersSceneSection>

          {/* 04 — GROWTH */}

          <CareersSceneSection scene="growth">
            <GrowthCulture />
          </CareersSceneSection>

          {/* 05 — VALUES / STABILITY */}

          <CareersSceneSection scene="values">
            <CareersValues />
          </CareersSceneSection>

          {/* 06 — OPPORTUNITY */}

          <CareersSceneSection scene="roles">
            <OpenRoles />
          </CareersSceneSection>

          {/* 07 — CANDIDATE JOURNEY */}

          <CareersSceneSection scene="process">
            <CareersProcess />
          </CareersSceneSection>

          {/* 08 — RESOLUTION */}

          <CareersSceneSection scene="cta">
            <CareersCta />
          </CareersSceneSection>

          <Footer />
        </div>
      </main>
    </CareersSceneExperienceProvider>
  );
}