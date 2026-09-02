import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  Mail,
  MessageSquareText,
  Radio,
} from "lucide-react";

import { ContactForm } from "@/src/components/contact/contact-form";

const contextItems = [
  {
    number: "01",
    label: "The problem or opportunity",
    accent: "#3B82F6",
  },
  {
    number: "02",
    label: "Who or what it affects",
    accent: "#22D3EE",
  },
  {
    number: "03",
    label: "What you already know",
    accent: "#A855F7",
  },
  {
    number: "04",
    label: "What could become possible",
    accent: "#10B981",
  },
] as const;

export function ContactConversation() {
  return (
    <section
      id="contact-form"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-[#F8FAFC]/[0.7] py-24 dark:border-white/[0.06] dark:bg-[#0D1117]/[0.68] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 2% 30%, rgba(37,99,235,.04), transparent 28%), radial-gradient(circle at 96% 24%, rgba(34,211,238,.055), transparent 32%), radial-gradient(circle at 70% 96%, rgba(168,85,247,.03), transparent 25%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.16) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            SECTION INTRODUCTION
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#22D3EE]">
                03
              </span>

              <span className="h-px w-8 bg-[#22D3EE]/40" />

              <div className="flex items-center gap-2.5">
                <Radio className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  Establish the channel
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[620px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Tell us what you are
              <br />
              trying to{" "}
              <span className="text-[#22D3EE]">
                make possible.
              </span>
            </h2>
          </div>

          <div className="lg:pt-9">
            <p className="max-w-[680px] text-lg leading-8 text-[#0A1D2F]/56 dark:text-white/52">
              Give us enough context to understand the
              problem, opportunity or question. It does
              not need to be a finished brief.
            </p>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#0A1D2F]/39 dark:text-white/35">
              The form is simply the starting point. The
              aim is to understand where the conversation
              should begin.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN EXPERIENCE
        ===================================================== */}

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] shadow-[0_22px_64px_rgba(10,29,47,.045)] dark:border-white/[0.075] dark:bg-white/[0.05] dark:shadow-none lg:mt-16 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =================================================
              LEFT — CHANNEL CONTEXT
          ================================================= */}

          <aside className="relative min-h-[36rem] overflow-hidden bg-[#0A1D2F] p-7 text-white sm:p-9 lg:p-10">
            {/* CHEAP STATIC ATMOSPHERE */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 5% 4%, rgba(37,99,235,.2), transparent 36%), radial-gradient(circle at 96% 96%, rgba(34,211,238,.14), transparent 34%)",
                }}
              />

              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
            </div>

            <div className="relative z-10 flex h-full flex-col">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                    <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-white/42">
                      Useful context
                    </p>
                  </div>

                  <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#22D3EE]/70">
                    Input
                  </span>
                </div>

                <p className="mt-8 max-w-[430px] text-[1.7rem] font-medium leading-[1.3] tracking-[-0.035em] text-white sm:text-[2rem]">
                  A useful first message starts with{" "}
                  <span className="text-[#22D3EE]">
                    context,
                  </span>{" "}
                  not polish.
                </p>

                <p className="mt-5 max-w-[420px] text-sm leading-7 text-white/43">
                  Tell us enough to understand what you
                  are seeing and why you think it matters.
                </p>
              </div>

              {/* SIGNAL GUIDE */}

              <div className="my-10">
                <ConversationPath />
              </div>

              <div className="mt-auto">
                <p className="mb-5 text-[0.48rem] font-semibold uppercase tracking-[0.17em] text-white/28">
                  Useful starting points
                </p>

                <div className="space-y-4">
                  {contextItems.map((item) => (
                    <ContextItem
                      key={item.number}
                      {...item}
                    />
                  ))}
                </div>

                <div className="mt-9 border-t border-white/[0.08] pt-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#22D3EE]/15 bg-[#22D3EE]/[0.06]">
                      <Mail className="h-3.5 w-3.5 text-[#22D3EE]" />
                    </div>

                    <div>
                      <p className="text-[0.46rem] font-semibold uppercase tracking-[0.15em] text-white/27">
                        Prefer email?
                      </p>

                      <Link
                        href="mailto:hello@evolvaer.com"
                        className="group mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-[#22D3EE]"
                      >
                        hello@evolvaer.com

                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* =================================================
              RIGHT — WORKING FORM
          ================================================= */}

          <div className="relative bg-white/[0.94] p-6 dark:bg-[#101820]/[0.96] sm:p-8 lg:p-10 xl:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(34,211,238,.035), transparent 32%)",
              }}
            />

            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div className="mt-14 grid gap-7 border-y border-[#0A1D2F]/[0.075] py-10 dark:border-white/[0.075] lg:grid-cols-[0.34fr_1.66fr] lg:py-12">
          <div className="flex items-start gap-3">
            <MessageSquareText className="mt-0.5 h-4 w-4 text-[#A855F7]" />

            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/34 dark:text-white/29">
              Before the solution
            </p>
          </div>

          <p className="max-w-[950px] text-[1.65rem] font-medium leading-[1.35] tracking-[-0.035em] text-[#0A1D2F]/68 dark:text-white/62 sm:text-[2rem] lg:text-[2.25rem]">
            The best conversations often begin before the
            solution is obvious. Start with the{" "}
            <span className="text-[#A855F7]">
              problem worth understanding.
            </span>
          </p>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-10 flex items-center justify-between">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Contact / 03
          </span>

          <a
            href="#contact-routes"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Follow the signal

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0A1D2F]/[0.08] transition-colors group-hover:border-[#2563EB]/25 dark:border-white/[0.08]">
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONVERSATION PATH
============================================================ */

function ConversationPath() {
  return (
    <div className="relative h-[7rem]">
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#3B82F6]/20 via-[#22D3EE]/70 to-[#10B981]/20" />

      <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-[#3B82F6]/40 bg-[#0A1D2F] shadow-[0_0_8px_rgba(59,130,246,.3)]" />

      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/50 bg-[#22D3EE]/15 shadow-[0_0_10px_rgba(34,211,238,.3)]">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]" />
      </span>

      <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-[#10B981]/40 bg-[#0A1D2F] shadow-[0_0_8px_rgba(16,185,129,.26)]" />

      <span className="absolute left-0 top-[72%] text-[0.4rem] font-semibold uppercase tracking-[0.12em] text-white/25">
        Signal
      </span>

      <span className="absolute left-1/2 top-[72%] -translate-x-1/2 text-[0.4rem] font-semibold uppercase tracking-[0.12em] text-[#22D3EE]/65">
        Context
      </span>

      <span className="absolute right-0 top-[72%] text-[0.4rem] font-semibold uppercase tracking-[0.12em] text-white/25">
        Connection
      </span>
    </div>
  );
}

/* ============================================================
   CONTEXT ITEM
============================================================ */

function ContextItem({
  number,
  label,
  accent,
}: {
  number: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="group flex items-center gap-4">
      <span
        className="font-mono text-[0.42rem]"
        style={{
          color: accent,
        }}
      >
        {number}
      </span>

      <span
        className="h-px w-6 transition-[width] duration-300 group-hover:w-9"
        style={{
          backgroundColor: `${accent}50`,
        }}
      />

      <span className="text-xs font-medium text-white/46">
        {label}
      </span>
    </div>
  );
}