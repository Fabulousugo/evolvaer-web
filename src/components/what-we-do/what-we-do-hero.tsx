"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import {
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

export function WhatWeDoHero() {
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
      ((event.clientX - rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
      100;

    section.style.setProperty(
      "--work-hero-x",
      `${x}%`,
    );

    section.style.setProperty(
      "--work-hero-y",
      `${y}%`,
    );
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[96svh] overflow-hidden pt-24 sm:pt-28"
      style={
        {
          "--work-hero-x": "72%",
          "--work-hero-y": "38%",
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
        <div className="absolute inset-0 bg-white/[0.5] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.46]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--work-hero-x) var(--work-hero-y), rgba(59,130,246,0.11), transparent 31%)",
          }}
        />

        <div className="absolute -right-36 top-[7%] h-[31rem] w-[31rem] rounded-full bg-[#22D3EE]/[0.065] blur-[155px] dark:bg-[#22D3EE]/[0.085]" />

        <div className="absolute bottom-[-15rem] left-[4%] h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.05] blur-[170px] dark:bg-[#A855F7]/[0.065]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.38) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.38) 1px, transparent 1px)
            `,
            backgroundSize:
              "88px 88px",
          }}
        />

        <div className="absolute left-0 right-0 top-[50%] h-px bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent dark:via-[#3B82F6]/15" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="evolvaer-container relative z-10 flex flex-1 flex-col">
        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:gap-12 lg:py-14">
          {/* =====================================================
              LEFT — MESSAGE
          ===================================================== */}

          <div className="min-w-0 max-w-[660px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-9 shrink-0 bg-[#2563EB] dark:bg-[#3B82F6]" />

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.29em] text-[#0A1D2F]/45 dark:text-white/42">
                What we do
              </span>
            </div>

            <h1 className="max-w-[650px] text-[clamp(3rem,5.2vw,6rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              <span className="block">
                From possibility
              </span>

              <span className="block">
                to{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                  real-world value.
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-[570px] text-base leading-8 text-[#0A1D2F]/60 dark:text-white/55 sm:text-[1.05rem]">
              We identify meaningful technological opportunities,
              understand them deeply, engineer practical systems
              around them and turn the strongest ideas into products
              and ventures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#explore"
                className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-[0_12px_34px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] dark:bg-[#3B82F6] dark:hover:bg-[#60A5FA]"
              >
                Explore our process

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0.5">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="/ventures"
                className="group inline-flex min-h-12 items-center gap-2 px-3 text-sm font-semibold text-[#0A1D2F]/56 transition-colors hover:text-[#2563EB] dark:text-white/48 dark:hover:text-[#60A5FA]"
              >
                Explore ventures

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT — SPACE RESERVED FOR 3D
          ===================================================== */}

          <div className="relative hidden min-h-[28rem] lg:block">
            <div className="absolute right-0 top-1/2 w-[78%] -translate-y-1/2">
              <div className="relative rounded-[2rem] border border-[#0A1D2F]/[0.07] bg-white/[0.08] p-5 backdrop-blur-[2px] dark:border-white/[0.07] dark:bg-white/[0.015]">
                <div className="flex items-center justify-between border-b border-[#0A1D2F]/[0.06] pb-4 dark:border-white/[0.07]">
                  <div>
                    <p className="text-[0.52rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/28 dark:text-white/24">
                      Operating sequence
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#0A1D2F]/48 dark:text-white/42">
                      From signal to system
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/30 dark:text-white/26">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,.8)]" />
                    Live process
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    "Explore",
                    "Research",
                    "Engineer",
                    "Build",
                    "Scale",
                    "Impact",
                  ].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#0A1D2F]/[0.06] bg-white/[0.12] px-3 py-3 dark:border-white/[0.06] dark:bg-white/[0.018]"
                      >
                        <p className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/22 dark:text-white/20">
                          0{index + 1}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-[#0A1D2F]/52 dark:text-white/44">
                          {item}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM PROCESS RAIL
        ===================================================== */}

        <div className="border-t border-[#0A1D2F]/[0.08] py-5 dark:border-white/[0.08]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {[
                {
                  index: "01",
                  label: "Explore",
                  color: "#2563EB",
                },
                {
                  index: "02",
                  label: "Research",
                  color: "#7C3AED",
                },
                {
                  index: "03",
                  label: "Engineer",
                  color: "#22D3EE",
                },
                {
                  index: "04",
                  label: "Build",
                  color: "#A855F7",
                },
                {
                  index: "05",
                  label: "Scale",
                  color: "#F97316",
                },
                {
                  index: "06",
                  label: "Impact",
                  color: "#10B981",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        item.color,
                    }}
                  />

                  <div>
                    <p className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/22 dark:text-white/20">
                      {item.index}
                    </p>

                    <p className="mt-0.5 text-[0.68rem] font-semibold text-[#0A1D2F]/48 dark:text-white/40">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[0.54rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/26 dark:text-white/24">
                Scroll through the system
              </span>

              <div className="relative h-8 w-px overflow-hidden bg-[#0A1D2F]/10 dark:bg-white/10">
                <span className="absolute left-0 top-0 h-3 w-px animate-[workScroll_2s_ease-in-out_infinite] bg-[#2563EB] dark:bg-[#3B82F6]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes workScroll {
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