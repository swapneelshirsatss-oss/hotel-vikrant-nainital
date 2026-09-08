import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Navigation,
  Compass,
  Trees,
  Landmark,
  MountainSnow,
  Footprints,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";
import AttractionCard from "@/components/AttractionCard";

export const metadata: Metadata = {
  title: "Nearby Attractions & Sightseeing Guide | Hotel Vikrant Nainital",
  description:
    "Explore top attractions near Hotel Vikrant Nainital. Naini Lake (300m), Mall Road, High Altitude Zoo on Zoo Road, Naina Devi Temple, and Snow View Point. Plan your Nainital sightseeing.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/attractions`,
  },
  openGraph: {
    title: "Nearby Attractions | Hotel Vikrant Nainital",
    description: "Sightseeing guide for Naini Lake, Mall Road, High Altitude Zoo, and Himalayan viewpoints near Hotel Vikrant.",
    url: `${HOTEL_DATA.websiteUrl}/attractions`,
  },
};

export default function AttractionsPage() {
  const breadcrumbItems = [
    { name: "Home", url: HOTEL_DATA.websiteUrl },
    { name: "Nearby Attractions", url: `${HOTEL_DATA.websiteUrl}/attractions` },
  ];

  return (
    <>
      <JsonLd type="attractions" breadcrumbItems={breadcrumbItems} />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_7951.webp"
            alt="Naini Lake boating view"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Local Nainital Sightseeing
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Nearby Attractions & Lake Highlights
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            Stay only 300 meters from Naini Lake. Walk to boats, lakeside promenades, and the Zoo Road wildlife sanctuary with ease.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
              Distances From Hotel Vikrant
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B3A29]">
              The Best of Nainital Right at Your Doorstep
            </h2>
            <p className="mt-3 text-sm text-stone-600">
              Save precious holiday time by staying close to all must-see landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOTEL_DATA.attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Host Insider Tips Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
              Host Advice
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
              Local Travel Tips From Your Hotel Vikrant Hosts
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm">
              Insider recommendations to make the most of your Nainital visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <h3 className="font-serif font-bold text-base text-[#5B3A29] mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#2E5D4B]" />
                Best Time for Boating on Naini Lake
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Early mornings (8:30 AM to 10:30 AM) and late afternoons (4:00 PM to 5:30 PM) offer calm waters, pleasant golden light on the hills, and shorter boat queues at Tallital jetty.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <h3 className="font-serif font-bold text-base text-[#5B3A29] mb-2 flex items-center gap-2">
                <Trees className="w-4 h-4 text-[#2E5D4B]" />
                Visiting High Altitude Zoo (Right on Zoo Road)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Because Hotel Vikrant is directly on Zoo Road, you can walk or catch a 3-minute shuttle straight to the zoo gates. Arrive by 10 AM to spot the Snow Leopard and Red Pandas during feeding hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <h3 className="font-serif font-bold text-base text-[#5B3A29] mb-2 flex items-center gap-2">
                <MountainSnow className="w-4 h-4 text-[#D4A437]" />
                Snow View Point & Himalayan Peaks
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                For the clearest views of Trishul and Nanda Devi peaks, head to Snow View before 11 AM when mountain skies are at their clearest before clouds roll in over the Kumaon range.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <h3 className="font-serif font-bold text-base text-[#5B3A29] mb-2 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#5B3A29]" />
                Evening Strolls on Mall Road
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From 6:00 PM to 8:30 PM, vehicles are restricted on Mall Road, creating a delightful pedestrian-only lakeside walk. Perfect for souvenir shopping, trying hot momos, and enjoying fresh bakeries.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center bg-[#FAF5ED] p-6 rounded-2xl border border-[#5B3A29]/10 text-xs text-[#5B3A29]">
            <p className="font-semibold">
              Need assistance booking a day tour or local hill taxi to Bhimtal, Sattal, or Mukteshwar?
            </p>
            <p className="text-stone-600 mt-1">
              Speak directly with our front desk team during your stay for reliable driver recommendations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
