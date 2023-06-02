import {View, Text, TouchableOpacity} from 'react-native';
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
  onPress?: any;
}

const CustomLeavingFromGoingTo: React.FC<Props> = ({
  leavingFrom,
  goingTo,
  passengerCount,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={styles.svgTextView} onPress={onPress}>
      <SvgTimes
        width={widthPercentageToDP(6)}
        height={heightPercentageToDP(5)}
        style={styles.svgTimeStyle}
      />
      <View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>{leavingFrom.slice(0, 25)}</Text>
          <SvgBlackRightArrow
            width={widthPercentageToDP(5)}
            height={heightPercentageToDP(5)}
            style={styles.svgArrowStyle}
          />
          <Text style={styles.textStyle}>{goingTo.slice(0, 25)}</Text>
        </View>
        <Text style={styles.passengerTextStyle}>
          {passengerCount} {COMMON_CONSTS.PASSENGER}
        </Text>
      </View>
      <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
    </TouchableOpacity>
  );
};

export default CustomLeavingFromGoingTo;
