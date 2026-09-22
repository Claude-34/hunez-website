import { describe, expect, it } from "vitest";
import { metadata } from "./page";

describe("HomePage", () => {
  it("exports SEO metadata for the home page", () => {
    expect(metadata.title).toContain("Net Zero & Sustainability Consultancy");
    expect(metadata.description).toContain("Practical net zero");
  });
});
