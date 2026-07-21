export const SITE = {
  name: "Rustic Roots ",
  tagline: "A homestay on the pine slopes above Shahpur",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "stay@dhauladharbasera.in",
  address: "Village Bhawarna Road, Shahpur, District Kangra, Himachal Pradesh 176206",
  mapsQuery: "Shahpur, Kangra, Himachal Pradesh",
};

export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  size: string;
  occupancy: string;
  bed: string;
  view: string;
  image: string;
  gallery: string[];
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "dhauladhar-suite",
    name: "Dhauladhar Suite",
    tagline: "Wake up to the snow line",
    description:
      "Our largest room, set on the top floor with a private balcony that faces the Dhauladhar range head-on. Mornings here start with the peaks turning gold before the valley below has even woken up.",
    price: 4200,
    size: "320 sq ft",
    occupancy: "2 adults + 1 child",
    bed: "King bed",
    view: "Full Dhauladhar range",

image: "/rooms/room1/Room1image1.webp",

gallery: [
  "/rooms/room1/Room1image1.webp",
  "/rooms/room1/Room1image2.webp",
  
],

amenities: ["Private balcony", "Mountain-facing king bed", "Attached bath with geyser", "Study nook", "Bukhari (wood stove) on request"],
  },
  {
    slug: "kangra-valley-room",
    name: "Kangra Valley Room",
    tagline: "Terraced fields, tea gardens, open sky",
    description:
      "A ground-floor room that opens straight onto the terrace garden, looking down over the tea-covered slopes toward the Kangra valley. Quiet, low, and close to the kitchen — perfect for early risers.",
    price: 3400,
    size: "260 sq ft",
    occupancy: "2 adults",
    bed: "Queen bed",
    view: "Tea gardens & valley",
    image: "/rooms/room2/Room2image1.webp",
    gallery: [
  "/rooms/room2/Room2image1.webp",
  "/rooms/room2/Room2image2.webp",
  
],
    amenities: ["Direct garden access", "Sit-out with cane chairs", "Attached bath", "Reading lamp", "Extra mattress on request"],
  },
  {
    slug: "deodar-room",
    name: "Deodar Room",
    tagline: "Tucked under the old cedar",
    description:
      "Named for the century-old deodar tree that shades its window, this is the coziest room in the house — timber ceiling, warm quilts, and the smell of pine drifting in every evening.",
    price: 3000,
    size: "220 sq ft",
    occupancy: "2 adults",
    bed: "Queen bed",
    view: "Pine forest",
    image: "/rooms/room3/Room3image1.webp",
    gallery: [
  "/rooms/room3/Room3image1.webp",
  "/rooms/room3/Room3image2.webp",
  
],
    amenities: ["Wood-panelled interiors", "Window seat", "Attached bath with hot water", "Extra quilts for winter", "Reading corner"],
  },
  {
    slug: "attic-nest",
    name: "The Attic Nest",
    tagline: "Sloped ceilings, skylight stars",
    description:
      "A snug attic room with a skylight over the bed — on clear nights you can see the stars without leaving your quilt. Best suited for solo travellers or couples who like small, characterful spaces.",
    price: 2400,
    size: "160 sq ft",
    occupancy: "1–2 adults",
    bed: "Double bed",
    view: "Sky & rooftops",
    image: "/rooms/room4/Room4image1.webp",
    gallery: [
  "/rooms/room4/Room4image1.webp",
  "/rooms/room4/Room4image2.webp",
  
],
    amenities: ["Skylight window", "Compact work desk", "Shared bath (private during stay)", "Reading lamp", "Best sunset light in the house"],
  },
];

export const experiences = [
  {
    title: "Pahadi Kitchen Table",
    description:
      "Meals are cooked to order on a wood-fired chulha — madra, siddu, kachalu, and whatever the garden gives that week — eaten together at one long table.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Tea Garden Walks",
    description:
      "A ten-minute walk drops you into the Shahpur tea estates. We arrange an early walk timed to the mist lifting off the bushes.",
    image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?auto=format&fit=crop&w=1400&q=80",
  },

  {
    title: "Kareri Lake & Dhauladhar Treks",
    description:
      "For the more adventurous, we help plan multi-day treks toward Kareri Lake and the Dhauladhar base camps, with local guides we've known for years.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80",
  },

  {
    title: "Village Walks & Farm Visits",
    description:
      "Wander the terraced fields around Shahpur with our host family, stopping at neighbours' farms for jaggery, apricots, or just conversation.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758b0f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Day Trip: Masroor & Kangra Fort",
    description:
      "We arrange a driver for the loop to the rock-cut Masroor temples and the ridgetop Kangra Fort — best done as a single unhurried day.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80",
  },
  
];

