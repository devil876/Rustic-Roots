import type { Metadata } from "next";
import MountainRidge from "@/components/MountainRidge";
import { SectionHeading } from "@/components/UI";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Dhauladhar Basera, Shahpur",
  description:
    "Photos from Dhauladhar Basera homestay in Shahpur, Kangra — rooms, views, food, and the mountain trails around us.",
};

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-[var(--color-pine)] overflow-hidden">
        <div className="absolute -left-16 bottom-0 w-72 h-72 rounded-full bg-[var(--color-rust)]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
          <SectionHeading
            eyebrow="Gallery"
            title="A few frames from around the house"
            description="Rooms, meals, mountain light, and the small trails we send our guests down."
            light
            align="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
