import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SectionWrapper className="pt-16 md:pt-24 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Privacy Policy" />
        <div className="mt-8 rounded-[2rem] border border-olive/20 bg-[#FDFBF7] p-8 md:p-12 shadow-md space-y-6 text-charcoal/90 leading-relaxed">
          <div className="rounded-2xl bg-warm/15 p-4 border border-warm/30 text-sm font-semibold text-warm">
            Notice: This document outlines how {siteConfig.name} protects your personal information across all digital and consultation channels.
          </div>
          <p className="text-base font-medium">
            {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            is committed to protecting your privacy. This policy explains how we
            collect, use and protect personal information when you visit our
            website or contact us.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">
            Information We Collect
          </h3>
          <p className="text-sm">
            When you submit our contact form or readiness assessment tool, we may collect your name, company name,
            email address, telephone number, sector details, and message content.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">
            How We Use Your Information
          </h3>
          <p className="text-sm">
            We use your information strictly to respond to enquiries, conduct environmental audits, and deliver tailored SME sustainability consultancy services.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">Direct Enquiries</h3>
          <p className="text-sm">
            For privacy-related enquiries or data requests, please contact us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-bold text-warm hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
