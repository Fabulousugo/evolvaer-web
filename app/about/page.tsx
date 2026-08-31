import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Compass,
  FlaskConical,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Evolvaer Technologies — an emerging technology company combining research, engineering and venture building to turn promising technologies into useful products and companies.",
};

const operatingModel = [
  {
    number: "01",
    title: "Research",
    description:
      "We investigate emerging technologies, changing behaviours and meaningful problems before deciding what deserves to be built.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "We turn promising ideas into prototypes, systems and technical foundations that can survive outside the laboratory.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Build",
    description:
      "When an opportunity proves valuable, we develop it into a product, platform or independent venture.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We strengthen technology, product thinking and commercial foundations so useful ideas can grow sustainably.",
    icon: Building2,
  },
];

const principles = [
  {
    title: "Purposeful",
    description:
      "We begin with problems worth solving rather than technologies looking for somewhere to be used.",
    icon: Target,
  },
  {
    title: "Inventive",
    description:
      "We remain curious enough to challenge familiar assumptions and explore better possibilities.",
    icon: Lightbulb,
  },
  {
    title: "Trustworthy",
    description:
      "Responsibility, clarity and dependable engineering are built into how we work.",
    icon: ShieldCheck,
  },
  {
    title: "Collaborative",
    description:
      "The strongest outcomes emerge when technical, human and commercial perspectives work together.",
    icon: Users,
  },
];

