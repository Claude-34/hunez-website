import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InsightsPage from "./page";
import { publications } from "@/data/publications";

describe("Scientific Contributions & Publications Page", () => {
  it("renders the main heading and scientific publications section", () => {
    render(<InsightsPage />);
    expect(
      screen.getByRole("heading", {
        name: "Scientific Contributions & Publications",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Scientific Publications",
        level: 2,
      })
    ).toBeInTheDocument();
  });

  it("renders paper title, authors, published in, and link to see full story for each publication", () => {
    render(<InsightsPage />);

    publications.forEach((paper) => {
      // Paper publish title
      expect(screen.getByText(paper.title)).toBeInTheDocument();

      // Authors (multiple papers may share author lists)
      const authorElements = screen.getAllByText(paper.authors, { exact: false });
      expect(authorElements.length).toBeGreaterThan(0);

      // Published in journal
      const journalElements = screen.getAllByText(paper.journal, { exact: false });
      expect(journalElements.length).toBeGreaterThan(0);

      // Link / arrow directing to see full story
      if (paper.url) {
        const link = screen.getByRole("link", {
          name: new RegExp(`See full story for ${paper.title}`, "i"),
        });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", paper.url);
      }
    });
  });

  it("renders link to Google Scholar profile", () => {
    render(<InsightsPage />);
    const scholarLink = screen.getByRole("link", { name: /Google Scholar/i });
    expect(scholarLink).toBeInTheDocument();
    expect(scholarLink).toHaveAttribute(
      "href",
      "https://scholar.google.com/citations?user=UwqPhREAAAAJ&hl=ja"
    );
  });
});
