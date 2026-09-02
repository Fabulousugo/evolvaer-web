import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Gauge,
  PanelsTopLeft,
  Repeat2,
  Sparkles,
} from "lucide-react";

const buildLayers = [
  {
    number: "01",
    icon: PanelsTopLeft,
    label: "Product",
    title: "Design the experience",
    description:
      "We shape the engineered system into a product that is understandable, usable and aligned with the people it is intended to serve.",
    accent: "#A855F7",
  },
  {
    number: "02",
    icon: Blocks,
    label: "Structure",
    title: "Build the product foundation",
    description:
      "We turn prototypes and technical architecture into a robust product foundation that can support real users, workflows and future growth.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: Repeat2,
    label: "Iteration",
    title: "Learn through use",
    description:
      "Real usage exposes what prototypes cannot. We use feedback, behaviour and system performance to refine what the product becomes.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    icon: Gauge,
    label: "Readiness",
    title: "Prepare for reality",
    description:
      "We strengthen reliability, security, usability, observability and operational readiness before the product is pushed further into the world.",
    accent: "#10B981",
  },
] as const;

const BUILD_LOOP = [
  {
    number: "01",
    label: "Build",
    description:
      "Create the next meaningful version.",
  },
  {
    number: "02",
    label: "Use",
    description:
      "Put it into a real context.",
  },
  {
    number: "03",
    label: "Learn",
    description:
      "Observe behaviour and outcomes.",
  },
  {
    number: "04",
    label: "Improve",
    description:
      "Strengthen what deserves to continue.",
  },
] as const;

