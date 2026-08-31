import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Compass,
  FlaskConical,
  Layers3,
  Lightbulb,
  Orbit,
  Rocket,
  Search,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Explore how Evolvaer Technologies identifies, validates and builds technology ventures around meaningful problems and emerging opportunities.",
};

const ventureStages = [
  {
    number: "01",
    title: "Discover",
    description:
      "We identify meaningful problems, emerging capabilities and market changes worth investigating.",
    icon: Search,
  },
  {
    number: "02",
    title: "Validate",
    description:
      "We test the assumptions behind the opportunity across users, technology and commercial potential.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We build the technical foundations, prototypes and product systems required to prove the concept.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Validated products move toward market with the operational and commercial foundations required to grow.",
    icon: Rocket,
  },
];

const selectionCriteria = [
  {
    title: "A real problem",
    description:
      "The opportunity must begin with a meaningful need rather than technology looking for a use case.",
    icon: Target,
  },
  {
    title: "Technical leverage",
    description:
      "Technology should create a meaningful improvement that would otherwise be difficult or impossible.",
    icon: BrainCircuit,
  },
  {
    title: "Potential to matter",
    description:
      "We look for opportunities capable of delivering useful and lasting value rather than temporary novelty.",
    icon: Sparkles,
  },
  {
    title: "Room to evolve",
    description:
      "The strongest ventures should be capable of learning, expanding and becoming more valuable over time.",
    icon: Orbit,
  },
];

const adaptcuesFocus = [
  "Communication preparation",
  "Practice and simulation",
  "Context-aware guidance",
  "Human-centred AI",
];

