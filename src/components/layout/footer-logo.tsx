"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/src/components/theme-provider";

export function FooterLogo() {
  const { theme, mounted } = useTheme();

  const isDark = mounted && theme === "dark";

  return (
    <Link
      href="/"
      aria-label="Evolvaer Technologies home"
      className="inline-flex"
    >
      <div
        className="
          relative
          h-[52px] w-[205px]
          sm:h-[58px] sm:w-[230px]
        "
      >
        {mounted ? (
          <Image
            src={
              isDark
                ? "/brand/evolvaer-logo-dark.png"
                : "/brand/evolvaer-logo-light.png"
            }
            alt="Evolvaer Technologies"
            fill
            sizes="(max-width: 640px) 205px, 230px"
            className={`
              object-contain
              object-left

              ${
                isDark
                  ? "scale-100"
                  : "origin-left scale-[1.18]"
              }
            `}
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full"
          />
        )}
      </div>
    </Link>
  );
}