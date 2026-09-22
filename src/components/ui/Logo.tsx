"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  animate?: boolean;
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
}

const sizeConfig = {
  sm: {
    container: "gap-2.5",
    image: "h-10 sm:h-12 w-auto",
    title: "text-xs font-bold leading-tight",
    subtitle: "text-[10px]",
    width: 120,
    height: 61,
  },
  md: {
    container: "gap-3",
    image: "h-14 sm:h-16 lg:h-18 w-auto",
    title: "text-sm sm:text-base font-bold leading-tight",
    subtitle: "text-xs opacity-75",
    width: 180,
    height: 92,
  },
  lg: {
    container: "gap-4",
    image: "h-18 sm:h-22 lg:h-26 w-auto",
    title: "text-base sm:text-lg font-bold leading-tight",
    subtitle: "text-xs sm:text-sm opacity-80",
    width: 240,
    height: 123,
  },
  xl: {
    container: "gap-5",
    image: "h-24 sm:h-32 lg:h-36 w-auto",
    title: "text-xl sm:text-2xl font-bold leading-tight",
    subtitle: "text-sm sm:text-base opacity-80",
    width: 320,
    height: 163,
  },
};

export function Logo({
  size = "md",
  showText = false,
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
        <div className="flex flex-col">
          <span className={cn("text-forest transition-colors group-hover:text-forest-light", currentSize.title)}>
            {siteConfig.shortName}
          </span>
          <span className={cn("text-charcoal/70", currentSize.subtitle)}>
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
