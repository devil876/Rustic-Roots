import Image from "next/image";
import type { Metadata } from "next";
import MountainRidge from "@/components/MountainRidge";
import { PrimaryButton, SectionHeading } from "@/components/UI";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiences | Dhauladhar Basera, Shahpur",
  description:
    "Kitchen-table meals, tea garden walks, bonfire evenings, and day trips arranged from our homestay in Shahpur, Kangra.",
};

export default function ExperiencesPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-[var(--color-pine)] overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
          <SectionHeading
            eyebrow="Experiences"
            title="Days here don't come with an itinerary"
            description="We build each day around what you actually want — slow mornings, long walks, or a full loop of Kangra's temples and forts. Here's what most guests end up doing."
            light
            align="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16 md:space-y-20">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                <Image src={exp.image} alt={exp.title} fill className="object-cover" />
              </div>
              <div>
                <span className="text-[var(--color-rust)] font-[family-name:var(--font-display)] italic text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-charcoal)] mt-3 mb-5">
                  {exp.title}
                </h2>
                <p className="text-[var(--color-ink)]/70 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-deodar)] py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-5">
            Want us to plan your days for you?
          </h2>
          <p className="text-white/70 mb-8">
            Tell us how many days you have and what pace you like — we&rsquo;ll sketch an itinerary before you even arrive.
          </p>
          <PrimaryButton href="/contact" variant="light">Plan My Stay</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
