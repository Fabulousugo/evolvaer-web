"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  FlaskConical,
  Layers3,
  Orbit,
  Rocket,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    label: "Research",
    title: "Understand before committing.",
    description:
      "We investigate the problem, technology, users, constraints and opportunity so decisions are grounded in evidence rather than assumption.",
    contribution:
      "Problem understanding · Technical feasibility · Opportunity validation",
    icon: FlaskConical,
    accent: "#7C3AED",
  },
  {
    number: "02",
    label: "Technology",
    title: "Engineer the underlying system.",
    description:
      "We design and develop the technical foundations required to turn a validated idea into something reliable, adaptable and usable.",
    contribution:
      "Architecture · Software · AI & data · Integrations",
    icon: BrainCircuit,
    accent: "#2563EB",
  },
  {
    number: "03",
    label: "Product",
    title: "Turn capability into usefulness.",
    description:
      "We shape technology around the people and situations it is intended to serve, moving from technical capability to a coherent product experience.",
    contribution:
      "Product thinking · Experience · Prototyping · Iteration",
    icon: Layers3,
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Venture",
    title: "Build around what proves itself.",
    description:
      "When the product and opportunity continue to strengthen, we develop the operating and commercial foundations needed for the venture to grow.",
    contribution:
      "Venture design · Commercial model · Operations · Growth readiness",
    icon: Rocket,
    accent: "#10B981",
  },
];

