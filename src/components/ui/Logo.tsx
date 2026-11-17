"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showAcronym?: boolean;
  animate?: boolean;
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
}

const sizeConfig = {
  sm: {
    container: "gap-1.5 sm:gap-2",
    acronym: "text-sm sm:text-base",
    image: "h-8 sm:h-10 w-auto",
    title: "text-[10px] font-bold leading-tight",
    subtitle: "text-[8.5px] font-medium",
    width: 120,
    height: 61,
  },
  md: {
    container: "gap-2 sm:gap-2.5 lg:gap-3",
    acronym: "text-base sm:text-lg lg:text-xl",
    image: "h-10 sm:h-12 lg:h-14 w-auto",
    title: "text-[11px] sm:text-xs lg:text-[13px] font-bold leading-tight sm:leading-snug",
    subtitle: "text-[9px] sm:text-[10px] lg:text-[11px] opacity-75 font-medium tracking-tight",
    width: 180,
    height: 92,
  },
  lg: {
    container: "gap-3 sm:gap-4",
    acronym: "text-lg sm:text-xl lg:text-2xl",
    image: "h-14 sm:h-16 lg:h-20 w-auto",
    title: "text-sm sm:text-base font-bold leading-snug",
    subtitle: "text-xs opacity-80 font-medium",
    width: 240,
    height: 123,
  },
  xl: {
    container: "gap-4 sm:gap-5",
    acronym: "text-2xl sm:text-3xl lg:text-4xl",
    image: "h-20 sm:h-28 lg:h-32 w-auto",
    title: "text-base sm:text-lg font-bold leading-snug",
    subtitle: "text-xs sm:text-sm opacity-80 font-medium",
    width: 320,
    height: 163,
  },
};

export function Logo({
  size = "md",
  showText = false,
  showAcronym = false,
  animate = true,
  className,
  imageClassName,
  href = "/",
  priority = true,
}: LogoProps) {
  const currentSize = sizeConfig[size];

  const logoContent = (
    <div
      className={cn(
        "group relative flex items-center transition-all duration-300",
        currentSize.container,
        className
      )}
    >
      {/* Animated Backdrop Glow */}
      {animate && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 rounded-full bg-forest-light/20 blur-xl opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 animate-logo-glow"
        />
      )}

      {/* Acronym HUNEZ before the logo with attractive gradient and pan effect */}
      {showAcronym && (
        <div
          className={cn(
            "relative inline-flex items-center select-none shrink-0 transition-transform duration-300 group-hover:scale-105",
            animate && "animate-bounce"
          )}
          aria-label={siteConfig.acronym}
        >
          {/* Luminous blue & green ambient backdrop glow */}
          {animate && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/25 via-cyan-400/25 via-emerald-400/25 to-teal-500/25 blur-sm opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}

          {/* Panning gradient text */}
          <span
            className={cn(
              "relative inline-flex items-center font-heading font-black tracking-wider",
              "bg-gradient-to-r from-blue-600 via-cyan-400 via-emerald-400 via-teal-500 via-sky-500 to-blue-600",
              "bg-[length:250%_auto] bg-clip-text text-transparent",
              "drop-shadow-[0_1.5px_2px_rgba(27,67,50,0.18)]",
              currentSize.acronym,
              animate && "animate-gradient-pan"
            )}
          >
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">H</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">U</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">N</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">E</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">Z</span>
          </span>
        </div>
      )}

      {/* Logo Image Wrapper */}
      <div
        className={cn(
          "relative overflow-hidden rounded-lg transition-transform duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg",
          animate && "animate-logo-float"
        )}
      >
        <Image
          src={siteConfig.logo}
          alt={`${siteConfig.shortName} logo`}
          width={currentSize.width}
          height={currentSize.height}
          className={cn(
            "object-contain transition-all duration-300 filter drop-shadow-sm group-hover:brightness-110",
            currentSize.image,
            imageClassName
          )}
          priority={priority}
        />

        {/* Subtle Interactive Shimmer */}
        {animate && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer"
          />
        )}
      </div>

      {/* Optional Side Text */}
      {showText && (
        <div className="flex flex-col max-w-[190px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[290px]">
          <span className={cn("text-forest transition-colors group-hover:text-forest-light", currentSize.title)}>
            {siteConfig.fullName}
          </span>
          <span className={cn("text-charcoal/75 tracking-tight font-medium", currentSize.subtitle)}>
            {siteConfig.positioning}
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`${siteConfig.shortName} Home`}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
