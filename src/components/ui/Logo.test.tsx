import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo Component", () => {
  it("renders logo image with correct alt text", () => {
    render(<Logo size="md" showText={true} />);
    const logoImg = screen.getByAltText(/Human-Centred Net Zero logo/i);
    expect(logoImg).toBeInTheDocument();
  });

  it("renders brand name text when showText is true", () => {
    render(<Logo size="md" showText={true} />);
    expect(screen.getByText("Human-Centred Net Zero")).toBeInTheDocument();
  });

  it("links to home page by default", () => {
    render(<Logo size="md" href="/" />);
    const link = screen.getByRole("link", { name: /Human-Centred Net Zero Home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
