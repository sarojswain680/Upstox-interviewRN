/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import HoldingsScreen from './src/Component/HoldingScreen';
import store from './src/Redux/Store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <HoldingsScreen />
    </Provider>
  );
}

export default App;
