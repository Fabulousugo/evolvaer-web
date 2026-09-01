"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  Search,
} from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent,
  useRef,
} from "react";

export function ResearchHero() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>,
  ) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const rect =
      section.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
      100;

    section.style.setProperty(
      "--research-x",
      `${x}%`,
    );

    section.style.setProperty(
      "--research-y",
      `${y}%`,
    );
  };

  return (
    <section
      ref={sectionRef}
      id="research-hero"
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
      style={
        {
          "--research-x": "72%",
          "--research-y": "38%",
        } as CSSProperties
      }
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.34] dark:bg-[#0D1117]/[0.36]" />

        <div
          className="absolute inset-0 opacity-[0.17] transition-opacity duration-500 dark:opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at var(--research-x) var(--research-y), rgba(34,211,238,.16), transparent 27%)",
          }}
        />

        <div className="absolute -left-40 top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#2563EB]/[0.045] blur-[150px] dark:bg-[#3B82F6]/[0.06]" />

        <div className="absolute right-[4%] top-[14%] h-[32rem] w-[32rem] rounded-full bg-[#22D3EE]/[0.035] blur-[160px] dark:bg-[#22D3EE]/[0.05]" />

        <div className="absolute bottom-[-12rem] left-[38%] h-[28rem] w-[28rem] rounded-full bg-[#A855F7]/[0.025] blur-[160px] dark:bg-[#A855F7]/[0.04]" />

        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.09) 1px, transparent 1px)
            `,
            backgroundSize:
              "96px 96px",
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
              We investigate emerging
              technologies, changing
              systems and meaningful
              problems to understand what
              is possible, what matters
              and what may be worth
              building.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#research-areas"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_12px_35px_rgba(37,99,235,.2)]"
              >
                Explore our research

                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>

              <Link
                href="#research-method"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0A1D2F]/10 bg-white/[0.32] px-6 text-sm font-semibold text-[#0A1D2F]/72 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/20 hover:bg-white/[0.55] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.025] dark:text-white/65 dark:hover:border-[#60A5FA]/25 dark:hover:bg-white/[0.05] dark:hover:text-[#60A5FA]"
              >
                How we investigate

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* RESEARCH POSITION */}

            <div className="mt-11 max-w-[590px] border-l border-[#22D3EE]/30 pl-5">
              <p className="text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                Research is where
                uncertainty becomes
                something we can examine.
                It gives us a disciplined
                way to separate promising
                signals from assumptions,
                noise and novelty.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — RESERVED FOR 3D FIELD

              We deliberately avoid putting a large opaque card here.
              The persistent Three.js scene should be the dominant
              object in this part of the viewport.
          ================================================= */}

          <div
            aria-hidden="true"
            className="relative hidden min-h-[31rem] lg:block"
          >
            {/* top annotation */}

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

            {/* floating signal marker */}

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

            {/* small analysis readout */}

            <div className="absolute bottom-[7%] right-[2%] w-[230px] rounded-[1.2rem] border border-[#0A1D2F]/[0.07] bg-white/[0.22] p-5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/25 dark:text-white/22">
                  Research state
                </p>

                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />
              </div>

              <div className="mt-5 space-y-3">
                <ResearchState
                  label="Information"
                  value="High"
                />

                <ResearchState
                  label="Certainty"
                  value="Low"
                />

                <ResearchState
                  label="Questions"
                  value="Open"
                  active
                />
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

            <HeroSignal
              number="01"
              title="Observe"
              description="Notice what is changing."
              accent="#2563EB"
            />

            <HeroSignal
              number="02"
              title="Question"
              description="Challenge what we assume."
              accent="#A855F7"
            />

            <HeroSignal
              number="03"
              title="Understand"
              description="Find what the evidence supports."
              accent="#22D3EE"
            />
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
            className="group flex items-center gap-3 text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/28 transition-colors hover:text-[#2563EB] dark:text-white/25 dark:hover:text-[#60A5FA]"
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
          <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_10px_rgba(34,211,238,.65)]" />
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