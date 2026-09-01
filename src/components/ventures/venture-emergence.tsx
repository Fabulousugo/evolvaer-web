"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  FlaskConical,
  Lightbulb,
  PackageCheck,
  Rocket,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Opportunity",
    title: "Find the signal.",
    description:
      "We identify a meaningful problem or shift where emerging technology may create a new and useful possibility.",
    question: "Is there something here worth investigating?",
    icon: Lightbulb,
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Validation",
    title: "Earn the next step.",
    description:
      "Research tests the problem, assumptions, technical feasibility and opportunity before significant resources are committed.",
    question: "Does the evidence justify moving forward?",
    icon: FlaskConical,
    accent: "#7C3AED",
  },
  {
    number: "03",
    label: "Product",
    title: "Make it real.",
    description:
      "Engineering and product development turn the validated opportunity into something people can actually experience and use.",
    question: "Can we create something genuinely useful?",
    icon: PackageCheck,
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Venture",
    title: "Build around what works.",
    description:
      "When the product and opportunity continue to prove themselves, we develop the systems required for an independent, scalable venture.",
    question: "Can this become an enduring business?",
    icon: Rocket,
    accent: "#10B981",
  },
];

export function VentureEmergence() {
  return (
    <section
      id="how-ventures-emerge"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.56] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.58]" />

        <div className="absolute -left-52 top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.04] blur-[170px] dark:bg-[#3B82F6]/[0.06]" />

        <div className="absolute right-[-13rem] top-[35%] h-[34rem] w-[34rem] rounded-full bg-[#10B981]/[0.035] blur-[170px] dark:bg-[#10B981]/[0.05]" />

        <div
          className="absolute inset-0 opacity-[0.014] dark:opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.16) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#7C3AED] dark:text-[#C084FC]">
                03
              </span>

              <span className="h-px w-8 bg-[#7C3AED]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#7C3AED] dark:text-[#C084FC]">
                How ventures emerge
              </p>
            </div>

            <h2 className="mt-6 max-w-[720px] text-[clamp(2.9rem,4.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Ideas don&apos;t become
              <br />
              ventures{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#C084FC] dark:to-[#34D399]">
                immediately.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Every stage increases our level of commitment. An idea
              has to earn its way forward through evidence, technical
              progress and real-world learning.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              That allows us to explore ambitiously without assuming
              that every interesting possibility deserves to become a
              product or company.
            </p>
          </div>
        </div>

        {/* =====================================================
            VENTURE FORMATION PIPELINE
        ===================================================== */}

        <div className="relative mt-16 lg:mt-24">
          {/* desktop connecting line */}

          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-[3.3rem] hidden h-px bg-gradient-to-r from-[#2563EB]/30 via-[#7C3AED]/30 via-50% to-[#10B981]/30 lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.label}
                  className="group relative"
                >
                  {/* node */}

                  <div className="relative z-10 mb-6 flex items-center lg:justify-center">
                    <div
                      className="relative flex h-[6.6rem] w-[6.6rem] items-center justify-center rounded-full border bg-white/[0.72] backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.04] dark:bg-[#0D1117]/[0.72]"
                      style={{
                        borderColor: `${stage.accent}35`,
                        boxShadow: `0 0 50px ${stage.accent}0D`,
                      }}
                    >
                      <div
                        className="absolute inset-[8px] rounded-full border"
                        style={{
                          borderColor: `${stage.accent}18`,
                        }}
                      />

                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                        style={{
                          color: stage.accent,
                          backgroundColor: `${stage.accent}0E`,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <span
                        className="absolute -right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full border bg-white font-mono text-[0.43rem] dark:bg-[#0D1117]"
                        style={{
                          borderColor: `${stage.accent}35`,
                          color: stage.accent,
                        }}
                      >
                        {stage.number}
                      </span>
                    </div>

                    {index < stages.length - 1 && (
                      <ArrowDown
                        aria-hidden="true"
                        className="ml-4 h-4 w-4 text-[#0A1D2F]/18 dark:text-white/16 lg:hidden"
                      />
                    )}
                  </div>

                  {/* content */}

                  <div className="relative min-h-[23rem] overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-white/[0.58] p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.72] dark:border-white/[0.08] dark:bg-white/[0.022] dark:hover:bg-white/[0.035]">
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundColor: `${stage.accent}18`,
                      }}
                    />

                    <div className="relative flex h-full flex-col">
                      <p
                        className="text-[0.54rem] font-semibold uppercase tracking-[0.22em]"
                        style={{
                          color: stage.accent,
                        }}
                      >
                        {stage.label}
                      </p>

                      <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/44 dark:text-white/39">
                        {stage.description}
                      </p>

                      <div className="mt-auto pt-9">
                        <div className="border-t border-[#0A1D2F]/[0.07] pt-5 dark:border-white/[0.07]">
                          <p className="text-[0.47rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/24 dark:text-white/22">
                            Decision question
                          </p>

                          <p className="mt-2 text-xs font-medium leading-5 text-[#0A1D2F]/52 dark:text-white/46">
                            {stage.question}
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
            COMMITMENT MODEL
        ===================================================== */}

        <div className="mt-16 rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#2563EB]" />

                <p className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/34 dark:text-white/30">
                  Commitment model
                </p>
              </div>

              <h3 className="mt-5 max-w-[360px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
                Evidence increases.
                <br />
                Commitment follows.
              </h3>
            </div>

            <CommitmentScale />
          </div>
        </div>

        {/* =====================================================
            TWO POSSIBLE OUTCOMES
        ===================================================== */}

        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.07] bg-[#0A1D2F]/[0.055] dark:border-white/[0.07] dark:bg-white/[0.055] md:grid-cols-2">
          <div className="bg-white/[0.46] p-7 backdrop-blur-lg dark:bg-[#0D1117]/[0.42] sm:p-8">
            <span className="font-mono text-[0.48rem] text-[#64748B]">
              OUTCOME / A
            </span>

            <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
              Learn and stop.
            </h3>

            <p className="mt-3 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
              If the evidence weakens the opportunity, we keep the
              learning and avoid committing resources to the wrong
              venture.
            </p>
          </div>

          <div className="bg-white/[0.58] p-7 backdrop-blur-lg dark:bg-[#0D1117]/[0.5] sm:p-8">
            <span className="font-mono text-[0.48rem] text-[#10B981] dark:text-[#34D399]">
              OUTCOME / B
            </span>

            <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
              Learn and build.
            </h3>

            <p className="mt-3 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
              If evidence, product learning and technical progress
              strengthen the opportunity, the idea earns deeper
              investment.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE + HANDOFF
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-8 border-y border-[#0A1D2F]/[0.08] py-9 dark:border-white/[0.08] lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[760px] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
            A venture is not the starting point.{" "}
            <span className="text-[#0A1D2F] dark:text-white">
              It is the result of progressively stronger evidence that
              something deserves to be built.
            </span>
          </p>

          <Link
            href="#venture-capabilities"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            What Evolvaer provides

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CommitmentScale() {
  const levels = [
    {
      label: "Explore",
      width: "24%",
      accent: "#2563EB",
    },
    {
      label: "Validate",
      width: "48%",
      accent: "#7C3AED",
    },
    {
      label: "Build",
      width: "72%",
      accent: "#22D3EE",
    },
    {
      label: "Venture",
      width: "100%",
      accent: "#10B981",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/25 dark:text-white/22">
          Lower commitment
        </span>

        <span className="text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/25 dark:text-white/22">
          Higher commitment
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {levels.map((level) => (
          <div
            key={level.label}
            className="flex items-center gap-4"
          >
            <span className="w-[4.2rem] shrink-0 text-[0.55rem] font-semibold text-[#0A1D2F]/42 dark:text-white/37">
              {level.label}
            </span>

            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#0A1D2F]/[0.055] dark:bg-white/[0.055]">
              <div
                className="h-full rounded-full"
                style={{
                  width: level.width,
                  backgroundColor: level.accent,
                  boxShadow: `0 0 16px ${level.accent}35`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}