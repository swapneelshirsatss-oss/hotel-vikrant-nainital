import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, Heart, Sparkles, Coffee, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Heritage Family Hospitality on Zoo Road Nainital",
  description:
    "Discover Hotel Vikrant Nainital. Peaceful family-friendly accommodation on Zoo Road, Upper Mall Road, 300m from Naini Lake. Warm Kumaoni hospitality, clean mountain rooms, and fresh in-room dining.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/about`,
  },
  openGraph: {
    title: "About Hotel Vikrant Nainital | 300m From Naini Lake",
    description: "Learn about Hotel Vikrant, our family stay ethos, peaceful Zoo Road location, and warm Himalayan hospitality in Nainital.",
    url: `${HOTEL_DATA.websiteUrl}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: HOTEL_DATA.websiteUrl },
    { name: "About Us", url: `${HOTEL_DATA.websiteUrl}/about` },
  ];

  return (
    <>
      <JsonLd type="about" breadcrumbItems={breadcrumbItems} />

      {/* Hero Header */}
      <section className="relative py-20 sm:py-24 bg-[#5B3A29] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_8038.webp"
            alt="Hotel Vikrant building exterior"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Our Himalayan Story
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Warm Family Hospitality in the Heart of Nainital
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            A quiet sanctuary just 300 meters from Naini Lake, dedicated to comfortable family holidays, scenic mountain views, and authentic home-style care.
          </p>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-premium-lg border-4 border-white">
                <Image
                  src="/images/gallery/IMG_8044.webp"
                  alt="Deluxe Room at Hotel Vikrant Nainital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-xs border-2 border-white">
                  <Image
                    src="/images/gallery/IMG_8036.webp"
                    alt="Mountain Balcony Panorama"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-xs border-2 border-white">
                  <Image
                    src="/images/gallery/IMG_7954.webp"
                    alt="Lobby reception desk"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full">
                The Hotel Vikrant Philosophy
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5B3A29] leading-tight">
                Crafted for Travelers Who Value Quiet Rest and Honest Care
              </h2>

              <p className="text-stone-700 text-sm leading-relaxed">
                Finding the right balance in Nainital can often be difficult: stay directly on the busy Mall Road and contend with honking taxis and late-night crowds, or stay far up the ridges and endure exhausting uphill climbs after every lakeside outing.
              </p>

              <p className="text-stone-700 text-sm leading-relaxed">
                <strong>Hotel Vikrant solves this dilemma perfectly.</strong> Located on Zoo Road just above Upper Mall Road in Tallital, our hotel sits in an elevated, peaceful residential enclave only <strong>300 meters from Naini Lake</strong>. You can walk down to the boat jetty, cafes, and markets in four minutes, yet return to silent pine-scented nights.
              </p>

              <p className="text-stone-700 text-sm leading-relaxed">
                We take immense pride in looking after families with children, elderly parents, and visiting groups. Our spacious <strong>4-Bedded Family Suites</strong> ensure everyone stays together comfortably, while our prompt <strong>in-room dining service</strong> serves steaming hot parathas, freshly brewed tea, and comforting North Indian dinners without you having to venture out in chilly mountain evenings.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5D4B]" />
                  <span>Family-Owned Hospitality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5D4B]" />
                  <span>24×7 On-site Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5D4B]" />
                  <span>Fresh Home-Cooked Food</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5D4B]" />
                  <span>Sightseeing & Taxi Guidance</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/rooms"
                  className="px-6 py-3 rounded-full bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs shadow-gold-glow inline-flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <span>Explore Rooms & Rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 transition-colors"
                >
                  <span>Contact Host</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Bento */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
              What We Promise Every Guest
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm">
              Rooted in trust, clean mountain living, and straightforward hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5B3A29] mb-4 shadow-2xs">
                <Sparkles className="w-5 h-5 text-[#2E5D4B]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#5B3A29]">Spotless Cleanliness</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Daily room sanitation, freshly laundered linens, and sanitized private bathrooms with individual geysers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5B3A29] mb-4 shadow-2xs">
                <Coffee className="w-5 h-5 text-[#D4A437]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#5B3A29]">Home Comfort Meals</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Freshly cooked pure vegetarian food and steaming ginger tea brought warm to your room whenever you need it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5B3A29] mb-4 shadow-2xs">
                <Users className="w-5 h-5 text-[#5B3A29]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#5B3A29]">Family-First Ethos</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Large 4-bed family suites designed specifically so parents, kids, and elders enjoy shared comfort under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5B3A29] mb-4 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#2E5D4B]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#5B3A29]">Transparent Pricing</h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Zero hidden charges, zero OTA surge markup, and direct booking guarantees for guaranteed peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
