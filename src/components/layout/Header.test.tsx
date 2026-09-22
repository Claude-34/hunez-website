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
});
