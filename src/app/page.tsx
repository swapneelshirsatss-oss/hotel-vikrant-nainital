import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarCheck,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Bed,
  UtensilsCrossed,
  Flame,
  Wifi,
  Zap,
} from "lucide-react";
import DirectBookingBar from "@/components/DirectBookingBar";
import RoomCard from "@/components/RoomCard";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import AttractionCard from "@/components/AttractionCard";
import GoogleReviews from "@/components/GoogleReviews";
import FaqAccordion from "@/components/FaqAccordion";
import TransitMatrix from "@/components/TransitMatrix";
import JsonLd from "@/components/JsonLd";
import { HOTEL_DATA } from "@/data/hotelData";

export default function HomePage() {
  return (
    <>
      <JsonLd type="home" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#2B1B12]">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/IMG_8038.webp"
            alt="Hotel Vikrant Nainital Exterior and Mountain View"
            fill
            priority
            className="object-cover object-center brightness-[0.72] scale-105 transition-transform duration-1000 ease-out"
            sizes="100vw"
          />
          {/* Gradients for optical text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#F4E6D2] mb-6 shadow-xs animate-in fade-in slide-in-from-top-3 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#D4A437] animate-ping" />
            <span>Zoo Road, Upper Mall Road • 300m From Naini Lake</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-md">
            Your Comfortable Family Stay <br className="hidden sm:inline" />
            <span className="text-[#D4A437] italic font-normal">Near Naini Lake</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F4E6D2] max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-xs">
            Experience peaceful Himalayan tranquility on Zoo Road. Cozy Deluxe Rooms, spacious 4-Bedded Family Suites, 24×7 hot water geysers, and comforting in-room home-cooked meals—just a 4-minute gentle walk to the lake.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                "Hi Hotel Vikrant! I am planning a stay in Nainital and would like to check room rates and availability."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Direct & Save 15%</span>
            </a>

            <a
              href={HOTEL_DATA.phoneTel}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#D4A437]" />
              <span>Call Host: {HOTEL_DATA.phoneFormatted}</span>
            </a>

            <Link
              href="/gallery/"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-black/40 hover:bg-black/60 text-[#F4E6D2] border border-white/10 backdrop-blur-md font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left sm:text-center text-xs text-[#FAF8F5]">
            <div className="flex items-center gap-2 sm:justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#D4A437] shrink-0" />
              <span>300m To Naini Lake</span>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#D4A437] shrink-0" />
              <span>4-Bedded Family Suites</span>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#D4A437] shrink-0" />
              <span>24×7 Hot Water Geyser</span>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#D4A437] shrink-0" />
              <span>Fresh In-Room Dining</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT BOOKING BAR */}
      <DirectBookingBar />

      {/* AEO Direct Answer Block for AI Search & Google Rich Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aeo-answer-block bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Direct Answer:</strong> Hotel Vikrant Nainital is a family-oriented hotel situated on Zoo Road, Upper Mall Road, Tallital (PIN 263001). Located just 300 meters (4-minute walk) from Naini Lake, the hotel features Deluxe Mountain View Rooms and 4-Bedded Family Suites with attached bathrooms, 24×7 geyser hot water, 100% power backup, high-speed fiber Wi-Fi, and fresh in-room dining. Guests save 10% to 15% by booking directly on WhatsApp (+91 82795 61741).
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT HOTEL VIKRANT OVERVIEW */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5ED] border border-[#5B3A29]/15 text-xs font-bold text-[#5B3A29]">
                <Sparkles className="w-3.5 h-3.5 text-[#2E5D4B]" />
                <span>Authentic Kumaoni Warmth & Hospitality</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29] leading-tight">
                Quiet Comfort Near the Lake, Without the Mall Road Noise
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Hotel Vikrant Nainital is a family-oriented sanctuary situated on Zoo Road, just off Upper Mall Road. While located only <strong>300 meters from the famous Naini Lake</strong> and the vibrant Tallital Market, our property sits elevated above the congestion, giving you clean mountain air and restful sleep.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Whether you choose our comfortable <strong>Deluxe Rooms</strong> or our spacious <strong>4-Bedded Family Suites</strong>, you will enjoy wide scenic windows, round-the-clock hot geyser water, 100% power backup, and fresh home-cooked meals served straight to your bedside through our attentive in-room dining service.
              </p>

              {/* Location Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <MapPin className="w-5 h-5 text-[#2E5D4B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#5B3A29]">300m To Naini Lake</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Gentle 4-minute downhill stroll to boating and Mall Road.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5B3A29]/10 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29]">
                    <UtensilsCrossed className="w-5 h-5 text-[#D4A437]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#5B3A29]">Fresh In-Room Dining</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Home-cooked hot vegetarian meals & chai served in room.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5B3A29] hover:bg-[#42281A] text-white font-semibold text-xs tracking-wide shadow-premium transition-all hover:scale-105"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A437]" />
                </Link>

                <a
                  href={HOTEL_DATA.phoneTel}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#5B3A29] hover:underline"
                >
                  <Phone className="w-4 h-4 text-[#2E5D4B]" />
                  <span>Call Us: {HOTEL_DATA.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right: Layered High-Res Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-premium-lg border-4 border-white aspect-[4/5] bg-stone-200">
                <Image
                  src="/images/gallery/IMG_8036.webp"
                  alt="Scenic Balcony and Mountain View at Hotel Vikrant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#5B3A29]/15 shadow-premium max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E5D4B] text-white flex items-center justify-center font-bold text-sm">
                    4.8★
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#5B3A29] block">Guest Favorite in Tallital</span>
                    <span className="text-[11px] text-stone-500">Based on 120+ verified stays</span>
                  </div>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-[#F4E6D2]/60 -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE HOTEL VIKRANT (VALUE BENTO) */}
      <section className="py-16 sm:py-24 bg-white border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
              The Vikrant Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
              Why Guests Choose Hotel Vikrant
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600">
              Straightforward value, clean mountain rooms, and zero hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "300m to Naini Lake", desc: "Walk down to the lake in 4 minutes without steep climbs.", icon: <MapPin className="w-5 h-5 text-[#2E5D4B]" /> },
              { title: "4-Bed Family Suites", desc: "Spacious suites with 2 king beds to keep families together.", icon: <Bed className="w-5 h-5 text-[#5B3A29]" /> },
              { title: "Deluxe Mountain Rooms", desc: "Sunlit rooms with wide views of forested Nainital ridges.", icon: <Sparkles className="w-5 h-5 text-[#D4A437]" /> },
              { title: "Fresh In-Room Dining", desc: "Home-cooked meals and morning tea delivered to your room.", icon: <UtensilsCrossed className="w-5 h-5 text-[#2E5D4B]" /> },
              { title: "24×7 Hot Water Geysers", desc: "Individual geysers in each bathroom for steaming hot showers.", icon: <Flame className="w-5 h-5 text-[#D4A437]" /> },
              { title: "100% Power Backup", desc: "Inverters and generators keep power uninterrupted 24/7.", icon: <Zap className="w-5 h-5 text-[#5B3A29]" /> },
              { title: "High-Speed WiFi", desc: "Fast fiber internet for entertainment and workcations.", icon: <Wifi className="w-5 h-5 text-[#2E5D4B]" /> },
              { title: "Peaceful Zoo Road Location", desc: "Elevated, quiet location free from Mall Road traffic noise.", icon: <Compass className="w-5 h-5 text-[#5B3A29]" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#5B3A29]/10 shadow-xs hover:shadow-premium transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#5B3A29]/10 flex items-center justify-center mb-3 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#5B3A29]">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OTA PRICE DISPARITY & DIRECT BOOKING GUARANTEE */}
      <section className="py-16 sm:py-20 bg-[#5B3A29] text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3 py-0.5 rounded-full">
                Commission-Free Direct Booking
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Save 10% to 15% When You Book Directly With Hotel Vikrant
              </h2>
              <p className="text-xs sm:text-sm text-[#F4E6D2]/90 leading-relaxed">
                Online portals charge hefty 18–25% commissions on every room night. By booking directly with us via WhatsApp or Phone, you bypass the middleman and enjoy guaranteed lowest prices, top-floor room allocation, and personalized host care.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A437]" />
                  <span>Guaranteed Best Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A437]" />
                  <span>Free Early Check-in Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A437]" />
                  <span>Scenic Mountain View Preference</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A437]" />
                  <span>1-on-1 WhatsApp Host Support</span>
                </div>
              </div>
            </div>

            {/* Comparison Box */}
            <div className="lg:col-span-5 bg-white text-stone-900 rounded-3xl p-6 shadow-2xl border border-white/20">
              <div className="text-center pb-4 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Seasonal Pricing Transparency</span>
                <div className="mt-1 font-serif text-2xl font-bold text-[#5B3A29]">Direct Booking vs OTAs</div>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <span className="text-stone-700 font-bold block">OTA Portals (MMT / Booking)</span>
                    <span className="text-[11px] text-stone-500">Standard Tariff + 18–25% Platform Commission</span>
                  </div>
                  <span className="font-bold text-red-600 text-xs uppercase tracking-wider bg-red-50 border border-red-200 px-2 py-1 rounded-md">Higher Rate</span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF5ED] border border-[#5B3A29]/20">
                  <div>
                    <span className="font-bold text-[#5B3A29] block">Direct With Hotel Vikrant</span>
                    <span className="text-[11px] text-[#2E5D4B] font-semibold">Zero Commission • Dynamic Seasonal Discount</span>
                  </div>
                  <span className="font-serif text-sm sm:text-base font-extrabold text-[#2E5D4B] bg-white border border-[#2E5D4B]/20 px-2.5 py-1 rounded-lg">Save 10%–15%</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                  "Hi! I would like to check current seasonal rates for Hotel Vikrant and claim the direct booking discount."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#D4A437] hover:bg-[#BF912A] text-[#1C1917] font-bold text-xs shadow-gold-glow flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Check Live Rates on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ROOMS SHOWCASE */}
      <section id="rooms" className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
              Curated Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
              Comfortable Rooms for Families & Couples
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
              Every room features scenic mountain views, attached private bathrooms with 24x7 geyser hot water, high-speed WiFi, and attentive in-room dining.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {HOTEL_DATA.rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/rooms/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#5B3A29] hover:text-[#2E5D4B] transition-colors"
            >
              <span>Compare all room features, floor layouts & amenities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. AMENITIES BENTO SHOWCASE */}
      <AmenitiesGrid />

      {/* 8. NEARBY ATTRACTIONS */}
      <section className="py-20 sm:py-28 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
                Explore Nainital
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
                Everything Within Easy Reach
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl">
                Stay just 300 meters from Naini Lake. Walk to the boat jetty, explore Mall Road shops, or visit the High Altitude Zoo right on Zoo Road.
              </p>
            </div>

            <Link
              href="/attractions/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 transition-colors shrink-0 self-start md:self-auto"
            >
              <span>View Full Attractions Guide</span>
              <ArrowRight className="w-4 h-4 text-[#2E5D4B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_DATA.attractions.slice(0, 6).map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUEST REVIEWS */}
      <GoogleReviews />

      {/* 10. PHOTO GALLERY MOSAIC PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full mb-3">
                Visual Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
                Moments at Hotel Vikrant
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl">
                Real photos of our comfortable rooms, clean private bathrooms, mountain balcony views, and hotel exterior on Zoo Road.
              </p>
            </div>

            <Link
              href="/gallery/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5B3A29] hover:bg-[#42281A] text-white font-bold text-xs shadow-premium transition-all hover:scale-105 shrink-0 self-start md:self-auto"
            >
              <span>Open Full Photo Gallery (50+ Photos)</span>
              <ArrowRight className="w-4 h-4 text-[#D4A437]" />
            </Link>
          </div>

          {/* 6-Photo Mosaic */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {HOTEL_DATA.galleryImages.slice(0, 6).map((item, idx) => (
              <Link
                key={item.id}
                href="/gallery/"
                className={`relative rounded-2xl overflow-hidden shadow-xs hover:shadow-premium group transition-all ${
                  idx === 0 || idx === 3 ? "lg:col-span-2 h-64 sm:h-80" : "h-64 sm:h-80"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-serif font-bold line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GOOGLE MAP & LOCATION GUIDE */}
      <section className="py-20 sm:py-28 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E5D4B] bg-[#2E5D4B]/10 px-3.5 py-1 rounded-full">
                Prime Central Location
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B3A29]">
                Easy Walking Access to Naini Lake & Tallital
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Situated along Zoo Road in Tallital, Nainital. Our location gives you the ideal balance: a peaceful stay away from heavy traffic, while being just 300 meters from the lakeside promenade, boat jetty, and Tallital bus stand.
              </p>

              <div className="space-y-3.5 text-xs text-stone-700">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <MapPin className="w-4 h-4 text-[#2E5D4B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Canonical Address</span>
                    <span>{HOTEL_DATA.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <Compass className="w-4 h-4 text-[#D4A437] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">From Kathgodam Railway Station</span>
                    <span>34 km (~1 hour scenic drive via NH-109 by hill taxi / sharing cab).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <MapPin className="w-4 h-4 text-[#5B3A29] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">From Tallital Bus Stand</span>
                    <span>Just 400 meters. Quick 4-5 minute walk up Zoo Road.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={HOTEL_DATA.googleMapsCidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#5B3A29] hover:bg-[#42281A] text-white font-bold text-xs shadow-premium inline-flex items-center gap-2 transition-all hover:scale-105"
                >
                  <MapPin className="w-4 h-4 text-[#D4A437]" />
                  <span>Open Google Maps Place (CID: {HOTEL_DATA.googleMapsCid})</span>
                </a>

                <a
                  href={HOTEL_DATA.phoneTel}
                  className="px-6 py-3 rounded-full bg-[#FAF5ED] hover:bg-[#F4E6D2] text-[#5B3A29] font-bold text-xs border border-[#5B3A29]/20 inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2E5D4B]" />
                  <span>Call For Route Help</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden shadow-premium-lg border-2 border-stone-200 relative bg-stone-100">
              <iframe
                title="Hotel Vikrant Nainital Google Maps Location"
                src={HOTEL_DATA.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Embedded Multi-Modal Transit Matrix */}
          <div className="mt-14">
            <TransitMatrix />
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 13. PRE-FOOTER DIRECT CALLOUT */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-t border-[#5B3A29]/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-12 h-12 rounded-full bg-[#5B3A29] text-[#D4A437] flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5B3A29]">
            Ready to Plan Your Nainital Family Trip?
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
            Contact us directly on WhatsApp or call our front desk to check room availability, lock in your 15% direct discount, and enjoy cozy Himalayan hospitality.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                "Hi Hotel Vikrant! I would like to check room availability for my upcoming trip to Nainital."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-whatsapp-glow flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Host on WhatsApp</span>
            </a>
            <a
              href={HOTEL_DATA.phoneTel}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#5B3A29] hover:bg-[#42281A] text-white font-bold text-xs shadow-premium flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#D4A437]" />
              <span>Direct Call: {HOTEL_DATA.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
