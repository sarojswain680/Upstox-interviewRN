import {render} from '@testing-library/react-native';
import React from 'react';
import ShimmerCard from '../src/Component/Shimmercard';

describe('ShimmerCard Component', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<ShimmerCard />);

    const card = getByTestId('skeleton-card');
    expect(card).toBeTruthy();

    const skeleton1 = getByTestId('skeleton1');
    expect(skeleton1).toBeTruthy();

    const skeleton2 = getByTestId('skeleton2');
    expect(skeleton2).toBeTruthy();

    const skeleton3 = getByTestId('skeleton3');
    expect(skeleton3).toBeTruthy();

    const skeleton4 = getByTestId('skeleton4');
    expect(skeleton4).toBeTruthy();
  });
});
