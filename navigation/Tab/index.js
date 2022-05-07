import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SearchScreen } from '../../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStack } from '../Stack';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: (color, size) => {
          let iconName;
          if (route.name == 'homeStack') {
            iconName = 'home';
          }
          if (route.name == 'searchStack') {
            iconName = 'magnify';
          }
          return <Icon name={iconName} color={color} size={28} />;
        },
      })}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="searchStack"
        component={SearchScreen}
        options={{ tabBarLabel: 'Search' }}
      />
    </Tab.Navigator>
  );
};
