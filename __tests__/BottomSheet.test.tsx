import {render} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';
import BottomSheet from '../src/Component/BottomSheet';

describe('BottomSheet Component', () => {
  test('renders correctly', () => {
    const isOpen = true;
    const onClose = jest.fn();
    const children = <View testID="child-view" />;

    const {getByTestId, getByText} = render(
      <BottomSheet isOpen={isOpen} onClose={onClose}>
        {children}
      </BottomSheet>,
    );

    const modal = getByTestId('modal');
    expect(modal).toBeTruthy();

    const childView = getByTestId('child-view');
    expect(childView).toBeTruthy();
  });
});
