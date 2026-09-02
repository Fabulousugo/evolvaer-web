import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Braces,
  GitBranch,
  Layers3,
  TestTubeDiagonal,
} from "lucide-react";

const engineeringAreas = [
  {
    number: "01",
    icon: GitBranch,
    label: "Architecture",
    title: "Design the system",
    description:
      "We define how the technology should work as a complete system — its components, data flows, interfaces, dependencies and technical boundaries.",
    accent: "#22D3EE",
  },
  {
    number: "02",
    icon: Braces,
    label: "Prototype",
    title: "Make it tangible",
    description:
      "We turn the strongest technical assumptions into working prototypes so that ideas can be tested against reality rather than discussed in theory.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: TestTubeDiagonal,
    label: "Validate",
    title: "Test what matters",
    description:
      "We test performance, usability, reliability and technical assumptions early enough for what we learn to influence the system.",
    accent: "#7C3AED",
  },
  {
    number: "04",
    icon: Boxes,
    label: "Integrate",
    title: "Connect the pieces",
    description:
      "Software, AI, data and external services need to operate as one coherent system. We engineer the connections that make that possible.",
    accent: "#10B981",
  },
] as const;

const SYSTEM_LAYERS = [
  "Software",
  "AI & data",
  "Integrations",
  "Infrastructure",
] as const;

export function EngineerStage() {
  return (
    <section
      id="engineer"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.57] dark:bg-[#0D1117]/[0.56]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 94% 14%,
                rgba(34,211,238,0.07),
                transparent 30%
              ),
              radial-gradient(
                circle at 5% 90%,
                rgba(37,99,235,0.06),
                transparent 29%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34,211,238,.22) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,.22) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "76px 76px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22D3EE]/25 bg-[#22D3EE]/[0.06] text-[0.58rem] font-bold tracking-[0.12em] text-[#0891B2] dark:text-[#67E8F9]">
                03
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Engineer
              </span>
            </div>

            <h2 className="mt-7 max-w-[650px] text-[clamp(2.8rem,4.7vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0A1D2F] dark:text-white">
              Turn evidence
              <br />
              into a{" "}
              <span className="bg-gradient-to-r from-[#22D3EE] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#22D3EE] dark:via-[#3B82F6] dark:to-[#A855F7]">
                working system.
              </span>
            </h2>
          </div>

          <div className="max-w-[600px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Engineering is where validated possibility becomes
              something tangible. We translate what we have learned
              into architecture, prototypes and technical systems that
              can survive contact with the real world.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              The goal is not simply to make something work once. We
              engineer towards reliability, adaptability and a
              foundation strong enough to build upon.
            </p>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING SYSTEM
        ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.07] dark:border-white/[0.08] dark:bg-white/[0.07] md:grid-cols-2">
            {engineeringAreas.map(
              (area) => {
                const Icon =
                  area.icon;

                return (
                  <article
                    key={area.title}
                    className="group relative min-h-[22rem] overflow-hidden bg-white/[0.72] p-7 dark:bg-[#0D1117]/[0.74] sm:p-9"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(
                          circle at 94% 8%,
                          ${area.accent}16,
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
                          ${area.accent},
                          transparent
                        )`,
                      }}
                    />

                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-translate-y-0.5"
                          style={{
                            color:
                              area.accent,
                            borderColor: `${area.accent}30`,
                            backgroundColor: `${area.accent}0D`,
                          }}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </div>

                        <span className="font-mono text-[0.55rem] tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                          ENG /{" "}
                          {area.number}
                        </span>
                      </div>

                      <div className="mt-auto pt-16">
                        <p
                          className="text-[0.55rem] font-semibold uppercase tracking-[0.23em]"
                          style={{
                            color:
                              area.accent,
                          }}
                        >
                          {area.label}
                        </p>

                        <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                          {area.title}
                        </h3>

                        <p className="mt-4 max-w-[29rem] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                          {
                            area.description
                          }
                        </p>
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>

        {/* =====================================================
            ARCHITECTURE STRIP
        ===================================================== */}

        <div className="mt-14 lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#22D3EE]/20 bg-[#22D3EE]/[0.05] text-[#0891B2] dark:text-[#67E8F9]">
                <Layers3 className="h-[18px] w-[18px]" />
              </div>

              <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
                System thinking
              </p>

              <h3 className="mt-3 max-w-[22rem] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                Components are useful.
                <br />
                Systems create value.
              </h3>
            </div>

            <div className="relative overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.35] p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    radial-gradient(
                      circle at 48% 0%,
                      rgba(34,211,238,0.06),
                      transparent 32%
                    ),
                    radial-gradient(
                      circle at 98% 100%,
                      rgba(124,58,237,0.045),
                      transparent 27%
                    )
                  `,
                }}
              />

              <div className="relative grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <SystemModule
                  code="INPUT"
                  title="Signals + Data"
                  accent="#2563EB"
                />

                <SystemConnector />

                <SystemModule
                  code="SYSTEM"
                  title="Logic + Intelligence"
                  accent="#22D3EE"
                  active
                />

                <SystemConnector />

                <SystemModule
                  code="OUTPUT"
                  title="Useful Experience"
                  accent="#7C3AED"
                />
              </div>

              <div className="relative mt-7 grid gap-px overflow-hidden rounded-xl bg-[#0A1D2F]/[0.06] dark:bg-white/[0.06] sm:grid-cols-4">
                {SYSTEM_LAYERS.map(
                  (
                    item,
                    index,
                  ) => (
                    <div
                      key={item}
                      className="bg-white/50 px-4 py-3 dark:bg-[#0D1117]/70"
                    >
                      <p className="text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/20 dark:text-white/18">
                        0
                        {index + 1}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#0A1D2F]/50 dark:text-white/42">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-9 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-6 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#0891B2] dark:text-[#67E8F9]">
              Engineering principle
            </p>

            <p className="max-w-[55rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              We do not engineer technology for its own sake.{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                The sophistication of the system should serve the
                usefulness of the outcome.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HAND-OFF
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/25 dark:text-white/22">
              System validated
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#22D3EE] via-[#2563EB] to-[#7C3AED]" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#7C3AED] dark:text-[#C084FC]">
              Build the product
            </span>
          </div>

          <Link
            href="#build"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors duration-300 hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
          >
            Continue to build

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#22D3EE]/20 transition-[transform,border-color,background-color,color] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-[#0D1117]">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SystemModule({
  code,
  title,
  accent,
  active = false,
}: {
  code: string;
  title: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className="relative rounded-xl border px-4 py-5"
      style={{
        borderColor: `${accent}${
          active
            ? "55"
            : "28"
        }`,
        backgroundColor: `${accent}${
          active
            ? "0D"
            : "07"
        }`,
      }}
    >
      {active && (
        <span
          className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor:
              accent,
            boxShadow: `0 0 10px ${accent}90`,
          }}
        />
      )}

      <p className="font-mono text-[0.48rem] font-semibold tracking-[0.18em] text-[#0A1D2F]/24 dark:text-white/22">
        {code}
      </p>

      <p className="mt-2 text-sm font-semibold text-[#0A1D2F]/60 dark:text-white/52">
        {title}
      </p>
    </div>
  );
}

function SystemConnector() {
  return (
    <div className="hidden items-center md:flex">
      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />

      <span className="mx-1 text-[0.55rem] text-[#22D3EE]">
        →
      </span>

      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />
    </div>
  );
}