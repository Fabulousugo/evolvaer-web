"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent,
  useRef,
} from "react";

const ventureStages = [
  {
    number: "01",
    label: "Explore",
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Validate",
    accent: "#7C3AED",
  },
  {
    number: "03",
    label: "Build",
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Grow",
    accent: "#10B981",
  },
];

export function VenturesHero() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>,
  ) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

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
      "--venture-x",
      `${x}%`,
    );

    section.style.setProperty(
      "--venture-y",
      `${y}%`,
    );
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-[92svh] overflow-hidden pt-24 sm:pt-28 lg:pt-32"
      style={
        {
          "--venture-x": "72%",
          "--venture-y": "38%",
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
        <div className="absolute inset-0 bg-white/[0.38] dark:bg-[#0D1117]/[0.38]" />

        <div
          className="absolute inset-0 opacity-[0.045] transition-opacity duration-500 dark:opacity-[0.075]"
          style={{
            background:
              "radial-gradient(circle at var(--venture-x) var(--venture-y), rgba(37,99,235,.42), transparent 24%)",
          }}
        />

        <div className="absolute -left-52 top-[15%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.055] blur-[170px] dark:bg-[#3B82F6]/[0.075]" />

        <div className="absolute right-[-14rem] top-[9%] h-[38rem] w-[38rem] rounded-full bg-[#22D3EE]/[0.045] blur-[175px] dark:bg-[#22D3EE]/[0.065]" />

        <div className="absolute bottom-[-17rem] left-[38%] h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.035] blur-[165px] dark:bg-[#A855F7]/[0.055]" />

        <div
          className="absolute inset-0 opacity-[0.016] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)
            `,
            backgroundSize: "92px 92px",
          }}
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="evolvaer-container relative z-10 flex min-h-[calc(92svh-8rem)] flex-col">
        <div className="grid flex-1 gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(380px,1.12fr)] lg:items-center lg:py-12">
          {/* =================================================
              LEFT — MESSAGE
          ================================================= */}

          <div className="max-w-[720px]">
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/[0.05] text-[#2563EB] dark:border-[#3B82F6]/25 dark:bg-[#3B82F6]/[0.07] dark:text-[#60A5FA]">
                <CircleDot className="h-3.5 w-3.5" />
              </span>

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/42 dark:text-white/40">
                Evolvaer Ventures
              </span>
            </div>

            <h1 className="mt-7 max-w-[650px] text-[clamp(3.4rem,5.7vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.058em] text-[#0A1D2F] dark:text-white">
              Ideas worth
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#34D399]">
                building.
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              We turn selected technological opportunities into
              products and ventures — combining research, engineering
              and product thinking to build ideas with the potential
              to create meaningful real-world value.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#portfolio"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_20px_50px_rgba(37,99,235,.28)]"
              >
                Explore our ventures

                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>

              <Link
                href="#how-ventures-emerge"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0A1D2F]/10 bg-white/[0.38] px-6 text-sm font-semibold text-[#0A1D2F]/68 backdrop-blur-xl transition-all duration-300 hover:border-[#2563EB]/25 hover:bg-white/[0.6] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.035] dark:text-white/62 dark:hover:border-[#3B82F6]/30 dark:hover:bg-white/[0.06] dark:hover:text-[#60A5FA]"
              >
                How ventures emerge

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* ---------------------------------------------
                POSITIONING
            ---------------------------------------------- */}

            <div className="mt-11 flex max-w-[570px] items-start gap-4 border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,.55)]" />

              <p className="text-xs leading-6 text-[#0A1D2F]/38 dark:text-white/34">
                We do not build every idea we encounter. Ventures
                emerge when technological possibility, meaningful
                need and credible opportunity converge.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — OPEN 3D FIELD

              Deliberately restrained. The actual visual is the
              persistent VenturesScene behind the DOM.
          ================================================= */}

          <div
            aria-hidden="true"
            className="relative hidden min-h-[540px] lg:block"
          >
            {/* venture coordinates */}

            <div className="absolute right-[5%] top-[9%] flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#2563EB]/35" />

              <span className="font-mono text-[0.48rem] uppercase tracking-[0.16em] text-[#0A1D2F]/24 dark:text-white/22">
                Possibility field
              </span>
            </div>

            <div className="absolute bottom-[13%] left-[7%] flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]/70" />

              <span className="font-mono text-[0.48rem] uppercase tracking-[0.16em] text-[#0A1D2F]/22 dark:text-white/20">
                Opportunity signal
              </span>
            </div>

            <div className="absolute bottom-[22%] right-[1%] w-[220px] rounded-[1.1rem] border border-[#0A1D2F]/[0.07] bg-white/[0.16] p-4 backdrop-blur-md dark:border-white/[0.07] dark:bg-white/[0.012]">
              <div className="flex items-center justify-between">
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/25 dark:text-white/22">
                  Venture logic
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,.5)]" />
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  {
                    label: "Possible",
                    accent: "#2563EB",
                  },
                  {
                    label: "Useful",
                    accent: "#22D3EE",
                  },
                  {
                    label: "Viable",
                    accent: "#10B981",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{
                        backgroundColor:
                          item.accent,
                      }}
                    />

                    <span className="text-[0.62rem] font-medium text-[#0A1D2F]/38 dark:text-white/34">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            VENTURE FLOW
        ===================================================== */}

        <div className="border-t border-[#0A1D2F]/[0.08] py-5 dark:border-white/[0.08]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#0A1D2F]/[0.07] bg-[#0A1D2F]/[0.06] dark:border-white/[0.07] dark:bg-white/[0.06] sm:grid-cols-4 lg:max-w-[690px]">
              {ventureStages.map(
                (stage) => (
                  <div
                    key={stage.label}
                    className="relative bg-white/[0.34] px-4 py-3.5 backdrop-blur-md dark:bg-[#0D1117]/[0.42]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor:
                            stage.accent,
                        }}
                      />

                      <span className="font-mono text-[0.45rem] text-[#0A1D2F]/22 dark:text-white/20">
                        {stage.number}
                      </span>
                    </div>

                    <p className="mt-2 text-[0.66rem] font-semibold text-[#0A1D2F]/52 dark:text-white/44">
                      {stage.label}
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/25 dark:text-white/22">
                Scroll into the portfolio
              </span>

              <span className="relative flex h-8 w-5 justify-center rounded-full border border-[#0A1D2F]/10 dark:border-white/10">
                <span className="venture-scroll-dot absolute top-1.5 h-1 w-1 rounded-full bg-[#2563EB] dark:bg-[#60A5FA]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .venture-scroll-dot {
          animation: ventureScroll 1.8s
            ease-in-out infinite;
        }

        @keyframes ventureScroll {
          0% {
            transform: translateY(0);
            opacity: 0.35;
          }

          45% {
            opacity: 1;
          }

          75% {
            transform: translateY(12px);
            opacity: 0.2;
          }

          100% {
            transform: translateY(0);
            opacity: 0.35;
          }
        }

        @media (
          prefers-reduced-motion: reduce
        ) {
          .venture-scroll-dot {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}