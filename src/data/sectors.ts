export interface Sector {
  slug: string;
  title: string;
  examples: string;
  description: string;
  shapeType: "arch" | "circle" | "curved-rect" | "vertical-frame" | "standard-rect";
  badgeColor?: string;
  image?: string;
}

export const sectors: Sector[] = [
  {
    slug: "care",
    title: "Care & Residential",
    examples: "Care homes / Social care providers / Living facilities",
    description:
      "Develop practical 24/7 approaches to energy management, waste, sustainable procurement and staff routines.",
    shapeType: "arch",
    badgeColor: "bg-forest/10 text-forest",
  },
  {
    slug: "hospitality",
    title: "Hospitality & Dining",
    examples: "Hotels / Restaurants / Pubs / Event venues",
    description:
      "Reduce energy use, kitchen food waste and emissions while improving operational efficiency and green credentials.",
    shapeType: "circle",
    badgeColor: "bg-olive/15 text-olive",
  },
  {
    slug: "retail",
    title: "Retail & Commerce",
    examples: "Independent shops / Multi-site retail / E-commerce",
    description:
      "Streamline packaging, store energy consumption, and sustainable supply chain transparency for modern consumers.",
    shapeType: "curved-rect",
    badgeColor: "bg-warm/15 text-warm",
  },
  {
    slug: "offices",
    title: "Commercial Offices",
    examples: "Professional services / Tech firms / Office hubs",
    description:
      "Manage Scope 2 electricity, digital footprinting, employee green transport initiatives, and hybrid office policies.",
    shapeType: "vertical-frame",
    badgeColor: "bg-forest/10 text-forest",
  },
  {
    slug: "construction",
    title: "Construction & Manufacturing",
    examples: "Building contractors / Light manufacturing / Logistics",
    description:
      "Identify high-impact opportunities to reduce fuel use, material waste, Scope 1 emissions, and supply chain reporting.",
    shapeType: "standard-rect",
    badgeColor: "bg-olive/15 text-olive",
  },
];

