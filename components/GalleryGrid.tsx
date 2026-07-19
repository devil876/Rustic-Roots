"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/data";

const tags = ["All", "Views", "Rooms", "Food", "Nature", "Experiences"];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.tag === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-colors ${
              active === tag
                ? "bg-[var(--color-rust)] text-white"
                : "bg-[var(--color-cream)] text-[var(--color-ink)]/70 hover:bg-[var(--color-cream-deep)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((img, i) => (
          <div
            key={img.src + i}
            className="relative break-inside-avoid rounded-2xl overflow-hidden group animate-fade-up"
            style={{ animationDelay: `${(i % 6) * 0.06}s` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={i % 3 === 0 ? 1000 : 700}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
