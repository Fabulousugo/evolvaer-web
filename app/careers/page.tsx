import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  FlaskConical,
  Lightbulb,
  Network,
  Rocket,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore careers at Evolvaer Technologies and discover how we bring together research, engineering, product thinking and venture building around meaningful problems.",
};

const reasons = [
  {
    number: "01",
    title: "Work on meaningful problems",
    description:
      "We want our work to matter beyond the technology itself. The starting point is always a problem worth understanding properly.",
    icon: Target,
  },
  {
    number: "02",
    title: "Learn across disciplines",
    description:
      "Research, engineering, product and commercial thinking overlap here. Good ideas are expected to cross boundaries.",
    icon: Network,
  },
  {
    number: "03",
    title: "Experiment thoughtfully",
    description:
      "We value curiosity, but not experimentation for its own sake. The goal is to learn quickly enough to make better decisions.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Build things that can grow",
    description:
      "The work should be capable of moving from concept to product and, where justified, from product to company.",
    icon: Rocket,
  },
];

const qualities = [
  {
    title: "Curious",
    description:
      "You ask better questions before rushing toward answers.",
    icon: Lightbulb,
  },
  {
    title: "Rigorous",
    description:
      "You care whether an idea actually works, not whether it merely sounds impressive.",
    icon: FlaskConical,
  },
  {
    title: "Practical",
    description:
      "You can move between ambitious thinking and the realities of building useful technology.",
    icon: Wrench,
  },
  {
    title: "Collaborative",
    description:
      "You make ideas stronger by working across disciplines rather than protecting territory.",
    icon: Users,
  },
];

const futureFunctions = [
  "Software Engineering",
  "AI & Machine Learning",
  "Product & Design",
  "Applied Research",
  "Venture Development",
  "Commercial & Operations",
];

