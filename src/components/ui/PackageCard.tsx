import type { Package } from "@/data/packages";
import { Button } from "./Button";

interface PackageCardProps {
  pkg: Package;
  featured?: boolean;
}

export function PackageCard({ pkg, featured = false }: PackageCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-8 shadow-sm ${
        featured
          ? "border-forest bg-forest text-white"
          : "border-olive/20 bg-white"
      }`}
    >
      <p
        className={`text-sm font-bold tracking-wider ${
          featured ? "text-warm-light" : "text-olive"
        }`}
      >
        {pkg.tier}
      </p>
      <h3
        className={`mt-2 text-2xl font-bold ${
          featured ? "text-white" : "text-forest"
        }`}
      >
        {pkg.title}
      </h3>
      <p
        className={`mt-2 text-sm ${
          featured ? "text-white/80" : "text-charcoal/70"
        }`}
      >
        {pkg.description}
      </p>
      <ul className="mt-6 flex-grow space-y-2">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-2 text-sm ${
              featured ? "text-white/90" : "text-charcoal/80"
            }`}
          >
            <span
              className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                featured ? "bg-warm-light" : "bg-olive"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
      <p
        className={`mt-6 text-2xl font-bold ${
          featured ? "text-warm-light" : "text-forest"
        }`}
      >
        {pkg.price}
      </p>
      <Button
        href={`/contact?package=${pkg.contactParam}`}
        variant={featured ? "warm" : "primary"}
        className="mt-6 w-full"
      >
        {pkg.cta} →
      </Button>
    </article>
  );
}
