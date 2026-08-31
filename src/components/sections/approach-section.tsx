"use client";

import {
  ArrowUpRight,
  Compass,
  FlaskConical,
  Wrench,
  Blocks,
  TrendingUp,
  Sparkles,
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
      "Investigate the technical, commercial and societal potential behind each opportunity.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Transform ideas into robust systems, prototypes and intelligent technology foundations.",
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
      "Strengthen products, operations and technology for real-world adoption and growth.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Impact",
    description:
      "Measure success by meaningful outcomes, not technology for technology’s sake.",
    icon: Sparkles,
  },
];

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-24 text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee] sm:py-28 lg:py-36">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f4ee_0%,#f2efe7_100%)] dark:bg-[linear-gradient(180deg,#050e17_0%,#071522_100%)]" />

        <div className="absolute left-[-15rem] top-[10%] h-[34rem] w-[34rem] rounded-full bg-teal/[0.035] blur-[150px] dark:bg-teal/[0.05]" />

        <div className="absolute bottom-[-16rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-gold/[0.07] blur-[160px] dark:bg-gold/[0.075]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13,27,42,.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13,27,42,.14) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-midnight/45 dark:text-white/45">
                Our approach
              </span>
            </div>

            <h2 className="max-w-xl font-display text-[clamp(3.2rem,5vw,5.6rem)] leading-[0.95] tracking-[-0.045em]">
              From possibility
              <br />
              to{" "}
              <span className="gold-gradient-text italic">
                impact.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-midnight/60 dark:text-white/58 sm:text-lg">
              We combine research, engineering and venture
              building to move promising technologies from
              exploration into practical, scalable solutions.
            </p>
          </div>
        </div>

        {/* Journey line */}
        <div className="relative mt-16 lg:mt-24">
          <div className="absolute left-0 right-0 top-[2.45rem] hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-midnight/10 bg-white/45 p-6 shadow-[0_18px_60px_rgba(13,27,42,0.045)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_28px_80px_rgba(13,27,42,0.075)] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_22px_70px_rgba(0,0,0,0.18)] dark:hover:border-gold/30 dark:hover:bg-white/[0.05]"
                >
                  {/* Gold top glow */}
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-midnight/10 bg-white/65 text-midnight shadow-[0_10px_30px_rgba(13,27,42,0.05)] transition-all duration-500 group-hover:border-gold/30 group-hover:text-gold dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:group-hover:text-gold">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-display text-lg italic text-gold/80">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-2xl tracking-[-0.025em]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-midnight/55 dark:text-white/52">
                      {step.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-[0.67rem] font-semibold uppercase tracking-[0.24em] text-midnight/35 transition-colors duration-300 group-hover:text-gold dark:text-white/30">
                      <span>{step.title}</span>

                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Philosophy strip */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-midnight/10 bg-midnight/[0.035] px-6 py-7 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.025] sm:px-8 lg:mt-20 lg:flex lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
              How we think
            </p>

            <p className="mt-3 max-w-3xl font-display text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">
              Technology becomes valuable when it moves beyond
              novelty and creates something people can actually
              use.
            </p>
          </div>

          <div className="mt-7 flex shrink-0 items-center gap-3 text-sm font-medium text-midnight/55 dark:text-white/50 lg:ml-10 lg:mt-0">
            <span>Explore</span>
            <span className="text-gold">→</span>
            <span>Build</span>
            <span className="text-gold">→</span>
            <span>Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}