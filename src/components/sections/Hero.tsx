import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FieldDiapoSlider } from "@/components/ui/FieldDiapoSlider";

export function Hero() {
  return (
    <SectionWrapper className="relative overflow-hidden pt-8 pb-12 md:pt-10 md:pb-16 bg-offwhite">
      {/* Soft Eco Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/green-vegetation-bg.jpg"
          alt="Lush green vegetation background"
          fill
          priority
          className="object-cover object-center filter saturate-125 brightness-90 opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-offwhite/95 to-offwhite" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Accessible SEO Heading */}
        <h1 className="sr-only">Practical Net Zero Solutions for SMEs</h1>

        {/* Kyoto-Style Diapo Animated Field Slideshow with explicit Length (Height) and Width */}
        <div className="mx-auto w-full max-w-[1000px]">
          <FieldDiapoSlider
            width="100%"
            height="380px"
            className="shadow-2xl border-4 border-white/95"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </SectionWrapper>
  );
}
