"use client";

import React, { useState } from "react";
import {
  Navigation,
  Car,
  Train,
  Plane,
  MapPin,
  ExternalLink,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function TransitMatrix() {
  const [activeTab, setActiveTab] = useState<"drive" | "train" | "flight" | "landmarks">("drive");

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#5B3A29]/15 shadow-premium">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5ED] border border-[#5B3A29]/15 text-xs font-bold text-[#5B3A29] mb-3">
          <Navigation className="w-3.5 h-3.5 text-[#2E5D4B]" />
          <span>Multi-Modal Transit & Feeder City Matrix</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29]">
          How to Reach Hotel Vikrant Nainital
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          Situated on Zoo Road, Upper Mall Road, Tallital, Nainital (Tehsil &amp; District - Nainital).
          Just 300 meters from Naini Lake. Plan your road trip from Delhi NCR, train via Kathgodam Terminal, or flight via Pantnagar / Bareilly.
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-stone-100">
        <button
          type="button"
          onClick={() => setActiveTab("drive")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
            activeTab === "drive"
              ? "bg-[#5B3A29] text-white shadow-xs"
              : "bg-[#FAF8F5] text-stone-700 hover:bg-stone-100 border border-stone-200/70"
          }`}
        >
          <Car className="w-4 h-4 text-[#D4A437]" />
          <span>Drive-To Routes ({HOTEL_DATA.feederCorridors.length} Cities)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("train")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
            activeTab === "train"
              ? "bg-[#5B3A29] text-white shadow-xs"
              : "bg-[#FAF8F5] text-stone-700 hover:bg-stone-100 border border-stone-200/70"
          }`}
        >
          <Train className="w-4 h-4 text-[#D4A437]" />
          <span>Direct Trains (Kathgodam Junction)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("flight")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
            activeTab === "flight"
              ? "bg-[#5B3A29] text-white shadow-xs"
              : "bg-[#FAF8F5] text-stone-700 hover:bg-stone-100 border border-stone-200/70"
          }`}
        >
          <Plane className="w-4 h-4 text-[#D4A437]" />
          <span>Flights & Airports (PGH / BEK / DEL)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("landmarks")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
            activeTab === "landmarks"
              ? "bg-[#5B3A29] text-white shadow-xs"
              : "bg-[#FAF8F5] text-stone-700 hover:bg-stone-100 border border-stone-200/70"
          }`}
        >
          <Compass className="w-4 h-4 text-[#D4A437]" />
          <span>Local Landmarks Proximity</span>
        </button>
      </div>

      {/* TAB 1: ROAD DRIVE-TO CORRIDORS */}
      {activeTab === "drive" && (
        <div className="pt-6 space-y-6">
          <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#5B3A29]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2E5D4B] shrink-0" />
              <span>
                <strong>Road Condition Note:</strong> Excellent 4-to-6 lane expressways until Haldwani (NE-3 &amp; NH-9). The 34 km hill ascent from Kathgodam to Tallital is a well-paved, scenic two-lane mountain highway.
              </span>
            </div>
            <a
              href={HOTEL_DATA.googleMapsCidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5B3A29] text-white font-bold text-xs shrink-0 hover:bg-[#42281A] transition-colors"
            >
              <span>GPS to Hotel Vikrant</span>
              <ExternalLink className="w-3 h-3 text-[#D4A437]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOTEL_DATA.feederCorridors.map((route) => (
              <div
                key={route.city}
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 hover:border-[#5B3A29]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-serif font-bold text-base text-[#5B3A29]">
                      {route.city}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#2E5D4B]/10 text-[#2E5D4B] font-bold text-[11px] shrink-0">
                      {route.distance}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone-600 mb-3">
                    <span className="flex items-center gap-1 font-semibold text-stone-900">
                      <Clock className="w-3.5 h-3.5 text-[#D4A437]" />
                      {route.driveTime}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-stone-200 text-stone-700">
                      {route.primaryHighway}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-600 leading-relaxed border-t border-stone-200/60 pt-2.5 mb-4 line-clamp-3">
                    {route.routeBreakdown}
                  </p>
                </div>

                <a
                  href={route.navUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2E5D4B]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TRAIN CONNECTIONS VIA KATHGODAM */}
      {activeTab === "train" && (
        <div className="pt-6 space-y-6">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950">
            <p className="font-semibold mb-1 flex items-center gap-1.5">
              <Train className="w-4 h-4 text-[#5B3A29]" />
              Kathgodam Railway Station (KGM) is the terminal railhead, located 34 km from Hotel Vikrant Nainital.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Upon arriving at Kathgodam station, mountain taxis and shared cabs are available 24×7 outside the terminal exit. Travel time to Tallital, Nainital is approximately 1 hour. Cabs drop at the Tallital taxi stand, from where Hotel Vikrant is an easy 400-meter stroll up Zoo Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HOTEL_DATA.trainConnections.map((train) => (
              <div
                key={train.trainNumber}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-serif font-bold text-base text-[#5B3A29]">
                      {train.trainName}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#5B3A29]/10 text-[#5B3A29] font-mono text-[11px] font-bold shrink-0">
                      #{train.trainNumber}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-3 p-3 rounded-xl bg-white border border-stone-200/80 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 block">From</span>
                      <span className="font-bold text-stone-900">{train.from}</span>
                      <span className="text-[11px] text-[#2E5D4B] block font-semibold">{train.departureTime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 block">Arrives Kathgodam</span>
                      <span className="font-bold text-stone-900">{train.to}</span>
                      <span className="text-[11px] text-[#2E5D4B] block font-semibold">{train.arrivalTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone-600 mb-3">
                    <span className="flex items-center gap-1 font-semibold text-stone-700">
                      <Clock className="w-3.5 h-3.5 text-[#D4A437]" /> {train.duration}
                    </span>
                    <span>•</span>
                    <span className="text-[#2E5D4B] font-semibold">{train.frequency}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-200/60 pt-2.5 mb-4">
                    {train.stationTaxiTip}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Hotel Vikrant! I am arriving via train ${train.trainName} (#${train.trainNumber}) and need taxi assistance / early check-in details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Station Taxi / Host Advice</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: FLIGHTS & AIRPORTS */}
      {activeTab === "flight" && (
        <div className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HOTEL_DATA.transitHubs
              .filter((h) => h.hubType === "Airport")
              .map((hub) => (
                <div
                  key={hub.hubName}
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-serif font-bold text-base text-[#5B3A29]">
                        {hub.hubName}
                      </span>
                      {hub.code && (
                        <span className="px-2 py-0.5 rounded-full bg-[#D4A437]/20 text-[#5B3A29] font-mono text-[11px] font-bold shrink-0">
                          {hub.code}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-600 mb-3">
                      <span className="font-bold text-[#2E5D4B]">{hub.distance}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-stone-700">
                        <Clock className="w-3.5 h-3.5 text-[#D4A437]" /> {hub.travelTime}
                      </span>
                    </div>

                    <p className="text-xs text-stone-700 leading-relaxed mb-3">
                      {hub.description}
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-600 mb-4">
                      <strong>Transit Tip:</strong> {hub.routeTips}
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/dir/${encodeURIComponent(hub.hubName)}/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Airport to Hotel Route</span>
                    <ExternalLink className="w-3 h-3 text-[#2E5D4B]" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TAB 4: LOCAL LANDMARKS & PILGRIMAGE */}
      {activeTab === "landmarks" && (
        <div className="pt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🌊 Water &amp; Promenade</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Naini Lake &amp; Boating Point</h4>
              <p className="text-xs text-stone-600 mt-1">300 Meters • 4-minute flat stroll down to the lake shore</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🐾 Wildlife &amp; Nature</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Pt. G.B. Pant High Altitude Zoo</h4>
              <p className="text-xs text-stone-600 mt-1">800 Meters • Right along Zoo Road, 10 min walk or 3 min drive</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🕉️ Sacred 51 Shaktipeeth</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Maa Naina Devi Temple</h4>
              <p className="text-xs text-stone-600 mt-1">1.2 Km • 15 min scenic promenade walk on Mall Road</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🙏 World-Famous Ashram</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Neem Karoli Baba Kainchi Dham</h4>
              <p className="text-xs text-stone-600 mt-1">18 Km • 40-45 mins scenic drive via Bhowali</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🏔️ Himalayan Viewpoint</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Snow View Point &amp; Aerial Ropeway</h4>
              <p className="text-xs text-stone-600 mt-1">2.5 Km • 10 min drive or Mallital cable car</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🌅 Sunset Temple</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Hanumangarhi Temple</h4>
              <p className="text-xs text-stone-600 mt-1">3 Km • 10 min drive, famous evening sunset vista</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🌲 Himalayan Orchards</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Mukteshwar Dham &amp; Chauli Ki Jali</h4>
              <p className="text-xs text-stone-600 mt-1">48 Km • 1.5 hr scenic mountain drive</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
              <span className="text-xs font-bold text-[#2E5D4B] block mb-1">🛶 Lake District</span>
              <h4 className="font-serif font-bold text-sm text-[#5B3A29]">Bhimtal &amp; Naukuchiatal</h4>
              <p className="text-xs text-stone-600 mt-1">22 Km • 45 min drive past pine forests</p>
            </div>
          </div>
        </div>
      )}

      {/* Direct Google Maps CID & Voice Stack Footer */}
      <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-stone-700">
          <MapPin className="w-4 h-4 text-[#2E5D4B] shrink-0" />
          <span>
            <strong>Official Google Maps CID:</strong> {HOTEL_DATA.googleMapsCid}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={HOTEL_DATA.googleMapsCidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#5B3A29] hover:bg-[#42281A] text-white font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-[#D4A437]" />
          </a>

          <a
            href={HOTEL_DATA.phoneTel}
            className="px-4 py-2 rounded-xl bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] font-bold border border-[#5B3A29]/20 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Call For Route Help</span>
          </a>
        </div>
      </div>
    </div>
  );
}
