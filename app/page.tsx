import Image from "next/image";
import Link from "next/link";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading, StatChip } from "@/components/UI";
import { experiences, rooms, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Dhauladhar mountain range above Shahpur, Kangra at sunrise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-28 md:pb-32">
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

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[var(--color-parchment)] pt-2 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <SectionHeading
              eyebrow="Welcome"
              title="Not a hotel. Just our home, with a spare room and a full table."
              description="Dhauladhar Basera began as our own family house on the edge of Shahpur town — three generations, a kitchen garden, and a view we couldn't keep to ourselves. Today we host travellers in four rooms built around that same house, still cooking on the same wood-fired chulha, still watching the same ridge line change colour every evening."
            />
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <StatChip value="4" label="Rooms only" />
              <StatChip value="14 yrs" label="Hosting guests" />
              <StatChip value="6,200 ft" label="Above sea level" />
            </div>
            <div className="mt-10">
              <PrimaryButton href="/about" variant="outline">Read Our Story</PrimaryButton>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1602088113235-229c19758b0f?auto=format&fit=crop&w=1200&q=80"
                alt="The homestay courtyard and garden in Shahpur"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[var(--color-parchment)]">
              <Image
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
                alt="Home-cooked Pahadi meal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-[var(--color-cream)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
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
