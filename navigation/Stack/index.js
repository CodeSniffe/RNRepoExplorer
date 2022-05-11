import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, RepoDetailsScreen } from '../../screens';
import { COLORS } from '../../lib/constants/COLORS';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="details"
        component={RepoDetailsScreen}
        options={({ route }) => ({
          headerShown: true,
          // title: `react-native-community/${route.params.item.name}`,
          title: 'Details',
          headerTitleStyle: { fontSize: 22 },
          headerStyle: { backgroundColor: COLORS.black },
          headerTintColor: COLORS.white,
          headerLargeTitle: true,
        })}
      />
    </Stack.Navigator>
  );
};
