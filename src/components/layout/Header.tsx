"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-forest/15 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <Logo size="md" showText animate priority />

        <nav className="hidden items-center gap-1.5 lg:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative group px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center",
                  isActive
                    ? "bg-forest/10 text-forest font-semibold shadow-xs"
                    : "text-charcoal/90 hover:bg-forest/5 hover:text-forest"
                )}
              >
                <span>{item.label}</span>

                {/* Animated Bottom Indicator Line */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-forest transition-all duration-300 ease-out",
                    isActive
                      ? "w-3/5 opacity-100"
                      : "w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-100"
                  )}
                />
              </Link>
            );
          })}
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
        <div className="space-y-1.5 px-4 py-4">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-forest/10 text-forest font-bold border-l-4 border-forest pl-4 shadow-xs"
                    : "text-charcoal hover:bg-forest/5 hover:text-forest hover:pl-4"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
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
