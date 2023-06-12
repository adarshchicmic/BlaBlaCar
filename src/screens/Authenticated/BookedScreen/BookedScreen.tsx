import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';

const BookedScreen = ({navigation}) => {
  const handleOnPressFunction = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.BOOKED_ENJOY_YOUR_RIDE}
        </Text>
      </View>

      <CustomButton
        btnText={COMMON_CONSTS.OK}
        styleTxt={styles.buttonTextStyle}
        styleBtn={styles.buttonStyle}
        onPressFunction={() => handleOnPressFunction()}
      />
    </View>
  );
};

export default BookedScreen;
