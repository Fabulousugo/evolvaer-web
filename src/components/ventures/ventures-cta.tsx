import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
} from "lucide-react";

export function VenturesCta() {
  return (
    <section
      id="ventures-cta"
      className="
        relative
        overflow-hidden
        bg-[#0A1D2F]
        py-14
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
              "radial-gradient(circle at 8% 18%, rgba(37,99,235,.12), transparent 28%), radial-gradient(circle at 92% 78%, rgba(34,211,238,.08), transparent 30%), radial-gradient(circle at 54% 110%, rgba(124,58,237,.07), transparent 32%)",
          }}
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            PORTFOLIO HORIZON
        ===================================================== */}

        <div
          className="
            grid
            gap-6
            border-b
            border-white/[0.08]
            pb-9
            lg:grid-cols-[0.62fr_1.38fr]
            lg:items-center
            lg:gap-14
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <CircleDot
                className="
                  h-3.5
                  w-3.5
                  text-[#67E8F9]
                "
              />

              <p
                className="
                  text-[0.48rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#67E8F9]
                "
              >
                Portfolio horizon
              </p>
            </div>

            <h2
              className="
                mt-3
                max-w-[450px]
                text-[clamp(1.6rem,2.7vw,2.25rem)]
                font-semibold
                leading-[1.05]
                tracking-[-0.042em]
                text-white
              "
            >
              The sector can change.
              <br />

              <span className="text-white/58">
                The standard should not.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[720px]
              text-[0.78rem]
              leading-6
              text-white/58
              sm:text-[0.84rem]
              lg:justify-self-end
            "
          >
            Adaptcues is one venture emerging from the Evolvaer
            model — not the boundary of what the company can become.
            Future ventures will emerge where meaningful opportunity,
            technical possibility and strong evidence justify
            building.
          </p>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            gap-9
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div className="max-w-[720px]">
            <p
              className="
                text-[0.5rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/38
              "
            >
              Evolvaer Ventures
            </p>

            <h3
              className="
                mt-3
                text-[clamp(2rem,3.6vw,3.35rem)]
                font-semibold
                leading-[0.97]
                tracking-[-0.05em]
                text-white
              "
            >
              Build what deserves
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#60A5FA]
                  via-[#67E8F9]
                  to-[#34D399]
                  bg-clip-text
                  text-transparent
                "
              >
                to exist.
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-[590px]
                text-[0.8rem]
                leading-6
                text-white/56
                sm:text-[0.86rem]
              "
            >
              We investigate carefully, build selectively and keep
              learning as evidence changes — turning the strongest
              opportunities into useful products and enduring
              ventures.
            </p>
          </div>

          {/* actions */}

          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              lg:justify-end
            "
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#2563EB]
                px-5
                text-[0.75rem]
                font-semibold
                text-white
                transition-[transform,background-color,box-shadow]
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1D4ED8]
                hover:shadow-[0_10px_26px_rgba(37,99,235,.2)]
              "
            >
              Start a conversation

              <ArrowRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            <Link
              href="/research"
              className="
                group
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2.5
                rounded-full
                border
                border-white/[0.12]
                bg-white/[0.035]
                px-5
                text-[0.75rem]
                font-semibold
                text-white/72
                transition-[transform,border-color,background-color,color]
                duration-300
                hover:-translate-y-0.5
                hover:border-white/20
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              Explore our research

              <ArrowRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            CLOSING PRINCIPLE
        ===================================================== */}

        <div
          className="
            mt-10
            border-t
            border-white/[0.08]
            pt-6
          "
        >
          <div
            className="
              grid
              gap-3
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
                text-white/28
              "
            >
              Operating belief
            </p>

            <p
              className="
                max-w-[760px]
                text-[0.7rem]
                leading-5
                text-white/50
              "
            >
              The goal is not to produce the greatest number of
              ideas. It is to develop the judgement and capability
              to recognise the ones worth making real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}