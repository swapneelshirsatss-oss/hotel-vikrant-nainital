"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, X, CalendarCheck } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

interface FloatingConciergeProps {
  onOpenBookingModal?: () => void;
}

export default function FloatingConcierge({ onOpenBookingModal }: FloatingConciergeProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show polite concierge greeting after 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const defaultWhatsappMessage = encodeURIComponent(
    "Hi Hotel Vikrant! I am planning a trip to Nainital and would like to check room availability and direct booking rates."
  );

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Floating Greeting Bubble */}
      {showNotification && (
        <div className="bg-white rounded-2xl p-3.5 shadow-premium-lg border border-[#5B3A29]/15 max-w-[270px] animate-in fade-in slide-in-from-bottom-3 duration-300 relative text-left">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold text-[#5B3A29]">Vikrant Concierge Online</span>
          </div>
          <p className="text-xs text-stone-600 leading-snug">
            Planning a stay near Naini Lake? Chat with us on WhatsApp for <strong>15% lower direct rates</strong> & room availability.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <a
              href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${defaultWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-white bg-[#25D366] hover:bg-[#20ba59] px-3 py-1 rounded-full inline-flex items-center gap-1 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Action Buttons Stack */}
      <div className="flex items-center gap-2.5">
        {/* Call Button */}
        <a
          href={`tel:${HOTEL_DATA.phone}`}
          aria-label="Call Front Desk Directly"
          className="w-12 h-12 rounded-full bg-[#5B3A29] hover:bg-[#42281A] text-white flex items-center justify-center shadow-premium transition-transform hover:scale-105 active:scale-95 group relative"
        >
          <Phone className="w-5 h-5 group-hover:animate-bounce" />
          <span className="absolute right-14 bg-stone-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
            Call: {HOTEL_DATA.phoneFormatted}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${defaultWhatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Hotel Vikrant on WhatsApp"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-whatsapp-glow transition-transform hover:scale-110 active:scale-95 group relative"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white animate-pulse"></span>
          <span className="absolute right-15 bg-stone-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
            Instant WhatsApp Booking
          </span>
        </a>
      </div>
    </div>
  );
}
