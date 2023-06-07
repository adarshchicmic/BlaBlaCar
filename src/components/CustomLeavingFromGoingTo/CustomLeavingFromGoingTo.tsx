import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {SvgBlackRightArrow, SvgTimes} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {updateGoingTo, updateLeavingFrom} from '../../store/slices/rideSlice';

interface Props {
  leavingFrom: string;
  goingTo: string;
  passengerCount: number;
  // onPress?: any;
  show?: any;
  moreStyle?: any;
  navigation?: any;
}

const CustomLeavingFromGoingTo: React.FC<Props> = ({
  leavingFrom,
  goingTo,
  show,
  passengerCount,
  moreStyle,
  navigation,
  // onPress = () => {},
}) => {
  const dispatch = useDispatch();
  const handleOnPress = () => {
    navigation.navigate('DateComponent', {screen: COMMON_CONSTS.SEARCH});
    dispatch(updateLeavingFrom({leavingFrom: leavingFrom}));
    dispatch(updateGoingTo({goingTo: goingTo}));
  };
  return (
    <TouchableOpacity style={styles.svgTextView} onPress={handleOnPress}>
      {show && (
        <SvgTimes
          width={widthPercentageToDP(6)}
          height={heightPercentageToDP(5)}
          style={styles.svgTimeStyle}
        />
      )}
      <View>
        <View style={[styles.textViewStyle, moreStyle]}>
          <Text style={styles.textStyle}>{leavingFrom?.slice(0, 25)}</Text>
          <SvgBlackRightArrow
            width={widthPercentageToDP(5)}
            height={heightPercentageToDP(5)}
            style={styles.svgArrowStyle}
          />
          <Text style={styles.textStyle}>{goingTo?.slice(0, 25)}</Text>
        </View>
        <Text style={[styles.passengerTextStyle, moreStyle]}>
          {passengerCount} {COMMON_CONSTS.PASSENGER}
        </Text>
      </View>
      {show && <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>}
    </TouchableOpacity>
  );
};

export default memo(CustomLeavingFromGoingTo);
