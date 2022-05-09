import { Header } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchInput } from '../../components';
import { ResultsList } from '../../containers';
import { COLORS } from '../../lib/constants/COLORS';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export const SearchScreen = () => {
  //===================> VARIABLES
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  //===================> VIEWS
  return (
    <View style={{ backgroundColor: COLORS.black }}>
      <Header
        barStyle="light-content"
        style={{ alignItems: 'center' }}
        backgroundColor={COLORS.black}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="github" size={40} color={COLORS.silver} />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Explore',
          style: { color: COLORS.silver, fontSize: 20, paddingTop: 5 },
        }}
        placement="left"
      />
      <SearchInput />

      {/* TODO:RESULTS LIST */}
      {/* <ResultsList /> */}
    </View>
  );
};
