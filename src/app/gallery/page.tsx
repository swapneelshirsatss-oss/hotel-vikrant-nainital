"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, Filter } from "lucide-react";
import { HOTEL_DATA, GalleryItem } from "@/data/hotelData";
import LightboxModal from "@/components/LightboxModal";
import JsonLd from "@/components/JsonLd";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "rooms", label: "Deluxe Rooms & Suites" },
    { id: "views", label: "Mountain & Lake Views" },
    { id: "dining", label: "In-Room Dining" },
    { id: "exterior", label: "Exterior & Facade" },
    { id: "reception", label: "Lobby & Reception" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? HOTEL_DATA.galleryImages
      : HOTEL_DATA.galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: HOTEL_DATA.websiteUrl },
    { name: "Photo Gallery", url: `${HOTEL_DATA.websiteUrl}/gallery` },
  ];

  return (
    <>
      <JsonLd type="gallery" breadcrumbItems={breadcrumbItems} />

      {/* Hero Header */}
      <section className="relative py-20 bg-[#5B3A29] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/IMG_8038.webp"
            alt="Hotel Vikrant"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A437] bg-white/10 px-3.5 py-1 rounded-full mb-3">
            Real Visual Proof
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Hotel Vikrant Photo Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4E6D2] max-w-2xl mx-auto">
            Explore authentic photographs of our rooms, private bathrooms, in-room meals, and sweeping views of the Nainital hills.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-stone-200/80 sticky top-14 sm:top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#5B3A29] text-white shadow-xs"
                    : "bg-[#FAF5ED] text-stone-700 hover:bg-[#F4E6D2] hover:text-[#5B3A29]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-200 border border-[#5B3A29]/10 shadow-xs hover:shadow-premium transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-xs">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#D4A437] uppercase tracking-wider block">
                      {img.category}
                    </span>
                    <h3 className="text-white text-xs sm:text-sm font-serif font-bold mt-0.5">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
