export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets?: string[];
}

export const services: Service[] = [
  {
    slug: "net-zero-readiness-assessment",
    title: "Net Zero Readiness Assessment",
    summary:
      "Understand where your business currently stands and what you need to do next.",
    description:
      "We assess your current practices, environmental impacts, risks and opportunities and provide a practical action plan.",
  },
  {
    slug: "carbon-footprinting",
    title: "Carbon Footprinting",
    summary:
      "Measure your organisational greenhouse gas emissions and identify the areas where reductions can have the greatest impact.",
    description:
      "Support can include comprehensive emissions measurement and reporting across your operations.",
    bullets: [
      "Scope 1 emissions",
      "Scope 2 emissions",
      "Priority Scope 3 categories",
      "Emissions data collection",
      "Carbon reporting",
    ],
  },
  {
    slug: "carbon-reduction-roadmaps",
    title: "Carbon Reduction Roadmaps",
    summary: "Move from measurement to action.",
    description:
      "We develop practical, phased carbon reduction plans that identify priorities, responsibilities, timescales and measurable outcomes.",
  },
  {
    slug: "sustainability-strategy",
    title: "Sustainability Strategy",
    summary:
      "Develop a sustainability strategy aligned with your business objectives.",
    description:
      "We help SMEs integrate sustainability into their core business operations and planning.",
    bullets: [
      "Operations",
      "Procurement",
      "Supply chains",
      "Resource management",
      "Business planning",
      "Employee engagement",
    ],
  },
  {
    slug: "behaviour-change-employee-engagement",
    title: "Behaviour Change & Employee Engagement",
    summary:
      "Sustainability strategies only work when people understand and participate in them.",
    description:
      "We help businesses develop practical approaches to employee engagement, communication and behaviour change.",
  },
  {
    slug: "nature-positive-business",
    title: "Nature Positive Business",
    summary: "Go beyond carbon.",
    description:
      "We help businesses understand their relationship with nature and identify opportunities to improve biodiversity, resource stewardship and nature-related resilience.",
  },
  {
    slug: "greenwashing-risk-review",
    title: "Greenwashing Risk Review",
    summary:
      "Ensure your environmental claims are credible, evidence-based and appropriate.",
    description:
      "We review sustainability communications and identify areas where environmental claims may require stronger evidence or clearer wording.",
  },
  {
    slug: "outsourced-sustainability-support",
    title: "Outsourced Sustainability Support",
    summary:
      "Not ready to employ a full-time sustainability manager?",
    description:
      "We provide flexible outsourced sustainability support for SMEs that need ongoing expertise without the cost of a permanent in-house team.",
  },
];
