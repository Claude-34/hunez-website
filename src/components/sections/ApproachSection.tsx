import { approachCards } from "@/data/about";
import { ApproachCard } from "@/components/ui/ApproachCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ApproachSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="A different approach to sustainability"
        subtitle="We believe successful sustainability is not only about technology, targets and carbon calculations. It is also about people, behaviour, culture and decision-making. Our approach combines environmental science with insights from ecological anthropology, community-based resource management and behavioural change."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {approachCards.map((card) => (
          <ApproachCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
