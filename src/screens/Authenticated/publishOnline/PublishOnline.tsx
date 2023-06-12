import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';

const PublishOnline = ({navigation}) => {
  const handleOnPressFunction = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{COMMON_CONSTS.YOUR_RIDE_IS_ONLINE}</Text>
      <CustomButton
        btnText={COMMON_CONSTS.OK}
        styleTxt={styles.buttonTextStyle}
        styleBtn={styles.buttonStyle}
        onPressFunction={() => handleOnPressFunction()}
      />
    </View>
  );
};

export default PublishOnline;
