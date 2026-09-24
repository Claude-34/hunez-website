import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Insights | Sustainability Resources for SMEs",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <SectionWrapper className="pt-16 md:pt-24 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Insights & Perspectives"
          subtitle="Practical sustainability resources, guides, and research perspectives for SMEs."
          align="center"
        />
        <div className="mt-10 mx-auto max-w-2xl rounded-[2.5rem] border border-olive/20 bg-[#FDFBF7] p-12 text-center shadow-md space-y-4">
          <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold text-2xl mx-auto">
            🌱
          </div>
          <h3 className="text-2xl font-bold text-forest">SME Sustainability Knowledge Hub</h3>
          <p className="text-base text-charcoal/80 leading-relaxed">
            We are preparing articles, case guides, and resources on net zero, carbon footprint management,
            and human-centred sustainability tailored specifically for SMEs.
          </p>
          <p className="text-xs font-semibold text-warm uppercase tracking-wider">Publishing Schedule: Q4 2026</p>
          <div className="pt-4">
            <Button href="/contact" variant="primary">
              Get in Touch with Our Consultants
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
