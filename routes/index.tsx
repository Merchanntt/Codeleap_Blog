import React from 'react';
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import signInPage from '../src/pages/signIn';
import dashboardPage from '../src/pages/dashboard';
import PostPage from '../src/pages/post';
import { store } from '../src/store/redux';

const { Navigator, Screen } = createNativeStackNavigator();

const routes: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={signInPage} />
        <Screen name="Dashboard" component={dashboardPage} />
        <Screen name="PostPage" component={PostPage} />
      </Navigator>
    </Provider>
  );
};

export default routes;
