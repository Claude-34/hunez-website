import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-olive/10 bg-forest text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/80">{siteConfig.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-white/80 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2026 {siteConfig.name} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
