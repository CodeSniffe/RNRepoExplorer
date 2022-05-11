import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RepoListContainer } from '../../containers/RepoList';
import { styles } from './styles';
import { COLORS } from '../../lib/constants/COLORS';
import { SearchInput } from '../../components/SearchInput';
import { Divider } from '../../components';
import { Header } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const HomeScreen = () => {
  //===================> VARIABLES
  const navigation = useNavigation();

  //===================> HOOKS
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //===================> EVENTS
  const getDatas = async () => {
    setLoading(true);
    setPage(page + 1);
    await axios
      .get(
        `https://api.github.com/orgs/react-native-community/repos?per_page=6&page=${page}`,
      )
      .then(res => {
        setLoading(false);
        setData([...data, ...res.data]);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  //===================> USE EFFECT
  useEffect(() => {
    getDatas();
  }, []);

  //===================> VIEWS
  return (
    <View style={styles.container}>
      <Header
        barStyle="light-content"
        style={{ alignItems: 'center' }}
        backgroundColor={COLORS.black}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="github" size={40} color={COLORS.white} />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'React Native Community',
          style: { color: COLORS.white, fontSize: 20, paddingTop: 5 },
        }}
        placement="left"
      />
      {/* OPTIONAL:SORTING */}
      {/* TODO: INTEGRATE WITH API */}
      {/* PAGINATION */}
      {loading ? (
        <ActivityIndicator
          size={60}
          color={COLORS.blue}
          style={{ justifyContent: 'center', flex: 0.5 }}
        />
      ) : (
        <RepoListContainer loadMore={() => getDatas()} data={data} />
      )}
    </View>
  );
};
