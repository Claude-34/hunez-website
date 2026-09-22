import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ServiceCard } from "./ServiceCard";

const mockService = {
  slug: "carbon-footprinting",
  title: "Carbon Footprinting",
  summary: "Measure your organisational greenhouse gas emissions.",
  description: "Support can include comprehensive emissions measurement.",
  bullets: ["Scope 1 emissions", "Scope 2 emissions"],
};

describe("ServiceCard", () => {
  it("renders service title and summary", () => {
    render(<ServiceCard service={mockService} />);

    expect(screen.getByText("Carbon Footprinting")).toBeInTheDocument();
    expect(
      screen.getByText(/Measure your organisational greenhouse gas emissions/i),
    ).toBeInTheDocument();
  });
});
