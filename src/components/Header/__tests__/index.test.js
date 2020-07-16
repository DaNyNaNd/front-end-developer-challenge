import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";

describe("Header test suite", () => {
  test("Header renders", () => {
    const { getByText } = render(<Header />);
    const titanStarText = getByText(/TitanStar Legends/);
    expect(titanStarText).toBeInTheDocument();
  });
});
