import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" variant="dark" className="relative py-24 bg-forest text-white overflow-hidden">
      {/* Soft background foliage overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/green-vegetation-bg.jpg"
          alt="Green leaves background"
          fill
          className="object-cover object-center opacity-20 filter contrast-125 brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/90" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear directly from SME directors, operations managers, and facility leaders who have partnered with HUNEZ."
          align="center"
          light
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              {/* Speech Bubble Card */}
              <div className="relative flex-grow rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl">
                {/* Quote Icon Accent */}
                <div className="text-warm-light text-4xl leading-none font-serif select-none mb-2">
                  “
                </div>
                <p className="text-sm italic leading-relaxed text-white/90">
                  {t.quote}
                </p>
                {/* Rating Stars */}
                <div className="mt-4 flex gap-1 text-warm-light">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>

              {/* Circular Portrait Avatar & Author Info */}
              <div className="mt-6 flex items-center gap-4 pl-2">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white ring-4 ring-white/20 flex-shrink-0 bg-white/10 shadow-lg">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{t.name}</h4>
                  <p className="text-xs font-semibold text-warm-light">{t.role}</p>
                  <p className="text-xs text-white/70">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