export const attractions = [
  {
    name: "Chinmaya Tapovan",
    distance: "2 km",
    description:
      "A riverside ashram at the foot of the Dhauladhars, a short stroll from the homestay — quiet gardens and a meditation hall open to visitors.",
  },
  {
    name: "Bandla Dam",
    distance: "6 km",
    description:
      "A small reservoir ringed by pine forest, good for an easy evening walk or a picnic with the Dhauladhar range as backdrop.",
  },
  {
    name: "Masroor Rock-Cut Temples",
    distance: "35 km",
    description:
      "Monolithic 8th-century temples carved from a single rock outcrop — often called the 'Ellora of the Hills'. Best combined with Kangra Fort as a day trip.",
  },
  {
    name: "Kangra Fort",
    distance: "28 km",
    description:
      "One of the oldest and largest forts in the Himalayas, with sweeping views over the Ban Ganga and Manjhi rivers.",
  },
  {
    name: "Palampur Tea Gardens",
    distance: "32 km",
    description:
      "Rolling emerald tea estates and the region's tea-tasting rooms, roughly an hour's drive along the valley road.",
  },
  {
    name: "Pong Dam Wetlands",
    distance: "45 km",
    description:
      "A Ramsar wetland site and winter home to migratory birds from Central Asia and Siberia — bring binoculars between November and March.",
  },
  {
    name: "McLeod Ganj & Dharamshala",
    distance: "25 km",
    description:
      "The Tibetan quarter, Bhagsu waterfall, and Triund's trailhead — an easy day trip if you want a change of pace from the quiet of Shahpur.",
  },
  {
    name: "Gopalpur Zoo & Nature Park",
    distance: "18 km",
    description:
      "Himachal's high-altitude zoo, home to snow leopards, red pandas, and Himalayan black bears in forested enclosures.",
  },
];

export const testimonials = [
  {
    name: "Renu & Arvind, Delhi",
    quote:
      "We came for two nights and stayed for five. The family treats you like you've been coming for years, and the view from the Dhauladhar Suite is something we still talk about.",
  },
  {
    name: "Marta, Barcelona",
    quote:
      "Found this place while looking for something away from McLeod Ganj's crowds. Exactly what I needed — home cooking, quiet mornings, and a genuinely warm family.",
  },
  {
    name: "Kabir, Bengaluru",
    quote:
      "The bonfire evening with roasted corn and the host's stories about old Shahpur is the memory that has stuck with me most from Himachal.",
  },
  {
    name: "The Sharma Family, Chandigarh",
    quote:
      "Travelling with two young kids and elderly parents, we needed comfort and warmth over luxury. This homestay gave us both, plus a garden the kids didn't want to leave.",
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80", alt: "Dhauladhar range at sunrise", tag: "Views" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80", alt: "Pine forest around the homestay", tag: "Nature" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80", alt: "Dhauladhar Suite interior", tag: "Rooms" },
  { src: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?auto=format&fit=crop&w=1400&q=80", alt: "Tea gardens near Shahpur", tag: "Views" },
  { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1400&q=80", alt: "Home-cooked Pahadi thali", tag: "Food" },
  { src: "https://images.unsplash.com/photo-1602088113235-229c19758b0f?auto=format&fit=crop&w=1400&q=80", alt: "Village walk near the homestay", tag: "Nature" },
  { src: "https://images.unsplash.com/photo-1475855664986-8a1cec3f5b40?auto=format&fit=crop&w=1400&q=80", alt: "Bonfire evening in the courtyard", tag: "Experiences" },
  { src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1400&q=80", alt: "Kangra Valley Room", tag: "Rooms" },
  { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80", alt: "Trail toward Kareri Lake", tag: "Experiences" },
  { src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1400&q=80", alt: "Courtyard breakfast table", tag: "Food" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80", alt: "Ancient carved temple stone", tag: "Views" },
  { src: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1400&q=80", alt: "Deodar Room window seat", tag: "Rooms" },
];

export const faqs = [
  {
    q: "How far is the homestay from Kangra airport (Gaggal)?",
    a: "About 16 km, roughly 35–40 minutes by road. We can arrange a pickup if you share your flight details in advance.",
  },
  {
    q: "Do you serve meals, and can you accommodate dietary needs?",
    a: "Breakfast is included with every stay; lunch and dinner are available on request and cooked to order. We happily adjust for vegetarian, Jain, or allergy-specific needs — just let us know while booking.",
  },
  {
    q: "Is the homestay suitable for families with children or elderly parents?",
    a: "Yes — the Kangra Valley Room on the ground floor is ideal for elderly guests, and the garden and courtyard are safely enclosed for children to play.",
  },
  {
    q: "What is the best time of year to visit Shahpur?",
    a: "March–June for clear Dhauladhar views and blooming orchards, and September–November for crisp air and post-monsoon greenery. December–February brings occasional snow on the peaks, visible from every room.",
  },
  {
    q: "Do you offer trekking or sightseeing arrangements?",
    a: "Yes — we work with local guides and drivers for day trips to Kangra Fort, Masroor, Palampur, and McLeod Ganj, as well as treks toward Kareri Lake and the Dhauladhar base camps.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 7 days before check-in. Cancellations within 7 days are charged one night's stay. Please call or WhatsApp us directly for date changes.",
  },
];
