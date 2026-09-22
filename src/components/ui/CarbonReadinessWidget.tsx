"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Option {
  id: string;
  label: string;
  icon?: string;
}

const sectors: Option[] = [
  { id: "care", label: "Care & Residential Facilities" },
  { id: "hospitality", label: "Hospitality & Dining" },
  { id: "retail", label: "Retail & E-commerce" },
  { id: "offices", label: "Commercial Offices" },
  { id: "construction", label: "Construction & Manufacturing" },
];

const sizes: Option[] = [
  { id: "micro", label: "Micro SME (1 - 10 employees)" },
  { id: "small", label: "Small SME (11 - 50 employees)" },
  { id: "medium", label: "Medium SME (51 - 250 employees)" },
];

const priorities: Option[] = [
  { id: "baseline", label: "Establish Carbon Baseline (Scope 1 & 2)" },
  { id: "costs", label: "Reduce High Energy & Resource Costs" },
  { id: "tenders", label: "Satisfy Corporate Client Tender Requirements" },
  { id: "culture", label: "Drive Employee Engagement & Action" },
];

export function CarbonReadinessWidget() {
  const [step, setStep] = useState<number>(1);
  const [selectedSector, setSelectedSector] = useState<string>("care");
  const [selectedSize, setSelectedSize] = useState<string>("small");
  const [selectedPriority, setSelectedPriority] = useState<string>("baseline");

  const isComplete = step === 4;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <section id="readiness-quiz" className="py-20 bg-warm-sand">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2.5rem] border-2 border-forest/20 bg-gradient-to-br from-offwhite via-white to-forest/5 p-8 md:p-12 shadow-executive">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm/15 text-warm text-xs font-bold uppercase tracking-wider mb-3">
              <span>Interactive SME Readiness Tool</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
              Assess Your SME Net Zero Pathway in 60 Seconds
            </h2>
            <p className="mt-3 text-base text-charcoal/80 font-medium">
              Select your business profile below to identify immediate high-impact sustainability actions.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-xs font-bold text-forest mb-2">
              <span>Step {Math.min(step, 3)} of 3</span>
              <span>{isComplete ? "Pathway Complete" : `${Math.round((step / 3) * 100)}%`}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-forest/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-forest to-olive transition-all duration-500 rounded-full"
                style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Quiz Content Container */}
          <div className="mt-10 min-h-[260px] flex flex-col justify-between max-w-2xl mx-auto">
            {/* Step 1: Sector */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-bold text-forest text-center">
                  1. Which sector best describes your business?
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {sectors.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSector(s.id)}
                      className={`p-4 rounded-2xl border text-left text-sm font-semibold transition-all ${
                        selectedSector === s.id
                          ? "border-forest bg-forest text-white shadow-md scale-[1.02]"
                          : "border-olive/20 bg-white text-charcoal hover:border-olive/40 hover:bg-forest/5"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Size */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-bold text-forest text-center">
                  2. What is your organization size?
                </h3>
                <div className="grid gap-3">
                  {sizes.map((sz) => (
                    <button
                      key={sz.id}
                      onClick={() => setSelectedSize(sz.id)}
                      className={`p-4 rounded-2xl border text-left text-sm font-semibold transition-all ${
                        selectedSize === sz.id
                          ? "border-forest bg-forest text-white shadow-md scale-[1.02]"
                          : "border-olive/20 bg-white text-charcoal hover:border-olive/40 hover:bg-forest/5"
                      }`}
                    >
                      {sz.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Primary Priority */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-bold text-forest text-center">
                  3. What is your top sustainability priority?
                </h3>
                <div className="grid gap-3">
                  {priorities.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPriority(p.id)}
                      className={`p-4 rounded-2xl border text-left text-sm font-semibold transition-all ${
                        selectedPriority === p.id
                          ? "border-forest bg-forest text-white shadow-md scale-[1.02]"
                          : "border-olive/20 bg-white text-charcoal hover:border-olive/40 hover:bg-forest/5"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Results & Action Summary */}
            {step === 4 && (
              <div className="space-y-6 text-center animate-fade-in">
                <div className="p-6 rounded-3xl bg-forest text-white shadow-xl border border-forest-light/30">
                  <span className="inline-block px-3 py-1 rounded-full bg-olive-light/20 text-olive-light text-xs font-bold uppercase mb-2">
                    Recommended HUNEZ Support Package
                  </span>
                  <h3 className="text-2xl font-bold">
                    Tailored Net Zero Action Roadmap
                  </h3>
                  <p className="mt-2 text-sm text-offwhite/90 leading-relaxed">
                    Based on your profile ({selectedSector.toUpperCase()} sector, {selectedSize} size), we recommend starting with a <strong>Scope 1 & 2 Carbon Footprint & Energy Audit</strong> combined with staff-focused reduction routines.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap justify-center gap-4 text-xs font-bold text-warm-light">
                    <span>✓ ISO 14064 Aligned Report</span>
                    <span>✓ 15-30% Est. Energy Savings</span>
                    <span>✓ Commercially Realistic Plan</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button href="/contact?intent=readiness-quiz">
                    Book Free Consultation for Your Plan →
                  </Button>
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-charcoal/60 hover:text-forest py-3 px-4 underline"
                  >
                    Start Over / Retake Quiz
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Controls for Steps 1-3 */}
            {step < 4 && (
              <div className="mt-8 flex items-center justify-between border-t border-olive/15 pt-6">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="text-xs font-bold text-charcoal/60 hover:text-forest disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <Button onClick={handleNext}>
                  {step === 3 ? "Generate Pathway →" : "Next Step →"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
