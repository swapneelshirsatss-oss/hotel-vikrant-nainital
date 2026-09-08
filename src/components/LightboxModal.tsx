"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/hotelData";

interface LightboxModalProps {
  images: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentItem = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-stone-300 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-stone-300 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:block"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-stone-300 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:block"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full h-[60vh] sm:h-[75vh]">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Caption & Counter */}
        <div className="mt-4 text-center">
          <p className="text-white font-serif text-lg font-semibold">{currentItem.title}</p>
          <p className="text-stone-400 text-xs mt-1">
            {currentIndex + 1} of {images.length} • {currentItem.category.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
