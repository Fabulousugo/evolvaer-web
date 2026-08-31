import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
} from "lucide-react";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f4ee] text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee]">
      <Navbar />

      <section className="relative flex min-h-[88svh] overflow-hidden pt-28 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-10rem] top-[-10rem] h-[42rem] w-[42rem] rounded-full bg-gold/[0.075] blur-[180px] dark:bg-gold/[0.085]" />

          <div className="absolute bottom-[-14rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-teal/[0.035] blur-[160px] dark:bg-teal/[0.05]" />

          <div
            className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(13,27,42,.14) 1px, transparent 1px),
                linear-gradient(90deg, rgba(13,27,42,.14) 1px, transparent 1px)
              `,
              backgroundSize:
                "96px 96px",
            }}
          />
        </div>

        <div className="evolvaer-container relative z-10 flex flex-1 items-center py-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                  Error 404
                </span>
              </div>

              <p className="font-display text-[clamp(7rem,18vw,16rem)] leading-[0.68] tracking-[-0.075em] text-midnight/[0.06] dark:text-white/[0.055]">
                404
              </p>

              <h1 className="relative -mt-3 max-w-5xl font-display text-[clamp(3.5rem,6.7vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
                This path hasn&apos;t
                <br />
                been{" "}
                <span className="gold-gradient-text italic">
                  discovered.
                </span>
              </h1>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <Compass className="h-6 w-6 text-gold" />

              <p className="mt-6 text-base leading-8 text-midnight/55 dark:text-white/50">
                The page you&apos;re looking for may have
                moved, changed or never existed. There are
                plenty of other directions to explore.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="group inline-flex min-h-13 items-center gap-4 rounded-full bg-midnight px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#152b40] dark:bg-gold dark:text-midnight dark:hover:bg-[#ffc15d]"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                  Back home
                </Link>

                <Link
                  href="/what-we-do"
                  className="group inline-flex min-h-13 items-center gap-4 rounded-full border border-midnight/[0.12] px-6 text-sm font-semibold transition-all duration-300 hover:border-gold/40 hover:text-gold dark:border-white/[0.12]"
                >
                  Explore our work

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}