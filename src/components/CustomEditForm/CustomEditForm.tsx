import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';

const CustomEditForm = ({navigation}: any) => {
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        styleBtn={styles.crossButtonStyle}
        onPressFunction={() => handleCrossButtonPress()}
      />
      <View>
        <Text>CustomEditForm</Text>
        <Text> CustomForm2</Text>
      </View>
    </View>
  );
};

export default CustomEditForm;
