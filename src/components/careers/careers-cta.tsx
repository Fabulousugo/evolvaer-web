import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Compass,
  Network,
  Sparkles,
} from "lucide-react";

export function CareersCta() {
  return (
    <section
      id="careers-cta"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0D1117]/[0.84] py-24 backdrop-blur-md sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 78%)",
          }}
        />

        <div className="absolute left-1/2 top-[42%] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/[0.07] blur-[190px]" />

        <div className="absolute left-[18%] top-[30%] h-[25rem] w-[25rem] rounded-full bg-[#22D3EE]/[0.045] blur-[160px]" />

        <div className="absolute right-[10%] top-[20%] h-[27rem] w-[27rem] rounded-full bg-[#A855F7]/[0.045] blur-[170px]" />

        <div className="absolute bottom-[-12rem] left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#10B981]/[0.025] blur-[150px]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO MARKER
        ===================================================== */}

        <div className="flex items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.5rem] text-[#60A5FA]">
              08
            </span>

            <span className="h-px w-8 bg-[#3B82F6]/40" />

            <div className="flex items-center gap-2.5">
              <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#60A5FA]">
                Your next move
              </p>
            </div>
          </div>

          <span className="hidden font-mono text-[0.43rem] uppercase tracking-[0.14em] text-white/20 sm:block">
            Careers / 08
          </span>
        </div>

        {/* =====================================================
            MAIN CTA
        ===================================================== */}

        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[#22D3EE]" />

              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-white/34">
                People shape what gets built
              </span>
            </div>

            <h2 className="mt-7 max-w-[830px] text-[3rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5rem]">
              Find your place
              <br />
              in{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#67E8F9] to-[#C084FC] bg-clip-text text-transparent">
                what comes next.
              </span>
            </h2>

            <p className="mt-7 max-w-[660px] text-base leading-8 text-white/48 sm:text-[1.05rem]">
              Evolvaer is being built around questions worth
              exploring, technologies worth understanding and
              ideas worth turning into something real.
            </p>

            <p className="mt-4 max-w-[620px] text-sm leading-7 text-white/32">
              When an opportunity matches what you can
              contribute and where you want to grow, we want
              it to be easy to understand what the work is
              and decide whether it is right for you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#open-roles"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-[0_16px_44px_rgba(37,99,235,.24)]"
              >
                Explore opportunities

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-white/62 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/25 hover:bg-white/[0.06] hover:text-white"
              >
                Discover Evolvaer

                <Compass className="h-4 w-4 text-[#22D3EE]" />
              </Link>
            </div>
          </div>

          {/* ===================================================
              RIGHT — OPEN FOR FINAL 3D STATE
          =================================================== */}

          <div className="relative hidden min-h-[29rem] lg:block">
            <FinalSignal
              className="right-[5%] top-[5%]"
              number="01"
              label="Capability"
              accent="#3B82F6"
            />

            <FinalSignal
              className="left-[5%] top-[45%]"
              number="02"
              label="Collaboration"
              accent="#22D3EE"
            />

            <FinalSignal
              className="bottom-[5%] right-[8%]"
              number="03"
              label="Opportunity"
              accent="#A855F7"
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-52 w-52 items-center justify-center">
                <span className="absolute h-52 w-52 rounded-full border border-[#3B82F6]/[0.055]" />

                <span className="absolute h-36 w-36 rounded-full border border-[#22D3EE]/[0.08]" />

                <span className="absolute h-20 w-20 rounded-full border border-[#A855F7]/10" />

                <span className="absolute h-3 w-3 rounded-full bg-[#22D3EE]/55 shadow-[0_0_22px_rgba(34,211,238,.45)]" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESOLUTION
        ===================================================== */}

        <div className="grid gap-px overflow-hidden border-y border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
          <ResolutionItem
            number="01"
            title="Bring"
            value="What you know"
            accent="#3B82F6"
          />

          <ResolutionItem
            number="02"
            title="Develop"
            value="What you can become"
            accent="#22D3EE"
          />

          <ResolutionItem
            number="03"
            title="Build"
            value="What should exist next"
            accent="#A855F7"
          />
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div className="grid gap-10 border-b border-white/[0.08] py-12 lg:grid-cols-[0.48fr_1.52fr]">
          <div className="flex items-start gap-3">
            <Network className="mt-0.5 h-4 w-4 text-[#22D3EE]" />

            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
              Evolvaer grows through people
            </p>
          </div>

          <p className="max-w-[940px] text-[1.55rem] font-medium leading-[1.45] tracking-[-0.035em] text-white/58 sm:text-[1.95rem]">
            The future of Evolvaer will not be shaped by one
            discipline, one technology or one idea. It will
            be shaped by{" "}
            <span className="text-white">
              capable people bringing different perspectives
              to problems worth solving.
            </span>
          </p>
        </div>

        {/* =====================================================
            FOOT
        ===================================================== */}

        <div className="flex flex-wrap items-center justify-between gap-5 pt-7">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_8px_rgba(34,211,238,.5)]" />

            <span className="font-mono text-[0.43rem] uppercase tracking-[0.14em] text-white/22">
              People → Capability → Impact
            </span>
          </div>

          <Link
            href="/"
            className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-white/28 transition-colors hover:text-[#60A5FA]"
          >
            Evolvaer Technologies
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL SIGNAL
============================================================ */

function FinalSignal({
  className,
  number,
  label,
  accent,
}: {
  className: string;
  number: string;
  label: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute w-[11rem] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 8px ${accent}70`,
          }}
        />

        <span
          className="font-mono text-[0.42rem]"
          style={{
            color: accent,
          }}
        >
          {number}
        </span>

        <span
          className="h-px flex-1"
          style={{
            backgroundColor: `${accent}30`,
          }}
        />
      </div>

      <p className="mt-3 text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-white/34">
        {label}
      </p>
    </div>
  );
}

/* ============================================================
   RESOLUTION ITEM
============================================================ */

function ResolutionItem({
  number,
  title,
  value,
  accent,
}: {
  number: string;
  title: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="bg-[#0D1117]/[0.58] px-6 py-7 backdrop-blur-xl sm:px-7">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.43rem]"
          style={{
            color: accent,
          }}
        >
          {number}
        </span>

        <span
          className="h-px w-5"
          style={{
            backgroundColor: `${accent}45`,
          }}
        />

        <span className="text-[0.45rem] font-semibold uppercase tracking-[0.14em] text-white/24">
          {title}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold tracking-[-0.015em] text-white/68">
        {value}
      </p>
    </div>
  );
}