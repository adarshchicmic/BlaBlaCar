import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgLeftArrow} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './styles';

const CustomBackArrowButton = ({navigation}) => {
  const handleOnPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleOnPress()}>
      <SvgLeftArrow
        width={widthPercentageToDP(8)}
        height={heightPercentageToDP(6)}
      />
    </TouchableOpacity>
  );
};

export default CustomBackArrowButton;
