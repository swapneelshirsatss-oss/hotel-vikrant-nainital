import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";
import TransitMatrix from "@/components/TransitMatrix";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Front Desk & Directions to Zoo Road | Hotel Vikrant Nainital",
  description:
    "Get in touch with Hotel Vikrant Nainital. Located on Zoo Road, 300m from Naini Lake. Direct booking inquiries, WhatsApp rates, driving directions, and local travel advice.",
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/contact/`,
  },
  openGraph: {
    title: "Contact Front Desk & Directions | Hotel Vikrant Nainital",
    description:
      "Direct reservations, WhatsApp concierge, and transit directions for Hotel Vikrant on Zoo Road, Tallital, Nainital. Save 15% booking direct.",
    url: `${HOTEL_DATA.websiteUrl}/contact/`,
    siteName: "Hotel Vikrant Nainital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/IMG_8040.webp",
        width: 1200,
        height: 800,
        alt: "Hotel Vikrant Exterior Road Entrance on Zoo Road",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Directions | Hotel Vikrant Nainital",
    description:
      "Direct front desk assistance, 24x7 phone, WhatsApp rates, and driving routes to Hotel Vikrant, 300m from Naini Lake.",
    images: ["/images/gallery/IMG_8040.webp"],
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Contact & Directions", url: `${HOTEL_DATA.websiteUrl}/contact/` },
  ];

  return (
    <>
      <JsonLd type="contact" breadcrumbItems={breadcrumbItems} />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_8040.webp"
            alt="Hotel Vikrant exterior road access"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Contact & Directions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            Located on Zoo Road, Upper Mall Road, Nainital. Reach out for direct room reservations, directions, or local travel advice.
          </p>
        </div>
      </section>

      {/* AEO Direct Answer Block for AI Search & Featured Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aeo-answer-block bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Direct Answer:</strong> Hotel Vikrant is located on Zoo Road, Upper Mall Road, Tallital, Nainital (PIN 263001), approximately 300 meters (4-minute walk) from Naini Lake and 400 meters from Tallital Bus Stand. The front desk operates 24/7 and can be reached directly via phone or WhatsApp at <strong>+91 82795 61741</strong> for zero-commission direct bookings and local route guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Reachability */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2E5D4B] block mb-1">
                  Connect Directly With Us
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
                  Hotel Vikrant Front Desk
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  We are available 24 hours a day to answer queries, reserve rooms, or guide you up Zoo Road upon arrival.
                </p>
              </div>

              {/* Direct Touch Points */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <MapPin className="w-5 h-5 text-[#2E5D4B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Canonical Address</h3>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{HOTEL_DATA.fullAddress}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <a
                        href={HOTEL_DATA.googleMapsCidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2E5D4B] hover:underline"
                      >
                        <span>Official Google Maps Place (CID: {HOTEL_DATA.googleMapsCid})</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <Phone className="w-5 h-5 text-[#D4A437]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">24×7 Direct Phone (Click-to-Call)</h3>
                    <a
                      href={HOTEL_DATA.phoneTel}
                      className="text-xs sm:text-sm font-bold text-stone-900 hover:text-[#5B3A29] block mt-0.5"
                    >
                      {HOTEL_DATA.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-stone-500">Universal E.164 front desk connection</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">WhatsApp Concierge</h3>
                    <a
                      href={HOTEL_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-[#128C7E] hover:underline block mt-0.5"
                    >
                      Chat on WhatsApp (+91 82795 61741)
                    </a>
                    <span className="text-[11px] text-stone-500">Fast response for room photos & rates</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <Clock className="w-5 h-5 text-[#5B3A29]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Hours & Policies</h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Front Desk: Open 24 Hours • Check-in: 12:00 PM • Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Travel Directions Accordion */}
              <div className="bg-[#FAF5ED] p-5 rounded-2xl border border-[#5B3A29]/10 space-y-3 text-xs text-stone-700">
                <h4 className="font-serif font-bold text-sm text-[#5B3A29] flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#2E5D4B]" /> How to Reach Hotel Vikrant
                </h4>
                <ul className="space-y-2 text-stone-600">
                  <li>
                    <strong>From Kathgodam Railway Station (34 km):</strong> Take a shared taxi or private cab to Tallital, Nainital (~1 hr). From Tallital bus stand, walk 400m up Zoo Road.
                  </li>
                  <li>
                    <strong>From Tallital Bus Stand (400m):</strong> Just an easy 5-minute walk up the Zoo Road incline.
                  </li>
                  <li>
                    <strong>From Pantnagar Airport (70 km):</strong> Approximately 2 hours by direct mountain taxi via Haldwani and Kathgodam.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Direct Booking Inquiry Form (Client Component) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-12 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl font-bold text-[#5B3A29]">
              Google Maps Location (Lat: {HOTEL_DATA.coordinates.latitude}, Lng: {HOTEL_DATA.coordinates.longitude})
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Zoo Road, Upper Mall Road, Tallital, Tehsil - Nainital, District - Nainital, Nainital, Uttarakhand - 263001
            </p>
            <div className="mt-2">
              <a
                href={HOTEL_DATA.googleMapsCidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#D4A437] hover:underline font-bold"
              >
                <span>Open in Official Google Maps (CID: {HOTEL_DATA.googleMapsCid})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-premium border-2 border-stone-200">
            <iframe
              title="Hotel Vikrant Nainital Location Map"
              src={HOTEL_DATA.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Embedded Multi-Modal Transit Matrix */}
          <div className="mt-12">
            <TransitMatrix />
          </div>
        </div>
      </section>
    </>
  );
}
