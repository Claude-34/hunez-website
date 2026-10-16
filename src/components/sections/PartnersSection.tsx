import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  website: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: "social-epidemiology-lab",
    name: "Social Epidemiology Lab",
    category: "Academic & Research Partner",
    logo: "/images/partners/social-epidemiology-lab.png",
    website: "https://socialepidemiolab.org/",
    description:
      "Collaborating on interdisciplinary public health, community resilience, and environmental health research.",
  },
  {
    id: "reach-out",
    name: "Reach Out",
    category: "Community & Sponsorship Partner",
    logo: "/images/sponsors/reach-out.png",
    website: "https://www.reachoutcameroon.org/",
    description:
      "Empowering vulnerable communities, promoting sustainable livelihoods, and driving grassroots social and environmental action.",
  },
];

export function PartnersSection() {
  return (
    <SectionWrapper id="partners-sponsorship" className="py-20 bg-offwhite/80 border-t border-olive/15">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Partners & Sponsorship"
          subtitle="Partnering with research laboratories, academic institutions, and community sponsorship initiatives to advance sustainable, people-centred impact."
          align="center"
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-24 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name} website (opens in a new tab)`}
              title={`${partner.name} — ${partner.category}`}
              className="group relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            >
              <div className="relative h-20 sm:h-24 md:h-28 w-56 sm:w-64">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain filter transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:drop-shadow-md"
                  sizes="(max-width: 640px) 224px, 256px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export const SponsorshipSection = PartnersSection;
