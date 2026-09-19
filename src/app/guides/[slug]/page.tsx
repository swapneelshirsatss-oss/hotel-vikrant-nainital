import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  HelpCircle,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import { HOTEL_DATA } from "@/data/hotelData";
import JsonLd from "@/components/JsonLd";

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return HOTEL_DATA.guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = HOTEL_DATA.guides.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  const canonicalUrl = `${HOTEL_DATA.websiteUrl}/guides/${guide.slug}/`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${guide.title} | Hotel Vikrant Nainital`,
      description: guide.metaDescription,
      url: canonicalUrl,
      siteName: "Hotel Vikrant Nainital",
      locale: "en_IN",
      type: "article",
      publishedTime: guide.publishedDate,
      modifiedTime: guide.modifiedDate,
      authors: [guide.author],
      images: [
        {
          url: guide.heroImage,
          width: 1200,
          height: 800,
          alt: guide.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.metaDescription,
      images: [guide.heroImage],
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = HOTEL_DATA.guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: `${HOTEL_DATA.websiteUrl}/` },
    { name: "Travel Guides", url: `${HOTEL_DATA.websiteUrl}/guides/` },
    { name: guide.title, url: `${HOTEL_DATA.websiteUrl}/guides/${guide.slug}/` },
  ];

  const relatedGuides = HOTEL_DATA.guides.filter((g) =>
    guide.relatedSlugs.includes(g.slug)
  );

  return (
    <>
      <JsonLd
        type="guide"
        breadcrumbItems={breadcrumbItems}
        guideData={{
          slug: guide.slug,
          title: guide.title,
          description: guide.metaDescription,
          publishedDate: guide.publishedDate,
          modifiedDate: guide.modifiedDate,
          author: guide.author,
          image: guide.heroImage,
        }}
      />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#FAF5ED] border-b border-[#5B3A29]/10 py-3 px-4 text-xs text-[#57534E]">
        <div className="max-w-4xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#5B3A29] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/guides/" className="hover:text-[#5B3A29] transition-colors">
            Travel Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#5B3A29] font-medium truncate max-w-xs sm:max-w-md">
            {guide.title}
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-[#5B3A29] px-3 py-1 rounded-full">
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#2E5D4B] font-semibold bg-[#2E5D4B]/10 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readingTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5B3A29] leading-tight tracking-tight">
            {guide.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            {guide.excerpt}
          </p>

          <div className="mt-6 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF5ED] border border-[#5B3A29]/20 flex items-center justify-center text-[#5B3A29]">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-stone-900 block">{guide.author}</span>
                <span className="text-stone-500">{guide.authorRole}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2E5D4B]" />
                <span>Updated: September 2026</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* AEO Direct Answer Block for AI Search & Featured Snippets */}
      <section className="bg-stone-100 border-b border-stone-200/80 py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aeo-answer-block bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#5B3A29]">Direct Answer:</strong> {guide.directAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Hero Featured Photography */}
          <div className="relative h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-premium-lg border-2 border-stone-200">
            <Image
              src={guide.heroImage}
              alt={guide.heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          {/* Table of Contents */}
          {guide.tableOfContents && guide.tableOfContents.length > 0 && (
            <nav className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/15 space-y-3">
              <h2 className="font-serif font-bold text-sm uppercase tracking-wider text-[#5B3A29] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4A437]" />
                Quick Navigation &amp; Table of Contents
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {guide.tableOfContents.map((item, idx) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#2E5D4B] hover:underline flex items-center gap-1.5 transition-colors"
                    >
                      <span className="font-bold text-[#D4A437]">{idx + 1}.</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content Sections */}
          <div className="space-y-12 text-stone-700 text-sm sm:text-base leading-relaxed">
            {guide.sections.map((section, sIdx) => {
              const anchorId = guide.tableOfContents[sIdx]?.id;
              return (
                <section key={sIdx} id={anchorId} className="space-y-4 scroll-mt-24">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B3A29] leading-snug">
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <p className="text-xs sm:text-sm font-medium text-[#2E5D4B] mt-1">
                        {section.subheading}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3.5">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-stone-700 text-sm sm:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tabular Data if present */}
                  {section.tableData && (
                    <div className="my-6 overflow-x-auto rounded-2xl border border-stone-200 shadow-xs">
                      <table className="w-full text-xs sm:text-sm text-left border-collapse">
                        <thead>
                          <tr className="bg-[#FAF8F5] border-b border-stone-200 text-[#5B3A29] font-serif font-bold">
                            {section.tableData.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3.5">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 bg-white">
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-stone-50/80 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3.5 text-stone-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Pro-Tips Callout */}
                  {section.tips && section.tips.length > 0 && (
                    <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#5B3A29]/15 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B3A29]">
                        <Lightbulb className="w-4 h-4 text-[#D4A437]" />
                        <span>Local Host Pro-Tips</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {section.tips.map((tip, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5D4B] shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* In-Article CRO Direct Booking Monetization Card */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-[#5B3A29] text-white shadow-premium space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A437] block mb-1">
                  Visiting Nainital Soon?
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Stay at Hotel Vikrant on Zoo Road
                </h3>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#D4A437]">
                Save 15% Direct
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F4E6D2] leading-relaxed">
              Located just 300 meters (4-minute walk) from Naini Lake. Enjoy peaceful mountain nights free from Mall Road vehicle noise, spacious 4-bed family suites, 24×7 geyser hot showers, and fresh home-cooked meals served straight to your room.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#FAF8F5]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A437]" />
                <span>300m to Lake</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A437]" />
                <span>4-Bed Family Suites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A437]" />
                <span>24×7 Hot Water</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A437]" />
                <span>In-Room Dining</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${HOTEL_DATA.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Hotel Vikrant! I was reading your guide "${guide.title}" and would like to check room availability and direct booking rates.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-whatsapp-glow flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Check Rates on WhatsApp (15% Off)</span>
              </a>

              <a
                href={HOTEL_DATA.phoneTel}
                className="py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4A437]" />
                <span>Call Front Desk: {HOTEL_DATA.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Guide FAQs */}
          {guide.faqs && guide.faqs.length > 0 && (
            <section className="pt-8 border-t border-stone-200 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B3A29] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#2E5D4B]" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {guide.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#5B3A29]/10 space-y-2 text-xs sm:text-sm"
                  >
                    <h4 className="font-bold text-[#5B3A29] text-sm sm:text-base">
                      {faq.question}
                    </h4>
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Guides Cross-Linking Silo */}
          {relatedGuides.length > 0 && (
            <section className="pt-10 border-t border-stone-200 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B3A29]">
                  Related Travel Guides
                </h3>
                <Link
                  href="/guides/"
                  className="text-xs text-[#2E5D4B] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Guides</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedGuides.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/guides/${rel.slug}/`}
                    className="p-4 rounded-2xl bg-[#FAF8F5] hover:bg-[#FAF5ED] border border-[#5B3A29]/10 hover:border-[#5B3A29]/30 transition-all group block"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E5D4B] block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#5B3A29] group-hover:text-[#2E5D4B] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-[#D4A437] font-semibold inline-flex items-center gap-1 mt-2">
                      Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Guides Button */}
          <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
            <Link
              href="/guides/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5B3A29] hover:text-[#2E5D4B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Travel Guides Hub</span>
            </Link>

            <Link
              href="/rooms/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A437] hover:underline"
            >
              <span>Explore Rooms &amp; Suites</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
