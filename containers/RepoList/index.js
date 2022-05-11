import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { dummyData } from '../../lib/data';
import { styles } from './styles';
import moment from 'moment';
import { COLORS } from '../../lib/constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '../../components';

export const RepoListContainer = props => {
  //======================> VARIABLES
  const { data,loadMore } = props;
  const navigation = useNavigation();

  //===================> EVENTS
  const renderRepoList = ({ item }) => {
    return (
      // TODO: NAVIGATE TO DETAILS
      <TouchableOpacity key={item.id}
        onPress={() => navigation.navigate('details', { item })}>
        <View style={styles.card}>
          <Text style={styles.nameLabel}>{item.name}</Text>
          <Divider color={COLORS.gray} />
          <Text style={styles.descriptionLabel}>{item.description}</Text>
          {/* <Text
            style={[
              styles.nameLabel,
              {
                color: COLORS.silver,

                alignSelf: 'flex-end',
              },
            ]}>
            Updated {moment(item.updated_at).fromNow()}
          </Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  //===================> VIEWS
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderRepoList}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
