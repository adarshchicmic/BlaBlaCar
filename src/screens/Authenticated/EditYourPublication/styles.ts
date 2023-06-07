import {StyleSheet} from 'react-native';

import {
  //   heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnTextStyle: {
    color: '#2dbeff',
    fontSize: RFValue(16),
    fontWeight: '600',
    paddingHorizontal: wp(5),
    paddingVertical: wp(3),
  },
  buttonView: {
    marginHorizontal: wp(5),
    borderBottomWidth: wp(0.4),
    borderColor: '#91908d',
  },
});

export default styles;
