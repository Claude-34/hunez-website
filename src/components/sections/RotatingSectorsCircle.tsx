"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { cn } from "@/lib/utils";

const sectorIcons: Record<string, string> = {
  care: "🏥",
  hospitality: "🏨",
  retail: "🛍️",
  offices: "🏢",
  construction: "🏗️",
};

export function RotatingSectorsCircle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedSectorSlug, setSelectedSectorSlug] = useState<string | null>(null);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("mobile");

  // Touch swipe tracking
  const touchStartXRef = useRef<number | null>(null);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const total = sectors.length;

  // Responsive screen size listener for exact layout tuning on Android & Mobile
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setScreenSize("desktop");
      else if (w >= 640) setScreenSize("tablet");
      else setScreenSize("mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth GPU-accelerated continuous rotation loop (60 FPS)
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null && !isHovered && !selectedSectorSlug) {
        const deltaTime = time - lastTimeRef.current;
        // Smooth ~10 deg/sec rotation
        setRotationAngle((prev) => (prev + deltaTime * 0.01) % 360);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered, selectedSectorSlug]);

  // Sync active index based on current rotation angle position
  useEffect(() => {
    const stepAngle = 360 / total;
    const normalizedAngle = (360 - (rotationAngle % 360)) % 360;
    const closestIdx = Math.round(normalizedAngle / stepAngle) % total;
    setActiveIndex(closestIdx);
  }, [rotationAngle, total]);

  // Handle clicking on any circular shape
  const handleCircleClick = (index: number, slug: string) => {
    const baseAngle = index * (360 / total);
    const targetAngle = (360 - baseAngle) % 360;
    setRotationAngle(targetAngle);
    setActiveIndex(index);
    setSelectedSectorSlug(slug);
  };

  // Touch Swipe Handlers for Android & Mobile Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsHovered(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const diffX = touchStartXRef.current - currentX;

    // Small incremental rotation on swipe
    if (Math.abs(diffX) > 10) {
      setRotationAngle((prev) => (prev + diffX * 0.2) % 360);
      touchStartXRef.current = currentX;
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    setIsHovered(false);
  };

  const activeSector = sectors[activeIndex];
  const displayedSector =
    sectors.find((s) => s.slug === selectedSectorSlug) || activeSector;

  // Responsive radius & container sizing
  const radius =
    screenSize === "desktop" ? 260 : screenSize === "tablet" ? 200 : 120;

  return (
    <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      {/* Outer Orbit Container with Touch Swipe Events */}
      <div
        className="relative min-h-[500px] sm:min-h-[660px] lg:min-h-[740px] w-full flex items-center justify-center overflow-hidden py-6 sm:py-10 touch-pan-y select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Dashed Circle */}
          <div className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] rounded-full border-2 border-dashed border-forest/20 animate-spin-slow opacity-75" />
          {/* Inner Glow Ring */}
          <div className="absolute w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] rounded-full border border-olive/25 bg-forest/5 blur-xs" />
        </div>

        {/* Central Core Hub */}
        <div
          className={cn(
            "absolute z-30 rounded-full bg-white/95 backdrop-blur-md border-4 border-forest/30 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-transform duration-300 hover:scale-105",
            screenSize === "mobile"
              ? "w-[170px] h-[170px]"
              : screenSize === "tablet"
              ? "w-[240px] h-[240px]"
              : "w-[290px] h-[290px]"
          )}
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2 animate-bounce-subtle">
            {sectorIcons[activeSector.slug] || "🌿"}
          </span>
          <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-warm mb-0.5">
            Focus Sector
          </span>
          <h3 className="text-xs sm:text-base font-bold text-forest leading-tight line-clamp-1">
            {activeSector.title}
          </h3>
          <p className="text-[11px] text-charcoal/75 mt-1 line-clamp-2 hidden sm:block">
            {activeSector.description}
          </p>
          <button
            onClick={() => handleCircleClick(activeIndex, activeSector.slug)}
            className="mt-2 sm:mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest text-white text-[10px] sm:text-[11px] font-bold shadow-md hover:bg-forest-light transition-all"
          >
            <span>View Details</span>
            <span>→</span>
          </button>
        </div>

        {/* Circular Cards Rotating Automatically (GPU Accelerated) */}
        {sectors.map((sector, index) => {
          const baseAngle = index * (360 / total);
          const currentAngle = (baseAngle + rotationAngle) % 360;
          const rad = (currentAngle - 90) * (Math.PI / 180);

          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          const isActive = index === activeIndex;
          const isSelected = selectedSectorSlug === sector.slug;

          return (
            <div
              key={sector.slug}
              onClick={() => handleCircleClick(index, sector.slug)}
              style={{
                // GPU-accelerated 3D transform for ultra-smooth rendering on Android & mobile
                transform: `translate3d(${x}px, ${y}px, 0px) scale(${
                  isSelected ? 1.15 : isActive ? 1.08 : 0.85
                })`,
                zIndex: isSelected ? 50 : isActive ? 40 : 20,
                willChange: "transform",
              }}
              className={cn(
                "absolute rounded-full aspect-square flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-200 ease-out shadow-lg backdrop-blur-md select-none p-2 sm:p-4",
                screenSize === "mobile"
                  ? "w-[115px] h-[115px]"
                  : screenSize === "tablet"
                  ? "w-[165px] h-[165px]"
                  : "w-[210px] h-[210px]",
                isSelected
                  ? "bg-forest text-white border-3 border-warm shadow-2xl ring-4 ring-forest/30"
                  : isActive
                  ? "bg-white border-3 border-forest shadow-xl ring-2 ring-forest/20"
                  : "bg-white/95 border-2 border-olive/25 hover:border-forest/50 hover:bg-white opacity-90"
              )}
            >
              {/* Badge Icon */}
              <div
                className={cn(
                  "w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 shadow-inner",
                  isSelected ? "bg-white/20" : "bg-sage/60"
                )}
              >
                <span className="text-base sm:text-xl lg:text-2xl">
                  {sectorIcons[sector.slug] || "🌱"}
                </span>
              </div>

              {/* Title */}
              <h4
                className={cn(
                  "text-[10px] sm:text-xs lg:text-sm font-bold leading-tight line-clamp-1 max-w-[95%]",
                  isSelected ? "text-white" : "text-forest"
                )}
              >
                {sector.title}
              </h4>

              {/* Short Subtitle */}
              <p
                className={cn(
                  "text-[8px] sm:text-[10px] font-semibold mt-0.5 line-clamp-1 max-w-[90%]",
                  isSelected ? "text-warm-light" : "text-warm"
                )}
              >
                {sector.examples.split("/")[0]}
              </p>

              {/* Mobile Action Tag */}
              <span
                className={cn(
                  "text-[8px] sm:text-[10px] font-bold mt-1",
                  isSelected
                    ? "text-white underline"
                    : isActive
                    ? "text-warm"
                    : "text-forest/70"
                )}
              >
                {isSelected ? "★ Displayed" : isActive ? "● Active" : "Tap"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Interactive Sector Buttons */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {sectors.map((sector, index) => (
          <button
            key={sector.slug}
            onClick={() => handleCircleClick(index, sector.slug)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold transition-all duration-300 shadow-xs",
              sector.slug === selectedSectorSlug || (index === activeIndex && !selectedSectorSlug)
                ? "bg-forest text-white scale-105 ring-2 ring-forest/30"
                : "bg-white text-charcoal/70 hover:bg-forest/10 hover:text-forest"
            )}
          >
            <span>{sectorIcons[sector.slug]}</span>
            <span>{sector.title}</span>
          </button>
        ))}

        <button
          onClick={() => {
            setIsHovered(!isHovered);
            if (selectedSectorSlug) setSelectedSectorSlug(null);
          }}
          className="ml-1 inline-flex items-center gap-1 rounded-full bg-warm/15 px-3 py-1.5 text-[11px] sm:text-xs font-bold text-warm hover:bg-warm hover:text-white transition-all shadow-xs"
        >
          {isHovered || selectedSectorSlug ? "▶ Resume" : "❚❚ Pause"}
        </button>
      </div>

      {/* Displaced Detail Display Panel */}
      {displayedSector && (
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto rounded-3xl bg-white p-5 sm:p-10 border-2 border-forest/20 shadow-2xl transition-all duration-500 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-forest/5 rounded-bl-full pointer-events-none" />

          <div className="flex items-start justify-between gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-3xl sm:text-5xl p-2.5 sm:p-3 bg-sage/50 rounded-2xl shrink-0">
                {sectorIcons[displayedSector.slug]}
              </span>
              <div>
                <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full bg-forest/10 text-forest">
                  {displayedSector.title} Support
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-forest mt-1">
                  {displayedSector.title}
                </h3>
                <p className="text-[11px] sm:text-sm font-semibold text-warm mt-0.5">
                  Target Businesses: {displayedSector.examples}
                </p>
              </div>
            </div>

            {selectedSectorSlug && (
              <button
                onClick={() => setSelectedSectorSlug(null)}
                className="text-charcoal/40 hover:text-forest transition-colors p-2 rounded-full hover:bg-offwhite text-base font-bold shrink-0"
                aria-label="Close detail view"
              >
                ✕
              </button>
            )}
          </div>

          <p className="text-xs sm:text-base text-charcoal/85 leading-relaxed mb-6">
            {displayedSector.description}
          </p>

          {/* Highlights */}
          {displayedSector.highlights && (
            <div className="mb-6 sm:mb-8 grid gap-3 sm:grid-cols-3">
              {displayedSector.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-sage/40 p-3 sm:p-4 border border-olive/15 flex items-start gap-2"
                >
                  <span className="text-forest font-bold text-xs shrink-0">✓</span>
                  <span className="text-[11px] sm:text-xs font-medium text-charcoal/90 leading-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Impact Metric & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-forest text-white">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 font-semibold">
                Expected Business Impact
              </span>
              <p className="text-xs sm:text-base font-bold text-warm-light mt-0.5">
                {displayedSector.impact || "Actionable Net Zero Roadmap tailored for your operations"}
              </p>
            </div>

            <Link
              href={`/contact?sector=${displayedSector.slug}`}
              className="w-full sm:w-auto text-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-warm text-white font-bold text-xs sm:text-sm hover:bg-warm-light transition-all shadow-md hover:scale-105 shrink-0"
            >
              Book {displayedSector.title} Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
