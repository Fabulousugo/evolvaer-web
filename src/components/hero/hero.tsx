"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { HeroScene } from "@/src/components/three/hero-scene";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f7f4ee] text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee]">
      {/* =====================================================
          ENVIRONMENT
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Light-mode architectural background */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#f8f6f0_0%,#f3f0e8_46%,#ece8de_100%)] opacity-100 transition-opacity duration-700 dark:opacity-0" />

        {/* Dark-mode cinematic background */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#050e17_0%,#071522_45%,#06111c_100%)] opacity-0 transition-opacity duration-700 dark:opacity-100" />

        {/* LIGHT MODE — warm gold atmosphere */}
        <div className="absolute right-[-10%] top-[-5%] h-[46rem] w-[46rem] rounded-full bg-gold/[0.10] blur-[170px] transition-opacity duration-700 dark:opacity-0" />

        <div className="absolute bottom-[-18rem] left-[25%] h-[38rem] w-[38rem] rounded-full bg-teal/[0.045] blur-[170px] transition-opacity duration-700 dark:opacity-0" />

        {/* DARK MODE — stronger studio illumination */}
        <div className="absolute right-[-8%] top-[4%] hidden h-[44rem] w-[44rem] rounded-full bg-gold/[0.10] blur-[160px] dark:block" />

        <div className="absolute bottom-[-16rem] left-[28%] hidden h-[36rem] w-[36rem] rounded-full bg-teal/[0.07] blur-[160px] dark:block" />

        <div className="absolute right-[18%] top-[45%] hidden h-[24rem] w-[24rem] rounded-full bg-purple/[0.035] blur-[150px] dark:block" />

        {/* Light grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13,27,42,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13,27,42,.18) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        {/* Dark grid */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        {/* Light vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(13,27,42,0.055)_100%)] dark:hidden" />

        {/* Dark vignette */}
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.40)_100%)] dark:block" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="evolvaer-container relative z-10 flex min-h-[100svh] items-center pt-32 sm:pt-36 lg:pt-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 pb-16 pt-10 lg:pb-0 lg:pt-0">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-midnight/55 transition-colors duration-500 dark:text-white/55 sm:text-xs">
                Technology
                <span className="mx-3 text-gold">·</span>
                Research
                <span className="mx-3 text-gold">·</span>
                Venture Building
              </p>
            </div>

            <h1 className="max-w-[46rem] font-display text-[clamp(4rem,7.1vw,7.4rem)] leading-[0.88] tracking-[-0.055em]">
              <span className="block">
                Exploring
              </span>

              <span className="block">
                what&apos;s{" "}
                <span className="gold-gradient-text italic">
                  next.
                </span>
              </span>
            </h1>

            <div className="mt-10 max-w-xl">
              <p className="font-display text-[clamp(2.2rem,3.4vw,3.7rem)] leading-[0.98] tracking-[-0.035em]">
                Building what
                <br />

                <span className="gold-gradient-text italic">
                  matters.
                </span>
              </p>

              <p className="mt-7 max-w-lg text-base leading-8 text-midnight/65 transition-colors duration-500 dark:text-white/62 sm:text-[1.05rem]">
                We research, engineer and commercialise
                emerging technologies into products and
                companies that solve meaningful real-world
                problems.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                <Link
                  href="/what-we-do"
                  className="group inline-flex min-h-14 items-center gap-8 rounded-2xl border border-gold/55 bg-gold/[0.09] px-7 text-sm font-semibold text-[#9b6410] shadow-[0_12px_40px_rgba(244,166,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:bg-gold/[0.16] hover:shadow-[0_16px_45px_rgba(244,166,42,0.14)] dark:border-gold/60 dark:bg-gold/[0.07] dark:text-[#ffd98e] dark:shadow-[0_0_35px_rgba(244,166,42,0.08)] dark:hover:bg-gold/[0.12] dark:hover:shadow-[0_0_45px_rgba(244,166,42,0.16)]"
                >
                  Explore our work

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/about"
                  className="inline-flex min-h-14 items-center rounded-2xl border border-midnight/10 bg-white/35 px-7 text-sm font-medium text-midnight/70 shadow-[0_12px_35px_rgba(13,27,42,0.04)] backdrop-blur-xl transition-all duration-500 hover:border-midnight/20 hover:bg-white/60 hover:text-midnight dark:border-white/15 dark:bg-white/[0.025] dark:text-white/70 dark:shadow-none dark:hover:border-white/30 dark:hover:bg-white/[0.05] dark:hover:text-white"
                >
                  Learn about us
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              SCULPTURE
              ================================================= */}

          <div className="relative hidden min-h-[46rem] lg:block">
            {/* Light-mode sculpture platform */}
            <div className="pointer-events-none absolute bottom-[9%] left-[13%] h-28 w-[72%] rounded-[50%] bg-midnight/[0.055] blur-[65px] transition-opacity duration-700 dark:opacity-0" />

            <div className="pointer-events-none absolute bottom-[12%] left-[20%] h-20 w-[55%] rounded-[50%] bg-gold/[0.10] blur-[55px] transition-opacity duration-700 dark:opacity-0" />

            {/* Dark-mode sculpture platform */}
            <div className="pointer-events-none absolute bottom-[10%] left-[15%] hidden h-28 w-[70%] rounded-[50%] bg-gold/[0.11] blur-[70px] dark:block" />

            <div className="pointer-events-none absolute bottom-[14%] left-[12%] hidden h-24 w-[55%] rounded-[50%] bg-teal/[0.08] blur-[60px] dark:block" />

            <div className="absolute inset-[-8%_-10%_-6%_-8%]">
              <HeroScene />
            </div>
          </div>
        </div>

        {/* =================================================
            SCROLL INDICATOR
            ================================================= */}

        <div className="absolute bottom-8 right-0 hidden items-end gap-5 xl:flex">
          <span className="pb-1 text-[0.67rem] font-medium uppercase tracking-[0.34em] text-midnight/45 transition-colors duration-500 dark:text-white/50">
            Scroll to explore
          </span>

          <div className="flex flex-col items-center">
            <span className="h-10 w-px bg-gradient-to-b from-gold to-gold/10" />

            <ArrowDown className="mt-[-2px] h-5 w-5 text-gold" />
          </div>
        </div>
      </div>

      {/* Bottom boundary */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-midnight/10 to-transparent dark:via-gold/20" />
    </section>
  );
}