export default function VenturesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f4ee] text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[92svh] overflow-hidden pt-28 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-13rem] top-[-12rem] h-[44rem] w-[44rem] rounded-full bg-gold/[0.075] blur-[180px] dark:bg-gold/[0.085]" />

          <div className="absolute bottom-[-14rem] left-[-11rem] h-[36rem] w-[36rem] rounded-full bg-teal/[0.035] blur-[160px] dark:bg-teal/[0.05]" />

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
                  Ventures
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4.3rem,8vw,9rem)] leading-[0.84] tracking-[-0.06em]">
                Ideas become
                <br />
                products.
                <br />
                Products become{" "}
                <span className="gold-gradient-text italic">
                  ventures.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-midnight/60 dark:text-white/56 sm:text-lg">
                We create technology ventures when a meaningful
                problem, an enabling technology and a credible
                path to value come together.
              </p>

              <Link
                href="#portfolio"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Explore the portfolio

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-midnight/[0.08] pt-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-midnight/32 dark:text-white/28">
              Opportunity · Validation · Engineering · Company
            </p>

            <p className="font-display text-sm italic text-gold">
              Venture building at Evolvaer
            </p>
          </div>
        </div>
      </section>

      {/* Venture thesis */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Venture thesis
            </p>

            <div>
              <p className="max-w-6xl font-display text-[clamp(2.8rem,4.8vw,5.5rem)] leading-[1] tracking-[-0.045em]">
                We do not build companies because an idea sounds
                exciting. We build when an opportunity has{" "}
                <span className="italic text-gold">
                  earned conviction.
                </span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-midnight/[0.09] pt-8 dark:border-white/[0.08] md:grid-cols-2">
                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  Venture building begins before there is a
                  company. We investigate the problem, the people
                  experiencing it, the technology that might
                  change it and whether that combination can
                  create something genuinely valuable.
                </p>

                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  Only then do we move deeper into product,
                  engineering and commercial development. The
                  goal is not to create the largest number of
                  ventures. It is to build the right ones well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28"
      >
        <div className="evolvaer-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  Portfolio
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.95] tracking-[-0.045em]">
                Ventures we are
                <br />
                bringing to{" "}
                <span className="italic text-gold">
                  life.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              The portfolio will evolve as new opportunities are
              researched and validated. Each venture begins with
              its own problem and earns its place independently.
            </p>
          </div>

          {/* Adaptcues */}
          <article className="relative mt-14 overflow-hidden rounded-[2.4rem] bg-midnight text-white shadow-[0_35px_120px_rgba(13,27,42,0.16)] dark:bg-[#081725] lg:mt-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute right-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full border border-gold/[0.12]" />

              <div className="absolute right-[4%] top-[8%] h-[28rem] w-[28rem] rounded-full border border-white/[0.05]" />

              <div className="absolute right-[13%] top-[18%] h-64 w-64 rounded-full bg-gold/[0.09] blur-[90px]" />

              <div className="absolute bottom-[-10rem] right-[26%] h-72 w-72 rounded-full bg-teal/[0.07] blur-[130px]" />

              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "90px 90px",
                }}
              />
            </div>

            <div className="relative z-10 grid min-h-[44rem] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="flex flex-col p-7 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#ffd58a]">
                    In development
                  </span>

                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/30">
                    Venture 01
                  </span>
                </div>

                <div className="mt-auto max-w-3xl pt-24">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                    AI · Communication · Human-centred technology
                  </p>

                  <h3 className="mt-5 font-display text-[clamp(4.8rem,8vw,9rem)] leading-[0.8] tracking-[-0.06em]">
                    Adaptcues
                  </h3>

                  <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                    An intelligent communication platform
                    designed to help people prepare, practise and
                    respond more effectively in important
                    conversations.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold"
                  >
                    Ask about Adaptcues

                    <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>

              {/* Abstract product visual */}
              <div className="relative min-h-[28rem] border-t border-white/[0.07] lg:min-h-[44rem] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="relative h-[22rem] w-[22rem] sm:h-[28rem] sm:w-[28rem]">
                    <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

                    <div className="absolute inset-[11%] rounded-full border border-gold/18" />

                    <div className="absolute inset-[24%] rounded-full border border-white/[0.08]" />

                    <div className="absolute inset-[36%] rounded-full border border-gold/12" />

                    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[42px]" />

                    <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-gold/25 bg-white/[0.035] backdrop-blur-xl">
                      <BrainCircuit className="h-8 w-8 text-gold" />
                    </div>

                    <div className="absolute left-[5%] top-[46%] h-3 w-3 rounded-full bg-gold shadow-[0_0_26px_rgba(244,166,42,0.7)]" />

                    <div className="absolute right-[16%] top-[16%] h-2.5 w-2.5 rounded-full bg-teal shadow-[0_0_24px_rgba(0,137,123,0.7)]" />

                    <div className="absolute bottom-[13%] right-[23%] h-2 w-2 rounded-full bg-white/65" />
                  </div>
                </div>

                <div className="absolute bottom-7 left-7 right-7 border-t border-white/[0.08] pt-5 sm:bottom-9 sm:left-9 sm:right-9">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/30">
                    Communication intelligence
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Adaptcues detail */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <article className="rounded-[2rem] border border-midnight/[0.09] bg-white/38 p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.022] sm:p-9">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                The problem
              </p>

              <p className="mt-10 font-display text-[clamp(2rem,3.2vw,3.5rem)] leading-[1.04] tracking-[-0.035em]">
                Important conversations can have consequences far
                beyond the few minutes in which they happen.
              </p>

              <p className="mt-6 text-sm leading-7 text-midnight/50 dark:text-white/46">
                Preparation is often generic, difficult to
                practise and disconnected from the context of the
                real conversation. Adaptcues explores how
                intelligent systems can make that preparation
                more interactive and useful.
              </p>
            </article>

            <article className="rounded-[2rem] border border-midnight/[0.09] bg-white/28 p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-midnight/36 dark:text-white/32">
                Current focus
              </p>

              <div className="mt-8">
                {adaptcuesFocus.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-t border-midnight/[0.08] py-5 first:border-t-0 dark:border-white/[0.075]"
                  >
                    <span className="w-8 font-display text-sm italic text-gold">
                      0{index + 1}
                    </span>

                    <span className="flex-1 font-display text-[1.55rem] tracking-[-0.025em]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Future portfolio */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Portfolio evolution
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.045em]">
                The portfolio is
                <br />
                designed to{" "}
                <span className="italic text-gold">
                  grow carefully.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              New ventures will appear only when research,
              validation and engineering create sufficient
              evidence to justify building them.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16">
            <article className="flex min-h-[24rem] flex-col justify-between rounded-[2rem] border border-dashed border-midnight/[0.16] p-7 dark:border-white/[0.14] sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm italic text-gold/70">
                  02
                </span>

                <Orbit className="h-5 w-5 text-midnight/25 dark:text-white/25" />
              </div>

              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-midnight/32 dark:text-white/28">
                  Future venture
                </p>

                <h3 className="mt-4 font-display text-[2.4rem] leading-[1] tracking-[-0.035em]">
                  Opportunity under exploration.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-midnight/44 dark:text-white/40">
                  Reserved for a future opportunity that earns its
                  way through Evolvaer&apos;s research and
                  validation process.
                </p>
              </div>
            </article>

            <article className="flex min-h-[24rem] flex-col justify-between rounded-[2rem] border border-dashed border-midnight/[0.12] p-7 opacity-65 dark:border-white/[0.1] sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm italic text-gold/50">
                  Next
                </span>

                <Layers3 className="h-5 w-5 text-midnight/20 dark:text-white/20" />
              </div>

              <div>
                <p className="font-display text-[2.2rem] leading-[1] tracking-[-0.035em] text-midnight/48 dark:text-white/44">
                  The next company has not been decided yet.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Selection criteria */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  What earns our attention
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.045em]">
                We are selective
                <br />
                about what we{" "}
                <span className="italic text-gold">
                  build.
                </span>
              </h2>
            </div>

            <div className="border-t border-midnight/[0.09] dark:border-white/[0.08]">
              {selectionCriteria.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group grid gap-5 border-b border-midnight/[0.08] py-8 dark:border-white/[0.075] sm:grid-cols-[auto_1fr] sm:gap-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 pt-2 font-display text-sm italic text-gold">
                        0{index + 1}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/40 transition-all group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/36">
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

      {/* Venture lifecycle */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-12rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-gold/[0.08] blur-[180px]" />

          <div className="absolute bottom-[-12rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-teal/[0.055] blur-[160px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Venture lifecycle
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.95] tracking-[-0.045em]">
                Every venture
                <br />
                has to{" "}
                <span className="italic text-gold">
                  progress.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/52 lg:justify-self-end">
              Progress is evidence, not motion. Each stage should
              reduce a different kind of uncertainty before the
              next commitment is made.
            </p>
          </div>

          <div className="relative mt-14 lg:mt-16">
            <div className="absolute left-[6%] right-[6%] top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block" />

            <div className="grid gap-4 lg:grid-cols-4">
              {ventureStages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <article
                    key={stage.number}
                    className="relative flex min-h-[23rem] flex-col rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-gold">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="font-display text-sm italic text-gold/75">
                        {stage.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-16">
                      <h3 className="font-display text-[2rem] tracking-[-0.03em]">
                        {stage.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/46">
                        {stage.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-8 border-y border-midnight/[0.09] py-12 dark:border-white/[0.08] lg:grid-cols-[0.38fr_1.62fr] lg:py-16">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Venture principle
            </p>

            <p className="max-w-5xl font-display text-[clamp(2.4rem,4vw,4.6rem)] leading-[1.04] tracking-[-0.04em]">
              Building a company is not proof that an idea was
              good. The company must continue proving that it{" "}
              <span className="italic text-gold">
                deserves to exist.
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
          <div className="absolute right-[-9rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-gold/[0.09] blur-[180px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-12 border-y border-white/[0.09] py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Opportunities
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,6vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                Have an idea
                <br />
                worth{" "}
                <span className="italic text-gold">
                  investigating?
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/50">
                We are interested in difficult problems,
                meaningful opportunities and technologies that
                could enable a genuinely better way of doing
                something.
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