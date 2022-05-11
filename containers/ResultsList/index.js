import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../lib/constants/COLORS';
import { Divider } from '../../components';
import { useNavigation } from '@react-navigation/native';

export const ResultsList = props => {
  const navigation = useNavigation();
  const { data } = props;

  const renderSearchList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('searchDetails', { item })}>
        <View style={styles.card}>
          <Text style={styles.nameLabel}>{item.name}</Text>
          <Divider color={COLORS.gray} />
          <Text style={styles.descriptionLabel}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderSearchList} />
    </View>
  );
};
