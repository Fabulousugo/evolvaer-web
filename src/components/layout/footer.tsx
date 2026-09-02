import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Ventures", href: "/ventures" },
] as const;

const exploreLinks = [
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-navy/[0.06]

        bg-[#f8fafc]
        text-navy

        dark:border-white/[0.06]
        dark:bg-[#050e17]
        dark:text-white
      "
    >
      <div className="evolvaer-container">
        <div
          className="
            grid
            gap-14

            py-14

            lg:grid-cols-[1.35fr_0.65fr_0.65fr]
            lg:py-18
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <Link
              href="/"
              aria-label="Evolvaer Technologies home"
              className="inline-flex"
            >
              <span
                aria-hidden="true"
                className="
                  block

                  h-[52px]
                  w-[205px]

                  origin-left
                  scale-[1.18]

                  bg-[url('/brand/evolvaer-logo-light.png')]
                  bg-contain
                  bg-left
                  bg-no-repeat

                  sm:h-[58px]
                  sm:w-[230px]

                  dark:scale-100
                  dark:bg-[url('/brand/evolvaer-logo-dark.png')]
                "
              />
            </Link>

            {/* Tagline */}

            <p
              className="
                mt-7
                max-w-md

                font-display
                text-[1.65rem]
                leading-[1.2]
                tracking-[-0.02em]

                text-navy/75

                dark:text-white/78
              "
            >
              Exploring what&apos;s next.
              <br />
              Building what matters.
            </p>

            {/* CTA */}

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2

                text-sm
                text-navy/45

                transition-colors
                duration-200

                hover:text-blue

                dark:text-white/48
                dark:hover:text-teal
              "
            >
              Start a conversation

              <ArrowUpRight
                aria-hidden="true"
                className="
                  h-3.5
                  w-3.5

                  transition-transform
                  duration-200

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>
            <p
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.26em]

                text-navy/30

                dark:text-white/28
              "
            >
              Company
            </p>

            <nav
              aria-label="Company"
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >
              {companyLinks.map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      text-sm
                      text-navy/50

                      transition-colors
                      duration-200

                      hover:text-blue

                      dark:text-white/48
                      dark:hover:text-teal
                    "
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>
            <p
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.26em]

                text-navy/30

                dark:text-white/28
              "
            >
              Explore
            </p>

            <nav
              aria-label="Explore"
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >
              {exploreLinks.map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      text-sm
                      text-navy/50

                      transition-colors
                      duration-200

                      hover:text-blue

                      dark:text-white/48
                      dark:hover:text-teal
                    "
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            border-t
            border-navy/[0.08]

            py-7

            dark:border-white/[0.08]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4

              text-[0.68rem]
              text-navy/35

              sm:flex-row
              sm:items-center
              sm:justify-between

              dark:text-white/27
            "
          >
            <p>
              © {year} Evolvaer Technologies.
              All rights reserved.
            </p>

            <p className="tracking-[0.14em]">
              RESEARCH · ENGINEERING · VENTURE BUILDING
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}