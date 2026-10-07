export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  title: string;
  before: {
    title: string;
    description: string;
    metric: string;
  };
  intervention: {
    title: string;
    description: string;
    actions: string[];
  };
  result: {
    title: string;
    description: string;
    highlight: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "kenneth-nkembeng-case",
    client: "Kenneth Ekokobe (Fuanke) Nkembeng",
    sector: "Commercial & Operational Leadership",
    title: "Operational Efficiency & Waste Management Optimisation",
    before: {
      title: "Current Situation",
      description: "High energy overheads across operational sites with uncoordinated waste management routines and unquantified carbon output.",
      metric: "Baseline: 210 tCO2e/yr",
    },
    intervention: {
      title: "HUNEZ Intervention",
      description: "Conducted an onsite Net Zero Readiness Assessment, introduced staff-focused energy awareness routines, and restructured operational resource allocation.",
      actions: [
        "Onsite facility carbon & energy profiling",
        "Staff engagement & operational routine alignment",
        "Resource stream segregation & waste reduction",
      ],
    },
    result: {
      title: "Measurable Result",
      description: "Achieved immediate carbon reductions within 6 months while lowering utility overheads.",
      highlight: "-35% Carbon Footprint & £9,200 Annual Savings",
    },
  },
  {
    id: "dikum-steve-case",
    client: "Engineer Dikum Steve",
    sector: "Infrastructure & Technical Engineering",
    title: "Scope 1 & 2 Carbon Decarbonisation & Audit Readiness",
    before: {
      title: "Current Situation",
      description: "Complex engineering equipment usage, peak power demands, and corporate client tender requests requiring verified GHG footprint data.",
      metric: "Baseline: 340 tCO2e/yr",
    },
    intervention: {
      title: "HUNEZ Intervention",
      description: "Mapped Scope 1 & Scope 2 emissions, established an ISO 14064-1 aligned baseline, and implemented smart equipment energy sequencing.",
      actions: [
        "ISO 14064-1 compliant carbon accounting",
        "Equipment load balancing & efficiency sequencing",
        "PPN 06/21 compliant Carbon Reduction Plan",
      ],
    },
    result: {
      title: "Measurable Result",
      description: "Secured high-value corporate client tender compliance and achieved verified emission reductions.",
      highlight: "-31% Operational Emissions & Audit-Ready Baseline",
    },
  },
];
