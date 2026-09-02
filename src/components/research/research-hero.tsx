import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  Search,
} from "lucide-react";

const researchStates = [
  {
    label: "Information",
    value: "High",
  },
  {
    label: "Certainty",
    value: "Low",
  },
  {
    label: "Questions",
    value: "Open",
    active: true,
  },
] as const;

const heroSignals = [
  {
    number: "01",
    title: "Observe",
    description: "Notice what is changing.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Question",
    description: "Challenge what we assume.",
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Understand",
    description: "Find what the evidence supports.",
    accent: "#22D3EE",
  },
] as const;

export function ResearchHero() {
  return (
    <section
      id="research-hero"
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.36] dark:bg-[#0D1117]/[0.38]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 72% 38%, rgba(34,211,238,.09), transparent 28%), radial-gradient(circle at 6% 18%, rgba(37,99,235,.055), transparent 30%), radial-gradient(circle at 48% 100%, rgba(168,85,247,.04), transparent 30%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.09) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            MAIN HERO
        ===================================================== */}

        <div className="grid gap-12 py-14 sm:py-16 lg:min-h-[39rem] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-20">
          {/* LEFT — MESSAGE */}

          <div className="relative z-20 max-w-[760px]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                01
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#60A5FA]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  Evolvaer Research
                </p>
              </div>
            </div>

            <h1 className="mt-7 max-w-[760px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] sm:text-[4rem] md:text-[4.6rem] lg:text-[4.8rem] xl:text-[5.35rem] dark:text-white">
              Questions worth
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#34D399]">
                investigating.
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              We investigate emerging technologies, changing systems
              and meaningful problems to understand what is possible,
              what matters and what may be worth building.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#research-areas"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_10px_28px_rgba(37,99,235,.18)]"
              >
                Explore our research

                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>

              <Link
                href="#research-method"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0A1D2F]/10 bg-white/[0.4] px-6 text-sm font-semibold text-[#0A1D2F]/72 transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/20 hover:bg-white/[0.62] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.035] dark:text-white/65 dark:hover:border-[#60A5FA]/25 dark:hover:bg-white/[0.06] dark:hover:text-[#60A5FA]"
              >
                How we investigate

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-11 max-w-[590px] border-l border-[#22D3EE]/30 pl-5">
              <p className="text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                Research is where uncertainty becomes something we can
                examine. It gives us a disciplined way to separate
                promising signals from assumptions, noise and novelty.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — RESERVED FOR 3D FIELD
          ================================================= */}

          <div
            aria-hidden="true"
            className="relative hidden min-h-[31rem] lg:block"
          >
            <div className="absolute right-[5%] top-[8%]">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#22D3EE]/50" />

                <div>
                  <p className="font-mono text-[0.46rem] uppercase tracking-[0.17em] text-[#0A1D2F]/28 dark:text-white/25">
                    Observation field
                  </p>

                  <p className="mt-1 font-mono text-[0.42rem] uppercase tracking-[0.14em] text-[#0A1D2F]/18 dark:text-white/16">
                    Unresolved information
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-[4%] top-[29%]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-30 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
                </span>

                <span className="font-mono text-[0.43rem] uppercase tracking-[0.14em] text-[#0A1D2F]/24 dark:text-white/21">
                  Signal detected
                </span>
              </div>
            </div>

            <div className="absolute bottom-[7%] right-[2%] w-[230px] overflow-hidden rounded-[1.2rem] border border-[#0A1D2F]/[0.07] bg-white/[0.3] p-5 dark:border-white/[0.08] dark:bg-white/[0.028]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(34,211,238,.05), transparent 55%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <p className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/25 dark:text-white/22">
                  Research state
                </p>

                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />
              </div>

              <div className="relative mt-5 space-y-3">
                {researchStates.map((state) => (
                  <ResearchState
                    key={state.label}
                    label={state.label}
                    value={state.value}
                    active={"active" in state ? state.active : false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESEARCH LOGIC
        ===================================================== */}

        <div className="border-t border-[#0A1D2F]/[0.08] py-6 dark:border-white/[0.08]">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-[0.8fr_1fr_1fr_1fr]">
            <div className="hidden lg:block">
              <p className="font-mono text-[0.46rem] uppercase tracking-[0.17em] text-[#0A1D2F]/23 dark:text-white/20">
                Research logic
              </p>
            </div>

            {heroSignals.map((signal) => (
              <HeroSignal
                key={signal.number}
                number={signal.number}
                title={signal.title}
                description={signal.description}
                accent={signal.accent}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            SCROLL
        ===================================================== */}

        <div className="flex items-center justify-between border-t border-[#0A1D2F]/[0.06] py-5 dark:border-white/[0.06]">
          <span className="font-mono text-[0.44rem] uppercase tracking-[0.16em] text-[#0A1D2F]/20 dark:text-white/18">
            Research / 01
          </span>

          <Link
            href="#why-research"
            className="group flex items-center gap-3 text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/28 transition-colors duration-300 hover:text-[#2563EB] dark:text-white/25 dark:hover:text-[#60A5FA]"
          >
            Follow the signal

            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ResearchState({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-[0.5rem] text-[#0A1D2F]/27 dark:text-white/24">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {active && (
          <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
        )}

        <span
          className={`text-[0.52rem] font-semibold ${
            active
              ? "text-[#0891B2] dark:text-[#67E8F9]"
              : "text-[#0A1D2F]/42 dark:text-white/38"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function HeroSignal({
  number,
  title,
  description,
  accent,
}: {
  number: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="mt-1 font-mono text-[0.44rem]"
        style={{
          color: accent,
        }}
      >
        {number}
      </span>

      <div>
        <p className="text-[0.66rem] font-semibold text-[#0A1D2F]/67 dark:text-white/62">
          {title}
        </p>

        <p className="mt-1 text-[0.53rem] leading-5 text-[#0A1D2F]/28 dark:text-white/25">
          {description}
        </p>
      </div>
    </div>
  );
}