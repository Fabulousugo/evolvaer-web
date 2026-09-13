import Image from "next/image";
import {
  BrainCircuit,
  MessagesSquare,
  ScanSearch,
} from "lucide-react";

const ventureThesis = [
  {
    number: "01",
    label: "Problem",
    title: "Communication can break down.",
    description:
      "People do not always communicate in ways that are immediately understood by the people, systems or environments around them.",
    accent: "#2563EB",
    icon: ScanSearch,
  },
  {
    number: "02",
    label: "Opportunity",
    title: "Technology can help interpret.",
    description:
      "Emerging AI capabilities create new possibilities for recognising communication cues and supporting clearer understanding.",
    accent: "#7C3AED",
    icon: BrainCircuit,
  },
  {
    number: "03",
    label: "Direction",
    title: "Make understanding easier.",
    description:
      "Adaptcues explores how intelligent software can support clearer interpretation and more accessible communication.",
    accent: "#22D3EE",
    icon: MessagesSquare,
  },
] as const;

const ventureTags = [
  "Communication",
  "Accessibility",
  "AI",
  "Human-centred technology",
] as const;

export function FeaturedVenture() {
  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        border-b
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]
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
              "radial-gradient(circle at 92% 15%, rgba(34,211,238,.055), transparent 28%), radial-gradient(circle at 5% 90%, rgba(37,99,235,.035), transparent 30%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div
          className="
            flex
            items-center
            gap-3
            border-b
            border-[#0A1D2F]/[0.08]
            pb-5
            dark:border-white/[0.08]
          "
        >
          <span
            className="
              font-mono
              text-[0.45rem]
              text-[#2563EB]
              dark:text-[#60A5FA]
            "
          >
            02
          </span>

          <span className="h-px w-7 bg-[#2563EB]/30" />

          <p
            className="
              text-[0.52rem]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#2563EB]
              dark:text-[#60A5FA]
            "
          >
            Portfolio
          </p>

          <span
            className="
              ml-auto
              font-mono
              text-[0.42rem]
              uppercase
              tracking-[0.12em]
              text-[#0A1D2F]/38
              dark:text-white/35
            "
          >
            Featured venture
          </span>
        </div>

        {/* =====================================================
            ADAPTCUES
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-10
            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-center
            lg:gap-14
          "
        >
          {/* LEFT */}

          <div className="max-w-[610px]">
            <div className="flex items-center gap-2.5">
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#10B981]
                    opacity-25
                    motion-reduce:animate-none
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#10B981]
                  "
                />
              </span>

              <span
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#059669]
                  dark:text-[#34D399]
                "
              >
                In development
              </span>
            </div>

            <h2
              className="
                mt-4
                text-[clamp(2.3rem,4vw,3.6rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.052em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Adaptcues
            </h2>

            <p
              className="
                mt-5
                max-w-[560px]
                text-[1.05rem]
                font-medium
                leading-7
                tracking-[-0.02em]
                text-[#0A1D2F]/76
                dark:text-white/72
                sm:text-[1.15rem]
              "
            >
              Exploring how intelligent technology can make
              communication easier to understand.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                text-[0.78rem]
                leading-6
                text-[#0A1D2F]/60
                dark:text-white/57
              "
            >
              Adaptcues is an Evolvaer software venture at the
              intersection of communication, accessibility and
              intelligent technology.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {ventureTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[#0A1D2F]/[0.08]
                    bg-white/[0.55]
                    px-3
                    py-1.5
                    text-[0.52rem]
                    font-semibold
                    text-[#0A1D2F]/60
                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                    dark:text-white/56
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Status */}

            <div
              className="
                mt-7
                grid
                max-w-[520px]
                grid-cols-2
                gap-px
                overflow-hidden
                rounded-[0.9rem]
                border
                border-[#0A1D2F]/[0.07]
                bg-[#0A1D2F]/[0.06]
                dark:border-white/[0.07]
                dark:bg-white/[0.06]
              "
            >
              <div
                className="
                  bg-white/[0.65]
                  px-4
                  py-3
                  dark:bg-[#0D1117]/[0.7]
                "
              >
                <p
                  className="
                    text-[0.4rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#0A1D2F]/40
                    dark:text-white/37
                  "
                >
                  Type
                </p>

                <p
                  className="
                    mt-1.5
                    text-[0.65rem]
                    font-semibold
                    text-[#0A1D2F]/72
                    dark:text-white/67
                  "
                >
                  Software venture
                </p>
              </div>

              <div
                className="
                  bg-white/[0.65]
                  px-4
                  py-3
                  dark:bg-[#0D1117]/[0.7]
                "
              >
                <p
                  className="
                    text-[0.4rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#0A1D2F]/40
                    dark:text-white/37
                  "
                >
                  Focus
                </p>

                <p
                  className="
                    mt-1.5
                    text-[0.65rem]
                    font-semibold
                    text-[#0A1D2F]/72
                    dark:text-white/67
                  "
                >
                  Research + product
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              PRODUCT VISUAL
          ================================================= */}

          <div
            className="
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[1.4rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-[#0A1D2F]
              dark:border-white/[0.08]
              sm:min-h-[380px]
              lg:min-h-[440px]
            "
          >
            <Image
              src="/images/adaptcues-research.png"
              alt="Adaptcues product concept"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            {/* readability treatment */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07111B]/70
                via-transparent
                to-transparent
              "
            />

            {/* visual metadata */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                flex
                items-end
                justify-between
                gap-5
                p-5
                sm:p-6
              "
            >
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
                  Product exploration
                </p>

                <p
                  className="
                    mt-1.5
                    max-w-[340px]
                    text-[0.72rem]
                    leading-5
                    text-white/70
                  "
                >
                  Human-centred intelligent software for clearer
                  communication.
                </p>
              </div>

              <span
                className="
                  hidden
                  font-mono
                  text-[0.4rem]
                  uppercase
                  tracking-[0.12em]
                  text-white/38
                  sm:block
                "
              >
                Evolvaer / Adaptcues
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            VENTURE THESIS
        ===================================================== */}

        <div
          className="
            mt-10
            border-t
            border-[#0A1D2F]/[0.08]
            pt-7
            dark:border-white/[0.08]
            lg:mt-12
          "
        >
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[0.52fr_1.48fr]
              lg:gap-10
            "
          >
            <div>
              <p
                className="
                  text-[0.46rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                Why this venture
              </p>

              <h3
                className="
                  mt-3
                  max-w-[310px]
                  text-[1.25rem]
                  font-semibold
                  leading-[1.18]
                  tracking-[-0.035em]
                  text-[#0A1D2F]
                  dark:text-white
                  sm:text-[1.4rem]
                "
              >
                Start with the human problem, not the technology.
              </h3>

              <p
                className="
                  mt-3
                  max-w-[330px]
                  text-[0.68rem]
                  leading-5
                  text-[#0A1D2F]/57
                  dark:text-white/54
                "
              >
                Communication affects independence, participation
                and human connection. The technology matters only
                if it can make that experience meaningfully better.
              </p>
            </div>

            {/* thesis steps */}

            <div
              className="
                grid
                overflow-hidden
                rounded-[1rem]
                border
                border-[#0A1D2F]/[0.08]
                dark:border-white/[0.08]
                md:grid-cols-3
              "
            >
              {ventureThesis.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className={`
                      relative
                      p-5
                      ${
                        index < ventureThesis.length - 1
                          ? `
                            border-b
                            border-[#0A1D2F]/[0.07]
                            dark:border-white/[0.07]
                            md:border-b-0
                            md:border-r
                          `
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          flex
                          h-8
                          w-8
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
                        <Icon className="h-3.5 w-3.5" />
                      </span>

                      <span
                        className="font-mono text-[0.4rem]"
                        style={{
                          color: item.accent,
                        }}
                      >
                        {item.number}
                      </span>
                    </div>

                    <p
                      className="
                        mt-5
                        text-[0.43rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                      "
                      style={{
                        color: item.accent,
                      }}
                    >
                      {item.label}
                    </p>

                    <h4
                      className="
                        mt-2
                        text-[0.86rem]
                        font-semibold
                        leading-5
                        tracking-[-0.02em]
                        text-[#0A1D2F]
                        dark:text-white
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-2.5
                        text-[0.66rem]
                        leading-5
                        text-[#0A1D2F]/58
                        dark:text-white/55
                      "
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}