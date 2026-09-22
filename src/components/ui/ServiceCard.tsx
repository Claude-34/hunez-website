import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
  layout?: "card" | "row";
  imagePosition?: "left" | "right";
  imageSrc?: string;
}

export function ServiceCard({
  service,
  showLearnMore = true,
  layout = "card",
  imagePosition = "left",
  imageSrc,
}: ServiceCardProps) {
  if (layout === "row") {
    const isImageLeft = imagePosition === "left";

    return (
      <article
        id={service.slug}
        className="group relative overflow-hidden rounded-[2.5rem] border border-olive/20 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-olive/40"
      >
        <div className="grid gap-8 items-center lg:grid-cols-12">
          {/* Image Block */}
          <div
            className={cn(
              "relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-olive/10 shadow-md lg:col-span-5",
              isImageLeft ? "lg:order-1" : "lg:order-2"
            )}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-forest/15 to-olive/20 p-6 text-center">
                <span className="text-sm font-semibold text-forest/70">{service.title}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Content Block */}
          <div
            className={cn(
              "flex flex-col justify-center lg:col-span-7",
              isImageLeft ? "lg:order-2" : "lg:order-1"
            )}
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest mb-3">
              <span>SME Service Spotlight</span>
            </div>
            <h3 className="text-2xl font-bold text-forest group-hover:text-olive transition-colors">
              {service.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-charcoal/80 font-medium">
              {service.summary}
            </p>
            <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
              {service.description}
            </p>

            {service.bullets && (
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-charcoal/80">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-warm flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {showLearnMore && (
              <div className="mt-6">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-warm hover:text-warm-light transition-colors"
                >
                  Explore Service Details →
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={service.slug}
      className="flex h-full flex-col rounded-[2rem] border border-olive/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-olive/40"
    >
      <h3 className="text-xl font-semibold text-forest">{service.title}</h3>
      <p className="mt-3 text-charcoal/80 font-medium">{service.summary}</p>
      <p className="mt-2 flex-grow text-sm text-charcoal/70">{service.description}</p>
      {service.bullets && (
        <ul className="mt-4 space-y-1.5 text-sm text-charcoal/70">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-olive" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {showLearnMore && (
        <Link
          href={`/services#${service.slug}`}
          className="mt-6 text-sm font-semibold text-warm hover:text-warm-light"
        >
          Learn More →
        </Link>
      )}
    </article>
  );
}
