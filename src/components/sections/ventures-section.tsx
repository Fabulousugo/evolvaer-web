"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const ventureProcess = [
  "Discover",
  "Validate",
  "Engineer",
  "Launch",
];

export function VenturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-20 text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee] sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-12rem] top-[-6rem] h-[34rem] w-[34rem] rounded-full bg-gold/[0.06] blur-[150px] dark:bg-gold/[0.075]" />

        <div className="absolute bottom-[-12rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-teal/[0.03] blur-[145px] dark:bg-teal/[0.045]" />

        <div
          className="absolute inset-0 opacity-[0.016] dark:opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13,27,42,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13,27,42,.12) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
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
                Ventures
              </span>
            </div>

            <h2 className="max-w-4xl font-display text-[clamp(3rem,4.9vw,5.5rem)] leading-[0.94] tracking-[-0.045em]">
              We don&apos;t just
              <br />
              research the future.
              <br />
              We{" "}
              <span className="gold-gradient-text italic">
                build companies
              </span>{" "}
              for it.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-midnight/58 dark:text-white/56 sm:text-[1.05rem]">
              Some opportunities deserve more than a report or
              prototype. When the problem, technology and market
              align, we turn them into products and ventures.
            </p>

            <Link
              href="/ventures"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-midnight dark:text-white"
            >
              Explore our ventures

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Adaptcues feature */}
        <article className="relative mt-14 overflow-hidden rounded-[2.25rem] border border-midnight/[0.09] bg-midnight text-white shadow-[0_30px_100px_rgba(13,27,42,0.14)] dark:border-white/[0.09] dark:bg-[#081725] lg:mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute right-[-8rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full border border-gold/[0.12]" />

            <div className="absolute right-[4%] top-[10%] h-[24rem] w-[24rem] rounded-full border border-white/[0.05]" />

            <div className="absolute right-[12%] top-[22%] h-52 w-52 rounded-full bg-gold/[0.09] blur-[80px]" />

            <div className="absolute bottom-[-8rem] right-[24%] h-64 w-64 rounded-full bg-teal/[0.065] blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)
                `,
                backgroundSize: "88px 88px",
              }}
            />
          </div>

          <div className="relative z-10 grid min-h-[36rem] lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#ffd58a]">
                  In development
                </span>

                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/32">
                  Evolvaer Venture 01
                </span>
              </div>

              <div className="mt-auto max-w-3xl pt-20">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  AI · Communication
                </p>

                <h3 className="mt-4 font-display text-[clamp(4rem,7vw,7.4rem)] leading-[0.84] tracking-[-0.055em]">
                  Adaptcues
                </h3>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/56 sm:text-lg">
                  An intelligent communication platform designed
                  to help people prepare for important
                  conversations, practise how they respond and
                  communicate with greater confidence.
                </p>

                <Link
                  href="/ventures"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
                >
                  Discover Adaptcues

                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Abstract venture visual */}
            <div className="relative hidden min-h-[36rem] border-l border-white/[0.07] lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[26rem] w-[26rem]">
                  <div className="absolute inset-0 rounded-full border border-white/[0.07]" />

                  <div className="absolute inset-[13%] rounded-full border border-gold/20" />

                  <div className="absolute inset-[27%] rounded-full border border-white/[0.08]" />

                  <div className="absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[35px]" />

                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-gold/25 bg-white/[0.035] backdrop-blur-xl">
                    <Sparkles className="h-8 w-8 text-gold" />
                  </div>

                  <div className="absolute left-[4%] top-[46%] h-3 w-3 rounded-full bg-gold shadow-[0_0_26px_rgba(244,166,42,0.7)]" />

                  <div className="absolute right-[16%] top-[17%] h-2 w-2 rounded-full bg-teal shadow-[0_0_20px_rgba(0,137,123,0.7)]" />

                  <div className="absolute bottom-[13%] right-[25%] h-2 w-2 rounded-full bg-white/60" />
                </div>
              </div>

              <div className="absolute bottom-9 left-9 right-9 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/30">
                  Human-centred intelligence
                </span>

                <span className="font-display text-sm italic text-gold">
                  01
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Venture building model */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-midnight/[0.09] bg-white/38 p-7 backdrop-blur-2xl dark:border-white/[0.085] dark:bg-white/[0.022] sm:p-9">
            <div className="flex items-center justify-between">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.27em] text-gold">
                Venture building
              </p>

              <Layers3 className="h-5 w-5 text-midnight/35 dark:text-white/35" />
            </div>

            <p className="mt-14 font-display text-[clamp(2.2rem,3.4vw,3.7rem)] leading-[1.02] tracking-[-0.035em]">
              From insight
              <br />
              to{" "}
              <span className="italic text-gold">
                company.
              </span>
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-midnight/52 dark:text-white/48">
              We combine product thinking, research,
              engineering and commercial exploration to build
              technology ventures from the ground up.
            </p>
          </article>

          <article className="rounded-[2rem] border border-midnight/[0.09] bg-white/28 p-7 backdrop-blur-2xl dark:border-white/[0.085] dark:bg-white/[0.018] sm:p-9">
            <div className="flex items-center justify-between">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.27em] text-midnight/40 dark:text-white/35">
                How ventures move
              </p>

              <Rocket className="h-5 w-5 text-gold" />
            </div>

            <div className="mt-12">
              {ventureProcess.map((step, index) => (
                <div
                  key={step}
                  className="group flex items-center gap-5 border-t border-midnight/[0.08] py-5 first:border-t-0 dark:border-white/[0.075]"
                >
                  <span className="w-8 font-display text-sm italic text-gold/80">
                    0{index + 1}
                  </span>

                  <p className="flex-1 font-display text-[1.55rem] tracking-[-0.025em]">
                    {step}
                  </p>

                  <ArrowRight className="h-4 w-4 text-midnight/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold dark:text-white/20" />
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 border-t border-midnight/[0.08] pt-8 dark:border-white/[0.08]">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_1.58fr]">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              What comes next
            </p>

            <p className="max-w-5xl font-display text-[clamp(1.8rem,2.8vw,3rem)] leading-[1.1] tracking-[-0.03em]">
              Not every experiment becomes a venture. The ones
              that do must earn the right to{" "}
              <span className="italic text-gold">
                exist and scale.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}