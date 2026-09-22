import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CoursesPage from "./page";

describe("Short Courses Page", () => {
  it("renders main heading and course cards", () => {
    render(<CoursesPage />);
    expect(screen.getByText("Practical Sustainability Short Courses")).toBeInTheDocument();
    expect(screen.getByText("Net Zero Essentials for UK SMEs")).toBeInTheDocument();
  });

  it("filters courses by category when category tab is clicked", () => {
    render(<CoursesPage />);
    const circularTab = screen.getByRole("button", { name: /Circular Economy/i });
    fireEvent.click(circularTab);
    expect(screen.getByText("Commercial Waste Reduction & Circular Economy")).toBeInTheDocument();
  });

  it("opens syllabus drawer modal when View Syllabus is clicked", () => {
    render(<CoursesPage />);
    const viewSyllabusBtns = screen.getAllByRole("button", { name: /View Syllabus/i });
    fireEvent.click(viewSyllabusBtns[0]);
    expect(screen.getByText("Course Syllabus & Modules:")).toBeInTheDocument();
  });
});
