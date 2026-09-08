import React from "react";
import Image from "next/image";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Attraction } from "@/data/hotelData";

interface AttractionCardProps {
  attraction: Attraction;
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#5B3A29]/15 shadow-premium hover:shadow-premium-lg transition-all duration-300 flex flex-col group">
      {/* Attraction Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Distance Badge */}
        <div className="absolute top-3.5 left-3.5 bg-[#5B3A29]/90 text-[#F4E6D2] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
          <MapPin className="w-3 h-3 text-[#D4A437]" />
          <span>{attraction.distance}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3.5 right-3.5 bg-white/90 text-stone-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
          {attraction.category}
        </div>

        {/* Walking/Travel Time overlay */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-white font-medium">
          <Clock className="w-3.5 h-3.5 text-[#D4A437]" />
          <span>{attraction.travelTime} from hotel</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#5B3A29] group-hover:text-[#2E5D4B] transition-colors">
            {attraction.name}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
            {attraction.shortDesc}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-medium">
            Walking distance & central
          </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${attraction.name} Nainital`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#5B3A29] hover:text-[#2E5D4B] transition-colors"
          >
            <span>Directions</span>
            <Navigation className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
