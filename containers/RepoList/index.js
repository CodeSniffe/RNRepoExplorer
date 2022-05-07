import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { dummyData } from '../../lib/data';
import { styles } from './styles';
import moment from 'moment';
import { COLORS } from '../../lib/constants/COLORS';
import { useNavigation } from '@react-navigation/native';

export const RepoListContainer = props => {
  //======================> VARIABLES
  const { data } = props;
  const navigation = useNavigation();

  const renderRepoList = ({ item }) => {
    return (
      // TODO: NAVIGATE TO DETAILS
      <TouchableOpacity
        onPress={() => navigation.navigate('details', { item })}>
        <View style={styles.card}>
          <Text style={styles.nameLabel}>{item.name}</Text>
          <Text
            style={[
              styles.nameLabel,
              { color: COLORS.gray, fontWeight: 'normal' },
            ]}>
            {item.description}
          </Text>
          <Text
            style={[
              styles.nameLabel,
              {
                color: COLORS.silver,
                
                alignSelf: 'flex-end',
              },
            ]}>
            Updated {moment(item.updated_at).fromNow()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={renderRepoList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
