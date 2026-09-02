import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CircleDot,
  Network,
  Sparkles,
} from "lucide-react";

export function CareersHero() {
  return (
    <section className="relative overflow-x-clip pt-24 sm:pt-28 lg:pt-32">
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.3] dark:bg-[#0D1117]/[0.3]" />

        <div
          className="absolute inset-0 opacity-[0.55] dark:opacity-[0.42]"
          style={{
            background:
              "radial-gradient(circle at 72% 38%, rgba(34,211,238,.08), transparent 26%)",
          }}
        />

        <div className="absolute -left-40 top-[12%] h-[32rem] w-[32rem] rounded-full bg-[#2563EB]/[0.035] blur-[170px] dark:bg-[#3B82F6]/[0.05]" />

        <div className="absolute right-[-10rem] top-[5%] h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.03] blur-[170px] dark:bg-[#A855F7]/[0.045]" />

        <div
          className="absolute inset-0 opacity-[0.055] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(37,99,235,.22) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, black 72%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, black 72%, transparent)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="grid gap-14 py-14 sm:py-16 lg:min-h-[40rem] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-8 lg:py-20">
          {/* LEFT — CONTENT */}

          <div className="relative z-20 max-w-[760px]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                01
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  Careers at Evolvaer
                </p>
              </div>
            </div>

            <h1 className="mt-7 max-w-[760px] text-[3rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#0A1D2F] dark:text-white sm:text-[3.8rem] md:text-[4.4rem] lg:text-[4.7rem] xl:text-[5.25rem]">
              Build what
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#C084FC]">
                comes next.
              </span>
            </h1>

            <p className="mt-7 max-w-[640px] text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Evolvaer brings together people who want
              to understand meaningful problems, explore
              emerging possibilities and turn strong ideas
              into technology that can create real-world
              value.
            </p>

            <p className="mt-4 max-w-[590px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              We are building the company alongside the
              things it creates. That means there is room
              for people who want to contribute, learn,
              challenge assumptions and help shape what
              Evolvaer becomes.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#open-roles"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_14px_40px_rgba(37,99,235,.2)]"
              >
                Explore opportunities

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#how-we-work"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0A1D2F]/10 bg-white/[0.38] px-6 text-sm font-semibold text-[#0A1D2F]/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/25 hover:bg-white/[0.58] hover:text-[#0A1D2F] dark:border-white/10 dark:bg-white/[0.025] dark:text-white/62 dark:hover:border-[#22D3EE]/25 dark:hover:bg-white/[0.05] dark:hover:text-white"
              >
                How we work

                <Network className="h-4 w-4 text-[#22D3EE]" />
              </Link>
            </div>
          </div>

          {/* ===================================================
              RIGHT — OPEN SPACE FOR 3D
          =================================================== */}

          <div className="relative hidden min-h-[34rem] lg:block">
            <div className="absolute right-[3%] top-[7%]">
              <HeroAnnotation
                index="01"
                title="Individual capability"
                description="Different perspectives enter the same field."
                accent="#2563EB"
              />
            </div>

            <div className="absolute left-[8%] top-[48%]">
              <HeroAnnotation
                index="02"
                title="Shared ambition"
                description="Meaningful work creates a point of connection."
                accent="#22D3EE"
              />
            </div>

            <div className="absolute bottom-[5%] right-[7%]">
              <HeroAnnotation
                index="03"
                title="Collective potential"
                description="Capability grows when people build together."
                accent="#A855F7"
              />
            </div>

            <span className="absolute right-[33%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#22D3EE]/60 shadow-[0_0_10px_rgba(34,211,238,.5)]" />

            <span className="absolute bottom-[31%] left-[38%] h-1.5 w-1.5 rounded-full bg-[#A855F7]/55 shadow-[0_0_10px_rgba(168,85,247,.45)]" />

            <span className="absolute right-[20%] top-[53%] h-1 w-1 rounded-full bg-[#10B981]/55" />
          </div>
        </div>

        {/* =====================================================
            CAREERS POSITION
        ===================================================== */}

        <div className="grid border-t border-[#0A1D2F]/[0.08] dark:border-white/[0.08] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-[#0A1D2F]/[0.07] py-7 dark:border-white/[0.07] lg:border-b-0 lg:border-r lg:pr-10">
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[#22D3EE]" />

              <p className="text-[0.53rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/34 dark:text-white/30">
                Working at Evolvaer
              </p>
            </div>

            <p className="mt-4 max-w-[430px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
              The work can move between exploration,
              research, engineering, products and ventures.
            </p>
          </div>

          <div className="py-7 lg:pl-10">
            <p className="max-w-[760px] text-lg font-medium leading-8 tracking-[-0.025em] text-[#0A1D2F]/61 dark:text-white/56">
              We are interested in people who can bring
              depth to their craft while remaining curious
              about the wider problem.{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                The goal is not simply to fill roles. It is
                to build capability.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HERO LOGIC
        ===================================================== */}

        <div className="grid gap-px border-b border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.055] dark:border-white/[0.08] dark:bg-white/[0.05] sm:grid-cols-3">
          <HeroLogic
            number="01"
            label="Bring"
            value="Your capability"
            accent="#2563EB"
          />

          <HeroLogic
            number="02"
            label="Connect"
            value="With others"
            accent="#22D3EE"
          />

          <HeroLogic
            number="03"
            label="Build"
            value="Something meaningful"
            accent="#A855F7"
          />
        </div>

        {/* =====================================================
            SCROLL HANDOFF
        ===================================================== */}

        <div className="flex items-center justify-between py-6">
          <div>
            <p className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
              Careers / 01
            </p>
          </div>

          <a
            href="#why-join"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Why Evolvaer

            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HERO ANNOTATION
============================================================ */

function HeroAnnotation({
  index,
  title,
  description,
  accent,
}: {
  index: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="w-[12.5rem]">
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
          {index}
        </span>

        <span
          className="h-px flex-1"
          style={{
            backgroundColor: `${accent}30`,
          }}
        />
      </div>

      <p className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/48 dark:text-white/42">
        {title}
      </p>

      <p className="mt-2 text-[0.7rem] leading-5 text-[#0A1D2F]/31 dark:text-white/27">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   HERO LOGIC
============================================================ */

function HeroLogic({
  number,
  label,
  value,
  accent,
}: {
  number: string;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="bg-white/[0.42] px-6 py-6 backdrop-blur-lg dark:bg-[#0D1117]/[0.44] sm:px-7">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.42rem]"
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

        <span className="text-[0.46rem] font-semibold uppercase tracking-[0.15em] text-[#0A1D2F]/29 dark:text-white/25">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold tracking-[-0.015em] text-[#0A1D2F]/70 dark:text-white/65">
        {value}
      </p>
    </div>
  );
}