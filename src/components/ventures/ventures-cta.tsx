import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Sparkles,
} from "lucide-react";

const ctaStates = [
  {
    label: "Explore",
    value: "Possibility",
  },
  {
    label: "Validate",
    value: "Evidence",
  },
  {
    label: "Build",
    value: "Product",
  },
  {
    label: "Result",
    value: "Venture",
    active: true,
  },
] as const;

export function VenturesCta() {
  return (
    <section
      id="ventures-cta"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#0A1D2F]/[0.97] dark:bg-[#0D1117]/[0.96]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 12%, rgba(37,99,235,.14), transparent 31%), radial-gradient(circle at 88% 30%, rgba(34,211,238,.1), transparent 32%), radial-gradient(circle at 52% 100%, rgba(168,85,247,.08), transparent 31%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
            `,
            backgroundSize: "110px 110px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* LEFT */}

          <div className="max-w-[760px]">
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />
              </span>

              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#67E8F9]">
                  Evolvaer Ventures
                </p>

                <p className="mt-1 font-mono text-[0.46rem] uppercase tracking-[0.15em] text-white/24">
                  From signal to venture
                </p>
              </div>
            </div>

            <h2 className="mt-8 max-w-[900px] text-[clamp(3.3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
              Build what
              <br />
              deserves to{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#67E8F9] to-[#34D399] bg-clip-text text-transparent">
                exist.
              </span>
            </h2>

            <p className="mt-7 max-w-[610px] text-lg leading-8 text-white/56 sm:text-xl">
              We explore widely, investigate carefully and build
              selectively — turning the strongest opportunities into
              products and ventures with the potential to create
              meaningful real-world value.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/research"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_10px_28px_rgba(37,99,235,.22)]"
              >
                Explore our research

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-6 text-sm font-semibold text-white/78 transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.075] hover:text-white"
              >
                Start a conversation

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT — OPEN SPACE FOR CTA WORLD
          ================================================= */}

          <div
            aria-hidden="true"
            className="relative hidden min-h-[31rem] lg:block"
          >
            <div className="absolute right-[5%] top-[10%]">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#22D3EE]/45" />

                <span className="font-mono text-[0.45rem] uppercase tracking-[0.17em] text-white/22">
                  Venture system
                </span>
              </div>
            </div>

            <div className="absolute bottom-[8%] right-[4%] w-[240px] overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.035] p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(34,211,238,.05), transparent 52%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[0.45rem] uppercase tracking-[0.16em] text-white/24">
                  Final state
                </span>

                <Sparkles className="h-3.5 w-3.5 text-[#67E8F9]" />
              </div>

              <div className="relative mt-5 space-y-3">
                {ctaStates.map((state) => (
                  <CtaState
                    key={state.label}
                    label={state.label}
                    value={state.value}
                    active={
                      "active" in state
                        ? state.active
                        : false
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING SYSTEM
        ===================================================== */}

        <div className="mt-20 border-t border-white/[0.09] pt-10 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-[0.54rem] font-semibold uppercase tracking-[0.24em] text-white/28">
                One operating belief
              </p>
            </div>

            <p className="max-w-[60rem] text-lg font-medium leading-8 tracking-[-0.02em] text-white/58">
              The goal is not to produce the greatest number of ideas.
              It is to develop the judgement and capability to{" "}
              <span className="text-white">
                recognise the ideas worth becoming real.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            FOOTER SIGNAL
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.46rem] uppercase tracking-[0.16em] text-white/20">
            Explore → Research → Engineer → Build → Scale → Impact
          </p>

          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-35 motion-reduce:animate-none" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
            </span>

            <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-white/25">
              Still exploring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaState({
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
      <span className="text-[0.5rem] text-white/25">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {active && (
          <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_7px_rgba(34,211,238,.52)]" />
        )}

        <span
          className={`text-[0.53rem] font-semibold ${
            active
              ? "text-[#67E8F9]"
              : "text-white/42"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}