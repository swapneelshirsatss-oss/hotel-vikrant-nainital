import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  MessageCircle,
  Car,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function Footer() {
  return (
    <footer className="bg-[#42281A] text-[#FAF8F5] pt-16 pb-12 border-t-4 border-[#D4A437]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Canonical Entity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full p-1.5 bg-[#FAF5ED] flex items-center justify-center border border-[#D4A437]/50 shadow-sm shrink-0">
                <Image
                  src="/images/logo/hotel-vikrant-logo.svg"
                  alt="Hotel Vikrant Nainital Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Hotel Vikrant
                </span>
                <span className="text-xs text-[#F4E6D2]/80 tracking-wider uppercase">
                  Tallital • Nainital, Uttarakhand
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F4E6D2]/80 leading-relaxed">
              Peaceful, family-friendly hotel situated on Zoo Road, Upper Mall Road, just 300 meters from the tranquil waters of Naini Lake. Featuring spacious 4-bed family suites, scenic mountain balconies, 24×7 hot water geysers, and comforting in-room dining.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4A437]">
                <ShieldCheck className="w-4 h-4 text-[#D4A437]" />
                <span>Verified Direct Booking Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Persona Silos */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A437]"></span>
              Traveler Experiences
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F4E6D2]/80">
              <li>
                <Link href="/rooms/#family-suite" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Family Suites (4-Bedded)</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms/#deluxe-room" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Deluxe Mountain View Rooms</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/amenities/#dining" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Fresh In-Room Dining Service</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/attractions/#kainchi-dham" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Kainchi Dham Ashram Basecamp</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/attractions/#naini-lake" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Naini Lake &amp; Boating Point (300m)</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Photo Gallery (50+ Real Photos)</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Transit &amp; Contact Directions</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Booking Perks */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A437]"></span>
              Direct Booking Perks
            </h3>
            <ul className="space-y-3 text-xs text-[#F4E6D2]/85">
              <li className="flex items-start gap-2.5">
                <span className="text-[#D4A437] font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">10-15% Lower Price</span>
                  <span>Zero OTA middleman commission or surge fees.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#D4A437] font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Top Mountain View Room</span>
                  <span>Priority allocation on top floors with valley vistas.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#D4A437] font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Flexible Early Check-In</span>
                  <span>Priority check-in assistance upon availability.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#D4A437] font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Direct WhatsApp Concierge</span>
                  <span>Talk directly to the hotel host for taxi &amp; tips.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Canonical Address & Dual Contact Stack */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A437]"></span>
              Hotel Location &amp; Contact
            </h3>
            <ul className="space-y-3.5 text-xs text-[#F4E6D2]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Canonical Address:</span>
                  <span className="leading-relaxed block">{HOTEL_DATA.fullAddress}</span>
                  <a
                    href={HOTEL_DATA.googleMapsCidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D4A437] hover:underline mt-1 font-semibold"
                  >
                    Google Maps Place (CID: {HOTEL_DATA.googleMapsCid}) <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              {/* Dual Voice & Chat Stack */}
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">24×7 Direct Phone (Click-to-Call):</span>
                  <a
                    href={HOTEL_DATA.phoneTel}
                    className="text-white hover:text-[#D4A437] font-bold text-sm transition-colors block mt-0.5"
                  >
                    {HOTEL_DATA.phoneFormatted}
                  </a>
                  <span className="text-[11px] text-[#F4E6D2]/70">Universal E.164 connection</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">WhatsApp Booking Concierge:</span>
                  <a
                    href={HOTEL_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-bold text-xs block mt-0.5"
                  >
                    Chat on WhatsApp (+91 82795 61741)
                  </a>
                  <span className="text-[11px] text-[#F4E6D2]/70">Instant photos, room tariff &amp; taxi advice</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Front Desk &amp; Timings:</span>
                  <span>Open 24 Hours • Check-in: 12 PM | Check-out: 11 AM</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Email:</span>
                  <a
                    href={`mailto:${HOTEL_DATA.email}`}
                    className="hover:underline text-[#F4E6D2]/90"
                  >
                    {HOTEL_DATA.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Thematic Persona Silos */}
        <div className="py-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A437]"></span>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D4A437]">
              Curated Traveler Personas
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOTEL_DATA.thematicPersonas.map((persona) => (
              <Link
                key={persona.persona}
                href={persona.anchorLink}
                className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group block"
              >
                <span className="text-[11px] font-bold text-[#D4A437] uppercase tracking-wider block mb-1">
                  {persona.badge}
                </span>
                <span className="font-serif font-bold text-sm text-white group-hover:text-[#D4A437] transition-colors block mb-1.5">
                  {persona.persona}
                </span>
                <p className="text-xs text-[#F4E6D2]/75 line-clamp-2 leading-relaxed">
                  {persona.summary}
                </p>
                <span className="text-xs text-[#D4A437] font-semibold inline-flex items-center gap-1 mt-2.5 group-hover:translate-x-0.5 transition-transform">
                  Explore Stay <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Feeder City Road Trip Corridors */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#D4A437]" />
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D4A437]">
                Drive-To Feeder City Corridors (Direct Routes to Hotel Vikrant)
              </h4>
            </div>
            <Link
              href="/contact/"
              className="text-xs text-[#F4E6D2]/80 hover:text-[#D4A437] inline-flex items-center gap-1 font-medium transition-colors"
            >
              <span>View Full Transit Matrix</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {HOTEL_DATA.feederCorridors.map((route) => (
              <a
                key={route.city}
                href={route.navUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#D4A437]/50 text-[#F4E6D2]/90 transition-all text-xs"
              >
                <span className="font-bold text-white">{route.city}</span>
                <span className="text-[#D4A437] font-mono">({route.distance} • {route.driveTime})</span>
                <span className="text-white/40">|</span>
                <span className="text-[11px] text-stone-300">{route.primaryHighway}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Our Hospitality Collection / Sister Properties */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold tracking-wider uppercase text-[#D4A437] mb-2">
                <span>Our Hospitality Collection</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                Our Hotels &amp; Resorts
              </h3>
            </div>
            <p className="text-xs text-[#F4E6D2]/75 max-w-lg leading-relaxed">
              Explore our sister retreats and boutique stays across Kainchi Dham and Ramgarh, Uttarakhand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {HOTEL_DATA.sisterProperties.map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4A437]/60 transition-all duration-200 flex flex-col justify-between shadow-xs hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-serif font-bold text-base text-white group-hover:text-[#D4A437] transition-colors leading-snug">
                      {hotel.name}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#D4A437]/20 flex items-center justify-center shrink-0 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A437] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                  <span className="inline-block text-[11px] text-[#D4A437] font-medium mt-1">
                    {hotel.location}
                  </span>
                  <p className="text-xs text-[#F4E6D2]/75 mt-2.5 leading-relaxed line-clamp-2">
                    {hotel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#F4E6D2]/90 font-medium group-hover:text-white">
                  <span>Explore Resort</span>
                  <span className="text-[#D4A437] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contextual SEO Summary Strip */}
        <div className="py-6 border-b border-white/10 text-[11px] text-[#F4E6D2]/70 leading-relaxed space-y-2">
          <p>
            <strong className="text-white">Hotel Vikrant Nainital:</strong> Family-friendly hotel located at Zoo Road, Upper Mall Road, Tallital, Tehsil - Nainital, District - Nainital, Nainital, Uttarakhand - 263001, India.
            Geo Coordinates: Latitude {HOTEL_DATA.coordinates.latitude}, Longitude {HOTEL_DATA.coordinates.longitude}. Google Maps Place CID: {HOTEL_DATA.googleMapsCid}.
          </p>
          <p>
            Convenient walking proximity to Naini Lake (300m), Tallital Rickshaw Stand (300m), Tallital Bus Station (400m), and Pt. G.B. Pant High Altitude Zoo (800m).
            Direct rail connection via Kathgodam Railway Station (34 km, ~1 hr drive via NH-109). Nearest airports: Pantnagar Regional Airport (PGH, 70 km) and Bareilly Commercial Airport (BEK, 140 km).
            Serving traveler corridors from Delhi NCR, Noida, Gurugram, Ghaziabad, Faridabad, Bareilly, Moradabad, Lucknow, and Chandigarh.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4E6D2]/60">
          <p>© {new Date().getFullYear()} {HOTEL_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms/" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#D4A437]">
              Crafted with <Heart className="w-3 h-3 fill-current text-rose-400" /> in Nainital
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
