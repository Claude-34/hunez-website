import React from "react";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" className="bg-offwhite py-20">
      <SectionHeading
        title="Proven SME Impact — Case Studies"
        subtitle="Clear before-and-after evidence demonstrating how human-centred net zero strategies deliver both environmental and financial value."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-olive/20 bg-white shadow-md"
          >
            {/* Case Study Header */}
            <div className="bg-forest text-white p-6 border-b border-forest-light/30">
              <span className="inline-block rounded-full bg-olive-light/20 px-3 py-1 text-xs font-semibold text-olive-light">
                {study.sector}
              </span>
              <h3 className="mt-2 text-xl font-bold">{study.client}</h3>
              <p className="mt-1 text-sm text-offwhite/80">{study.title}</p>
            </div>

            {/* Split 3-Stage Layout (Before / Intervention / After) */}
            <div className="grid divide-y md:divide-y-0 md:divide-x divide-olive/15 md:grid-cols-3 flex-grow">
              {/* 1. Current Situation (Before) */}
              <div className="p-6 bg-red-50/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                    1. Before
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-charcoal">
                    {study.before.title}
                  </h4>
                  <p className="mt-2 text-xs text-charcoal/80 leading-relaxed">
                    {study.before.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-200/50">
                  <span className="text-xs font-bold text-red-700">
                    {study.before.metric}
                  </span>
                </div>
              </div>

              {/* 2. HUNEZ Intervention */}
              <div className="p-6 bg-amber-50/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-warm bg-warm/15 px-2 py-0.5 rounded">
                    2. Action
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-charcoal">
                    {study.intervention.title}
                  </h4>
                  <p className="mt-2 text-xs text-charcoal/80 leading-relaxed mb-3">
                    {study.intervention.description}
                  </p>
                  <ul className="space-y-1 text-xs text-charcoal/70">
                    {study.intervention.actions.map((act) => (
                      <li key={act} className="flex items-start gap-1.5">
                        <span className="text-warm font-bold">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Measurable Result (After) */}
              <div className="p-6 bg-emerald-50/40 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest bg-forest/15 px-2 py-0.5 rounded">
                    3. Result
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-forest">
                    {study.result.title}
                  </h4>
                  <p className="mt-2 text-xs text-charcoal/80 leading-relaxed">
                    {study.result.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200 bg-emerald-100/60 p-2.5 rounded-lg text-center">
                  <span className="text-xs font-bold text-forest block">
                    {study.result.highlight}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
