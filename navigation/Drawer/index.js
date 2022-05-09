import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { SearchScreen } from '../../screens';
import { HomeStack } from '../Stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../lib/constants/COLORS';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home1"
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.blue,
        drawerActiveTintColor: COLORS.silver,
        drawerInactiveTintColor: COLORS.blue,
        drawerStyle: { backgroundColor: COLORS.black },
        drawerLabelStyle: { fontSize: 18 },
        drawerIcon: ({ focused, size }) => {
          let iconName;
          if (route.name == 'home1') {
            iconName = 'home';
          }
          if (route.name == 'search1') {
            iconName = 'magnify';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? COLORS.silver : COLORS.blue}
              size={28}
            />
          );
        },
      })}>
      <Drawer.Screen
        name="home1"
        component={HomeStack}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="search1"
        component={SearchScreen}
        options={{ drawerLabel: 'Explore' }}
      />
    </Drawer.Navigator>
  );
};
