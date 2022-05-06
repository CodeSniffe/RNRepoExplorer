import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabNavigator } from './navigation/Tab';

const App = () => {
  return (
    // TODO: SIGN IN
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
