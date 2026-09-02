import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/src/components/theme-provider";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evolvaer.com"),

  title: {
    default: "Evolvaer Technologies",
    template: "%s | Evolvaer Technologies",
  },

  description:
    "Evolvaer Technologies explores emerging technologies, engineers intelligent solutions, and builds products that matter.",

  openGraph: {
    title: "Evolvaer Technologies",
    description: "Exploring what's next. Building what matters.",
    siteName: "Evolvaer Technologies",
    type: "website",
    locale: "en_GB",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Evolvaer Technologies",
    description: "Exploring what's next. Building what matters.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={plusJakarta.variable}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          bg-background
          text-foreground
          antialiased
        "
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}