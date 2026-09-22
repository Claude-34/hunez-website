import React from "react";

export interface TrustBadge {
  name: string;
  code: string;
  description: string;
}

const badges: TrustBadge[] = [
  {
    name: "GHG Protocol",
    code: "Scope 1, 2 & 3",
    description: "Standardised Emissions Measurement",
  },
  {
    name: "ISO 14064-1",
    code: "Verification Ready",
    description: "Greenhouse Gas Accounting & Verification",
  },
  {
    name: "SBTi Aligned",
    code: "Science-Based Targets",
    description: "Aligned with 1.5°C Trajectory Guidelines",
  },
  {
    name: "UK SME Hub",
    code: "Climate Commitment",
    description: "Practical Action Plan Framework for UK Businesses",
  },
];

export function TrustBar() {
  return (
    <div className="w-full bg-forest text-white py-6 px-4 border-y border-forest-light/20 relative z-20 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-offwhite/90">
              Recognised Standards & Frameworks:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full md:w-auto">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="flex flex-col items-center md:items-start p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-bold text-white tracking-wide">
                  {badge.name}
                </span>
                <span className="text-[11px] font-semibold text-warm-light">
                  {badge.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
