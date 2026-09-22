import React from "react";
import type { Sector } from "@/data/sectors";
import { cn } from "@/lib/utils";

interface SectorCardProps {
  sector: Sector;
}

export function SectorCard({ sector }: SectorCardProps) {
  const getShapeClasses = (shapeType: Sector["shapeType"]) => {
    switch (shapeType) {
      case "arch":
        return "shape-arch bg-gradient-to-b from-forest/10 via-white to-white border-t-4 border-forest";
      case "circle":
        return "rounded-[3rem] bg-gradient-to-br from-olive/15 via-white to-white border-2 border-olive/30";
      case "curved-rect":
        return "shape-curved-rect bg-gradient-to-br from-warm/15 via-white to-white border-2 border-warm/30";
      case "vertical-frame":
        return "shape-vertical-frame bg-white border-2 border-forest/20 shadow-md";
      case "standard-rect":
        return "rounded-xl bg-white border border-olive/20 shadow-sm";
      default:
        return "rounded-2xl bg-white border border-olive/20";
    }
  };

  return (
    <article
      className={cn(
        "group flex flex-col justify-between p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        getShapeClasses(sector.shapeType)
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={cn(
              "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full",
              sector.badgeColor || "bg-forest/10 text-forest"
            )}
          >
            {sector.title}
          </span>
          <span className="text-xs font-mono text-charcoal/40 uppercase">
            {sector.shapeType}
          </span>
        </div>
        <h3 className="text-xl font-bold text-forest group-hover:text-olive transition-colors">
          {sector.title}
        </h3>
        <p className="mt-2 text-xs font-semibold text-warm leading-relaxed">
          {sector.examples}
        </p>
        <p className="mt-4 text-sm text-charcoal/80 leading-relaxed">
          {sector.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-olive/10 flex items-center justify-between text-xs font-bold text-forest">
        <span>Tailored SME Support</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </article>
  );
}
