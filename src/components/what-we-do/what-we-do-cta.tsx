import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function WhatWeDoCta() {
  return (
    <section
      id="what-we-do-cta"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#0A1D2F]
        py-14
        dark:bg-[#0D1117]
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(37,99,235,.13), transparent 30%), radial-gradient(circle at 88% 18%, rgba(34,211,238,.07), transparent 27%), radial-gradient(circle at 55% 110%, rgba(168,85,247,.07), transparent 31%)",
          }}
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#3B82F6]/50
            to-transparent
          "
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[1fr_0.9fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* =================================================
              CLOSING MESSAGE
          ================================================= */}

          <div className="max-w-[680px]">
            <p
              className="
                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.19em]
                text-[#60A5FA]
              "
            >
              What we do
            </p>

            <h2
              className="
                mt-4
                max-w-[620px]
                text-[clamp(2rem,3.4vw,3rem)]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-white
              "
            >
              From possibility to something{" "}
              <span className="text-[#67E8F9]">
                that matters.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[560px]
                text-[0.82rem]
                leading-6
                text-white/62
                sm:text-[0.88rem]
              "
            >
              We investigate promising opportunities, turn evidence
              into systems, and develop the strongest ideas into
              products and ventures capable of creating real-world
              value.
            </p>
          </div>

          {/* =================================================
              NEXT STEPS
          ================================================= */}

          <div
            className="
              grid
              overflow-hidden
              rounded-[1rem]
              border
              border-white/[0.09]
              bg-white/[0.035]
              sm:grid-cols-2
            "
          >
            <Link
              href="/ventures"
              className="
                group
                relative
                px-5
                py-5
                transition-colors
                duration-300
                hover:bg-[#3B82F6]/[0.08]
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[0.42rem]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#60A5FA]
                    "
                  >
                    Ventures
                  </p>

                  <p
                    className="
                      mt-2
                      text-[0.76rem]
                      font-semibold
                      text-white
                    "
                  >
                    Explore our ventures
                  </p>

                  <p
                    className="
                      mt-1.5
                      max-w-[210px]
                      text-[0.6rem]
                      leading-5
                      text-white/44
                    "
                  >
                    See how selected ideas become products and
                    ventures.
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#3B82F6]/25
                    text-[#60A5FA]
                    transition-[transform,background-color,color]
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:bg-[#3B82F6]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>

            <Link
              href="/research"
              className="
                group
                relative
                border-t
                border-white/[0.08]
                px-5
                py-5
                transition-colors
                duration-300
                hover:bg-[#22D3EE]/[0.05]
                sm:border-l
                sm:border-t-0
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[0.42rem]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#67E8F9]
                    "
                  >
                    Research
                  </p>

                  <p
                    className="
                      mt-2
                      text-[0.76rem]
                      font-semibold
                      text-white
                    "
                  >
                    Explore our research
                  </p>

                  <p
                    className="
                      mt-1.5
                      max-w-[210px]
                      text-[0.6rem]
                      leading-5
                      text-white/44
                    "
                  >
                    See the questions, evidence and investigations
                    behind our work.
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#22D3EE]/20
                    text-[#67E8F9]
                    transition-[transform,background-color,color]
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:bg-[#22D3EE]
                    group-hover:text-[#0D1117]
                  "
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* =====================================================
            FINAL LINE
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.08]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[520px]
              text-[0.66rem]
              leading-5
              text-white/43
            "
          >
            Technology keeps changing. Our role is to understand
            where that change can become useful — and build what
            deserves to move forward.
          </p>

          <Link
            href="/about"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[0.66rem]
              font-semibold
              text-white/58
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Learn more about Evolvaer

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}