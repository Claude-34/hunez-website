import React from "react";
import Image from "next/image";
import { impactStats } from "@/data/impact-stats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ImpactStatsSection() {
  return (
    <SectionWrapper id="impact-stats" className="relative py-24 overflow-hidden bg-forest/5">
      {/* Clearly Visible Background Eco Foliage Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/eco-foliage.jpg"
          alt="Lush green eco foliage background"
          fill
          className="object-cover object-center filter saturate-125 brightness-95 opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-offwhite/90 via-offwhite/80 to-offwhite/95" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          title="Measurable SME Sustainability Impact"
          subtitle="Real outcomes delivered for small and medium-sized businesses across energy, carbon, and operational resilience."
          align="center"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105"
            >
              {/* Organic Blob Background Shape */}
              <div
                className={`relative flex h-48 w-48 items-center justify-center p-6 border-2 shadow-2xl ${stat.blobVariant} ${stat.colorClass} transition-all duration-500 bg-white/90 backdrop-blur-md`}
              >
                <div className="text-center">
                  <span className="block text-4xl font-extrabold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider opacity-90">
                    {stat.label}
                  </span>
                </div>
              </div>

              {/* Description Box with Soft Glass Backdrop */}
              <div className="mt-6 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm max-w-xs">
                <p className="text-sm font-semibold text-charcoal/90 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
