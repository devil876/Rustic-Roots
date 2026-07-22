import Image from "next/image";
import Link from "next/link";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading, StatChip } from "@/components/UI";
import { experiences, rooms, testimonials } from "@/lib/data";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
       <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 h-[calc(100%-120px)] max-w-7xl mx-auto px-6 md:px-10 flex items-center">
  <div className="pt-[18vh] md:pt-[20vh] lg:pt-[24vh] xl:pt-[26vh]">
          <p className="animate-fade-up text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-5">
            Shahpur · Kangra · Himachal Pradesh
          </p>
          <h1
            className="animate-fade-up font-[family-name:var(--font-display)] text-white text-5xl sm:text-6xl md:text-7xl leading-[0.98] max-w-4xl text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            A home in the shadow of the <span className="italic text-[var(--color-gold)]">Dhauladhars</span>
          </h1>
          <p
            className="animate-fade-up mt-6 text-white/85 text-base md:text-xl max-w-xl leading-relaxed"
            style={{ animationDelay: "0.22s" }}
          >
            Four rooms, one family kitchen, and a mountain that fills the window —
            a slow-travel homestay on the pine slopes above Shahpur.
          </p>
          <div className="animate-fade-up flex flex-wrap gap-4 mt-9" style={{ animationDelay: "0.34s" }}>
            <PrimaryButton href="/rooms">View Rooms &amp; Rates</PrimaryButton>
            <PrimaryButton href="/contact" variant="light">Check Availability</PrimaryButton>
          </div>
        </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <MountainRidge fill="var(--color-parchment)" />
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

      {/* EXPERIENCES STRIP */}
      <section className="bg-[var(--color-pine)] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <SectionHeading
            eyebrow="Beyond the room"
            title="What you'll actually do all day"
            description="Shahpur isn't a checklist of sights — it's tea gardens, quiet trails, and a kitchen that keeps offering seconds. Here's a taste of it."
            light
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
                <h3 className="font-[family-name:var(--font-display)] text-white text-xl mb-2">
                  {exp.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PrimaryButton href="/experiences" variant="light">See All Experiences</PrimaryButton>
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
            <h4 className="font-semibold mb-2">
              🍳 Fresh Breakfast
            </h4>

            <p className="text-sm text-[var(--color-ink)]/70">
              Start your morning with freshly prepared breakfasts and mountain air.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
            <h4 className="font-semibold mb-2">
              🍲 Local Flavours
            </h4>

            <p className="text-sm text-[var(--color-ink)]/70">
              Enjoy homemade Himachali dishes and comforting family recipes.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
            <h4 className="font-semibold mb-2">
              ☕ Coffee & Snacks
            </h4>

            <p className="text-sm text-[var(--color-ink)]/70">
              Relax with coffee, tea, and freshly prepared evening snacks.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-5">
            <h4 className="font-semibold mb-2">
              🌄 Scenic Dining
            </h4>

            <p className="text-sm text-[var(--color-ink)]/70">
              Indoor and outdoor seating overlooking the Dhauladhar mountains.
            </p>
          </div>

        </div>

        <div className="mt-10 flex gap-4 flex-wrap">


        </div>

      </div>

      {/* Image */}

      <div
        className="relative animate-fade-up"
        style={{ animationDelay: ".15s" }}
      >

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

        {/* Features */}

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

        <div className="mt-10">

    

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
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  className="w-full h-full"
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
