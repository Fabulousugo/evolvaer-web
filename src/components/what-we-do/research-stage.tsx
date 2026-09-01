"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Binary,
  FlaskConical,
  Network,
  ShieldCheck,
} from "lucide-react";

const researchQuestions = [
  {
    number: "01",
    icon: FlaskConical,
    label: "Validate",
    title: "Is the idea technically credible?",
    description:
      "We test assumptions, investigate the underlying technology and determine whether the opportunity is technically achievable.",
    accent: "#7C3AED",
  },
  {
    number: "02",
    icon: Network,
    label: "Understand",
    title: "Where does it fit?",
    description:
      "We examine users, workflows, industries and existing systems to understand where the technology could create meaningful value.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: ShieldCheck,
    label: "Challenge",
    title: "What could make it fail?",
    description:
      "We identify technical, commercial, operational and adoption constraints before committing significant resources to building.",
    accent: "#22D3EE",
  },
];

export function ResearchStage() {
  return (
    <section
      id="research"
      className="relative min-h-[100svh] overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.68] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.62]" />

        <div className="absolute -right-52 top-[12%] h-[36rem] w-[36rem] rounded-full bg-[#7C3AED]/[0.05] blur-[170px] dark:bg-[#A855F7]/[0.075]" />

        <div className="absolute -left-48 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.04] blur-[165px] dark:bg-[#3B82F6]/[0.06]" />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.22) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] text-[0.58rem] font-bold tracking-[0.12em] text-[#7C3AED] dark:border-[#A855F7]/25 dark:bg-[#A855F7]/[0.08] dark:text-[#C084FC]">
                02
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Research
              </span>
            </div>

            <h2 className="mt-7 max-w-[610px] text-[clamp(2.8rem,4.7vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0A1D2F] dark:text-white">
              Turn signals
              <br />
              into{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#A855F7] dark:via-[#3B82F6] dark:to-[#22D3EE]">
                evidence.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end lg:pt-16">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              An interesting idea is only a starting point. Research
              helps us determine whether the opportunity is real,
              whether the technology can support it and whether it is
              worth taking further.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              The objective is not to prove that every idea is good.
              It is to understand enough to make a better decision.
            </p>
          </div>
        </div>

        {/* =====================================================
            RESEARCH NETWORK
        ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.07] dark:border-white/[0.08] dark:bg-white/[0.07] lg:grid-cols-3">
            {researchQuestions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[25rem] overflow-hidden bg-white/[0.72] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.72] sm:p-8 lg:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${item.accent}18`,
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{
                          color: item.accent,
                          borderColor: `${item.accent}30`,
                          backgroundColor: `${item.accent}0C`,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <span className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/20 dark:text-white/18">
                        R / {item.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-20">
                      <p
                        className="text-[0.55rem] font-semibold uppercase tracking-[0.22em]"
                        style={{
                          color: item.accent,
                        }}
                      >
                        {item.label}
                      </p>

                      <h3 className="mt-4 max-w-[18rem] text-[1.35rem] font-semibold leading-[1.18] tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[22rem] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DECISION ENGINE
        ===================================================== */}

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] text-[#7C3AED] dark:border-[#A855F7]/25 dark:bg-[#A855F7]/[0.07] dark:text-[#C084FC]">
              <Binary className="h-[18px] w-[18px]" />
            </div>

            <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              Research outcome
            </p>

            <h3 className="mt-3 max-w-[20rem] text-2xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
              Evidence should lead to a decision.
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] p-6 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-8">
            <div className="grid gap-7 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <DecisionNode
                label="Signal"
                value="Opportunity"
                color="#2563EB"
              />

              <DecisionConnector />

              <DecisionNode
                label="Evidence"
                value="Validated"
                color="#7C3AED"
              />

              <DecisionConnector />

              <DecisionNode
                label="Decision"
                value="Engineer"
                color="#22D3EE"
                active
              />
            </div>

            <div className="mt-8 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[35rem] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                  When the evidence is strong enough, the question
                  changes from{" "}
                  <span className="font-semibold text-[#0A1D2F]/68 dark:text-white/65">
                    “Should this exist?”
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                    “How should we make it work?”
                  </span>
                </p>

                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.05] px-3 py-2 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0891B2] dark:text-[#67E8F9]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,.8)]" />
                  Proceed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESEARCH IS ALSO ALLOWED TO SAY NO
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-8 dark:border-white/[0.08] lg:mt-18">
          <div className="grid gap-7 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#7C3AED] dark:text-[#C084FC]">
              An important outcome
            </p>

            <p className="max-w-[54rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/65 dark:text-white/58">
              Sometimes the best research result is deciding{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                not to build.
              </span>{" "}
              Learning early is more valuable than engineering the
              wrong solution well.
            </p>
          </div>
        </div>

        {/* =====================================================
            HAND-OFF
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/25 dark:text-white/22">
              Opportunity validated
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#22D3EE]">
              Engineer the system
            </span>
          </div>

          <Link
            href="#engineer"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
          >
            Continue to engineering

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#22D3EE]/20 transition-all duration-300 group-hover:border-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-[#0D1117]">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function DecisionNode({
  label,
  value,
  color,
  active = false,
}: {
  label: string;
  value: string;
  color: string;
  active?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: active
              ? `0 0 18px ${color}`
              : undefined,
          }}
        />

        <span className="text-[0.5rem] font-semibold uppercase tracking-[0.21em] text-[#0A1D2F]/26 dark:text-white/24">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-[#0A1D2F]/62 dark:text-white/52">
        {value}
      </p>
    </div>
  );
}

function DecisionConnector() {
  return (
    <div className="hidden items-center sm:flex">
      <span className="h-px w-7 bg-gradient-to-r from-[#7C3AED]/20 via-[#2563EB]/50 to-[#22D3EE]/20" />

      <span className="ml-1 text-[0.55rem] text-[#0A1D2F]/18 dark:text-white/18">
        →
      </span>
    </div>
  );
}   