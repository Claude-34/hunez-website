import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconSvg: React.ReactNode;
  accentColor: string;
}

const stages: ProcessStage[] = [
  {
    step: "01",
    title: "Measure",
    subtitle: "Baseline & Footprint",
    description: "Calculate Scope 1, 2 & priority Scope 3 emissions and identify impact hotspots across operations.",
    accentColor: "bg-forest text-white shadow-forest/30",
    iconSvg: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Commercially Realistic Roadmap",
    description: "Develop practical, prioritised carbon reduction strategies aligned with your budget and business timeline.",
    accentColor: "bg-olive text-white shadow-olive/30",
    iconSvg: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Reduce",
    subtitle: "People & Operational Action",
    description: "Implement energy efficiencies, staff behaviour change routines, waste reduction, and supplier engagement.",
    accentColor: "bg-warm text-white shadow-warm/30",
    iconSvg: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Report",
    subtitle: "Credible Evidence & Verification",
    description: "Communicate transparent progress to stakeholders, corporate tenders, and clients with zero greenwashing risk.",
    accentColor: "bg-forest-light text-white shadow-forest-light/30",
    iconSvg: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function ConnectedProcess() {
  return (
    <SectionWrapper id="how-it-works" className="relative py-24 bg-sage-gradient">
      <SectionHeading
        title="How HUNEZ Works — Connected Process"
        subtitle="A clear, structured 4-stage pathway designed specifically for SMEs to transition from footprinting to verifiable results."
        align="center"
      />

      <div className="relative mt-16">
        {/* Desktop Horizontal Connector Line */}
        <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-forest via-olive to-warm z-0 rounded-full" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {stages.map((stage, idx) => (
            <div key={stage.step} className="flex flex-col items-center text-center group">
              {/* Circular Stage Badge & Icon */}
              <div className="relative">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center ${stage.accentColor} shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-110`}
                >
                  {stage.iconSvg}
                </div>
                {/* Step Number Bubble */}
                <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white text-forest border border-olive/30 flex items-center justify-center font-bold text-xs shadow-md">
                  {stage.step}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="mt-6 text-xl font-bold text-forest group-hover:text-olive transition-colors">
                {stage.title}
              </h3>
              <p className="text-xs font-semibold text-warm uppercase tracking-wider mt-1">
                {stage.subtitle}
              </p>

              {/* Description Box */}
              <div className="mt-4 p-5 rounded-2xl border border-olive/15 bg-offwhite/80 shadow-sm transition-shadow group-hover:shadow-md flex-grow">
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Mobile Connector Arrow */}
              {idx < stages.length - 1 && (
                <div className="mt-6 lg:hidden text-olive/40 font-bold text-xl">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
