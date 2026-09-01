"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  FlaskConical,
  Network,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    label: "Research",
    title: "Understand before building.",
    description:
      "Investigate technologies, needs, markets and possibilities before making assumptions about the solution.",
    icon: FlaskConical,
    accent: "blue" as const,
  },
  {
    number: "02",
    label: "Engineering",
    title: "Turn possibility into systems.",
    description:
      "Prototype, test and engineer the technical foundations needed to transform promising ideas into usable technology.",
    icon: BrainCircuit,
    accent: "teal" as const,
  },
  {
    number: "03",
    label: "Ventures",
    title: "Build what deserves to exist.",
    description:
      "Develop validated opportunities into products, platforms and companies capable of creating lasting value.",
    icon: Network,
    accent: "violet" as const,
  },
];

const accents = {
  blue: {
    line: "bg-[#2563EB] dark:bg-[#3B82F6]",
    icon:
      "border-[#2563EB]/20 bg-[#2563EB]/[0.06] text-[#2563EB] dark:border-[#3B82F6]/25 dark:bg-[#3B82F6]/[0.08] dark:text-[#60A5FA]",
    hover:
      "hover:border-[#2563EB]/30 dark:hover:border-[#3B82F6]/35",
    glow:
      "bg-[#2563EB]/[0.08] dark:bg-[#3B82F6]/[0.10]",
  },
  teal: {
    line: "bg-[#10B981] dark:bg-[#22D3EE]",
    icon:
      "border-[#10B981]/20 bg-[#10B981]/[0.06] text-[#10B981] dark:border-[#22D3EE]/25 dark:bg-[#22D3EE]/[0.08] dark:text-[#22D3EE]",
    hover:
      "hover:border-[#10B981]/30 dark:hover:border-[#22D3EE]/35",
    glow:
      "bg-[#10B981]/[0.07] dark:bg-[#22D3EE]/[0.09]",
  },
  violet: {
    line: "bg-[#7C3AED] dark:bg-[#A855F7]",
    icon:
      "border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] text-[#7C3AED] dark:border-[#A855F7]/25 dark:bg-[#A855F7]/[0.08] dark:text-[#C084FC]",
    hover:
      "hover:border-[#7C3AED]/30 dark:hover:border-[#A855F7]/35",
    glow:
      "bg-[#7C3AED]/[0.07] dark:bg-[#A855F7]/[0.09]",
  },
};

export function AboutCapabilities() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.56] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.52]" />

        <div className="absolute right-[-12rem] top-[18%] h-[32rem] w-[32rem] rounded-full bg-[#2563EB]/[0.055] blur-[160px] dark:bg-[#3B82F6]/[0.07]" />

        <div className="absolute bottom-[-14rem] left-[20%] h-[30rem] w-[30rem] rounded-full bg-[#22D3EE]/[0.045] blur-[150px] dark:bg-[#22D3EE]/[0.055]" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#2563EB] dark:bg-[#3B82F6]" />

              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/38 dark:text-white/35">
                What Evolvaer is
              </span>
            </div>

            <h2 className="mt-7 text-[clamp(3rem,5vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#0A1D2F] dark:text-white">
              One company.
              <br />
              Three connected
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                capabilities.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#0A1D2F]/55 dark:text-white/48 lg:justify-self-end">
            Rather than separating research, technology development
            and company creation, we connect them. Each strengthens
            the others.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const accent = accents[capability.accent];

            return (
              <article
                key={capability.number}
                className={`group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/35 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-8 ${accent.hover}`}
              >
                <div
                  className={`absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[95px] transition-opacity duration-500 ${accent.glow}`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[0.62rem] font-semibold tracking-[0.22em] text-[#0A1D2F]/24 dark:text-white/24">
                      {capability.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-28">
                    <div className="flex items-center gap-3">
                      <span className={`h-px w-7 ${accent.line}`} />

                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[#0A1D2F]/34 dark:text-white/30">
                        {capability.label}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-sm text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0A1D2F] dark:text-white sm:text-[2.25rem]">
                      {capability.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-7 text-[#0A1D2F]/50 dark:text-white/44">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/what-we-do"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/50 transition-colors hover:text-[#2563EB] dark:text-white/44 dark:hover:text-[#60A5FA]"
          >
            Explore our capabilities

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}