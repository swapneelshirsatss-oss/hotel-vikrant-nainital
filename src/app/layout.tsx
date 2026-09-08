import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import JsonLd from "@/components/JsonLd";
import { HOTEL_DATA } from "@/data/hotelData";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5B3A29",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(HOTEL_DATA.websiteUrl),
  title: {
    default: "Hotel Vikrant Nainital | Family Hotel 300m From Naini Lake & Mall Road",
    template: "%s | Hotel Vikrant Nainital",
  },
  description:
    "Comfortable family stay on Zoo Road near Upper Mall Road, Nainital. 300m from Naini Lake. Deluxe rooms & 4-bed family suites, 24x7 hot water geysers, 100% power backup, high-speed WiFi & fresh in-room dining. Book direct & save 15%.",
  keywords: [
    "Hotel Vikrant Nainital",
    "Family Hotel in Nainital",
    "Hotels in Nainital Mall Road",
    "Budget Hotel Near Naini Lake",
    "Hotel Near Mall Road Nainital",
    "Best Hotel in Tallital",
    "Hotel Near Zoo Road",
    "Hotel Near Naina Devi Temple",
    "Deluxe Rooms Nainital",
    "4 Bedded Family Room Nainital",
    "Mountain View Hotel Nainital",
    "Affordable Hotel Nainital",
    "Weekend Stay Nainital",
  ],
  authors: [{ name: "Hotel Vikrant Nainital" }],
  creator: "Hotel Vikrant Nainital",
  publisher: "Hotel Vikrant Nainital",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: HOTEL_DATA.websiteUrl,
  },
  openGraph: {
    title: "Hotel Vikrant Nainital | Family Hotel Near Naini Lake & Mall Road",
    description:
      "Stay 300m from Naini Lake with mountain views, spacious 4-bed family suites, 24x7 hot water, high-speed WiFi, and fresh in-room dining. Direct bookings save 15%.",
    url: HOTEL_DATA.websiteUrl,
    siteName: "Hotel Vikrant Nainital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/IMG_8038.webp",
        width: 1200,
        height: 800,
        alt: "Hotel Vikrant Nainital Building & Mountain Facade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Vikrant Nainital | Family Hotel Near Naini Lake",
    description:
      "Spacious rooms & 4-bed family suites on Zoo Road, 300m from Naini Lake. 24x7 hot water, power backup, and fresh home-cooked in-room dining.",
    images: ["/images/gallery/IMG_8038.webp"],
  },
  icons: {
    icon: "/images/logo/hotel-vikrant-logo.svg",
    shortcut: "/images/logo/hotel-vikrant-logo.svg",
    apple: "/images/logo/hotel-vikrant-logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <JsonLd type="home" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] font-sans antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
