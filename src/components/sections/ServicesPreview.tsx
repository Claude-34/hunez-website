import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const serviceImages: Record<string, string> = {
  "net-zero-readiness-assessment": "/images/service-site-assessment.jpg",
  "carbon-footprinting": "/images/service-carbon.png",
  "carbon-reduction-roadmaps": "/images/service-roadmap.png",
  "sustainability-strategy": "/images/service-community-conservation.jpg",
};

export function ServicesPreview() {
  const spotlightServices = services.slice(0, 4);

  return (
    <SectionWrapper className="bg-cream py-24" id="services">
      <SectionHeading
        title="How We Help — Tailored Services"
        subtitle="Avoid one-size-fits-all templates. We provide practical, human-centred net zero support structured around your operational reality."
      />

      <div className="space-y-8 mt-12">
        {spotlightServices.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            layout="row"
            imagePosition={index % 2 === 0 ? "left" : "right"}
            imageSrc={serviceImages[service.slug] || "/images/hero-sustainability.png"}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-warm hover:text-warm-light transition-colors px-6 py-3 rounded-full border border-warm/30 bg-warm/5 hover:bg-warm/10"
        >
          View all 8 sustainability services →
        </Link>
      </div>
    </SectionWrapper>
  );
}
