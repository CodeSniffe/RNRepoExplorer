import { StyleSheet } from 'react-native';
import { COLORS } from '../../lib/constants/COLORS';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },
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
    margin: 8,
    padding: 15,
    backgroundColor: COLORS.black,
    borderWidth: 0.5,
    borderColor: COLORS.silver,
  },
  nameLabel: {
    fontSize: 18,
    color: COLORS.blue,
    fontWeight: 'bold',
  },
  descriptionLabel: {
    color: COLORS.gray,
    fontSize: 14,
  },
  footerWrapper:{
    alignItems:'center',
    justifyContent:'center'
  },
  footerLabel:{
    fontSize:12,
    color:COLORS.white
  }
});
