import { StyleSheet } from 'react-native';
import { COLORS } from '../../lib/constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.black,
  },
  dateLabel: {
    color: COLORS.white,
    alignSelf: 'flex-end',
    paddingVertical: 5,
    fontSize: 14,
  },
  detailLabel: {
    color: COLORS.silver,
    fontSize: 16,
    paddingLeft: 5,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
