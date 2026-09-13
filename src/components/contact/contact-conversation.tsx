import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Mail,
} from "lucide-react";

import { ContactForm } from "@/src/components/contact/contact-form";

const contextItems = [
  "The problem or opportunity",
  "Who or what it affects",
  "What you already know",
  "What could become possible",
] as const;

export function ContactConversation() {
  return (
    <section
      id="contact-form"
      className="
        relative
        overflow-hidden

        border-t
        border-[#0A1D2F]/[0.07]

        bg-[#F8FAFC]

        py-12

        dark:border-white/[0.07]
        dark:bg-[#0D1117]

        sm:py-14
        lg:py-16
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 96% 10%, rgba(34,211,238,.035), transparent 30%), radial-gradient(circle at 4% 85%, rgba(37,99,235,.03), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Intro */}
        <div
          className="
            grid
            gap-5

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-10
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#22D3EE]">
                03
              </span>

              <span className="h-px w-7 bg-[#22D3EE]/40" />

              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-[#22D3EE]" />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]

                    text-[#2563EB]

                    dark:text-[#60A5FA]
                  "
                >
                  Get in touch
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[540px]

                text-[clamp(2rem,3vw,2.50rem)]
                font-semibold
                leading-[1.03]
                tracking-[-0.04em]

                text-[#0A1D2F]

                dark:text-white
              "
            >
              Tell us what you&apos;re{" "}
              <span className="text-[#22D3EE]">
                working on.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[590px]

              text-[0.9rem]
              leading-6

              text-[#0A1D2F]/70

              dark:text-white/68

              sm:text-[0.94rem]
            "
          >
            Give us enough context to understand the
            problem, opportunity or question. It does not
            need to be a finished brief.
          </p>
        </div>

        {/* Main contact block */}
        <div
          className="
            mx-auto
            mt-8
            grid
            max-w-[1040px]
            overflow-hidden

            rounded-[1.25rem]

            border
            border-[#0A1D2F]/10

            bg-white

            shadow-[0_14px_38px_rgba(10,29,47,.045)]

            dark:border-white/10
            dark:bg-[#101820]
            dark:shadow-none

            lg:grid-cols-[0.58fr_1fr]
          "
        >
          {/* Left */}
          <aside
            className="
              relative

              bg-[#0A1D2F]

              px-6
              py-7

              text-white

              sm:px-7
              sm:py-8
              lg:px-8
            "
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 5% 5%, rgba(37,99,235,.18), transparent 36%), radial-gradient(circle at 96% 96%, rgba(34,211,238,.1), transparent 34%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-[#67E8F9]
                "
              >
                Helpful context
              </p>

              <h3
                className="
                  mt-4
                  max-w-[320px]

                  text-[1rem]
                  font-semibold
                  leading-[1.3]
                  tracking-[-0.025em]

                  text-white

                  sm:text-[1.2rem]
                "
              >
                You don&apos;t need a polished brief.
              </h3>

              <p
                className="
                  mt-3
                  max-w-[320px]

                  text-[0.78rem]
                  leading-5

                  text-white/72
                "
              >
                A few details are enough to help us understand
                where the conversation should begin.
              </p>

              <div className="mt-6 space-y-2.5">
                {contextItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#22D3EE]/35

                        bg-[#22D3EE]/10

                        font-mono
                        text-[0.38rem]

                        text-[#67E8F9]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[0.75rem] leading-5 text-white/76">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p
                  className="
                    text-[0.45rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]

                    text-white/55
                  "
                >
                  Prefer email?
                </p>

                <Link
                  href="mailto:info@evolvaer.com"
                  className="
                    group

                    mt-2
                    inline-flex
                    items-center
                    gap-2

                    text-[0.82rem]
                    font-semibold

                    text-white/90

                    transition-colors

                    hover:text-[#67E8F9]
                  "
                >
                  <Mail className="h-3.5 w-3.5 text-[#67E8F9]" />

                  info@evolvaer.com

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div
            className="
              bg-white

              px-5
              py-6

              dark:bg-[#101820]

              sm:px-6
              sm:py-7
              lg:px-7
              lg:py-8
            "
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}