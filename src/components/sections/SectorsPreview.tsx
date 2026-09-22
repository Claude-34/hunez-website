import Link from "next/link";
import { sectors } from "@/data/sectors";
import { SectorCard } from "@/components/ui/SectorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function SectorsPreview() {
  return (
    <SectionWrapper id="sectors" className="py-24 bg-sage">
      <SectionHeading
        title="Industries Served — Tailored SME Solutions"
        subtitle="Every sector faces unique operational realities. We tailor sustainability strategies to match specific sector challenges, regulatory frameworks, and commercial priorities."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => (
          <SectorCard key={sector.slug} sector={sector} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/who-we-help"
          className="inline-flex items-center gap-2 text-sm font-bold text-warm hover:text-warm-light transition-colors px-6 py-3 rounded-full border border-warm/30 bg-warm/5 hover:bg-warm/10"
        >
          Explore all UK SME sectors we support →
        </Link>
      </div>
    </SectionWrapper>
  );
}
