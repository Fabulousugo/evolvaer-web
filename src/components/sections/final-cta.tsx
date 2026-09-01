"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

export function FinalCta() {
  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        section.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      section.style.setProperty(
        "--cta-x",
        `${x * 100}%`,
      );

      section.style.setProperty(
        "--cta-y",
        `${y * 100}%`,
      );
    };

    section.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    return () => {
      section.removeEventListener(
        "pointermove",
        handlePointerMove,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={
        {
          "--cta-x": "70%",
          "--cta-y": "45%",
        } as CSSProperties
      }
      className="
        relative
        min-h-[90vh]
        overflow-hidden
        bg-[#07111d]/[0.88]
        py-24
        text-white
        backdrop-blur-[2px]
        sm:py-28
        lg:flex
        lg:min-h-screen
        lg:items-center
        lg:py-36
      "
    >
      {/* ==========================================
          ATMOSPHERE
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--cta-x) var(--cta-y), rgba(59,130,246,0.12), transparent 28%)",
          }}
        />

        <div
          className="
            absolute
            right-[-14rem]
            top-[-16rem]
            h-[46rem]
            w-[46rem]
            rounded-full
            bg-blue/[0.12]
            blur-[190px]
          "
        />

        <div
          className="
            absolute
            bottom-[-16rem]
            left-[-10rem]
            h-[38rem]
            w-[38rem]
            rounded-full
            bg-teal/[0.07]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            left-[35%]
            top-[25%]
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-violet/[0.055]
            blur-[180px]
          "
        />

        {/* Fine grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.12) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.12) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "96px 96px",
          }}
        />

        {/* Edge vignette */}

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,17,29,0.38)_100%)]
          "
        />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div
        className="
          evolvaer-container
          relative z-10
          w-full
        "
      >
        <div
          className="
            border-y
            border-white/[0.09]
            py-16
            sm:py-20
            lg:py-24
          "
        >
          <div
            className="
              grid
              gap-16
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
            "
          >
            {/* Left */}

            <div>
              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    h-px
                    w-12
                    bg-gradient-to-r
                    from-teal
                    via-blue
                    to-violet
                  "
                />

                <span
                  className="
                    text-[0.66rem]
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-white/42
                  "
                >
                  Start a conversation
                </span>
              </div>

              <h2
                className="
                  max-w-5xl
                  text-[clamp(4.2rem,7.5vw,8.5rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.065em]
                "
              >
                Let&apos;s build
                <br />
                what{" "}
                <span className="brand-gradient-text">
                  matters.
                </span>
              </h2>
            </div>

            {/* Right */}

            <div
              className="
                max-w-lg
                lg:justify-self-end
              "
            >
              <p
                className="
                  text-base
                  leading-8
                  text-white/55
                  sm:text-lg
                "
              >
                Have an ambitious problem,
                emerging technology
                opportunity or idea worth
                exploring? We&apos;re
                interested in conversations
                that could lead somewhere
                meaningful.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-9
                  inline-flex
                  min-h-14
                  items-center
                  gap-8

                  rounded-full
                  border
                  border-blue/35

                  bg-blue/[0.08]

                  px-7

                  text-sm
                  font-semibold
                  text-white

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue/60
                  hover:bg-blue/[0.16]
                  hover:shadow-[0_15px_60px_rgba(59,130,246,0.18)]
                "
              >
                Start a conversation

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full
                    bg-white/[0.07]

                    transition-all
                    duration-300

                    group-hover:bg-blue
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4
                      w-4

                      transition-transform
                      duration-300

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4

            text-[0.58rem]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-white/25

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            Evolvaer Technologies
          </span>

          <span>
            Explore · Research · Build
          </span>
        </div>
      </div>
    </section>
  );
}