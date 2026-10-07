import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: "social-epidemiology-lab",
    name: "Social Epidemiology Lab",
    category: "Academic & Research Partner",
    logo: "/images/partners/social-epidemiology-lab.png",
    description:
      "Collaborating on interdisciplinary public health, community resilience, and environmental health research.",
  },
];

export function PartnersSection() {
  return (
    <SectionWrapper id="partners" className="py-20 bg-offwhite/80 border-t border-olive/15">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Partners & Collaborators"
          subtitle="Partnering with leading research laboratories, academic institutions, and environmental organisations to advance evidence-led sustainability."
          align="center"
        />

        <div className="mt-12 flex justify-center">
          <div className="max-w-md w-full">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group flex flex-col items-center text-center p-8 rounded-3xl border border-olive/20 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-forest/40 hover:-translate-y-1"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-warm px-3.5 py-1 rounded-full bg-warm/10 mb-6">
                  {partner.category}
                </span>

                {/* Partner Logo */}
                <div className="relative h-28 w-64 mb-6 flex items-center justify-center p-4 bg-cream/40 rounded-2xl border border-olive/10 group-hover:scale-105 transition-transform">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>

                <h3 className="text-xl font-bold text-forest mb-2">{partner.name}</h3>
                <p className="text-xs text-charcoal/80 leading-relaxed max-w-xs font-medium">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
