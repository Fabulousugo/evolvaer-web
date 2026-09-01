"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Compass,
  Hammer,
  TrendingUp,
} from "lucide-react";

const ventureStages = [
  {
    number: "01",
    label: "Exploring",
    title: "The opportunity is still being understood.",
    description:
      "The problem, users, technology and opportunity are being investigated. At this stage, the goal is learning — not forcing an idea toward launch.",
    signals: [
      "Problem discovery",
      "Research",
      "Technical investigation",
      "Early validation",
    ],
    principle: "Learn before committing.",
    icon: Compass,
    accent: "#7C3AED",
  },
  {
    number: "02",
    label: "Building",
    title: "Evidence has earned deeper investment.",
    description:
      "The opportunity has progressed into active product and engineering work. The focus shifts toward creating, testing and strengthening something people can use.",
    signals: [
      "Product development",
      "Engineering",
      "User learning",
      "Commercial validation",
    ],
    principle: "Build, test and refine.",
    icon: Hammer,
    accent: "#2563EB",
  },
  {
    number: "03",
    label: "Growing",
    title: "The venture is proving it can endure.",
    description:
      "A functioning venture begins strengthening its product, technology, operations and commercial model for broader adoption and sustainable growth.",
    signals: [
      "Product maturity",
      "Operational systems",
      "Market development",
      "Scale readiness",
    ],
    principle: "Strengthen what works.",
    icon: TrendingUp,
    accent: "#10B981",
  },
];

