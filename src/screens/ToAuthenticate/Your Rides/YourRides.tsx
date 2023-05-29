import {View, Text} from 'react-native';
import React, {memo} from 'react';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';

const YourRides = () => {
  return (
    <View>
      <CustomTitleText
        text={COMMON_CONSTS.YOUR_FUTURE_TRAVEL_PLANS_WILL_APPEAR_HERE}
      />
      <View style={styles.textView}>
        <Text>{COMMON_CONSTS.FIND_THE_PERFECT_RIDE_FROM}</Text>
      </View>
    </View>
  );
};

export default memo(YourRides);
