import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerNavigator } from './navigation/Drawer';
import { BottomTabNavigator } from './navigation/Tab';
// import {store} from'store'
import {Provider as ReduxProvider} from 'react-redux'

const App = () => {
  return (
    // TODO: SIGN IN
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default App;
