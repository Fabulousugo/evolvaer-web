import {
  BriefcaseBusiness,
  CircleDot,
  FlaskConical,
  Handshake,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const enquiryTypes = [
  {
    title: "Technology",
    description:
      "Emerging technologies, technical opportunities and new capabilities.",
    icon: Lightbulb,
    accent: "#2563EB",
  },
  {
    title: "Product & venture",
    description:
      "Product ideas, validated problems and venture opportunities.",
    icon: BriefcaseBusiness,
    accent: "#22D3EE",
  },
  {
    title: "Research",
    description:
      "Academic, applied or technical research collaborations.",
    icon: FlaskConical,
    accent: "#A855F7",
  },
  {
    title: "Partnerships",
    description:
      "Organisations exploring innovation, technology or venture collaboration.",
    icon: Handshake,
    accent: "#10B981",
  },
  {
    title: "Careers & expertise",
    description:
      "Roles, specialist expertise and ways to contribute to Evolvaer.",
    icon: Sparkles,
    accent: "#3B82F6",
  },
] as const;

export function ContactIntent() {
  return (
    <section
      id="contact-intent"
      className="
        relative
        overflow-hidden

        border-t
        border-[#0A1D2F]/[0.07]

        bg-white/[0.52]

        py-12

        dark:border-white/[0.07]
        dark:bg-[#0D1117]/[0.52]

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
              "radial-gradient(circle at 8% 30%, rgba(37,99,235,.035), transparent 28%), radial-gradient(circle at 92% 80%, rgba(168,85,247,.03), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
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
              <span className="font-mono text-[0.46rem] text-[#2563EB] dark:text-[#60A5FA]">
                02
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

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
                  Start anywhere
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[520px]

                text-[clamp(2rem,3vw,2.8rem)]
                font-semibold
                leading-[1.03]
                tracking-[-0.04em]

                text-[#0A1D2F]

                dark:text-white
              "
            >
              What can we{" "}
              <span className="text-[#22D3EE]">
                talk about?
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[590px]

              text-[0.88rem]
              leading-6

              text-[#0A1D2F]/70

              dark:text-white/68

              sm:text-[0.93rem]
            "
          >
            You do not need a finished brief. Choose the area closest
            to what you&apos;re exploring and tell us what you&apos;re
            trying to understand, build or change.
          </p>
        </div>

        <div
          className="
            mt-8
            grid
            gap-3

            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {enquiryTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  relative

                  min-h-[8.75rem]

                  overflow-hidden
                  rounded-[1rem]

                  border
                  border-[#0A1D2F]/[0.08]

                  bg-white/[0.72]

                  p-4

                  transition-[transform,border-color,background-color]
                  duration-300

                  hover:-translate-y-1
                  hover:bg-white

                  dark:border-white/[0.08]
                  dark:bg-white/[0.035]
                  dark:hover:bg-white/[0.055]
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full
                    border
                  "
                  style={{
                    borderColor: `${item.accent}32`,
                    backgroundColor: `${item.accent}0D`,
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5"
                    style={{
                      color: item.accent,
                    }}
                  />
                </div>

                <h3
                  className="
                    mt-4

                    text-[0.95rem]
                    font-semibold
                    tracking-[-0.02em]

                    text-[#0A1D2F]

                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1.5

                    text-[0.74rem]
                    leading-[1.45]

                    text-[#0A1D2F]/68

                    dark:text-white/64
                  "
                >
                  {item.description}
                </p>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-4
                    bottom-0

                    h-px
                  "
                  style={{
                    background: `linear-gradient(90deg, ${item.accent}65, transparent)`,
                  }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}