import type { MetadataRoute } from "next";
import { NAV, START_HREF } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...NAV.map((n) => n.href), START_HREF].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
