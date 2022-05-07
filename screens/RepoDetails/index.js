import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../lib/constants/COLORS';
import { styles } from '../RepoDetails/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from '@rneui/base';

export const RepoDetailsScreen = props => {
  const {
    name,
    description,
    stargazers_count,
    forks_count,
    watchers,
    language,
  } = props.route.params.item;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.detailLabel,
          {
            color: COLORS.blue,
            fontWeight: 'bold',
            fontSize: 20,
          },
        ]}>
        {name}
      </Text>
      <Divider style={{ paddingVertical: 5 }} />
      <Text style={styles.detailLabel}>{description}</Text>
      <View>
        <Icon name="star-outline" color={COLORS.blue} size={24} />
        <Text style={styles.detailLabel}>{stargazers_count} stars</Text>
      </View>
      <Icon name="source-fork" color={COLORS.gray} size={24} />
      <Text style={styles.detailLabel}>{forks_count}</Text>
      <Icon name="eye" color={COLORS.gray} size={34} />
      <Text style={styles.detailLabel}>{watchers} watching</Text>
      <View style={{ flexDirection: 'row' }}>
        {/* <Icon name='star'/> */}
        <Text style={styles.detailLabel}>{language}</Text>
      </View>
    </View>
  );
};
