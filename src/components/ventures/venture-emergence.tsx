import {
  FlaskConical,
  Lightbulb,
  PackageCheck,
  Rocket,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Explore",
    title: "Find the signal.",
    description:
      "Identify a meaningful problem or shift where emerging technology may create a useful possibility.",
    question: "Is there something here worth investigating?",
    commitment: "Low commitment",
    icon: Lightbulb,
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Validate",
    title: "Earn the next step.",
    description:
      "Test the problem, assumptions, technical feasibility and opportunity before committing significant resources.",
    question: "Does the evidence justify moving forward?",
    commitment: "Growing commitment",
    icon: FlaskConical,
    accent: "#7C3AED",
  },
  {
    number: "03",
    label: "Build",
    title: "Make it real.",
    description:
      "Turn a validated opportunity into something people can experience, use and respond to.",
    question: "Can we create something genuinely useful?",
    commitment: "Deeper commitment",
    icon: PackageCheck,
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Venture",
    title: "Build around what works.",
    description:
      "When product and opportunity continue to prove themselves, develop the systems for an independent, scalable venture.",
    question: "Can this become an enduring business?",
    commitment: "Highest commitment",
    icon: Rocket,
    accent: "#10B981",
  },
] as const;

export function VentureEmergence() {
  return (
    <section
      id="how-ventures-emerge"
      className="
        relative
        overflow-hidden
        border-b
        border-[#0A1D2F]/[0.07]
        bg-white
        py-14
        dark:border-white/[0.07]
        dark:bg-[#0D1117]
        sm:py-16
        lg:py-20
      "
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
              "radial-gradient(circle at 4% 24%, rgba(37,99,235,.035), transparent 28%), radial-gradient(circle at 95% 74%, rgba(16,185,129,.03), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-7
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.45rem]
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                03
              </span>

              <span className="h-px w-7 bg-[#7C3AED]/30" />

              <p
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                How ventures emerge
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[610px]
                text-[clamp(1.95rem,3.2vw,2.7rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Ideas have to earn their way{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#7C3AED]
                  to-[#10B981]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#C084FC]
                  dark:to-[#34D399]
                "
              >
                forward.
              </span>
            </h2>
          </div>

          <div className="max-w-[570px] lg:justify-self-end">
            <p
              className="
                text-[0.86rem]
                leading-7
                text-[#0A1D2F]/68
                dark:text-white/65
                sm:text-[0.9rem]
              "
            >
              We increase our commitment as evidence gets
              stronger. An opportunity moves forward through
              research, technical progress and real-world
              learning — not enthusiasm alone.
            </p>

            <p
              className="
                mt-3
                text-[0.7rem]
                leading-5
                text-[#0A1D2F]/52
                dark:text-white/49
              "
            >
              That lets us explore ambitiously without assuming
              every interesting possibility deserves to become a
              product or company.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div
          className="
            relative
            mt-9
            overflow-hidden
            rounded-[1.2rem]
            border
            border-[#0A1D2F]/[0.08]
            dark:border-white/[0.08]
            lg:mt-11
          "
        >
          {/* desktop progress line */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[3.15rem]
              hidden
              h-px
              bg-gradient-to-r
              from-[#2563EB]/30
              via-[#7C3AED]/30
              via-50%
              to-[#10B981]/30
              lg:block
            "
          />

          <div className="grid lg:grid-cols-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.label}
                  className={`
                    relative
                    p-5
                    sm:p-6
                    ${
                      index < stages.length - 1
                        ? `
                          border-b
                          border-[#0A1D2F]/[0.07]
                          dark:border-white/[0.07]
                          lg:border-b-0
                          lg:border-r
                        `
                        : ""
                    }
                  `}
                >
                  {/* stage header */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-white
                        dark:bg-[#0D1117]
                      "
                      style={{
                        borderColor: `${stage.accent}35`,
                        color: stage.accent,
                      }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>

                    <span
                      className="
                        font-mono
                        text-[0.4rem]
                      "
                      style={{
                        color: stage.accent,
                      }}
                    >
                      {stage.number}
                    </span>
                  </div>

                  {/* content */}

                  <p
                    className="
                      mt-5
                      text-[0.43rem]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                    "
                    style={{
                      color: stage.accent,
                    }}
                  >
                    {stage.label}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[0.96rem]
                      font-semibold
                      tracking-[-0.025em]
                      text-[#0A1D2F]
                      dark:text-white
                    "
                  >
                    {stage.title}
                  </h3>

                  <p
                    className="
                      mt-2.5
                      text-[0.67rem]
                      leading-5
                      text-[#0A1D2F]/58
                      dark:text-white/55
                    "
                  >
                    {stage.description}
                  </p>

                  {/* decision */}

                  <div
                    className="
                      mt-5
                      border-t
                      border-[#0A1D2F]/[0.07]
                      pt-4
                      dark:border-white/[0.07]
                    "
                  >
                    <p
                      className="
                        text-[0.39rem]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#0A1D2F]/42
                        dark:text-white/39
                      "
                    >
                      Decision question
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[0.64rem]
                        font-medium
                        leading-5
                        text-[#0A1D2F]/70
                        dark:text-white/65
                      "
                    >
                      {stage.question}
                    </p>
                  </div>

                  {/* commitment */}

                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: stage.accent,
                      }}
                    />

                    <span
                      className="
                        text-[0.4rem]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#0A1D2F]/40
                        dark:text-white/37
                      "
                    >
                      {stage.commitment}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SELECTIVITY
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            gap-5
            border-y
            border-[#0A1D2F]/[0.08]
            py-6
            dark:border-white/[0.08]
            md:grid-cols-[0.55fr_1.45fr]
            md:items-center
            md:gap-10
          "
        >
          <div>
            <p
              className="
                text-[0.43rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#A855F7]
                dark:text-[#C084FC]
              "
            >
              Selectivity matters
            </p>

            <h3
              className="
                mt-2
                text-[1rem]
                font-semibold
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Saying no is part of venture building.
            </h3>
          </div>

          <div
            className="
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            <div
              className="
                rounded-[0.9rem]
                border
                border-[#64748B]/15
                bg-[#64748B]/[0.025]
                px-4
                py-3.5
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#64748B]" />

                <p
                  className="
                    text-[0.42rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#64748B]
                  "
                >
                  Learn + stop
                </p>
              </div>

              <p
                className="
                  mt-2
                  text-[0.64rem]
                  leading-5
                  text-[#0A1D2F]/57
                  dark:text-white/53
                "
              >
                If the evidence weakens the opportunity, keep the
                learning and avoid committing resources to the
                wrong venture.
              </p>
            </div>

            <div
              className="
                rounded-[0.9rem]
                border
                border-[#10B981]/15
                bg-[#10B981]/[0.025]
                px-4
                py-3.5
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />

                <p
                  className="
                    text-[0.42rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#059669]
                    dark:text-[#34D399]
                  "
                >
                  Learn + build
                </p>
              </div>

              <p
                className="
                  mt-2
                  text-[0.64rem]
                  leading-5
                  text-[#0A1D2F]/57
                  dark:text-white/53
                "
              >
                If evidence and product learning strengthen the
                opportunity, it earns deeper investment.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <p
          className="
            mt-5
            max-w-[760px]
            text-[0.72rem]
            leading-6
            text-[#0A1D2F]/58
            dark:text-white/55
          "
        >
          A venture is not the starting point.{" "}
          <span
            className="
              font-medium
              text-[#0A1D2F]/85
              dark:text-white/82
            "
          >
            It is the result of progressively stronger evidence
            that something deserves to be built.
          </span>
        </p>
      </div>
    </section>
  );
}