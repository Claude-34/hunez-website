import { CTABanner } from "@/components/ui/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { RotatingSectorsCircle } from "@/components/sections/RotatingSectorsCircle";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Who We Help | SME Sustainability Support",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <SectionWrapper className="pt-16 md:pt-24 pb-20 bg-sage overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            Tailored Industry Expertise
          </span>
          <SectionHeading
            title="Sustainability Support Designed for UK SMEs"
            subtitle="Our services are designed particularly for small and medium-sized organisations that need credible sustainability support but may not have dedicated internal environmental teams."
            align="center"
          />
        </div>

        <RotatingSectorsCircle />
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
