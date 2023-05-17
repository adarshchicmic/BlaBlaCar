import {StyleSheet, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
type Style = {
  container: ViewStyle;

  textView: ViewStyle;
};
const styles = StyleSheet.create<Style | any>({
  container: {
    justifyContent: 'center',
  },
  textView: {
    marginTop: hp(5),
    marginHorizontal: wp(5),
  },
  textStyle: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  textInputView: {
    paddingBottom: hp(5),
  },
  flagTextInputViewStyle: {
    marginTop: hp(4),
    width: wp(90),

    flexDirection: 'row',
    borderBottomWidth: 1,
    marginHorizontal: wp(5),
  },
  doItLaterStyle: {
    paddingHorizontal: wp(5),
  },
  textInputStyle: {
    // alignSelf: 'center',
    height: hp(6),
    backgroundColor: '#d9dbde',
    paddingLeft: wp(30),
    borderRadius: 10,
    fontSize: RFValue(18),
    fontWeight: '500',
    color: '#000000',
    marginBottom: hp(1.5),
  },
  svgViewStyle: {
    alignSelf: 'center',
    left: wp(2),
    position: 'absolute',
    zIndex: 1,
    top: hp(1),
  },
  svgStyle: {
    width: wp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
  },
  crossStyle: {
    fontSize: RFValue(20),
    color: '#2dbeff',
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  svgArrowStyle: {
    alignSelf: 'center',
  },
  textNineOneStyle: {
    alignSelf: 'center',
    fontSize: RFValue(18),
    fontWeight: '500',
  },
  buttonStyleArrow: {
    height: hp(7),
    width: wp(12),
    backgroundColor: '#2dbeff',
    padding: hp(1),
    borderRadius: 60,
  },

  buttonView: {
    width: wp(10),
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: hp(4),
  },
});

export default styles;
