import {
  View,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgCloseEye, SvgLeftArrow, SvgOpenEye} from '../../../assets/svg';
import {useLogInMutation} from '../../../services/modules/login';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const EmailAndPasswordLogIn = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [openEye, setOpenEye] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [response, setResponse] = useState<any>();
  const [showError, setShowError] = useState<boolean>(false);
  const [logIn, {isLoading, isError}] = useLogInMutation();

  const handleTextChange = value => {
    setEmail(value);
    setValidEmail(COMMON_CONSTS.EMAIL_REGEX.test(value));
  };
  const handlePasswordChange = value => {
    setPassword(value);
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForgotPasswordButtonPress = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleShowOpenOrCloseEye = () => {
    setOpenEye(!openEye);
  };
  const handelLoginButtonPress = async () => {
    if (validEmail) {
      const res: any = await logIn({
        email: email,
        password: password,
      });
      setResponse(res);

      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
        <TouchableOpacity onPress={() => handleBackArrowPress()}>
          <SvgLeftArrow
            width={widthPercentageToDP(8)}
            height={heightPercentageToDP(5)}
            style={styles.arrowStyle}
          />
        </TouchableOpacity>
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
          <View>
            <CustomTextInput
              styleInputText={styles.textInputStyle}
              inputTextPlaceholder={COMMON_CONSTS.PASSWORD}
              placeholderTextColor={'#969693'}
              secureTextEntry={!openEye}
              onChangeTextFunction={text => handlePasswordChange(text)}
            />
            {isError && (
              <Text style={styles.errorStyle}>
                {response?.error?.data?.status?.error}
              </Text>
            )}
            {showError && (
              <Text style={styles.errorStyle}>
                {COMMON_CONSTS.ENTER_VALID_EMAIL}
              </Text>
            )}
            {password && (
              <View style={styles.svgOpenCloseStyle}>
                <TouchableOpacity onPress={handleShowOpenOrCloseEye}>
                  {openEye ? (
                    <SvgOpenEye
                      width={widthPercentageToDP(7)}
                      height={heightPercentageToDP(4)}
                    />
                  ) : (
                    <SvgCloseEye
                      width={widthPercentageToDP(7)}
                      height={heightPercentageToDP(4)}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <CustomButton
          btnText={COMMON_CONSTS.FORGOT_PASSWORD}
          styleBtn={styles.forgotPasswordButtonStyle}
          styleTxt={styles.forgotPasswordTextStyle}
          onPressFunction={() => handleForgotPasswordButtonPress()}
        />
        {email && password && (
          <CustomButton
            btnText={COMMON_CONSTS.LOG_IN}
            styleBtn={styles.buttonStyle}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handelLoginButtonPress()}
          />
        )}
        {isLoading && <ActivityIndicator />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(EmailAndPasswordLogIn);