export default function CareersPage() {
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

          <div className="absolute bottom-[-14rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-teal/[0.035] blur-[160px] dark:bg-teal/[0.05]" />

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
          <div className="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                  Careers
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4.3rem,8vw,9rem)] leading-[0.84] tracking-[-0.06em]">
                Build things
                <br />
                worth{" "}
                <span className="gold-gradient-text italic">
                  becoming.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-midnight/60 dark:text-white/56 sm:text-lg">
                Evolvaer brings together people who want to
                understand difficult problems, explore emerging
                technologies and turn promising ideas into
                products with real potential.
              </p>

              <Link
                href="#opportunities"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Explore opportunities

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-midnight/[0.08] pt-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-midnight/32 dark:text-white/28">
              Curiosity · Craft · Ownership · Collaboration
            </p>

            <p className="font-display text-sm italic text-gold">
              Help shape what comes next
            </p>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Why Evolvaer
            </p>

            <div>
              <p className="max-w-6xl font-display text-[clamp(2.8rem,4.8vw,5.5rem)] leading-[1] tracking-[-0.045em]">
                The work is not about maintaining what already
                exists.
                <br />
                It is about helping decide{" "}
                <span className="italic text-gold">
                  what should exist next.
                </span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-midnight/[0.09] pt-8 dark:border-white/[0.08] md:grid-cols-2">
                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  That means asking hard questions early,
                  challenging assumptions, making prototypes,
                  learning from evidence and being comfortable
                  changing direction when the work demands it.
                </p>

                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  The aim is not to chase every new technology.
                  It is to recognise where technology can create
                  a better outcome and then build with enough
                  discipline to make that outcome real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  The experience
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.95] tracking-[-0.045em]">
                A place for people
                <br />
                who want to{" "}
                <span className="italic text-gold">
                  build deeply.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              Working here should give you room to think, make,
              question and contribute beyond the narrow edges of
              a job title.
            </p>
          </div>

          <div className="mt-14 border-t border-midnight/[0.09] dark:border-white/[0.08] lg:mt-16">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.number}
                  className="group grid gap-6 border-b border-midnight/[0.08] py-9 dark:border-white/[0.075] lg:grid-cols-[0.1fr_0.2fr_1fr] lg:gap-8 lg:py-11"
                >
                  <span className="font-display text-sm italic text-gold">
                    {reason.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46">
                      {reason.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-11rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-gold/[0.08] blur-[180px]" />

          <div className="absolute bottom-[-13rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-teal/[0.055] blur-[160px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                How we want to work
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.95] tracking-[-0.045em]">
                Serious about
                <br />
                the work.
                <br />
                Open about{" "}
                <span className="italic text-gold">
                  the thinking.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/52 lg:justify-self-end">
              We want a culture where strong ideas can come from
              anywhere, assumptions can be challenged without
              politics and high standards do not require
              unnecessary hierarchy.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;

              return (
                <article
                  key={quality.title}
                  className="group min-h-[21rem] bg-[#07131f] p-7 transition-colors hover:bg-[#091825] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="h-5 w-5 text-gold" />

                    <span className="font-display text-sm italic text-white/22">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-16 font-display text-[2rem] tracking-[-0.03em]">
                    {quality.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {quality.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team shape */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <BrainCircuit className="h-6 w-6 text-gold" />

              <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                A multidisciplinary company
              </p>

              <h2 className="mt-6 font-display text-[clamp(2.8rem,4.4vw,5rem)] leading-[0.96] tracking-[-0.045em]">
                Different skills.
                <br />
                Shared{" "}
                <span className="italic text-gold">
                  problems.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-midnight/54 dark:text-white/50">
                As Evolvaer grows, the work will require people
                who think about technology from very different
                angles. Engineering alone is not enough. Neither
                is research, product, design or commercial
                thinking in isolation.
              </p>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-midnight/[0.08] bg-white/30 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02]">
                {futureFunctions.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-midnight/[0.08] px-6 py-5 last:border-b-0 dark:border-white/[0.075] sm:px-8"
                  >
                    <span className="w-8 font-display text-sm italic text-gold">
                      0{index + 1}
                    </span>

                    <span className="font-display text-[1.45rem] tracking-[-0.025em]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section
        id="opportunities"
        className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28"
      >
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  Opportunities
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.95] tracking-[-0.045em]">
                The team is still
                <br />
                taking{" "}
                <span className="italic text-gold">
                  shape.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              We are building deliberately. When formal
              opportunities become available, they will appear
              here.
            </p>
          </div>

          {/* No fake jobs */}
          <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-[1.25fr_0.75fr]">
            <article className="relative overflow-hidden rounded-[2.2rem] border border-midnight/[0.09] bg-white/38 p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.022] sm:p-10 lg:p-12">
              <div className="absolute right-[-7rem] top-[-7rem] h-72 w-72 rounded-full border border-gold/[0.12]" />

              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Current openings
              </p>

              <p className="mt-12 max-w-3xl font-display text-[clamp(2.5rem,4.2vw,4.8rem)] leading-[1.02] tracking-[-0.04em]">
                No roles are being advertised here{" "}
                <span className="italic text-gold">
                  yet.
                </span>
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46 sm:text-base sm:leading-8">
                We would rather publish real opportunities when
                they exist than fill this page with placeholder
                positions. This section is ready to grow with the
                company.
              </p>
            </article>

            <article className="flex flex-col justify-between rounded-[2.2rem] bg-midnight p-7 text-white dark:bg-[#091825] sm:p-9">
              <div>
                <Sparkles className="h-6 w-6 text-gold" />

                <p className="mt-6 text-[0.6rem] font-semibold uppercase tracking-[0.27em] text-white/30">
                  Exceptional fit
                </p>
              </div>

              <div className="mt-20">
                <p className="font-display text-[2rem] leading-[1.05] tracking-[-0.03em]">
                  Think your work belongs in the conversation?
                </p>

                <p className="mt-5 text-sm leading-7 text-white/46">
                  You can still introduce yourself and explain
                  what you are interested in building,
                  researching or contributing.
                </p>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold"
                >
                  Introduce yourself

                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-gold/[0.09] blur-[180px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-12 border-y border-white/[0.09] py-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:py-20">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                The kind of work ahead
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,6vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                Explore.
                <br />
                Question.
                <br />
                <span className="italic text-gold">
                  Build.
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/50">
                Evolvaer is being built for people who want to
                work close to the edge of what is becoming
                possible without losing sight of what is useful.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex min-h-14 items-center gap-7 rounded-full border border-gold/45 bg-gold/[0.08] px-7 text-sm font-semibold text-[#ffd58a] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold/[0.14]"
              >
                Get in touch

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