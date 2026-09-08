"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, CalendarCheck, Menu, X, MapPin } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Amenities", href: "/amenities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Attractions", href: "/attractions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner: Direct Booking Guarantee */}
      <div className="bg-[#5B3A29] text-[#F4E6D2] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A437] animate-pulse"></span>
            <span>⭐ Best Rate Guarantee: Save 10–15% when you book direct • No hidden OTA commissions</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4A437]" />
              Zoo Road, Upper Mall Road, Tallital (300m to Lake)
            </span>
            <a
              href={`tel:${HOTEL_DATA.phone}`}
              className="flex items-center gap-1 text-[#D4A437] hover:underline font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              Direct Front Desk: {HOTEL_DATA.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-premium border-b border-[#5B3A29]/10 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-[#5B3A29]/5 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-[#FAF5ED] border border-[#5B3A29]/20 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <Image
                src="/images/logo/hotel-vikrant-logo.svg"
                alt="Hotel Vikrant Nainital Logo"
                width={38}
                height={38}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-[#5B3A29] group-hover:text-[#2E5D4B] transition-colors leading-tight">
                Hotel Vikrant
              </span>
              <span className="block text-[10px] sm:text-xs tracking-wider uppercase text-[#57534E] font-medium">
                Nainital • Near Naini Lake
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#5B3A29] font-semibold"
                      : "text-[#57534E] hover:text-[#5B3A29]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A437] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_DATA.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-[#5B3A29] bg-[#FAF5ED] border border-[#5B3A29]/20 hover:bg-[#F4E6D2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2E5D4B]" />
              <span>Call: {HOTEL_DATA.phoneFormatted}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#1C1917] bg-[#D4A437] hover:bg-[#BF912A] shadow-gold-glow transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Direct</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBookingModal}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-[#1C1917] bg-[#D4A437] shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#5B3A29] hover:bg-[#FAF5ED] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#5B3A29]/10 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#FAF5ED] text-[#5B3A29] font-bold border-l-4 border-[#D4A437]"
                        : "text-[#57534E] hover:bg-stone-50 hover:text-[#5B3A29]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5">
              <a
                href={`tel:${HOTEL_DATA.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm text-[#5B3A29] bg-[#FAF5ED] border border-[#5B3A29]/20"
              >
                <Phone className="w-4 h-4 text-[#2E5D4B]" />
                Call Front Desk ({HOTEL_DATA.phoneFormatted})
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-[#1C1917] bg-[#D4A437] shadow-gold-glow cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Direct & Save 15%
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
