export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  volume: string;
  doi?: string;
  url?: string;
  category: string;
  abstractSummary: string;
  highlights: string[];
}

export const publications: Publication[] = [
  {
    id: "forest-use-baka-bantu-2024",
    title:
      "An assessment of forest use and its benefits on livelihoods: A case of the Baka and Bantu communities, Southeast Cameroon",
    authors: "Omam, M.M.C., Sonfo Tsamo, A., & Yasuoka, H.",
    year: 2024,
    journal: "Forest Policy and Economics",
    volume: "Volume 169, 103344",
    doi: "https://doi.org/10.1016/j.forpol.2024.103344",
    url: "https://doi.org/10.1016/j.forpol.2024.103344",
    category: "Forest Governance & Livelihoods",
    abstractSummary:
      "An empirical investigation into multi-stakeholder forest resource utilisation among indigenous Baka and Bantu communities in Southeast Cameroon, evaluating sustainable livelihood impacts, non-timber forest products, and participatory conservation policy.",
    highlights: [
      "Rigorous field research across Southeast Cameroon rainforest ecosystems",
      "Analysis of socio-ecological benefits and indigenous resource stewardship",
      "Evidence-led frameworks for community-based sustainability policy",
    ],
  },
  {
    id: "forest-management-congo-basin-2023",
    title:
      "Local people’s participation in forest management in the Congo Basin: A review and evaluation",
    authors: "Omam, M.M.C., & Yasuoka, H.",
    year: 2023,
    journal: "African Study Monographs",
    volume: "Supplementary Issue 61, pp. 43–64",
    doi: "https://doi.org/10.14989/286826",
    url: "https://doi.org/10.14989/286826",
    category: "Participatory Resource Management",
    abstractSummary:
      "A comprehensive review and critical evaluation of participatory forest management frameworks throughout the Congo Basin, identifying governance bottlenecks and pathways for equitable local community engagement in environmental stewardship.",
    highlights: [
      "Pan-regional evaluation across Congo Basin forestry regimes",
      "Institutional analysis of community empowerment & benefit sharing",
      "Foundational insights for human-centred environmental governance",
    ],
  },
  {
    id: "potability-sachet-water-cameroon-2015",
    title:
      "An assessment of the potability of some sachet water brands sold in Cameroon",
    authors: "Masse Ma, C.O., & Ayonghe, S.N.",
    year: 2015,
    journal: "Journal of the Cameroon Academy of Sciences",
    volume: "Volume 12(3), pp. 163–175",
    url: "https://www.ajol.info/index.php/jcas",
    category: "Environmental Health & Water Quality",
    abstractSummary:
      "A scientific assessment investigating the physicochemical and bacteriological parameters of packaged commercial sachet drinking water brands in Cameroon benchmarked against World Health Organization (WHO) safety guidelines.",
    highlights: [
      "Laboratory analysis comparing physical, chemical, and microbial metrics",
      "Benchmarked directly against World Health Organization (WHO) baselines",
      "Applied environmental science addressing public health and quality assurance",
    ],
  },
];
