export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  description: string;
  blobVariant: "blob-shape-1" | "blob-shape-2" | "blob-shape-3";
  colorClass: string;
}

export const impactStats: ImpactStat[] = [
  {
    id: "s1",
    value: "30%+",
    label: "Average Carbon Saved",
    description: "Achieved by SME clients within their first 12 months of tailored strategy",
    blobVariant: "blob-shape-1",
    colorClass: "bg-forest/15 text-forest border-forest/20",
  },
  {
    id: "s2",
    value: "£9,200",
    label: "Avg Annual Energy Reduction",
    description: "Commercially realistic savings returned directly to client bottom line",
    blobVariant: "blob-shape-2",
    colorClass: "bg-olive/15 text-olive border-olive/30",
  },
  {
    id: "s3",
    value: "100%",
    label: "Human-Centred & Science-Led",
    description: "Grounded in environmental science and real workforce participation",
    blobVariant: "blob-shape-3",
    colorClass: "bg-warm/15 text-warm border-warm/30",
  },
];
