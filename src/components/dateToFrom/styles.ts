import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(18),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: wp(3),
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
    shadowOpacity: 0.8,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    marginTop: hp(3),
  },

  dateTextStyle: {
    fontSize: RFValue(19),
    fontWeight: '600',
    marginBottom: hp(0.5),
  },
  pipeTextView: {
    flexDirection: 'row',
  },
  pipeView: {
    width: wp(4),
    height: hp(6),
    alignSelf: 'center',
  },
  oStyle: {
    height: wp(3),
    width: wp(3),
    alignSelf: 'center',
    borderRadius: wp(1.5),
    borderWidth: wp(0.6),
  },
  pipeStyle: {
    height: hp(4),
    alignSelf: 'center',
    width: wp(1),
    backgroundColor: '#000',
  },
  leavingFromGoingToView: {
    justifyContent: 'space-between',
    margin: wp(2),
    height: hp(8),
  },
  leavingFromGoingToText: {
    fontSize: RFValue(15),
    fontWeight: '600',
  },
});

export default styles;
