import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Car,
  Landmark,
  MessageCircle,
  Phone,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Nainital Travel Guides, Road Trips & Itineraries",
  description:
    "Expert Nainital travel guides by Hotel Vikrant: Delhi road trip route & tolls, Kathgodam taxi fare, Kainchi Dham darshan timings, and 3-day family sightseeing itinerary.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/guides/`,
  },
  openGraph: {
    title: "Nainital Travel Guides, Road Trips & Itineraries | Hotel Vikrant",
    description:
      "Curated local travel advice: Delhi to Nainital drive, Kathgodam hill transit, Kainchi Dham Ashram guide, and family sightseeing itineraries.",
    url: `${HOTEL_DATA.websiteUrl}/guides/`,
    siteName: "Hotel Vikrant Nainital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/IMG_8038.webp",
        width: 1200,
        height: 800,
        alt: "Hotel Vikrant Nainital Travel Guides Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nainital Travel Guides & Itineraries | Hotel Vikrant",
    description:
      "Expert local travel guides for Delhi road trip, Kathgodam taxi transit, Kainchi Dham, and family sightseeing.",
    images: ["/images/gallery/IMG_8038.webp"],
  },
};

export default function GuidesHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Travel Guides", url: `${HOTEL_DATA.websiteUrl}/guides/` },
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    "Road Trip & Transit": <Car className="w-3.5 h-3.5" />,
    "Spiritual & Heritage": <Landmark className="w-3.5 h-3.5" />,
    "Itineraries & Planning": <Compass className="w-3.5 h-3.5" />,
  };

  return (
    <>
      <JsonLd type="guides-hub" breadcrumbItems={breadcrumbItems} />

      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_8038.webp"
            alt="Scenic Nainital Pine Ridges"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Local Kumaon Travel Desk</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Nainital Travel Guides &amp; Itineraries
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto leading-relaxed">
            Insider route guides, transit schedules, and curated family sightseeing plans written by the local hosts at Hotel Vikrant on Zoo Road, Tallital.
          </p>
        </div>
      </section>

      {/* AEO Direct Answer Block for AI Search & Featured Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aeo-answer-block bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Direct Answer:</strong> The Hotel Vikrant Nainital Travel Guides provide verified, ground-truth local travel itineraries, road trip navigation routes (Delhi to Nainital via NE-3 &amp; NH-9), train schedules from Kathgodam (34 km), and spiritual visitor guides for Kainchi Dham Neem Karoli Baba Ashram (18 km), helping families and couples explore Nainital effortlessly from our peaceful Zoo Road location 300m from Naini Lake.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Cards Listing */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2E5D4B] block mb-1">
                Authoritative Travel Articles
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#5B3A29]">
                Featured Travel Guides
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md">
              Real travel timings, taxi costs, toll details, and local safety tips to plan a smooth Himalayan holiday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HOTEL_DATA.guides.map((guide) => (
              <article
                key={guide.slug}
                className="bg-white rounded-3xl border border-[#5B3A29]/15 shadow-premium overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Hero Thumbnail */}
                  <div className="relative h-60 sm:h-72 bg-stone-100 overflow-hidden">
                    <Image
                      src={guide.heroImage}
                      alt={guide.heroAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#5B3A29]/90 px-3 py-1 rounded-full backdrop-blur-xs">
                        {categoryIcons[guide.category]}
                        <span>{guide.category}</span>
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-[#F4E6D2] text-xs px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4A437]" />
                      <span>{guide.readingTime}</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#2E5D4B]" />
                        <span>Updated Sept 2026</span>
                      </span>
                      <span>•</span>
                      <span>By {guide.author}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B3A29] group-hover:text-[#2E5D4B] transition-colors leading-snug">
                      <Link href={`/guides/${guide.slug}/`}>
                        {guide.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {guide.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    href={`/guides/${guide.slug}/`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5B3A29] group-hover:text-[#2E5D4B] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 text-[#D4A437] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-stone-400 font-medium">
                    Verified Ground Truth
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Promotion Strip */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-t border-[#5B3A29]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B3A29] text-[#D4A437] text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Stay 300m From Naini Lake on Zoo Road</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#5B3A29]">
            Planning Your Trip? Book Direct With Hotel Vikrant
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Avoid middleman OTA commissions. Book directly on WhatsApp to enjoy a 15% discount, priority mountain-view room allocation, and free early check-in assistance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={HOTEL_DATA.bookingEngineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Direct & Save 15%</span>
            </a>

            <a
              href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                "Hi Hotel Vikrant! I was reading your Nainital travel guides and would like to check room rates and availability."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-whatsapp-glow flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Concierge</span>
            </a>

            <a
              href={HOTEL_DATA.phoneTel}
              className="px-6 py-3.5 rounded-full bg-[#5B3A29] hover:bg-[#42281A] text-white font-bold text-xs shadow-premium flex items-center gap-2 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#D4A437]" />
              <span>Call Host: {HOTEL_DATA.phoneFormatted}</span>
            </a>

            <Link
              href="/rooms/"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 transition-colors"
            >
              <span>View Rooms &amp; Suites</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
