import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';

const RequestSent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>RequestSent</Text>
      <CustomButton
        btnText={COMMON_CONSTS.OK}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.btnTextStyle}
      />
    </View>
  );
};

export default RequestSent;
