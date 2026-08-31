import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Code2,
  Compass,
  FlaskConical,
  Layers3,
  Network,
  Orbit,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore how Evolvaer Technologies researches emerging technologies, engineers intelligent systems, builds digital products and develops new technology ventures.",
};

const capabilities = [
  {
    number: "01",
    title: "Explore",
    subtitle: "Opportunity discovery",
    description:
      "We investigate emerging technologies, changing behaviours, unmet needs and new technical capabilities to understand where meaningful opportunities may be forming.",
    outcomes: [
      "Technology landscape exploration",
      "Problem discovery",
      "Opportunity framing",
      "Early commercial thinking",
    ],
    icon: Compass,
  },
  {
    number: "02",
    title: "Research",
    subtitle: "Applied investigation",
    description:
      "We examine the technical, human and commercial assumptions behind an opportunity before deciding whether it deserves further investment.",
    outcomes: [
      "Applied technology research",
      "Technical feasibility",
      "Market and user investigation",
      "Research-led experimentation",
    ],
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Prototype",
    subtitle: "Learning through making",
    description:
      "Promising ideas become experiments and working prototypes that allow us to test behaviour, technical assumptions and real-world usefulness.",
    outcomes: [
      "Rapid prototypes",
      "Proofs of concept",
      "Experience testing",
      "Technical validation",
    ],
    icon: Blocks,
  },
  {
    number: "04",
    title: "Engineer",
    subtitle: "Systems that can endure",
    description:
      "Once the direction is validated, we engineer the architecture, software and intelligent systems required to turn the concept into dependable technology.",
    outcomes: [
      "Software engineering",
      "AI and intelligent systems",
      "Platform architecture",
      "Technical foundations",
    ],
    icon: Wrench,
  },
  {
    number: "05",
    title: "Productise",
    subtitle: "From system to product",
    description:
      "We shape working technology into a coherent product with the experience, infrastructure and operational foundations needed for real adoption.",
    outcomes: [
      "Product development",
      "User experience",
      "Technical scaling",
      "Operational readiness",
    ],
    icon: Layers3,
  },
  {
    number: "06",
    title: "Venture Build",
    subtitle: "From product to company",
    description:
      "When an opportunity has the potential to become more than a product, we develop the commercial and organisational foundations required to create a venture around it.",
    outcomes: [
      "Venture formation",
      "Business model development",
      "Commercial validation",
      "Scale preparation",
    ],
    icon: Rocket,
  },
];

const domains = [
  {
    title: "AI & Intelligent Systems",
    description:
      "Intelligent software, machine learning, adaptive systems and AI-enabled experiences designed around meaningful use.",
    icon: BrainCircuit,
  },
  {
    title: "Emerging Software",
    description:
      "New software platforms, digital infrastructure and product experiences shaped by evolving technologies and behaviours.",
    icon: Code2,
  },
  {
    title: "Human-Centred Technology",
    description:
      "Technology designed around accessibility, communication, interaction and the realities of how people actually live and work.",
    icon: Network,
  },
  {
    title: "Energy & Climate Technology",
    description:
      "Digital systems and intelligent technologies that can contribute to more efficient, informed and sustainable energy futures.",
    icon: Sparkles,
  },
  {
    title: "Future Frontiers",
    description:
      "Exploration beyond established categories where emerging capabilities may create entirely new opportunities.",
    icon: Orbit,
  },
];

const collaborationModels = [
  {
    number: "01",
    title: "Explore with us",
    description:
      "For organisations trying to understand an emerging technology, opportunity or problem space before making large commitments.",
  },
  {
    number: "02",
    title: "Build with us",
    description:
      "For teams with a validated opportunity that need research, product thinking and engineering brought together around one build.",
  },
  {
    number: "03",
    title: "Create with us",
    description:
      "For opportunities with the potential to become new products, platforms or standalone ventures.",
  },
];

