import {
  Blocks,
  Gauge,
  PanelsTopLeft,
  Repeat2,
} from "lucide-react";

const buildLayers = [
  {
    number: "01",
    icon: PanelsTopLeft,
    label: "Product",
    title: "Design the experience",
    description:
      "Shape the engineered system into something understandable, usable and aligned with the people it serves.",
    accent: "#A855F7",
  },
  {
    number: "02",
    icon: Blocks,
    label: "Structure",
    title: "Build the foundation",
    description:
      "Turn prototypes and architecture into a robust product foundation for real users and workflows.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: Repeat2,
    label: "Iteration",
    title: "Learn through use",
    description:
      "Use feedback, behaviour and system performance to refine what the product becomes.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    icon: Gauge,
    label: "Readiness",
    title: "Prepare for reality",
    description:
      "Strengthen reliability, security, usability and operational readiness before pushing further.",
    accent: "#10B981",
  },
] as const;

const buildLoop = [
  {
    number: "01",
    label: "Build",
    description: "Create the next meaningful version.",
  },
  {
    number: "02",
    label: "Use",
    description: "Put it into a real context.",
  },
  {
    number: "03",
    label: "Learn",
    description: "Observe behaviour and outcomes.",
  },
  {
    number: "04",
    label: "Improve",
    description: "Strengthen what deserves to continue.",
  },
] as const;

