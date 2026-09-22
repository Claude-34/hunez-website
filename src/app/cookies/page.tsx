import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <SectionWrapper className="pt-16 md:pt-24 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Cookie Policy" />
        <div className="mt-8 rounded-[2rem] border border-olive/20 bg-[#FDFBF7] p-8 md:p-12 shadow-md space-y-6 text-charcoal/90 leading-relaxed">
          <div className="rounded-2xl bg-warm/15 p-4 border border-warm/30 text-sm font-semibold text-warm">
            Overview of essential cookies and digital session management on the {siteConfig.name} website.
          </div>
          <p className="text-base font-medium">
            {siteConfig.name} uses essential cookies and standard session technologies to improve your experience on our website.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">
            What Are Cookies?
          </h3>
          <p className="text-sm">
            Cookies are small text files stored on your device when you visit a website. They help the site function securely and provide essential performance analytics.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">
            How We Use Cookies
          </h3>
          <p className="text-sm">
            We use essential security and session cookies required for website functionality and form submissions. No non-essential tracking cookies are set without your consent.
          </p>
          <h3 className="text-xl font-bold text-forest pt-2 border-t border-forest/10">Contact</h3>
          <p className="text-sm">
            For cookie-related enquiries, please contact us at{" "}
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
