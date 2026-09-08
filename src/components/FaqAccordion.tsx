"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5ED] border border-[#5B3A29]/15 text-xs font-bold text-[#5B3A29] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#2E5D4B]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B3A29]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Clear, transparent answers about our location, room amenities, in-room dining, and booking policies.
          </p>
        </div>

        <div className="space-y-3.5">
          {HOTEL_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#5B3A29]/15 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#5B3A29] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF5ED] flex items-center justify-center shrink-0 text-[#5B3A29] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#5B3A29] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center bg-white p-5 rounded-2xl border border-stone-200 text-xs text-stone-600">
          Have another question or custom request? Chat directly with the host on WhatsApp at{" "}
          <a
            href={`https://wa.me/${HOTEL_DATA.whatsappNumber}`}
            className="text-[#25D366] font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {HOTEL_DATA.phoneFormatted}
          </a>{" "}
          for instantaneous response.
        </div>
      </div>
    </section>
  );
}
