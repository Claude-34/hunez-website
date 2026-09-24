import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/ui/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ConnectedProcess } from "@/components/sections/ConnectedProcess";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CarbonReadinessWidget } from "@/components/ui/CarbonReadinessWidget";
import { ImpactStatsSection } from "@/components/sections/ImpactStatsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectorsPreview } from "@/components/sections/SectorsPreview";
import { WhyHumanCentredSection } from "@/components/sections/WhyHumanCentredSection";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
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
      <Hero />
      
      {/* Verified Corporate Accreditation & Framework Standards Bar */}
      <TrustBar />

      <ProblemSection />
      
      {/* Connected 4-Stage Process (Measure → Plan → Reduce → Report) */}
      <CurvedTransition fillColor="#E8EFE5" variant="smooth-curve" />
      <ConnectedProcess />

      {/* Alternating Services Layout */}
      <CurvedTransition fillColor="#F5F2EB" variant="wave" />
      <ServicesPreview />

      {/* Interactive SME Carbon Readiness Assessment Tool */}
      <CarbonReadinessWidget />

      {/* Impact Statistics inside Organic Blobs with Eco Vegetation Backdrop */}
      <ImpactStatsSection />

      {/* Case Studies - Split Before & After Design */}
      <CurvedTransition fillColor="#F2ECE1" variant="smooth-curve" />
      <CaseStudiesSection />

      {/* Testimonials - Speech Quotation Bubbles in Luxury Dark Forest */}
      <CurvedTransition fillColor="#1B4332" variant="wave" />
      <TestimonialsSection />

      {/* Sectors - Distinctive Shape System */}
      <CurvedTransition fillColor="#E8EFE5" variant="slope" />
      <SectorsPreview />

      <WhyHumanCentredSection />

      <CurvedTransition fillColor="#F2ECE1" variant="wave" />
      <PackagesPreview />
      
      <CTABanner />
    </>
  );
}
