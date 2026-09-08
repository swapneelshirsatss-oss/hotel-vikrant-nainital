import React from "react";
import Link from "next/link";
import { UtensilsCrossed, Flame, Wifi, Zap, MapPin, Sparkles, Mountain, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function AmenitiesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#2E5D4B]" />,
    Flame: <Flame className="w-6 h-6 text-[#D4A437]" />,
    Wifi: <Wifi className="w-6 h-6 text-[#5B3A29]" />,
    Zap: <Zap className="w-6 h-6 text-[#D4A437]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#2E5D4B]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#5B3A29]" />,
    Mountain: <Mountain className="w-6 h-6 text-[#2E5D4B]" />,
    Clock: <Clock className="w-6 h-6 text-[#5B3A29]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
            Pure Mountain Comfort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
            Thoughtful Amenities for a Relaxed Stay
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Every convenience designed for family ease in the Himalayas—from comforting in-room dining and round-the-clock hot geysers to uninterrupted power and high-speed fiber WiFi.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOTEL_DATA.amenitiesList.map((amenity) => (
            <div
              key={amenity.id}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                amenity.highlight
                  ? "bg-white border-[#5B3A29]/20 shadow-premium hover:shadow-premium-lg ring-1 ring-[#D4A437]/20"
                  : "bg-white/80 border-stone-200/80 hover:bg-white hover:border-[#5B3A29]/20 hover:shadow-premium"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] flex items-center justify-center border border-[#5B3A29]/10">
                    {iconMap[amenity.iconName] || <Sparkles className="w-6 h-6 text-[#5B3A29]" />}
                  </div>
                  {amenity.badge && (
                    <span className="text-[11px] font-bold text-[#5B3A29] bg-[#F4E6D2] px-2.5 py-0.5 rounded-full">
                      {amenity.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#5B3A29]">
                  {amenity.title}
                </h3>
                <span className="text-xs font-medium text-[#2E5D4B] block mt-0.5 mb-3">
                  {amenity.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              {amenity.id === "dining" && (
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#5B3A29] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5D4B]" />
                    Home-cooked hot meals delivered to room
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            href="/amenities"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5B3A29] hover:text-[#2E5D4B] transition-colors group"
          >
            <span>Learn more about In-Room Dining & Guest Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
