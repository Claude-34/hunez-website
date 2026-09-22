import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SectionWrapper className="pt-16 md:pt-24 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Terms & Conditions" />
        <div className="mt-8 rounded-[2rem] border border-olive/20 bg-[#FDFBF7] p-8 md:p-12 shadow-md space-y-6 text-charcoal/90 leading-relaxed">
          <div className="rounded-2xl bg-warm/15 p-4 border border-warm/30 text-sm font-semibold text-warm">
            Terms governing the use of the {siteConfig.name} website and consultancy resources.
          </div>
          <p className="text-base font-medium">
            These terms govern your use of the {siteConfig.name} website. By
            accessing this website, you agree to these terms.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">
            Use of Website Content
          </h3>
          <p className="text-sm">
            The content on this website is provided for general information about
            our net zero consultancy services and SME resource frameworks. It does not constitute binding legal or environmental audit advice until formal engagement.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">
            Intellectual Property
          </h3>
          <p className="text-sm">
            All content on this website, including text, graphics, frameworks, and logos, is the property of {siteConfig.name} unless otherwise stated.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">Contact</h3>
          <p className="text-sm">
            For terms-related enquiries, please contact us at{" "}
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
