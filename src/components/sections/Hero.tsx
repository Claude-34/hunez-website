import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FieldDiapoSlider } from "@/components/ui/FieldDiapoSlider";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-offwhite">
      {/* Accessible SEO Heading */}
      <h1 className="sr-only">Practical Net Zero Solutions for SMEs</h1>

      {/* Enlarged End-to-End Full-Bleed Video / Diapo Slider */}
      <div className="relative w-full overflow-hidden">
        <FieldDiapoSlider
          fullWidth
          width="100%"
          className="w-full h-[440px] sm:h-[540px] md:h-[640px] lg:h-[720px] xl:h-[780px]"
        />

        {/* Subtle Bottom Fade Gradient for Seamless Contrast */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-offwhite via-offwhite/50 to-transparent z-20" />
      </div>

      {/* Action Buttons & Conversion Strip */}
      <div className="relative z-20 w-full py-6 sm:py-8 bg-offwhite border-b border-forest/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" className="w-full sm:w-auto shadow-lg hover:shadow-glow transition-all">
            {siteConfig.ctas.primary}
          </Button>
          <Button
            href="/contact?intent=consultation"
            variant="outline"
            className="w-full sm:w-auto border-forest/30 hover:bg-forest/5"
          >
            {siteConfig.ctas.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
