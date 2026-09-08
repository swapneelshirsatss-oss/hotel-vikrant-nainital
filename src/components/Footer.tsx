import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function Footer() {
  return (
    <footer className="bg-[#42281A] text-[#FAF8F5] pt-16 pb-12 border-t-4 border-[#D4A437]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Overview */}
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
                  Nainital • Uttarakhand
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F4E6D2]/80 leading-relaxed">
              Peaceful, family-friendly hotel situated on Zoo Road, just 300 meters from the serene waters of Naini Lake. Offering warm Kumaoni hospitality, spacious 4-bed family suites, scenic mountain views, and comforting in-room dining.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4A437]">
                <ShieldCheck className="w-4 h-4 text-[#D4A437]" />
                <span>Verified Direct Booking Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A437]"></span>
              Explore Hotel
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F4E6D2]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Home</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>About Our Hotel</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Deluxe Rooms & Family Suites</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Amenities & In-Room Dining</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Photo Gallery</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Nearby Nainital Attractions</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Location & Contact</span>
                  <span className="text-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Stays & Perks */}
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
                  <span>Talk directly to the hotel host for taxi & tips.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Coordinates */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A437]"></span>
              Hotel Location & Contact
            </h3>
            <ul className="space-y-3.5 text-xs text-[#F4E6D2]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Address:</span>
                  <span>{HOTEL_DATA.fullAddress}</span>
                  <a
                    href={HOTEL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D4A437] hover:underline mt-1 font-medium"
                  >
                    Open in Google Maps <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">24×7 Direct Calling:</span>
                  <a
                    href={`tel:${HOTEL_DATA.phone}`}
                    className="text-white hover:text-[#D4A437] font-semibold text-sm transition-colors"
                  >
                    {HOTEL_DATA.phoneFormatted}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Front Desk & Service:</span>
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4E6D2]/60">
          <p>© {new Date().getFullYear()} {HOTEL_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
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
