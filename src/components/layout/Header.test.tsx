import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/about",
}));

describe("Header Component Navigation", () => {
  it("renders navigation links and highlights active page", () => {
    render(<Header />);
    const aboutLinks = screen.getAllByRole("link", { name: /About/i });
    expect(aboutLinks.length).toBeGreaterThan(0);
    
    // Check that about link has active styling classes
    const activeLink = aboutLinks[0];
    expect(activeLink.className).toContain("text-forest");
  });

  it("renders HUNEZ acronym before the logo with bounce animation and pan effect", () => {
    render(<Header />);
    const acronym = screen.getByLabelText("HUNEZ");
    expect(acronym).toBeInTheDocument();
    expect(acronym.className).toContain("animate-bounce");
    expect(acronym.querySelector(".animate-gradient-pan")).toBeInTheDocument();
    expect(screen.getByText("H")).toBeInTheDocument();
    expect(screen.getByText("U")).toBeInTheDocument();
    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getByText("E")).toBeInTheDocument();
    expect(screen.getByText("Z")).toBeInTheDocument();
  });
});
