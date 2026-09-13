import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Radio,
} from "lucide-react";

const signalAnnotations = [
  {
    className: "right-[4%] top-[8%]",
    number: "01",
    label: "Signal",
    value: "An idea",
    accent: "#3B82F6",
  },
  {
    className: "left-[8%] top-[48%]",
    number: "02",
    label: "Context",
    value: "A problem",
    accent: "#22D3EE",
  },
  {
    className: "bottom-[8%] right-[8%]",
    number: "03",
    label: "Connection",
    value: "A conversation",
    accent: "#A855F7",
  },
] as const;

export function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-x-clip

        pt-20
        sm:pt-24
        lg:pt-28
      "
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 72% 42%, rgba(34,211,238,.065), transparent 30%), radial-gradient(circle at 4% 28%, rgba(37,99,235,.04), transparent 27%), radial-gradient(circle at 94% 12%, rgba(168,85,247,.045), transparent 28%)",
          }}
        />

        <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            dark:opacity-[0.02]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, black 72%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, black 72%, transparent)",
          }}
        />

        <span
          className="
            absolute
            right-[8%]
            top-[31%]

            hidden
            h-px
            w-[23%]

            bg-gradient-to-r
            from-transparent
            via-[#22D3EE]/12
            to-transparent

            lg:block
          "
        />

        <span
          className="
            absolute
            right-[5%]
            top-[59%]

            hidden
            h-px
            w-[26%]

            bg-gradient-to-r
            from-transparent
            via-[#A855F7]/10
            to-transparent

            lg:block
          "
        />
      </div>

      {/* Content */}
      <div className="evolvaer-container relative z-10">
        <div
          className="
            border-b
            border-[#0A1D2F]/[0.075]

            py-12

            dark:border-white/[0.075]

            sm:py-14
            lg:py-16
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[1.05fr_0.95fr]
              lg:items-center
              lg:gap-12
            "
          >
            {/* Message */}
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.48rem] text-[#22D3EE]">
                  01
                </span>

                <span className="h-px w-7 bg-[#22D3EE]/40" />

                <div className="flex items-center gap-2">
                  <CircleDot className="h-3 w-3 text-[#22D3EE]" />

                  <p
                    className="
                      text-[0.56rem]
                      font-semibold
                      uppercase
                      tracking-[0.27em]

                      text-[#2563EB]

                      dark:text-[#60A5FA]
                    "
                  >
                    Contact Evolvaer
                  </p>
                </div>
              </div>

              <h1
                className="
                  mt-5
                  max-w-[650px]

                  text-[clamp(2.8rem,4.5vw,4.25rem)]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.045em]

                  text-[#0A1D2F]

                  dark:text-white
                "
              >
                Start a{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#2563EB]
                    via-[#22D3EE]
                    to-[#A855F7]

                    bg-clip-text
                    text-transparent
                  "
                >
                  conversation.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-[600px]

                  text-[0.95rem]
                  leading-7

                  text-[#0A1D2F]/58

                  dark:text-white/54

                  sm:text-base
                "
              >
                Exploring a technology, product, research question or
                collaboration? Tell us what you&apos;re trying to make
                possible.
              </p>

              <Link
                href="#contact-form"
                className="
                  group

                  mt-6
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  bg-[#2563EB]

                  px-5

                  text-[0.82rem]
                  font-semibold
                  text-white

                  transition-[transform,background-color,box-shadow]
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#3B82F6]
                  hover:shadow-[0_10px_28px_rgba(37,99,235,.18)]
                "
              >
                Start a conversation

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

            {/* Signal visual */}
            <div
              className="
                relative
                hidden
                min-h-[14rem]

                lg:block
              "
            >
              {signalAnnotations.map((annotation) => (
                <SignalAnnotation
                  key={annotation.number}
                  {...annotation}
                />
              ))}

              <div
                className="
                  absolute
                  left-[52%]
                  top-1/2

                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      absolute
                      h-32
                      w-32

                      rounded-full
                      border
                      border-[#22D3EE]/[0.04]
                    "
                  />

                  <span
                    className="
                      absolute
                      h-20
                      w-20

                      rounded-full
                      border
                      border-[#2563EB]/[0.06]
                    "
                  />

                  <span
                    className="
                      absolute
                      h-10
                      w-10

                      rounded-full
                      border
                      border-[#A855F7]/[0.08]
                    "
                  />

                  <Radio className="h-4 w-4 text-[#22D3EE]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalAnnotation({
  className,
  number,
  label,
  value,
  accent,
}: {
  className: string;
  number: string;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute w-[9rem] ${className}`}
    >
      <div className="flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 6px ${accent}50`,
          }}
        />

        <span
          className="font-mono text-[0.4rem]"
          style={{ color: accent }}
        >
          {number}
        </span>

        <span
          className="h-px flex-1"
          style={{
            backgroundColor: `${accent}30`,
          }}
        />
      </div>

      <p
        className="
          mt-2

          text-[0.4rem]
          font-semibold
          uppercase
          tracking-[0.12em]

          text-[#0A1D2F]/25

          dark:text-white/22
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1

          text-[0.7rem]
          font-medium

          text-[#0A1D2F]/52

          dark:text-white/47
        "
      >
        {value}
      </p>
    </div>
  );
}