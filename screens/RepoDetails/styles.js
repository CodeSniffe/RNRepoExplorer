import { StyleSheet } from 'react-native';
import { COLORS } from '../../lib/constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    padding:15,
    height:'100%',
    width:'100%',
    backgroundColor:COLORS.black
  },
  detailLabel: {
    color: COLORS.gray,
    fontSize: 16,
  },
});
