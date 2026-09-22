import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "warm";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-forest via-forest to-forest-light text-white shadow-md shadow-forest/20 hover:shadow-xl hover:shadow-forest/30 hover:brightness-110",
  secondary:
    "bg-gradient-to-r from-olive via-olive to-olive-light text-white shadow-md shadow-olive/20 hover:shadow-xl hover:shadow-olive/30 hover:brightness-110",
  outline:
    "border-2 border-forest text-forest bg-white/70 backdrop-blur-xs hover:bg-forest hover:text-white shadow-xs hover:shadow-lg hover:shadow-forest/25",
  warm: "bg-gradient-to-r from-warm via-warm to-warm-light text-white shadow-md shadow-warm/25 hover:shadow-xl hover:shadow-warm/35 hover:brightness-110",
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/30 disabled:cursor-not-allowed disabled:opacity-50 select-none",
    variants[variant],
    className
  );

  const innerContent = (
    <>
      {/* Animated Light Shimmer Sweep Effect */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {innerContent}
    </button>
  );
}
