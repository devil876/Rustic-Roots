import Image from "next/image";
import type { Metadata } from "next";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading, StatChip } from "@/components/UI";

export const metadata: Metadata = {
  title: "Our Story | Dhauladhar Basera, Shahpur",
  description:
    "The story of the family behind Dhauladhar Basera — a homestay built inside a working Kangra household, three generations deep.",
};

const timeline = [
  { year: "1978", text: "Our grandfather built the original house on this slope, choosing the plot for the unobstructed Dhauladhar view." },
  { year: "2004", text: "The family's tea and citrus orchards were planted on the terraces below the house, still tended today." },
  { year: "2011", text: "After years of friends-of-friends asking to stay, we opened two rooms formally as a homestay." },
  { year: "2018", text: "Added the Dhauladhar Suite and the Attic Nest, and started arranging local treks and day trips for guests." },
  { year: "Today", text: "Four rooms, one kitchen, and a family that still eats every meal at the same long table as our guests." },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-[var(--color-pine)] overflow-hidden">
        <div className="absolute -right-20 top-10 w-80 h-80 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
          <SectionHeading
            eyebrow="Our Story"
            title="Three generations, one house, a view we never got used to"
            description="Dhauladhar Basera isn't a purpose-built hotel — it's a family home in Shahpur that slowly grew a few extra rooms for travellers who kept asking to stay a little longer."
            light
            align="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      {/* STORY BLOCK */}
      <section className="bg-[var(--color-parchment)] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1200&q=80"
                alt="The family home at Dhauladhar Basera"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading
              eyebrow="How it began"
              title="A house built for one family, opened to many"
              description="Our grandfather chose this particular slope above Shahpur for one reason: from here, the entire Dhauladhar range sits directly across the valley, with nothing in between but pine and terraced fields. He never imagined strangers would one day travel here just to sit on that same terrace."
            />
            <p className="mt-6 text-[var(--color-ink)]/70 leading-relaxed">
              What started as the occasional friend-of-a-friend staying over became, over
              a decade, a small and deliberately unhurried homestay. We kept it to four
              rooms on purpose — enough to make a living from what we love doing, not
              so many that it stops feeling like our home.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[var(--color-cream)] py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Through the years" title="How the house grew" align="center" />
          <div className="mt-16 relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-cream-deep)] md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex md:items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-0 md:left-1/2 top-1 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[var(--color-rust)] text-white flex items-center justify-center font-[family-name:var(--font-display)] text-xs font-semibold shrink-0 z-10">
                    {item.year}
                  </div>
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-14" : "md:pr-14 md:text-right"}`}>
                    <p className="text-[var(--color-ink)]/75 leading-relaxed bg-white rounded-xl p-5 border border-[var(--color-cream-deep)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOST FAMILY */}
      <section className="bg-[var(--color-parchment)] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Meet the family"
              title="Hosted by the same family, for fourteen years"
              description="Kamla and Devraj run the kitchen and the garden; their son Aakash handles bookings, treks, and the drive to the airport. Between the three of them, most of our guests end up with at least one story about Shahpur they didn't come looking for."
            />
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <StatChip value="3" label="Generations hosting" />
              <StatChip value="40+" label="Local dishes cooked" />
              <StatChip value="1" label="Long kitchen table" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80"
                alt="Warm interior of the family kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=80"
                alt="Terrace garden with mountain view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[var(--color-deodar)] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="What guides us" title="The house rules we actually live by" light align="center" />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Small on purpose", text: "Four rooms so every guest still eats at the same table as the family, not a buffet line." },
              { title: "Cooked, not catered", text: "Everything comes from our own kitchen and garden, made the way it's always been made here." },
              { title: "Slow over packed", text: "We'd rather help you do three things well than rush you through ten." },
            ].map((v) => (
              <div key={v.title} className="bg-white/10 rounded-2xl p-8 border border-white/10">
                <h3 className="font-[family-name:var(--font-display)] text-white text-xl mb-3">{v.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-parchment)] py-24 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-charcoal)] mb-6">
            Come sit at our table
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/rooms">See Our Rooms</PrimaryButton>
            <PrimaryButton href="/contact" variant="outline">Get in Touch</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