export function VentureStages() {
  return (
    <section
      id="venture-stages"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.5] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.54]" />

        <div className="absolute -left-48 top-[16%] h-[34rem] w-[34rem] rounded-full bg-[#7C3AED]/[0.035] blur-[170px] dark:bg-[#A855F7]/[0.05]" />

        <div className="absolute right-[-13rem] top-[34%] h-[36rem] w-[36rem] rounded-full bg-[#10B981]/[0.035] blur-[175px] dark:bg-[#10B981]/[0.05]" />

        <div
          className="absolute inset-0 opacity-[0.014] dark:opacity-[0.024]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.16) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#10B981] dark:text-[#34D399]">
                05
              </span>

              <span className="h-px w-8 bg-[#10B981]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#10B981] dark:text-[#34D399]">
                Venture stages
              </p>
            </div>

            <h2 className="mt-6 max-w-[720px] text-[clamp(2.9rem,4.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Different ventures need
              <br />
              different kinds of{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#10B981] bg-clip-text text-transparent dark:from-[#C084FC] dark:via-[#60A5FA] dark:to-[#34D399]">
                attention.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Ventures do not all require the same resources at the
              same time. We think about the portfolio in stages so
              that support can evolve with the maturity of each
              opportunity.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              Moving forward is not automatic. Each stage introduces
              new questions, evidence and expectations.
            </p>
          </div>
        </div>

        {/* =====================================================
            STAGE TRAJECTORY
        ===================================================== */}

        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-[4.4rem] hidden h-px bg-gradient-to-r from-[#7C3AED]/30 via-[#2563EB]/40 to-[#10B981]/30 lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {ventureStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.label}
                  className="group relative"
                >
                  {/* -----------------------------------------
                      STAGE NODE
                  ------------------------------------------ */}

                  <div className="relative z-10 mb-7 flex items-center lg:justify-center">
                    <div
                      className="relative flex items-center justify-center rounded-full border bg-white/[0.74] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 dark:bg-[#0D1117]/[0.76]"
                      style={{
                        width: `${6.5 + index * 1.1}rem`,
                        height: `${6.5 + index * 1.1}rem`,
                        borderColor: `${stage.accent}38`,
                        boxShadow: `0 0 ${
                          35 + index * 10
                        }px ${stage.accent}12`,
                      }}
                    >
                      <div
                        className="absolute inset-[8px] rounded-full border"
                        style={{
                          borderColor: `${stage.accent}18`,
                        }}
                      />

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-full"
                        style={{
                          color: stage.accent,
                          backgroundColor: `${stage.accent}0E`,
                        }}
                      >
                        <Icon className="h-[19px] w-[19px]" />
                      </div>

                      <span
                        className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full border bg-white font-mono text-[0.43rem] dark:bg-[#0D1117]"
                        style={{
                          borderColor: `${stage.accent}38`,
                          color: stage.accent,
                        }}
                      >
                        {stage.number}
                      </span>
                    </div>
                  </div>

                  {/* -----------------------------------------
                      STAGE CONTENT
                  ------------------------------------------ */}

                  <div
                    className="relative overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.6] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.72] dark:border-white/[0.08] dark:bg-white/[0.022] dark:hover:bg-white/[0.035] sm:p-8"
                    style={{
                      minHeight: `${
                        31 + index * 1.5
                      }rem`,
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundColor: `${stage.accent}18`,
                      }}
                    />

                    <div className="relative flex h-full flex-col">
                      <div>
                        <p
                          className="text-[0.54rem] font-semibold uppercase tracking-[0.22em]"
                          style={{
                            color: stage.accent,
                          }}
                        >
                          {stage.label}
                        </p>

                        <h3 className="mt-4 text-[1.4rem] font-semibold leading-8 tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                          {stage.title}
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/44 dark:text-white/39">
                          {stage.description}
                        </p>
                      </div>

                      {/* signals */}

                      <div className="mt-8 space-y-3">
                        {stage.signals.map((signal) => (
                          <div
                            key={signal}
                            className="flex items-center gap-3"
                          >
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{
                                backgroundColor:
                                  stage.accent,
                              }}
                            />

                            <span className="text-xs text-[#0A1D2F]/42 dark:text-white/37">
                              {signal}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* principle */}

                      <div className="mt-auto pt-9">
                        <div className="border-t border-[#0A1D2F]/[0.07] pt-5 dark:border-white/[0.07]">
                          <p className="text-[0.47rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/23 dark:text-white/21">
                            Stage principle
                          </p>

                          <p
                            className="mt-2 text-xs font-semibold"
                            style={{
                              color: stage.accent,
                            }}
                          >
                            {stage.principle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CURRENT PORTFOLIO POSITION
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[1.9rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] lg:mt-24">
          <div className="grid lg:grid-cols-[0.68fr_1.32fr]">
            <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  Portfolio position
                </p>
              </div>

              <h3 className="mt-5 max-w-[360px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
                A portfolio can contain different levels of maturity.
              </h3>

              <p className="mt-5 max-w-[420px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                Some opportunities may still be under investigation
                while others have progressed into active development
                or growth.
              </p>
            </div>

            <div className="p-7 sm:p-9">
              <PortfolioStageMap />
            </div>
          </div>
        </div>

        {/* =====================================================
            IMPORTANT DISTINCTION
        ===================================================== */}

        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#0A1D2F]/[0.07] bg-[#0A1D2F]/[0.055] dark:border-white/[0.07] dark:bg-white/[0.055] md:grid-cols-3">
          <StageFact
            number="01"
            label="Exploring is valuable"
            description="An opportunity does not need to become a company for the research to create useful knowledge."
          />

          <StageFact
            number="02"
            label="Building is conditional"
            description="Active development follows evidence — not simply enthusiasm for an idea."
          />

          <StageFact
            number="03"
            label="Growth is earned"
            description="Scaling follows product, market and operational learning rather than preceding it."
          />
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#10B981] dark:text-[#34D399]">
                Portfolio principle
              </p>
            </div>

            <p className="max-w-[58rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              We do not measure progress by how quickly an idea becomes
              a company.{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                We measure whether the evidence is becoming strong
                enough to justify the next level of commitment.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-12 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.51rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/25 dark:text-white/22">
              The portfolio keeps evolving
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/46 dark:text-white/40">
              New opportunities can enter as others progress,
              transform or stop.
            </p>
          </div>

          <Link
            href="#future-ventures"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            The future portfolio

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PORTFOLIO STAGE MAP
============================================================ */

function PortfolioStageMap() {
  const positions = [
    {
      label: "Exploring",
      accent: "#7C3AED",
      active: false,
    },
    {
      label: "Building",
      accent: "#2563EB",
      active: true,
    },
    {
      label: "Growing",
      accent: "#10B981",
      active: false,
    },
  ];

  return (
    <div>
      <div className="relative grid grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-[1.45rem] h-px bg-gradient-to-r from-[#7C3AED]/25 via-[#2563EB]/40 to-[#10B981]/25" />

        {positions.map((position) => (
          <div
            key={position.label}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-white dark:bg-[#0D1117]"
              style={{
                borderColor: `${position.accent}${
                  position.active ? "66" : "30"
                }`,
                boxShadow: position.active
                  ? `0 0 28px ${position.accent}20`
                  : undefined,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor:
                    position.accent,
                  opacity: position.active
                    ? 1
                    : 0.45,
                }}
              />

              {position.active && (
                <>
                  <span
                    className="absolute inset-[5px] rounded-full border"
                    style={{
                      borderColor: `${position.accent}22`,
                    }}
                  />

                  <span
                    className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white dark:border-[#0D1117]"
                    style={{
                      backgroundColor:
                        position.accent,
                    }}
                  />
                </>
              )}
            </div>

            <p className="mt-4 text-xs font-semibold text-[#0A1D2F]/55 dark:text-white/48">
              {position.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#2563EB]/15 bg-[#2563EB]/[0.035] p-5 dark:bg-[#3B82F6]/[0.045]">
        <div className="flex items-start gap-4">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,.5)]" />

          <div>
            <p className="text-xs font-semibold text-[#0A1D2F]/60 dark:text-white/52">
              Adaptcues
            </p>

            <p className="mt-2 text-xs leading-6 text-[#0A1D2F]/37 dark:text-white/33">
              Currently represented within the building stage as an
              Evolvaer venture in active product and technology
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   STAGE FACT
============================================================ */

function StageFact({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-white/[0.46] p-6 backdrop-blur-md dark:bg-[#0D1117]/[0.42] sm:p-7">
      <span className="font-mono text-[0.46rem] text-[#0A1D2F]/23 dark:text-white/21">
        {number}
      </span>

      <p className="mt-5 text-sm font-semibold text-[#0A1D2F]/62 dark:text-white/54">
        {label}
      </p>

      <p className="mt-3 text-xs leading-6 text-[#0A1D2F]/36 dark:text-white/32">
        {description}
      </p>
    </div>
  );
}