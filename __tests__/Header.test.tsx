// Header.test.js or Header.test.tsx

import React from 'react';
import {render} from '@testing-library/react-native'; // Import render function
import Header from '../src/Component/Header'; // Import the component to be tested

describe('Header Component', () => {
  it('renders correctly with title', () => {
    const title = 'Upstox Holding';
    const {getByText} = render(<Header title={title} />);

    // Assert that the title text is rendered correctly
    const titleElement = getByText(title);
    expect(titleElement).toBeDefined();
  });
});
