import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "./Button";
import { SectionWrapper } from "./SectionWrapper";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready to Turn Sustainability into a Real Commercial Advantage?",
  subtitle = siteConfig.differentiator,
}: CTABannerProps) {
  return (
    <SectionWrapper variant="dark" className="relative overflow-hidden py-24 bg-forest">
      {/* Background Field Photo with Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/field/field-operations.jpg"
          alt="HUNEZ environmental scientific field operations and assessment team"
          fill
          className="object-cover object-center opacity-25 filter saturate-150 contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-warm-light border border-white/20 mb-6 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-warm-light animate-pulse" />
          Start With a Free Initial Consultation
        </span>

        <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl tracking-tight leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="warm" className="w-full sm:w-auto shadow-lg shadow-warm/25">
            {siteConfig.ctas.primary}
          </Button>
          <Button
            href="/services"
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-forest backdrop-blur-sm"
          >
            Explore All 8 Services
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70 border-t border-white/15 pt-6">
          <span className="flex items-center gap-1.5">
            <span className="text-warm-light">✓</span> 100% Practical SME Focus
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-warm-light">✓</span> Zero Speculative Offsets
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-warm-light">✓</span> Science-Led & Human-Centred
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