export function VentureCapabilities() {
  return (
    <section
      id="venture-capabilities"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.54] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.56]" />

        <div className="absolute left-[-13rem] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#7C3AED]/[0.04] blur-[170px] dark:bg-[#A855F7]/[0.055]" />

        <div className="absolute right-[-15rem] top-[22%] h-[38rem] w-[38rem] rounded-full bg-[#22D3EE]/[0.045] blur-[180px] dark:bg-[#22D3EE]/[0.06]" />

        <div className="absolute bottom-[-16rem] left-[38%] h-[32rem] w-[32rem] rounded-full bg-[#10B981]/[0.03] blur-[160px] dark:bg-[#10B981]/[0.045]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#22D3EE]">
                04
              </span>

              <span className="h-px w-8 bg-[#22D3EE]/40" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#0891B2] dark:text-[#67E8F9]">
                What Evolvaer provides
              </p>
            </div>

            <h2 className="mt-6 max-w-[760px] text-[clamp(2.9rem,4.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              More than capital.
              <br />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#C084FC] dark:via-[#60A5FA] dark:to-[#67E8F9]">
                Capability.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Evolvaer is designed to do more than identify
              opportunities. We bring the capabilities needed to
              investigate them, engineer them and turn the strongest
              into products and ventures.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              These capabilities are not separate departments working
              in isolation. They operate around the same opportunity,
              sharing evidence and learning as the venture develops.
            </p>
          </div>
        </div>

        {/* =====================================================
            CAPABILITY SYSTEM
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT — SYSTEM CORE */}

          <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.34] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.07]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.09]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/[0.05] blur-[55px]"
            />

            <div className="relative flex h-full min-h-[30rem] items-center justify-center">
              <CapabilityDiagram />
            </div>

            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between sm:bottom-9 sm:left-9 sm:right-9">
              <span className="font-mono text-[0.46rem] uppercase tracking-[0.16em] text-[#0A1D2F]/22 dark:text-white/20">
                Connected capability
              </span>

              <span className="flex items-center gap-2 text-[0.5rem] font-semibold uppercase tracking-[0.15em] text-[#10B981] dark:text-[#34D399]">
                <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                Active system
              </span>
            </div>
          </div>

          {/* RIGHT — CAPABILITIES */}

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.06] dark:border-white/[0.08] dark:bg-white/[0.055] sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.label}
                  className="group relative min-h-[21rem] overflow-hidden bg-white/[0.62] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.68] sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[75px] transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${capability.accent}18`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border"
                        style={{
                          color: capability.accent,
                          borderColor: `${capability.accent}30`,
                          backgroundColor: `${capability.accent}0D`,
                        }}
                      >
                        <Icon className="h-[17px] w-[17px]" />
                      </div>

                      <span
                        className="font-mono text-[0.46rem]"
                        style={{
                          color: capability.accent,
                        }}
                      >
                        {capability.number}
                      </span>
                    </div>

                    <div className="mt-10">
                      <p
                        className="text-[0.52rem] font-semibold uppercase tracking-[0.21em]"
                        style={{
                          color: capability.accent,
                        }}
                      >
                        {capability.label}
                      </p>

                      <h3 className="mt-3 text-lg font-semibold leading-7 tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                        {capability.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                        {capability.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="border-t border-[#0A1D2F]/[0.07] pt-4 dark:border-white/[0.07]">
                        <p className="text-[0.5rem] leading-5 text-[#0A1D2F]/28 dark:text-white/25">
                          {capability.contribution}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            OPERATING IDEA
        ===================================================== */}

        <div className="mt-8 rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.28] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.016] sm:p-9">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Orbit className="h-4 w-4 text-[#7C3AED] dark:text-[#C084FC]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  Integrated by design
                </p>
              </div>

              <h3 className="mt-5 max-w-[350px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
                The venture sits at the centre.
              </h3>
            </div>

            <div>
              <p className="text-base leading-8 text-[#0A1D2F]/53 dark:text-white/47">
                Research can change the product. Product learning can
                change the engineering. Technical constraints can
                change the venture model. Commercial learning can
                create new research questions.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/39 dark:text-white/35">
                Instead of treating those as separate hand-offs, we
                allow them to continuously inform one another.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            VALUE FLOW
        ===================================================== */}

        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#0A1D2F]/[0.07] bg-[#0A1D2F]/[0.055] dark:border-white/[0.07] dark:bg-white/[0.055] md:grid-cols-5">
          <FlowItem
            label="Research"
            accent="#7C3AED"
          />

          <FlowArrow />

          <FlowItem
            label="Technology"
            accent="#2563EB"
          />

          <FlowArrow />

          <FlowItem
            label="Product"
            accent="#22D3EE"
          />

          <div className="hidden md:flex items-center justify-center bg-white/[0.42] dark:bg-[#0D1117]/[0.4]">
            <ArrowUpRight className="h-3.5 w-3.5 rotate-45 text-[#0A1D2F]/20 dark:text-white/18" />
          </div>

          <FlowItem
            label="Venture"
            accent="#10B981"
            className="md:col-start-5"
          />
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-7 border-t border-[#0A1D2F]/[0.08] pt-8 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <div>
            <p className="text-[0.51rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/25 dark:text-white/22">
              Capability creates the venture
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/46 dark:text-white/40">
              What happens next depends on how far the venture has
              progressed.
            </p>
          </div>

          <Link
            href="#venture-stages"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Explore venture stages

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITY DIAGRAM
============================================================ */

function CapabilityDiagram() {
  return (
    <div className="relative h-[25rem] w-full max-w-[27rem]">
      {/* connection axes */}

      <div className="absolute left-1/2 top-[16%] h-[68%] w-px -translate-x-1/2 bg-gradient-to-b from-[#7C3AED]/25 via-[#22D3EE]/30 to-[#10B981]/25" />

      <div className="absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#2563EB]/25 via-[#22D3EE]/30 to-[#22D3EE]/25" />

      {/* central venture */}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22D3EE]/30 bg-white/[0.72] shadow-[0_0_55px_rgba(34,211,238,.12)] backdrop-blur-xl dark:bg-[#0D1117]/[0.78]">
        <div className="absolute inset-2 rounded-full border border-[#22D3EE]/10" />

        <div className="relative text-center">
          <Boxes className="mx-auto h-5 w-5 text-[#22D3EE]" />

          <p className="mt-2 text-[0.54rem] font-semibold uppercase tracking-[0.15em] text-[#0A1D2F]/58 dark:text-white/52">
            Venture
          </p>
        </div>
      </div>

      <DiagramNode
        className="left-1/2 top-0 -translate-x-1/2"
        label="Research"
        accent="#7C3AED"
      />

      <DiagramNode
        className="right-0 top-1/2 -translate-y-1/2"
        label="Technology"
        accent="#2563EB"
      />

      <DiagramNode
        className="bottom-0 left-1/2 -translate-x-1/2"
        label="Product"
        accent="#22D3EE"
      />

      <DiagramNode
        className="left-0 top-1/2 -translate-y-1/2"
        label="Venture"
        accent="#10B981"
      />
    </div>
  );
}

function DiagramNode({
  className,
  label,
  accent,
}: {
  className: string;
  label: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute z-10 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border bg-white/[0.72] backdrop-blur-xl dark:bg-[#0D1117]/[0.72] ${className}`}
      style={{
        borderColor: `${accent}35`,
        boxShadow: `0 0 30px ${accent}0E`,
      }}
    >
      <span
        className="absolute top-3 h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 10px ${accent}`,
        }}
      />

      <span className="mt-2 text-center text-[0.53rem] font-semibold text-[#0A1D2F]/54 dark:text-white/48">
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   VALUE FLOW
============================================================ */

function FlowItem({
  label,
  accent,
  className = "",
}: {
  label: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-white/[0.46] px-5 py-5 backdrop-blur-md dark:bg-[#0D1117]/[0.42] ${className}`}
    >
      <div className="flex items-center gap-3">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
          }}
        />

        <span className="text-[0.57rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/46 dark:text-white/40">
          {label}
        </span>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden items-center justify-center bg-white/[0.42] dark:bg-[#0D1117]/[0.4] md:flex">
      <ArrowUpRight className="h-3.5 w-3.5 rotate-45 text-[#0A1D2F]/20 dark:text-white/18" />
    </div>
  );
}