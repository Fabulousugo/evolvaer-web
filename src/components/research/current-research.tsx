import Image from "next/image";
import {
  Braces,
  CircleDot,
  MessageSquareText,
  Network,
  ShieldCheck,
} from "lucide-react";

const researchTracks = [
  {
    number: "01",
    eyebrow: "Active inquiry",
    title: "AI-assisted communication",
    description:
      "Exploring how intelligent systems could help people communicate more effectively where speech, language or interpretation creates friction.",
    questions: [
      "How reliably can context improve interpretation?",
      "Where should human judgement remain central?",
      "How can the experience stay natural and unobtrusive?",
    ],
    accent: "#2563EB",
    icon: MessageSquareText,
    status: "Investigating",
  },
  {
    number: "02",
    eyebrow: "Applied research",
    title: "Accessible interaction",
    description:
      "Investigating how software can adapt around different communication needs rather than forcing everyone into the same interaction model.",
    questions: [
      "What forms of interaction create the least friction?",
      "How should systems communicate uncertainty?",
      "What should accessibility look like by default?",
    ],
    accent: "#22D3EE",
    icon: Network,
    status: "Exploring",
  },
  {
    number: "03",
    eyebrow: "Technical inquiry",
    title: "Trustworthy intelligent systems",
    description:
      "Examining how AI-enabled products can remain understandable, responsible and useful when predictions or interpretations are imperfect.",
    questions: [
      "How should confidence be represented to users?",
      "When should a system defer instead of decide?",
      "How can performance and user trust be evaluated together?",
    ],
    accent: "#A855F7",
    icon: ShieldCheck,
    status: "Researching",
  },
] as const;

