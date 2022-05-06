import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { dummyData } from '../../lib/data';

export const RepoListContainer = props => {
  const { data } = props;

  const renderRepoList = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View>
      <FlatList data={dummyData} renderItem={renderRepoList} />
    </View>
  );
};
