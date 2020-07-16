import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Rune from '../index';

let PROPS;

describe('Rune test suite', () => {
  beforeEach(() => {
    PROPS = {
      name: 'chevron',
      active: false,
      pathIndex: 0,
      runeIndex: 0,
      onClick: jest.fn()
    };
  })
  test('rune displays as inactive', () => {
    const { getByTestId } = render(<Rune {...PROPS} />);
    const chevronInactiveRune = getByTestId(`${PROPS.name}-inactive`);
    expect(chevronInactiveRune).toBeInTheDocument();
  })

  test('rune displays as active', () => {
    PROPS.active = true;
    const { getByTestId } = render(<Rune {...PROPS} />);
    const chevronActiveRune = getByTestId(PROPS.name);
    expect(chevronActiveRune).toBeInTheDocument();
  })

  test('click should call props.onClick', () => {
    const { getByTestId } = render(<Rune {...PROPS} />);
    const rune = getByTestId(`${PROPS.name}-inactive`);
    fireEvent.click(rune);
    expect(PROPS.onClick).toHaveBeenCalled();
  })

  test('contextmenu should call props.onClick', () => {
    const { getByTestId } = render(<Rune {...PROPS} />);
    const rune = getByTestId(`${PROPS.name}-inactive`);
    fireEvent.contextMenu(rune);
    expect(PROPS.onClick).toHaveBeenCalled();
  })
})