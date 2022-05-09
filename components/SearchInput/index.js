import { Input } from '@rneui/base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../lib/constants/COLORS';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const SearchInput = (props) => {
  return (
    <View>
      <Input
        placeholder="Search For repo"
        leftIcon={<Icon name="magnify" size={28} color={COLORS.blue} />}
        rightIcon={
          <TouchableOpacity>
            <Icon name="close-circle-outline" size={28} color={COLORS.blue} />
          </TouchableOpacity>
        }
        inputStyle={{ color: COLORS.blue }}
      />
    </View>
  );
};
