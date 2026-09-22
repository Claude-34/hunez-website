import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "dark";
}

const variants = {
  default: "bg-cream",
  muted: "bg-sage",
  dark: "bg-forest text-white",
};

export function SectionWrapper({
  children,
  className,
  id,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", variants[variant], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
