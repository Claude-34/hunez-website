import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";
import { publications } from "@/data/publications";

export const metadata = createPageMetadata({
  title:
    "Scientific Contributions & Publications | Human-Centred Net Zero",
  description:
    "Explore peer-reviewed scientific publications and academic research contributions bridging environmental science, ecological anthropology, and SME net zero action.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      {/* Header Section */}
      <SectionWrapper className="pt-16 md:pt-24 pb-14 bg-cream border-b border-olive/15">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            Academic &amp; Scientific Contributions
          </span>
          <SectionHeading
            title="Scientific Contributions & Publications"
            subtitle="Grounding SME sustainability solutions in peer-reviewed environmental science, ecological anthropology, and participatory natural resource governance."
            align="center"
          />
        </div>
      </SectionWrapper>

      {/* Scientific Publications Section */}
      <SectionWrapper className="py-12 md:py-16 bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-warm mb-1.5 block">
                Academic Contributions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
                Scientific Publications
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-charcoal/80 max-w-xl">
                Foundational peer-reviewed research by HUNEZ leadership examining community-led forest governance, hydrology, flood disaster risk reduction, sediment plastic debris, and environmental standards.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href="https://scholar.google.com/citations?user=UwqPhREAAAAJ&hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest bg-forest/10 hover:bg-forest hover:text-white px-3 py-1.5 rounded-full border border-forest/20 transition-all shadow-2xs"
                title="View Dr. Desmond Ndre Shiwomeh on Google Scholar"
              >
                <span>Google Scholar</span>
                <span className="text-xs">↗</span>
              </a>
              <div className="text-xs font-semibold text-charcoal/60 bg-white px-3 py-1.5 rounded-full border border-olive/15 shadow-2xs">
                {publications.length} Published Papers
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {publications.map((paper) => (
              <article
                key={paper.id}
                className="group rounded-xl border border-olive/20 bg-white p-4 sm:p-4.5 shadow-2xs hover:shadow-sm hover:border-forest/40 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-forest leading-snug">
                      {paper.url ? (
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-forest-light transition-colors"
                        >
                          {paper.title}
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h3>
                    <p className="text-xs text-charcoal/80">
                      <span className="font-semibold text-forest/90">Authors:</span> {paper.authors}
                    </p>
                    <p className="text-xs text-charcoal/70">
                      <span className="font-semibold text-forest/90">Published in:</span>{" "}
                      <span className="italic">{paper.journal}</span> ({paper.year}), {paper.volume}
                    </p>
                  </div>

                  {paper.url && (
                    <div className="flex-shrink-0 pt-1 sm:pt-0">
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-forest bg-forest/5 border border-forest/20 hover:bg-forest hover:text-white transition-all group/btn"
                        aria-label={`See full story for ${paper.title}`}
                      >
                        <span>See full story</span>
                        <span className="text-sm transition-transform group-hover/btn:translate-x-1">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Research to Practice Bridge Banner */}
          <div className="mt-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-forest via-forest to-forest-light text-white p-6 sm:p-10 shadow-lg border border-white/10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-warm-light mb-3">
                🔬 From Scientific Rigour to SME Practice
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                How Our Research Shapes Practical Business Solutions
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-offwhite/90 leading-relaxed font-normal">
                Academic research in ecological anthropology and environmental public health demonstrates that sustainable practices only succeed when they respect human realities, local community incentives, and participatory engagement. At HUNEZ, we translate these insights into pragmatic decarbonisation roadmaps, audit protocols, and employee behaviour-change frameworks for businesses.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
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
          <div className="mt-10 rounded-2xl border border-olive/20 bg-white p-6 sm:p-8 shadow-xs text-center">
            <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold text-xl mx-auto mb-3">
              🌱
            </div>
            <h3 className="text-xl font-bold text-forest">SME Sustainability Knowledge Hub</h3>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-xl mx-auto">
              In addition to academic publications, our team is preparing practical briefing notes, sector guides, and carbon readiness toolkits tailored specifically for SMEs navigating net zero transitions.
            </p>
            <div className="mt-5">
              <Link
                href="/contact?intent=consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-forest text-white hover:bg-forest-light transition-all shadow-sm hover:scale-105"
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
