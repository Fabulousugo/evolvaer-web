import Link from "next/link";
import { Mail } from "lucide-react";

export function ContactCta() {
  return (
    <section
      id="contact-close"
      className="
        border-t
        border-[#0A1D2F]/[0.07]
        bg-[#0A1D2F]
        py-7
        text-white
        dark:border-white/[0.07]
      "
    >
      <div className="evolvaer-container">
        <div
          className="
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Prefer email?
            </p>

            <p className="mt-1 text-[0.78rem] leading-5 text-white/65">
              Reach us directly and we&apos;ll get back to you.
            </p>
          </div>

          <Link
            href="mailto:hello@evolvaer.com"
            className="
              inline-flex
              items-center
              gap-2

              text-sm
              font-semibold

              text-[#67E8F9]

              transition-colors

              hover:text-white
            "
          >
            <Mail className="h-4 w-4" />

            hello@evolvaer.com
          </Link>
        </div>
      </div>
    </section>
  );
}