"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading, StatChip } from "@/components/UI";
import { experiences, rooms, testimonials } from "@/lib/data";
import HeroSlideshow from "@/components/HeroSlideshow";
import BookingBar from "@/components/BookingBar";

// 1. ADDED: Icons for the Amenities section
import { Plane, Sparkles, Wifi, Shirt, Coffee, CarFront } from "lucide-react";

const slideContent = [
  {
    location: "Shahpur · Kangra · Himachal Pradesh",
    headingMain: "A home in the shadow of the ",
    headingHighlight: "Dhauladhars",
    subheading: "Four rooms, one kitchen, and a mountain that fills the window — a slow-travel homestay in Shahpur, Himachal Pradesh.",
    primaryBtnText: "Enquire",
    primaryBtnLink: "/rooms",
    secondaryBtnText: "Contact Us Now",
    secondaryBtnLink: "/contact"
  },
  {
    location: "Experience · The · Mountains",
    headingMain: "Clean rooms close to the ",
    headingHighlight: "Nature",
    subheading: "Escape the city hustle and find your peace in our cozy retreat nestled high up in the hills.",
    primaryBtnText: "View Rooms",
    primaryBtnLink: "/rooms",
    secondaryBtnText: "Book Now",
    secondaryBtnLink: "/contact"
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentContent = slideContent[activeSlide] || slideContent[0];

  return (
    <main className="overflow-x-hidden">
      
      {/* HERO SECTION UPDATED */}
      <section className="relative w-full overflow-hidden flex flex-col min-h-[100svh] md:block md:h-[100svh] md:min-h-[640px]">
        
        <HeroSlideshow onSlideChange={(index) => setActiveSlide(index)} />
        
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/50" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 flex-1 w-full pt-8 pb-28 md:py-0 md:h-[calc(100%-120px)] max-w-7xl mx-auto px-6 md:px-10 flex items-start md:items-center">
          
          <div key={activeSlide} className="w-full md:pt-[20vh] lg:pt-[24vh] xl:pt-[26vh]">
            
            <p className="animate-fade-up text-black md:text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-5">
              {currentContent.location}
            </p>
            
            <h1
              className="animate-fade-up font-[family-name:var(--font-display)] text-black md:text-white text-5xl sm:text-6xl md:text-6xl leading-[0.98] max-w-4xl text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              {currentContent.headingMain} <span className="italic text-[var(--color-gold)]">{currentContent.headingHighlight}</span>
            </h1>
            
            <p
              className="animate-fade-up mt-6 text-gray-800 md:text-white/85 text-base md:text-xl max-w-xl leading-relaxed"
              style={{ animationDelay: "0.22s" }}
            >
              {currentContent.subheading}
            </p>
            
            <div className="animate-fade-up flex flex-wrap gap-4 mt-9" style={{ animationDelay: "0.34s" }}>
              <PrimaryButton href={currentContent.primaryBtnLink}>
                {currentContent.primaryBtnText}
              </PrimaryButton>
              <PrimaryButton href={currentContent.secondaryBtnLink} variant="light">
                {currentContent.secondaryBtnText}
              </PrimaryButton>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
        
      </section>
      
      <section className="relative -mt-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
            <BookingBar />
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-[var(--color-parchment)] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
            <SectionHeading
              eyebrow="Where you'll sleep"
              title="Four rooms, each facing the mountain differently"
            />
            <PrimaryButton href="/rooms" variant="outline">All Rooms &amp; Rates</PrimaryButton>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className="group animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <p className="text-[var(--color-gold)] text-xs uppercase tracking-widest mb-1">
                      ₹{room.price.toLocaleString("en-IN")} / night
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-white text-xl leading-tight">
                      {room.name}
                    </h3>
                    <p className="text-white/70 text-xs mt-1">{room.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES & SERVICES (Newly Added Section) */}
      <section className="bg-[var(--color-pine)] py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 -translate-x-1/2 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          
          <SectionHeading
            eyebrow="Amenities"
            title="Everything you need for a peaceful stay"
            light
            align="center"
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* 1. Airport Pick-up */}
            <div className="animate-fade-up flex flex-col gap-4">
              <Plane className="w-10 h-10 text-[var(--color-gold)]" strokeWidth={1.2} />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white tracking-wide">
                Airport Pick-up Service
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Rustic Roots is located just 25 minutes from Kangra Airport. To make your journey seamless, we offer a convenient pick-up and drop-off service, ensuring a comfortable and stress-free transfer straight to your peaceful retreat.
              </p>
            </div>

            {/* 2. Housekeeping */}
            <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="w-10 h-10 text-[var(--color-gold)]" strokeWidth={1.2} />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white tracking-wide">
                Housekeeping Services
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Our dedicated housekeeping team maintains the cleanliness of your room and common areas daily. Fresh linens, towels, and toiletries are provided, ensuring your space is always tidy, welcoming, and comfortable.
              </p>
            </div>

            {/* 3. WiFi */}
            <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "0.2s" }}>
              <Wifi className="w-10 h-10 text-[var(--color-gold)]" strokeWidth={1.2} />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white tracking-wide">
                Wifi & Internet
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We provide 24-hour high-speed Wi-Fi to ensure you stay connected throughout your visit. Whether you need to catch up on remote work, stay in touch with loved ones, or browse the web, enjoy the perfect blend of tranquility and connectivity.
              </p>
            </div>

            {/* 4. Laundry */}
            <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "0.3s" }}>
              <Shirt className="w-10 h-10 text-[var(--color-gold)]" strokeWidth={1.2} />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white tracking-wide">
                Laundry Services
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We offer laundry services to ensure our guests enjoy a hassle-free stay. Whether you need to freshen up your clothes during a longer stay or simply want to pack light, our efficient service is available to meet your needs.
              </p>
            </div>

            {/* 5. Breakfast in Bed */}
            <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "0.4s" }}>
              <Coffee className="w-10 h-10 text-[var(--color-gold)]" strokeWidth={1.2} />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white tracking-wide">
                Breakfast in Bed
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We offer the option for breakfast in bed for guests who wish to enjoy a cozy start to their day. Let us know your preferences, and our team will ensure a fresh, homemade morning meal is served to your room with care.
              </p>
            </div>

            {/* 6. Parking */}
            <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "0.5s" }}>
              <CarFront className="w-10 h-10 text-[var(--color-gold)]" strokeWidth={1.2} />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white tracking-wide">
                Private Parking Space
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We provide private parking services with secure space for your personal vehicles. Our well-maintained parking area, located right at the homestay, offers easy access and peace of mind while you explore the scenic beauty of Shahpur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCES STRIP */}
      <section className="bg-[var(--color-parchment)] py-24 md:py-32 relative overflow-hidden">
        {/* Adjusted background color above from pine to parchment to match flow, removed old gold blur */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <SectionHeading
            eyebrow="Beyond the room"
            title="What you'll actually do all day"
            description="Shahpur isn't a checklist of sights — it's tea gardens, quiet trails, and a kitchen that keeps offering seconds. Here's a taste of it."
            
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp) => (
              <div key={exp.title} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[var(--color-pine)] text-xl mb-2">
                  {exp.title}
                </h3>
                <p className="text-[var(--color-ink)]/70 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PrimaryButton href="/experiences" variant="outline">See All Experiences</PrimaryButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--color-parchment)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Guest notes" title="A few words from our kitchen table" align="center" />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 border border-[var(--color-cream-deep)] relative"
              >
                <span className="absolute top-6 right-8 font-[family-name:var(--font-display)] text-6xl text-[var(--color-cream-deep)] italic select-none">
                  &rdquo;
                </span>
                <p className="text-[var(--color-ink)]/80 leading-relaxed italic font-[family-name:var(--font-display)] text-lg pr-8">
                  {t.quote}
                </p>
                <p className="mt-6 text-sm font-semibold text-[var(--color-rust)] uppercase tracking-wide">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAFÉ RUSTIC */}
      <section className="bg-[var(--color-parchment)] pt-8 pb-24 md:pt-10 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            {/* Content */}
            <div className="animate-fade-up">
              <SectionHeading
                eyebrow="Café Rustic"
                title="Homemade food with mountain views"
                description="Whether you're beginning your day with a hearty breakfast or winding down over coffee at sunset, Café Rustic brings together comforting food, local flavours, and panoramic views of the Dhauladhar mountains."
              />
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">🍳 Fresh Breakfast</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Start your morning with freshly prepared breakfasts and mountain air.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">🍲 Local Flavours</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Enjoy homemade Himachali dishes and comforting family recipes.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">☕ Coffee & Snacks</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Relax with coffee, tea, and freshly prepared evening snacks.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">🌄 Scenic Dining</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Indoor and outdoor seating overlooking the Dhauladhar mountains.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-up" style={{ animationDelay: ".15s" }}>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/cafe/cafe.webp"
                  alt="Café Rustic"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-[var(--color-cream-deep)] px-6 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-rust)]">
                  Open Daily
                </p>
                <p className="mt-1 text-2xl font-[family-name:var(--font-display)]">
                  8 AM – 10 PM
                </p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  Breakfast • Lunch • Dinner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET YOUR HOST */}
      <section className="bg-[var(--color-parchment)] pt-0 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7 items-center">
            {/* Image */}
            <div className="relative animate-fade-up">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/host/host.webp"
                  alt="Host of Dhauladhar Basera"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-[var(--color-cream-deep)] px-6 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-rust)]">
                  Guests Hosted
                </p>
                <p className="mt-1 text-3xl font-[family-name:var(--font-display)]">
                  14+
                </p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  Years welcoming guests
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-up" style={{ animationDelay: ".15s" }}>
              <SectionHeading
                eyebrow="Meet Your Host"
                title="The person behind Rustic Roots"
                description=" Hi, I'm Purvansh Sharma, a local from Kangra valley who opened this stay to travellers looking for a slower way to experience Himachal. Every guest is welcomed with genuine hospitality, meals, local stories, and recommendations that only someone who has lived here their whole life can offer."
              />
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">🏡 Family-run</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Warm hospitality that feels like staying with friends.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">🍲 Homemade Meals</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Fresh Pahadi food prepared in our kitchen.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">🥾 Local Guidance</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Hidden viewpoints, village walks and trekking advice.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
                  <h4 className="font-semibold mb-2">☕ Slow Mornings</h4>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    Tea, mountain air and conversations you'll remember.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[var(--color-cream)] pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Find Us"
            title="Easy to reach, impossible to forget"
            description="Nestled in the peaceful hills of Shahpur, Dhauladhar Basera offers mountain views while remaining conveniently connected to Dharamshala and Kangra."
            align="center"
          />
          <div className="mt-14 overflow-hidden rounded-[2rem] shadow-xl border border-[var(--color-cream-deep)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5264.98227867392!2d76.1595368!3d32.2254035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5f000fb56067%3A0x6cdf2e85ebcd9ad!2sRustic%20Roots%20stay!5e1!3m2!1sen!2sin!4v1784700972235!5m2!1sen!2sin"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-[400px] md:h-[500px]" 
            />
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-lg">
                📍 Shahpur, Kangra, Himachal Pradesh
              </p>
              <p className="text-[var(--color-ink)]/70 mt-2">
                Approx. 35 minutes from Dharamshala • 25 minutes from Kangra Airport
              </p>
            </div>
            <PrimaryButton
              href="https://maps.app.goo.gl/3bvgAVzHA47Gxxu4A"
              target="_blank"
            >
              Get Directions
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
          alt="Pine forest path near Shahpur"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/70" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Come find the mountain from our balcony"
            description="Four rooms. One family. A view that hasn't gotten old in fourteen years."
            light
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">Check Availability</PrimaryButton>
            <PrimaryButton href="/rooms" variant="light">Browse Rooms</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}