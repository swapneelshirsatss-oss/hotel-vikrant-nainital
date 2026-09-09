"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("Deluxe Mountain View Room");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // OWASP Anti-Spam: Bot caught in hidden honeypot trap
    if (honeypot.trim() !== "") {
      setSubmitted(true);
      return;
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanPhone = phone.trim().slice(0, 25);
    const cleanEmail = email.trim().slice(0, 100);
    const cleanDates = dates.trim().slice(0, 60);
    const cleanGuests = guests.trim().slice(0, 50);
    const cleanMessage = message.trim().slice(0, 500);

    const query = `*Direct Booking Inquiry - Hotel Vikrant Nainital*
----------------------------------------
*Name:* ${cleanName}
*Phone:* ${cleanPhone}
*Email:* ${cleanEmail || "N/A"}
*Room:* ${roomType}
*Dates:* ${cleanDates || "Flexible"}
*Guests:* ${cleanGuests}
*Message:* ${cleanMessage || "Interested in booking rates"}
----------------------------------------`;
    window.open(`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#5B3A29]/15 shadow-premium">
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
        {/* Anti-spam honeypot (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="vikrant_lead_check"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-[#5B3A29] mb-1">Your Full Name *</label>
            <input
              type="text"
              required
              maxLength={100}
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
              maxLength={25}
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
              maxLength={100}
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
              maxLength={60}
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
              maxLength={50}
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
            maxLength={500}
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
  );
}
