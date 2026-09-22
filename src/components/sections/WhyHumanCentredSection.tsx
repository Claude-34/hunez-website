import Image from "next/image";
import { whyHumanCentred } from "@/data/about";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function WhyHumanCentredSection() {
  return (
    <SectionWrapper variant="dark" className="relative overflow-hidden py-24">
      {/* Deep Green Vegetation Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/green-vegetation-bg.jpg"
          alt="Lush green rainforest vegetation background"
          fill
          className="object-cover object-center filter saturate-150 brightness-75 opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/85" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          title={whyHumanCentred.heading}
          subtitle={whyHumanCentred.intro}
          light
        />
        <div className="max-w-3xl space-y-4 text-white/90">
          {whyHumanCentred.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed">{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {whyHumanCentred.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-warm-light">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>

        <blockquote className="mt-10 border-l-4 border-warm pl-6 text-lg italic text-white/95 bg-white/5 backdrop-blur-sm p-4 rounded-r-2xl">
          {siteConfig.differentiator}
        </blockquote>
        <p className="mt-6 text-white/90 font-medium">{whyHumanCentred.closing}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {siteConfig.positioningTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
