import React from "react";
import type { Metadata } from "next";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Reservation Policy | Hotel Vikrant Nainital",
  description: "Reservation terms, check-in policies, and cancellation guidelines for Hotel Vikrant Nainital.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbItems = [
    { name: "Home", url: HOTEL_DATA.websiteUrl },
    { name: "Terms & Conditions", url: `${HOTEL_DATA.websiteUrl}/terms` },
  ];

  return (
    <>
      <JsonLd breadcrumbItems={breadcrumbItems} />
      <div className="py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#5B3A29]/15 shadow-premium space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E5D4B]">Guest Terms</span>
          <h1 className="font-serif text-3xl font-bold text-[#5B3A29]">Terms & Conditions</h1>
          <p className="text-stone-500 text-xs">Last updated: September 2026</p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">1. Check-In & Check-Out Timings</h2>
          <p>
            Standard check-in time is 12:00 PM (Noon) and standard check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability on the date of travel and may be requested in advance via our WhatsApp concierge.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">2. Guest Identification</h2>
          <p>
            As mandated by Uttarakhand police regulations, all adult guests must present valid government photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) at the time of check-in. PAN cards are not accepted as valid identity proof for lodging.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">3. Direct Booking & Payment</h2>
          <p>
            Direct reservations are confirmed upon mutual agreement via WhatsApp or phone. We accept payment via Cash, UPI (Google Pay, PhonePe, Paytm), and major Net Banking transfer channels.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">4. In-Room Dining & Room Etiquette</h2>
          <p>
            Hotel Vikrant provides dedicated In-Room Dining service for our staying guests between 7:30 AM and 10:30 PM. We strive to maintain a peaceful, family-friendly mountain ambiance, and kindly request all guests to respect quiet hours after 10:30 PM.
          </p>
        </div>
      </div>
    </>
  );
}
