"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Orbit,
  Radar,
  Sparkles,
} from "lucide-react";

const portfolioPrinciples = [
  {
    number: "01",
    title: "Opportunity-led",
    description:
      "New ventures begin with meaningful opportunities we believe are worth investigating — not with a requirement to fill the portfolio.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Technology-enabled",
    description:
      "We look for places where emerging or evolving technology can create a genuinely better way of solving a problem.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    title: "Evidence-earned",
    description:
      "Ideas move deeper into the portfolio only as research, technical progress and real-world learning strengthen the case for building.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Impact-oriented",
    description:
      "The goal is not simply to launch products. We want to build technology that can create durable usefulness and real-world value.",
    accent: "#10B981",
  },
];

export function FutureVentures() {
  return (
    <section
      id="future-ventures"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.46] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.48]" />

        <div className="absolute left-[35%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-[#2563EB]/[0.035] blur-[180px] dark:bg-[#3B82F6]/[0.05]" />

        <div className="absolute -right-48 top-[28%] h-[38rem] w-[38rem] rounded-full bg-[#22D3EE]/[0.04] blur-[180px] dark:bg-[#22D3EE]/[0.055]" />

        <div className="absolute -left-52 bottom-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.03] blur-[170px] dark:bg-[#A855F7]/[0.045]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                06
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Future ventures
              </p>
            </div>

            <h2 className="mt-6 max-w-[760px] text-[clamp(2.9rem,4.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              One venture is
              <br />
              only the{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#34D399]">
                beginning.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Evolvaer is being built to explore more than one
              technology, problem or market. Adaptcues is one venture
              emerging from that model — not the boundary of what the
              company can become.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              Future ventures will be determined by what we discover,
              what the evidence supports and where our capabilities can
              create meaningful value.
            </p>
          </div>
        </div>

        {/* =====================================================
            EXPANDING PORTFOLIO FIELD
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.28] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.016] lg:mt-24">
          <div className="grid lg:grid-cols-[0.68fr_1.32fr]">
            {/* LEFT */}

            <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <Orbit className="h-4 w-4 text-[#7C3AED] dark:text-[#C084FC]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  Portfolio horizon
                </p>
              </div>

              <h3 className="mt-6 max-w-[390px] text-[2rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
                Designed for what we have not discovered yet.
              </h3>

              <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                The portfolio architecture allows new opportunities to
                enter exploration without assuming what industries,
                technologies or products they must become.
              </p>

              <div className="mt-9 flex items-center gap-3 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-35 motion-reduce:animate-none" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
                </span>

                <span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/30 dark:text-white/27">
                  Exploration remains open
                </span>
              </div>
            </div>

            {/* RIGHT — PORTFOLIO VISUAL */}

            <div className="relative min-h-[35rem] overflow-hidden p-6 sm:p-9">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.055]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.07]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7C3AED]/[0.075]"
              />

              <div className="relative flex min-h-[30rem] items-center justify-center">
                <FuturePortfolioMap />
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between sm:bottom-9 sm:left-9 sm:right-9">
                <span className="font-mono text-[0.46rem] uppercase tracking-[0.16em] text-[#0A1D2F]/22 dark:text-white/20">
                  Evolvaer venture system
                </span>

                <span className="font-mono text-[0.46rem] uppercase tracking-[0.16em] text-[#0A1D2F]/22 dark:text-white/20">
                  Open architecture
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHAT DEFINES A FUTURE VENTURE
        ===================================================== */}

        <div className="mt-16 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Radar className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  What we look for
                </p>
              </div>

              <h3 className="mt-5 max-w-[380px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
                The sector can change.
                <br />
                The standard should not.
              </h3>
            </div>

            <p className="max-w-[650px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
              We are deliberately broad about where future
              opportunities may come from, while remaining selective
              about what deserves to become part of the portfolio.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.06] dark:border-white/[0.08] dark:bg-white/[0.055] md:grid-cols-2 lg:grid-cols-4">
            {portfolioPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="group relative min-h-[19rem] overflow-hidden bg-white/[0.58] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.66]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundColor: `${principle.accent}18`,
                  }}
                />

                <div className="relative flex h-full flex-col">
                  <span
                    className="font-mono text-[0.47rem]"
                    style={{
                      color: principle.accent,
                    }}
                  >
                    {principle.number}
                  </span>

                  <div className="mt-auto pt-12">
                    <span
                      className="mb-4 block h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: principle.accent,
                        boxShadow: `0 0 10px ${principle.accent}66`,
                      }}
                    />

                    <h4 className="text-lg font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                      {principle.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            WHAT WE ARE NOT CLAIMING
        ===================================================== */}

        <div className="mt-16 grid gap-6 rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9 lg:mt-20 lg:grid-cols-[0.62fr_1.38fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[#7C3AED] dark:text-[#C084FC]" />

              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                Built for possibility
              </p>
            </div>

            <h3 className="mt-5 max-w-[360px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
              Future capacity is not the same as a future promise.
            </h3>
          </div>

          <div>
            <p className="text-base leading-8 text-[#0A1D2F]/53 dark:text-white/47">
              We are not filling the roadmap with hypothetical
              companies simply to make the portfolio appear larger.
              Future ventures should emerge from genuine exploration
              and evidence.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/39 dark:text-white/35">
              That means the portfolio can remain intentionally
              incomplete. The open space represents room to discover,
              not products we are pretending already exist.
            </p>
          </div>
        </div>

        {/* =====================================================
            HORIZON
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.56fr_1.44fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#60A5FA]">
                The horizon
              </p>
            </div>

            <p className="max-w-[58rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              Evolvaer&apos;s long-term opportunity is not to predict
              every venture today. It is to build the capability to{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                recognise, investigate and create the right ventures
                when the opportunities emerge.
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
              Keep looking forward
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/46 dark:text-white/40">
              The portfolio grows when an opportunity deserves to.
            </p>
          </div>

          <Link
            href="#ventures-cta"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Continue

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FUTURE PORTFOLIO MAP
============================================================ */

function FuturePortfolioMap() {
  return (
    <div className="relative h-[27rem] w-full max-w-[32rem]">
      {/* =====================================================
          CONNECTIONS
      ===================================================== */}

      <ConnectionLine
        className="left-[50%] top-[50%] w-[28%] -rotate-[34deg]"
        accent="#22D3EE"
      />

      <ConnectionLine
        className="left-[28%] top-[50%] w-[22%] rotate-[28deg]"
        accent="#7C3AED"
        subtle
      />

      <ConnectionLine
        className="left-[50%] top-[50%] w-[27%] rotate-[39deg]"
        accent="#10B981"
        subtle
      />

      <ConnectionLine
        className="left-[24%] top-[32%] w-[29%] rotate-[5deg]"
        accent="#2563EB"
        subtle
      />

      {/* =====================================================
          EVOLVAER CORE
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2563EB]/30 bg-white/[0.8] shadow-[0_0_55px_rgba(37,99,235,.12)] backdrop-blur-xl dark:bg-[#0D1117]/[0.84]">
        <div className="absolute inset-[7px] rounded-full border border-[#2563EB]/10" />

        <div className="text-center">
          <CircleDot className="mx-auto h-5 w-5 text-[#2563EB] dark:text-[#60A5FA]" />

          <p className="mt-2 text-[0.57rem] font-semibold text-[#0A1D2F] dark:text-white">
            Evolvaer
          </p>

          <p className="mt-1 text-[0.42rem] uppercase tracking-[0.13em] text-[#0A1D2F]/25 dark:text-white/22">
            Venture core
          </p>
        </div>
      </div>

      {/* =====================================================
          ADAPTCUES
      ===================================================== */}

      <FutureNode
        className="right-[1%] top-[16%]"
        label="Adaptcues"
        sublabel="Building"
        accent="#22D3EE"
        active
      />

      {/* =====================================================
          OPEN NODES
      ===================================================== */}

      <FutureNode
        className="left-[4%] top-[11%]"
        label="Opportunity"
        sublabel="Undiscovered"
        accent="#7C3AED"
      />

      <FutureNode
        className="bottom-[7%] right-[5%]"
        label="Opportunity"
        sublabel="Future"
        accent="#10B981"
      />

      <FutureNode
        className="bottom-[4%] left-[9%]"
        label="Opportunity"
        sublabel="Exploration"
        accent="#2563EB"
      />

      <div className="absolute right-[18%] top-[51%] h-3 w-3 rounded-full border border-dashed border-[#0A1D2F]/15 dark:border-white/15" />

      <div className="absolute left-[19%] top-[47%] h-2 w-2 rounded-full border border-dashed border-[#0A1D2F]/12 dark:border-white/12" />
    </div>
  );
}

function FutureNode({
  className,
  label,
  sublabel,
  accent,
  active = false,
}: {
  className: string;
  label: string;
  sublabel: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className={`absolute z-10 flex flex-col items-center text-center ${className}`}
    >
      <div
        className={`relative flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-full border bg-white/[0.72] backdrop-blur-lg dark:bg-[#0D1117]/[0.76] ${
          active ? "" : "border-dashed"
        }`}
        style={{
          borderColor: `${accent}${active ? "55" : "2A"}`,
          boxShadow: active
            ? `0 0 32px ${accent}18`
            : undefined,
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: accent,
            opacity: active ? 1 : 0.38,
            boxShadow: active
              ? `0 0 12px ${accent}`
              : undefined,
          }}
        />

        {active && (
          <span
            className="absolute inset-[6px] rounded-full border"
            style={{
              borderColor: `${accent}20`,
            }}
          />
        )}
      </div>

      <p className="mt-3 text-[0.57rem] font-semibold text-[#0A1D2F]/58 dark:text-white/50">
        {label}
      </p>

      <p className="mt-1 text-[0.43rem] uppercase tracking-[0.12em] text-[#0A1D2F]/24 dark:text-white/21">
        {sublabel}
      </p>
    </div>
  );
}

function ConnectionLine({
  className,
  accent,
  subtle = false,
}: {
  className: string;
  accent: string;
  subtle?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-0 h-px origin-left ${className}`}
      style={{
        background: `linear-gradient(90deg, ${accent}${
          subtle ? "18" : "38"
        }, ${accent}${subtle ? "0A" : "18"})`,
      }}
    />
  );
}