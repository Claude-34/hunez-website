interface ApproachCardProps {
  title: string;
  description: string;
}

export function ApproachCard({ title, description }: ApproachCardProps) {
  return (
    <article className="rounded-lg border border-olive/20 bg-white p-8 text-center shadow-sm">
      <h3 className="text-lg font-bold tracking-wide text-forest">{title}</h3>
      <p className="mt-4 text-charcoal/80">{description}</p>
    </article>
  );
}
