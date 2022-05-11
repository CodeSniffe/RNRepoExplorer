import { Header } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ResultsList } from '../../containers';
import { COLORS } from '../../lib/constants/COLORS';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/base';
import axios from 'axios';
import { dummyData } from '../../lib/data';

export const SearchScreen = () => {
  //===================> VARIABLES
  const navigation = useNavigation();
  const input = React.createRef();

  //===================> HOOKS
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  //===================> EVENTS
  // GET DATA FROM API AND FILTER
  const getDataRepo = () => {};

  const filterResults = text => {
    if (text) {
      setSearch(text);
      let filteredData = results.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setResults(filteredData);
    } else {
      setResults(dummyData);
      setSearch(text);
    }
  };

  //===================> USE EFFECT
  useEffect(() => setResults(dummyData), []);

  //===================> VIEWS
  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
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
          text: 'Explore',
          style: { color: COLORS.silver, fontSize: 20, paddingTop: 5 },
        }}
        placement="left"
      />
      {/* SEARCH */}
      <Input
        ref={input}
        placeholder="Search For repo"
        leftIcon={<Icon name="magnify" size={28} color={COLORS.blue} />}
        rightIcon={
          <TouchableOpacity onPress={() => input.current.clear()}>
            <Icon name="close-circle-outline" size={28} color={COLORS.blue} />
          </TouchableOpacity>
        }
        inputStyle={{ color: COLORS.blue }}
        onChangeText={text => filterResults(text)}
        clearButtonMode="always"
      />

      {/* TODO:RESULTS LIST */}
      <ResultsList data={results} />
    </View>
  );
};
