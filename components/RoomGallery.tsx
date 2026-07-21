"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


interface RoomGalleryProps {
  images: string[];
  roomName: string;
  price: number;
}

export default function RoomGallery({
  images,
  roomName,
  price,
}: RoomGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [currentAspect, setCurrentAspect] = useState<"4/3" | "3/4">("4/3");
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const changeSlide = (nextIndex: number) => {
  const img = new window.Image();

  img.src = images[nextIndex];

  img.onload = () => {
    const ratio = img.naturalWidth / img.naturalHeight;

    setCurrentAspect(ratio >= 1 ? "4/3" : "3/4");
    setCurrent(nextIndex);
  };
};

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      changeSlide((current + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [current, images]);

  

// ADD THIS HERE
useEffect(() => {
  if (!images.length) return;

  const img = new window.Image();

  img.src = images[current];

  img.onload = () => {
    const ratio = img.naturalWidth / img.naturalHeight;

    if (ratio >= 1) {
      setCurrentAspect("4/3");
    } else {
      setCurrentAspect("3/4");
    }
  };
}, [current, images]);

if (!images || images.length === 0) {
  return null;
}
  return (
    <div>
      {/* Main Image */}
      <div
  className={`relative rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 ${
    currentAspect === "3/4"
      ? "aspect-[3/4]"
      : "aspect-[4/3]"
  }`}
>

        {images.map((image, index) => (
          <Image
  key={image}
src={image}
  alt={`${roomName} ${index + 1}`}
  fill
  priority={index === 0}
  sizes="(max-width: 768px) 100vw, 50vw"
  className={`
    object-cover
    absolute inset-0
    transition-all duration-1000 ease-in-out
    ${
      index === current
        ? "opacity-100 scale-105"
        : "opacity-0 scale-100"
    }
  `}
/>
        ))}

        {/* Price Badge */}
        <div className="absolute top-5 left-5 z-20 bg-[var(--color-parchment)] px-4 py-2 rounded-full text-xs uppercase tracking-wide font-semibold text-[var(--color-charcoal)] shadow">
          ₹{price.toLocaleString("en-IN")} / night
        </div>
      </div>

            {/* Thumbnail Strip */}
     <div
  ref={thumbContainerRef}
  className="mt-5 overflow-x-auto overflow-y-hidden no-scrollbar"
>
        <div className="flex gap-3 w-max px-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`relative w-24 h-16 md:w-32 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                current === index
                  ? "border-[var(--color-rust)] scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="128px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}