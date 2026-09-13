import {
  Beaker,
  BrainCircuit,
  CircleDot,
  Eye,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

const methodStages = [
  {
    number: "01",
    short: "Observe",
    title: "Notice what is changing.",
    description:
      "Examine technologies, behaviours, systems and problems for signals that something meaningful may be changing.",
    output: "Signal",
    accent: "#2563EB",
    icon: Eye,
  },
  {
    number: "02",
    short: "Question",
    title: "Define what needs understanding.",
    description:
      "Turn the signal into a clearer question and identify the assumptions surrounding the opportunity.",
    output: "Question",
    accent: "#A855F7",
    icon: Lightbulb,
  },
  {
    number: "03",
    short: "Investigate",
    title: "Build a stronger picture.",
    description:
      "Gather evidence, examine context and explore technical possibilities before committing to a direction.",
    output: "Evidence",
    accent: "#22D3EE",
    icon: FlaskConical,
  },
  {
    number: "04",
    short: "Test",
    title: "Put assumptions under pressure.",
    description:
      "Use experiments, prototypes or technical exploration where theory alone cannot answer the question.",
    output: "Learning",
    accent: "#3B82F6",
    icon: Beaker,
  },
  {
    number: "05",
    short: "Learn",
    title: "Decide what the evidence means.",
    description:
      "Turn findings into clearer understanding that can inform another investigation or what happens next.",
    output: "Understanding",
    accent: "#10B981",
    icon: BrainCircuit,
  },
] as const;

const researchPrinciples = [
  {
    number: "01",
    title: "Rigorous",
    statement: "Evidence before enthusiasm.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Curious",
    statement: "Questions before conclusions.",
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Responsible",
    statement: "Capability with judgement.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Useful",
    statement: "Understanding that can matter.",
    accent: "#10B981",
  },
] as const;

export function ResearchMethod() {
  return (
    <section
      id="research-method"
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
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 44% 4%, rgba(37,99,235,.035), transparent 29%), radial-gradient(circle at 96% 92%, rgba(34,211,238,.03), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-end
            lg:gap-14
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.46rem]
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                03
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <CircleDot
                  className="
                    h-3
                    w-3
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  Research method
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[580px]
                text-[clamp(1.9rem,3vw,2.5rem)]
                font-semibold
                leading-[1.03]
                tracking-[-0.043em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Curiosity needs{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#0891B2]
                  to-[#10B981]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#67E8F9]
                  dark:to-[#34D399]
                "
              >
                a method.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p
              className="
                text-[0.87rem]
                leading-6
                text-[#0A1D2F]/70
                dark:text-white/67
                sm:text-[0.92rem]
              "
            >
              Research becomes useful when curiosity is paired
              with a disciplined way of learning. We move from
              observation toward evidence without assuming every
              investigation must become a product.
            </p>
          </div>
        </div>

        {/* =====================================================
            METHOD
        ===================================================== */}

        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[1.2rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-[#F8FAFC]
            dark:border-white/[0.08]
            dark:bg-[#101820]
          "
        >
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[2.55rem]
              hidden
              h-px
              bg-gradient-to-r
              from-[#2563EB]/25
              via-[#22D3EE]/35
              to-[#10B981]/25
              lg:block
            "
          />

          <div className="grid lg:grid-cols-5">
            {methodStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className={`
                    group
                    relative
                    p-5

                    ${
                      index !== methodStages.length - 1
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
                  {/* Mobile layout */}
                  <div
                    className="
                      grid
                      grid-cols-[2.6rem_1fr]
                      gap-4
                      lg:block
                    "
                  >
                    {/* Node */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-[#F8FAFC]
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        dark:bg-[#101820]
                      "
                      style={{
                        borderColor: `${stage.accent}38`,
                      }}
                    >
                      <Icon
                        className="h-3.5 w-3.5"
                        style={{
                          color: stage.accent,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:mt-5">
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-3
                        "
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="font-mono text-[0.4rem]"
                            style={{
                              color: stage.accent,
                            }}
                          >
                            {stage.number}
                          </span>

                          <span
                            className="
                              text-[0.46rem]
                              font-semibold
                              uppercase
                              tracking-[0.14em]
                            "
                            style={{
                              color: stage.accent,
                            }}
                          >
                            {stage.short}
                          </span>
                        </div>

                        <span
                          className="
                            font-mono
                            text-[0.38rem]
                            uppercase
                            tracking-[0.1em]
                            text-[#0A1D2F]/45
                            dark:text-white/42
                          "
                        >
                          {stage.output}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-3
                          text-[0.98rem]
                          font-semibold
                          leading-[1.25]
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
                          text-[0.7rem]
                          leading-[1.15rem]
                          text-[#0A1D2F]/62
                          dark:text-white/58
                        "
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ITERATION NOTE
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            gap-2
            border-t
            border-[#0A1D2F]/[0.08]
            pt-5
            dark:border-white/[0.08]
            sm:grid-cols-[auto_1fr]
            sm:items-start
            sm:gap-8
          "
        >
          <p
            className="
              whitespace-nowrap
              text-[0.44rem]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#0891B2]
              dark:text-[#67E8F9]
            "
          >
            Iterative by design
          </p>

          <p
            className="
              max-w-[780px]
              text-[0.75rem]
              leading-5
              text-[#0A1D2F]/61
              dark:text-white/57
            "
          >
            The process is not strictly linear. A test may expose
            a new assumption, evidence may change the original
            question, and better understanding may send an
            investigation backwards before it moves forward.
          </p>
        </div>
      </div>
    </section>
  );
}