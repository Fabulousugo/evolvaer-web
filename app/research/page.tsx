import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  Lightbulb,
  Radar,
  Search,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore Evolvaer Technologies' research into emerging technologies, intelligent systems, human-centred technology and future opportunities.",
};

const researchThemes = [
  {
    number: "01",
    title: "Applied AI",
    description:
      "Investigating where intelligent systems can create useful, responsible and measurable improvements in real-world contexts.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Human–Technology Interaction",
    description:
      "Studying how people understand, trust and interact with increasingly intelligent digital systems.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Emerging Technology Intelligence",
    description:
      "Tracking technical developments, behavioural shifts and new capabilities before they become established categories.",
    icon: Radar,
  },
  {
    number: "04",
    title: "Technology for Energy & Climate",
    description:
      "Exploring how software, data and intelligent systems can contribute to more efficient and sustainable systems.",
    icon: Sparkles,
  },
];

const researchLoop = [
  "Question",
  "Investigate",
  "Prototype",
  "Evaluate",
  "Apply",
];

const insightTypes = [
  {
    title: "Research Notes",
    description:
      "Short-form observations, experiments and technical thinking from work in progress.",
  },
  {
    title: "Perspectives",
    description:
      "Longer analysis of technologies, markets and questions shaping our areas of exploration.",
  },
  {
    title: "Applied Studies",
    description:
      "Research documenting how a specific technology behaves when tested against a real problem.",
  },
];

export default function ResearchPage() {
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
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                  Research & Innovation
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4.3rem,8vw,9rem)] leading-[0.84] tracking-[-0.06em]">
                Question what&apos;s
                <br />
                possible.
                <br />
                Test what{" "}
                <span className="gold-gradient-text italic">
                  matters.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-midnight/60 dark:text-white/56 sm:text-lg">
                Research helps us decide which technologies are
                genuinely useful, which opportunities deserve
                deeper investment and what should be built next.
              </p>

              <Link
                href="#themes"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Explore research themes

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-midnight/[0.08] pt-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-midnight/32 dark:text-white/28">
              Inquiry · Evidence · Experimentation · Application
            </p>

            <p className="font-display text-sm italic text-gold">
              Research with a path to use
            </p>
          </div>
        </div>
      </section>

      {/* Research philosophy */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr]">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Why research
            </p>

            <div>
              <p className="max-w-6xl font-display text-[clamp(2.8rem,4.8vw,5.5rem)] leading-[1] tracking-[-0.045em]">
                Research gives us permission to{" "}
                <span className="italic">
                  challenge assumptions
                </span>{" "}
                before they become{" "}
                <span className="italic text-gold">
                  expensive decisions.
                </span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-midnight/[0.09] pt-8 dark:border-white/[0.08] md:grid-cols-2">
                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  Emerging technologies often arrive surrounded
                  by possibility, uncertainty and hype. Research
                  helps us separate capability from assumption
                  and identify where the technology can create
                  meaningful value.
                </p>

                <p className="text-sm leading-7 text-midnight/52 dark:text-white/47 sm:text-base sm:leading-8">
                  We use research as an active part of product
                  and venture development, not as a separate
                  academic exercise. What we learn should change
                  what we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section
        id="themes"
        className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28"
      >
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  Research themes
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.95] tracking-[-0.045em]">
                Areas we keep
                <br />
                questioning.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              These themes provide direction without becoming
              permanent boundaries. New questions can emerge as
              technologies and problems evolve.
            </p>
          </div>

          <div className="mt-14 border-t border-midnight/[0.09] dark:border-white/[0.08] lg:mt-16">
            {researchThemes.map((theme) => {
              const Icon = theme.icon;

              return (
                <article
                  key={theme.number}
                  className="group grid gap-6 border-b border-midnight/[0.08] py-9 dark:border-white/[0.075] lg:grid-cols-[0.1fr_0.2fr_1fr_auto] lg:gap-8 lg:py-11"
                >
                  <span className="font-display text-sm italic text-gold">
                    {theme.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
                      {theme.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46">
                      {theme.description}
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-midnight/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold dark:text-white/20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research loop */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[-10rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-gold/[0.08] blur-[180px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Research loop
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.95] tracking-[-0.045em]">
                Learning is
                <br />
                part of the
                <br />
                <span className="italic text-gold">
                  build.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-white/52">
                Research does not end when development starts.
                Evidence from prototypes, engineering and real
                use creates new questions that feed back into the
                next iteration.
              </p>

              <div className="mt-10 border-t border-white/[0.09]">
                {researchLoop.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-6 border-b border-white/[0.08] py-5"
                  >
                    <span className="w-8 font-display text-sm italic text-gold">
                      0{index + 1}
                    </span>

                    <span className="font-display text-[1.8rem] tracking-[-0.03em] sm:text-[2.2rem]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current inquiry */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <Search className="h-6 w-6 text-gold" />

              <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Current inquiry
              </p>

              <h2 className="mt-6 font-display text-[clamp(2.8rem,4.4vw,5rem)] leading-[0.96] tracking-[-0.045em]">
                Questions worth
                <br />
                carrying{" "}
                <span className="italic text-gold">
                  forward.
                </span>
              </h2>
            </div>

            <div className="rounded-[2rem] border border-midnight/[0.08] bg-white/32 p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-9">
              {[
                "How can AI become more useful without becoming more intrusive?",
                "How should intelligent systems adapt to context without undermining human control?",
                "Where can emerging software create entirely new categories of experience?",
                "How can digital intelligence support more efficient and sustainable systems?",
              ].map((question, index) => (
                <div
                  key={question}
                  className="grid gap-4 border-b border-midnight/[0.08] py-6 first:pt-0 last:border-b-0 last:pb-0 dark:border-white/[0.075] sm:grid-cols-[auto_1fr]"
                >
                  <span className="font-display text-sm italic text-gold">
                    0{index + 1}
                  </span>

                  <p className="font-display text-[1.6rem] leading-[1.15] tracking-[-0.025em]">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  Knowledge
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.045em]">
                Research should
                <br />
                leave a{" "}
                <span className="italic text-gold">
                  record.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              As our research develops, this space can become the
              home for publications, technical notes and
              perspectives from across Evolvaer.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3">
            {insightTypes.map((item, index) => (
              <article
                key={item.title}
                className="group flex min-h-[22rem] flex-col rounded-[2rem] border border-midnight/[0.09] bg-white/35 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <BookOpen className="h-5 w-5 text-gold" />

                  <span className="font-display text-sm italic text-midnight/25 dark:text-white/24">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="font-display text-[2rem] tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-midnight/48 dark:text-white/44">
                    {item.description}
                  </p>

                  <p className="mt-6 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    Coming as research develops
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-8 border-y border-midnight/[0.09] py-12 dark:border-white/[0.08] lg:grid-cols-[0.38fr_1.62fr] lg:py-16">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Research principle
            </p>

            <p className="max-w-5xl font-display text-[clamp(2.4rem,4vw,4.6rem)] leading-[1.04] tracking-[-0.04em]">
              A good research question should eventually change
              either what we believe, what we build, or{" "}
              <span className="italic text-gold">
                both.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-12 border-y border-white/[0.09] py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Research conversations
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,6vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                Exploring a
                <br />
                difficult{" "}
                <span className="italic text-gold">
                  question?
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/50">
                We are interested in research collaborations,
                emerging technical questions and problems where
                experimentation could reveal a better path
                forward.
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