"use client";

import Image from "next/image";
import { useEffect, useState, Fragment } from "react";

const heroSlides = [
  {
    desktop: "/hero/hero1.webp",
    mobile: "/hero/hero1-mobile.webp",
  },
  {
    desktop: "/hero/hero2.webp",
    mobile: "/hero/hero2-mobile.webp",
  },
];

// Added onSlideChange prop here
export default function HeroSlideshow({ onSlideChange }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  // NEW: Tells the parent component which slide is currently active
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentImage);
    }
  }, [currentImage, onSlideChange]);

  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 120);

    const imageInterval = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(imageInterval);
    };
  }, [currentImage]);

  const radius = 10;
  const circumference = 2 * Math.PI * radius;

  return (
    /* 
      MOBILE: relative height (50vh) so it stacks on top of your content.
      DESKTOP: absolute inset-0 so it acts as a background behind your content.
    */
    <div className="relative w-full h-[50vh] md:absolute md:inset-0 md:h-full md:-z-10">
      
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentImage;
          const baseClasses = `object-cover transition-all duration-[2000ms] ease-in-out ${
            isActive ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`;

          return (
            <Fragment key={index}>
              <Image
                src={slide.desktop}
                alt={`Hero Desktop ${index + 1}`}
                fill
                priority
                className={`hidden md:block ${baseClasses}`}
              />
              <Image
                src={slide.mobile}
                alt={`Hero Mobile ${index + 1}`}
                fill
                priority
                className={`block md:hidden ${baseClasses}`}
              />
            </Fragment>
          );
        })}
      </div>

      {/* Progress Indicators - Positioned at the bottom of the image on mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 flex gap-4 bottom-6 md:bottom-16 lg:bottom-27">
        {heroSlides.map((_, index) => (
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
    </div>
  );
}