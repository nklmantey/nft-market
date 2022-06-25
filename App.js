import { View, Text } from 'react-native';
import React from 'react';
import StackNav from './src/screens/nav/StackNav';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNav />
    </NavigationContainer>
  )
}

export default App;