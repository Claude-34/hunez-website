import Image from "next/image";
import { aboutContent } from "@/data/about";
import { CTABanner } from "@/components/ui/CTABanner";
import { MethodologySteps } from "@/components/ui/MethodologySteps";
import { PartnersSection } from "@/components/sections/PartnersSection";
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
      <SectionWrapper className="pt-16 md:pt-24 pb-14">
        {/* Header Kicker & Title */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            About HUNEZ
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest tracking-tight leading-tight">
            {aboutContent.heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-charcoal/80 max-w-3xl leading-relaxed">
            Science-led, people-centred sustainability solutions translating complex carbon reduction and environmental governance into practical commercial action for SMEs globally.
          </p>
        </div>

        {/* Vision & Mission (First, Executive Editorial Layout without Boxes) */}
        <div className="mt-12 pt-10 border-t border-forest/15 grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div className="relative pl-6 sm:pl-7 border-l-2 border-forest">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-forest" />
              <span className="text-xs font-bold uppercase tracking-widest text-forest">
                Our Vision
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-forest leading-snug tracking-tight">
              &ldquo;{aboutContent.vision}&rdquo;
            </p>
            <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70">
              Guiding our global decarbonisation roadmaps and client partnerships.
            </p>
          </div>

          {/* Mission */}
          <div className="relative pl-6 sm:pl-7 border-l-2 border-warm">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-warm" />
              <span className="text-xs font-bold uppercase tracking-widest text-warm">
                Our Mission
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-forest leading-snug tracking-tight">
              &ldquo;{aboutContent.mission}&rdquo;
            </p>
            <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70">
              Delivering accessible, verified sustainability consultancy without greenwashing.
            </p>
          </div>
        </div>

        {/* Company Narrative & Interdisciplinary Approach */}
        <div className="mt-14 pt-12 border-t border-forest/15">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Column: Heading, Lead & Positioning */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-warm block">
                Our Foundation &amp; Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight leading-tight">
                Grounded in Science. Driven by Human Behaviour.
              </h2>
              <p className="text-base sm:text-lg font-medium text-forest/90 leading-relaxed">
                {aboutContent.intro[0]}
              </p>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-forest">
                <span className="px-3 py-1.5 rounded-full bg-forest/5 border border-forest/15">
                  Global Reach: Africa &amp; Europe
                </span>
                <span className="px-3 py-1.5 rounded-full bg-forest/5 border border-forest/15">
                  GHG Protocol Aligned
                </span>
                <span className="px-3 py-1.5 rounded-full bg-forest/5 border border-forest/15">
                  Academic Rigor
                </span>
              </div>
            </div>

            {/* Right Column: In-Depth Narrative with Editorial Pull-Quote */}
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-charcoal/85 leading-relaxed">
              <p>{aboutContent.intro[1]}</p>
              <p>{aboutContent.intro[2]}</p>

              {/* Editorial Pull Quote */}
              <blockquote className="my-6 pl-5 border-l-3 border-forest/40 bg-forest/5 py-4 pr-4 rounded-r-xl">
                <p className="text-base sm:text-lg italic font-medium text-forest leading-relaxed">
                  &ldquo;Environmental challenges cannot be separated from the people, communities and institutions that shape them.&rdquo;
                </p>
                <cite className="mt-2 block text-xs not-italic font-bold uppercase tracking-wider text-warm">
                  — The HUNEZ Foundation Principle
                </cite>
              </blockquote>

              <p>{aboutContent.intro[3]}</p>
            </div>
          </div>
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

      {/* Academic & Research Partners Section */}
      <PartnersSection />

      <CTABanner />
    </>
  );
}
