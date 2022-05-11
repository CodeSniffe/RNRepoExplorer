import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../../lib/constants/COLORS';
import { RepoDetailsScreen, SearchScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.black },
        headerShown: false,
      }}>
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen
        name="searchDetails"
        component={RepoDetailsScreen}
        options={{
          headerShown: true,
          title: 'Search Details',
          headerTitleStyle: { fontSize: 22 },
          headerStyle: { backgroundColor: COLORS.black },
          headerTintColor: COLORS.white,
        }}
      />
    </Stack.Navigator>
  );
};
