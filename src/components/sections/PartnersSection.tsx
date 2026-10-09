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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name} website (opens in a new tab)`}
              className="group flex flex-col items-center text-center p-8 rounded-3xl border border-olive/20 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-forest hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/20"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-warm px-3.5 py-1 rounded-full bg-warm/10 mb-6 group-hover:bg-warm/20 transition-colors">
                {partner.category}
              </span>

              {/* Partner / Sponsor Logo */}
              <div className="relative h-28 w-64 mb-6 flex items-center justify-center p-4 bg-cream/40 rounded-2xl border border-olive/10 group-hover:bg-white group-hover:border-forest/20 group-hover:scale-105 transition-all">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>

              <h3 className="text-xl font-bold text-forest mb-2 group-hover:text-forest-light transition-colors flex items-center gap-1.5">
                <span>{partner.name}</span>
                <span className="text-sm font-normal text-warm opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  ↗
                </span>
              </h3>
              <p className="text-xs text-charcoal/80 leading-relaxed max-w-xs font-medium mb-4 flex-grow">
                {partner.description}
              </p>

              <span className="inline-flex items-center gap-1 text-xs font-bold text-forest group-hover:text-warm transition-colors pt-3 border-t border-olive/10 w-full justify-center">
                <span>Visit Official Website</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export const SponsorshipSection = PartnersSection;
