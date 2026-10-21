import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";
import { publications } from "@/data/publications";

export const metadata = createPageMetadata({
  title: "Insights & Scientific Publications | Human-Centred Net Zero",
  description:
    "Explore peer-reviewed scientific publications and practical sustainability perspectives bridging academic environmental science, ecological anthropology, and SME net zero action.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      {/* Header Section */}
      <SectionWrapper className="pt-16 md:pt-24 pb-16 bg-cream border-b border-olive/15">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            Evidence-Led Sustainability
          </span>
          <SectionHeading
            title="Insights & Research Publications"
            subtitle="Grounding SME sustainability solutions in peer-reviewed environmental science, ecological anthropology, and participatory natural resource governance."
            align="center"
          />
        </div>
      </SectionWrapper>

      {/* Peer-Reviewed Publications Section */}
      <SectionWrapper className="py-20 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-warm mb-2 block">
                Academic Contributions
              </span>
              <h2 className="text-3xl font-extrabold text-forest tracking-tight">
                Peer-Reviewed Publications
              </h2>
              <p className="mt-2 text-base text-charcoal/80 max-w-2xl">
                Foundational research by HUNEZ leadership examining community-led forest management, sustainable livelihoods, and environmental safety standards.
              </p>
            </div>
            <div className="text-xs font-semibold text-charcoal/60 bg-white px-4 py-2 rounded-full border border-olive/15 w-fit shadow-xs">
              3 Published Research Papers
            </div>
          </div>

          <div className="grid gap-8 lg:gap-10">
            {publications.map((paper) => (
              <article
                key={paper.id}
                className="group relative rounded-[2rem] border border-olive/20 bg-white p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-forest/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  {/* Category & Year Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3.5 py-1 text-xs font-bold text-forest">
                      <span>📚</span>
                      <span>{paper.category}</span>
                    </span>
                    <span className="rounded-full bg-warm/15 px-3 py-1 text-xs font-bold text-warm">
                      {paper.year}
                    </span>
                  </div>

                  {/* Title & Authors */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-forest leading-snug group-hover:text-forest-light transition-colors">
                      {paper.url ? (
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 rounded-sm"
                        >
                          {paper.title}
                          <span className="inline-block ml-2 text-warm text-lg font-normal">↗</span>
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h3>
                    <p className="mt-2.5 text-sm font-semibold text-charcoal/80">
                      <span className="text-forest/70 font-bold">Authors: </span>
                      {paper.authors}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-charcoal/70 italic">
                      <span className="font-semibold text-forest/80 not-italic">Published in: </span>
                      {paper.journal}, {paper.volume}
                    </p>
                  </div>

                  {/* Abstract Summary */}
                  <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                    {paper.abstractSummary}
                  </p>

                  {/* Key Highlights */}
                  {paper.highlights && paper.highlights.length > 0 && (
                    <div className="pt-3 border-t border-olive/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-forest/70 mb-2 block">
                        Key Research Focus
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-charcoal/80">
                        {paper.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Link & Citation Info */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-olive/10 text-xs">
                    <div className="text-charcoal/60 font-medium">
                      {paper.doi ? (
                        <span className="font-mono text-[11px] bg-offwhite px-2.5 py-1 rounded-md border border-olive/10">
                          DOI: {paper.doi.replace("https://doi.org/", "")}
                        </span>
                      ) : (
                        <span className="italic">Peer-Reviewed Journal Article</span>
                      )}
                    </div>

                    {paper.url && (
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-forest hover:text-warm transition-colors"
                      >
                        <span>Access Original Publication</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Research to Practice Bridge Banner */}
          <div className="mt-16 rounded-[2.5rem] bg-gradient-to-br from-forest via-forest to-forest-light text-white p-8 sm:p-12 shadow-xl border border-white/10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold text-warm-light mb-4">
                🔬 From Scientific Rigour to SME Practice
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                How Our Research Shapes Practical Business Solutions
              </h3>
              <p className="mt-4 text-sm sm:text-base text-offwhite/90 leading-relaxed font-normal">
                Academic research in ecological anthropology and environmental public health demonstrates that sustainable practices only succeed when they respect human realities, local community incentives, and participatory engagement. At HUNEZ, we translate these insights into pragmatic decarbonisation roadmaps, audit protocols, and employee behaviour-change frameworks for businesses.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/services" variant="warm">
                  Explore Our SME Services
                </Button>
                <Button href="/about" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Read Founder Biography
                </Button>
              </div>
            </div>
          </div>

          {/* SME Sustainability Knowledge Hub - Upcoming Briefings */}
          <div className="mt-16 rounded-[2rem] border border-olive/20 bg-white p-8 sm:p-10 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold text-2xl mx-auto mb-4">
              🌱
            </div>
            <h3 className="text-2xl font-bold text-forest">SME Sustainability Knowledge Hub</h3>
            <p className="mt-3 text-sm text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              In addition to academic publications, our team is preparing practical briefing notes, sector guides, and carbon readiness toolkits tailored specifically for SMEs navigating net zero transitions.
            </p>
            <div className="mt-6">
              <Link
                href="/contact?intent=consultation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-forest text-white hover:bg-forest-light transition-all shadow-md hover:scale-105"
              >
                <span>Discuss Your Sustainability Project with Our Team</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
