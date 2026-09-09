import React from "react";
import { HOTEL_DATA } from "@/data/hotelData";

interface JsonLdProps {
  type?: "layout" | "home" | "rooms" | "about" | "amenities" | "gallery" | "attractions" | "contact";
  breadcrumbItems?: { name: string; url: string }[];
  includeHotelSchema?: boolean;
}

export default function JsonLd({ type = "layout", breadcrumbItems, includeHotelSchema }: JsonLdProps) {
  const baseUrl = HOTEL_DATA.websiteUrl;

  // Canonical Hotel & LodgingBusiness Schema with full Local SEO & GMB CID signals
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    "@id": `${baseUrl}/#hotel`,
    name: HOTEL_DATA.name,
    legalName: HOTEL_DATA.canonicalEntityName,
    alternateName: [
      "Hotel Vikrant",
      "Vikrant Hotel Nainital",
      "Hotel Vikrant Mall Road",
      "Hotel Vikrant Zoo Road",
      "Vikrant Hotel Tallital Nainital",
      "Hotel Vikrant Near Naini Lake",
    ],
    description: HOTEL_DATA.subheadline,
    url: `${baseUrl}/`,
    telephone: HOTEL_DATA.phoneRawE164,
    email: HOTEL_DATA.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
    image: [
      `${baseUrl}/images/gallery/IMG_8038.webp`,
      `${baseUrl}/images/gallery/IMG_8044.webp`,
      `${baseUrl}/images/gallery/IMG_8048.webp`,
      `${baseUrl}/images/gallery/IMG_8036.webp`,
      `${baseUrl}/images/gallery/IMG_8040.webp`,
    ],
    logo: `${baseUrl}/images/logo/hotel-vikrant-logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: HOTEL_DATA.address.street,
      addressLocality: HOTEL_DATA.address.locality,
      addressRegion: HOTEL_DATA.address.state,
      postalCode: HOTEL_DATA.address.postalCode,
      addressCountry: "IN",
      description: HOTEL_DATA.fullAddress,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HOTEL_DATA.coordinates.latitude,
      longitude: HOTEL_DATA.coordinates.longitude,
    },
    hasMap: HOTEL_DATA.googleMapsCidUrl,
    checkinTime: "12:00",
    checkoutTime: "11:00",
    hasDriveThroughService: false,
    petsAllowed: false,
    availableLanguage: ["English", "Hindi"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: HOTEL_DATA.phoneRawE164,
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    knowsAbout: [
      "Nainital Tourism",
      "Naini Lake Boating Point",
      "Pt. G.B. Pant High Altitude Zoo",
      "Kainchi Dham Ashram Neem Karoli Baba",
      "Maa Naina Devi Shaktipeeth Temple",
      "Tallital Upper Mall Road Hotels",
      "4-Bedded Family Suite Accommodation Nainital",
      "Kathgodam to Nainital Hill Transit",
    ],
    touristType: [
      "Families with Children",
      "Couples & Honeymooners",
      "Spiritual Pilgrims to Kainchi Dham",
      "Remote Workationers",
      "Weekend Getaways from Delhi NCR",
    ],
    areaServed: [
      { "@type": "AdministrativeArea", "name": "Nainital District" },
      { "@type": "AdministrativeArea", "name": "Uttarakhand" },
      { "@type": "City", "name": "Delhi NCR" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Gurugram" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "City", "name": "Faridabad" },
      { "@type": "City", "name": "Bareilly" },
      { "@type": "City", "name": "Moradabad" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "City", "name": "Chandigarh" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", "name": "300m from Naini Lake & Promenade", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Spacious 4-Bedded Family Suites", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24x7 Instant Hot Water Geysers", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "High-Speed Fiber WiFi Coverage", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "100% Inverter & Generator Power Backup", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Fresh In-Room Dining & Breakfast", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Scenic Mountain & Pine Ridge Balconies", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24x7 Front Desk & Local Travel Assistance", "value": true },
    ],
    // Link Sister Concerns to bolster Knowledge Graph entity cluster
    memberOf: HOTEL_DATA.sisterProperties.map((prop) => ({
      "@type": "Hotel",
      name: prop.name,
      url: prop.url,
      description: prop.description,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    review: HOTEL_DATA.reviews.map((rev) => ({
      "@type": "Review",
      author: { "@type": "Person", "name": rev.author },
      reviewRating: { "@type": "Rating", "ratingValue": rev.rating, "bestRating": "5" },
      reviewBody: rev.reviewText,
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: HOTEL_DATA.name,
    alternateName: [
      "Hotel Vikrant",
      "Vikrant Hotel Nainital",
      "Hotel Vikrant Mall Road Nainital",
    ],
    publisher: { "@id": `${baseUrl}/#hotel` },
  };

  // Route-Specific Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOTEL_DATA.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl}/about/#webpage`,
    url: `${baseUrl}/about/`,
    name: "About Us | Heritage Family Hospitality on Zoo Road Nainital",
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: { "@id": `${baseUrl}/#hotel` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aeo-answer-block", "h1", "h2"],
    },
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${baseUrl}/contact/#webpage`,
    url: `${baseUrl}/contact/`,
    name: "Contact Front Desk & Directions | Hotel Vikrant Nainital",
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: { "@id": `${baseUrl}/#hotel` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aeo-answer-block", "h1", "h2"],
    },
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${baseUrl}/gallery/#webpage`,
    url: `${baseUrl}/gallery/`,
    name: "Photo Gallery | Hotel Vikrant Nainital",
    isPartOf: { "@id": `${baseUrl}/#website` },
    publisher: { "@id": `${baseUrl}/#hotel` },
    image: HOTEL_DATA.galleryImages.map((img) => `${baseUrl}${img.src}`),
  };

  // Dedicated HotelRoom schemas (Strictly avoiding Product schema per hospitality guidelines)
  const hotelRoomsSchema = {
    "@context": "https://schema.org",
    "@graph": HOTEL_DATA.rooms.map((room) => ({
      "@type": "HotelRoom",
      "@id": `${baseUrl}/rooms/#${room.id}`,
      name: room.name,
      description: room.description,
      occupancy: {
        "@type": "QuantitativeValue",
        value: room.id === "family-suite" ? 6 : 3,
        description: room.occupancy,
      },
      bed: {
        "@type": "BedDetails",
        numberOfBeds: room.id === "family-suite" ? 2 : 1,
        typeOfBed: room.bedConfig,
      },
      floorSize: {
        "@type": "QuantitativeValue",
        value: room.id === "family-suite" ? 380 : 220,
        unitCode: "FTK",
      },
      amenityFeature: room.amenities.map((amenity) => ({
        "@type": "LocationFeatureSpecification",
        name: amenity,
        value: true,
      })),
      containedInPlace: { "@id": `${baseUrl}/#hotel` },
    })),
  };

  const breadcrumbsSchema =
    breadcrumbItems && breadcrumbItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url.endsWith("/") || item.url.includes("#") ? item.url : `${item.url}/`,
          })),
        }
      : null;

  // OWASP XSS defense: safely escape '<' in JSON embedded inside <script> tags
  const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <>
      {/* 1. Global Baseline Schemas for Layout */}
      {(type === "layout" || includeHotelSchema) && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJson(hotelSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJson(websiteSchema) }}
          />
        </>
      )}

      {/* 2. Route-Specific Schemas */}
      {type === "home" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(faqSchema) }}
        />
      )}

      {type === "about" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(aboutSchema) }}
        />
      )}

      {type === "rooms" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(hotelRoomsSchema) }}
        />
      )}

      {type === "contact" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(contactSchema) }}
        />
      )}

      {type === "gallery" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(gallerySchema) }}
        />
      )}

      {/* 3. Universal BreadcrumbList Schema */}
      {breadcrumbsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbsSchema) }}
        />
      )}
    </>
  );
}
