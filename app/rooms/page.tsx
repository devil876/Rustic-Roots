import Image from "next/image";
import type { Metadata } from "next";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading } from "@/components/UI";
import { rooms } from "@/lib/data";
import RoomGallery from "@/components/RoomGallery";

export const metadata: Metadata = {
  title: "Rooms & Rates | Dhauladhar Basera, Shahpur",
  description:
    "Four rooms at Dhauladhar Basera homestay in Shahpur, Kangra — Dhauladhar Suite, Kangra Valley Room, Deodar Room, and The Attic Nest.",
};

export default function RoomsPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-[var(--color-pine)] overflow-hidden">
        <div className="absolute -left-20 top-16 w-72 h-72 rounded-full bg-[var(--color-rust)]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
          <SectionHeading
            eyebrow="Rooms & Rates"
            title="Four rooms, each with its own reason to book it"
            description="Every room is different in size, view, and mood — but all include breakfast, wi-fi, hot water, and a standing invitation to the family kitchen."
            light
            align="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          {rooms.map((room, i) => (
            <div
              key={room.slug}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <RoomGallery
  images={room.gallery}
  roomName={room.name}
  price={room.price}
/>
              <div>
                <p className="text-[var(--color-rust)] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                  {room.tagline}
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-charcoal)] mb-5">
                  {room.name}
                </h2>
                <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-7 text-sm">
                  <div>
                    <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">Size</p>
                    <p className="font-medium text-[var(--color-charcoal)]">{room.size}</p>
                  </div>
                  <div>
                    <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">Occupancy</p>
                    <p className="font-medium text-[var(--color-charcoal)]">{room.occupancy}</p>
                  </div>
                  <div>
                    <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">Bed</p>
                    <p className="font-medium text-[var(--color-charcoal)]">{room.bed}</p>
                  </div>
                  <div>
                    <p className="text-[var(--color-ink)]/45 uppercase text-xs tracking-wide mb-1">View</p>
                    <p className="font-medium text-[var(--color-charcoal)]">{room.view}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.slice(0, 3).map((a) => (
                    <span
                      key={a}
                      className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-cream)] text-[var(--color-ink)]/70"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <PrimaryButton href={`/rooms/${room.slug}`} variant="outline">Room Details</PrimaryButton>
                  <PrimaryButton href="/contact">Check Availability</PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[var(--color-charcoal)] mb-4">
            Not sure which room fits your trip?
          </h2>
          <p className="text-[var(--color-ink)]/65 mb-8">
            Tell us your dates and group size and we&rsquo;ll suggest the right fit — or just send us a message on WhatsApp.
          </p>
          <PrimaryButton href="/contact">Ask Us Directly</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
