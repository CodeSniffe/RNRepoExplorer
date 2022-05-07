import { StyleSheet } from 'react-native';
import { COLORS } from '../../lib/constants/COLORS';

export const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    margin: 5,
    padding: 20,
    backgroundColor: COLORS.black,
  },
  nameLabel: {
    fontSize: 16,
    color: COLORS.blue,
    fontWeight:'bold'
  },
});
