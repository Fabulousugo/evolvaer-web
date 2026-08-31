"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Radar,
} from "lucide-react";

const researchAreas = [
  {
    number: "01",
    category: "Applied Research",
    title:
      "Turning emerging technologies into practical systems.",
    description:
      "We explore technical possibilities through prototypes, experiments and applied investigation before deciding what deserves to be built.",
    icon: FlaskConical,
  },
  {
    number: "02",
    category: "Technology Intelligence",
    title:
      "Understanding change before opportunity becomes obvious.",
    description:
      "We study evolving capabilities, behaviours and markets to identify where technology may create meaningful new value.",
    icon: Radar,
  },
  {
    number: "03",
    category: "Ideas & Perspectives",
    title:
      "Sharing the thinking behind the technologies we pursue.",
    description:
      "Our perspectives document what we are learning, questioning and discovering across emerging technology and innovation.",
    icon: BookOpen,
  },
];

export function ResearchSection() {
  return (
    <section className="relative overflow-hidden bg-[#efebe2] py-20 text-midnight transition-colors duration-700 dark:bg-[#07131f] dark:text-[#f7f4ee] sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-14rem] top-[4rem] h-[32rem] w-[32rem] rounded-full bg-teal/[0.03] blur-[150px] dark:bg-teal/[0.045]" />

        <div className="absolute bottom-[-12rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-gold/[0.055] blur-[160px] dark:bg-gold/[0.065]" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                Research & Innovation
              </span>
            </div>

            <h2 className="font-display text-[clamp(3rem,4.9vw,5.5rem)] leading-[0.94] tracking-[-0.045em]">
              Questions first.
              <br />
              Technology{" "}
              <span className="gold-gradient-text italic">
                second.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-midnight/58 dark:text-white/56 sm:text-[1.05rem]">
              We investigate emerging technologies through the
              problems they could solve, the value they might
              create and the consequences of putting them into
              the real world.
            </p>

            <Link
              href="/research"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-midnight dark:text-white"
            >
              Explore our research

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Journal list */}
        <div className="mt-14 border-t border-midnight/[0.1] dark:border-white/[0.09] lg:mt-16">
          {researchAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group grid gap-6 border-b border-midnight/[0.09] py-9 transition-colors dark:border-white/[0.08] lg:grid-cols-[0.12fr_0.28fr_0.9fr_auto] lg:items-start lg:gap-8 lg:py-11"
              >
                <span className="font-display text-sm italic text-gold">
                  {item.number}
                </span>

                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/45 transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/40">
                    <Icon className="h-4 w-4" />
                  </div>

                  <p className="mt-4 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-midnight/38 dark:text-white/32">
                    {item.category}
                  </p>
                </div>

                <div>
                  <h3 className="max-w-3xl font-display text-[clamp(2rem,3vw,3.2rem)] leading-[1.03] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/47">
                    {item.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-midnight/[0.08] text-midnight/35 transition-all duration-300 group-hover:border-gold/35 group-hover:text-gold dark:border-white/[0.08] dark:text-white/30">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </article>
            );
          })}
        </div>

        {/* Manifesto */}
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-midnight/[0.09] bg-white/34 p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-9 lg:p-11">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Research principle
            </span>

            <p className="mt-8 max-w-5xl font-display text-[clamp(2.2rem,3.7vw,4.2rem)] leading-[1.04] tracking-[-0.04em]">
              We are less interested in what technology{" "}
              <span className="italic">
                can
              </span>{" "}
              do than in what it{" "}
              <span className="italic text-gold">
                should enable.
              </span>
            </p>
          </div>

          <div className="flex min-h-[20rem] flex-col justify-between rounded-[2rem] bg-midnight p-7 text-white dark:bg-[#091825] sm:p-9">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.27em] text-white/32">
              Research loop
            </span>

            <div>
              <p className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.03em]">
                Question.
                <br />
                Investigate.
                <br />
                Test.
                <br />
                Apply.
              </p>

              <div className="mt-7 h-px w-12 bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}