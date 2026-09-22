import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CaseStudiesSection } from "./CaseStudiesSection";

describe("CaseStudiesSection", () => {
  it("renders before-and-after case study cards", () => {
    render(<CaseStudiesSection />);

    expect(screen.getByText(/Oak Grove Residential Care/i)).toBeInTheDocument();
    expect(screen.getAllByText(/1. Before/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2. Action/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/3. Result/i).length).toBeGreaterThan(0);
  });
});