export function CurrentResearch() {
  return (
    <section
      id="current-research"
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
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 5% 12%, rgba(37,99,235,.035), transparent 27%), radial-gradient(circle at 96% 88%, rgba(168,85,247,.025), transparent 28%)",
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
            gap-8
            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-center
            lg:gap-14
          "
        >
          {/* Copy */}
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
                02
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
                    tracking-[0.23em]
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  Current research
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[600px]
                text-[clamp(2rem,3.2vw,2.85rem)]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              What we are trying to{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#0891B2]
                  to-[#A855F7]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#67E8F9]
                  dark:to-[#C084FC]
                "
              >
                understand.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[590px]
                text-[0.88rem]
                leading-6
                text-[#0A1D2F]/70
                dark:text-white/68
                sm:text-[0.93rem]
              "
            >
              Our research portfolio is intentionally selective.
              We focus on questions that can deepen understanding
              and potentially inform useful technologies, products
              or ventures.
            </p>

            <p
              className="
                mt-4
                max-w-[570px]
                text-[0.76rem]
                leading-5
                text-[#0A1D2F]/55
                dark:text-white/52
              "
            >
              Some inquiries may become prototypes. Others may
              change a product decision — or show us that an idea
              should not move forward.
            </p>
          </div>

          {/* Editorial research image */}
          <div
            className="
              relative
              aspect-[16/9]
              overflow-hidden
              rounded-[1.35rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-[#F1F5F9]
              dark:border-white/[0.08]
              dark:bg-[#101820]
            "
          >
            <Image
              src="/images/current-research.jpg"
              alt="Technical research and computational investigation"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.015]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07111D]/55
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                inset-x-4
                bottom-4
                flex
                items-end
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-[0.43rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/65
                  "
                >
                  Research portfolio
                </p>

                <p
                  className="
                    mt-1
                    text-[0.72rem]
                    font-medium
                    text-white
                  "
                >
                  Questions before conclusions.
                </p>
              </div>

              <span
                className="
                  font-mono
                  text-[0.4rem]
                  uppercase
                  tracking-[0.12em]
                  text-white/50
                "
              >
                R / Active
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESEARCH TRACKS
        ===================================================== */}

        <div
          className="
            mt-9
            grid
            overflow-hidden
            rounded-[1.25rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-[#F8FAFC]
            dark:border-white/[0.08]
            dark:bg-[#101820]
            lg:grid-cols-3
          "
        >
          {researchTracks.map((track, index) => {
            const Icon = track.icon;

            return (
              <article
                key={track.number}
                className={`
                  group
                  relative
                  flex
                  min-h-[24rem]
                  flex-col
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-white
                  dark:hover:bg-white/[0.025]

                  ${
                    index < researchTracks.length - 1
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
                {/* Top */}
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
                      borderColor: `${track.accent}30`,
                      backgroundColor: `${track.accent}0D`,
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{
                        color: track.accent,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: track.accent,
                        boxShadow: `0 0 7px ${track.accent}55`,
                      }}
                    />

                    <span
                      className="
                        font-mono
                        text-[0.4rem]
                        uppercase
                        tracking-[0.11em]
                        text-[#0A1D2F]/48
                        dark:text-white/45
                      "
                    >
                      {track.status}
                    </span>
                  </div>
                </div>

                {/* Main */}
                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[0.4rem]"
                      style={{
                        color: track.accent,
                      }}
                    >
                      {track.number}
                    </span>

                    <span
                      className="
                        text-[0.46rem]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                      "
                      style={{
                        color: track.accent,
                      }}
                    >
                      {track.eyebrow}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-3
                      max-w-[300px]
                      text-[1.18rem]
                      font-semibold
                      leading-[1.12]
                      tracking-[-0.03em]
                      text-[#0A1D2F]
                      dark:text-white
                    "
                  >
                    {track.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[0.77rem]
                      leading-5
                      text-[#0A1D2F]/67
                      dark:text-white/63
                    "
                  >
                    {track.description}
                  </p>
                </div>

                {/* Questions */}
                <div
                  className="
                    mt-5
                    border-t
                    border-[#0A1D2F]/[0.07]
                    pt-4
                    dark:border-white/[0.07]
                  "
                >
                  <div className="flex items-center gap-2">
                    <Braces
                      className="h-3 w-3"
                      style={{
                        color: track.accent,
                      }}
                    />

                    <p
                      className="
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.13em]
                        text-[#0A1D2F]/50
                        dark:text-white/46
                      "
                    >
                      Questions under investigation
                    </p>
                  </div>

                  <div className="mt-3 space-y-2.5">
                    {track.questions.map(
                      (question, questionIndex) => (
                        <div
                          key={question}
                          className="
                            grid
                            grid-cols-[1.25rem_1fr]
                            gap-2
                          "
                        >
                          <span
                            className="
                              pt-[0.1rem]
                              font-mono
                              text-[0.4rem]
                            "
                            style={{
                              color: track.accent,
                            }}
                          >
                            0{questionIndex + 1}
                          </span>

                          <p
                            className="
                              text-[0.7rem]
                              leading-[1.15rem]
                              text-[#0A1D2F]/62
                              dark:text-white/58
                            "
                          >
                            {question}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            RESEARCH → APPLICATION
        ===================================================== */}

        <div
          className="
            mt-7
            grid
            gap-4
            border-t
            border-[#0A1D2F]/[0.08]
            pt-6
            dark:border-white/[0.08]
            sm:grid-cols-[auto_1fr]
            sm:items-start
            sm:gap-8
          "
        >
          <div className="flex items-center gap-2">
            <CircleDot className="h-3 w-3 text-[#22D3EE]" />

            <p
              className="
                whitespace-nowrap
                text-[0.47rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#0891B2]
                dark:text-[#67E8F9]
              "
            >
              Research → application
            </p>
          </div>

          <div className="max-w-[760px]">
            <p
              className="
                text-[0.86rem]
                font-medium
                leading-6
                text-[#0A1D2F]/78
                dark:text-white/74
              "
            >
              Adaptcues sits at the intersection of several of
              these questions.
            </p>

            <p
              className="
                mt-1.5
                text-[0.74rem]
                leading-5
                text-[#0A1D2F]/60
                dark:text-white/56
              "
            >
              Research around intelligent communication,
              accessibility and human-centred software can inform
              its development — without forcing evidence toward a
              predetermined product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}