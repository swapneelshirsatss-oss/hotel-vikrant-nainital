import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function GoogleReviews() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5ED] border border-[#5B3A29]/15 text-xs font-bold text-[#5B3A29] mb-3">
            <span className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </span>
            <span>4.8 Out of 5.0 Rating • Verified Direct Guests</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
            Loved by Families & Mountain Travelers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Real experiences from travelers who chose Hotel Vikrant for our peaceful Zoo Road location, warm home-cooked meals, and quick 4-minute walk to Naini Lake.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOTEL_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#5B3A29]/10 shadow-premium flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-medium">{rev.date}</span>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B3A29]">
                  &ldquo;{rev.highlight}&rdquo;
                </h3>

                {/* Full Review Text */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {rev.reviewText}
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5D4B]" />
                  </div>
                  <span className="text-[11px] text-stone-500">{rev.location} • {rev.stayType}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-[#2E5D4B] bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-Score Trust Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FAF5ED] border border-[#5B3A29]/10 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <span className="font-serif text-xl font-bold text-[#5B3A29] block">4.9 / 5.0</span>
            <span className="text-xs text-stone-600">Location (300m Lake)</span>
          </div>
          <div className="hidden sm:block text-stone-300">|</div>
          <div>
            <span className="font-serif text-xl font-bold text-[#5B3A29] block">4.8 / 5.0</span>
            <span className="text-xs text-stone-600">Cleanliness & Hygiene</span>
          </div>
          <div className="hidden sm:block text-stone-300">|</div>
          <div>
            <span className="font-serif text-xl font-bold text-[#5B3A29] block">4.9 / 5.0</span>
            <span className="text-xs text-stone-600">24x7 Hot Water Geyser</span>
          </div>
          <div className="hidden sm:block text-stone-300">|</div>
          <div>
            <span className="font-serif text-xl font-bold text-[#5B3A29] block">4.9 / 5.0</span>
            <span className="text-xs text-stone-600">In-Room Food & Hospitality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
