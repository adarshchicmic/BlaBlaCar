import {View, Text} from 'react-native';
import React from 'react';
import {SvgBlackRightArrow, SvgTimes} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';

interface Props {
  leavingFrom: string;
  goingTo: string;
  passengerCount: number;
}

const CustomLeavingFromGoingTo: React.FC<Props> = ({
  leavingFrom,
  goingTo,
  passengerCount,
}) => {
  return (
    <View style={styles.svgTextView}>
      <SvgTimes
        width={widthPercentageToDP(6)}
        height={heightPercentageToDP(5)}
        style={styles.svgTimeStyle}
      />
      <View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>{leavingFrom}</Text>
          <SvgBlackRightArrow
            width={widthPercentageToDP(5)}
            height={heightPercentageToDP(5)}
            style={styles.svgArrowStyle}
          />
          <Text style={styles.textStyle}>{goingTo}</Text>
        </View>
        <Text style={styles.passengerTextStyle}>
          {passengerCount} {COMMON_CONSTS.PASSENGER}
        </Text>
      </View>
      <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
    </View>
  );
};

export default CustomLeavingFromGoingTo;
