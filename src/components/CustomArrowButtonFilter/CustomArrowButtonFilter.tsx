import {View, Text} from 'react-native';
import React from 'react';
import {SvgLeftArrowWithout} from '../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CustomButton from '../CustomButton/CustomButton';
import styles from './styles';

const CustomArrowButtonFilter = () => {
  return (
    <View style={styles.container}>
      <SvgLeftArrowWithout
        width={widthPercentageToDP(5)}
        height={heightPercentageToDP(5)}
      />
      <Text>CustomArrowButtonFilters</Text>
      <CustomButton
        btnText="filter"
        styleTxt={styles.filterStyle}
        styleBtn={styles.filterButtonStyle}
      />
    </View>
  );
};

export default CustomArrowButtonFilter;
