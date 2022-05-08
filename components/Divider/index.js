import React from 'react';
import { View, Text } from 'react-native';

export const Divider = props => {
  const { color } = props;

  return (
    <View
      style={{
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: color,
        width: '100%',
        alignSelf: 'center',
      }}
    />
  );
};
