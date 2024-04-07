import {render} from '@testing-library/react-native';
import React from 'react';
import HoldingsCalculator from '../src/Component/Holding';

describe('HoldingsCalculator Component', () => {
  test('renders correctly', () => {
    const data = [
      {symbol: 'AAPL', avgPrice: 150, close: 160, ltp: 155, quantity: 100},
      {symbol: 'GOOG', avgPrice: 800, close: 850, ltp: 820, quantity: 50},
    ];
    const toggleBottomSheet = jest.fn();

    const {getByText} = render(
      <HoldingsCalculator data={data} toggleBottomSheet={toggleBottomSheet} />,
    );

    expect(getByText('Current Value:')).toBeTruthy();
    expect(getByText('Total Investment:')).toBeTruthy();
    expect(getByText("Today's Profit & Loss:")).toBeTruthy();
    expect(getByText('Profit & Loss:')).toBeTruthy();
  });
});
