import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Hero() {
  return (
    <SectionWrapper className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28 bg-offwhite">
      {/* Balanced Lush Green Vegetation Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/green-vegetation-bg.jpg"
          alt="Lush green vegetation background"
          fill
          priority
          className="object-cover object-center filter saturate-125 brightness-90 opacity-25"
          sizes="100vw"
        />
        {/* Sleek Gradient Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-offwhite via-offwhite/90 to-offwhite/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/10 via-transparent to-offwhite" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 relative z-10">
        {/* Executive Text & Action Block */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-[2.5rem] border border-forest/15 shadow-executive transition-all duration-500 hover:border-forest/30">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            {siteConfig.positioning}
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight text-forest md:text-5xl lg:text-6xl tracking-tight">
            Practical Net Zero Solutions for UK SMEs
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-charcoal/90 font-medium">
            Helping small and medium-sized businesses measure their environmental
            impact, reduce carbon emissions, and build practical, commercially
            realistic sustainability strategies centered around real people.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" className="shadow-lg hover:shadow-glow transition-all">
              {siteConfig.ctas.primary}
            </Button>
            <Button href="/contact?intent=consultation" variant="outline" className="border-forest/30 hover:bg-forest/5">
              {siteConfig.ctas.secondary}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-forest pt-6 border-t border-forest/10">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-forest text-white flex items-center justify-center font-bold text-xs shadow">
                M
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-olive text-white flex items-center justify-center font-bold text-xs shadow">
                D
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-warm text-white flex items-center justify-center font-bold text-xs shadow">
                +
              </div>
            </div>
            <span>{siteConfig.trustLine}</span>
          </div>
        </div>

        {/* Hero Curved Image Container with Depth Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Outer Decorative Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/hero-sustainability.png"
                  alt="HUNEZ sustainability consultants working with UK SME client"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Overlapping Cut-Out Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-olive/20 shadow-xl flex items-center gap-3.5 max-w-xs transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Science & People-Led</p>
                <p className="text-sm font-bold text-forest">100% SME Focused</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
