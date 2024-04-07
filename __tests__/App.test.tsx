import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import App from '../App';
import store from '../src/Redux/Store/store'; // Import  Redux store

describe('App Component', () => {
  test('renders HoldingsScreen within Provider', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // Assuming HoldingsScreen has a unique testID set
    const holdingsScreen = getByTestId('holdings-screen');
    expect(holdingsScreen).toBeDefined();
  });
});
