import Image from "next/image";
import { aboutContent } from "@/data/about";
import { CTABanner } from "@/components/ui/CTABanner";
import { MethodologySteps } from "@/components/ui/MethodologySteps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Human-Centred Net Zero & Sustainability Solutions",
  path: "/about",
});

export default function AboutPage() {
  const { founders, methodology } = aboutContent;

  return (
    <>
      <SectionWrapper className="pt-16 md:pt-24">
        <SectionHeading title={aboutContent.heading} />
        {/* Justified Visual Blocks */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {aboutContent.introBlocks.map((block, idx) => (
            <article
              key={block.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-olive/20 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-forest/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {block.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-warm px-3.5 py-1 rounded-full bg-warm/10">
                    {block.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-forest mb-2">
                  {block.title}
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed text-justify">
                  {block.text}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-olive/10 flex items-center justify-between text-xs font-bold text-forest">
                <span>Foundation Pillar 0{idx + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform text-warm">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-forest/20 bg-white p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-forest">Our mission</h3>
            <p className="mt-3 text-charcoal/80 leading-relaxed">{aboutContent.mission}</p>
          </article>
          <article className="rounded-3xl border border-olive/20 bg-white p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-olive/15 flex items-center justify-center text-olive mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-forest">Our vision</h3>
            <p className="mt-3 text-charcoal/80 leading-relaxed">{aboutContent.vision}</p>
          </article>
        </div>
      </SectionWrapper>

      {/* Team Section with Circular Portraits */}
      <SectionWrapper variant="muted" id="team" className="py-20">
        <SectionHeading title={founders.heading} subtitle={founders.roles} align="center" />

        <div className="mb-14 mt-10 grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
          {founders.people.map((person) => (
            <figure
              key={person.name}
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-olive/20 bg-white shadow-lg transition-transform hover:scale-105"
            >
              {/* Circular Portrait with Gradient Ring Accent */}
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-forest/20">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
              <figcaption className="mt-6">
                <h4 className="text-xl font-bold text-forest">{person.name}</h4>
                <p className="mt-1 text-sm font-semibold text-warm">Founder & Director</p>
                <p className="mt-2 text-xs text-charcoal/70 max-w-xs">
                  Environmental Scientist & Sustainability Researcher
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-offwhite p-8 border border-olive/20 shadow-sm space-y-4 text-charcoal/80">
          <h3 className="text-2xl font-bold text-forest">{founders.names}</h3>
          {founders.bio.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-4">
            {founders.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-forest/10 px-3.5 py-1.5 text-xs font-semibold text-forest border border-forest/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20">
        <SectionHeading title={methodology.heading} align="center" />
        <MethodologySteps
          steps={methodology.steps}
          closing={methodology.closing}
        />
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
