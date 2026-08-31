"use client";

import {
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Purposeful",
    description:
      "Technology should address meaningful needs rather than exist purely because it is technically possible.",
    icon: Target,
  },
  {
    number: "02",
    title: "Inventive",
    description:
      "We challenge familiar assumptions and explore possibilities that can create genuinely better outcomes.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Trustworthy",
    description:
      "Responsible thinking, clear decisions and dependable engineering are part of the product — not additions to it.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Collaborative",
    description:
      "The strongest ideas emerge when technical, commercial and human perspectives are allowed to challenge one another.",
    icon: Users,
  },
];

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-20 text-midnight transition-colors duration-700 dark:bg-[#050e17] dark:text-[#f7f4ee] sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-12rem] top-[-4rem] h-[34rem] w-[34rem] rounded-full bg-gold/[0.055] blur-[160px] dark:bg-gold/[0.065]" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <span className="text-[0.67rem] font-semibold uppercase tracking-[0.32em] text-midnight/42 dark:text-white/42">
                How we think
              </span>
            </div>

            <h2 className="font-display text-[clamp(3rem,4.8vw,5.4rem)] leading-[0.94] tracking-[-0.045em]">
              Built around
              <br />
              principles that
              <br />
              <span className="gold-gradient-text italic">
                endure.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-midnight/58 dark:text-white/56 sm:text-[1.05rem]">
              What we build will change. The technologies will
              change. The problems will change. The principles
              shaping how Evolvaer approaches them should not.
            </p>

            <div className="mt-10 border-t border-midnight/[0.09] dark:border-white/[0.08]">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className="group grid gap-5 border-b border-midnight/[0.08] py-7 dark:border-white/[0.075] sm:grid-cols-[auto_1fr] sm:gap-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 pt-2 font-display text-sm italic text-gold">
                        {principle.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/[0.08] text-midnight/42 transition-all group-hover:border-gold/30 group-hover:text-gold dark:border-white/[0.08] dark:text-white/38">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-[2rem] tracking-[-0.03em]">
                        {principle.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-midnight/50 dark:text-white/46">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.25rem] bg-midnight p-7 text-white dark:bg-[#091825] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1.65fr]">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Our belief
            </p>

            <p className="max-w-5xl font-display text-[clamp(2.5rem,4.4vw,5rem)] leading-[1] tracking-[-0.045em]">
              The future is not something we simply predict.
              <br />
              It is something we{" "}
              <span className="italic text-gold">
                help shape.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}