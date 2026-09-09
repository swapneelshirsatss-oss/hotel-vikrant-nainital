import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Deluxe Rooms & 4-Bed Family Suites | Hotel Vikrant Nainital",
  description:
    "Explore our Deluxe Mountain View Rooms and Spacious 4-Bedded Family Suites in Nainital. Equipped with 24x7 hot water geysers, high-speed WiFi, and fresh in-room dining. Book direct & save 15%.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/rooms/`,
  },
  openGraph: {
    title: "Rooms & Suites | Hotel Vikrant Nainital Near Naini Lake",
    description: "Comfortable family suites & deluxe mountain rooms on Zoo Road, Nainital. 300m from Naini Lake. Direct booking discounts.",
    url: `${HOTEL_DATA.websiteUrl}/rooms/`,
  },
};

export default function RoomsPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Rooms & Suites", url: `${HOTEL_DATA.websiteUrl}/rooms/` },
  ];

  return (
    <>
      <JsonLd type="rooms" breadcrumbItems={breadcrumbItems} />

      {/* Header Banner */}
      <section className="relative py-20 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_8048.webp"
            alt="Family Suite Bedding"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Himalayan Lodging
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Deluxe Rooms & 4-Bedded Family Suites
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            Clean, sunlit rooms tailored for couples and families. Featuring panoramic mountain views, 24×7 geyser hot water, and attentive in-room food delivery.
          </p>
        </div>
      </section>

      {/* AEO Direct Answer Block for AI Search & Featured Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aeo-answer-block bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Direct Answer:</strong> Hotel Vikrant Nainital offers two curated room categories on Zoo Road: (1) Deluxe Mountain View Rooms (220 sq. ft., 1 King/Queen bed, ideal for 2 adults + 1 child) and (2) Spacious 4-Bedded Family Suites (380 sq. ft., 2 large double beds, sofa seating, and family dining table for 4 adults + 2 children). All rooms include attached bathrooms with individual 24×7 geyser hot water, 100% power backup, high-speed fiber Wi-Fi, and fresh in-room dining.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Booking Assurance Bar */}
      <div className="bg-[#FAF5ED] border-b border-[#5B3A29]/15 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B3A29]">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#2E5D4B]" />
            <span>Why Book Direct? Save 10%–15% vs OTAs • Best Mountain View Allocation • Free Early Check-in Priority</span>
          </div>
          <a
            href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
              "Hi Hotel Vikrant! I am checking room rates for an upcoming visit to Nainital."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#2E5D4B] hover:underline flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
            Check Live WhatsApp Rates
          </a>
        </div>
      </div>

      {/* Detailed Room Cards */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {HOTEL_DATA.rooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl border border-[#5B3A29]/15 shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Photo Showcase */}
              <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] bg-stone-100">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx === 0}
                />
                <div className="absolute top-4 left-4 bg-[#5B3A29]/90 text-[#F4E6D2] text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  {room.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1">
                  {room.images.slice(1, 5).map((img, i) => (
                    <div key={i} className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-white/80 shadow-xs">
                      <Image src={img} alt="Thumbnail" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details & Specs */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
                      {room.name}
                    </h2>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#5B3A29] bg-[#FAF5ED] border border-[#5B3A29]/15 px-2.5 py-0.5 rounded-full mb-1">
                        Seasonal Rates
                      </span>
                      <span className="text-[11px] text-[#2E5D4B] font-bold block">
                        Save 10%–15% Direct
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10 text-xs text-stone-700 mb-6">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Occupancy</span>
                      <span className="font-semibold text-[#5B3A29]">{room.occupancy}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Bed Config</span>
                      <span className="font-semibold text-[#5B3A29]">{room.bedConfig}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">Room Size</span>
                      <span className="font-semibold text-[#5B3A29]">{room.size}</span>
                    </div>
                  </div>

                  {/* Full Amenities Checklist */}
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#5B3A29]">
                      Room Amenities & Inclusions
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {room.amenities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5D4B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Booking Actions */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Hotel Vikrant! I would like to book the *${room.name}* for an upcoming stay. Please share availability and direct booking rates.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-5 rounded-xl bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book on WhatsApp (15% Off)</span>
                  </a>

                  <a
                    href={HOTEL_DATA.phoneTel}
                    className="py-3.5 px-5 rounded-xl bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#2E5D4B]" />
                    <span>Call Front Desk</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
              Compare Room Categories
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm">
              Choose the layout that best fits your family size and travel preferences.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border-collapse">
              <thead>
                <tr className="border-b-2 border-[#5B3A29] bg-[#FAF8F5]">
                  <th className="p-3.5 font-serif font-bold text-[#5B3A29]">Feature</th>
                  <th className="p-3.5 font-serif font-bold text-[#5B3A29]">Deluxe Mountain View</th>
                  <th className="p-3.5 font-serif font-bold text-[#2E5D4B]">Spacious 4-Bed Family Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">Recommended For</td>
                  <td className="p-3.5">Couples, solo guests, 2 adults</td>
                  <td className="p-3.5 font-semibold text-[#2E5D4B]">Families with kids, groups (4 adults)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">Bed Configuration</td>
                  <td className="p-3.5">1 King / Queen Bed</td>
                  <td className="p-3.5">2 Large Double Beds (4-Bedded)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">Approx. Room Size</td>
                  <td className="p-3.5">220 sq. ft.</td>
                  <td className="p-3.5 font-semibold">380 sq. ft. (Expansive)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">24x7 Hot Geyser Water</td>
                  <td className="p-3.5 text-[#2E5D4B] font-bold">✓ Included</td>
                  <td className="p-3.5 text-[#2E5D4B] font-bold">✓ Included (High Capacity)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">In-Room Dining Service</td>
                  <td className="p-3.5 text-[#2E5D4B] font-bold">✓ Included</td>
                  <td className="p-3.5 text-[#2E5D4B] font-bold">✓ Included (Family Dining Table)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">High-Speed Fiber WiFi</td>
                  <td className="p-3.5 text-[#2E5D4B] font-bold">✓ Included</td>
                  <td className="p-3.5 text-[#2E5D4B] font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-stone-900">Direct Booking Rate</td>
                  <td className="p-3.5 font-bold text-[#2E5D4B]">Seasonal Tariff (Save 10%–15% Direct)</td>
                  <td className="p-3.5 font-bold text-[#2E5D4B]">Seasonal Tariff (Save 10%–15% Direct)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
