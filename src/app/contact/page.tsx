import { Suspense } from "react";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact a UK Net Zero & Sustainability Consultant",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SectionWrapper className="pt-16 md:pt-24 pb-24">
      {/* Centered Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-4 border border-forest/20">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          Direct SME Consultation
        </span>
        <SectionHeading
          title="Let's Start Your Sustainability Journey"
          subtitle="Whether you're taking your first steps towards net zero or looking to strengthen an existing sustainability strategy, we'd be happy to discuss your organisation's needs."
          align="center"
        />
      </div>

      {/* Centralized Prominent Team Banner Image */}
      <div className="mt-10 max-w-3xl mx-auto relative">
        <div className="relative aspect-[21/9] sm:aspect-[2/1] w-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-executive bg-white group">
          <Image
            src="/images/contact-team.jpg"
            alt="HUNEZ sustainability team collaborating with UK SME client"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold text-sm shadow">
                H
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Human-Centred Experts</p>
                <p className="text-sm font-bold text-forest">Dr Masse & Dr Desmond</p>
              </div>
            </div>
            <span className="text-xs font-bold text-warm bg-warm/15 px-3 py-1 rounded-full">
              100% Practical SME Advice
            </span>
          </div>
        </div>
      </div>

      {/* Centered Grid: Contact Details & Contact Form */}
      <div className="mt-14 max-w-5xl mx-auto grid gap-10 lg:grid-cols-12 items-start">
        {/* Contact Details Card */}
        <div className="lg:col-span-5 bg-white p-8 rounded-[2rem] border border-olive/20 shadow-md space-y-6">
          <h3 className="text-xl font-bold text-forest border-b border-forest/10 pb-4">
            Contact Channels
          </h3>

          <div className="space-y-4 text-sm text-charcoal/80">
            <div className="p-3.5 rounded-2xl bg-offwhite border border-olive/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                ✉
              </div>
              <div>
                <p className="text-xs font-bold text-forest uppercase">Direct Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-bold text-warm hover:text-warm-light transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-offwhite border border-olive/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                ☎
              </div>
              <div>
                <p className="text-xs font-bold text-forest uppercase">Phone Line</p>
                <p className="text-sm font-semibold text-charcoal/90">
                  {siteConfig.phones.join(" / ")}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-offwhite border border-olive/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                in
              </div>
              <div>
                <p className="text-xs font-bold text-forest uppercase">LinkedIn</p>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-warm hover:text-warm-light transition-colors"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-forest/10 text-xs text-charcoal/60 text-center font-medium">
            Registered UK Business • Sector: {siteConfig.sector}
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2rem] border border-olive/20 shadow-executive">
          <Suspense fallback={<p className="text-center py-8 text-charcoal/60">Loading contact form...</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </SectionWrapper>
  );
}
