import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import signInPage from '../pages/signIn';
import dashboardPage from '../pages/dashboard';
import PostPage from '../pages/post';

const { Navigator, Screen } = createStackNavigator();

const routes: React.FC = () => {
  return (
      <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="SignIn" component={signInPage} />
          <Screen name="Dashboard" component={dashboardPage} />
          <Screen name="PostPage" component={PostPage} />
      </Navigator>
  );
};

export default routes;
