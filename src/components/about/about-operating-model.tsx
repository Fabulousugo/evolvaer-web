import {
  Building2,
  FlaskConical,
  Layers3,
  Wrench,
} from "lucide-react";

const operatingModel = [
  {
    number: "01",
    title: "Research",
    description:
      "We investigate emerging technologies, changing behaviours and meaningful problems before deciding what deserves to be built.",
    icon: FlaskConical,
    accent: "blue" as const,
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "We turn promising ideas into prototypes, systems and technical foundations that can survive outside the laboratory.",
    icon: Wrench,
    accent: "teal" as const,
  },
  {
    number: "03",
    title: "Build",
    description:
      "When an opportunity proves valuable, we develop it into a product, platform or independent venture.",
    icon: Layers3,
    accent: "violet" as const,
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We strengthen technology, product thinking and commercial foundations so useful ideas can grow sustainably.",
    icon: Building2,
    accent: "blue" as const,
  },
];

const accents = {
  blue: {
    line:
      "bg-[#2563EB] dark:bg-[#3B82F6]",
    icon:
      "border-[#2563EB]/20 bg-[#2563EB]/[0.06] text-[#2563EB] dark:border-[#3B82F6]/25 dark:bg-[#3B82F6]/[0.08] dark:text-[#60A5FA]",
    number:
      "text-[#2563EB] dark:text-[#60A5FA]",
    field:
      "radial-gradient(circle at 90% 8%, rgba(37,99,235,0.09), transparent 32%)",
  },

  teal: {
    line:
      "bg-[#10B981] dark:bg-[#22D3EE]",
    icon:
      "border-[#10B981]/20 bg-[#10B981]/[0.06] text-[#10B981] dark:border-[#22D3EE]/25 dark:bg-[#22D3EE]/[0.08] dark:text-[#22D3EE]",
    number:
      "text-[#10B981] dark:text-[#22D3EE]",
    field:
      "radial-gradient(circle at 90% 8%, rgba(16,185,129,0.08), transparent 32%)",
  },

  violet: {
    line:
      "bg-[#7C3AED] dark:bg-[#A855F7]",
    icon:
      "border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] text-[#7C3AED] dark:border-[#A855F7]/25 dark:bg-[#A855F7]/[0.08] dark:text-[#C084FC]",
    number:
      "text-[#7C3AED] dark:text-[#C084FC]",
    field:
      "radial-gradient(circle at 90% 8%, rgba(124,58,237,0.08), transparent 32%)",
  },
};

export function AboutOperatingModel() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.62] dark:bg-[#0D1117]/[0.57]" />

        <div
          className="absolute inset-0 opacity-75 dark:opacity-90"
          style={{
            background:
              "radial-gradient(circle at 5% 20%, rgba(34,211,238,0.05), transparent 27%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-75 dark:opacity-90"
          style={{
            background:
              "radial-gradient(circle at 88% 90%, rgba(37,99,235,0.055), transparent 30%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.032]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.32) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.32) 1px, transparent 1px)
            `,
            backgroundSize:
              "88px 88px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#2563EB] dark:bg-[#3B82F6]" />

              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/38 dark:text-white/35">
                How we operate
              </span>
            </div>

            <h2 className="mt-7 text-[clamp(3rem,4.8vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#0A1D2F] dark:text-white">
              Ideas move
              <br />
              through a
              <br />

              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                system.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#0A1D2F]/50 dark:text-white/43 sm:text-base sm:leading-8">
              We do not treat research, engineering and venture
              building as isolated activities. Ideas move through a
              connected sequence where each stage earns the next.
            </p>

            <div className="mt-10 hidden lg:block">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_16px_rgba(16,185,129,.55)] dark:bg-[#22D3EE]" />

                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/28 dark:text-white/25">
                  Scroll through the system
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-[1.45rem] top-10 w-px bg-gradient-to-b from-[#2563EB]/20 via-[#22D3EE]/25 to-[#7C3AED]/20 dark:from-[#3B82F6]/25 dark:via-[#22D3EE]/30 dark:to-[#A855F7]/25 sm:left-[1.75rem]"
            />

            <div className="space-y-4">
              {operatingModel.map(
                (item, index) => {
                  const Icon =
                    item.icon;

                  const accent =
                    accents[
                      item.accent
                    ];

                  return (
                    <article
                      key={
                        item.number
                      }
                      className="group relative overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/45 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#0A1D2F]/[0.13] hover:bg-white/60 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.045] sm:p-8"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-80 dark:opacity-100"
                        style={{
                          background:
                            accent.field,
                        }}
                      />

                      <div className="relative z-10 grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-start">
                        <div className="relative z-10">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.icon}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-[0.6rem] font-semibold uppercase tracking-[0.25em] ${accent.number}`}
                            >
                              {
                                item.number
                              }
                            </span>

                            <span
                              className={`h-px w-8 ${accent.line}`}
                            />
                          </div>

                          <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.04em] text-[#0A1D2F] dark:text-white sm:text-[2.25rem]">
                            {
                              item.title
                            }
                          </h3>

                          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#0A1D2F]/50 dark:text-white/44 sm:text-base sm:leading-8">
                            {
                              item.description
                            }
                          </p>
                        </div>

                        <span className="hidden pt-1 text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/20 dark:text-white/20 sm:block">
                          Stage{" "}
                          {index + 1}
                        </span>
                      </div>
                    </article>
                  );
                },
              )}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#10B981]/15 bg-[#10B981]/[0.045] px-6 py-5 dark:border-[#22D3EE]/15 dark:bg-[#22D3EE]/[0.035]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {operatingModel.map(
                  (item, index) => (
                    <div
                      key={`system-${item.title}`}
                      className="flex items-center gap-4"
                    >
                      <span className="text-xs font-semibold text-[#0A1D2F]/48 dark:text-white/42">
                        {
                          item.title
                        }
                      </span>

                      {index <
                        operatingModel.length -
                          1 && (
                        <span className="text-[#10B981]/50 dark:text-[#22D3EE]/45">
                          →
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}