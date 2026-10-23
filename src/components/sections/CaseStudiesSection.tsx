import React from "react";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" className="bg-offwhite py-20">
      <SectionHeading
        title="Proven SME Impact — Case Studies"
        subtitle="Clear before-and-after evidence demonstrating how human-centred net zero strategies deliver tangible environmental and commercial value."
      />

      {/* Field Intervention Highlight Banner */}
      <div className="mt-12 rounded-3xl border border-forest/15 bg-white shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-12 items-center">
          <div className="relative h-72 sm:h-80 md:h-full md:min-h-[300px] md:col-span-5">
            <Image
              src="/images/field/water-cleanup.jpg"
              alt="Community field workers in Cameroon waterway deploying debris and waste trap net for ecological remediation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-xl p-2.5 text-white text-xs">
              <span className="font-semibold text-warm-light">Field Action:</span> Waterway debris mitigation and environmental remediation
            </div>
          </div>

          <div className="p-8 sm:p-10 md:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-xs font-bold text-forest mb-3 w-fit">
              <span className="h-2 w-2 rounded-full bg-forest animate-pulse" />
              Tangible On-The-Ground Action
            </div>
            <h3 className="text-2xl font-bold text-forest sm:text-3xl">
              Practical Interventions That Produce Measurable Change
            </h3>
            <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">
              Sustainability fails when it remains on paper. Our methodology is honed through direct, physical interventions — from managing natural resources with local communities to re-engineering energy flows in SME facilities.
            </p>

            {/* 3 Core Impact Statistics */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-olive/15 pt-5">
              <div className="rounded-xl bg-forest/5 p-3 text-center border border-forest/10">
                <span className="block text-xl font-extrabold text-forest sm:text-2xl">32%</span>
                <span className="mt-1 block text-[11px] font-semibold text-charcoal/70 uppercase">Energy Cut</span>
              </div>
              <div className="rounded-xl bg-olive/10 p-3 text-center border border-olive/20">
                <span className="block text-xl font-extrabold text-olive sm:text-2xl">180t+</span>
                <span className="mt-1 block text-[11px] font-semibold text-charcoal/70 uppercase">CO₂e Avoided</span>
              </div>
              <div className="rounded-xl bg-warm/10 p-3 text-center border border-warm/20">
                <span className="block text-xl font-extrabold text-warm sm:text-2xl">94%</span>
                <span className="mt-1 block text-[11px] font-semibold text-charcoal/70 uppercase">Engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Cards */}
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-olive/20 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
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
