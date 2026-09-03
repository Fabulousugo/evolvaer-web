"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/src/components/theme-provider";

export function NavbarLogo() {
  const { theme, mounted } = useTheme();

  const isDark =
    mounted && theme === "dark";

  return (
    <Link
      href="/"
      aria-label="Evolvaer Technologies home"
      className="group relative z-20 flex items-center"
    >
      <div
        className="
          relative
          h-[38px] w-[150px]
          sm:h-[42px] sm:w-[166px]
          lg:h-[44px] lg:w-[176px]
        "
      >
        <Image
          src={
            isDark
              ? "/brand/evolvaer-logo-dark.png"
              : "/brand/evolvaer-logo-light.png"
          }
          alt="Evolvaer Technologies"
          fill
          priority
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 166px, 176px"
          className={`
            object-contain
            object-left
            transition-transform
            duration-300

            ${
              isDark
                ? "scale-100"
                : "origin-left scale-[1.18]"
            }
          `}
        />
      </div>
    </Link>
  );
}