import {
  StyleSheet,
  Dimensions,
} from 'react-native';


const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: '#000000',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginHorizontal: 20,
  },
  darkText: {
    color: '#000000',
    fontSize: 20,
  },
  textField: {
    height: 55,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  forgetPass: {
    width: Dimensions.get('window').width,
    alignItems: 'flex-end',
  },
  forgetPassText: {
    color: '#3797EF',
    fontSize: 20,
    marginHorizontal: 20,
  },

})

export default styles;