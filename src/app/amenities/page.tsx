import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Flame,
  Wifi,
  Zap,
  MapPin,
  Sparkles,
  Clock,
  Coffee,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Amenities & In-Room Dining | Hotel Vikrant Nainital",
  description:
    "Explore guest amenities at Hotel Vikrant Nainital. Fresh home-cooked in-room dining, 24x7 hot water geysers, 100% power backup, high-speed WiFi, and 300m walking distance to Naini Lake.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/amenities/`,
  },
  openGraph: {
    title: "Amenities & In-Room Dining | Hotel Vikrant Nainital",
    description: "In-room dining with home-cooked comfort food, 24x7 hot water geysers, power backup, and fast WiFi on Zoo Road, Nainital.",
    url: `${HOTEL_DATA.websiteUrl}/amenities/`,
  },
};

export default function AmenitiesPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Amenities & Dining", url: `${HOTEL_DATA.websiteUrl}/amenities/` },
  ];

  return (
    <>
      <JsonLd type="amenities" breadcrumbItems={breadcrumbItems} />

      {/* Header Banner */}
      <section className="relative py-20 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_7998.webp"
            alt="In-room dining setup"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Guest Comforts & Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Amenities & Fresh In-Room Dining
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            From piping-hot home-cooked meals served straight to your room to 24×7 geyser hot showers and high-speed fiber Wi-Fi.
          </p>
        </div>
      </section>

      {/* AEO Direct Answer Block for AI Search & Featured Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aeo-answer-block bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Direct Answer:</strong> Guest amenities at Hotel Vikrant Nainital include dedicated in-room dining serving freshly prepared pure vegetarian home-cooked meals, independent 24×7 electric hot water geysers in all private bathrooms, 100% power backup (inverter and generator), and high-speed fiber Wi-Fi. The hotel is situated 300 meters (4-minute walk) from Naini Lake on Zoo Road.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT: IN-ROOM DINING (Clarified: In-Room Dining, NOT a public restaurant) */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-premium-lg border-4 border-[#FAF5ED] bg-stone-100">
                <Image
                  src="/images/gallery/IMG_8001.webp"
                  alt="Fresh home-cooked breakfast served at Hotel Vikrant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#5B3A29] text-white p-4 rounded-2xl shadow-xl hidden sm:block max-w-[220px]">
                <span className="text-xs font-serif font-bold block text-[#D4A437]">Pure Home-Cooked</span>
                <span className="text-[11px] text-[#F4E6D2]/90 mt-0.5 block">Made fresh to order for in-house hotel guests</span>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5ED] border border-[#5B3A29]/15 text-xs font-bold text-[#5B3A29]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#2E5D4B]" />
                <span>Dedicated In-Room Dining Service</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5B3A29] leading-tight">
                Fresh, Comforting Home Meals Delivered Warm to Your Room
              </h2>

              <p className="text-stone-700 text-sm leading-relaxed">
                At Hotel Vikrant, we prioritize peaceful family comfort. <strong>We do not operate a noisy public restaurant.</strong> Instead, our dedicated in-house kitchen prepares wholesome, freshly cooked North Indian and Kumaoni vegetarian meals exclusively for our staying guests.
              </p>

              <p className="text-stone-700 text-sm leading-relaxed">
                After a refreshing lakeside walk or sightseeing trip, you don&apos;t have to hunt for crowded restaurants in the freezing mountain air. Simply order from our room service menu, and our team will deliver steaming hot food straight to your bedside.
              </p>

              {/* Sample Dining Highlights */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10 flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-[#D4A437] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Morning Himalayan Breakfast</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Piping-hot stuffed aloo/gobhi parathas with fresh curd & pickle, butter toast, poha, and fragrant ginger-cardamom chai.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10 flex items-start gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-[#2E5D4B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Wholesome Lunch & Dinner Thali</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Home-style yellow dal tadka, shahi paneer, seasonal vegetables, steaming jeera rice, and freshly rolled hot rotis.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10 flex items-start gap-3">
                  <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Child & Elder Friendly Preparation</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Mild spice levels, custom porridge/khichdi on request, and warm milk for kids and senior family members.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE AMENITIES LISTING */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
              Standard Across Every Room
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B3A29]">
              Everything You Need for a Seamless Mountain Stay
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Thoughtfully engineered facilities so you experience genuine comfort and zero hill travel hassles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amenity 1 */}
            <div className="p-7 rounded-3xl bg-white border border-[#5B3A29]/15 shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center text-[#D4A437] mb-5">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B3A29]">24×7 Geyser Hot Water</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Every private washroom has its own dedicated high-capacity electric geyser. No timed hot water restrictions—take a steaming hot shower whenever you return from the lake.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#2E5D4B] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Available 24 Hours
              </div>
            </div>

            {/* Amenity 2 */}
            <div className="p-7 rounded-3xl bg-white border border-[#5B3A29]/15 shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center text-[#5B3A29] mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B3A29]">100% Power Backup</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Mountain weather can occasionally cause local power flickers. Our silent inverters and backup systems ensure continuous room illumination, mobile charging, and WiFi.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#2E5D4B] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Inverter & Generator Backed
              </div>
            </div>

            {/* Amenity 3 */}
            <div className="p-7 rounded-3xl bg-white border border-[#5B3A29]/15 shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center text-[#2E5D4B] mb-5">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B3A29]">High-Speed Fiber Wi-Fi</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Stay in touch with friends and family, stream movies in the evening, or attend remote meetings smoothly with reliable high-speed fiber internet throughout the property.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#2E5D4B] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Fast & Free Connection
              </div>
            </div>

            {/* Amenity 4 */}
            <div className="p-7 rounded-3xl bg-white border border-[#5B3A29]/15 shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center text-[#2E5D4B] mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B3A29]">300m Walk to Naini Lake</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Avoid the stress of finding expensive parking in town. Walk down in 4 minutes to boating, lakeside cafes, Naina Devi Temple strolls, and the Tallital market.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#2E5D4B] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> 4-Minute Gentle Walk
              </div>
            </div>

            {/* Amenity 5 */}
            <div className="p-7 rounded-3xl bg-white border border-[#5B3A29]/15 shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center text-[#5B3A29] mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B3A29]">Sanitized Daily Housekeeping</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                We maintain rigorous hygiene standards with daily floor sanitization, freshly washed white linens, fresh bath towels, and sanitized bathroom fixtures.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#2E5D4B] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Spotless Cleanliness
              </div>
            </div>

            {/* Amenity 6 */}
            <div className="p-7 rounded-3xl bg-white border border-[#5B3A29]/15 shadow-premium">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center text-[#D4A437] mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#5B3A29]">24×7 Reception & Travel Desk</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Whether arriving late at night or needing an early morning taxi to Kathgodam railway station, our front desk team is always present to assist you.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#2E5D4B] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Round-the-Clock Care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-stone-200/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
            Book Your Stay With Full Family Amenities
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm">
            Enjoy 15% discount on direct bookings with instant WhatsApp confirmation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/rooms/"
              className="px-6 py-3 rounded-full bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs shadow-gold-glow"
            >
              View Deluxe Rooms & Family Suites
            </Link>
            <a
              href={HOTEL_DATA.phoneTel}
              className="px-6 py-3 rounded-full bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20"
            >
              Call Front Desk: {HOTEL_DATA.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
