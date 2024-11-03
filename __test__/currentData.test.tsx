import CurrentData from "@/app/(site)/(root)/_components/CurrentData";
import { useTimezone } from "@/hooks/useTimezone";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("./../hooks/useTimezone");
const mockUseTimezone = useTimezone as jest.MockedFunction<typeof useTimezone>;

const data = {
  value: 28,
  created_at: "2024-11-03T10:46:45.005Z",
};

describe("Components", () => {
  it("Render a Current Data Component for Indonesia timezone", () => {
    mockUseTimezone.mockReturnValue({
      timezone: "Indonesia",
    });
    const expectedtext = "11/3/2024, 5:46:45 PM";

    render(<CurrentData data={data} />);
    const textTime = screen.getByText(expectedtext);
    expect(textTime).toBeInTheDocument();
  });

  it("Renders a Current Data Component for Singapore timezone", () => {
    mockUseTimezone.mockReturnValue({
      timezone: "Singapore",
    });
    const expectedtext = "11/3/2024, 6:46:45 PM";

    render(<CurrentData data={data} />);
    const textTime = screen.getByText(expectedtext);
    expect(textTime).toBeInTheDocument();
  });

  it("Renders a Current Data Component for Austrlia timezone", () => {
    mockUseTimezone.mockReturnValue({
      timezone: "Austrlia",
    });
    const expectedtext = "11/3/2024, 5:46:45 PM";

    render(<CurrentData data={data} />);
    const textTime = screen.getByText(expectedtext);
    expect(textTime).toBeInTheDocument();
  });
});
