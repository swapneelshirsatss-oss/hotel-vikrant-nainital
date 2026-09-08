"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Users, Home, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, defaultRoomId }: BookingModalProps) {
  const [selectedRoom, setSelectedRoom] = useState(defaultRoomId || "deluxe-room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [childrenCount, setChildrenCount] = useState("0");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  useEffect(() => {
    if (defaultRoomId) {
      setSelectedRoom(defaultRoomId);
    }
  }, [defaultRoomId]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const roomObj = HOTEL_DATA.rooms.find((r) => r.id === selectedRoom) || HOTEL_DATA.rooms[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Direct Booking Inquiry - Hotel Vikrant Nainital*
----------------------------------------
*Room:* ${roomObj.name}
*Check-in:* ${checkIn || "Flexible"}
*Check-out:* ${checkOut || "Flexible"}
*Guests:* ${adults} Adults, ${childrenCount} Children
*Guest Name:* ${guestName || "Guest"}
*Contact:* ${guestPhone || "Direct WhatsApp"}
----------------------------------------
*Direct Rate Inquiry:* Looking for direct booking rates and confirmation.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-[#5B3A29]/15 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#5B3A29] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#F4E6D2] hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close booking form"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#D4A437] bg-white/10 px-2.5 py-0.5 rounded-full mb-2">
            Direct Reservation Concierge
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Book Direct & Save 15%
          </h2>
          <p className="text-xs text-[#F4E6D2]/90 mt-1">
            Zero booking fees • Best room allocation • Fast 1-click confirmation
          </p>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleWhatsAppBooking} className="p-5 sm:p-6 overflow-y-auto space-y-4 text-stone-800 text-sm">
          {/* Room Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#5B3A29] mb-1.5 flex items-center gap-1.5">
              <Home className="w-4 h-4 text-[#2E5D4B]" />
              Select Preferred Room Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {HOTEL_DATA.rooms.map((room) => (
                <button
                  type="button"
                  key={room.id}
                  onClick={() => setSelectedRoom(room.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedRoom === room.id
                      ? "border-[#5B3A29] bg-[#FAF5ED] ring-2 ring-[#5B3A29]/20"
                      : "border-stone-200 hover:border-stone-300 bg-white"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-[#5B3A29] line-clamp-1">{room.name}</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">{room.occupancy}</div>
                  <div className="text-xs font-bold text-[#2E5D4B] mt-1 flex items-center justify-between">
                    <span>Seasonal Rates</span>
                    <span className="text-[10px] font-semibold text-[#D4A437] bg-white px-1.5 py-0.5 rounded border border-[#5B3A29]/15">Save 15%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dates Selection */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#5B3A29] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2E5D4B]" /> Check-In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29] focus:ring-1 focus:ring-[#5B3A29]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5B3A29] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2E5D4B]" /> Check-Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29] focus:ring-1 focus:ring-[#5B3A29]"
              />
            </div>
          </div>

          {/* Guests Count */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#5B3A29] mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#2E5D4B]" /> Adults (12+ yrs)
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="5+">5+ Adults (Group)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5B3A29] mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#2E5D4B]" /> Children
              </label>
              <select
                value={childrenCount}
                onChange={(e) => setChildrenCount(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3+">3+ Children</option>
              </select>
            </div>
          </div>

          {/* Guest Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#5B3A29] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5B3A29] mb-1">
                WhatsApp Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:border-[#5B3A29]"
              />
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="bg-[#FAF5ED] rounded-xl p-3 border border-[#5B3A29]/10 flex flex-col gap-1.5 text-xs text-[#5B3A29]">
            <div className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#2E5D4B]" />
              <span>Direct Booking Perks Included:</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-stone-600 pl-6">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2E5D4B]" /> Best Mountain View</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2E5D4B]" /> Flexible Cancellation</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2E5D4B]" /> Early Check-in Priority</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#2E5D4B]" /> Zero Commission</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Send Inquiry on WhatsApp</span>
            </button>

            <a
              href={`tel:${HOTEL_DATA.phone}`}
              className="flex items-center justify-center gap-2 bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] border border-[#5B3A29]/20 py-3 px-4 rounded-xl font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2E5D4B]" />
              <span>Instant Call</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
