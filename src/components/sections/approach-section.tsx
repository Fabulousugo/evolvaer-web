"use client";

import {
  Blocks,
  Compass,
  FlaskConical,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Identify emerging technologies, unmet needs and opportunities worth pursuing.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Research",
    description:
      "Investigate technical, commercial and societal potential before committing to a direction.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Transform promising ideas into robust systems, prototypes and technology foundations.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turn validated concepts into useful products, platforms and ventures.",
    icon: Blocks,
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Strengthen technology, operations and product foundations for wider adoption.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Impact",
    description:
      "Measure progress through meaningful outcomes, not technology for technology’s sake.",
    icon: Sparkles,
  },
];

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-20 text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee] sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f4ee_0%,#f2efe7_100%)] dark:bg-[linear-gradient(180deg,#050e17_0%,#071522_100%)]" />

        <div className="absolute left-[-14rem] top-[12%] h-[30rem] w-[30rem] rounded-full bg-teal/[0.025] blur-[150px] dark:bg-teal/[0.04]" />

        <div className="absolute bottom-[-15rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-gold/[0.055] blur-[150px] dark:bg-gold/[0.065]" />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13,27,42,.13) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13,27,42,.13) 1px, transparent 1px)
            `,
            backgroundSize: "88px 88px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                Our approach
              </span>
            </div>

            <h2 className="max-w-2xl font-display text-[clamp(3rem,4.6vw,5.2rem)] leading-[0.95] tracking-[-0.045em]">
              From possibility
              <br />
              to{" "}
              <span className="gold-gradient-text italic">
                impact.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-midnight/58 dark:text-white/56 sm:text-[1.05rem]">
              We combine research, engineering and venture
              building to move promising technologies from
              exploration into practical, scalable solutions.
            </p>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="absolute left-[3%] right-[3%] top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent xl:block" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex min-h-[17rem] flex-col overflow-hidden rounded-[1.6rem] border border-midnight/[0.09] bg-white/38 p-5 shadow-[0_14px_45px_rgba(13,27,42,0.035)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white/52 hover:shadow-[0_24px_65px_rgba(13,27,42,0.065)] dark:border-white/[0.085] dark:bg-white/[0.025] dark:shadow-[0_18px_55px_rgba(0,0,0,0.12)] dark:hover:border-gold/25 dark:hover:bg-white/[0.04]"
                >
                  <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-midnight/[0.08] bg-white/55 text-midnight/58 transition-all duration-500 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-white/55">
                      <Icon className="h-[1.05rem] w-[1.05rem]" />
                    </div>

                    <span className="font-display text-sm italic text-gold/80">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-9">
                    <h3 className="font-display text-[1.7rem] tracking-[-0.03em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[0.82rem] leading-6 text-midnight/52 dark:text-white/48">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-midnight/[0.08] pt-8 dark:border-white/[0.08] lg:mt-12">
          <div className="grid gap-6 lg:grid-cols-[0.45fr_1.55fr] lg:items-start">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Our philosophy
            </p>

            <p className="max-w-5xl font-display text-[clamp(1.8rem,2.8vw,3rem)] leading-[1.1] tracking-[-0.03em]">
              Technology becomes valuable when it moves beyond
              novelty and creates something people can{" "}
              <span className="italic text-gold">
                meaningfully use.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}