import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {SvgBlackRightArrow, SvgUser} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';

const CustomGroup = ({navigation, name, leavingFrom, goingTo, time, data}) => {
  const handleOnPress = () => {
    navigation.navigate('ChatScreen', {navigation: navigation, data: data});
  };
  return (
    <Pressable style={styles.container} onPress={() => handleOnPress()}>
      <Text style={styles.nameTextStyle}>{name}</Text>
      <View style={styles.textSvgStyle}>
        <View>
          <View style={styles.goingFromLeavingToStyle}>
            <Text style={styles.locationTextStyle}>{leavingFrom}</Text>
            <SvgBlackRightArrow
              width={widthPercentageToDP(5)}
              height={heightPercentageToDP(2)}
              style={styles.svgStyle}
            />
            <Text style={styles.locationTextStyle}>{goingTo}</Text>
          </View>
          <Text>{time}</Text>
        </View>
        <View style={styles.svgArrowStyle}>
          {/* <Image source={{uri: kldsjf}} style={styles.imageStyle} /> */}
          <SvgUser
            width={widthPercentageToDP(7)}
            height={heightPercentageToDP(3)}
            style={styles.svgStyle}
          />
          <Text style={styles.textArrowStyle}>{COMMON_CONSTS.ARROW}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CustomGroup;
