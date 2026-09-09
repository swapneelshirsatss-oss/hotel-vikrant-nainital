import { MetadataRoute } from "next";
import { HOTEL_DATA } from "@/data/hotelData";

export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "cohere-ai",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiAgents.map((agent) => ({
        userAgent: agent,
        allow: "/",
      })),
    ],
    sitemap: `${HOTEL_DATA.websiteUrl}/sitemap.xml`,
    host: HOTEL_DATA.websiteUrl,
  };
}
