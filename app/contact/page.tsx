import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FlaskConical,
  Handshake,
  Lightbulb,
  Mail,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import { ContactForm } from "@/src/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Evolvaer Technologies about emerging technology, research, product development, venture building, partnerships or careers.",
};

const enquiryTypes = [
  {
    title: "Technology opportunity",
    description:
      "You are exploring an emerging technology, new capability or technical opportunity and want to investigate where it could create value.",
    icon: Lightbulb,
  },
  {
    title: "Product or venture",
    description:
      "You have a product idea, validated problem or venture opportunity that may benefit from research, engineering and product development.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Research collaboration",
    description:
      "You are working on a technical, academic or applied research question that overlaps with Evolvaer’s areas of exploration.",
    icon: FlaskConical,
  },
  {
    title: "Partnership",
    description:
      "You represent an organisation interested in collaborating around technology, innovation, research or new venture creation.",
    icon: Handshake,
  },
  {
    title: "Careers & collaboration",
    description:
      "You are interested in contributing to Evolvaer through future roles, research, specialist expertise or collaboration.",
    icon: Sparkles,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f4ee] text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
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

        <div className="evolvaer-container relative z-10 pb-16 pt-16 sm:pb-20 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                  Contact
                </span>
              </div>

              <h1 className="max-w-6xl font-display text-[clamp(4.3rem,8vw,9rem)] leading-[0.84] tracking-[-0.06em]">
                Start with
                <br />
                something worth{" "}
                <span className="gold-gradient-text italic">
                  exploring.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-midnight/60 dark:text-white/56 sm:text-lg">
                Whether you are investigating an emerging
                technology, developing a product, exploring a
                venture or looking for the right collaboration,
                tell us what you are trying to make possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact experience */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
            {/* Left */}
            <div className="flex flex-col rounded-[2.25rem] bg-midnight p-7 text-white dark:bg-[#091825] sm:p-9 lg:p-10">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  A useful first message
                </p>

                <h2 className="mt-6 font-display text-[clamp(2.8rem,4.2vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">
                  Tell us what you
                  <br />
                  are trying to{" "}
                  <span className="italic text-gold">
                    change.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                  You do not need a perfect brief. A clear
                  explanation of the problem, opportunity or
                  question is enough to begin.
                </p>
              </div>

              <div className="mt-14 border-t border-white/[0.09] pt-7 lg:mt-auto">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-4 w-4 text-gold" />

                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/28">
                      Email
                    </p>

                    <Link
                      href="mailto:hello@evolvaer.com"
                      className="mt-2 inline-flex text-sm text-white/70 transition-colors hover:text-gold"
                    >
                      hello@evolvaer.com
                    </Link>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-4">
                  <MessageSquareText className="mt-1 h-4 w-4 text-gold" />

                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-white/28">
                      Good starting points
                    </p>

                    <p className="mt-2 max-w-md text-sm leading-7 text-white/44">
                      The problem, who it affects, what you have
                      already tried, and what you think could be
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[2.25rem] border border-midnight/[0.09] bg-white/38 p-7 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-white/[0.022] sm:p-9 lg:p-10">
              <div className="mb-9">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  Start a conversation
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46">
                  Share enough context for us to understand where
                  the conversation should begin.
                </p>
              </div>

              <ContactForm />   
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry types */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-20 dark:bg-[#050e17] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-midnight/40 dark:text-white/36">
                  What to contact us about
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.95] tracking-[-0.045em]">
                Different questions.
                <br />
                One place to{" "}
                <span className="italic text-gold">
                  begin.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-midnight/54 dark:text-white/50 lg:justify-self-end">
              You do not need to force your enquiry into a narrow
              category. These are simply useful starting points
              for understanding what you want to explore.
            </p>
          </div>

          <div className="mt-14 border-t border-midnight/[0.09] dark:border-white/[0.08] lg:mt-16">
            {enquiryTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group grid gap-6 border-b border-midnight/[0.08] py-8 dark:border-white/[0.075] lg:grid-cols-[0.1fr_0.18fr_1fr] lg:gap-8 lg:py-10"
                >
                  <span className="font-display text-sm italic text-gold">
                    0{index + 1}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-[0.65fr_1.35fr] md:gap-10">
                    <h3 className="font-display text-[1.9rem] tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact principle */}
      <section className="relative overflow-hidden bg-[#efebe2] py-20 dark:bg-[#07131f] sm:py-24 lg:py-28">
        <div className="evolvaer-container">
          <div className="grid gap-8 border-y border-midnight/[0.09] py-12 dark:border-white/[0.08] lg:grid-cols-[0.38fr_1.62fr] lg:py-16">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Before the brief
            </p>

            <p className="max-w-5xl font-display text-[clamp(2.4rem,4vw,4.6rem)] leading-[1.04] tracking-[-0.04em]">
              The best conversations often begin before the
              solution is obvious. Start with the{" "}
              <span className="italic text-gold">
                problem worth understanding.
              </span>
            </p>
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

          <div className="absolute bottom-[-12rem] left-[-9rem] h-[32rem] w-[32rem] rounded-full bg-teal/[0.05] blur-[150px]" />
        </div>

        <div className="evolvaer-container relative z-10">
          <div className="grid gap-12 border-y border-white/[0.09] py-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:py-20">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Evolvaer Technologies
              </p>

              <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,6vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                Exploring what&apos;s
                <br />
                next. Building what{" "}
                <span className="italic text-gold">
                  matters.
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/50">
                Research. Engineering. Products. Ventures.
                Connected by the belief that emerging technology
                becomes valuable when it solves something real.
              </p>

              <Link
                href="mailto:hello@evolvaer.com"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
              >
                hello@evolvaer.com

                <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}