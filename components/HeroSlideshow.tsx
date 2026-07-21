"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/hero/hero1.webp",
  "/hero/hero2.webp",
];

export default function HeroSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 120);

    const imageInterval = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(imageInterval);
    };
  }, [currentImage]);

  const radius = 10;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
  {heroImages.map((image, index) => (
    <Image
      key={image}
      src={image}
      alt={`Hero ${index + 1}`}
      fill
      priority
      className={`object-cover transition-all duration-[2000ms] ease-in-out ${
        index === currentImage
          ? "opacity-100 scale-105"
          : "opacity-0 scale-100"
      }`}
    />
  ))}
</div>

      <div className="absolute left-1/2 -translate-x-1/2 z-50 flex gap-4
                bottom-12
                md:bottom-16
                lg:bottom-27">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className="relative w-6 h-6 flex items-center justify-center"
          >
            {index === currentImage && (
              <svg
                className="absolute w-6 h-6 -rotate-90"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r={radius}
                  stroke="rgba(255,255,255,.25)"
                  strokeWidth="2"
                  fill="none"
                />

                <circle
                  cx="12"
                  cy="12"
                  r={radius}
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference - (progress / 100) * circumference
                  }
                  strokeLinecap="round"
                />
              </svg>
            )}

            <span
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentImage
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}