import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../lib/constants/COLORS';
import { styles } from '../RepoDetails/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { Divider } from '../../components';
import { Avatar } from '@rneui/base';

export const RepoDetailsScreen = props => {
  const {
    name,
    description,
    stargazers_count,
    forks_count,
    watchers,
    language,
    updated_at,
  } = props.route.params.item;

  //===================> EVENTS
  // UPPERCASE FIRST LETTER
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //===================> VIEWS
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.detailLabel,
          {
            color: COLORS.blue,
            fontWeight: 'bold',
            fontSize: 22,
          },
        ]}>
        {name}
      </Text>
      <Text style={styles.dateLabel}>
        {capitalizeFirstLetter(moment(updated_at).fromNow())}
      </Text>
      <Divider color={COLORS.silver} />
      {/* DESCRIPTION */}
      <Text
        style={[
          styles.detailLabel,
          { padding: 5, color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
        ]}>
        About
      </Text>
      <Text style={[styles.detailLabel, { color: COLORS.white, fontSize: 18 }]}>
        {description}
      </Text>
      {/* STARS FORKS WATCHERS LANGUAGES */}
      <View style={{ paddingVertical: 8 }}>
        <View style={styles.rowWrapper}>
          <Icon name="star-outline" color={COLORS.white} size={24} />
          <Text style={styles.detailLabel}>{stargazers_count} stars</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Icon name="source-fork" color={COLORS.gray} size={24} />
          <Text style={styles.detailLabel}>{forks_count} forks</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Icon name="eye" color={COLORS.gray} size={24} />
          <Text style={styles.detailLabel}>{watchers} watching</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Avatar
            size={12}
            avatarStyle={{ backgroundColor: COLORS.white }}
            rounded
          />
          <Text style={styles.detailLabel}>{language}</Text>
        </View>
      </View>
    </View>
  );
};
