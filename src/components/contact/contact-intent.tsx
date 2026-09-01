"use client";

import {
  ArrowDown,
  BriefcaseBusiness,
  CircleDot,
  FlaskConical,
  Handshake,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const enquiryTypes = [
  {
    number: "01",
    title: "Technology opportunity",
    description:
      "You are exploring an emerging technology, new capability or technical opportunity and want to investigate where it could create value.",
    icon: Lightbulb,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Product or venture",
    description:
      "You have a product idea, validated problem or venture opportunity that may benefit from research, engineering and product development.",
    icon: BriefcaseBusiness,
    accent: "#22D3EE",
  },
  {
    number: "03",
    title: "Research collaboration",
    description:
      "You are working on a technical, academic or applied research question that overlaps with Evolvaer’s areas of exploration.",
    icon: FlaskConical,
    accent: "#A855F7",
  },
  {
    number: "04",
    title: "Partnership",
    description:
      "You represent an organisation interested in collaborating around technology, innovation, research or new venture creation.",
    icon: Handshake,
    accent: "#10B981",
  },
  {
    number: "05",
    title: "Careers & collaboration",
    description:
      "You are interested in contributing to Evolvaer through future roles, research, specialist expertise or collaboration.",
    icon: Sparkles,
    accent: "#3B82F6",
  },
];

export function ContactIntent() {
  return (
    <section
      id="contact-intent"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-white/[0.5] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.5] sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.024]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          }}
        />

        <div className="absolute -left-44 top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#2563EB]/[0.025] blur-[160px] dark:bg-[#3B82F6]/[0.04]" />

        <div className="absolute right-[-11rem] bottom-[8%] h-[29rem] w-[29rem] rounded-full bg-[#A855F7]/[0.025] blur-[165px] dark:bg-[#A855F7]/[0.04]" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                02
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  What to contact us about
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[660px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Different signals.
              <br />
              <span className="text-[#22D3EE]">
                One place to begin.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              You do not need to force your enquiry into a
              narrow category. These are simply useful
              starting points for understanding what you
              want to explore.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              Start with the route that feels closest. The
              conversation can move from there.
            </p>
          </div>
        </div>

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] dark:border-white/[0.08]">
          {enquiryTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative grid gap-6 border-b border-[#0A1D2F]/[0.07] bg-white/[0.34] px-5 py-8 backdrop-blur-xl transition-colors duration-300 last:border-b-0 hover:bg-white/[0.62] dark:border-white/[0.07] dark:bg-[#0D1117]/[0.4] dark:hover:bg-white/[0.035] sm:px-7 lg:grid-cols-[0.1fr_0.18fr_0.72fr_1.3fr] lg:items-center lg:px-8 lg:py-9"
              >
                <span
                  className="font-mono text-[0.46rem]"
                  style={{
                    color: item.accent,
                  }}
                >
                  {item.number}
                </span>

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${item.accent}28`,
                    backgroundColor: `${item.accent}08`,
                  }}
                >
                  <Icon
                    className="h-4 w-4"
                    style={{
                      color: item.accent,
                    }}
                  />
                </div>

                <h3 className="text-[1.45rem] font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                  {item.title}
                </h3>

                <div className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="mt-2 hidden h-px w-8 shrink-0 lg:block"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}55, transparent)`,
                    }}
                  />

                  <p className="max-w-[680px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                    {item.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{
                    backgroundColor: item.accent,
                  }}
                />
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[28rem] overflow-hidden bg-white/[0.42] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.45] sm:p-9">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Signal routing
                </p>
              </div>

              <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#22D3EE]">
                Multiple entry points
              </span>
            </div>

            <div className="mt-8">
              <IntentMap />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white/[0.6] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.6] sm:p-9">
            <div>
              <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#A855F7]">
                Before the brief
              </p>

              <p className="mt-7 max-w-[500px] text-[1.55rem] font-medium leading-[1.4] tracking-[-0.035em] text-[#0A1D2F]/69 dark:text-white/64 sm:text-[1.85rem]">
                Start with the{" "}
                <span className="text-[#A855F7]">
                  problem worth understanding.
                </span>
              </p>

              <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                A useful first message does not need to be a
                finished brief. The problem, the context
                and what you think may be possible are
                enough to begin.
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <IntentSignal
                label="The problem"
                accent="#2563EB"
              />

              <IntentSignal
                label="Who it affects"
                accent="#22D3EE"
              />

              <IntentSignal
                label="What you have tried"
                accent="#A855F7"
              />

              <IntentSignal
                label="What could be possible"
                accent="#10B981"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Contact / 02
          </span>

          <a
            href="#contact-form"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Open the channel

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0A1D2F]/[0.08] transition-colors group-hover:border-[#2563EB]/25 dark:border-white/[0.08]">
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function IntentMap() {
  return (
    <div className="relative mx-auto h-[19rem] max-w-[42rem]">
      <SignalRoute
        className="left-[9%] top-[14%] w-[39%] rotate-[24deg]"
        accent="#2563EB"
      />

      <SignalRoute
        className="left-[4%] top-[48%] w-[44%] rotate-[2deg]"
        accent="#22D3EE"
      />

      <SignalRoute
        className="left-[10%] bottom-[14%] w-[39%] -rotate-[22deg]"
        accent="#A855F7"
      />

      <SignalRoute
        className="right-[7%] top-[18%] w-[42%] origin-right -rotate-[22deg]"
        accent="#10B981"
      />

      <SignalRoute
        className="right-[4%] bottom-[20%] w-[44%] origin-right rotate-[18deg]"
        accent="#3B82F6"
      />

      <SignalPoint
        className="left-[6%] top-[10%]"
        label="Technology"
        accent="#2563EB"
      />

      <SignalPoint
        className="left-[1%] top-[44%]"
        label="Product"
        accent="#22D3EE"
      />

      <SignalPoint
        className="bottom-[7%] left-[8%]"
        label="Research"
        accent="#A855F7"
      />

      <SignalPoint
        className="right-[3%] top-[13%]"
        label="Partnership"
        accent="#10B981"
      />

      <SignalPoint
        className="bottom-[12%] right-[1%]"
        label="Careers"
        accent="#3B82F6"
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute h-20 w-20 rounded-full border border-[#22D3EE]/[0.06]" />
          <span className="absolute h-12 w-12 rounded-full border border-[#22D3EE]/10" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,.5)]" />
        </div>

        <p className="mt-4 -translate-x-[20%] whitespace-nowrap text-[0.44rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/32 dark:text-white/28">
          Conversation
        </p>
      </div>
    </div>
  );
}

function SignalRoute({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-px origin-left ${className}`}
      style={{
        background: `linear-gradient(90deg, ${accent}20, ${accent}55, ${accent}12)`,
      }}
    />
  );
}

function SignalPoint({
  className,
  label,
  accent,
}: {
  className: string;
  label: string;
  accent: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 13px ${accent}65`,
          }}
        />

        <span className="text-[0.43rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/32 dark:text-white/28">
          {label}
        </span>
      </div>
    </div>
  );
}

function IntentSignal({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="h-2 w-2 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 8px ${accent}55`,
        }}
      />

      <span className="text-[0.5rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/35 dark:text-white/30">
        {label}
      </span>

      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, ${accent}25, transparent)`,
        }}
      />
    </div>
  );
}