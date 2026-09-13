import {
  CircleDot,
  HelpCircle,
} from "lucide-react";

const questions = [
  {
    number: "01",
    question:
      "How should intelligent systems communicate when they are uncertain?",
    context:
      "As software becomes more capable of interpretation and recommendation, uncertainty itself becomes part of the interface.",
    area: "Intelligent systems",
    accent: "#2563EB",
  },
  {
    number: "02",
    question:
      "What does genuinely human-centred AI interaction look like?",
    context:
      "Useful intelligence is not only a question of model capability. It also depends on how naturally technology fits around human behaviour and judgement.",
    area: "Human + technology",
    accent: "#22D3EE",
  },
  {
    number: "03",
    question:
      "Which emerging capabilities will become useful rather than merely impressive?",
    context:
      "Technical possibility moves quickly. The harder question is which capabilities can survive contact with real problems, constraints and users.",
    area: "Emerging possibilities",
    accent: "#A855F7",
  },
  {
    number: "04",
    question:
      "How can new technology improve complex systems without adding new complexity?",
    context:
      "Introducing another layer of technology is not automatically progress. Better systems should create meaningful improvement rather than additional friction.",
    area: "Systems + impact",
    accent: "#10B981",
  },
] as const;

export function OpenQuestions() {
  return (
    <section
      id="open-questions"
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
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 92% 10%, rgba(168,85,247,.035), transparent 26%), radial-gradient(circle at 5% 90%, rgba(34,211,238,.025), transparent 27%)",
          }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.025]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,.3) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
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
            lg:grid-cols-[0.9fr_1.1fr]
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
                  text-[#A855F7]
                  dark:text-[#C084FC]
                "
              >
                03
              </span>

              <span className="h-px w-7 bg-[#A855F7]/35" />

              <div className="flex items-center gap-2">
                <CircleDot
                  className="
                    h-3
                    w-3
                    text-[#A855F7]
                    dark:text-[#C084FC]
                  "
                />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A855F7]
                    dark:text-[#C084FC]
                  "
                >
                  Open questions
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[600px]
                text-[clamp(1.9rem,3vw,2.5rem)]
                font-semibold
                leading-[1.03]
                tracking-[-0.043em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              What we don&apos;t know{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#A855F7]
                  via-[#2563EB]
                  to-[#0891B2]
                  bg-clip-text
                  text-transparent
                  dark:from-[#C084FC]
                  dark:via-[#60A5FA]
                  dark:to-[#67E8F9]
                "
              >
                matters too.
              </span>
            </h2>
          </div>

          <div className="max-w-[600px] lg:justify-self-end">
            <p
              className="
                text-[0.88rem]
                leading-6
                text-[#0A1D2F]/70
                dark:text-white/67
                sm:text-[0.92rem]
              "
            >
              Understanding does not eliminate uncertainty. It
              replaces vague assumptions with more precise
              questions — and gives the next investigation
              somewhere meaningful to begin.
            </p>
          </div>
        </div>

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <div
          className="
            mt-8
            border-y
            border-[#0A1D2F]/[0.08]
            dark:border-white/[0.08]
          "
        >
          {questions.map((item, index) => (
            <article
              key={item.number}
              className={`
                group
                grid
                gap-4
                py-6
                sm:grid-cols-[2.5rem_1fr]
                sm:gap-5
                lg:grid-cols-[2.5rem_1.1fr_0.9fr]
                lg:items-start
                lg:gap-8

                ${
                  index !== questions.length - 1
                    ? `
                      border-b
                      border-[#0A1D2F]/[0.07]
                      dark:border-white/[0.07]
                    `
                    : ""
                }
              `}
            >
              {/* Number */}
              <span
                className="
                  pt-1
                  font-mono
                  text-[0.44rem]
                "
                style={{
                  color: item.accent,
                }}
              >
                {item.number}
              </span>

              {/* Question */}
              <div>
                <div className="flex items-start gap-3">
                  <HelpCircle
                    className="
                      mt-[0.18rem]
                      hidden
                      h-3.5
                      w-3.5
                      shrink-0
                      sm:block
                    "
                    style={{
                      color: item.accent,
                    }}
                  />

                  <h3
                    className="
                      max-w-[620px]
                      text-[1.05rem]
                      font-semibold
                      leading-[1.35]
                      tracking-[-0.025em]
                      text-[#0A1D2F]
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      dark:text-white
                      sm:text-[1.12rem]
                    "
                  >
                    {item.question}
                  </h3>
                </div>
              </div>

              {/* Context */}
              <div className="sm:col-start-2 lg:col-start-auto">
                <p
                  className="
                    max-w-[520px]
                    text-[0.76rem]
                    leading-5
                    text-[#0A1D2F]/65
                    dark:text-white/61
                  "
                >
                  {item.context}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: item.accent,
                      boxShadow: `0 0 6px ${item.accent}45`,
                    }}
                  />

                  <span
                    className="
                      text-[0.43rem]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                    "
                    style={{
                      color: item.accent,
                    }}
                  >
                    {item.area}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            CLOSING PRINCIPLE
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            gap-2
            sm:grid-cols-[auto_1fr]
            sm:items-center
            sm:gap-8
          "
        >
          <p
            className="
              text-[0.46rem]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#A855F7]
              dark:text-[#C084FC]
            "
          >
            Keep questioning
          </p>

          <p
            className="
              max-w-[760px]
              text-[0.78rem]
              leading-5
              text-[#0A1D2F]/62
              dark:text-white/58
            "
          >
            Progress means becoming more precise about what we
            know, what we do not know and what deserves to be
            understood next.
          </p>
        </div>
      </div>
    </section>
  );
}