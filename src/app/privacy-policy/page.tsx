import React from "react";
import type { Metadata } from "next";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Hotel Vikrant Nainital",
  description: "Privacy policy for Hotel Vikrant Nainital. Learn how we handle guest information and direct reservation data.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Privacy Policy", url: `${HOTEL_DATA.websiteUrl}/privacy-policy/` },
  ];

  return (
    <>
      <JsonLd breadcrumbItems={breadcrumbItems} />
      <div className="py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#5B3A29]/15 shadow-premium space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E5D4B]">Legal & Privacy</span>
          <h1 className="font-serif text-3xl font-bold text-[#5B3A29]">Privacy Policy</h1>
          <p className="text-stone-500 text-xs">Last updated: September 2026</p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">1. Information We Collect</h2>
          <p>
            When you make a direct reservation or contact Hotel Vikrant Nainital via our website, WhatsApp, or telephone, we may collect your name, contact phone number, email address, planned travel dates, guest count, and any specific stay preferences.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">2. How We Use Your Information</h2>
          <p>
            Your information is strictly utilized to process your room booking, provide reservation vouchers, communicate arrival instructions, and assist with your stay in Nainital. We do not sell, rent, or lease your personal data to any third-party marketing entities.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">3. Direct Booking Communications</h2>
          <p>
            By submitting an inquiry via WhatsApp or phone, you agree to receive reservation confirmations and check-in support directly from the Hotel Vikrant front desk team.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#5B3A29] pt-4">4. Contacting Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, you may contact Hotel Vikrant Nainital at Zoo Road, Upper Mall Road, Nainital, Uttarakhand 263001, or via email at {HOTEL_DATA.email}.
          </p>
        </div>
      </div>
    </>
  );
}
