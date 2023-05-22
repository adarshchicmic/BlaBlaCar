import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create<any>({
  container: {
    marginTop: hp(2),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  styleTextInput: {
    textInputContainer: {
      width: wp(90),
      alignSelf: 'center',
    },
    textInput: {
      paddingLeft: wp(11),
      color: '#000000',
      fontSize: RFValue(18),
      backgroundColor: '#d7d8de',
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  },
  // textInputStyle: {
  //   width: wp(90),
  //   fontSize: RFValue(16),
  //   padding: 10,
  //   height: hp(6),
  //   backgroundColor: '#d1d1cf',
  //   borderRadius: 5,
  // },
  locationView: {
    width: wp(90),
    height: hp(55),
  },
  leftArrowViewStyle: {
    position: 'absolute',
    paddingVertical: hp(0.5),
    top: 0,
    left: wp(6),
    zIndex: 1,
  },
  leftArrowStyle: {
    fontSize: RFValue(23),
    color: '#9fa0a6',
  },
  nameArrowButtonViewStyle: {
    position: 'absolute',
    top: hp(5),
  },
});

export default styles;
