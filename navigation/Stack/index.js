import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, RepoDetailsScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="details"
        component={RepoDetailsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
