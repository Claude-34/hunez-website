import React from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const coreServiceSlugs = [
  "net-zero-readiness-assessment",
  "carbon-footprinting",
  "carbon-reduction-roadmaps",
  "nature-positive-business",
];

const serviceIcons: Record<string, React.ReactNode> = {
  "net-zero-readiness-assessment": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "carbon-footprinting": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  "carbon-reduction-roadmaps": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  "nature-positive-business": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

export function ServicesPreview() {
  const coreServices = services.filter((s) => coreServiceSlugs.includes(s.slug));

  return (
    <SectionWrapper className="bg-cream py-20" id="services">
      <SectionHeading
        title="Practical Services Tailored to SME Realities"
        subtitle="Avoid one-size-fits-all corporate templates. We provide actionable, science-grounded sustainability advisory structured around your budget and team."
      />

      {/* Field Science Spotlight Card */}
      <div className="mt-12 rounded-3xl border border-olive/20 bg-white shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-12 items-center">
          <div className="p-8 sm:p-10 md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-1 text-xs font-bold text-olive mb-3 w-fit">
              <span className="h-2 w-2 rounded-full bg-olive animate-pulse" />
              Empirical Biodiversity & Carbon Science
            </div>
            <h3 className="text-2xl font-bold text-forest sm:text-3xl">
              Rooted in Nature & Community Stewardship
            </h3>
            <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">
              True net zero goes beyond spreadsheets. Our founder, Dr. Caliste Omam, brings over a decade of hands-on field research assessing forest biomass, biodiversity, and community resource governance in the Congo Basin. We translate this deep scientific rigour into accessible, commercially practical roadmaps for your business.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-warm hover:text-warm-dark transition-colors"
              >
                Learn more about our methodology & services →
              </Link>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 md:h-full md:min-h-[280px] md:col-span-5 order-1 md:order-2">
            <Image
              src="/images/field/forest-canopy.jpg"
              alt="Dr. Caliste Omam and research colleague inspecting forest canopy and tree biodiversity in Cameroon"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-xl p-2.5 text-white text-xs">
              <span className="font-semibold text-warm-light">Field Science:</span> Dr. Caliste Omam assessing forest canopy & biomass
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Services Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coreServices.map((service) => (
          <div
            key={service.slug}
            className="flex flex-col justify-between rounded-2xl border border-olive/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                {serviceIcons[service.slug]}
              </div>
              <h4 className="mt-5 text-lg font-bold text-forest group-hover:text-olive transition-colors">
                {service.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {service.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-olive/10">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-xs font-bold text-warm group-hover:text-forest transition-colors"
              >
                Explore service details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Services Callout */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-warm hover:text-white hover:bg-warm transition-all px-8 py-3.5 rounded-full border border-warm/40 bg-warm/5 shadow-sm"
        >
          View all 8 sustainability services & packages →
        </Link>
      </div>
    </SectionWrapper>
  );
}
