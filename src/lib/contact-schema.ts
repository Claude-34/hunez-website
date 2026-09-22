import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  helpWith: z.string().min(1, "Please select what you need help with"),
  message: z.string().min(10, "Please provide a message"),
  package: z.string().optional(),
  intent: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const helpOptions = [
  "Net Zero Readiness Assessment",
  "Carbon Footprinting",
  "Carbon Reduction Roadmaps",
  "Sustainability Strategy",
  "Behaviour Change & Employee Engagement",
  "Nature Positive Business",
  "Greenwashing Risk Review",
  "Outsourced Sustainability Support",
  "Packages & Pricing",
  "Free Consultation",
  "General Enquiry",
];
