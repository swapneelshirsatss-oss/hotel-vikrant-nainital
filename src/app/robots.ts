import { MetadataRoute } from "next";
import { HOTEL_DATA } from "@/data/hotelData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${HOTEL_DATA.websiteUrl}/sitemap.xml`,
  };
}