export default function WhatWeDoPage() {
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

          <div className="absolute bottom-[-14rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-teal/[0.035] blur-[160px] dark:bg-teal/[0.05]" />

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
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                  What we do
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4.2rem,7.8vw,8.8rem)] leading-[0.84] tracking-[-0.06em]">
                From emerging
                <br />
                possibility to
                <br />
                <span className="gold-gradient-text italic">
                  useful technology.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-midnight/60 dark:text-white/56 sm:text-lg">
                We connect research, engineering, product
                development and venture building so promising
                technologies can move from interesting ideas into
                systems people can actually use.
              </p>

              <Link
                href="#capabilities"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                See how we work

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-4 border-t border-midnight/[0.08] pt-6 dark:border-white/[0.08] sm:grid-cols-3">
            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-midnight/32 dark:text-white/28">
              Research-led
            </p>

            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-midnight/32 dark:text-white/28">
              Engineering-driven
            </p>

            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-gold sm:text-right">
              Built for application
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Our model
            </p>

            <div>
              <p className="max-w-5xl font-display text-[clamp(2.8rem,4.7vw,5.4rem)] leading-[1] tracking-[-0.045em]">
                We work across the distance between{" "}
                <span className="italic">
                  “this is interesting”
                </span>{" "}
                and{" "}
                <span className="italic text-gold">
                  “this is useful.”
                </span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-midnight/[0.09] pt-8 dark:border-white/[0.08] md:grid-cols-2">
                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  Many emerging technologies begin with a
                  capability rather than a clear use case. We
                  investigate where that capability intersects
                  with real problems, valuable experiences and
                  viable opportunities.
                </p>

                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  That means Evolvaer can move between research,
                  prototyping, engineering and venture creation
                  without treating them as disconnected phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28"
      >
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  Capabilities
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.045em]">
                One continuous
                <br />
                path from idea
                <br />
                to{" "}
                <span className="italic text-gold">
                  impact.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              The work changes depending on the opportunity, but
              the underlying logic remains consistent: reduce
              uncertainty, learn quickly and build only what the
              evidence justifies.
            </p>
          </div>

          <div className="mt-14 border-t border-midnight/[0.09] dark:border-white/[0.08] lg:mt-16">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.number}
                  className="group grid gap-7 border-b border-midnight/[0.08] py-10 dark:border-white/[0.075] lg:grid-cols-[0.1fr_0.24fr_0.8fr_0.7fr] lg:gap-10"
                >
                  <span className="font-display text-sm italic text-gold">
                    {capability.number}
                  </span>

                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                      <Icon className="h-4 w-4" />
                    </div>

                    <p className="mt-4 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-midnight/35 dark:text-white/30">
                      {capability.subtitle}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-[clamp(2.3rem,3.7vw,4rem)] leading-[0.98] tracking-[-0.04em]">
                      {capability.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46 sm:text-base">
                      {capability.description}
                    </p>
                  </div>

                  <div className="lg:border-l lg:border-midnight/[0.08] lg:pl-8 dark:lg:border-white/[0.075]">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-gold">
                      Typical work
                    </p>

                    <div className="mt-5 space-y-3">
                      {capability.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-center gap-3"
                        >
                          <span className="h-1 w-1 rounded-full bg-gold" />

                          <span className="text-sm text-midnight/48 dark:text-white/44">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology domains */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-10rem] top-[-8rem] h-[36rem] w-[36rem] rounded-full bg-gold/[0.08] blur-[170px]" />

          <div className="absolute bottom-[-12rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-teal/[0.055] blur-[160px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Technology domains
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.95] tracking-[-0.045em]">
                We follow
                <br />
                problems, not
                <br />
                <span className="italic text-gold">
                  categories.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/52 lg:justify-self-end">
              Our areas of exploration give us direction without
              becoming boundaries. The right technology depends
              on the problem being solved.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:mt-16">
            {domains.map((domain, index) => {
              const Icon = domain.icon;

              return (
                <article
                  key={domain.title}
                  className={`group min-h-[19rem] bg-[#07131f] p-7 transition-colors hover:bg-[#091825] sm:p-9 ${
                    index === domains.length - 1
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <Icon className="h-5 w-5 text-gold" />

                    <span className="font-display text-sm italic text-white/22">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-14 max-w-xl font-display text-[2rem] leading-[1] tracking-[-0.03em] sm:text-[2.25rem]">
                    {domain.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/46">
                    {domain.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Build system */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.07] text-gold">
                <Network className="h-5 w-5" />
              </div>

              <p className="mt-8 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Connected by design
              </p>

              <h2 className="mt-6 font-display text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.96] tracking-[-0.045em]">
                Research does not
                <br />
                end when engineering
                <br />
                <span className="italic text-gold">
                  begins.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-midnight/54 dark:text-white/50">
                Each capability feeds information back into the
                others. Prototypes reveal new research
                questions. Engineering exposes assumptions.
                Product use changes commercial thinking.
              </p>

              <div className="mt-10 rounded-[2rem] border border-midnight/[0.08] bg-white/35 p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-9">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    "Learn",
                    "Build",
                    "Learn again",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="relative flex min-h-[10rem] flex-col justify-between border-b border-midnight/[0.08] pb-5 last:border-b-0 dark:border-white/[0.08] sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5 sm:last:border-r-0"
                    >
                      <span className="font-display text-sm italic text-gold">
                        0{index + 1}
                      </span>

                      <p className="font-display text-2xl tracking-[-0.03em]">
                        {item}
                      </p>

                      {index < 2 && (
                        <ArrowRight className="absolute right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-gold/40 sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Working together
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.045em]">
                Different starting
                <br />
                points. One goal:
                <br />
                <span className="italic text-gold">
                  progress.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              Collaboration does not need to begin with a fully
              formed product brief. Sometimes the first useful
              step is simply understanding the opportunity
              properly.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3">
            {collaborationModels.map((model) => (
              <article
                key={model.number}
                className="group flex min-h-[22rem] flex-col rounded-[2rem] border border-midnight/[0.09] bg-white/38 p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 dark:border-white/[0.08] dark:bg-white/[0.022] sm:p-9"
              >
                <span className="font-display text-sm italic text-gold">
                  {model.number}
                </span>

                <div className="mt-auto pt-16">
                  <h3 className="font-display text-[2.2rem] leading-[1] tracking-[-0.035em]">
                    {model.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-midnight/50 dark:text-white/46">
                    {model.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy statement */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-8 border-y border-midnight/[0.09] py-12 dark:border-white/[0.08] lg:grid-cols-[0.4fr_1.6fr] lg:py-16">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              The standard
            </p>

            <p className="max-w-5xl font-display text-[clamp(2.4rem,4vw,4.6rem)] leading-[1.04] tracking-[-0.04em]">
              We do not ask whether a technology is impressive.
              We ask whether it can become{" "}
              <span className="italic text-gold">
                useful, responsible and valuable.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-8rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-gold/[0.09] blur-[170px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-12 border-y border-white/[0.09] py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Have something worth exploring?
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,6vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                Start with the
                <br />
                <span className="italic text-gold">
                  problem.
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/50">
                If you&apos;re investigating an emerging
                technology, validating an opportunity or trying
                to turn an ambitious idea into something real,
                we&apos;d like to understand it.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex min-h-14 items-center gap-7 rounded-full border border-gold/45 bg-gold/[0.08] px-7 text-sm font-semibold text-[#ffd58a] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold/[0.14]"
              >
                Start a conversation

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}