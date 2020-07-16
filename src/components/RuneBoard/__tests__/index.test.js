import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RuneBoard from '../index';

window.alert = jest.fn();

describe('RuneBoard test suite', () => {
  test('Talent Path labels should display', () => {
    const { getByText } = render(<RuneBoard />);
    const talentPath1 = getByText("TALENT PATH 1");
    const talentPath2 = getByText("TALENT PATH 2");
    expect(talentPath1).toBeInTheDocument();
    expect(talentPath2).toBeInTheDocument();
  })

  test('Ensure all runes are displayed', () => {
    const { getAllByTestId } = render(<RuneBoard />);
    const allRunes = getAllByTestId(/inactive/);
    expect(allRunes).toHaveLength(8);
  })

  test('Rune active changes to true on click and back on contextmenu', () => {
    const { getAllByTestId } = render(<RuneBoard />);
    const allRunes = getAllByTestId(/inactive/);
    
    fireEvent.click(allRunes[0]);
    let inactiveRunes = getAllByTestId(/inactive/);
    expect(inactiveRunes).toHaveLength(7);

    fireEvent.contextMenu(allRunes[0]);
    inactiveRunes = getAllByTestId(/inactive/);
    expect(inactiveRunes).toHaveLength(8);
  });

  test('Cannot click runes out of order', () => {
    const { getAllByTestId } = render(<RuneBoard />);
    const allRunes = getAllByTestId(/inactive/);
    
    fireEvent.click(allRunes[1]);
    let inactiveRunes = getAllByTestId(/inactive/);
    expect(inactiveRunes).toHaveLength(8);
    expect(window.alert).toHaveBeenCalled();
  });

  test('Cannot select more than 6 runes', () => {
    const { getAllByTestId } = render(<RuneBoard />);
    const allRunes = getAllByTestId(/inactive/);
    
    fireEvent.click(allRunes[0]);
    fireEvent.click(allRunes[1]);
    fireEvent.click(allRunes[2]);
    fireEvent.click(allRunes[3]);
    fireEvent.click(allRunes[4]);
    fireEvent.click(allRunes[5]);

    let inactiveRunes = getAllByTestId(/inactive/);
    expect(inactiveRunes).toHaveLength(2);

    // expect clicking an additional rune has no effect since we've reached the limit
    fireEvent.click(allRunes[6]);
    inactiveRunes = getAllByTestId(/inactive/);
    expect(inactiveRunes).toHaveLength(2);

  })
})