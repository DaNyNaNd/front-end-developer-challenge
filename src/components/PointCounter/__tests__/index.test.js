import React from "react";
import { render } from "@testing-library/react";
import PointCounter from "../index";

const PROPS = {
  numberOfActiveRunes: 0,
  totalPoints: 6
}

describe('PointCounter test suite', () => {
  test('initial points remaining', () => {
    const { getByText } = render(<PointCounter {...PROPS} />)
    const pointDisplay = getByText("6/6");
    expect(pointDisplay).toBeInTheDocument();
  })

  test('no points remaining', () => {
    PROPS.numberOfActiveRunes = 6;
    const { getByText } = render(<PointCounter {...PROPS} />);
    const pointDisplay = getByText("0/6");
    expect(pointDisplay).toBeInTheDocument();
  })

  test('display Points Spent text', () => {
    const { getByText } = render(<PointCounter {...PROPS} />);
    const pointsSpent = getByText("Points Spent");
    expect(pointsSpent).toBeInTheDocument();
  })
})