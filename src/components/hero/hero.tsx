import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const spatialLabels = [
  {
    label: "Research",
    className:
      "right-[8%] top-[28%] border-blue/15 text-blue/70 dark:border-blue/25 dark:text-blue/80",
  },
  {
    label: "Engineer",
    className:
      "right-[19%] top-[54%] border-teal/15 text-teal/80 dark:border-teal/25",
  },
  {
    label: "Build",
    className:
      "bottom-[22%] right-[5%] border-violet/15 text-violet/70 dark:border-violet/25 dark:text-violet/80",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,0.10),transparent_31%)]
            dark:bg-[radial-gradient(circle_at_72%_34%,rgba(59,130,246,0.13),transparent_32%)]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_26%_92%,rgba(16,185,129,0.07),transparent_34%)]
            dark:bg-[radial-gradient(circle_at_26%_92%,rgba(34,211,238,0.085),transparent_35%)]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_88%_46%,rgba(124,58,237,0.045),transparent_27%)]
            dark:bg-[radial-gradient(circle_at_88%_46%,rgba(168,85,247,0.075),transparent_28%)]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_36%,rgba(255,255,255,0.24)_68%,transparent_100%)]
            dark:bg-[linear-gradient(90deg,rgba(13,17,23,0.97)_0%,rgba(13,17,23,0.84)_38%,rgba(13,17,23,0.22)_72%,transparent_100%)]
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          evolvaer-container
          relative z-10
          w-full
          pb-16 pt-28
          sm:pt-32
          lg:pb-14 lg:pt-28
        "
      >
        <div className="max-w-[56rem]">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-px w-10
                bg-gradient-to-r
                from-blue via-teal to-transparent
              "
            />

            <p
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-muted
                sm:text-[0.62rem]
              "
            >
              Technology
              <span className="mx-2 text-blue">·</span>
              Research
              <span className="mx-2 text-teal">·</span>
              Venture Building
            </p>
          </div>

          {/* Main headline */}
          <h1
            className="
              max-w-[52rem]
              text-[clamp(3rem,5.4vw,5.5rem)]
              font-bold
              leading-[0.92]
              tracking-[-0.055em]
            "
          >
            <span className="block">Exploring</span>

            <span className="block">
              what&apos;s{" "}
              <span className="brand-gradient-text">
                next.
              </span>
            </span>
          </h1>

          {/* Supporting content */}
          <div
            className="
              mt-8
              grid
              max-w-[52rem]
              gap-6
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-end
              lg:gap-10
            "
          >
            <p
              className="
                text-[clamp(1.8rem,2.8vw,3rem)]
                font-semibold
                leading-[1]
                tracking-[-0.04em]
              "
            >
              Building what
              <br />

              <span className="text-teal">
                matters.
              </span>
            </p>

            <div className="max-w-lg">
              <p
                className="
                  max-w-[34rem]
                  text-[0.95rem]
                  leading-7
                  text-muted
                  sm:text-base
                "
              >
                We research, engineer and commercialise emerging
                technologies into products and companies that solve
                meaningful real-world problems.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/what-we-do"
                  prefetch={false}
                  className="
                    group
                    inline-flex
                    min-h-12
                    items-center
                    gap-5
                    rounded-xl
                    bg-blue
                    px-6
                    text-[0.82rem]
                    font-semibold
                    text-white
                    shadow-[0_10px_30px_rgba(37,99,235,0.16)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#1d4ed8]
                    hover:shadow-[0_12px_34px_rgba(37,99,235,0.22)]
                    dark:bg-[#3b82f6]
                    dark:hover:bg-[#4b8df8]
                  "
                >
                  Explore our work

                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      h-4 w-4
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>

                <Link
                  href="/about"
                  prefetch={false}
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    rounded-xl
                    border
                    border-navy/10
                    bg-white/[0.78]
                    px-6
                    text-[0.82rem]
                    font-medium
                    text-navy/70
                    shadow-[0_6px_20px_rgba(10,29,47,0.035)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue/20
                    hover:bg-white
                    hover:text-blue
                    dark:border-white/12
                    dark:bg-white/[0.045]
                    dark:text-white/70
                    dark:shadow-none
                    dark:hover:border-blue/30
                    dark:hover:bg-blue/[0.08]
                    dark:hover:text-blue
                  "
                >
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Spatial labels */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          {spatialLabels.map(({ label, className }) => (
            <div
              key={label}
              className={`
                absolute
                rounded-full
                border
                bg-white/50
                px-3.5
                py-1.5
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.24em]
                dark:bg-[#0d1117]/55
                ${className}
              `}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="
            absolute
            bottom-7
            right-0
            hidden
            items-end
            gap-4
            xl:flex
          "
        >
          <span
            className="
              pb-1
              text-[0.58rem]
              font-medium
              uppercase
              tracking-[0.3em]
              text-muted
            "
          >
            Scroll to explore
          </span>

          <div className="flex flex-col items-center">
            <span
              aria-hidden="true"
              className="
                h-9
                w-px
                bg-gradient-to-b
                from-blue
                via-teal
                to-transparent
              "
            />

            <ArrowDown
              aria-hidden="true"
              className="-mt-0.5 h-4 w-4 text-blue"
            />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[82%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue/15
          to-transparent
          dark:via-blue/25
        "
      />
    </section>
  );
}