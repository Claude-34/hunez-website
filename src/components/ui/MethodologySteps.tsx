interface Step {
  number: string;
  title: string;
  description: string;
}

interface MethodologyStepsProps {
  steps: Step[];
  closing?: string;
}

export function MethodologySteps({ steps, closing }: MethodologyStepsProps) {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className="relative rounded-lg border border-olive/20 bg-white p-6 shadow-sm"
          >
            <span className="text-3xl font-bold text-olive/30">{step.number}</span>
            <h3 className="mt-2 text-lg font-semibold text-forest">{step.title}</h3>
            <p className="mt-2 text-sm text-charcoal/80">{step.description}</p>
            {index < steps.length - 1 && (
              <span className="absolute -bottom-3 left-1/2 hidden -translate-x-1/2 text-olive lg:block">
                ↓
              </span>
            )}
          </article>
        ))}
      </div>
      {closing && (
        <p className="mt-10 text-center text-lg font-medium text-forest">
          {closing}
        </p>
      )}
    </div>
  );
}
