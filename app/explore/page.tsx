import type { Metadata } from "next";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading } from "@/components/UI";
import FaqAccordion from "@/components/FaqAccordion";
import { attractions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Explore Shahpur & Kangra | Dhauladhar Basera",
  description:
    "Things to see around Shahpur, Kangra — Masroor Rock Temples, Kangra Fort, Palampur tea gardens, Pong Dam, and McLeod Ganj, all reachable from our homestay.",
};

export default function ExplorePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-[var(--color-pine)] overflow-hidden">
        <div className="absolute right-10 top-10 w-72 h-72 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
          <SectionHeading
            eyebrow="Explore"
            title="Shahpur is small. What's around it isn't."
            description="We're a short drive from forts, rock-cut temples, tea estates, and the Tibetan quarter of McLeod Ganj — close enough for day trips, far enough to skip the crowds at night."
            light
            align="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      {/* MAP + ATTRACTIONS */}
      <section className="bg-[var(--color-parchment)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-14 mb-16">
            <div>
              <SectionHeading
                eyebrow="Getting your bearings"
                title="Where we sit in Kangra"
                description="Shahpur sits in the shadow of the Dhauladhar range, about 20 minutes from Kangra town and 35–40 minutes from Kangra Airport (Gaggal). McLeod Ganj and Dharamshala are an easy day trip; Palampur's tea gardens are closer still."
              />
              <div className="mt-8">
                <PrimaryButton href="/contact">Ask About Transport</PrimaryButton>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--color-cream-deep)] aspect-[4/3]">
              <iframe
                title="Map of Shahpur, Kangra"
                src="https://www.google.com/maps?q=Shahpur,Kangra,Himachal+Pradesh&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <SectionHeading eyebrow="Nearby" title="Places worth the drive" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((place) => (
              <div
                key={place.name}
                className="bg-white rounded-2xl p-6 border border-[var(--color-cream-deep)] flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-charcoal)] leading-tight">
                    {place.name}
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-wide text-[var(--color-rust)] font-semibold mb-3">
                  {place.distance} away
                </p>
                <p className="text-sm text-[var(--color-ink)]/65 leading-relaxed">{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" align="center" />
          <div className="mt-14">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[var(--color-charcoal)] mb-6">
            Still have questions about the area?
          </h2>
          <PrimaryButton href="/contact">Ask Us Anything</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
