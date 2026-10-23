import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProblemSection() {
  return (
    <SectionWrapper id="approach" className="py-20 md:py-24 bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Visual with Field Photo 2 */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-white">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/field/community-dialogue.jpg"
                    alt="Dr. Caliste Omam leading community consultation and participatory sustainability dialogue"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-olive/20 shadow-lg max-w-xs">
                <p className="text-xs font-bold text-warm uppercase tracking-wider">Human-Centred Research</p>
                <p className="text-sm font-bold text-forest">Led by Dr. Caliste Omam</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Value Proposition */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-4">
              The Human-Centred Difference
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight leading-tight">
              Sustainability Starts with People, Not Just Spreadsheets
            </h2>

            <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-medium">
              For many SMEs, the journey towards net zero feels overwhelming. Carbon accounting software measures emissions, but software alone cannot change how employees operate, how suppliers engage, or how leaders make decisions.
            </p>

            <p className="mt-4 text-sm sm:text-base text-charcoal/75 leading-relaxed">
              {siteConfig.name} bridges this gap. We translate peer-reviewed environmental science and ecological anthropology into commercially realistic action plans tailored to your budget, your culture, and your real people.
            </p>

            <ul className="mt-8 space-y-3.5">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm font-semibold text-charcoal/90">
                  <strong>Zero administrative overburden:</strong> Simple, phased milestones that integrate smoothly into everyday operations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm font-semibold text-charcoal/90">
                  <strong>Genuine employee buy-in:</strong> Behaviour-change routines that turn sustainability into a shared company culture.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm font-semibold text-charcoal/90">
                  <strong>Credible verification:</strong> Aligned with GHG Protocol and ISO standards with zero greenwashing risk.
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-olive/15 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-warm transition-colors"
              >
                <span>Read About Our Scientific Approach</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
