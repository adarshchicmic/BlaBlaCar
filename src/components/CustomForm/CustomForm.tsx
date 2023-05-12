import {View, Text} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import CustomButton from '../CustomButton/CustomButton';
import styles from './styles';
import CustomTextInput from '../CustomTextInput/CustomTextInput';

const EmailAndPasswordLogIn = ({navigation}: any) => {
  const handleTextChange = value => {
    console.log(value, 'this is email text input ');
  };
  const handlePasswordChange = value => {
    console.log(value, 'this is email text input ');
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForgotPasswordButtonPress = () => {
    console.log('forgot Password Pressed');
  };
  return (
    <View style={styles.container}>
      <CustomButton
        btnText={COMMON_CONSTS.BACK_ARROW}
        styleTxt={styles.arrowStyle}
        onPressFunction={() => handleBackArrowPress()}
      />
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_EMAIL}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.AND_PASSWORDQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.EMAIL}
          onChangeTextFunction={text => handleTextChange(text)}
        />
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          inputTextPlaceholder={COMMON_CONSTS.PASSWORD}
          placeholderTextColor={'#969693'}
          onChangeTextFunction={text => handlePasswordChange(text)}
        />
      </View>
      <CustomButton
        btnText={COMMON_CONSTS.FORGOT_PASSWORD}
        styleBtn={styles.forgotPasswordButtonStyle}
        styleTxt={styles.forgotPasswordTextStyle}
        onPressFunction={() => handleForgotPasswordButtonPress()}
      />
    </View>
  );
};

export default EmailAndPasswordLogIn;
