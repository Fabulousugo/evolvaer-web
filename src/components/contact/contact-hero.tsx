"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CircleDot,
  MessageSquareText,
  Radio,
} from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent,
  useRef,
} from "react";

type ContactHeroStyle = CSSProperties & {
  "--contact-x": string;
  "--contact-y": string;
};

export function ContactHero() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>,
  ) => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const rect =
      element.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
      100;

    element.style.setProperty(
      "--contact-x",
      `${x}%`,
    );

    element.style.setProperty(
      "--contact-y",
      `${y}%`,
    );
  };

  const style: ContactHeroStyle = {
    "--contact-x": "72%",
    "--contact-y": "42%",
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      style={style}
      className="relative overflow-x-clip pt-24 sm:pt-28 lg:pt-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* editorial grid */}

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, black 72%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, black 72%, transparent)",
          }}
        />

        {/* pointer-responsive signal glow */}

        <div
          className="absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/[0.045] blur-[170px] transition-[left,top] duration-700 dark:bg-[#22D3EE]/[0.055]"
          style={{
            left: "var(--contact-x)",
            top: "var(--contact-y)",
          }}
        />

        <div className="absolute -left-40 top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#2563EB]/[0.025] blur-[160px] dark:bg-[#3B82F6]/[0.04]" />

        <div className="absolute right-[-12rem] top-[4%] h-[30rem] w-[30rem] rounded-full bg-[#A855F7]/[0.025] blur-[170px] dark:bg-[#A855F7]/[0.035]" />

        {/* transmission guides */}

        <span className="absolute right-[8%] top-[28%] hidden h-px w-[23%] bg-gradient-to-r from-transparent via-[#22D3EE]/12 to-transparent lg:block" />

        <span className="absolute right-[13%] top-[43%] hidden h-px w-[18%] bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent lg:block" />

        <span className="absolute right-[5%] top-[58%] hidden h-px w-[26%] bg-gradient-to-r from-transparent via-[#A855F7]/10 to-transparent lg:block" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            {/* =================================================
                LEFT — MESSAGE
            ================================================= */}

            <div className="max-w-[760px]">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.5rem] text-[#22D3EE]">
                  01
                </span>

                <span className="h-px w-8 bg-[#22D3EE]/40" />

                <div className="flex items-center gap-2.5">
                  <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                    Contact Evolvaer
                  </p>
                </div>
              </div>

              <h1 className="mt-7 max-w-[760px] text-[3.15rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#0A1D2F] dark:text-white sm:text-[4rem] md:text-[4.6rem] lg:text-[4.9rem] xl:text-[5.3rem]">
                Start a
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent">
                  conversation.
                </span>
              </h1>

              <p className="mt-7 max-w-[650px] text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-lg">
                Whether you are exploring an emerging
                technology, developing a product,
                investigating a research question or
                considering a collaboration, tell us what
                you are trying to make possible.
              </p>

              <p className="mt-4 max-w-[590px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                You do not need to arrive with a finished
                solution. A useful conversation can begin
                with the problem, opportunity or question
                worth understanding.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact-form"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-[0_16px_44px_rgba(37,99,235,.2)]"
                >
                  Start a conversation

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#contact-intent"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#0A1D2F]/10 bg-white/[0.38] px-6 text-sm font-semibold text-[#0A1D2F]/62 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/30 hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.025] dark:text-white/58 dark:hover:border-[#22D3EE]/30 dark:hover:text-white"
                >
                  What to contact us about

                  <MessageSquareText className="h-4 w-4 text-[#22D3EE]" />
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT — LEAVE SPACE FOR THREE.JS
            ================================================= */}

            <div className="relative hidden min-h-[31rem] lg:block">
              <SignalAnnotation
                className="right-[4%] top-[4%]"
                number="01"
                label="Signal"
                value="An idea"
                accent="#3B82F6"
              />

              <SignalAnnotation
                className="left-[10%] top-[46%]"
                number="02"
                label="Context"
                value="A problem"
                accent="#22D3EE"
              />

              <SignalAnnotation
                className="bottom-[4%] right-[8%]"
                number="03"
                label="Connection"
                value="A conversation"
                accent="#A855F7"
              />

              {/* central transmission indicator */}

              <div className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <span className="absolute h-40 w-40 rounded-full border border-[#22D3EE]/[0.04]" />

                  <span className="absolute h-24 w-24 rounded-full border border-[#2563EB]/[0.06]" />

                  <span className="absolute h-12 w-12 rounded-full border border-[#A855F7]/[0.08]" />

                  <Radio className="h-4 w-4 text-[#22D3EE]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            HERO LOGIC
        ===================================================== */}

        <div className="grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] sm:grid-cols-3">
          <HeroSignal
            number="01"
            label="Start with"
            value="The question"
            accent="#2563EB"
          />

          <HeroSignal
            number="02"
            label="Add"
            value="The context"
            accent="#22D3EE"
          />

          <HeroSignal
            number="03"
            label="Create"
            value="The connection"
            accent="#A855F7"
          />
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_8px_rgba(34,211,238,.5)]" />

            <span className="font-mono text-[0.43rem] uppercase tracking-[0.14em] text-[#0A1D2F]/24 dark:text-white/21">
              Signal detected
            </span>
          </div>

          <Link
            href="#contact-intent"
            aria-label="Continue to contact topics"
            className="group flex items-center gap-3 text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#0A1D2F]/32 transition-colors hover:text-[#2563EB] dark:text-white/28 dark:hover:text-[#60A5FA]"
          >
            Continue

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0A1D2F]/[0.08] transition-colors group-hover:border-[#2563EB]/25 dark:border-white/[0.08]">
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SIGNAL ANNOTATION
============================================================ */

function SignalAnnotation({
  className,
  number,
  label,
  value,
  accent,
}: {
  className: string;
  number: string;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute w-[10.5rem] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 8px ${accent}60`,
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

      <p className="mt-3 text-[0.43rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/25 dark:text-white/22">
        {label}
      </p>

      <p className="mt-1 text-xs font-medium text-[#0A1D2F]/52 dark:text-white/47">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   HERO SIGNAL
============================================================ */

function HeroSignal({
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
    <div className="bg-white/[0.46] px-6 py-6 backdrop-blur-xl dark:bg-[#0D1117]/[0.46] sm:px-7">
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
            backgroundColor: `${accent}40`,
          }}
        />

        <span className="text-[0.43rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/25 dark:text-white/22">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold tracking-[-0.015em] text-[#0A1D2F]/68 dark:text-white/62">
        {value}
      </p>
    </div>
  );
}