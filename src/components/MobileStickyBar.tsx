"use client";

import React from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

interface MobileStickyBarProps {
  onOpenBookingModal?: () => void;
}

export default function MobileStickyBar({ onOpenBookingModal }: MobileStickyBarProps) {
  const whatsappMsg = encodeURIComponent(
    "Hi Hotel Vikrant! I'd like to check room availability and direct booking rates."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#5B3A29]/15 px-3 py-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${HOTEL_DATA.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#FAF5ED] border border-[#5B3A29]/15 text-[#5B3A29] active:bg-[#F4E6D2] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#2E5D4B]" />
          <span className="text-[11px] font-bold mt-0.5">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] active:bg-[#25D366]/20 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
          <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Book Direct */}
        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#D4A437] text-[#1C1917] font-bold shadow-xs active:scale-95 transition-transform cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span className="text-[11px] font-extrabold mt-0.5">Book Direct</span>
        </button>
      </div>
    </div>
  );
}
