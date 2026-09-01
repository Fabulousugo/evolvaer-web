import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ThemeProvider } from "@/src/components/theme-provider";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Evolvaer Technologies",
    template: "%s | Evolvaer Technologies",
  },

  description:
    "Evolvaer Technologies explores emerging technologies, engineers intelligent solutions, and builds products that matter.",

  keywords: [
    "Evolvaer Technologies",
    "technology",
    "innovation",
    "artificial intelligence",
    "software engineering",
    "emerging technology",
    "research",
    "digital products",
  ],

  authors: [
    {
      name: "Evolvaer Technologies",
    },
  ],

  creator: "Evolvaer Technologies",
  publisher: "Evolvaer Technologies",

  metadataBase: new URL("https://evolvaer.com"),

  openGraph: {
    title: "Evolvaer Technologies",
    description: "Exploring what's next. Building what matters.",
    siteName: "Evolvaer Technologies",
    type: "website",
    locale: "en_GB",
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
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={plusJakarta.variable}
>
  <body
    suppressHydrationWarning
    className="min-h-screen bg-background text-foreground antialiased"
  >
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
  );
}