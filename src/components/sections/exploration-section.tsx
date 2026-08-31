"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Earth,
  HeartHandshake,
  Orbit,
} from "lucide-react";

const areas = [
  {
    number: "01",
    title: "AI & Intelligent Systems",
    description:
      "Exploring intelligent systems that can understand, adapt, assist and make complex technology more useful in the real world.",
    label: "Artificial Intelligence",
    icon: BrainCircuit,
    feature: true,
  },
  {
    number: "02",
    title: "Emerging Software",
    description:
      "Engineering new software experiences, platforms and digital infrastructure around changing technologies and behaviours.",
    label: "Software & Platforms",
    icon: Code2,
  },
  {
    number: "03",
    title: "Human-Centred Technology",
    description:
      "Creating technology around real human needs, accessibility and better interactions between people and intelligent systems.",
    label: "People & Technology",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Energy & Climate Technology",
    description:
      "Investigating digital technologies that can support smarter energy systems, efficiency and a more sustainable future.",
    label: "Energy & Sustainability",
    icon: Earth,
  },
  {
    number: "05",
    title: "Future Frontiers",
    description:
      "Keeping space for technologies and opportunities that have not yet become obvious — but may shape what comes next.",
    label: "Emerging Frontiers",
    icon: Orbit,
  },
];

export function ExplorationSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0ede5] py-20 text-midnight transition-colors duration-700 dark:bg-[#07131f] dark:text-[#f7f4ee] sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-12rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-gold/[0.055] blur-[150px] dark:bg-gold/[0.065]" />

        <div className="absolute bottom-[-14rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-teal/[0.035] blur-[145px] dark:bg-teal/[0.045]" />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13,27,42,.13) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13,27,42,.13) 1px, transparent 1px)
            `,
            backgroundSize: "92px 92px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                Areas of exploration
              </span>
            </div>

            <h2 className="max-w-3xl font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.94] tracking-[-0.045em]">
              Where technology
              <br />
              meets{" "}
              <span className="gold-gradient-text italic">
                possibility.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-midnight/58 dark:text-white/56 sm:text-[1.05rem]">
              We explore technologies with the potential to
              reshape industries, improve how people live and
              work, and create entirely new possibilities.
            </p>

            <Link
              href="/what-we-do"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-midnight dark:text-white"
            >
              Explore what we do

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Main editorial feature */}
        <div className="mt-14 grid gap-4 lg:mt-18 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative min-h-[29rem] overflow-hidden rounded-[2rem] border border-midnight/[0.09] bg-white/42 p-7 shadow-[0_18px_60px_rgba(13,27,42,0.045)] backdrop-blur-2xl transition-all duration-500 hover:border-gold/30 dark:border-white/[0.085] dark:bg-white/[0.025] sm:p-9">
            <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-80 w-80 rounded-full border border-gold/[0.12]" />

            <div className="pointer-events-none absolute right-8 top-8 h-52 w-52 rounded-full border border-midnight/[0.055] dark:border-white/[0.06]" />

            <div className="pointer-events-none absolute right-16 top-16 h-36 w-36 rounded-full bg-gold/[0.06] blur-[60px]" />

            <div className="pointer-events-none absolute bottom-[-6rem] left-[8%] h-56 w-56 rounded-full bg-teal/[0.055] blur-[100px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="font-display text-sm italic text-gold">
                  01
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <BrainCircuit className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-auto max-w-2xl pt-16">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.27em] text-gold">
                  Artificial Intelligence
                </p>

                <h3 className="mt-4 font-display text-[clamp(2.8rem,4.8vw,5.2rem)] leading-[0.92] tracking-[-0.045em]">
                  AI & Intelligent
                  <br />
                  Systems
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50">
                  Exploring intelligent systems that can
                  understand, adapt, assist and make complex
                  technology more useful in the real world.
                </p>

                <Link
                  href="/what-we-do"
                  className="mt-7 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-midnight/45 transition-colors hover:text-gold dark:text-white/40 dark:hover:text-gold"
                >
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Secondary exploration list */}
          <div className="overflow-hidden rounded-[2rem] border border-midnight/[0.09] bg-white/28 backdrop-blur-2xl dark:border-white/[0.085] dark:bg-white/[0.018]">
            {areas.slice(1, 4).map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group grid min-h-[9.5rem] grid-cols-[auto_1fr_auto] gap-5 border-b border-midnight/[0.08] p-6 transition-all duration-300 last:border-b-0 hover:bg-white/35 dark:border-white/[0.075] dark:hover:bg-white/[0.025]"
                >
                  <span className="pt-1 font-display text-sm italic text-gold/75">
                    {area.number}
                  </span>

                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-midnight/36 dark:text-white/30">
                      {area.label}
                    </p>

                    <h3 className="mt-2 font-display text-[1.75rem] leading-[1] tracking-[-0.03em]">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-[0.8rem] leading-6 text-midnight/48 dark:text-white/44">
                      {area.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                    <Icon className="h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Future Frontiers */}
        <article className="group mt-4 grid gap-8 overflow-hidden rounded-[2rem] border border-midnight/[0.09] bg-midnight p-7 text-[#f7f4ee] transition-all duration-500 hover:border-gold/30 dark:border-white/[0.08] dark:bg-[#091825] sm:p-9 lg:grid-cols-[0.25fr_0.75fr_1fr_auto] lg:items-center">
          <div>
            <span className="font-display text-sm italic text-gold">
              05
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gold">
              <Orbit className="h-5 w-5" />
            </div>

            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/35">
              Emerging Frontiers
            </p>
          </div>

          <div>
            <h3 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-[1] tracking-[-0.035em]">
              Future Frontiers
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/48">
              Keeping space for technologies and opportunities
              that have not yet become obvious — but may shape
              what comes next.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gold transition-all duration-300 group-hover:border-gold/45 group-hover:bg-gold group-hover:text-midnight">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </article>

        {/* Closing statement */}
        <div className="mt-12 border-t border-midnight/[0.08] pt-8 dark:border-white/[0.08]">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_1.58fr]">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Beyond categories
            </p>

            <p className="max-w-5xl font-display text-[clamp(1.8rem,2.8vw,3rem)] leading-[1.1] tracking-[-0.03em]">
              We are not defined by a single technology. We
              follow meaningful problems and explore the
              technologies capable of{" "}
              <span className="italic text-gold">
                solving them.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}