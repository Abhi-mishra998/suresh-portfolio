import type { MetadataRoute } from "next";

const BASE = "https://bytehubble.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/blog/the-modern-dba`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
