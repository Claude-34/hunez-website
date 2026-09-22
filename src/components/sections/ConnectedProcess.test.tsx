import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConnectedProcess } from "./ConnectedProcess";

describe("ConnectedProcess", () => {
  it("renders the 4 connected stages: Measure, Plan, Reduce, Report", () => {
    render(<ConnectedProcess />);

    expect(screen.getByText("Measure")).toBeInTheDocument();
    expect(screen.getByText("Plan")).toBeInTheDocument();
    expect(screen.getByText("Reduce")).toBeInTheDocument();
    expect(screen.getByText("Report")).toBeInTheDocument();
  });
});