const evolution = [
  "Explore what is changing",
  "Understand what matters",
  "Test what is possible",
  "Engineer what is useful",
  "Build what deserves to exist",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f4ee] text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[92svh] overflow-hidden pt-28 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-12rem] top-[-10rem] h-[42rem] w-[42rem] rounded-full bg-gold/[0.07] blur-[180px] dark:bg-gold/[0.08]" />

          <div className="absolute bottom-[-15rem] left-[-12rem] h-[36rem] w-[36rem] rounded-full bg-teal/[0.035] blur-[160px] dark:bg-teal/[0.05]" />

          <div
            className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(13,27,42,.14) 1px, transparent 1px),
                linear-gradient(90deg, rgba(13,27,42,.14) 1px, transparent 1px)
              `,
              backgroundSize: "96px 96px",
            }}
          />
        </div>

        <div className="evolvaer-container relative z-10 flex flex-1 flex-col justify-between pb-10 pt-16 sm:pb-14 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                  About Evolvaer
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4.3rem,8vw,9rem)] leading-[0.84] tracking-[-0.06em]">
                Built to explore
                <br />
                what comes{" "}
                <span className="gold-gradient-text italic">
                  next.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-midnight/60 dark:text-white/56 sm:text-lg">
                Evolvaer Technologies is an emerging technology
                company that researches, engineers and builds
                products around ideas with the potential to
                create meaningful real-world value.
              </p>

              <Link
                href="#our-story"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Discover our thinking

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-end justify-between border-t border-midnight/[0.08] pt-6 dark:border-white/[0.08]">
            <p className="max-w-xl text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.24em] text-midnight/32 dark:text-white/28">
              Research · Engineering · Venture Building
            </p>

            <p className="hidden font-display text-sm italic text-gold sm:block">
              Evolving ideas into impact
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        id="our-story"
        className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-32"
      >
        <div className="evolvaer-container">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/38">
                  Why we exist
                </span>
              </div>
            </div>

            <div>
              <p className="max-w-5xl font-display text-[clamp(2.6rem,4.7vw,5.4rem)] leading-[1] tracking-[-0.045em]">
                Technology moves quickly.
                <br />
                Useful innovation requires{" "}
                <span className="italic text-gold">
                  something more.
                </span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-midnight/[0.09] pt-8 dark:border-white/[0.08] md:grid-cols-2">
                <p className="text-sm leading-7 text-midnight/54 dark:text-white/48 sm:text-base sm:leading-8">
                  New capabilities appear constantly, but not
                  every technological breakthrough becomes a
                  meaningful product. The difficult work lies in
                  understanding where technology intersects with
                  a genuine problem, a useful experience and a
                  viable opportunity.
                </p>

                <p className="text-sm leading-7 text-midnight/54 dark:text-white/48 sm:text-base sm:leading-8">
                  Evolvaer exists to work in that space. We
                  explore emerging technologies, investigate
                  their potential, engineer practical systems
                  and build the ideas that prove worthy of going
                  further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Evolvaer is */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-10rem] top-[10%] h-[32rem] w-[32rem] rounded-full bg-gold/[0.055] blur-[150px] dark:bg-gold/[0.065]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                What Evolvaer is
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.95] tracking-[-0.045em]">
                One company.
                <br />
                Three connected
                <br />
                capabilities.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-midnight/56 dark:text-white/52 lg:justify-self-end">
              Rather than separating research, technology
              development and company creation, we connect them.
              Each strengthens the others.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3">
            <article className="relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-midnight p-7 text-white dark:bg-[#091825] sm:p-9">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/15" />

              <FlaskConical className="h-6 w-6 text-gold" />

              <div className="mt-24">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.27em] text-white/32">
                  01 · Research
                </p>

                <h3 className="mt-4 font-display text-4xl tracking-[-0.035em]">
                  Understand before building.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  Investigate technologies, needs, markets and
                  possibilities before making assumptions about
                  the solution.
                </p>
              </div>
            </article>

            <article className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-midnight/[0.09] bg-white/40 p-7 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-white/[0.022] sm:p-9">
              <BrainCircuit className="h-6 w-6 text-gold" />

              <div className="mt-24">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.27em] text-midnight/35 dark:text-white/32">
                  02 · Engineering
                </p>

                <h3 className="mt-4 font-display text-4xl tracking-[-0.035em]">
                  Turn possibility into systems.
                </h3>

                <p className="mt-5 text-sm leading-7 text-midnight/50 dark:text-white/47">
                  Prototype, test and engineer the technical
                  foundations needed to transform promising
                  ideas into usable technology.
                </p>
              </div>
            </article>

            <article className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-midnight/[0.09] bg-white/40 p-7 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-white/[0.022] sm:p-9">
              <Network className="h-6 w-6 text-gold" />

              <div className="mt-24">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.27em] text-midnight/35 dark:text-white/32">
                  03 · Ventures
                </p>

                <h3 className="mt-4 font-display text-4xl tracking-[-0.035em]">
                  Build what deserves to exist.
                </h3>

                <p className="mt-5 text-sm leading-7 text-midnight/50 dark:text-white/47">
                  Develop validated opportunities into products,
                  platforms and companies capable of creating
                  lasting value.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  How we operate
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.6vw,5rem)] leading-[0.96] tracking-[-0.045em]">
                Ideas move
                <br />
                through a
                <br />
                <span className="italic text-gold">
                  system.
                </span>
              </h2>
            </div>

            <div className="border-t border-midnight/[0.09] dark:border-white/[0.08]">
              {operatingModel.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group grid gap-5 border-b border-midnight/[0.08] py-8 dark:border-white/[0.075] sm:grid-cols-[auto_1fr] sm:gap-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 pt-2 font-display text-sm italic text-gold">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-colors group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-[2rem] tracking-[-0.03em]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Evolvaer meaning / evolution */}
      <section className="relative overflow-hidden bg-midnight py-20 text-white dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-10rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-gold/[0.08] blur-[170px]" />

          <div className="absolute bottom-[-14rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-teal/[0.055] blur-[160px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/38">
                  Evolution by design
                </span>
              </div>

              <p className="mt-10 max-w-xl font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.94] tracking-[-0.045em]">
                Progress is a
                <br />
                process of{" "}
                <span className="italic text-gold">
                  evolution.
                </span>
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-white/54 sm:text-lg">
                Evolvaer is built around continuous exploration:
                ideas evolve through evidence, experimentation,
                engineering and use. We are comfortable changing
                direction when what we learn demands it.
              </p>

              <div className="mt-10 border-t border-white/[0.09]">
                {evolution.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-6 border-b border-white/[0.08] py-5"
                  >
                    <span className="w-8 font-display text-sm italic text-gold">
                      0{index + 1}
                    </span>

                    <span className="font-display text-xl tracking-[-0.02em] text-white/78 sm:text-2xl">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Principles
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.045em]">
                What changes.
                <br />
                What{" "}
                <span className="italic text-gold">
                  doesn&apos;t.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              Technologies will change. Markets will change. The
              principles guiding how we choose, build and scale
              ideas should remain much more durable.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-midnight/[0.08] bg-midnight/[0.08] dark:border-white/[0.08] dark:bg-white/[0.08] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="group min-h-[20rem] bg-[#f7f4ee] p-7 transition-colors hover:bg-white/70 dark:bg-[#050e17] dark:hover:bg-[#081522] sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/45 transition-colors group-hover:border-gold/35 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="mt-14 font-display text-[1.9rem] tracking-[-0.03em]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-midnight/50 dark:text-white/46">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long-term ambition */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="rounded-[2.4rem] bg-midnight p-8 text-white dark:bg-[#091825] sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.35fr_1.65fr]">
              <div>
                <Sparkles className="h-6 w-6 text-gold" />

                <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/32">
                  Long-term ambition
                </p>
              </div>

              <div>
                <p className="max-w-5xl font-display text-[clamp(2.6rem,4.5vw,5.2rem)] leading-[1] tracking-[-0.045em]">
                  To build an enduring technology company capable
                  of turning important ideas into products and
                  ventures that{" "}
                  <span className="italic text-gold">
                    matter.
                  </span>
                </p>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                  Not defined by one product. Not limited to one
                  technology. Built to keep exploring, learning
                  and creating as the technological landscape
                  evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 border-y border-white/[0.09] py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Keep exploring
              </p>

              <h2 className="mt-6 font-display text-[clamp(3.4rem,5.7vw,6.5rem)] leading-[0.9] tracking-[-0.05em]">
                See what we&apos;re
                <br />
                working{" "}
                <span className="italic text-gold">
                  towards.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              <Link
                href="/what-we-do"
                className="group inline-flex min-h-13 items-center gap-5 rounded-full bg-gold px-6 text-sm font-semibold text-midnight transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc15d]"
              >
                What we do

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/ventures"
                className="inline-flex min-h-13 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-gold/40 hover:text-gold"
              >
                Explore ventures
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}