import React from "react";
import type { Sector } from "@/data/sectors";
import { cn } from "@/lib/utils";

interface SectorCardProps {
  sector: Sector;
}

export function SectorCard({ sector }: SectorCardProps) {
  const getShapeClasses = (shapeType: Sector["shapeType"]) => {
    switch (shapeType) {
      case "circle":
      default:
        return "rounded-[3rem] bg-gradient-to-br from-olive/15 via-white to-white border-2 border-olive/30 shadow-md hover:border-forest/40 hover:shadow-2xl hover:scale-[1.02]";
    }
  };

  return (
    <article
      className={cn(
        "group flex flex-col justify-between p-8 transition-all duration-300 hover:-translate-y-1",
        getShapeClasses(sector.shapeType)
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-xs",
              sector.badgeColor || "bg-forest/10 text-forest"
            )}
          >
            {sector.title}
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
      </div>
    </article>
  );
}
