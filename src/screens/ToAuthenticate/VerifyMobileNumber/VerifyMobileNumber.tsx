import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';

const VerifyMobileNumber = () => {
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        styleBtn={styles.crossButtonStyle}
      />
      <View>
        <Text>{COMMON_CONSTS.PLEASE_VERIFY_YOUR}</Text>
        <Text>{COMMON_CONSTS.MOBILE_NUMBER}</Text>
      </View>
      <View>
        <CustomButton />
      </View>
    </View>
  );
};

export default VerifyMobileNumber;
