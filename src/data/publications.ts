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
    id: "machine-learning-sediment-plastic-2025",
    title:
      "Machine learning-supported quantification and characterization of sediment plastic debris in an Anthropized Mfoundi River in Cameroon: Implications for the incidence of flood events",
    authors:
      "Shiwomeh, D.N., Kantoush, S.A., Saber, M., Sumi, T., Fantong, W.Y., Nguyen, B.Q., et al.",
    year: 2025,
    journal: "Science of The Total Environment",
    volume: "Volume 980, 179529",
    doi: "https://doi.org/10.1016/j.scitotenv.2025.179529",
    url: "https://doi.org/10.1016/j.scitotenv.2025.179529",
    category: "Urban Hydrology & Flood Risk Management",
    abstractSummary:
      "Applies machine learning models to quantify and characterise sediment plastic debris across urban river catchments in Cameroon, evaluating how anthropogenic waste accumulation impacts hydraulic channel conveyance and flood incidence.",
    highlights: [
      "Machine learning-assisted quantification of riverine sediment plastic debris",
      "Empirical field assessment across anthropized urban river catchments",
      "Direct implications for flood disaster prevention and municipal waste infrastructure",
    ],
  },
  {
    id: "xgboost-memetic-sediment-pollution-2025",
    title:
      "Using XGBoost and memetic programming to identify hotspots of sediment plastic pollution",
    authors:
      "Shiwomeh, D.N., Kantoush, S.A., Saber, M., Sumi, T., Fantong, W.Y., Nguyen, B.Q., et al.",
    year: 2025,
    journal: "Environmental Pollution",
    volume: "Volume 387, 127329",
    doi: "https://doi.org/10.1016/j.envpol.2025.127329",
    url: "https://doi.org/10.1016/j.envpol.2025.127329",
    category: "Machine Learning & Environmental Pollution",
    abstractSummary:
      "Evaluates Extreme Gradient Boosting (XGBoost) and memetic evolutionary programming to accurately classify, predict, and spatialise sediment macroplastic debris hotspots across complex urban watersheds.",
    highlights: [
      "Advanced evolutionary algorithm modelling for environmental pollution hotspots",
      "Comparative validation between XGBoost and memetic programming",
      "Spatial risk forecasting tools for sustainable municipal resource management",
    ],
  },
  {
    id: "quantifying-sediment-plastic-debris-2025",
    title:
      "Quantifying sediment plastic debris: production, transport mechanisms, and spatial relationship with floods in the urban slums of Yaounde-Cameroon",
    authors:
      "Shiwomeh, D.N., Kantoush, S.A., Sumi, T., Nguyen, B.Q., & Abdrabo, K.I.",
    year: 2025,
    journal: "Journal of JSCE",
    volume: "Volume 13(2), 24-16089",
    doi: "https://doi.org/10.2208/journalofjsce.24-16089",
    url: "https://doi.org/10.2208/journalofjsce.24-16089",
    category: "Sediment Dynamics & Urban Drainage",
    abstractSummary:
      "Investigates production, riverine transport dynamics, and hydrodynamic obstruction caused by sediment plastic debris in vulnerable urban slum floodplains.",
    highlights: [
      "Field quantification of plastic-sediment interaction in drainage waterways",
      "Hydrodynamic modelling demonstrating channel clogging effects on flood waves",
      "Empirical frameworks for circular waste recovery and urban drainage mitigation",
    ],
  },
  {
    id: "risk-microplastic-contamination-2025",
    title:
      "Evaluating the Risk of Microplastic Contamination of Water Resources: Case of Mfoundi Subbasin-Cameroon",
    authors:
      "Shiwomeh, D.N., Kantoush, S.A., Sumi, T., Nguyen, B.Q., & Takem, A.",
    year: 2025,
    journal: "Proceedings of the 41st IAHR World Congress",
    volume: "Innovative Water Engineering for Sustainable Development",
    url: "https://scholar.google.com/citations?user=UwqPhREAAAAJ&hl=ja",
    category: "Water Resources & Contamination Risk",
    abstractSummary:
      "Assesses microplastic distribution in surface waters and sediments, identifying ecological pathways and public health vulnerability baselines.",
    highlights: [
      "Microplastic contamination risk profiling in urban drainage subbasins",
      "Empirical water resources quality and sediment interaction analysis",
      "Presented at the International Association for Hydro-Environment Engineering and Research",
    ],
  },
  {
    id: "flood-vulnerability-slums-yaounde-2024",
    title:
      "Holistic mapping of flood vulnerability in slums areas of Yaounde city, Cameroon through household and institutional surveys",
    authors:
      "Shiwomeh, D.N., Kantoush, S.A., Sumi, T., Nguyen, B.Q., & Abdrabo, K.I.",
    year: 2024,
    journal: "International Journal of Disaster Risk Reduction",
    volume: "Volume 114, 104947",
    doi: "https://doi.org/10.1016/j.ijdrr.2024.104947",
    url: "https://doi.org/10.1016/j.ijdrr.2024.104947",
    category: "Disaster Risk Reduction & Vulnerability Mapping",
    abstractSummary:
      "Integrates multi-criteria household and institutional field surveys to develop a holistic spatial vulnerability index for informal settlement communities subject to recurrent urban flooding.",
    highlights: [
      "Comprehensive household and stakeholder empirical vulnerability mapping",
      "Social-institutional indices benchmarked against physical flood risk models",
      "Actionable recommendations for participatory urban resilience planning",
    ],
  },
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
