import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Crosshair,
  Radar,
  ScanSearch,
} from "lucide-react";

const signals = [
  {
    icon: Radar,
    number: "01",
    title: "Technology shifts",
    description:
      "We track emerging technologies, capabilities and technical shifts that could unlock new ways of solving problems.",
  },
  {
    icon: Crosshair,
    number: "02",
    title: "Meaningful problems",
    description:
      "We look for persistent problems where better technology could create genuine practical value.",
  },
  {
    icon: ScanSearch,
    number: "03",
    title: "Opportunity signals",
    description:
      "We examine where technological possibility, real need and viable opportunity begin to intersect.",
  },
] as const;

export function ExploreSection() {
  return (
    <section
      id="explore"
      className="relative min-h-[100svh] overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.62] dark:bg-[#0D1117]/[0.58]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 4% 18%,
                rgba(37,99,235,0.075),
                transparent 29%
              ),
              radial-gradient(
                circle at 94% 88%,
                rgba(34,211,238,0.065),
                transparent 28%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(37,99,235,.28) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,.28) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "92px 92px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/[0.06] text-[0.58rem] font-bold tracking-[0.12em] text-[#2563EB] dark:border-[#3B82F6]/25 dark:bg-[#3B82F6]/[0.08] dark:text-[#60A5FA]">
                01
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Explore
              </span>
            </div>

            <h2 className="mt-7 max-w-[650px] text-[clamp(2.8rem,4.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0A1D2F] dark:text-white">
              We start with
              <br />

              <span className="bg-gradient-to-r from-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#3B82F6] dark:to-[#22D3EE]">
                the signal.
              </span>
            </h2>
          </div>

          <div className="max-w-[590px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Before deciding what to build, we explore what is
              changing. We look across technology, industries and
              real-world needs to identify signals worth
              investigating.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              Exploration is not about chasing every new technology.
              It is about finding the intersections where new
              capability could become genuinely useful.
            </p>
          </div>
        </div>

        {/* =====================================================
            SIGNAL FIELD
        ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="grid border-y border-[#0A1D2F]/[0.08] dark:border-white/[0.08] lg:grid-cols-3">
            {signals.map(
              (
                signal,
                index,
              ) => {
                const Icon =
                  signal.icon;

                return (
                  <article
                    key={
                      signal.title
                    }
                    className={[
                      "group relative min-h-[20rem] px-1 py-8 sm:py-10 lg:px-8 lg:py-12",
                      index !== 0
                        ? "border-t border-[#0A1D2F]/[0.08] dark:border-white/[0.08] lg:border-l lg:border-t-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A1D2F]/[0.08] bg-white/45 text-[#2563EB] transition-[border-color,background-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/[0.06] dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-[#60A5FA] dark:group-hover:border-[#3B82F6]/30">
                        <Icon className="h-4.5 w-4.5" />
                      </div>

                      <span className="text-[0.55rem] font-semibold tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                        {
                          signal.number
                        }
                      </span>
                    </div>

                    <div className="mt-20 sm:mt-24">
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                        {
                          signal.title
                        }
                      </h3>

                      <p className="mt-4 max-w-[22rem] text-sm leading-7 text-[#0A1D2F]/48 dark:text-white/42">
                        {
                          signal.description
                        }
                      </p>
                    </div>

                    <div className="absolute bottom-7 right-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#0A1D2F]/[0.08] text-[#0A1D2F]/22 transition-[border-color,color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#2563EB]/25 group-hover:text-[#2563EB] dark:border-white/[0.08] dark:text-white/20 dark:group-hover:text-[#60A5FA] lg:right-7">
                      <ArrowDownRight className="h-3.5 w-3.5" />
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>

        {/* =====================================================
            INTERSECTION
        ===================================================== */}

        <div className="mt-14 grid gap-8 lg:mt-18 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              The intersection
            </p>

            <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#0A1D2F]/42 dark:text-white/36">
              An idea becomes interesting when several signals begin
              pointing in the same direction.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-white/[0.32] p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 42% 50%, rgba(34,211,238,0.09), transparent 25%)",
              }}
            />

            <div className="relative grid gap-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <SignalLabel
                number="A"
                label="New capability"
                color="#2563EB"
              />

              <Connector />

              <SignalLabel
                number="B"
                label="Real need"
                color="#22D3EE"
              />

              <Connector />

              <SignalLabel
                number="C"
                label="Viable opportunity"
                color="#7C3AED"
              />
            </div>

            <div className="relative mt-7 flex items-center gap-4 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#10B981] shadow-[0_0_18px_rgba(16,185,129,.65)] dark:bg-[#22D3EE]" />

              <p className="text-sm font-medium text-[#0A1D2F]/55 dark:text-white/48">
                When those signals converge, exploration becomes a
                research question.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRANSITION TO RESEARCH
        ===================================================== */}

        <div className="mt-16 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.08] pt-7 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <div className="flex items-center gap-4">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/25 dark:text-white/22">
              Signal identified
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#2563EB] to-[#22D3EE]" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#60A5FA]">
              Investigate
            </span>
          </div>

          <Link
            href="#research"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors duration-300 hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
          >
            Continue to research

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2563EB]/20 transition-[transform,background-color,color,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#2563EB] group-hover:text-white dark:border-[#3B82F6]/25">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SignalLabel({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.55rem] font-bold"
        style={{
          borderColor: `${color}45`,
          color,
          backgroundColor: `${color}0D`,
        }}
      >
        {number}
      </span>

      <span className="text-sm font-semibold text-[#0A1D2F]/58 dark:text-white/48">
        {label}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="hidden items-center sm:flex">
      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />

      <span className="mx-1 h-1.5 w-1.5 rounded-full bg-[#22D3EE]/70" />

      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />
    </div>
  );
}