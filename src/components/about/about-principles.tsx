"use client";

import {
  Compass,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Purposeful",
    description:
      "We pursue technology where it can create meaningful value, not simply because it is new.",
    icon: Compass,
    accent: "blue" as const,
  },
  {
    number: "02",
    title: "Inventive",
    description:
      "We stay curious, challenge assumptions and remain willing to explore unconventional possibilities.",
    icon: Lightbulb,
    accent: "violet" as const,
  },
  {
    number: "03",
    title: "Trustworthy",
    description:
      "We believe useful technology must be responsible, understandable and worthy of the people who rely on it.",
    icon: ShieldCheck,
    accent: "teal" as const,
  },
  {
    number: "04",
    title: "Collaborative",
    description:
      "The strongest ideas emerge when different disciplines, experiences and perspectives are allowed to intersect.",
    icon: Users,
    accent: "blue" as const,
  },
];

const accents = {
  blue: {
    line: "bg-[#2563EB] dark:bg-[#3B82F6]",
    icon:
      "border-[#2563EB]/20 bg-[#2563EB]/[0.06] text-[#2563EB] dark:border-[#3B82F6]/25 dark:bg-[#3B82F6]/[0.08] dark:text-[#60A5FA]",
    hover:
      "hover:border-[#2563EB]/25 dark:hover:border-[#3B82F6]/30",
    glow:
      "bg-[#2563EB]/[0.07] dark:bg-[#3B82F6]/[0.08]",
  },

  teal: {
    line: "bg-[#10B981] dark:bg-[#22D3EE]",
    icon:
      "border-[#10B981]/20 bg-[#10B981]/[0.06] text-[#10B981] dark:border-[#22D3EE]/25 dark:bg-[#22D3EE]/[0.08] dark:text-[#22D3EE]",
    hover:
      "hover:border-[#10B981]/25 dark:hover:border-[#22D3EE]/30",
    glow:
      "bg-[#10B981]/[0.07] dark:bg-[#22D3EE]/[0.08]",
  },

  violet: {
    line: "bg-[#7C3AED] dark:bg-[#A855F7]",
    icon:
      "border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] text-[#7C3AED] dark:border-[#A855F7]/25 dark:bg-[#A855F7]/[0.08] dark:text-[#C084FC]",
    hover:
      "hover:border-[#7C3AED]/25 dark:hover:border-[#A855F7]/30",
    glow:
      "bg-[#7C3AED]/[0.07] dark:bg-[#A855F7]/[0.08]",
  },
};

export function AboutPrinciples() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.62] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.57]" />

        <div className="absolute -right-32 top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#A855F7]/[0.045] blur-[150px] dark:bg-[#A855F7]/[0.06]" />

        <div className="absolute -bottom-48 left-[8%] h-[34rem] w-[34rem] rounded-full bg-[#22D3EE]/[0.045] blur-[160px] dark:bg-[#22D3EE]/[0.06]" />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.3) 1px, transparent 1px)
            `,
            backgroundSize: "104px 104px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#22D3EE]" />

              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/38 dark:text-white/35">
                Principles
              </span>
            </div>

            <h2 className="mt-7 text-[clamp(3rem,5vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#0A1D2F] dark:text-white">
              What changes.
              <br />

              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                What doesn&apos;t.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/52 dark:text-white/45">
              Technologies, products and opportunities will evolve.
              The principles that guide how we explore and build
              should remain much more stable.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.07] dark:border-white/[0.07] dark:bg-white/[0.07] md:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;
            const accent = accents[principle.accent];

            return (
              <article
                key={principle.number}
                className={`group relative min-h-[22rem] overflow-hidden bg-white/65 p-7 backdrop-blur-xl transition-colors duration-500 hover:bg-white/85 dark:bg-[#0D1117]/75 dark:hover:bg-[#111823]/90 sm:p-9 ${accent.hover}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[100px] opacity-50 transition-opacity duration-500 group-hover:opacity-90 ${accent.glow}`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[0.6rem] font-semibold tracking-[0.22em] text-[#0A1D2F]/22 dark:text-white/22">
                      {principle.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-20">
                    <div className="flex items-center gap-3">
                      <span className={`h-px w-7 ${accent.line}`} />

                      <span className="text-[0.56rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/28 dark:text-white/27">
                        Structural principle
                      </span>
                    </div>

                    <h3 className="mt-5 text-[2rem] font-semibold tracking-[-0.04em] text-[#0A1D2F] dark:text-white sm:text-[2.25rem]">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#0A1D2F]/48 dark:text-white/42 sm:text-base sm:leading-8">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE]/20 to-[#7C3AED]/20 dark:from-[#3B82F6]/25 dark:via-[#22D3EE]/25 dark:to-[#A855F7]/25" />

          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/22 dark:text-white/22">
            Four anchors · One system
          </span>
        </div>
      </div>
    </section>
  );
}