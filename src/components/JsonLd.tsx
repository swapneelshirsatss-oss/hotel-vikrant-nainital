import React from "react";
import { HOTEL_DATA } from "@/data/hotelData";

interface JsonLdProps {
  type?: "home" | "rooms" | "about" | "amenities" | "gallery" | "attractions" | "contact";
  breadcrumbItems?: { name: string; url: string }[];
}

export default function JsonLd({ type = "home", breadcrumbItems }: JsonLdProps) {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    "@id": `${HOTEL_DATA.websiteUrl}/#hotel`,
    "name": HOTEL_DATA.name,
    "alternateName": [
      "Hotel Vikrant",
      "Vikrant Hotel Nainital",
      "Hotel Vikrant Mall Road",
      "Hotel Vikrant Zoo Road",
      "Vikrant Hotel Tallital Nainital",
    ],
    "description": HOTEL_DATA.subheadline,
    "url": HOTEL_DATA.websiteUrl,
    "telephone": HOTEL_DATA.phoneFormatted,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
    "image": [
      `${HOTEL_DATA.websiteUrl}/images/gallery/IMG_8038.webp`,
      `${HOTEL_DATA.websiteUrl}/images/gallery/IMG_8044.webp`,
      `${HOTEL_DATA.websiteUrl}/images/gallery/IMG_8048.webp`,
      `${HOTEL_DATA.websiteUrl}/images/gallery/IMG_8036.webp`,
    ],
    "logo": `${HOTEL_DATA.websiteUrl}/images/logo/hotel-vikrant-logo.svg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": HOTEL_DATA.address.street,
      "addressLocality": HOTEL_DATA.address.locality,
      "addressRegion": HOTEL_DATA.address.state,
      "postalCode": HOTEL_DATA.address.postalCode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": HOTEL_DATA.coordinates.latitude,
      "longitude": HOTEL_DATA.coordinates.longitude,
    },
    "hasMap": HOTEL_DATA.googleMapsUrl,
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "In-Room Dining & Room Service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24x7 Hot Water Geysers", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "High-Speed Fiber WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "100% Power Backup", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "300m from Naini Lake", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Mountain View Balconies", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "4-Bedded Family Suites", "value": true },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": HOTEL_DATA.reviews.map((rev) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": rev.author },
      "reviewRating": { "@type": "Rating", "ratingValue": rev.rating, "bestRating": "5" },
      "reviewBody": rev.reviewText,
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${HOTEL_DATA.websiteUrl}/#website`,
    "url": HOTEL_DATA.websiteUrl,
    "name": HOTEL_DATA.name,
    "alternateName": ["Hotel Vikrant", "Vikrant Hotel Nainital"],
    "publisher": { "@id": `${HOTEL_DATA.websiteUrl}/#hotel` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOTEL_DATA.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const breadcrumbsSchema = breadcrumbItems && breadcrumbItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      {type === "home" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </>
      )}
      {breadcrumbsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
        />
      )}
    </>
  );
}
