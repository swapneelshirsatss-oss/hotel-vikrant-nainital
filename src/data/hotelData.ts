export interface Room {
  id: string;
  name: string;
  badge: string;
  shortDesc: string;
  description: string;
  price: string;
  priceNote: string;
  size: string;
  occupancy: string;
  bedConfig: string;
  images: string[];
  features: string[];
  amenities: string[];
  bestFor: string;
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
  highlight?: boolean;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  shortDesc: string;
  description: string;
  icon: string;
  image: string;
  category: "Nature & Lake" | "Heritage & Spiritual" | "Adventure & Wildlife" | "Shopping & Stroll";
}

export interface Review {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  reviewText: string;
  stayType: string;
  highlight: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: "Booking" | "Location" | "Amenities" | "Dining";
}

export interface SisterProperty {
  name: string;
  location: string;
  url: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "rooms" | "exterior" | "views" | "dining";
  alt: string;
}

export interface FeederCorridor {
  city: string;
  distance: string;
  driveTime: string;
  primaryHighway: string;
  routeBreakdown: string;
  navUrl: string;
}

export interface TrainConnection {
  trainNumber: string;
  trainName: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  frequency: string;
  stationTaxiTip: string;
}

export interface TransitHub {
  hubName: string;
  code?: string;
  distance: string;
  travelTime: string;
  hubType: "Airport" | "Railway Station" | "Bus Terminal" | "Pilgrimage Hub";
  description: string;
  routeTips: string;
}

export interface ThematicPersona {
  persona: string;
  badge: string;
  title: string;
  summary: string;
  recommendedRoom: string;
  perks: string[];
  anchorLink: string;
}

