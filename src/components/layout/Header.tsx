"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/15 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.shortName} logo`}
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-forest">
              Human-Centred Net Zero
            </p>
            <p className="text-xs text-charcoal/60">{siteConfig.positioning}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact?intent=consultation" variant="warm">
            {siteConfig.ctas.secondary}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-forest lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={cn(
          "border-t border-olive/10 bg-white lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-charcoal hover:bg-offwhite hover:text-forest"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              href="/contact?intent=consultation"
              variant="warm"
              className="w-full"
            >
              {siteConfig.ctas.secondary}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
