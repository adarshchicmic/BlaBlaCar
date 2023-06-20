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
    },
    textInput: {
      paddingLeft: wp(10),
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
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: hp(1),
  },
  leftArrowStyle: {
    fontSize: RFValue(26),
    color: '#9fa0a6',
    alignSelf: 'center',
    paddingHorizontal: wp(3),
  },
  nameArrowButtonViewStyle: {
    position: 'absolute',
    top: hp(5),
  },
});

export default styles;
