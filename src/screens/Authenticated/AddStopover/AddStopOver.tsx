import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const AddStopOver = ({navigation}) => {
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleRightArrowPress = () => {
    navigation.navigate('DateComponent', {screen: COMMON_CONSTS.STOPOVER});
  };
  return (
    <View>
      <View style={styles.arrowStyle}>
        <TouchableOpacity
          onPress={() => handleBackArrowPress()}
          style={styles.arrowStyle}>
          <SvgLeftArrow width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.ADD_STOPOVERS_TO_GET_MORE_PASSENGERS}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRightArrowPress()}>
        <SvgRightArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(5)}
          style={styles.svgArrowStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddStopOver;
