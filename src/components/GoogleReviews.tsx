import React from "react";
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus, ExternalLink, Sparkles } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function GoogleReviews() {
  const keywordPrompts = [
    "peaceful Zoo Road near Naini Lake",
    "spacious 4-bed family suite",
    "instant 24x7 geyser hot water",
    "fresh home-cooked in-room dining",
    "friendly host & local taxi help",
  ];

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
            <span>4.8 Out of 5.0 Rating • Verified Direct Guests ({HOTEL_DATA.totalReviews}+ Reviews)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29]">
            Loved by Families &amp; Mountain Travelers
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
            <span className="text-xs text-stone-600">Cleanliness &amp; Hygiene</span>
          </div>
          <div className="hidden sm:block text-stone-300">|</div>
          <div>
            <span className="font-serif text-xl font-bold text-[#5B3A29] block">4.9 / 5.0</span>
            <span className="text-xs text-stone-600">24x7 Hot Water Geyser</span>
          </div>
          <div className="hidden sm:block text-stone-300">|</div>
          <div>
            <span className="font-serif text-xl font-bold text-[#5B3A29] block">4.9 / 5.0</span>
            <span className="text-xs text-stone-600">In-Room Food &amp; Hospitality</span>
          </div>
        </div>

        {/* Google Review Velocity Trigger Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF5ED] via-white to-[#FAF5ED] border border-[#D4A437]/40 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A437]/15 text-[11px] font-bold text-[#5B3A29]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A437]" />
              <span>Share Your Experience</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B3A29]">
              Stayed With Us at Hotel Vikrant?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Your feedback helps fellow travelers find quiet, honest family accommodation in Nainital. Mention your favorite amenities:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 justify-center md:justify-start">
              {keywordPrompts.map((prompt) => (
                <span
                  key={prompt}
                  className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-[11px] text-stone-700 font-medium"
                >
                  &ldquo;{prompt}&rdquo;
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={HOTEL_DATA.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-[#5B3A29] hover:bg-[#42281A] text-white font-bold text-xs shadow-premium flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#D4A437]" />
              <span>Write a Google Review</span>
              <ExternalLink className="w-3 h-3 text-white/70" />
            </a>

            <a
              href={HOTEL_DATA.googleMapsCidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-[#5B3A29] font-bold text-xs border border-stone-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Google Maps Place</span>
              <ExternalLink className="w-3 h-3 text-[#2E5D4B]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
