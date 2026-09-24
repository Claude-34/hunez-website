export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  summary: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "Net Zero & Carbon" | "Circular Economy" | "Compliance & Strategy" | "Employee Engagement";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  summary: string;
  description: string;
  targetAudience: string;
  certificate: boolean;
  learningOutcomes: string[];
  modules: CourseModule[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "course-1",
    slug: "net-zero-essentials-for-smes",
    title: "Net Zero Essentials for SMEs",
    category: "Net Zero & Carbon",
    level: "Beginner",
    duration: "2.5 Hours (Self-Paced)",
    price: 99,
    originalPrice: 149,
    badge: "Bestseller",
    featured: true,
    summary: "A practical guide to understanding carbon terminology, measuring Scope 1 & 2 emissions, and crafting a credible business Net Zero plan.",
    description: "Designed specifically for SME owners, operations leads, and managers who need to understand carbon accounting without complex jargon. Learn how to calculate your baseline footprint, meet supply chain procurement demands, and unlock cost savings.",
    targetAudience: "Business owners, operations managers, and sustainability leads in SMEs globally.",
    certificate: true,
    learningOutcomes: [
      "Understand Scope 1, 2, and 3 carbon emissions clearly",
      "Calculate your initial business energy & fuel carbon baseline",
      "Set realistic, tender-ready reduction targets",
      "Communicate carbon progress authentically to clients & procurement teams",
    ],
    modules: [
      {
        number: "01",
        title: "Demystifying Net Zero & Carbon Standards",
        duration: "30 mins",
        summary: "Introduction to global & national Net Zero targets, SECR, and GHG Protocol basics.",
      },
      {
        number: "02",
        title: "Calculating Scope 1 & 2 Emissions Step-by-Step",
        duration: "45 mins",
        summary: "Practical walk-through converting utility bills and fuel receipts into CO2e.",
      },
      {
        number: "03",
        title: "Identifying Quick-Win Energy & Cost Savings",
        duration: "45 mins",
        summary: "Actionable low-cost/no-cost measures for office and operational reduction.",
      },
      {
        number: "04",
        title: "Creating Your SME Net Zero Action Roadmap",
        duration: "30 mins",
        summary: "Templates and tools to build your downloadable carbon strategy.",
      },
    ],
  },
  {
    id: "course-2",
    slug: "sme-waste-reduction-circular-economy",
    title: "Commercial Waste Reduction & Circular Economy",
    category: "Circular Economy",
    level: "Beginner",
    duration: "3 Hours (Self-Paced)",
    price: 129,
    originalPrice: 179,
    badge: "CPD Certified",
    featured: true,
    summary: "Cut commercial waste management bills, improve material circularity, and satisfy waste duty of care compliance.",
    description: "Learn how to conduct a commercial waste audit, reduce single-use materials, streamline packaging, and transition towards circular material flows that save money and reduce environmental impact.",
    targetAudience: "Facilities managers, procurement leads, hospitality & retail managers.",
    certificate: true,
    learningOutcomes: [
      "Conduct a simple, effective workplace waste audit",
      "Understand Waste Duty of Care legal obligations",
      "Implement zero-waste-to-landfill strategies",
      "Engage suppliers for sustainable packaging choices",
    ],
    modules: [
      {
        number: "01",
        title: "Workplace Waste Audit Masterclass",
        duration: "45 mins",
        summary: "Step-by-step methodology to quantify and segregate commercial waste stream data.",
      },
      {
        number: "02",
        title: "Duty of Care & Legal Compliance",
        duration: "45 mins",
        summary: "Navigating waste transfer notes, hazardous waste, and carrier compliance.",
      },
      {
        number: "03",
        title: "Circular Supply Chain & Packaging Strategy",
        duration: "45 mins",
        summary: "Designing out waste and choosing sustainable packaging alternatives.",
      },
      {
        number: "04",
        title: "Staff Engagement & Recycling Culture",
        duration: "45 mins",
        summary: "Habit formation techniques to boost workplace recycling compliance.",
      },
    ],
  },
  {
    id: "course-3",
    slug: "employee-green-champions-programme",
    title: "Employee Green Champions & Culture Change",
    category: "Employee Engagement",
    level: "Intermediate",
    duration: "2 Hours (Interactive Workshop)",
    price: 149,
    originalPrice: 199,
    badge: "Popular",
    featured: false,
    summary: "Empower employees to drive sustainability habits, reduce office energy waste, and foster a green workplace culture.",
    description: "Environmental initiatives fail when employees aren't engaged. Grounded in ecological anthropology and behaviour change, this course trains Green Champions to motivate peers and lead lasting cultural transformation.",
    targetAudience: "HR teams, internal green champions, team leaders, office managers.",
    certificate: true,
    learningOutcomes: [
      "Apply human-centred behaviour change models to workplace habits",
      "Design fun, engaging employee green challenges & competitions",
      "Overcome internal resistance and eco-fatigue",
      "Track and report employee-led sustainability metrics",
    ],
    modules: [
      {
        number: "01",
        title: "The Psychology of Workplace Behaviour Change",
        duration: "30 mins",
        summary: "Why traditional eco-campaigns fail and how human-centred nudges work.",
      },
      {
        number: "02",
        title: "Launching a Green Champion Network",
        duration: "30 mins",
        summary: "Structuring roles, toolkits, and recognition programmes for employee champions.",
      },
      {
        number: "03",
        title: "Designing Impactful Workplace Green Challenges",
        duration: "30 mins",
        summary: "Creating engaging energy-saving and active travel campaigns.",
      },
      {
        number: "04",
        title: "Measuring & Celebrating Employee Impact",
        duration: "30 mins",
        summary: "Reporting social and environmental metrics to senior management.",
      },
    ],
  },
  {
    id: "course-4",
    slug: "supply-chain-scope-3-decarbonisation",
    title: "Supply Chain & Scope 3 Decarbonisation",
    category: "Compliance & Strategy",
    level: "Advanced",
    duration: "4 Hours (Masterclass)",
    price: 249,
    originalPrice: 329,
    badge: "Executive",
    featured: true,
    summary: "Map supplier carbon footprints, handle commercial procurement questionnaires, and reduce Scope 3 emissions.",
    description: "Scope 3 supply chain emissions often account for 70-90% of an SME's total footprint. This masterclass gives you tender-ready frameworks to engage suppliers, request carbon data, and stand out in corporate supply chain bids.",
    targetAudience: "Procurement directors, CFOs, commercial leads, supply chain managers.",
    certificate: true,
    learningOutcomes: [
      "Map Scope 3 supply chain emission hotspots",
      "Develop supplier carbon evaluation questionnaires",
      "Answer corporate ESG procurement requirements confidently",
      "Build collaborative supplier decarbonisation initiatives",
    ],
    modules: [
      {
        number: "01",
        title: "Mapping Scope 3 Upstream & Downstream Footprints",
        duration: "60 mins",
        summary: "Methods for spend-based and average-data Scope 3 estimation.",
      },
      {
        number: "02",
        title: "Winning Commercial Tenders with ESG Compliance",
        duration: "60 mins",
        summary: "Answering PPN 06/21 and corporate procurement sustainability audits.",
      },
      {
        number: "03",
        title: "Supplier Engagement & Carbon Data Gathering",
        duration: "60 mins",
        summary: "Templates and strategies for requesting supply chain data ethically.",
      },
      {
        number: "04",
        title: "Decarbonisation Offsetting & Insetting Frameworks",
        duration: "60 mins",
        summary: "Evaluating high-integrity carbon reduction and local inset projects.",
      },
    ],
  },
];
