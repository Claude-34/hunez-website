import { services } from "@/data/services";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Net Zero & Sustainability Services for SMEs",
  path: "/services",
});

const serviceImages: Record<string, string> = {
  "net-zero-readiness-assessment": "/images/service-site-assessment.jpg",
  "carbon-footprinting": "/images/service-carbon.png",
  "carbon-reduction-roadmaps": "/images/service-roadmap.png",
  "sustainability-strategy": "/images/service-community-conservation.jpg",
  "behaviour-change-employee-engagement": "/images/service-field-research.jpg",
  "nature-positive-business": "/images/green-vegetation-bg.jpg",
  "greenwashing-risk-review": "/images/service-assessment.png",
  "outsourced-sustainability-support": "/images/service-environmental-protection.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="pt-16 md:pt-24 pb-20 bg-cream">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive SME Offerings
          </span>
          <SectionHeading
            title="How We Can Help Your Business"
            subtitle="Whether you are just beginning your sustainability journey or already working towards net zero, we provide practical support tailored to your organisation."
            align="center"
          />
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              layout="row"
              imagePosition={index % 2 === 0 ? "left" : "right"}
              imageSrc={serviceImages[service.slug] || "/images/hero-sustainability.png"}
            />
          ))}
        </div>
      </SectionWrapper>
      <CTABanner />
    </>
  );
}
