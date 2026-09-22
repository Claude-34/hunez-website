export interface Package {
  id: string;
  tier: string;
  title: string;
  description: string;
  includes: string[];
  price: string;
  cta: string;
  contactParam: string;
}

export const packages: Package[] = [
  {
    id: "start",
    tier: "START",
    title: "Net Zero Starter",
    description: "For businesses beginning their sustainability journey",
    includes: [
      "Initial sustainability review",
      "Net zero readiness assessment",
      "Priority environmental issues",
      "Initial carbon assessment",
      "Practical action plan",
      "Consultation session",
    ],
    price: "From £750",
    cta: "Get Started",
    contactParam: "start",
  },
  {
    id: "grow",
    tier: "GROW",
    title: "Carbon Reduction",
    description: "For businesses ready to start reducing emissions",
    includes: [
      "Carbon footprint assessment",
      "Scope 1 & 2 assessment",
      "Priority Scope 3 categories",
      "Carbon reduction opportunities",
      "Reduction roadmap",
      "Implementation priorities",
    ],
    price: "From £2,000",
    cta: "Build Your Roadmap",
    contactParam: "grow",
  },
  {
    id: "transform",
    tier: "TRANSFORM",
    title: "Sustainability Partnership",
    description: "For businesses requiring ongoing support",
    includes: [
      "Sustainability strategy",
      "Carbon management",
      "Monthly sustainability support",
      "Employee engagement",
      "Supply chain support",
      "Progress monitoring",
      "Sustainability reporting support",
    ],
    price: "Bespoke pricing",
    cta: "Talk to Us",
    contactParam: "transform",
  },
];
