"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface FieldSlide {
  id: string;
  src: string;
  alt: string;
}

export const fieldSlides: FieldSlide[] = [
  {
    id: "site-inspection",
    src: "/images/field/site-inspection.jpg",
    alt: "HUNEZ environmental engineers and sustainability specialists conducting field site inspection",
  },
  {
    id: "community-dialogue",
    src: "/images/field/community-dialogue.jpg",
    alt: "Dr. Caliste Omam leading community consultation at wooden table",
  },
  {
    id: "stream-measurement",
    src: "/images/field/stream-measurement.jpg",
    alt: "Environmental monitoring and stream measurement in the field",
  },
  {
    id: "forest-canopy",
    src: "/images/field/forest-canopy.jpg",
    alt: "Dr. Caliste Omam and research team inspecting tropical forest canopy and biodiversity",
  },
  {
    id: "water-cleanup",
    src: "/images/field/water-cleanup.jpg",
    alt: "Community field workers deploying waterway debris net for ecological remediation",
  },
  {
    id: "field-operations",
    src: "/images/field/field-operations.jpg",
    alt: "Scientific field operations team in protective gear conducting environmental analysis",
  },
];

type TransitionStyle = "curtainSlice" | "mosaicGrid" | "horizontalBlinds" | "kenBurnsFade";

const transitionStyles: TransitionStyle[] = [
  "curtainSlice",
  "mosaicGrid",
  "horizontalBlinds",
  "kenBurnsFade",
];

interface FieldDiapoSliderProps {
  className?: string;
  autoPlayInterval?: number; // ms between transitions (default 3600)
  width?: string; // explicit width (default "100%")
  height?: string; // explicit height / length (default "380px")
}

export function FieldDiapoSlider({
  className = "",
  autoPlayInterval = 3600,
  width = "100%",
  height = "380px",
}: FieldDiapoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStyle, setTransitionStyle] = useState<TransitionStyle>("curtainSlice");

  const triggerNextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % fieldSlides.length);

    // Rotate through transition styles
    const nextStyle =
      transitionStyles[Math.floor(Math.random() * transitionStyles.length)];
    setTransitionStyle(nextStyle);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [currentIndex, isTransitioning]);

  // Automatic slide rotation loop
  useEffect(() => {
    const timer = setInterval(() => {
      triggerNextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, triggerNextSlide]);

  const activeSlide = fieldSlides[currentIndex];
  const prevSlide = fieldSlides[previousIndex];

  const verticalSlices = Array.from({ length: 10 });
  const mosaicRows = 3;
  const mosaicCols = 5;

  return (
    <div
      className={`relative select-none overflow-hidden rounded-2xl md:rounded-3xl border-4 border-white/95 bg-forest-dark shadow-2xl mx-auto ${className}`}
      style={{
        width,
        height,
        maxWidth: "1000px",
      }}
      role="region"
      aria-label="Field Photo Slideshow"
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Layer: Previous Slide */}
        <div className="absolute inset-0 z-0">
          <Image
            src={prevSlide.src}
            alt={prevSlide.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1000px"
            priority
          />
        </div>

        {/* Transition Layer: Active Slide with Kyoto Diapo effects */}
        {isTransitioning ? (
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {/* Effect 1: Vertical Curtain Slices */}
            {transitionStyle === "curtainSlice" && (
              <div className="absolute inset-0">
                {verticalSlices.map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(0 ${(verticalSlices.length - 1 - i) * 10}% 0 ${i * 10}%)`,
                      animation: "diapoCurtainDown 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                      animationDelay: `${i * 40}ms`,
                    }}
                  >
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 1000px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Effect 2: Mosaic Grid Tiles */}
            {transitionStyle === "mosaicGrid" && (
              <div className="absolute inset-0">
                {Array.from({ length: mosaicRows * mosaicCols }).map((_, i) => {
                  const row = Math.floor(i / mosaicCols);
                  const col = i % mosaicCols;
                  const delay = (row + col) * 50;
                  const topPercent = (row / mosaicRows) * 100;
                  const bottomPercent = ((mosaicRows - 1 - row) / mosaicRows) * 100;
                  const leftPercent = (col / mosaicCols) * 100;
                  const rightPercent = ((mosaicCols - 1 - col) / mosaicCols) * 100;

                  return (
                    <div
                      key={i}
                      className="absolute inset-0"
                      style={{
                        clipPath: `inset(${topPercent}% ${rightPercent}% ${bottomPercent}% ${leftPercent}%)`,
                        animation: "diapoMosaicFade 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                        animationDelay: `${delay}ms`,
                      }}
                    >
                      <Image
                        src={activeSlide.src}
                        alt={activeSlide.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 1000px"
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Effect 3: Horizontal Blinds */}
            {transitionStyle === "horizontalBlinds" && (
              <div className="absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                      clipPath: `inset(${i * 16.666}% 0 ${(5 - i) * 16.666}% 0)`,
                      animation: "diapoBlindRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                      animationDelay: `${i * 55}ms`,
                    }}
                  >
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 1000px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Effect 4: Smooth Ken Burns Crossfade */}
            {transitionStyle === "kenBurnsFade" && (
              <div
                className="absolute inset-0"
                style={{
                  animation: "diapoFadeZoom 0.9s ease-out forwards",
                }}
              >
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1000px"
                />
              </div>
            )}
          </div>
        ) : (
          /* Active Full Slide Layer */
          <div className="absolute inset-0 z-10">
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1000px"
              priority
            />
          </div>
        )}
      </div>

      {/* Embedded CSS Keyframes for Kyoto Diapo Transitions */}
      <style>{`
        @keyframes diapoCurtainDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes diapoBlindRight {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes diapoMosaicFade {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes diapoFadeZoom {
          0% {
            opacity: 0;
            transform: scale(1.06);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
