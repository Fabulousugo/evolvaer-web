import {
  CheckCircle2,
  CircleDot,
  FileText,
  MessageCircle,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Share the information that helps us understand your experience, capability and interest in the work.",
    signal: "Context",
    icon: FileText,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Conversation",
    description:
      "Talk about the role, your experience and the kinds of problems you enjoy working through.",
    signal: "Alignment",
    icon: MessageCircle,
    accent: "#22D3EE",
  },
  {
    number: "03",
    title: "Practical discussion",
    description:
      "Explore how you approach relevant problems, decisions or technical situations connected to the work.",
    signal: "Capability",
    icon: Wrench,
    accent: "#A855F7",
  },
  {
    number: "04",
    title: "Decision",
    description:
      "Bring the evidence together and decide whether the role and collaboration make sense for both sides.",
    signal: "Clarity",
    icon: CheckCircle2,
    accent: "#10B981",
  },
] as const;

export function CareersProcess() {
  return (
    <section
      id="hiring-process"
      className="
        relative
        overflow-hidden

        border-t
        border-[#0A1D2F]/[0.07]

        bg-white

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
              "radial-gradient(circle at 96% 10%, rgba(37,99,235,.03), transparent 28%), radial-gradient(circle at 4% 90%, rgba(168,85,247,.025), transparent 26%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Header */}
        <div
          className="
            grid
            gap-5

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#2563EB] dark:text-[#60A5FA]">
                06
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
                  Hiring process
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[520px]

                text-[clamp(1.8rem,2.5vw,2.35rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]

                text-[#0A1D2F]

                dark:text-white
              "
            >
              A clear path,{" "}
              <span className="text-[#2563EB] dark:text-[#60A5FA]">
                both ways.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[610px]

              text-[0.88rem]
              leading-6

              text-[#0A1D2F]/70

              dark:text-white/68

              sm:text-[0.92rem]
            "
          >
            Hiring should help both sides understand whether the
            work, expectations and way of working make sense
            together.
          </p>
        </div>

        {/* Process */}
        <div
          className="
            mt-8
            grid
            overflow-hidden

            rounded-[1.2rem]

            border
            border-[#0A1D2F]/[0.08]

            bg-[#F8FAFC]

            dark:border-white/[0.08]
            dark:bg-[#101820]

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className={`
                  group
                  relative

                  min-h-[13.25rem]

                  px-5
                  py-5

                  transition-colors
                  duration-300

                  hover:bg-white

                  dark:hover:bg-white/[0.025]

                  ${
                    index < processSteps.length - 1
                      ? "border-b border-[#0A1D2F]/[0.07] dark:border-white/[0.07] md:border-b-0"
                      : ""
                  }

                  ${
                    index % 2 === 0
                      ? "md:border-r md:border-[#0A1D2F]/[0.07] md:dark:border-white/[0.07]"
                      : ""
                  }

                  ${
                    index < 3
                      ? "xl:border-r xl:border-[#0A1D2F]/[0.07] xl:dark:border-white/[0.07]"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full
                      border
                    "
                    style={{
                      borderColor: `${step.accent}30`,
                      backgroundColor: `${step.accent}0D`,
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{
                        color: step.accent,
                      }}
                    />
                  </div>

                  <span
                    className="font-mono text-[0.42rem]"
                    style={{
                      color: step.accent,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="
                    mt-5

                    text-[1rem]
                    font-semibold
                    tracking-[-0.025em]

                    text-[#0A1D2F]

                    dark:text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2

                    text-[0.76rem]
                    leading-5

                    text-[#0A1D2F]/68

                    dark:text-white/64
                  "
                >
                  {step.description}
                </p>

                <div
                  className="
                    absolute
                    inset-x-5
                    bottom-4

                    flex
                    items-center
                    justify-between

                    border-t
                    border-[#0A1D2F]/[0.07]

                    pt-3

                    dark:border-white/[0.07]
                  "
                >
                  <span
                    className="
                      text-[0.42rem]
                      font-semibold
                      uppercase
                      tracking-[0.11em]

                      text-[#0A1D2F]/55

                      dark:text-white/50
                    "
                  >
                    Outcome
                  </span>

                  <span
                    className="
                      text-[0.46rem]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                    "
                    style={{
                      color: step.accent,
                    }}
                  >
                    {step.signal}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mutual decision */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-3

            border-t
            border-[#0A1D2F]/[0.08]

            pt-6

            dark:border-white/[0.08]

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-8
          "
        >
          <p
            className="
              text-[0.5rem]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#10B981]
            "
          >
            Mutual decision
          </p>

          <p
            className="
              max-w-[720px]

              text-[0.9rem]
              leading-6

              text-[#0A1D2F]/72

              dark:text-white/68

              sm:text-right
            "
          >
            You are evaluating Evolvaer too. A good hiring process
            should leave both sides with more clarity than they
            started with.
          </p>
        </div>
      </div>
    </section>
  );
}