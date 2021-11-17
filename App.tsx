import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import store from './src/store/redux';
import BottomSheet from './src/components/bottomSheet';

export default function App() {
  return (
    <NavigationContainer >
      <Provider store={store}>
          <BottomSheet>
          <StatusBar style="dark" />
            <Routes />
          </BottomSheet>
      </Provider>
    </NavigationContainer>
  );
}
