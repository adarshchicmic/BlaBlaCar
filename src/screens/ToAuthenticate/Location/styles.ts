import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  styleTextInput: {
    textInputContainer: {
      width: wp(90),
      alignSelf: 'center',
      justifyContent: 'center',
    },
    textInput: {
      paddingLeft: wp(10),
      color: '#000000',
      fontSize: RFValue(20),
      backgroundColor: '#d7d8de',
      justifyContent: 'center',
      alignSelf: 'center',
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
    width: wp(80),
    height: hp(55),
    marginHorizontal: wp(5),
  },
  arrowInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftArrowViewStyle: {
    fontSize: RFValue(20),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    // left: wp(1),
  },
  leftArrowStyle: {
    top: 0,
    left: wp(1),
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: RFValue(25),
    color: '#9fa0a6',
    paddingHorizontal: wp(4),
    paddingBottom: hp(1),
  },
  nameArrowButtonViewStyle: {
    position: 'absolute',
    top: hp(5),
  },
});

export default styles;
