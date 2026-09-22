import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RotatingSectorsCircle } from "./RotatingSectorsCircle";

describe("RotatingSectorsCircle Component", () => {
  it("renders all sector titles in circular cards and buttons", () => {
    render(<RotatingSectorsCircle />);
    expect(screen.getAllByText("Care & Residential").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Hospitality & Dining").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Retail & Commerce").length).toBeGreaterThan(0);
  });

  it("displaces clicked circle and displays sector detail view", () => {
    render(<RotatingSectorsCircle />);
    const careBtns = screen.getAllByText("Care & Residential");
    fireEvent.click(careBtns[0]);
    expect(screen.getByText("Expected Business Impact")).toBeInTheDocument();
  });

  it("toggles play and pause rotation button", () => {
    render(<RotatingSectorsCircle />);
    const pauseBtn = screen.getByRole("button", { name: /Pause/i });
    expect(pauseBtn).toBeInTheDocument();
    fireEvent.click(pauseBtn);
    expect(screen.getByRole("button", { name: /Resume/i })).toBeInTheDocument();
  });
});
