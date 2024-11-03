import Statistics from "@/app/(site)/(root)/_components/Statistics";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const data = [
  {
    value: 28,
    created_at: "2024-11-03T10:46:45.005Z",
  },
  {
    value: 29,
    created_at: "2024-11-03T10:46:40.005Z",
  },
  {
    value: 30,
    created_at: "2024-11-03T10:46:35.005Z",
  },
];

describe("Render a Statistics Component", () => {
  it("Should test statistics temperature", () => {
    const expectedAverage = "29.0°C";
    const expectedMax = "30°C";
    const expectedMin = "28°C";
    const expectedDifference = "-1.0°C";

    render(<Statistics data={data} />);
    expect(screen.getByText(expectedAverage)).toBeInTheDocument();
    expect(screen.getByText(expectedMax)).toBeInTheDocument();
    expect(screen.getByText(expectedMin)).toBeInTheDocument();
    expect(screen.getByText(expectedDifference)).toBeInTheDocument();
  });
});
