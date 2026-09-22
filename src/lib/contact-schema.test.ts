import { describe, expect, it } from "vitest";
import { contactFormSchema } from "./contact-schema";

describe("contactFormSchema", () => {
  it("validates required fields", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane Smith",
      email: "jane@example.com",
      helpWith: "General Enquiry",
      message: "I would like to discuss net zero support for my business.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane Smith",
      email: "not-an-email",
      helpWith: "General Enquiry",
      message: "Test message here.",
    });

    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane Smith",
      email: "jane@example.com",
      helpWith: "General Enquiry",
      message: "Hi",
    });

    expect(result.success).toBe(false);
  });
});
