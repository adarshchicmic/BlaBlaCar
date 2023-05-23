import {
  View,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgCloseEye, SvgLeftArrow, SvgOpenEye} from '../../../assets/svg';
import {useLogInMutation} from '../../../services/modules/login';
import {useSelector} from 'react-redux';

const EmailAndPasswordLogIn = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [openEye, setOpenEye] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [logIn, {data, isLoading, isSuccess, isError, isUninitialized}] =
    useLogInMutation();

  const states = useSelector(state => state);
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
      console.log(password, 'this is password');
      const res: any = await logIn({
        email: email,
        password: password,
      });
      console.log(res, 'this is result ');
      if (res?.data?.status?.code === 200) {
        // navigation.navigate('HomeScreen');
        console.log(res?.data?.status, 'this is result guys');
        console.log(states, 'this is state value in pafd');
      }
      console.log(data, isLoading, isSuccess, isUninitialized, 'jla;ksdfsj');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
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
          {isError && <Text style={styles.errorStyle}>error</Text>}
          {password && (
            <View style={styles.svgOpenCloseStyle}>
              <TouchableOpacity onPress={handleShowOpenOrCloseEye}>
                {openEye ? (
                  <SvgOpenEye width={25} height={25} />
                ) : (
                  <SvgCloseEye width={25} height={25} />
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
    </KeyboardAvoidingView>
  );
};

export default EmailAndPasswordLogIn;
