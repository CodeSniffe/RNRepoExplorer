import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="searchDetails" component={SearchDetailsScreen} />
    </Stack.Navigator>
  );
};
