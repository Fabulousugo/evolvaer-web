"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#07131f] py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-8rem] top-[-12rem] h-[42rem] w-[42rem] rounded-full bg-gold/[0.1] blur-[180px]" />

        <div className="absolute bottom-[-14rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-teal/[0.055] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="border-y border-white/[0.09] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-white/38">
                  Start a conversation
                </span>
              </div>

              <h2 className="max-w-5xl font-display text-[clamp(4rem,7vw,8rem)] leading-[0.86] tracking-[-0.055em]">
                Let&apos;s build
                <br />
                what{" "}
                <span className="gold-gradient-text italic">
                  matters.
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/52 sm:text-lg">
                Have an ambitious problem, emerging technology
                opportunity or idea worth exploring? We&apos;re
                interested in conversations that could lead
                somewhere meaningful.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex min-h-14 items-center gap-8 rounded-full border border-gold/45 bg-gold/[0.08] px-7 text-sm font-semibold text-[#ffd58a] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold/[0.14]"
              >
                Start a conversation

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}