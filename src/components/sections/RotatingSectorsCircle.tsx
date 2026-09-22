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

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const total = sectors.length;

  // Smooth continuous automatic rotation loop
  useEffect(() => {
    const animate = (time: number) => {
      // Pause rotation if user is hovering OR has opened a clicked sector detail panel
      if (lastTimeRef.current !== null && !isHovered && !selectedSectorSlug) {
        const deltaTime = time - lastTimeRef.current;
        // Rotate ~12 degrees per second
        setRotationAngle((prev) => (prev + deltaTime * 0.012) % 360);
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
    // 1. Calculate target rotation angle to displace this circle to top center
    const baseAngle = index * (360 / total);
    const targetAngle = (360 - baseAngle) % 360;
    setRotationAngle(targetAngle);
    setActiveIndex(index);

    // 2. Open displaced detailed view panel
    setSelectedSectorSlug(slug);
  };

  const activeSector = sectors[activeIndex];
  const displayedSector =
    sectors.find((s) => s.slug === selectedSectorSlug) || activeSector;

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Outer Orbit Container */}
      <div
        className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] w-full flex items-center justify-center overflow-hidden py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glowing Background Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Rotating Dash Circle */}
          <div className="w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[640px] lg:h-[640px] rounded-full border-2 border-dashed border-forest/25 animate-spin-slow opacity-80" />
          {/* Inner Glowing Orbit Track */}
          <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-olive/30 bg-forest/5 blur-xs shadow-inner" />
        </div>

        {/* Central Core Hub */}
        <div className="absolute z-30 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-white/95 backdrop-blur-md border-4 border-forest/30 shadow-2xl flex flex-col items-center justify-center p-6 text-center transition-all duration-500 hover:scale-105">
          <span className="text-4xl sm:text-5xl mb-2 animate-bounce-subtle filter drop-shadow-sm">
            {sectorIcons[activeSector.slug] || "🌿"}
          </span>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-warm mb-1">
            Focus Sector
          </span>
          <h3 className="text-base sm:text-lg font-bold text-forest leading-tight">
            {activeSector.title}
          </h3>
          <p className="text-xs text-charcoal/75 mt-1.5 line-clamp-2 hidden sm:block">
            {activeSector.description}
          </p>
          <button
            onClick={() => handleCircleClick(activeIndex, activeSector.slug)}
            className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest text-white text-[11px] font-bold shadow-md hover:bg-forest-light transition-all group"
          >
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Circular Cards Rotating Automatically around the Orbit */}
        {sectors.map((sector, index) => {
          const baseAngle = index * (360 / total);
          const currentAngle = (baseAngle + rotationAngle) % 360;
          const rad = (currentAngle - 90) * (Math.PI / 180);

          const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
          const isTablet = typeof window !== "undefined" && window.innerWidth >= 640;
          const radius = isDesktop ? 270 : isTablet ? 210 : 155;

          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          const isActive = index === activeIndex;
          const isSelected = selectedSectorSlug === sector.slug;

          return (
            <div
              key={sector.slug}
              onClick={() => handleCircleClick(index, sector.slug)}
              style={{
                transform: `translate(${x}px, ${y}px) scale(${isSelected ? 1.2 : isActive ? 1.1 : 0.88})`,
                zIndex: isSelected ? 50 : isActive ? 40 : 20,
              }}
              className={cn(
                // CIRCLE FORM SHAPE WITH DISPLACEMENT HIGHLIGHT
                "absolute rounded-full aspect-square flex flex-col items-center justify-center p-5 sm:p-6 text-center cursor-pointer transition-transform duration-300 ease-out shadow-xl backdrop-blur-md select-none group",
                isDesktop
                  ? "w-[210px] h-[210px]"
                  : isTablet
                  ? "w-[180px] h-[180px]"
                  : "w-[145px] h-[145px]",
                isSelected
                  ? "bg-forest text-white border-4 border-warm shadow-2xl ring-8 ring-forest/20 animate-pulse"
                  : isActive
                  ? "bg-white border-4 border-forest shadow-2xl ring-4 ring-forest/20"
                  : "bg-white/95 border-2 border-olive/25 hover:border-forest/50 hover:bg-white opacity-85 hover:opacity-100 hover:scale-100"
              )}
            >
              {/* Circular Badge Icon */}
              <div
                className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 shadow-inner transition-colors",
                  isSelected ? "bg-white/20" : "bg-sage/60"
                )}
              >
                <span className="text-xl sm:text-2xl">{sectorIcons[sector.slug] || "🌱"}</span>
              </div>

              {/* Title */}
              <h4
                className={cn(
                  "text-xs sm:text-sm font-bold leading-tight line-clamp-1",
                  isSelected ? "text-white" : "text-forest"
                )}
              >
                {sector.title}
              </h4>

              {/* Short Subtitle */}
              <p
                className={cn(
                  "text-[10px] sm:text-[11px] font-semibold mt-1 line-clamp-1 max-w-[90%]",
                  isSelected ? "text-warm-light" : "text-warm"
                )}
              >
                {sector.examples.split("/")[0]}
              </p>

              {/* Action indicator */}
              <span
                className={cn(
                  "text-[10px] font-bold mt-2 transition-transform",
                  isSelected
                    ? "text-white underline"
                    : isActive
                    ? "text-warm scale-110"
                    : "text-forest group-hover:scale-105"
                )}
              >
                {isSelected ? "★ Displayed" : isActive ? "● Focused" : "Click to view"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Interactive Bottom Control Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {sectors.map((sector, index) => (
          <button
            key={sector.slug}
            onClick={() => handleCircleClick(index, sector.slug)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 shadow-sm",
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
          className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-warm/15 px-3.5 py-2 text-xs font-bold text-warm hover:bg-warm hover:text-white transition-all shadow-xs"
        >
          {isHovered || selectedSectorSlug ? "▶ Resume Auto-Rotate" : "❚❚ Pause Rotation"}
        </button>
      </div>

      {/* Displaced Detail Display Section (Shows when any circle is clicked) */}
      {displayedSector && (
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border-2 border-forest/20 shadow-2xl transition-all duration-500 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-bl-full pointer-events-none" />

          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl p-3 bg-sage/50 rounded-2xl">
                {sectorIcons[displayedSector.slug]}
              </span>
              <div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-forest/10 text-forest">
                  {displayedSector.title} Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-forest mt-1">
                  {displayedSector.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-warm mt-0.5">
                  Target Businesses: {displayedSector.examples}
                </p>
              </div>
            </div>

            {selectedSectorSlug && (
              <button
                onClick={() => setSelectedSectorSlug(null)}
                className="text-charcoal/40 hover:text-forest transition-colors p-2 rounded-full hover:bg-offwhite text-lg font-bold"
                aria-label="Close detail view"
              >
                ✕
              </button>
            )}
          </div>

          <p className="text-base text-charcoal/85 leading-relaxed mb-6">
            {displayedSector.description}
          </p>

          {/* Highlights & Impact Grid */}
          {displayedSector.highlights && (
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {displayedSector.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-sage/40 p-4 border border-olive/15 flex items-start gap-2.5"
                >
                  <span className="text-forest font-bold">✓</span>
                  <span className="text-xs font-medium text-charcoal/90 leading-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Impact Metric & CTA Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-forest text-white">
            <div>
              <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">
                Expected Business Impact
              </span>
              <p className="text-sm sm:text-base font-bold text-warm-light mt-0.5">
                {displayedSector.impact || "Actionable Net Zero Roadmap tailored for your operations"}
              </p>
            </div>

            <Link
              href={`/contact?sector=${displayedSector.slug}`}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-warm text-white font-bold text-sm hover:bg-warm-light transition-all shadow-md hover:scale-105 shrink-0"
            >
              Book {displayedSector.title} Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
