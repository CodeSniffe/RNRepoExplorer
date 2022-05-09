import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RepoListContainer } from '../../containers/RepoList';
import { styles } from './styles';
import { COLORS } from '../../lib/constants/COLORS';
import { SearchInput } from '../../components/SearchInput';
import { Divider } from '../../components';
import { Header } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
          text: 'React Native Community',
          style: { color: COLORS.silver, fontSize: 20, paddingTop: 5 },
        }}
        placement="left"
      />
      {/* OPTIONAL:SORTING */}
      {/* TODO: INTEGRATE WITH API */}
      {/* PAGINATION */}
      <RepoListContainer />
    </View>
  );
};
