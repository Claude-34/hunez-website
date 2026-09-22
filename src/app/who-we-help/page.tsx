import { sectors } from "@/data/sectors";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectorCard } from "@/components/ui/SectorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Who We Help | SME Sustainability Support",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <SectionWrapper className="pt-16 md:pt-24 pb-20 bg-sage">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            Tailored Industry Expertise
          </span>
          <SectionHeading
            title="Sustainability Support Designed for UK SMEs"
            subtitle="Our services are designed particularly for small and medium-sized organisations that need credible sustainability support but may not have dedicated internal environmental teams."
            align="center"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {sectors.map((sector) => (
            <SectorCard key={sector.slug} sector={sector} />
          ))}
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
