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
    id: "oak-grove-care",
    client: "Oak Grove Residential Care",
    sector: "Care Homes (SME)",
    title: "Energy & Waste Reduction in 24/7 Residential Care",
    before: {
      title: "Current Situation",
      description: "High continuous energy consumption, rising utility costs, and complex clinical/general waste sorting without clear staff engagement.",
      metric: "Baseline: 180 tCO2e/yr",
    },
    intervention: {
      title: "HUNEZ Intervention",
      description: "Conducted an onsite Net Zero Readiness Assessment, introduced staff-focused energy awareness routines, and optimised waste collection schedules.",
      actions: [
        "24/7 Energy audit & heating schedule optimisation",
        "Staff behaviour change & green champions network",
        "Supplier engagement for low-impact medical consumables",
      ],
    },
    result: {
      title: "Measurable Result",
      description: "Achieved significant carbon reductions within 9 months while improving thermal comfort for residents.",
      highlight: "-32% Carbon Footprint & £8,400 Annual Savings",
    },
  },
  {
    id: "greenfield-hospitality",
    client: "The Crown & Willow Country Inn",
    sector: "Hospitality & Food Service",
    title: "Scope 1 & 2 Carbon Reduction & Food Waste Minimisation",
    before: {
      title: "Current Situation",
      description: "Heavy kitchen gas usage, peak electricity demands, and supply chain pressure from corporate event clients requiring green credentials.",
      metric: "Baseline: 145 tCO2e/yr",
    },
    intervention: {
      title: "HUNEZ Intervention",
      description: "Mapped Scope 1 & 2 emissions, implemented smart kitchen energy monitoring, and introduced a farm-to-fork sustainable purchasing policy.",
      actions: [
        "Kitchen equipment energy sequencing",
        "Local supply chain carbon accounting",
        "Food waste tracking & compost partnership",
      ],
    },
    result: {
      title: "Measurable Result",
      description: "Secured green supplier verification for corporate bookings and lowered operational overheads.",
      highlight: "-28% Kitchen Emissions & 4.2t Food Waste Avoided",
    },
  },
];
