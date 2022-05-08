import { Input } from '@rneui/base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../lib/constants/COLORS';

export const SearchInput = () => {
  return (
    <Input
      placeholder="Search For repo"
      leftIcon={<Icon name="magnify" size={28} color={COLORS.blue} />}
    />
  );
};
