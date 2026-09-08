"use client";

import React, { useState } from "react";
import { Calendar, Users, Home, ArrowRight, ShieldCheck } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

interface DirectBookingBarProps {
  onOpenBookingModal?: (roomId?: string) => void;
}

export default function DirectBookingBar({ onOpenBookingModal }: DirectBookingBarProps) {
  const [roomId, setRoomId] = useState("deluxe-room");
  const [guests, setGuests] = useState("2");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBookingModal) {
      onOpenBookingModal(roomId);
    } else {
      const room = HOTEL_DATA.rooms.find((r) => r.id === roomId) || HOTEL_DATA.rooms[0];
      const msg = encodeURIComponent(
        `Hi Hotel Vikrant! I want to check rates for ${room.name} for ${guests} guests (Check-in: ${checkIn || "Upcoming dates"}).`
      );
      window.open(`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${msg}`, "_blank");
    }
  };

  return (
    <div className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium-lg border border-[#5B3A29]/15 p-4 sm:p-6 backdrop-blur-md">
        {/* Value Callout Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-100 text-xs text-[#5B3A29]">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#2E5D4B]" />
            <span>Direct Booking Perks: Best Rate Guaranteed • Free Early Check-in Priority • No Hidden Commissions</span>
          </div>
          <div className="text-stone-500 font-medium hidden md:block">
            📍 300m From Naini Lake & Tallital Bus Stand
          </div>
        </div>

        {/* Form Controls */}
        <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
          {/* Room Selection */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5B3A29] flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-[#2E5D4B]" /> Room Category
            </label>
            <select
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full h-11 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:border-[#5B3A29]"
            >
              <option value="deluxe-room">Deluxe Mountain View Room</option>
              <option value="family-suite">Spacious 4-Bedded Family Suite</option>
            </select>
          </div>

          {/* Check In */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5B3A29] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2E5D4B]" /> Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full h-11 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:border-[#5B3A29]"
            />
          </div>

          {/* Check Out */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5B3A29] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#2E5D4B]" /> Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full h-11 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:border-[#5B3A29]"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5B3A29] flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#2E5D4B]" /> Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full h-11 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:border-[#5B3A29]"
            >
              <option value="2">2 Adults (Couples)</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults (Family Suite)</option>
              <option value="5+">5+ Guests (Group)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full h-11 px-4 bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs rounded-xl shadow-gold-glow flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Check Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
