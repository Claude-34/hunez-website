import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the main heading and CTAs", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /Practical Net Zero Solutions for SMEs/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Start Your Net Zero Journey/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Book a Free Consultation/i }),
    ).toBeInTheDocument();
  });
});