export function BuildStage() {
  return (
    <section
      id="build"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.62] dark:bg-[#0D1117]/[0.6]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 94% 14%,
                rgba(168,85,247,0.075),
                transparent 30%
              ),
              radial-gradient(
                circle at 5% 90%,
                rgba(37,99,235,0.055),
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
                rgba(168,85,247,.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,.2) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "84px 84px",
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
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A855F7]/25 bg-[#A855F7]/[0.06] text-[0.58rem] font-bold tracking-[0.12em] text-[#7C3AED] dark:text-[#C084FC]">
                04
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Build
              </span>
            </div>

            <h2 className="mt-7 max-w-[660px] text-[clamp(2.8rem,4.7vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0A1D2F] dark:text-white">
              Turn the system
              <br />
              into a{" "}
              <span className="bg-gradient-to-r from-[#A855F7] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#C084FC] dark:via-[#3B82F6] dark:to-[#22D3EE]">
                product.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Engineering proves that the system can work. Building
              turns that system into something people can actually
              use, adopt and rely on.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              We bring together technology, product thinking and real
              usage to move from a validated technical system to a
              coherent product.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRODUCT CONSTRUCTION
        ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.07] dark:border-white/[0.08] dark:bg-white/[0.07] md:grid-cols-2">
            {buildLayers.map(
              (layer) => {
                const Icon =
                  layer.icon;

                return (
                  <article
                    key={layer.title}
                    className="group relative min-h-[22rem] overflow-hidden bg-white/[0.74] p-7 dark:bg-[#0D1117]/[0.75] sm:p-9"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(
                          circle at 94% 8%,
                          ${layer.accent}16,
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
                          ${layer.accent},
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
                              layer.accent,
                            borderColor: `${layer.accent}30`,
                            backgroundColor: `${layer.accent}0D`,
                          }}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </div>

                        <span className="font-mono text-[0.55rem] tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                          BUILD /{" "}
                          {layer.number}
                        </span>
                      </div>

                      <div className="mt-auto pt-16">
                        <p
                          className="text-[0.55rem] font-semibold uppercase tracking-[0.23em]"
                          style={{
                            color:
                              layer.accent,
                          }}
                        >
                          {layer.label}
                        </p>

                        <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                          {layer.title}
                        </h3>

                        <p className="mt-4 max-w-[29rem] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                          {
                            layer.description
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
            SYSTEM → PRODUCT
        ===================================================== */}

        <div className="mt-14 grid gap-9 lg:mt-20 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A855F7]/20 bg-[#A855F7]/[0.05] text-[#7C3AED] dark:text-[#C084FC]">
              <Sparkles className="h-[18px] w-[18px]" />
            </div>

            <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              Product formation
            </p>

            <h3 className="mt-3 max-w-[23rem] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
              A working system is not automatically a useful product.
            </h3>

            <p className="mt-4 max-w-[24rem] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/36">
              The product layer is where technical capability becomes
              understandable, accessible and valuable to the person
              using it.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.35] p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  radial-gradient(
                    circle at 48% 4%,
                    rgba(168,85,247,0.06),
                    transparent 32%
                  ),
                  radial-gradient(
                    circle at 98% 96%,
                    rgba(34,211,238,0.04),
                    transparent 28%
                  )
                `,
              }}
            />

            <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <ProductState
                eyebrow="Technical state"
                title="Working system"
                description="Architecture, logic, integrations and technical capability."
                items={[
                  "Functional",
                  "Validated",
                  "Connected",
                ]}
                accent="#22D3EE"
              />

              <div className="hidden items-center justify-center md:flex">
                <div className="flex flex-col items-center gap-3">
                  <span className="h-8 w-px bg-gradient-to-b from-transparent via-[#A855F7]/40 to-transparent" />

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A855F7]/20 bg-[#A855F7]/[0.06] text-[#7C3AED] dark:text-[#C084FC]">
                    →
                  </span>

                  <span className="h-8 w-px bg-gradient-to-b from-transparent via-[#A855F7]/40 to-transparent" />
                </div>
              </div>

              <ProductState
                eyebrow="Product state"
                title="Usable experience"
                description="A coherent product that people can understand, use and trust."
                items={[
                  "Useful",
                  "Usable",
                  "Ready",
                ]}
                accent="#A855F7"
                active
              />
            </div>

            <div className="relative mt-7 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <p className="text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                This transition is where{" "}
                <span className="font-semibold text-[#0A1D2F]/68 dark:text-white/64">
                  technology stops being the product
                </span>{" "}
                and starts becoming the foundation of the product.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BUILD LOOP
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.022] dark:border-white/[0.08] dark:bg-white/[0.022] lg:mt-20">
          <div className="border-b border-[#0A1D2F]/[0.07] px-6 py-5 dark:border-white/[0.07] sm:px-8">
            <p className="text-[0.56rem] font-semibold uppercase tracking-[0.26em] text-[#0A1D2F]/30 dark:text-white/28">
              Build loop
            </p>
          </div>

          <div className="grid gap-px bg-[#0A1D2F]/[0.06] dark:bg-white/[0.06] sm:grid-cols-4">
            {BUILD_LOOP.map(
              (
                item,
                index,
              ) => (
                <div
                  key={item.label}
                  className="group relative bg-white/[0.64] px-6 py-7 dark:bg-[#0D1117]/[0.7]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#A855F7] via-[#2563EB] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.5rem] tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                      {item.number}
                    </span>

                    {index <
                      BUILD_LOOP.length -
                        1 && (
                      <span className="text-xs text-[#A855F7]/50">
                        →
                      </span>
                    )}
                  </div>

                  <p className="mt-8 text-base font-semibold tracking-[-0.02em] text-[#0A1D2F] dark:text-white">
                    {item.label}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#0A1D2F]/40 dark:text-white/35">
                    {
                      item.description
                    }
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-9 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-6 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#7C3AED] dark:text-[#C084FC]">
              Build principle
            </p>

            <p className="max-w-[55rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              We build enough to learn, but with enough discipline
              that{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                the strongest ideas can keep moving forward without
                being rebuilt from scratch.
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
              Product established
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#A855F7] via-[#2563EB] to-[#22D3EE]" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#F97316]">
              Strengthen &amp; scale
            </span>
          </div>

          <Link
            href="#scale"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors duration-300 hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
          >
            Continue to scale

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A855F7]/20 transition-[transform,border-color,background-color,color] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#A855F7] group-hover:bg-[#A855F7] group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductState({
  eyebrow,
  title,
  description,
  items,
  accent,
  active = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className="relative rounded-[1.25rem] border p-5 sm:p-6"
      style={{
        borderColor: `${accent}${
          active
            ? "50"
            : "24"
        }`,
        backgroundColor: `${accent}${
          active
            ? "0D"
            : "06"
        }`,
      }}
    >
      {active && (
        <span
          className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor:
              accent,
            boxShadow: `0 0 10px ${accent}90`,
          }}
        />
      )}

      <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/26 dark:text-white/24">
        {eyebrow}
      </p>

      <h4 className="mt-3 text-lg font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
        {title}
      </h4>

      <p className="mt-3 text-xs leading-6 text-[#0A1D2F]/40 dark:text-white/36">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border px-3 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.15em]"
            style={{
              borderColor: `${accent}25`,
              backgroundColor: `${accent}08`,
              color: accent,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}