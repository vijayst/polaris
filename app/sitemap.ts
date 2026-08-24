import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/aiml",
    "/platform",
    "/vegaai",
    "/marisai",
    "/spicaai",
    "/legalprodigyai",
    "/product-management",
    "/technology",
    "/mentorship",
    "/pricing",
    "/demos/conversational-ai",
    "/demos/text-classification",
    "/demos/recommendations",
    "/demos/prompt-engineering",
    "/wip",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/demos") ? 0.5 : 0.8,
  }));
}
