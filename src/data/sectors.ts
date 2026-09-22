export interface Sector {
  slug: string;
  title: string;
  examples: string;
  description: string;
  shapeType: "arch" | "circle" | "curved-rect" | "vertical-frame" | "standard-rect";
  badgeColor?: string;
  image?: string;
  highlights?: string[];
  impact?: string;
}

export const sectors: Sector[] = [
  {
    slug: "care",
    title: "Care & Residential",
    examples: "Care homes / Social care providers / Living facilities",
    description:
      "Develop practical 24/7 approaches to energy management, waste, sustainable procurement and staff routines.",
    shapeType: "circle",
    badgeColor: "bg-forest/10 text-forest",
    highlights: [
      "24/7 heating & energy efficiency optimization",
      "Sustainable medical & catering procurement",
      "Staff engagement for daily eco-habit adoption",
    ],
    impact: "Up to 25% reduction in annual utility waste",
  },
  {
    slug: "hospitality",
    title: "Hospitality & Dining",
    examples: "Hotels / Restaurants / Pubs / Event venues",
    description:
      "Reduce energy use, kitchen food waste and emissions while improving operational efficiency and green credentials.",
    shapeType: "circle",
    badgeColor: "bg-olive/15 text-olive",
    highlights: [
      "Commercial kitchen energy & food waste reduction",
      "Green tourism certification support",
      "Guest-facing sustainability storytelling",
    ],
    impact: "Cut food waste costs by up to 30%",
  },
  {
    slug: "retail",
    title: "Retail & Commerce",
    examples: "Independent shops / Multi-site retail / E-commerce",
    description:
      "Streamline packaging, store energy consumption, and sustainable supply chain transparency for modern consumers.",
    shapeType: "circle",
    badgeColor: "bg-warm/15 text-warm",
    highlights: [
      "Eco-friendly packaging transition",
      "Store HVAC & lighting management",
      "Ethical & low-carbon supply chain audits",
    ],
    impact: "Enhanced brand loyalty and reduced packaging overheads",
  },
  {
    slug: "offices",
    title: "Commercial Offices",
    examples: "Professional services / Tech firms / Office hubs",
    description:
      "Manage Scope 2 electricity, digital footprinting, employee green transport initiatives, and hybrid office policies.",
    shapeType: "circle",
    badgeColor: "bg-forest/10 text-forest",
    highlights: [
      "Scope 2 emissions & green tariff optimization",
      "Employee comms & green champion networks",
      "Low-carbon commuter incentives & hybrid policies",
    ],
    impact: "Zero-waste-to-landfill office accreditation",
  },
  {
    slug: "construction",
    title: "Construction & Manufacturing",
    examples: "Building contractors / Light manufacturing / Logistics",
    description:
      "Identify high-impact opportunities to reduce fuel use, material waste, Scope 1 emissions, and supply chain reporting.",
    shapeType: "circle",
    badgeColor: "bg-olive/15 text-olive",
    highlights: [
      "Site fuel & heavy machinery efficiency",
      "Material circularity & waste diversion",
      "Tender-ready Scope 1 & 2 carbon accounting",
    ],
    impact: "Win eco-conscious commercial tenders easily",
  },
];
