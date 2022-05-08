import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const Header = props => {
  const { title } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
