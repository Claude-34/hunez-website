import React from "react";
import { cn } from "@/lib/utils";

interface CurvedTransitionProps {
  fillColor?: string;
  className?: string;
  direction?: "down" | "up";
  variant?: "wave" | "smooth-curve" | "slope";
}

export function CurvedTransition({
  fillColor = "#FAFAF8",
  className,
  direction = "down",
  variant = "wave",
}: CurvedTransitionProps) {
  const isUp = direction === "up";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden leading-none z-10 pointer-events-none",
        isUp ? "rotate-180 -mt-1" : "-mb-1",
        className
      )}
      aria-hidden="true"
    >
      {variant === "wave" && (
        <svg
          className="relative block w-full h-10 sm:h-14 lg:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === "smooth-curve" && (
        <svg
          className="relative block w-full h-8 sm:h-12 lg:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {variant === "slope" && (
        <svg
          className="relative block w-full h-8 sm:h-12 lg:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 L1200,0 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      )}
    </div>
  );
}
