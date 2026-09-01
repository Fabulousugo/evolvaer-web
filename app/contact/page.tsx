import type { Metadata } from "next";

import { ContactConversation } from "@/src/components/contact/contact-conversation";
import { ContactCta } from "@/src/components/contact/contact-cta";
import { ContactHero } from "@/src/components/contact/contact-hero";
import { ContactIntent } from "@/src/components/contact/contact-intent";
import { ContactRoutes } from "@/src/components/contact/contact-routes";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import { ContactScene } from "@/src/components/three/contact-scene";
import { ContactSceneExperienceProvider } from "@/src/components/three/contact-scene-experience";
import { ContactSceneSection } from "@/src/components/three/contact-scene-section";

export const metadata: Metadata = {
  title: "Contact | Evolvaer",
  description:
    "Start a conversation with Evolvaer about emerging technology, research, product development, venture building, partnerships or careers.",
};

export default function ContactPage() {
  return (
    <ContactSceneExperienceProvider>
      <div className="relative isolate min-h-screen overflow-x-clip bg-white text-[#0A1D2F] dark:bg-[#0D1117] dark:text-white">
        {/* ===================================================
            PERSISTENT 3D ENVIRONMENT
        =================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <ContactScene />
        </div>

        {/* ===================================================
            SITE NAVIGATION
        =================================================== */}

        <div className="relative z-50">
          <Navbar />
        </div>

        {/* ===================================================
            CONTACT EXPERIENCE
        =================================================== */}

        <main className="relative z-10">
          <ContactSceneSection scene="hero">
            <ContactHero />
          </ContactSceneSection>

          <ContactSceneSection scene="intent">
            <ContactIntent />
          </ContactSceneSection>

          <ContactSceneSection scene="form">
            <ContactConversation />
          </ContactSceneSection>

          <ContactSceneSection scene="routes">
            <ContactRoutes />
          </ContactSceneSection>

          <ContactSceneSection scene="cta">
            <ContactCta />
          </ContactSceneSection>
        </main>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </ContactSceneExperienceProvider>
  );
}