export const HOTEL_DATA = {
  name: "Hotel Vikrant Nainital",
  shortName: "Hotel Vikrant",
  canonicalEntityName: "Hotel Vikrant Nainital | Family Hotel Near Naini Lake",
  tagline: "Your Comfortable Family Stay Near Naini Lake",
  subheadline: "Stay just 300 meters from Naini Lake on Zoo Road with spacious rooms, 4-bed family suites, 24x7 geyser hot water, and warm Himalayan hospitality.",
  phone: "8279561741",
  phoneFormatted: "+91 82795 61741",
  phoneTel: "tel:+918279561741",
  phoneRawE164: "+918279561741",
  whatsappNumber: "918279561741",
  whatsappUrl: "https://wa.me/918279561741",
  email: "vikranthotelnainital@gmail.com",
  address: {
    street: "Zoo Road, Upper Mall Road",
    locality: "Tallital",
    tehsil: "Tehsil - Nainital",
    district: "District - Nainital",
    city: "Nainital",
    state: "Uttarakhand",
    postalCode: "263001",
    country: "India",
  },
  fullAddress: "Zoo Road, Upper Mall Road, Tallital, Tehsil - Nainital, District - Nainital, Nainital, Uttarakhand - 263001, India",
  coordinates: {
    latitude: 29.3809047,
    longitude: 79.4657359,
  },
  websiteUrl: "https://vikranthotelnainital.in",
  googleMapsCid: "7750087120812246358",
  googleMapsCidUrl: "https://maps.google.com/maps?cid=7750087120812246358",
  googlePlaceUrl: "https://maps.google.com/maps?cid=7750087120812246358",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJnahAovChojkRVgVYetPXjWs",
  googleMapsUrl: "https://maps.google.com/maps?cid=7750087120812246358",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.4312689531835!2d79.46316097587823!3d29.380909349887713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1f0a200a89d%3A0x6b8dd72cb6580556!2sHotel%20Vikrant!5e0!3m2!1sen!2sin!4v1709800000000!5m2!1sen!2sin",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  operatingHours: "24 Hours Front Desk",
  rating: 4.8,
  totalReviews: 128,

  stats: [
    { label: "Distance to Naini Lake", value: "300 Mtr", subtext: "Easy 4-min walk" },
    { label: "Guest Satisfaction", value: "4.8 ★", subtext: "Verified direct reviews" },
    { label: "Front Desk & Service", value: "24×7", subtext: "Round-the-clock support" },
    { label: "Direct Savings", value: "15%", subtext: "Zero middleman OTA fee" },
  ],

  rooms: [
    {
      id: "deluxe-room",
      name: "Deluxe Mountain View Room",
      badge: "Popular for Couples & Small Families",
      shortDesc: "Cozy, sunlit room with plush double bed, wide mountain-view windows, and modern private bathroom with 24x7 geyser hot water.",
      description: "Designed for peaceful Himalayan comfort, our Deluxe Rooms offer picturesque views of the forested Nainital ridges. Featuring crisp white linens, high-speed WiFi, LED TV, and an electric kettle for fresh morning tea. Enjoy delicious home-cooked meals served straight to your bedside through our prompt in-room dining service.",
      price: "Seasonal Tariff",
      priceNote: "Rates vary by season & travel dates (15% direct booking discount)",
      size: "220 sq. ft.",
      occupancy: "2 Adults + 1 Child",
      bedConfig: "1 King/Queen Bed with ergonomic mattress",
      images: [
        "/images/gallery/IMG_8044.webp",
        "/images/gallery/IMG_8045.webp",
        "/images/gallery/IMG_8046.webp",
        "/images/gallery/IMG_7970.webp",
        "/images/gallery/IMG_7971.webp",
        "/images/gallery/IMG_8042.webp",
      ],
      features: ["Scenic Pine & Mountain View", "24×7 Hot Water Geyser", "High-Speed WiFi", "Electric Kettle & Tea Kit"],
      amenities: [
        "Plush King/Queen bed with fresh sanitized linens",
        "Attached modern bathroom with instant 24x7 geyser",
        "High-Speed Fiber WiFi coverage",
        "Flat-screen LED TV with satellite channels",
        "In-Room Dining Service (Hot meals & tea)",
        "100% Power backup during power fluctuations",
        "Electric kettle with complimentary tea & coffee sachets",
        "Daily housekeeping & hygiene protocol",
        "Large wardrobe and luggage rack",
      ],
      bestFor: "Couples, solo travelers, and weekend explorers wanting central convenience near Mall Road.",
    },
    {
      id: "family-suite",
      name: "Spacious 4-Bedded Family Suite",
      badge: "Best for Families & Groups",
      shortDesc: "Generous family suite with two large double beds, comfortable seating area, and sweeping valley windows, perfect for staying together.",
      description: "Traveling with family or kids? Our 4-Bedded Family Suite provides the ideal shared sanctuary in Nainital. With two king/queen beds, ample floor space for luggage, and comfortable seating, your whole family stays comfortably under one roof without needing split rooms. Warm room service ensures everyone enjoys hot parathas and comforting dinners together.",
      price: "Seasonal Tariff",
      priceNote: "Rates vary by season & travel dates (15% direct booking discount)",
      size: "380 sq. ft.",
      occupancy: "4 Adults + 2 Children",
      bedConfig: "2 Large Double Beds (Accommodates 4 adults comfortably)",
      images: [
        "/images/gallery/IMG_8048.webp",
        "/images/gallery/IMG_8049.webp",
        "/images/gallery/IMG_8050.webp",
        "/images/gallery/IMG_7974.webp",
        "/images/gallery/IMG_7975.webp",
        "/images/gallery/IMG_7990.webp",
        "/images/gallery/IMG_8043.webp",
      ],
      features: ["Two Double Beds (4-Bedded)", "Expansive Family Seating Area", "Valley & Forest Views", "Family In-Room Dining"],
      amenities: [
        "Two large king/queen beds with orthopedic mattresses",
        "Spacious private bathroom with high-capacity 24x7 hot water geyser",
        "High-speed fiber WiFi across the suite",
        "Comfortable seating sofa and family dining table",
        "Large LED TV with kids and entertainment channels",
        "Dedicated In-Room Dining service with prompt family meal delivery",
        "100% Inverter & generator power backup",
        "Double wardrobe, dressing mirror, and luggage storage",
        "Extra blankets and pillows provided upon request",
        "Daily thorough sanitization and towel replacement",
      ],
      bestFor: "Families with children, parents with elderly family members, and close-knit traveler groups.",
    },
  ] as Room[],

  amenitiesList: [
    {
      id: "dining",
      title: "Fresh In-Room Dining",
      subtitle: "Comforting Home-Cooked Delicacies",
      description: "Enjoy hot, freshly prepared vegetarian meals, piping hot breakfast parathas, and fragrant morning chai served directly in your room. No need to walk out in the cold—our kitchen prepares pure home-style comfort food tailored for families.",
      iconName: "UtensilsCrossed",
      badge: "Guest Favorite",
      highlight: true,
    },
    {
      id: "hot-water",
      title: "24×7 Hot Water Geysers",
      subtitle: "Instant Geyser in Every Bathroom",
      description: "Mountain mornings require reliable warmth. Every private washroom is equipped with individual geysers delivering hot water 24 hours a day.",
      iconName: "Flame",
      badge: "Essential",
      highlight: true,
    },
    {
      id: "wifi",
      title: "High-Speed Fiber WiFi",
      subtitle: "Fast & Uninterrupted Connectivity",
      description: "Stay connected with family, stream your favorite shows, or handle remote work smoothly with dedicated high-speed Wi-Fi covering all rooms and common spaces.",
      iconName: "Wifi",
      badge: "High-Speed",
    },
    {
      id: "power-backup",
      title: "100% Power Backup",
      subtitle: "Continuous Peace of Mind",
      description: "Equipped with power backup systems ensuring lights, charging points, and essential services remain active even during mountain weather disruptions.",
      iconName: "Zap",
    },
    {
      id: "location",
      title: "300m From Naini Lake",
      subtitle: "Central Yet Peaceful on Zoo Road",
      description: "Located on Zoo Road just off Upper Mall Road. You are only a 4-minute gentle walk from the lake and Tallital bazaar, without the noisy traffic bottlenecks.",
      iconName: "MapPin",
      badge: "Prime Spot",
      highlight: true,
    },
    {
      id: "housekeeping",
      title: "Daily Sanitized Housekeeping",
      subtitle: "Spotless Hygiene & Fresh Linens",
      description: "Our dedicated housekeeping staff cleans rooms daily, provides freshly laundered linens and towels, and maintains immaculate cleanliness throughout your stay.",
      iconName: "Sparkles",
    },
    {
      id: "mountain-views",
      title: "Mountain & Valley Views",
      subtitle: "Crisp Himalayan Vistas",
      description: "Wake up to mist-draped deodar pine trees and open mountain skies right from your room windows and hotel balconies.",
      iconName: "Mountain",
    },
    {
      id: "front-desk",
      title: "24×7 Front Desk & Travel Help",
      subtitle: "Warm Kumaoni Concierge",
      description: "Our on-site team is available 24 hours for check-in assistance, local Nainital taxi arrangements, boating guidance, and sightseeing tips.",
      iconName: "Clock",
    },
  ] as Amenity[],

  attractions: [
    {
      id: "naini-lake",
      name: "Naini Lake & Boating Point",
      distance: "300 Meters",
      travelTime: "4 Min Walk",
      shortDesc: "The iconic crescent-shaped natural freshwater lake, heart of Nainital.",
      description: "Enjoy peaceful pedal boating, romantic row boats, and leisurely strolls along the picturesque promenade lined with weeping willows and mountain reflections.",
      icon: "Compass",
      image: "/images/gallery/IMG_7951.webp",
      category: "Nature & Lake",
    },
    {
      id: "mall-road",
      name: "Mall Road & Tallital Market",
      distance: "300 Meters",
      travelTime: "4 Min Walk",
      shortDesc: "Vibrant pedestrian avenue with handicraft boutiques, bakeries, and cafes.",
      description: "Connecting Tallital to Mallital, the Mall Road offers scenic lake vistas on one side and bustling shopping for handmade candles, Kumaoni woollens, and souvenirs on the other.",
      icon: "ShoppingBag",
      image: "/images/gallery/IMG_7979.webp",
      category: "Shopping & Stroll",
    },
    {
      id: "high-altitude-zoo",
      name: "Pt. G.B. Pant High Altitude Zoo",
      distance: "800 Meters",
      travelTime: "10 Min Walk / 3 Min Drive",
      shortDesc: "Located right along Zoo Road, home to rare high-altitude Himalayan wildlife.",
      description: "Situated at 2,100 meters elevation, this renowned zoo houses the elusive Snow Leopard, Himalayan Black Bear, Tibetan Wolf, and vibrant Monal pheasants in lush forested enclosures.",
      icon: "Trees",
      image: "/images/gallery/IMG_8036.webp",
      category: "Adventure & Wildlife",
    },
    {
      id: "naina-devi-temple",
      name: "Maa Naina Devi Temple",
      distance: "1.2 Km",
      travelTime: "15 Min Stroll along lake",
      shortDesc: "Revered 51 Shaktipeeth temple situated right on the lake shore.",
      description: "A deeply spiritual landmark sacred to Goddess Sati, overlooking the northern tip of Naini Lake with peaceful mountain bells and serene waters.",
      icon: "Landmark",
      image: "/images/gallery/IMG_8037.webp",
      category: "Heritage & Spiritual",
    },
    {
      id: "snow-view-point",
      name: "Snow View Point & Ropeway",
      distance: "2.5 Km",
      travelTime: "10 Min Drive / Cable Car",
      shortDesc: "Unrivalled panoramic vista of the majestic snow-capped Himalayan peaks.",
      description: "Reach via an exciting aerial ropeway ride to witness the breathtaking snow peaks of Nanda Devi, Trishul, and Nanda Kot rising above the clouds.",
      icon: "MountainSnow",
      image: "/images/gallery/IMG_8058.webp",
      category: "Adventure & Wildlife",
    },
    {
      id: "eco-cave-garden",
      name: "Eco Cave Garden",
      distance: "3.2 Km",
      travelTime: "12 Min Drive",
      shortDesc: "Natural network of interconnected animal-named caves and musical fountain.",
      description: "A huge favorite among kids and families! Explore narrow rocky caves (Tiger Cave, Panther Cave, Bat Cave) surrounded by terraced alpine gardens.",
      icon: "Footprints",
      image: "/images/gallery/IMG_7991.webp",
      category: "Adventure & Wildlife",
    },
  ] as Attraction[],

  reviews: [
    {
      id: "rev-1",
      author: "Rajesh Sharma",
      location: "New Delhi",
      date: "February 2026",
      rating: 5,
      stayType: "Family Trip with Children",
      highlight: "Perfect family hotel, just 4 minutes from Naini Lake!",
      reviewText: "We booked the 4-bedded Family Suite for 3 nights. The room was very spacious, exceptionally clean, and the geyser provided instant hot water 24/7. The best part is the location on Zoo Road—very peaceful away from the Mall Road horns, yet Naini Lake is literally a 4-minute walk. Fresh home-cooked parathas and chai served right in our room made our stay so comforting. Highly recommended for families!",
    },
    {
      id: "rev-2",
      author: "Pooja Verma",
      location: "Lucknow, UP",
      date: "January 2026",
      rating: 5,
      stayType: "Couple Vacation",
      highlight: "Warm hospitality and great mountain view from room",
      reviewText: "The host and staff are extremely helpful and polite. We booked the Deluxe Room with mountain view. The room had a comfortable bed, fast WiFi, and clean bathroom. Direct booking via WhatsApp was seamless and much cheaper than MakeMyTrip. We walked down to Tallital market and the lake every evening. 10/10 value for money in Nainital!",
    },
    {
      id: "rev-3",
      author: "Amitabh Sen",
      location: "Kolkata, WB",
      date: "December 2025",
      rating: 5,
      stayType: "Family Holiday",
      highlight: "In-room food was fresh and delicious like home",
      reviewText: "Traveling with elderly parents, we were looking for a place with easy access and good food. Hotel Vikrant was a blessing. The staff took great care of us, serving hot dal, roti, and sabzi freshly prepared upon order. Geyser was working continuously even in December freeze. The Zoo Road location is very convenient.",
    },
    {
      id: "rev-4",
      author: "Vikas & Neha Gupta",
      location: "Noida, NCR",
      date: "November 2025",
      rating: 5,
      stayType: "Weekend Getaway",
      highlight: "Best budget hotel near Mall Road",
      reviewText: "Super clean rooms, power backup kept everything running smoothly, and the staff helped arrange a local taxi for Snow View and Cave Garden. Booking direct saved us a good discount compared to online portals. Will definitely visit again on our next Nainital trip!",
    },
  ] as Review[],

  faqs: [
    {
      category: "Location",
      question: "How far is Hotel Vikrant from Naini Lake and Mall Road?",
      answer: "Hotel Vikrant is located on Zoo Road just off Upper Mall Road in Tallital. It is only 300 meters from Naini Lake and the Tallital market—an easy 4 to 5-minute gentle walk, allowing you to reach the lake and boating points without needing a taxi.",
    },
    {
      category: "Dining",
      question: "Do you have a restaurant or meal service?",
      answer: "We offer dedicated In-Room Dining for all our staying guests. We do not operate an open public restaurant; instead, our in-house kitchen prepares fresh, home-cooked vegetarian meals, hot breakfast (parathas, toast, poha, eggs), evening snacks, and ginger chai delivered warm straight to your room.",
    },
    {
      category: "Amenities",
      question: "Is 24-hour hot water available in winter?",
      answer: "Yes, absolutely. Every room features an attached private bathroom equipped with an independent electric water geyser providing hot water 24 hours a day, ensuring comfortable hot showers even in peak winter.",
    },
    {
      category: "Booking",
      question: "Why should I book directly on WhatsApp or Call instead of OTAs?",
      answer: "Booking directly with Hotel Vikrant guarantees you the best room rates with zero middleman platform commissions (saving 10% to 15%). You also receive priority room allocation for upper-floor mountain views, early check-in assistance, and personalized guidance from your host.",
    },
    {
      category: "Amenities",
      question: "Is there power backup and Wi-Fi?",
      answer: "Yes, we provide 100% power backup (inverter and generator) so lights and charging stations stay active during any hill power cuts. We also provide high-speed fiber Wi-Fi throughout all rooms and corridors.",
    },
    {
      category: "Booking",
      question: "What are the standard check-in and check-out timings?",
      answer: "Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be accommodated subject to room availability; please message us in advance on WhatsApp.",
    },
  ] as FAQ[],

  galleryImages: [
    { id: "g1", src: "/images/gallery/IMG_8038.webp", title: "Hotel Vikrant Exterior Facade", category: "exterior", alt: "Hotel Vikrant exterior building facade on Zoo Road Nainital" },
    { id: "g2", src: "/images/gallery/IMG_8044.webp", title: "Deluxe Mountain View Room", category: "rooms", alt: "Deluxe double bedroom with scenic window view" },
    { id: "g3", src: "/images/gallery/IMG_8048.webp", title: "4-Bedded Family Suite", category: "rooms", alt: "Spacious four bedded family suite at Hotel Vikrant" },
    { id: "g4", src: "/images/gallery/IMG_8036.webp", title: "Balcony Mountain Panorama", category: "views", alt: "Pine forested mountain view from hotel balcony" },
    { id: "g5", src: "/images/gallery/IMG_8045.webp", title: "Deluxe Room Interior", category: "rooms", alt: "Clean comfortable bedding and modern interior" },
    { id: "g6", src: "/images/gallery/IMG_8049.webp", title: "Family Suite Two Beds", category: "rooms", alt: "Two king beds in family suite room" },
    { id: "g7", src: "/images/gallery/IMG_8042.webp", title: "Modern Clean Bathroom", category: "rooms", alt: "Sanitized private bathroom with hot water geyser" },
    { id: "g8", src: "/images/gallery/IMG_8040.webp", title: "Upper Mall Road Frontage", category: "exterior", alt: "Hotel Vikrant front entrance and road access" },
    { id: "g9", src: "/images/gallery/IMG_7951.webp", title: "Naini Lake 300m Away", category: "views", alt: "View towards Naini Lake and Tallital promenade" },
    { id: "g12", src: "/images/gallery/IMG_7998.webp", title: "Fresh In-Room Dining Service", category: "dining", alt: "Home-cooked hot meal service for hotel guests" },
    { id: "g13", src: "/images/gallery/IMG_8001.webp", title: "Freshly Cooked Breakfast", category: "dining", alt: "Hot breakfast served fresh to guest rooms" },
    { id: "g14", src: "/images/gallery/IMG_8037.webp", title: "Himalayan Ridge View", category: "views", alt: "Sunny mountain ridges overlooking Nainital" },
    { id: "g15", src: "/images/gallery/IMG_8050.webp", title: "Family Suite Seating Area", category: "rooms", alt: "Comfortable seating setup inside 4-bed family suite" },
    { id: "g16", src: "/images/gallery/IMG_8058.webp", title: "Nainital Pine Forests", category: "views", alt: "Pine forest scenery surrounding Zoo Road" },
  ] as GalleryItem[],

  sisterProperties: [
    {
      name: "Casa De Bello Resort Kainchi Dham",
      location: "Kainchi Dham, Uttarakhand",
      url: "https://casadebello.com/",
      description: "Serene boutique resort near the sacred Neem Karoli Baba Ashram, offering peaceful luxury and scenic Himalayan vistas.",
    },
    {
      name: "Casa De Bello Resort Ramgarh - Whispering Pines Uttarakhand",
      location: "Ramgarh, Uttarakhand",
      url: "https://whisperingpinesresort.in/",
      description: "Picturesque hill resort set amidst lush fruit orchards and whispering pine forests with majestic snow peak views.",
    },
    {
      name: "Anurra Restaurant & Hotel Kainchi Dham",
      location: "Kainchi Dham, Uttarakhand",
      url: "https://anurrakainchidhamhotel.in/",
      description: "Comfortable rooms and authentic multi-cuisine dining experience right in the heart of Kainchi Dham.",
    },
  ] as SisterProperty[],

  feederCorridors: [
    {
      city: "Delhi NCR",
      distance: "295 km",
      driveTime: "6.5–7 hrs",
      primaryHighway: "NE-3 / NH-9 / NH-109",
      routeBreakdown: "Delhi → Hapur Bypass → Moradabad Bypass → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Tallital, Nainital",
      navUrl: "https://www.google.com/maps/dir/Delhi/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Noida & Gr. Noida",
      distance: "290 km",
      driveTime: "6–6.5 hrs",
      primaryHighway: "Eastern Peripheral / NH-9 / NH-109",
      routeBreakdown: "Noida → Dasna → Hapur → Moradabad → Rampur → Rudrapur → Haldwani → Kathgodam → Tallital, Nainital",
      navUrl: "https://www.google.com/maps/dir/Noida/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Gurugram / Gurgaon",
      distance: "330 km",
      driveTime: "7–7.5 hrs",
      primaryHighway: "Western Peripheral / NH-9 / NH-109",
      routeBreakdown: "Gurugram → KMP/NH-48 → Delhi-Meerut Expressway NE-3 → Hapur → Moradabad → Rampur → Haldwani → Nainital",
      navUrl: "https://www.google.com/maps/dir/Gurugram/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Ghaziabad",
      distance: "270 km",
      driveTime: "5.5–6 hrs",
      primaryHighway: "NE-3 / NH-9 / NH-109",
      routeBreakdown: "Ghaziabad → Pilkhuwa → Hapur → Moradabad → Rampur → Bilaspur → Rudrapur → Haldwani → Tallital, Nainital",
      navUrl: "https://www.google.com/maps/dir/Ghaziabad/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Faridabad",
      distance: "315 km",
      driveTime: "7 hrs",
      primaryHighway: "FNG / NH-9 / NH-109",
      routeBreakdown: "Faridabad → Noida-Greater Noida Expressway → Hapur → Moradabad → Rampur → Rudrapur → Haldwani → Nainital",
      navUrl: "https://www.google.com/maps/dir/Faridabad/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Moradabad",
      distance: "150 km",
      driveTime: "3.5 hrs",
      primaryHighway: "NH-9 & NH-109",
      routeBreakdown: "Moradabad → Rampur Bypass → Bilaspur → Rudrapur → Haldwani → Kathgodam → Tallital, Nainital",
      navUrl: "https://www.google.com/maps/dir/Moradabad/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Bareilly",
      distance: "140 km",
      driveTime: "3.5 hrs",
      primaryHighway: "NH-30 & NH-109",
      routeBreakdown: "Bareilly → Baheri → Kichha → Lal Kuan → Haldwani → Kathgodam → Tallital, Nainital",
      navUrl: "https://www.google.com/maps/dir/Bareilly/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Lucknow",
      distance: "385 km",
      driveTime: "8 hrs",
      primaryHighway: "NH-30 & NH-109",
      routeBreakdown: "Lucknow → Sitapur → Shahjahanpur → Bareilly → Baheri → Kichha → Haldwani → Kathgodam → Nainital",
      navUrl: "https://www.google.com/maps/dir/Lucknow/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
    {
      city: "Chandigarh",
      distance: "445 km",
      driveTime: "8.5–9 hrs",
      primaryHighway: "NH-7 / NH-344 / NH-109",
      routeBreakdown: "Chandigarh → Ambala → Saharanpur → Roorkee → Haridwar → Kashipur → Bazpur → Kaladhungi → Nainital",
      navUrl: "https://www.google.com/maps/dir/Chandigarh/Hotel+Vikrant,+Zoo+Road,+Tallital,+Nainital,+Uttarakhand+263001/@29.0069094,77.7788414,8z",
    },
  ] as FeederCorridor[],

  trainConnections: [
    {
      trainNumber: "12040 / 12039",
      trainName: "New Delhi - Kathgodam Shatabdi Express",
      from: "New Delhi (NDLS)",
      to: "Kathgodam (KGM)",
      departureTime: "06:20 AM",
      arrivalTime: "11:40 AM",
      duration: "5h 20m",
      frequency: "Runs Daily",
      stationTaxiTip: "Executive & AC Chair car. Connects with pre-paid hill cabs at Kathgodam (~1 hr drive to Tallital, ₹800–1200 private or ₹150 shared).",
    },
    {
      trainNumber: "15013 / 15014",
      trainName: "Ranikhet Express",
      from: "Old Delhi (DLI) / Jaisalmer / Jaipur",
      to: "Kathgodam (KGM)",
      departureTime: "21:25 PM",
      arrivalTime: "05:05 AM",
      duration: "7h 40m",
      frequency: "Runs Daily",
      stationTaxiTip: "Overnight sleeper & AC train. Arrives early morning; early check-in assistance provided upon prior WhatsApp request.",
    },
    {
      trainNumber: "15035 / 15036",
      trainName: "Uttaranchal Sampark Kranti Express",
      from: "Old Delhi (DLI)",
      to: "Kathgodam (KGM)",
      departureTime: "16:00 PM",
      arrivalTime: "22:45 PM",
      duration: "6h 45m",
      frequency: "Runs Daily",
      stationTaxiTip: "Convenient evening express. 24x7 front desk at Hotel Vikrant welcomes late arrivals with warm tea.",
    },
    {
      trainNumber: "13019 / 13020",
      trainName: "Bagh Express",
      from: "Howrah (HWH) / Lucknow / Gorakhpur",
      to: "Kathgodam (KGM)",
      departureTime: "00:30 AM (Lucknow)",
      arrivalTime: "09:25 AM",
      duration: "8h 55m",
      frequency: "Runs Daily",
      stationTaxiTip: "Connects Eastern UP, Bihar, and West Bengal travelers smoothly into Kumaon.",
    },
  ] as TrainConnection[],

  transitHubs: [
    {
      hubName: "Kathgodam Railway Station",
      code: "KGM",
      distance: "34 km",
      travelTime: "1 Hour Drive",
      hubType: "Railway Station",
      description: "Primary rail gateway to Nainital & Kumaon hills. 24x7 pre-paid and shared mountain cabs run to Tallital drop stand.",
      routeTips: "Cabs drop at Tallital taxi stand (400m from hotel). A gentle 4-min walk up Zoo Road brings you to our front desk.",
    },
    {
      hubName: "Tallital Bus Stand (Nainital)",
      code: "UTC",
      distance: "400 Meters",
      travelTime: "4–5 Min Walk",
      hubType: "Bus Terminal",
      description: "Direct Volvo, AC, and Deluxe Uttarakhand Transport (UTC) state buses from ISBT Anand Vihar, Delhi and Dehradun.",
      routeTips: "Walk towards Zoo Road off Upper Mall Road. No taxi needed—we are just an easy stroll up the gentle road.",
    },
    {
      hubName: "Tallital Rickshaw Stand",
      distance: "300 Meters",
      travelTime: "3–4 Min Walk",
      hubType: "Bus Terminal",
      description: "Traditional lakeside rickshaws provide scenic transit connecting Tallital to Mallital along Mall Road.",
      routeTips: "Ideal for leisurely evening promenades along Naini Lake.",
    },
    {
      hubName: "Pantnagar Airport",
      code: "PGH",
      distance: "70 km",
      travelTime: "2 Hours Drive",
      hubType: "Airport",
      description: "Nearest domestic commercial airport with daily direct flights from Delhi (Alliance Air / IndiGo).",
      routeTips: "Mountain taxis available outside terminal via Rudrapur, Haldwani & Kathgodam to Nainital.",
    },
    {
      hubName: "Bareilly Airport",
      code: "BEK",
      distance: "140 km",
      travelTime: "3.5 Hours Drive",
      hubType: "Airport",
      description: "Regional airport connecting Mumbai, Bengaluru, and Lucknow via direct commercial flights.",
      routeTips: "Direct private cabs reach Nainital in 3.5 hours via NH-30 and NH-109.",
    },
    {
      hubName: "Indira Gandhi International Airport, Delhi",
      code: "DEL",
      distance: "310 km",
      travelTime: "6.5–7 Hours",
      hubType: "Airport",
      description: "Main international flight hub. Travelers can connect via Delhi-Kathgodam Shatabdi train or private chauffeur cab.",
      routeTips: "Expressway route via Delhi-Meerut Expressway (NE-3) and NH-9.",
    },
    {
      hubName: "Kainchi Dham (Neem Karoli Baba Ashram)",
      distance: "18 km",
      travelTime: "40–45 Mins",
      hubType: "Pilgrimage Hub",
      description: "World-renowned sacred ashram of Neem Karoli Baba Maharaj. Hotel Vikrant serves as a peaceful lakeside basecamp.",
      routeTips: "Scenic drive along the Bhowali-Almora highway. Local cabs readily arranged at our front desk.",
    },
  ] as TransitHub[],

  thematicPersonas: [
    {
      persona: "Metro Families",
      badge: "Spacious Family Stays",
      title: "Spacious 4-Bedded Suites for Parents & Kids",
      summary: "Comfortable family suites with two king beds under one roof, 24x7 geyser hot water, pure home-cooked in-room dining, and easy 4-minute walk to lake boating.",
      recommendedRoom: "4-Bedded Family Suite",
      perks: ["Zero room splitting", "Piping hot home meals in-room", "Safe peaceful Zoo Road setting", "300m walk to lake"],
      anchorLink: "/rooms#family-suite",
    },
    {
      persona: "Couples & Serenity Seekers",
      badge: "Scenic Mountain Escape",
      title: "Deluxe Mountain View Rooms Away From Noise",
      summary: "Wake up to misty pine valley views from your window. Enjoy warm morning ginger chai and quiet evenings away from the Mall Road horns and bustle.",
      recommendedRoom: "Deluxe Mountain View Room",
      perks: ["Forest & valley vistas", "Quiet sanctuary 300m off Mall Road", "Fast fiber WiFi", "Romantic lake strolls"],
      anchorLink: "/rooms#deluxe-room",
    },
    {
      persona: "Pilgrims & Spiritual Travelers",
      badge: "Spiritual Basecamp",
      title: "Peaceful Basecamp for Kainchi Dham & Naina Devi",
      summary: "Located just 18 km from Neem Karoli Baba Ashram (Kainchi Dham) and 1.2 km from Maa Naina Devi Temple. Enjoy peaceful rest and pure vegetarian dining.",
      recommendedRoom: "Deluxe or Family Suite",
      perks: ["18 km to Kainchi Dham", "1.2 km to Naina Devi Temple", "Pure vegetarian satvik dining on request", "Taxi assistance to ashram"],
      anchorLink: "/attractions#kainchi-dham",
    },
    {
      persona: "Workationers & Remote Nomads",
      badge: "High-Speed Workation",
      title: "Himalayan Workstation with Fiber WiFi & Power Backup",
      summary: "Stay productive with high-speed fiber internet, 100% inverter and generator power backup, fresh tea on demand, and scenic mountain views during Zoom calls.",
      recommendedRoom: "Deluxe Mountain View Room",
      perks: ["High-speed fiber WiFi", "100% power backup", "Ergonomic work desk setup", "Extended stay discounts"],
      anchorLink: "/amenities#wifi",
    },
  ] as ThematicPersona[],
};
