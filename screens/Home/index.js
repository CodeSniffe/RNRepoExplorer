import React from 'react';
import { View, Text } from 'react-native';
import { RepoListContainer } from '../../containers/RepoList';
import { styles } from './styles';
import { COLORS } from '../../lib/constants/COLORS';
import { SearchInput } from '../../components/SearchInput';
import { Divider } from '../../components';
import { Header } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeScreen = () => {
  //===================> VARIABLES

  //===================> HOOKS
  //===================> EVENTS
  //===================> USE EFFECT

  //===================> VIEWS
  return (
    <View style={styles.container}>
      <Header
        barStyle="light-content"
        style={{ alignItems: 'center' }}
        backgroundColor={COLORS.black}
        leftComponent={<Icon name="github" size={40} color={COLORS.silver} />}
        centerComponent={{
          text: 'React Native Community',
          style: { color: COLORS.silver, fontSize: 20, paddingTop: 5 },
        }}
        placement="left"
      />
      <SearchInput />
      {/* TODO: INTEGRATE WITH API */}
      {/* PAGINATION */}
      <RepoListContainer />
    </View>
  );
};
