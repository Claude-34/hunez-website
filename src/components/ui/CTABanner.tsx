import { siteConfig } from "@/data/site";
import { Button } from "./Button";
import { SectionWrapper } from "./SectionWrapper";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready to start your sustainability journey?",
  subtitle = siteConfig.differentiator,
}: CTABannerProps) {
  return (
    <SectionWrapper variant="dark">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-white/90">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="warm">
            {siteConfig.ctas.primary}
          </Button>
          <Button
            href="/contact?intent=consultation"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-forest"
          >
            {siteConfig.ctas.secondary}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
