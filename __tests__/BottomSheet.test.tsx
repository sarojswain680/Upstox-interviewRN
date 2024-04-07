import {render, cleanup} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';
import BottomSheet from '../src/Component/BottomSheet';

describe('BottomSheet Component', () => {
  afterEach(() => {
    cleanup(); // Clean up resources after each test
  });

  test('renders correctly', async () => {
    const isOpen = true;
    const onClose = jest.fn();
    const children = <View testID="child-view" />;

    // Render the component
    const {getByTestId, getByText} = render(
      <BottomSheet isOpen={isOpen} onClose={onClose}>
        {children}
      </BottomSheet>,
    );

    // Perform assertions
    const modal = getByTestId('modal');
    expect(modal).toBeTruthy();

    const childView = getByTestId('child-view');
    expect(childView).toBeTruthy();
  });
});
