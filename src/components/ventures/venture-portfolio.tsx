import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Layers3,
  Orbit,
} from "lucide-react";

const portfolioMetrics = [
  {
    label: "Status",
    value: "In development",
  },
  {
    label: "Origin",
    value: "Evolvaer",
  },
  {
    label: "Model",
    value: "Product venture",
  },
] as const;

const portfolioNodes = [
  {
    label: "Evolvaer",
    sublabel: "Venture core",
    accent: "#2563EB",
    active: true,
  },
  {
    label: "Adaptcues",
    sublabel: "In development",
    accent: "#22D3EE",
    active: true,
  },
  {
    label: "Future",
    sublabel: "Opportunity",
    accent: "#7C3AED",
    dashed: true,
  },
] as const;

export function VenturePortfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.68] dark:bg-[#0D1117]/[0.68]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 14% 16%, rgba(37,99,235,.05), transparent 29%), radial-gradient(circle at 92% 90%, rgba(34,211,238,.045), transparent 31%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                02
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Venture portfolio
              </p>
            </div>

            <h2 className="mt-6 max-w-[700px] text-[clamp(2.9rem,4.8vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Where selected ideas
              <br />
              become{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#22D3EE] dark:to-[#34D399]">
                ventures.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Our portfolio is designed to grow selectively. Each
              venture begins with a problem worth understanding and
              earns its way forward through research, engineering
              and real-world validation.
            </p>
          </div>
        </div>

        {/* =====================================================
            PORTFOLIO SYSTEM
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-[1.3fr_0.7fr]">
          {/* =================================================
              ACTIVE VENTURE — ADAPTCUES
          ================================================= */}

          <article className="group relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.78] p-7 shadow-[0_24px_70px_rgba(10,29,47,.045)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-0.5 hover:border-[#22D3EE]/20 hover:shadow-[0_28px_75px_rgba(10,29,47,.06)] dark:border-white/[0.08] dark:bg-[#10161D]/[0.78] dark:shadow-none dark:hover:border-[#22D3EE]/20 sm:p-9 lg:p-11">
            {/* static atmosphere */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 94% 5%, rgba(34,211,238,.105), transparent 31%), radial-gradient(circle at 32% 100%, rgba(37,99,235,.06), transparent 35%)",
              }}
            />

            <div className="relative flex h-full flex-col">
              {/* status */}

              <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-30 motion-reduce:animate-none" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  </span>

                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/42 dark:text-white/38">
                    Active venture
                  </span>
                </div>

                <span className="rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.055] px-3 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#0891B2] dark:text-[#67E8F9]">
                  Venture 01
                </span>
              </div>

              {/* identity */}

              <div className="mt-16 max-w-[620px]">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#22D3EE]">
                  Featured
                </p>

                <h3 className="mt-3 text-[clamp(2.8rem,5vw,5.3rem)] font-semibold leading-none tracking-[-0.055em] text-[#0A1D2F] dark:text-white">
                  Adaptcues
                </h3>

                <p className="mt-6 max-w-[560px] text-base leading-8 text-[#0A1D2F]/52 dark:text-white/48">
                  An Evolvaer venture being developed from identified
                  opportunity through research, engineering and
                  product development.
                </p>
              </div>

              {/* venture metadata */}

              <div className="mt-auto pt-14">
                <div className="grid gap-px overflow-hidden rounded-xl border border-[#0A1D2F]/[0.07] bg-[#0A1D2F]/[0.055] dark:border-white/[0.07] dark:bg-white/[0.055] sm:grid-cols-3">
                  {portfolioMetrics.map(
                    (metric) => (
                      <PortfolioMetric
                        key={metric.label}
                        label={
                          metric.label
                        }
                        value={
                          metric.value
                        }
                      />
                    ),
                  )}
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07] sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[440px] text-xs leading-6 text-[#0A1D2F]/36 dark:text-white/32">
                    We&apos;ll explore the venture in more detail
                    below — including the thinking behind it and how
                    it fits within the Evolvaer model.
                  </p>

                  <Link
                    href="#featured-venture"
                    className="group/link inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#2563EB] transition-colors duration-300 hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
                  >
                    View Adaptcues

                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================
              PORTFOLIO CAPACITY
          ================================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="relative min-h-[16rem] overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.62] p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/20 hover:bg-white/[0.78] dark:border-white/[0.08] dark:bg-white/[0.028] dark:hover:border-[#A855F7]/20 dark:hover:bg-white/[0.045]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(124,58,237,.055), transparent 48%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/[0.05] text-[#7C3AED] dark:text-[#C084FC]">
                  <Orbit className="h-[17px] w-[17px]" />
                </div>

                <span className="font-mono text-[0.48rem] uppercase tracking-[0.16em] text-[#0A1D2F]/22 dark:text-white/20">
                  Pipeline
                </span>
              </div>

              <div className="relative mt-12">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                  Emerging opportunities
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                  Other opportunities can remain in exploration and
                  research until the evidence is strong enough to
                  justify building.
                </p>
              </div>
            </article>

            <article className="relative min-h-[16rem] overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.025] p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#10B981]/20 hover:bg-[#10B981]/[0.025] dark:border-white/[0.08] dark:bg-white/[0.018] dark:hover:border-[#10B981]/20 dark:hover:bg-white/[0.035]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(16,185,129,.05), transparent 48%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/[0.05] text-[#10B981] dark:text-[#34D399]">
                  <Layers3 className="h-[17px] w-[17px]" />
                </div>

                <span className="font-mono text-[0.48rem] uppercase tracking-[0.16em] text-[#0A1D2F]/22 dark:text-white/20">
                  Portfolio model
                </span>
              </div>

              <div className="relative mt-12">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                  Built to expand
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                  Evolvaer is not structured around one permanent
                  product. The portfolio can evolve as new
                  opportunities prove themselves.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            PORTFOLIO MAP
        ===================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.48] p-6 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(37,99,235,.025), transparent 34%, rgba(34,211,238,.025) 67%, transparent)",
            }}
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[480px]">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#2563EB]" />

                <p className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/34 dark:text-white/30">
                  Portfolio architecture
                </p>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/45 dark:text-white/39">
                Ventures can develop independently while remaining
                connected to the research, engineering and venture
                capability that produced them.
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <PortfolioMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/[0.58] px-5 py-4 dark:bg-[#0D1117]/[0.5]">
      <p className="text-[0.47rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/26 dark:text-white/24">
        {label}
      </p>

      <p className="mt-2 text-xs font-semibold text-[#0A1D2F]/60 dark:text-white/52">
        {value}
      </p>
    </div>
  );
}

