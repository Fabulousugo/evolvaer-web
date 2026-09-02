import Link from "next/link";
import {
  ArrowUpRight,
  Gauge,
  Network,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const scaleDimensions = [
  {
    number: "01",
    icon: Gauge,
    label: "Performance",
    title: "Strengthen the technology",
    description:
      "We improve reliability, performance, observability and infrastructure so the product can support increasing demand without losing quality.",
    accent: "#F97316",
  },
  {
    number: "02",
    icon: Users,
    label: "Adoption",
    title: "Design for wider use",
    description:
      "We learn how different users adopt the product, where friction appears and what needs to change as usage expands beyond the earliest users.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: Network,
    label: "Operations",
    title: "Build repeatable systems",
    description:
      "Growth needs more than technology. We develop the operational processes, tooling and feedback loops needed to support the product consistently.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    icon: TrendingUp,
    label: "Readiness",
    title: "Strengthen the venture",
    description:
      "We examine the commercial model, positioning and growth assumptions alongside the technology so promising products can become sustainable ventures.",
    accent: "#10B981",
  },
] as const;

const coordinatedSystems = [
  {
    number: "01",
    title: "Technology",
    text: "Performance, reliability and infrastructure.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Product",
    text: "Experience, capability and adoption.",
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Operations",
    text: "Processes, tooling and repeatability.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Venture",
    text: "Positioning, economics and commercial readiness.",
    accent: "#F97316",
  },
] as const;

const readinessChecks = [
  {
    label: "Useful",
    text: "People receive meaningful value.",
  },
  {
    label: "Reliable",
    text: "The system performs consistently.",
  },
  {
    label: "Repeatable",
    text: "Growth does not depend on improvisation.",
  },
] as const;

export function ScaleStage() {
  return (
    <section
      id="scale"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.58] dark:bg-[#0D1117]/[0.58]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 94% 12%,
                rgba(249,115,22,0.065),
                transparent 31%
              ),
              radial-gradient(
                circle at 5% 90%,
                rgba(34,211,238,0.06),
                transparent 30%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.032]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(249,115,22,.18) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,.18) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "104px 104px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F97316]/25 bg-[#F97316]/[0.06] text-[0.58rem] font-bold tracking-[0.12em] text-[#EA580C] dark:text-[#FB923C]">
                05
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Scale
              </span>
            </div>

            <h2 className="mt-7 max-w-[660px] text-[clamp(2.8rem,4.7vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0A1D2F] dark:text-white">
              Make what works
              <br />
              work at{" "}
              <span className="bg-gradient-to-r from-[#F97316] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#FB923C] dark:via-[#3B82F6] dark:to-[#22D3EE]">
                greater scale.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              A product that works for its first users is not
              necessarily ready for its next thousand. Scaling means
              strengthening the technology, operations and venture
              around the product as its demands change.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              We treat scale as a systems problem — not simply a
              question of adding more users.
            </p>
          </div>
        </div>

        {/* =====================================================
            SCALE DIMENSIONS
        ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.07] dark:border-white/[0.08] dark:bg-white/[0.07] md:grid-cols-2">
            {scaleDimensions.map((dimension) => {
              const Icon = dimension.icon;

              return (
                <article
                  key={dimension.title}
                  className="group relative min-h-[22rem] overflow-hidden bg-white/[0.74] p-7 dark:bg-[#0D1117]/[0.75] sm:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(
                        circle at 94% 8%,
                        ${dimension.accent}16,
                        transparent 30%
                      )`,
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(
                        90deg,
                        ${dimension.accent},
                        transparent
                      )`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{
                          color: dimension.accent,
                          borderColor: `${dimension.accent}30`,
                          backgroundColor: `${dimension.accent}0D`,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <span className="font-mono text-[0.55rem] tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                        SCALE / {dimension.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-16">
                      <p
                        className="text-[0.55rem] font-semibold uppercase tracking-[0.23em]"
                        style={{
                          color: dimension.accent,
                        }}
                      >
                        {dimension.label}
                      </p>

                      <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                        {dimension.title}
                      </h3>

                      <p className="mt-4 max-w-[29rem] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                        {dimension.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SCALE MODEL
        ===================================================== */}

        <div className="mt-14 grid gap-9 lg:mt-20 lg:grid-cols-[0.64fr_1.36fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F97316]/20 bg-[#F97316]/[0.05] text-[#EA580C] dark:text-[#FB923C]">
              <TrendingUp className="h-[18px] w-[18px]" />
            </div>

            <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              Scaling model
            </p>

            <h3 className="mt-3 max-w-[24rem] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
              Growth exposes the weaknesses that small systems can
              hide.
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.35] p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  radial-gradient(
                    circle at 92% 8%,
                    rgba(249,115,22,0.055),
                    transparent 31%
                  ),
                  radial-gradient(
                    circle at 5% 95%,
                    rgba(37,99,235,0.045),
                    transparent 28%
                  )
                `,
              }}
            />

            <div className="relative grid gap-6 md:grid-cols-[0.8fr_auto_1fr_auto_1.2fr] md:items-center">
              <ScaleNode
                number="01"
                eyebrow="Prove"
                title="It works"
                description="A useful product exists."
                accent="#A855F7"
              />

              <ScaleConnector />

              <ScaleNode
                number="02"
                eyebrow="Strengthen"
                title="It holds"
                description="The system remains dependable."
                accent="#2563EB"
              />

              <ScaleConnector />

              <ScaleNode
                number="03"
                eyebrow="Expand"
                title="It grows"
                description="Technology and operations support wider adoption."
                accent="#F97316"
                active
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            FOUR SYSTEMS THAT MUST SCALE TOGETHER
        ===================================================== */}

        <div className="mt-14 lg:mt-20">
          <div className="flex flex-col gap-5 border-b border-[#0A1D2F]/[0.08] pb-7 dark:border-white/[0.08] sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
                Coordinated growth
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                Scale the whole system.
              </h3>
            </div>

            <p className="max-w-[31rem] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/36">
              Sustainable growth becomes difficult when one part of
              the venture advances much faster than everything around
              it.
            </p>
          </div>

          <div className="grid md:grid-cols-4">
            {coordinatedSystems.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "group relative py-8 md:px-6",
                  index > 0
                    ? "border-t border-[#0A1D2F]/[0.08] dark:border-white/[0.08] md:border-l md:border-t-0"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <span className="font-mono text-[0.5rem] tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                    {item.number}
                  </span>
                </div>

                <h4 className="mt-8 text-base font-semibold tracking-[-0.02em] text-[#0A1D2F] dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-3 max-w-[15rem] text-xs leading-6 text-[#0A1D2F]/40 dark:text-white/35">
                  {item.text}
                </p>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-10 origin-left transition-transform duration-300 group-hover:scale-x-150"
                  style={{
                    backgroundColor: item.accent,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SCALE PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-9 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-6 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#EA580C] dark:text-[#FB923C]">
              Scale principle
            </p>

            <p className="max-w-[55rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              Scaling is not making everything bigger. It is making
              sure that{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                what creates value can continue working as the
                environment around it becomes more demanding.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            READINESS CHECK
        ===================================================== */}

        <div className="relative mt-14 overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.34] p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8 lg:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 0% 50%, rgba(16,185,129,0.055), transparent 28%)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/[0.06] text-[#059669] dark:text-[#34D399]">
                <ShieldCheck className="h-[18px] w-[18px]" />
              </span>

              <div>
                <p className="text-[0.54rem] font-semibold uppercase tracking-[0.22em] text-[#059669] dark:text-[#34D399]">
                  Scale readiness
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                  Growth should be earned.
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {readinessChecks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#0A1D2F]/[0.07] bg-white/[0.46] px-4 py-4 dark:border-white/[0.07] dark:bg-white/[0.025]"
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,.45)]" />

                  <p className="mt-4 text-sm font-semibold text-[#0A1D2F]/65 dark:text-white/56">
                    {item.label}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[#0A1D2F]/36 dark:text-white/32">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            HAND-OFF
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.08] pt-7 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/25 dark:text-white/22">
              Sustainable growth
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#F97316] via-[#22D3EE] to-[#10B981]" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#059669] dark:text-[#34D399]">
              Create impact
            </span>
          </div>

          <Link
            href="#impact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors duration-300 hover:text-[#10B981] dark:text-white/45 dark:hover:text-[#34D399]"
          >
            Continue to impact

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#10B981]/20 transition-[transform,border-color,background-color,color] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#10B981] group-hover:bg-[#10B981] group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ScaleNode({
  number,
  eyebrow,
  title,
  description,
  accent,
  active = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className="relative rounded-xl border p-5"
      style={{
        borderColor: `${accent}${active ? "50" : "25"}`,
        backgroundColor: `${accent}${active ? "0D" : "06"}`,
      }}
    >
      {active && (
        <span
          className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 10px ${accent}90`,
          }}
        />
      )}

      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.5rem] font-semibold"
          style={{
            color: accent,
          }}
        >
          {number}
        </span>

        <span className="text-[0.48rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/25 dark:text-white/22">
          {eyebrow}
        </span>
      </div>

      <p className="mt-5 text-base font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
        {title}
      </p>

      <p className="mt-2 text-xs leading-6 text-[#0A1D2F]/38 dark:text-white/34">
        {description}
      </p>
    </div>
  );
}

function ScaleConnector() {
  return (
    <div className="hidden items-center md:flex">
      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />

      <span className="mx-1 text-[0.55rem] text-[#F97316]/70">
        →
      </span>

      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />
    </div>
  );
}