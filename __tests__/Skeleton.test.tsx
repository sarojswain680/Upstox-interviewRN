import {render} from '@testing-library/react-native';
import React from 'react';
import Skeleton from '../src/Component/Skeleton';

describe('Skeleton Component', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<Skeleton />);

    const card = getByTestId('skeleton-card');
    expect(card).toBeTruthy();

    const imageContainer = getByTestId('image-container');
    expect(imageContainer).toBeTruthy();

    const image = getByTestId('image');
    expect(image).toBeTruthy();

    const content = getByTestId('content');
    expect(content).toBeTruthy();

    const text1 = getByTestId('text1');
    expect(text1).toBeTruthy();

    const text2 = getByTestId('text2');
    expect(text2).toBeTruthy();

    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });
});