function PortfolioMap() {
  return (
    <div className="relative flex w-full max-w-[520px] items-center justify-between py-5">
      <div className="absolute left-[9%] right-[9%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#2563EB]/15 via-[#22D3EE]/35 to-[#10B981]/15" />

      {portfolioNodes.map(
        (node) => (
          <PortfolioNode
            key={node.label}
            label={node.label}
            sublabel={
              node.sublabel
            }
            accent={
              node.accent
            }
            active={
              "active" in node
                ? node.active
                : false
            }
            dashed={
              "dashed" in node
                ? node.dashed
                : false
            }
          />
        ),
      )}
    </div>
  );
}

function PortfolioNode({
  label,
  sublabel,
  accent,
  active = false,
  dashed = false,
}: {
  label: string;
  sublabel: string;
  accent: string;
  active?: boolean;
  dashed?: boolean;
}) {
  return (
    <div className="relative z-10 flex w-[30%] flex-col items-center text-center">
      <div
        className={`relative flex h-11 w-11 items-center justify-center rounded-full border bg-white dark:bg-[#0D1117] ${
          dashed
            ? "border-dashed"
            : ""
        }`}
        style={{
          borderColor: `${accent}${active ? "66" : "35"}`,
          boxShadow: active
            ? `0 0 18px ${accent}14`
            : undefined,
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor:
              accent,
            opacity: active
              ? 1
              : 0.45,
          }}
        />

        {active && (
          <span
            className="absolute inset-[5px] rounded-full border"
            style={{
              borderColor: `${accent}25`,
            }}
          />
        )}
      </div>

      <p className="mt-3 text-[0.65rem] font-semibold text-[#0A1D2F]/62 dark:text-white/52">
        {label}
      </p>

      <p className="mt-1 text-[0.46rem] uppercase tracking-[0.12em] text-[#0A1D2F]/25 dark:text-white/22">
        {sublabel}
      </p>
    </div>
  );
}