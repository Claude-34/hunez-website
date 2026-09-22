import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProblemSection() {
  return (
    <SectionWrapper variant="muted">
      <SectionHeading
        title="Sustainability doesn't have to be complicated."
        subtitle="For many SMEs, the journey towards net zero can feel overwhelming."
      />
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-charcoal/80">
        <p>
          Where do you start? What should you measure? Which emissions matter
          most? How much will it cost? And how can sustainability become part of
          everyday business rather than another administrative burden?
        </p>
        <p>
          {siteConfig.name} helps you answer these questions.
        </p>
        <p>
          We translate environmental science, carbon management and
          sustainability principles into practical actions that work for real
          businesses and real people.
        </p>
      </div>
    </SectionWrapper>
  );
}
