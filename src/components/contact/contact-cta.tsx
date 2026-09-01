import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Mail,
  Radio,
} from "lucide-react";

export function ContactCta() {
  return (
    <section
      id="contact-close"
      className="relative overflow-x-clip border-t border-white/[0.06] bg-[#0A1D2F]/[0.94] py-24 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
            backgroundSize: "78px 78px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 88%, transparent)",
          }}
        />

        <div className="absolute left-[8%] top-[14%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/12 blur-[180px]" />

        <div className="absolute right-[3%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-[#22D3EE]/10 blur-[180px]" />

        <div className="absolute bottom-[-11rem] left-[42%] h-[28rem] w-[28rem] rounded-full bg-[#A855F7]/8 blur-[170px]" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#22D3EE]">
                05
              </span>

              <span className="h-px w-8 bg-[#22D3EE]/40" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#60A5FA]">
                  One clear connection
                </p>
              </div>
            </div>

            <h2 className="mt-7 max-w-[760px] text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.7rem] lg:text-[4.4rem] xl:text-[4.8rem]">
              Exploring what&apos;s next.
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent">
                Building what matters.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[620px] text-lg leading-8 text-white/52">
              If there is a problem, opportunity or question
              you believe deserves closer attention, start
              the conversation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact-form"
                className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#2563EB] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-[0_18px_48px_rgba(37,99,235,.22)]"
              >
                Send an enquiry

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="mailto:hello@evolvaer.com"
                className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-white/62 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/30 hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#22D3EE]" />

                hello@evolvaer.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-y border-white/[0.075] py-10 sm:mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_1.62fr] lg:items-center">
            <div className="flex items-center gap-3">
              <Radio className="h-4 w-4 text-[#22D3EE]" />

              <p className="text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-white/27">
                Final signal
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#3B82F6]/10 via-[#22D3EE]/70 to-[#A855F7]/10" />

              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#22D3EE]/15 bg-[#0A1D2F]/80 shadow-[0_0_60px_rgba(34,211,238,.08)] backdrop-blur-xl">
                <span className="absolute h-20 w-20 rounded-full border border-[#22D3EE]/[0.06]" />

                <span className="absolute h-12 w-12 rounded-full border border-[#22D3EE]/10" />

                <span className="h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,.6)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-white/18">
            Contact / 05
          </span>

          <span className="flex items-center gap-2.5 font-mono text-[0.42rem] uppercase tracking-[0.14em] text-[#10B981]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,.5)]" />
            Channel ready
          </span>
        </div>
      </div>
    </section>
  );
}