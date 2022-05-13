import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { dummyData } from '../../lib/data';
import { styles } from './styles';
import moment from 'moment';
import { COLORS } from '../../lib/constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '../../components';

export const RepoListContainer = props => {
  //======================> VARIABLES
  const { page, loadMore } = props;
  const { data, error, isListEnd, moreLoading, loading } = props.data;
  const navigation = useNavigation();

  //===================> EVENTS
  const renderRepoList = ({ item }) => {
    return (
      // TODO: NAVIGATE TO DETAILS
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate('details', { item })}>
        <View style={styles.card}>
          <Text style={styles.nameLabel}>{item.name}</Text>
          <Divider color={COLORS.gray} />
          <Text style={styles.descriptionLabel}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => (
    <View style={styles.footerWrapper}>
      {moreLoading && <ActivityIndicator color={COLORS.blue} size={26}/>}
      {isListEnd && (
        <Text style={styles.footerLabel}>No more articles at the moment</Text>
      )}
    </View>
  );

  //===================> VIEWS
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderRepoList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
