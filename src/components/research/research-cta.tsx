import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  FlaskConical,
} from "lucide-react";

const researchStates = [
  {
    label: "Question",
    value: "Open",
    accent: "#A855F7",
  },
  {
    label: "Understanding",
    value: "Evolving",
    accent: "#22D3EE",
  },
  {
    label: "Next step",
    value: "Explore",
    accent: "#10B981",
  },
] as const;

const loopStages = [
  {
    label: "Question",
    accent: "#A855F7",
  },
  {
    label: "Investigate",
    accent: "#2563EB",
  },
  {
    label: "Understand",
    accent: "#22D3EE",
  },
  {
    label: "Apply",
    accent: "#10B981",
  },
  {
    label: "Question again",
    accent: "#A855F7",
  },
] as const;

export function ResearchCta() {
  return (
    <section
      id="research-cta"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          DARK RESOLUTION FIELD
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#0A1D2F]/[0.95] dark:bg-[#080C12]/[0.93]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(37,99,235,.12), transparent 35%), radial-gradient(circle at 92% 12%, rgba(34,211,238,.065), transparent 28%), radial-gradient(circle at 12% 95%, rgba(168,85,247,.06), transparent 30%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96,165,250,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,.12) 1px, transparent 1px)
            `,
            backgroundSize: "110px 110px",
            maskImage:
              "radial-gradient(circle at 50% 45%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            MAIN CTA
        ===================================================== */}

        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/[0.09] bg-[#0D1117]/[0.64] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          {/* DECORATIVE COORDINATE MARKS */}

          <div
            aria-hidden="true"
            className="absolute left-6 top-6 h-5 w-5 border-l border-t border-[#22D3EE]/25 sm:left-8 sm:top-8"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-6 right-6 h-5 w-5 border-b border-r border-[#A855F7]/25 sm:bottom-8 sm:right-8"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-[#22D3EE]/30 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 8%, rgba(34,211,238,.035), transparent 36%)",
            }}
          />

          <div className="relative mx-auto max-w-[920px] text-center">
            {/* EYEBROW */}

            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-[#22D3EE]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#67E8F9]">
                  Evolvaer Research
                </p>
              </div>

              <span className="h-px w-8 bg-[#22D3EE]/35" />
            </div>

            {/* HEADLINE */}

            <h2 className="mx-auto mt-8 max-w-[900px] text-[clamp(3rem,6vw,6.3rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
              Keep asking
              <br />

              <span className="bg-gradient-to-r from-[#60A5FA] via-[#67E8F9] to-[#C084FC] bg-clip-text text-transparent">
                better questions.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[670px] text-base leading-8 text-white/52 sm:text-[1.05rem]">
              Research is how we explore uncertainty before committing
              to an answer. The questions will evolve. So will the
              technologies. Our job is to keep learning what deserves
              attention.
            </p>

            {/* ACTIONS */}

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/what-we-do"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-[0_12px_30px_rgba(37,99,235,.2)]"
              >
                See how we build

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/ventures"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-6 text-sm font-semibold text-white/70 transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/25 hover:bg-white/[0.07] hover:text-white"
              >
                Explore ventures

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* FINAL RESEARCH STATE */}

            <div className="mx-auto mt-14 max-w-[620px] border-t border-white/[0.08] pt-8">
              <div className="grid grid-cols-3 gap-3">
                {researchStates.map((state) => (
                  <ResearchState
                    key={state.label}
                    {...state}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESEARCH LOOP — FINAL RESOLUTION
        ===================================================== */}

        <div className="mt-8 grid gap-5 border-y border-white/[0.07] py-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="flex items-center gap-3">
            <FlaskConical className="h-4 w-4 text-[#67E8F9]" />

            <p className="text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-white/32">
              The research loop
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="flex min-w-[37rem] items-center">
              {loopStages.map((stage, index) => (
                <div
                  key={stage.label}
                  className="contents"
                >
                  <LoopStage
                    label={stage.label}
                    accent={stage.accent}
                  />

                  {index < loopStages.length - 1 && (
                    <LoopLine />
                  )}
                </div>
              ))}

              <span className="ml-4 text-[#C084FC]/55">
                ↺
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.16em] text-white/18">
            Research / 09
          </span>

          <p className="max-w-[520px] text-xs leading-6 text-white/28 sm:text-right">
            Explore what is changing. Understand what matters. Build
            only when the evidence gives us a reason to.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RESEARCH STATE
============================================================ */

function ResearchState({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-center justify-center gap-2">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 6px ${accent}55`,
          }}
        />

        <span className="truncate font-mono text-[0.42rem] uppercase tracking-[0.12em] text-white/25">
          {label}
        </span>
      </div>

      <p
        className="mt-2 text-[0.55rem] font-semibold"
        style={{
          color: accent,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   LOOP
============================================================ */

function LoopStage({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span
        className="h-2 w-2 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 6px ${accent}50`,
        }}
      />

      <span className="text-[0.47rem] font-semibold uppercase tracking-[0.12em] text-white/38">
        {label}
      </span>
    </div>
  );
}

function LoopLine() {
  return (
    <span className="mx-4 h-px min-w-10 flex-1 bg-gradient-to-r from-white/[0.06] via-[#22D3EE]/25 to-white/[0.06]" />
  );
}