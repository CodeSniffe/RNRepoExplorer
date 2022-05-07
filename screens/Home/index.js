import React from 'react';
import { View, Text } from 'react-native';
import { RepoListContainer } from '../../containers/RepoList';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  //===================> VARIABLES
  const navigation = useNavigation();

  //===================> HOOKS
  //===================> EVENTS
  //===================> USE EFFECT

  //===================> VIEWS
  return (
    <View style={styles.container}>
      {/* TODO: INTEGRATE WITH API */}
      <RepoListContainer />
    </View>
  );
};