export function BuildStage() {
  return (
    <section
      id="build"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]/[0.38]
        py-14
        dark:border-white/[0.07]
        dark:bg-[#0D1117]/[0.36]
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
              "radial-gradient(circle at 94% 14%, rgba(168,85,247,.05), transparent 28%), radial-gradient(circle at 5% 90%, rgba(37,99,235,.04), transparent 27%)",
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
                04
              </span>

              <span className="h-px w-7 bg-[#A855F7]/35" />

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
                Build
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[590px]
                text-[clamp(1.95rem,3.2vw,2.75rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Turn the system into a{" "}
              <span
                className="
                  text-[#7C3AED]
                  dark:text-[#C084FC]
                "
              >
                product.
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
              Engineering proves that the system can work. Building
              turns that system into something people can understand,
              use, adopt and rely on.
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
              Technology, product thinking and real usage come
              together to turn technical capability into a coherent
              product.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRODUCT FORMATION
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[1rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-white/[0.46]
            dark:border-white/[0.08]
            dark:bg-white/[0.02]
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {buildLayers.map((layer, index) => {
            const Icon = layer.icon;

            return (
              <article
                key={layer.title}
                className={`
                  group
                  relative
                  p-5
                  sm:p-6

                  ${
                    index !== 0
                      ? `
                        border-t
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        md:border-l
                        md:border-t-0
                      `
                      : ""
                  }

                  ${
                    index === 2
                      ? `
                        md:border-l-0
                        lg:border-l
                      `
                      : ""
                  }

                  ${
                    index >= 2
                      ? `
                        md:border-t
                        lg:border-t-0
                      `
                      : ""
                  }
                `}
              >
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
                      color: layer.accent,
                      borderColor: `${layer.accent}28`,
                      backgroundColor: `${layer.accent}0A`,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <span
                    className="
                      font-mono
                      text-[0.4rem]
                      text-[#0A1D2F]/28
                      dark:text-white/26
                    "
                  >
                    BUILD / {layer.number}
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
                    color: layer.accent,
                  }}
                >
                  {layer.label}
                </p>

                <h3
                  className="
                    mt-1.5
                    text-[0.9rem]
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  {layer.title}
                </h3>

                <p
                  className="
                    mt-2.5
                    text-[0.67rem]
                    leading-5
                    text-[#0A1D2F]/55
                    dark:text-white/51
                  "
                >
                  {layer.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            SYSTEM → PRODUCT
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-[0.5fr_1.5fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#7C3AED]
                dark:text-[#C084FC]
              "
            >
              Product formation
            </p>

            <h3
              className="
                mt-2
                max-w-[320px]
                text-[1.05rem]
                font-semibold
                leading-snug
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              A working system is not automatically a useful product.
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
            <div className="grid md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              {/* working system */}

              <ProductTransition
                eyebrow="Technical state"
                title="Working system"
                description="Architecture, logic, integrations and technical capability."
                items={["Functional", "Validated", "Connected"]}
                accent="#22D3EE"
              />

              {/* arrow */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  border-y
                  border-[#0A1D2F]/[0.07]
                  px-4
                  py-3
                  text-[#A855F7]
                  dark:border-white/[0.07]
                  md:border-x
                  md:border-y-0
                "
              >
                <span className="text-sm">→</span>
              </div>

              {/* usable product */}

              <ProductTransition
                eyebrow="Product state"
                title="Usable product"
                description="A coherent experience people can understand, use and trust."
                items={["Useful", "Usable", "Ready"]}
                accent="#A855F7"
                active
              />
            </div>

            <div
              className="
                border-t
                border-[#0A1D2F]/[0.07]
                px-5
                py-4
                dark:border-white/[0.07]
              "
            >
              <p
                className="
                  text-[0.68rem]
                  leading-5
                  text-[#0A1D2F]/56
                  dark:text-white/52
                "
              >
                This is where{" "}
                <span
                  className="
                    font-semibold
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  technology stops being the product
                </span>{" "}
                and becomes the foundation of the product.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BUILD LOOP
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-[0.5fr_1.5fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#0A1D2F]/40
                dark:text-white/38
              "
            >
              Build loop
            </p>

            <p
              className="
                mt-2
                max-w-[300px]
                text-[0.7rem]
                leading-5
                text-[#0A1D2F]/53
                dark:text-white/49
              "
            >
              Building is iterative. Real use changes what the next
              version should become.
            </p>
          </div>

          <div
            className="
              grid
              overflow-hidden
              rounded-[1rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-white/[0.4]
              dark:border-white/[0.08]
              dark:bg-white/[0.02]
              sm:grid-cols-4
            "
          >
            {buildLoop.map((item, index) => (
              <div
                key={item.label}
                className={`
                  relative
                  px-5
                  py-4

                  ${
                    index !== 0
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
                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[0.4rem]
                      text-[#0A1D2F]/28
                      dark:text-white/26
                    "
                  >
                    {item.number}
                  </span>

                  {index < buildLoop.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        text-[0.55rem]
                        text-[#A855F7]/55
                        sm:block
                      "
                    >
                      →
                    </span>
                  )}
                </div>

                <p
                  className="
                    mt-3
                    text-[0.72rem]
                    font-semibold
                    text-[#0A1D2F]/72
                    dark:text-white/67
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1.5
                    text-[0.61rem]
                    leading-5
                    text-[#0A1D2F]/48
                    dark:text-white/45
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
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
            Build principle
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
            We build enough to learn, but with enough discipline that{" "}
            <span
              className="
                font-semibold
                text-[#0A1D2F]
                dark:text-white
              "
            >
              the strongest ideas can keep moving forward without
              being rebuilt from scratch.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductTransition({
  eyebrow,
  title,
  description,
  items,
  accent,
  active = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className="
        relative
        px-5
        py-4
      "
      style={{
        backgroundColor: active
          ? `${accent}08`
          : undefined,
      }}
    >
      {active && (
        <span
          className="
            absolute
            right-4
            top-4
            h-1.5
            w-1.5
            rounded-full
          "
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 8px ${accent}65`,
          }}
        />
      )}

      <p
        className="
          text-[0.4rem]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#0A1D2F]/36
          dark:text-white/34
        "
      >
        {eyebrow}
      </p>

      <h4
        className="
          mt-1.5
          text-[0.76rem]
          font-semibold
          text-[#0A1D2F]/72
          dark:text-white/67
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-1.5
          max-w-[300px]
          text-[0.61rem]
          leading-5
          text-[#0A1D2F]/48
          dark:text-white/45
        "
      >
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              px-2
              py-1
              text-[0.39rem]
              font-semibold
              uppercase
              tracking-[0.12em]
            "
            style={{
              borderColor: `${accent}25`,
              backgroundColor: `${accent}08`,
              color: accent,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}