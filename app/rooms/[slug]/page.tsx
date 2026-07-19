import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PrimaryButton, SectionHeading } from "@/components/UI";
import { rooms } from "@/lib/data";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: `${room.name} | Dhauladhar Basera, Shahpur`,
    description: room.description,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      {/* HERO IMAGE */}
      <section className="relative h-[70vh] min-h-[420px] w-full">
        <Image src={room.image} alt={room.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
          <Link
            href="/rooms"
            className="text-white/70 hover:text-white text-xs uppercase tracking-widest mb-5 inline-flex items-center gap-2 w-fit"
          >
            ← Back to all rooms
          </Link>
          <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            {room.tagline}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-7xl leading-[0.98]">
            {room.name}
          </h1>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-[var(--color-parchment)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-14">
          <div className="md:col-span-2">
            <SectionHeading title="About this room" description={room.description} />

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--color-cream-deep)]">
              <div>
                <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">Size</p>
                <p className="font-semibold text-[var(--color-charcoal)]">{room.size}</p>
              </div>
              <div>
                <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">Occupancy</p>
                <p className="font-semibold text-[var(--color-charcoal)]">{room.occupancy}</p>
              </div>
              <div>
                <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">Bed</p>
                <p className="font-semibold text-[var(--color-charcoal)]">{room.bed}</p>
              </div>
              <div>
                <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">View</p>
                <p className="font-semibold text-[var(--color-charcoal)]">{room.view}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-charcoal)] mb-5">
                In the room
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-[var(--color-ink)]/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-rust)] shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {room.gallery.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src={src} alt={`${room.name} view ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* BOOKING CARD */}
          <div className="md:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl border border-[var(--color-cream-deep)] p-7 shadow-sm">
              <p className="text-[var(--color-ink)]/50 text-xs uppercase tracking-wide mb-1">Starting at</p>
              <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-charcoal)] mb-1">
                ₹{room.price.toLocaleString("en-IN")}
                <span className="text-base font-[family-name:var(--font-body)] text-[var(--color-ink)]/50"> / night</span>
              </p>
              <p className="text-xs text-[var(--color-ink)]/50 mb-6">
                Includes breakfast · taxes extra
              </p>
              <div className="flex flex-col gap-3">
                <PrimaryButton href="/contact">Check Availability</PrimaryButton>
                <PrimaryButton href={`https://wa.me/919876543210?text=Hi! I'd like to ask about the ${room.name} at Dhauladhar Basera.`} variant="outline">
                  Ask on WhatsApp
                </PrimaryButton>
              </div>
              <p className="mt-6 text-xs text-[var(--color-ink)]/45 leading-relaxed">
                Free cancellation up to 7 days before check-in. Full board (all meals)
                available for an additional ₹900 per person per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER ROOMS */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[var(--color-charcoal)] mb-10">
            Other rooms you might like
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherRooms.map((r) => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image src={r.image} alt={r.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-charcoal)]">{r.name}</h3>
                <p className="text-[var(--color-rust)] text-sm mt-1">₹{r.price.toLocaleString("en-IN")} / night</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
