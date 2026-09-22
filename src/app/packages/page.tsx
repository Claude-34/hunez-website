import { packages } from "@/data/packages";
import { CTABanner } from "@/components/ui/CTABanner";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sustainability Packages for UK SMEs",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <SectionWrapper className="pt-16 md:pt-24 pb-20 bg-warm-sand">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm/15 text-warm text-xs font-bold uppercase tracking-wider mb-3">
            Structured SME Engagement
          </span>
          <SectionHeading
            title="Packages Designed for SMEs"
            subtitle="Clear, practical packages to help you start, grow and transform your sustainability journey."
            align="center"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} featured={index === 1} />
          ))}
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
