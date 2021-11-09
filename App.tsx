import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {BaseNavigationContainer} from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  return (
    <BaseNavigationContainer >
      <StatusBar style="light" />
      <Routes />
    </BaseNavigationContainer>
  );
}
