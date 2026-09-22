import Link from "next/link";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function PackagesPreview() {
  return (
    <SectionWrapper className="bg-warm-sand py-24">
      <SectionHeading
        title="Packages designed for SMEs"
        subtitle="Clear, practical packages to help you start, grow and transform your sustainability journey."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.id} pkg={pkg} featured={index === 1} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/packages"
          className="text-sm font-semibold text-warm hover:text-warm-light"
        >
          View full package details →
        </Link>
      </div>
    </SectionWrapper>
  );
}
