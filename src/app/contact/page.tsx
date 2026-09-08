"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("Deluxe Mountain View Room");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `*Direct Booking Inquiry - Hotel Vikrant Nainital*
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || "N/A"}
*Room:* ${roomType}
*Dates:* ${dates || "Flexible"}
*Guests:* ${guests}
*Message:* ${message || "Interested in booking rates"}
----------------------------------------`;
    window.open(`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(query)}`, "_blank");
    setSubmitted(true);
  };

  const breadcrumbItems = [
    { name: "Home", url: HOTEL_DATA.websiteUrl },
    { name: "Contact & Directions", url: `${HOTEL_DATA.websiteUrl}/contact` },
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
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Hotel Address</h3>
                    <p className="text-xs text-stone-600 mt-0.5">{HOTEL_DATA.fullAddress}</p>
                    <p className="text-[11px] text-[#2E5D4B] font-semibold mt-1">📍 300m From Naini Lake & Tallital Market</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <Phone className="w-5 h-5 text-[#D4A437]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">24×7 Direct Phone</h3>
                    <a
                      href={`tel:${HOTEL_DATA.phone}`}
                      className="text-xs sm:text-sm font-bold text-stone-900 hover:text-[#5B3A29] block mt-0.5"
                    >
                      {HOTEL_DATA.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-stone-500">Instant front desk connection</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#5B3A29]">WhatsApp Concierge</h3>
                    <a
                      href={`https://wa.me/${HOTEL_DATA.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-[#128C7E] hover:underline block mt-0.5"
                    >
                      Chat on WhatsApp (+91 8279561741)
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

            {/* Right: Direct Booking Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#5B3A29]/15 shadow-premium">
              <div className="pb-4 mb-6 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A437] block">
                  Fast Direct Inquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#5B3A29] mt-1">
                  Send a Direct Booking Request
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Skip online agent commissions. Send your details directly to our WhatsApp booking manager.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inquiry sent to WhatsApp! Our team will reply shortly with room confirmation.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs text-stone-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#5B3A29] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#5B3A29] mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#5B3A29] mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#5B3A29] mb-1">Preferred Room Type</label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                    >
                      <option value="Deluxe Mountain View Room">Deluxe Mountain View Room (Couples / 2 Guests)</option>
                      <option value="Spacious 4-Bedded Family Suite">Spacious 4-Bedded Family Suite (Families / 4 Guests)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#5B3A29] mb-1">Planned Travel Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. 15th to 18th Oct"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#5B3A29] mb-1">Total Guests</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Adults, 1 Child"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#5B3A29] mb-1">Message or Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Early check-in request, taxi assistance from Kathgodam, extra bedding..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
                  />
                </div>

                <div className="p-3 bg-[#FAF5ED] rounded-xl border border-[#5B3A29]/10 text-[11px] text-[#5B3A29] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E5D4B] shrink-0" />
                  <span>Direct Booking Guarantee: 15% discount automatically applied to your direct quote.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-whatsapp-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Direct Inquiry on WhatsApp</span>
                </button>
              </form>
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
              Zoo Road, Upper Mall Road, Tallital, Nainital
            </p>
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
        </div>
      </section>
    </>
  );
}
