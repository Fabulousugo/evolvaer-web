import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://evolvaer.com";

  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/ventures",
    "/research",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/ventures" ||
            route === "/research"
          ? 0.9
          : 0.8,
  }));
}