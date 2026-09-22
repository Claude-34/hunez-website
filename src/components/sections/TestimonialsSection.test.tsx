import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestimonialsSection } from "./TestimonialsSection";

describe("TestimonialsSection", () => {
  it("renders client testimonials and quotes", () => {
    render(<TestimonialsSection />);

    expect(screen.getByText("Eleanor Vance")).toBeInTheDocument();
    expect(screen.getByText("Marcus Thorne")).toBeInTheDocument();
  });
});
