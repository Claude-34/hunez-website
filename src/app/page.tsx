import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/ui/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ConnectedProcess } from "@/components/sections/ConnectedProcess";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CTABanner } from "@/components/ui/CTABanner";
import { CurvedTransition } from "@/components/ui/CurvedTransition";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "Net Zero & Sustainability Consultancy for SMEs | Human-Centred Net Zero",
  description:
    "Practical net zero, carbon reduction and sustainability solutions for SMEs. Human-centred, science-led support to help businesses measure, reduce and manage their environmental impact.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Field Photo 1: Site Inspection */}
      <Hero />
      
      {/* Verified Corporate Accreditation & Framework Standards Bar */}
      <TrustBar />

      {/* 2. Problem & Human-Centred Advantage with Field Photo 2: Community Consultation */}
      <ProblemSection />
      
      {/* 3. Connected 4-Stage Process with Field Photo 3: Stream Measurement */}
      <CurvedTransition fillColor="#E8EFE5" variant="smooth-curve" />
      <ConnectedProcess />

      {/* 4. Core Services Grid with Field Photo 4: Rainforest Canopy Science */}
      <CurvedTransition fillColor="#F5F2EB" variant="wave" />
      <ServicesPreview />

      {/* 5. Proven Impact & Case Studies with Field Photo 5: Waterway Cleanup Action */}
      <CurvedTransition fillColor="#F2ECE1" variant="smooth-curve" />
      <CaseStudiesSection />

      {/* 6. Testimonials in Luxury Dark Forest */}
      <CurvedTransition fillColor="#1B4332" variant="wave" />
      <TestimonialsSection />

      {/* 7. Academic & Research Partners (Clean transparent logos) */}
      <PartnersSection />
      
      {/* 8. Conversion CTA Banner with Field Photo 6: Scientific Operations */}
      <CTABanner />
    </>
  );
}
