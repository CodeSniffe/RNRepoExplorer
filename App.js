import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerNavigator } from './navigation/Drawer';
import { BottomTabNavigator } from './navigation/Tab';
import { store } from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    // TODO: SIGN IN
    <Provider store={store}>
      <NavigationContainer>
        {/* <BottomTabNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
