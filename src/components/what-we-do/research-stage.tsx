import {
  FlaskConical,
  Network,
  ShieldCheck,
} from "lucide-react";

const researchQuestions = [
  {
    number: "01",
    icon: FlaskConical,
    label: "Validate",
    title: "Is it technically credible?",
    description:
      "Test the assumptions and determine whether the underlying technology can support the opportunity.",
    accent: "#7C3AED",
  },
  {
    number: "02",
    icon: Network,
    label: "Understand",
    title: "Where does it fit?",
    description:
      "Examine users, workflows and existing systems to understand where meaningful value could be created.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: ShieldCheck,
    label: "Challenge",
    title: "What could make it fail?",
    description:
      "Identify technical, commercial, operational and adoption constraints before committing further.",
    accent: "#22D3EE",
  },
] as const;

export function ResearchStage() {
  return (
    <section
      id="research"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]/[0.42]
        py-14
        dark:border-white/[0.07]
        dark:bg-[#0D1117]/[0.38]
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
              "radial-gradient(circle at 94% 16%, rgba(124,58,237,.055), transparent 28%), radial-gradient(circle at 5% 90%, rgba(37,99,235,.04), transparent 27%)",
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
            gap-7
            lg:grid-cols-[0.82fr_1.18fr]
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
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                02
              </span>

              <span className="h-px w-7 bg-[#7C3AED]/35" />

              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                Research
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[560px]
                text-[clamp(1.95rem,3.2vw,2.75rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Turn signals into{" "}
              <span
                className="
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                evidence.
              </span>
            </h2>
          </div>

          <div
            className="
              max-w-[650px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[0.84rem]
                leading-7
                text-[#0A1D2F]/68
                dark:text-white/64
                sm:text-[0.9rem]
              "
            >
              An interesting opportunity is only a starting point.
              Research helps determine whether it is real, whether
              the technology can support it and whether it deserves
              further commitment.
            </p>

            <p
              className="
                mt-3
                text-[0.72rem]
                leading-6
                text-[#0A1D2F]/52
                dark:text-white/49
              "
            >
              The objective is not to prove an idea right. It is to
              understand enough to make a better decision.
            </p>
          </div>
        </div>

        {/* =====================================================
            RESEARCH QUESTIONS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[1rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-[#0A1D2F]/[0.055]
            dark:border-white/[0.08]
            dark:bg-white/[0.055]
            lg:grid-cols-3
          "
        >
          {researchQuestions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  relative
                  bg-white/[0.76]
                  p-6
                  dark:bg-[#0D1117]/[0.72]
                  sm:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    origin-left
                    scale-x-0
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                  style={{
                    background: `linear-gradient(to right, ${item.accent}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      border
                    "
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}28`,
                      backgroundColor: `${item.accent}0A`,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <span
                    className="
                      font-mono
                      text-[0.42rem]
                      text-[#0A1D2F]/28
                      dark:text-white/26
                    "
                  >
                    R / {item.number}
                  </span>
                </div>

                <p
                  className="
                    mt-5
                    text-[0.44rem]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                  "
                  style={{
                    color: item.accent,
                  }}
                >
                  {item.label}
                </p>

                <h3
                  className="
                    mt-2
                    text-[0.94rem]
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2.5
                    max-w-[22rem]
                    text-[0.7rem]
                    leading-5
                    text-[#0A1D2F]/56
                    dark:text-white/52
                  "
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            DECISION
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-[0.55fr_1.45fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.45rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#7C3AED]
                dark:text-[#C084FC]
              "
            >
              Research outcome
            </p>

            <h3
              className="
                mt-2
                max-w-[310px]
                text-[1.05rem]
                font-semibold
                leading-snug
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Evidence should lead to a decision.
            </h3>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[1rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-white/[0.42]
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            {/* decision path */}

            <div className="grid sm:grid-cols-3">
              <DecisionStep
                label="Signal"
                value="Opportunity"
                accent="#2563EB"
              />

              <DecisionStep
                label="Evidence"
                value="Validated"
                accent="#7C3AED"
                bordered
              />

              <DecisionStep
                label="Decision"
                value="Engineer"
                accent="#22D3EE"
                bordered
                active
              />
            </div>

            {/* decision statement */}

            <div
              className="
                flex
                flex-col
                gap-3
                border-t
                border-[#0A1D2F]/[0.07]
                px-5
                py-4
                dark:border-white/[0.07]
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  max-w-[590px]
                  text-[0.68rem]
                  leading-5
                  text-[#0A1D2F]/58
                  dark:text-white/54
                "
              >
                Strong evidence changes the question from{" "}
                <span
                  className="
                    font-semibold
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  “Should this exist?”
                </span>{" "}
                to{" "}
                <span
                  className="
                    font-semibold
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  “How should we make it work?”
                </span>
              </p>

              <span
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  self-start
                  rounded-full
                  border
                  border-[#22D3EE]/20
                  bg-[#22D3EE]/[0.05]
                  px-2.5
                  py-1.5
                  text-[0.42rem]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#0891B2]
                  dark:text-[#67E8F9]
                  sm:self-auto
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#22D3EE]
                  "
                />

                Proceed
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            IMPORTANT OUTCOME
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-3
            border-y
            border-[#0A1D2F]/[0.08]
            py-5
            dark:border-white/[0.08]
            md:grid-cols-[0.42fr_1.58fr]
            md:items-center
          "
        >
          <p
            className="
              text-[0.43rem]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#7C3AED]
              dark:text-[#C084FC]
            "
          >
            An important outcome
          </p>

          <p
            className="
              max-w-[760px]
              text-[0.72rem]
              leading-5
              text-[#0A1D2F]/58
              dark:text-white/54
            "
          >
            Sometimes the best research result is deciding{" "}
            <span
              className="
                font-semibold
                text-[#0A1D2F]
                dark:text-white
              "
            >
              not to build.
            </span>{" "}
            Learning early is more valuable than engineering the
            wrong solution well.
          </p>
        </div>
      </div>
    </section>
  );
}

function DecisionStep({
  label,
  value,
  accent,
  bordered = false,
  active = false,
}: {
  label: string;
  value: string;
  accent: string;
  bordered?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`
        px-5
        py-4

        ${
          bordered
            ? `
              border-t
              border-[#0A1D2F]/[0.07]
              dark:border-white/[0.07]
              sm:border-l
              sm:border-t-0
            `
            : ""
        }
      `}
    >
      <div className="flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: active
              ? `0 0 9px ${accent}65`
              : undefined,
          }}
        />

        <span
          className="
            text-[0.42rem]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#0A1D2F]/38
            dark:text-white/36
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-1.5
          text-[0.7rem]
          font-semibold
          text-[#0A1D2F]/68
          dark:text-white/63
        "
      >
        {value}
      </p>
    </div>
  );
}