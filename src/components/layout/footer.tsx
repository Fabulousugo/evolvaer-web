import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Ventures", href: "/ventures" },
];

const exploreLinks = [
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#050e17] text-white">
      <div className="evolvaer-container">
        <div className="grid gap-14 py-14 lg:grid-cols-[1.35fr_0.65fr_0.65fr] lg:py-18">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <span className="font-display text-lg font-semibold">
                  ET
                </span>
              </div>

              <div>
                <p className="text-[0.8rem] font-semibold tracking-[0.24em]">
                  EVOLVAER
                </p>

                <p className="mt-1 text-[0.53rem] tracking-[0.34em] text-gold">
                  TECHNOLOGIES
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-md font-display text-[1.65rem] leading-[1.2] tracking-[-0.02em] text-white/78">
              Exploring what&apos;s next.
              <br />
              Building what matters.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm text-white/48 transition-colors hover:text-gold"
            >
              Start a conversation

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-white/28">
              Company
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/48 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-white/28">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/48 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/[0.08] py-7">
          <div className="flex flex-col gap-4 text-[0.68rem] text-white/27 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Evolvaer
              Technologies. All rights reserved.
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