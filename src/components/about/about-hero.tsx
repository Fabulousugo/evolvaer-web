"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

export function AboutHero() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    const section =
      sectionRef.current;

    if (!section) return;

    const rect =
      section.getBoundingClientRect();

    const x =
      ((event.clientX -
        rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY -
        rect.top) /
        rect.height) *
      100;

    section.style.setProperty(
      "--about-hero-x",
      `${x}%`,
    );

    section.style.setProperty(
      "--about-hero-y",
      `${y}%`,
    );
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={
        handlePointerMove
      }
      className="relative flex min-h-[100svh] overflow-hidden pt-28 sm:pt-32"
      style={
        {
          "--about-hero-x":
            "72%",
          "--about-hero-y":
            "38%",
        } as CSSProperties
      }
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Keep the actual 3D scene visible */}

        <div className="absolute inset-0 bg-white/[0.54] backdrop-blur-[1px] transition-colors duration-700 dark:bg-[#0D1117]/[0.48]" />

        {/* Main interactive field */}

        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at var(--about-hero-x) var(--about-hero-y), rgba(59,130,246,0.12), transparent 30%)",
          }}
        />

        {/* Teal atmosphere */}

        <div className="absolute -right-40 top-[6%] max-w-full overflow-hidden rounded-full bg-[#22D3EE]/[0.07] blur-[150px] dark:bg-[#22D3EE]/[0.09]" />

        {/* Violet atmosphere */}

        <div className="absolute bottom-[-14rem] left-[8%] h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.055] blur-[170px] dark:bg-[#A855F7]/[0.07]" />

        {/* Fine technical grid */}

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.4) 1px, transparent 1px)
            `,
            backgroundSize:
              "84px 84px",
          }}
        />

        {/* Fine horizon line */}

        <div className="absolute left-0 right-0 top-[48%] h-px bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent dark:via-[#3B82F6]/15" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="evolvaer-container relative z-10 flex flex-1 flex-col justify-between pb-9 pt-12 sm:pb-12 sm:pt-16 lg:pt-20">
        <div className="grid flex-1 gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          {/* Main statement */}

          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#2563EB] dark:bg-[#3B82F6]" />

              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#0A1D2F]/45 dark:text-white/42">
                About Evolvaer
              </span>
            </div>

            <h1 className="text-[clamp(3.9rem,7.8vw,8.5rem)] font-semibold leading-[0.87] tracking-[-0.065em] text-[#0A1D2F] dark:text-white">
              Built to explore
              <br />

              <span className="inline-flex flex-wrap items-baseline gap-x-[0.18em]">
                what comes

                <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                  next.
                </span>
              </span>
            </h1>

            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_18px_rgba(16,185,129,.65)] dark:bg-[#22D3EE]" />

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/35 dark:text-white/30">
                Research · Engineering · Venture Building
              </span>
            </div>
          </div>

          {/* Supporting copy */}

          <div className="max-w-xl lg:justify-self-end lg:pt-24">
            <div className="border-l border-[#2563EB]/15 pl-6 dark:border-[#3B82F6]/20 sm:pl-8">
              <p className="text-base leading-8 text-[#0A1D2F]/62 dark:text-white/55 sm:text-lg sm:leading-9">
                Evolvaer Technologies is an emerging technology
                company that researches, engineers and builds
                products around ideas with the potential to create
                meaningful real-world value.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                We work across the space between technological
                possibility and practical usefulness — exploring
                what is changing, understanding what matters and
                building what proves worth pursuing.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#our-story"
                className="group inline-flex min-h-12 items-center gap-4 rounded-full border border-[#2563EB]/20 bg-white/45 px-5 text-sm font-semibold text-[#0A1D2F] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.045] dark:text-white dark:hover:border-[#3B82F6]/45 dark:hover:bg-white/[0.075]"
              >
                Discover our thinking

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2563EB] text-white transition-transform duration-300 group-hover:translate-y-0.5 dark:bg-[#3B82F6]">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="/what-we-do"
                className="group inline-flex min-h-12 items-center gap-2 px-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors hover:text-[#2563EB] dark:text-white/48 dark:hover:text-[#60A5FA]"
              >
                What we do

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM BAR
        ===================================================== */}

        <div className="mt-16 border-t border-[#0A1D2F]/[0.08] pt-5 dark:border-white/[0.08] sm:mt-20">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/25 dark:text-white/22">
                  Mode
                </p>

                <p className="mt-1 text-xs font-medium text-[#0A1D2F]/48 dark:text-white/40">
                  Continuous exploration
                </p>
              </div>

              <div>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/25 dark:text-white/22">
                  Focus
                </p>

                <p className="mt-1 text-xs font-medium text-[#0A1D2F]/48 dark:text-white/40">
                  Emerging technology
                </p>
              </div>

              <div>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/25 dark:text-white/22">
                  Direction
                </p>

                <p className="mt-1 text-xs font-medium text-[#0A1D2F]/48 dark:text-white/40">
                  Ideas into impact
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span className="text-[0.56rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/26 dark:text-white/24">
                Scroll to evolve
              </span>

              <div className="relative h-10 w-px overflow-hidden bg-[#0A1D2F]/10 dark:bg-white/10">
                <span className="absolute left-0 top-0 h-4 w-px animate-[aboutScroll_2s_ease-in-out_infinite] bg-[#2563EB] dark:bg-[#3B82F6]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aboutScroll {
          0% {
            transform: translateY(-140%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          75% {
            opacity: 1;
          }

          100% {
            transform: translateY(260%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}