import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgBlackRightArrow, SvgInfo} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './styles';
interface Props {
  leavingFrom?: any;
  goingTo?: any;
}

const CustomLeavingFromGoingToArrow: React.FC<Props> = ({
  leavingFrom,
  goingTo,
}) => {
  return (
    <TouchableOpacity style={styles.containerMain}>
      <SvgInfo
        width={widthPercentageToDP(8)}
        height={heightPercentageToDP(3)}
        style={styles.svgStyle}
      />
      <View style={styles.container}>
        <View style={styles.leavingFromGoingToView}>
          <Text style={styles.textLeavingFromGoingTo}>{leavingFrom} </Text>
          <SvgBlackRightArrow
            width={widthPercentageToDP(4)}
            height={heightPercentageToDP(3)}
          />
          <Text style={styles.textLeavingFromGoingTo}> {goingTo}</Text>
        </View>
        <Text>time</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomLeavingFromGoingToArrow;
