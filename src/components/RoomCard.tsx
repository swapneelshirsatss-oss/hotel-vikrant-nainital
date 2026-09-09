"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Bed, CalendarCheck, MessageCircle, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Room, HOTEL_DATA } from "@/data/hotelData";

interface RoomCardProps {
  room: Room;
  onOpenBookingModal?: (roomId: string) => void;
}

export default function RoomCard({ room, onOpenBookingModal }: RoomCardProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Hi Hotel Vikrant! I am interested in booking the *${room.name}*. Please share available dates and direct booking rate.`
    );
    window.open(`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#5B3A29]/15 shadow-premium hover:shadow-premium-lg transition-all duration-300 flex flex-col group">
      {/* Image Carousel */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
        <Image
          src={room.images[activeImgIndex]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={room.id === "deluxe-room"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="bg-[#5B3A29]/90 text-[#F4E6D2] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
            {room.badge}
          </span>
          <span className="bg-white/90 text-[#1C1917] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
            {room.size}
          </span>
        </div>

        {/* Carousel Navigation Controls */}
        {room.images.length > 1 && (
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-transform active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-transform active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {room.images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeImgIndex ? "w-6 bg-[#D4A437]" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Room Details Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Title & Occupancy Specs */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B3A29]">
              {room.name}
            </h3>
            <div className="text-right">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#5B3A29] bg-[#FAF5ED] border border-[#5B3A29]/15 px-2.5 py-0.5 rounded-full mb-1">
                Seasonal Rates
              </span>
              <span className="text-[11px] text-[#2E5D4B] font-bold block">
                Save 10%–15% Direct
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
            {room.shortDesc}
          </p>

          {/* Quick Specs Chips */}
          <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b border-stone-100 text-xs text-stone-700">
            <div className="flex items-center gap-2 bg-[#FAF5ED] p-2 rounded-xl">
              <Users className="w-4 h-4 text-[#5B3A29] shrink-0" />
              <span className="truncate">{room.occupancy}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FAF5ED] p-2 rounded-xl">
              <Bed className="w-4 h-4 text-[#5B3A29] shrink-0" />
              <span className="truncate">{room.bedConfig}</span>
            </div>
          </div>

          {/* Highlight Amenities */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
              Key Inclusions
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
              {room.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2E5D4B] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => onOpenBookingModal && onOpenBookingModal(room.id)}
            className="flex-1 py-3 px-4 rounded-xl bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs shadow-gold-glow flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Direct & Save 15%</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="py-3 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs border border-[#25D366]/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
            <span>WhatsApp Rates</span>
          </button>
        </div>
      </div>
    </div>
  );
}
