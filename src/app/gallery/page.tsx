import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";
import GalleryViewer from "@/components/GalleryViewer";

export const metadata: Metadata = {
  title: "Real Photo Gallery: Rooms, Balconies & Views | Hotel Vikrant Nainital",
  description:
    "Explore real photos of Hotel Vikrant Nainital. See our Deluxe Mountain View Rooms, 4-Bedded Family Suites, private bathrooms, in-room dining, and scenic pine valley vistas.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/gallery/`,
  },
  openGraph: {
    title: "Photo Gallery | Hotel Vikrant Nainital Near Naini Lake",
    description:
      "Real photography of Deluxe Rooms, 4-Bed Family Suites, mountain balconies, and in-room home dining on Zoo Road, Nainital.",
    url: `${HOTEL_DATA.websiteUrl}/gallery/`,
    siteName: "Hotel Vikrant Nainital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/IMG_8038.webp",
        width: 1200,
        height: 800,
        alt: "Hotel Vikrant Nainital Photo Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Hotel Vikrant Nainital",
    description:
      "Authentic photos of family suites, mountain rooms, and pine-clad hills 300m from Naini Lake.",
    images: ["/images/gallery/IMG_8038.webp"],
  },
};

export default function GalleryPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Photo Gallery", url: `${HOTEL_DATA.websiteUrl}/gallery/` },
  ];

  return (
    <>
      <JsonLd type="gallery" breadcrumbItems={breadcrumbItems} />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_8038.webp"
            alt="Hotel Vikrant"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Real Visual Proof
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Hotel Vikrant Photo Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            Explore authentic photographs of our rooms, private bathrooms, in-room meals, and sweeping views of the Nainital hills.
          </p>
        </div>
      </section>

      {/* AEO Direct Answer Block for AI Search & Featured Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aeo-answer-block bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Visual Overview:</strong> The Hotel Vikrant gallery features authentic, unedited photography of our Deluxe Mountain View Rooms (220 sq. ft.), Spacious 4-Bedded Family Suites (380 sq. ft.), private attached bathrooms with individual geysers, mountain-view balconies overlooking pine ridges, and fresh in-room North Indian dining. All photos reflect verified physical accommodations on Zoo Road, Tallital, Nainital.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Gallery Viewer (Client Component) */}
      <GalleryViewer />
    </>
  );
}
