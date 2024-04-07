import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../src/Component/Card';

describe('Card Component', () => {
  test('renders correctly', () => {
    const item = {
      item: {
        symbol: 'AAPL',
        quantity: 100,
        ltp: 150,
        pnl: 500,
      },
    };

    const tree = renderer.create(<Card {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
