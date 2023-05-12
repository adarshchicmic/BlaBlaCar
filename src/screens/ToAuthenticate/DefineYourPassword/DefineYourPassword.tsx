import {View, Text, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {
  SvgCloseEye,
  SvgLeftArrow,
  SvgOpenEye,
  SvgRightArrow,
} from '../../../assets/svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useSignUpMutation} from '../../../services/modules/signUp';
const DefineYourPassword = ({navigation}: any) => {
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [openEye, setOpenEye] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [signUp, {data, isLoading, isError, isSuccess, isUninitialized}] =
    useSignUpMutation();
  const states: any = useSelector(state => state);
  console.log(states.userSlice.user, 'Yes states hai ');
  const handlePasswordChange = value => {
    setPassword(value);
    setValidPassword(COMMON_CONSTS.PASSWORD_REGEX.test(value));
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  const handleShowOpenOrCloseEye = () => {
    setOpenEye(!openEye);
  };
  const handleForwardArrowButtonPress = async () => {
    console.log('button Pressed login ');
    !validPassword ? setShowWarning(true) : setShowWarning(false);
    console.log(validPassword, 'this is validPassword');
    if (validPassword) {
      const dataa: any = await signUp({
        email: states?.userSlice?.user?.email,
        password: password,
        first_name: states?.userSlice?.user?.firstName,
        last_name: states?.userSlice?.user?.lastName,
        dob: states?.userSlice?.user?.dob,
        title: states?.userSlice?.user?.title,
        mobile_number: '9984703591',
      });
      console.log(dataa, 'this is result');
    }
    console.log(
      'email:',
      states?.userSlice?.user?.email,
      'password: ',
      password,
      'first_name:',
      states?.userSlice?.user?.firstName,
      'last_name:',
      states?.userSlice?.user?.lastName,
      'dob:',
      states?.userSlice?.user?.dob,
      'title:',
      states?.userSlice?.user?.title,
    );
    console.log(
      data,
      isLoading,
      isError,
      isSuccess,
      isUninitialized,
      'data from api ',
    );
    console.log(validPassword, showWarning);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.DEFINE_YOUR}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.PASSWORDS}</Text>
      </View>
      <View style={styles.textPasswordMustContainView}>
        <Text style={styles.textPasswordMustContain}>
          {COMMON_CONSTS.IT_MUST_HAVE_ATLEAST_EIGHT_CHARACTERS_ONE}
        </Text>
        <Text style={styles.textPasswordMustContain}>
          {COMMON_CONSTS.LETTER_ONE_NUMBER_AND_ONE_SPECIAL_CHARACTER}
        </Text>
      </View>
      <View>
        <View>
          <CustomTextInput
            styleInputText={styles.textInputStyle}
            inputTextPlaceholder={COMMON_CONSTS.PASSWORD}
            placeholderTextColor={'#969693'}
            secureTextEntry={!openEye}
            onChangeTextFunction={text => handlePasswordChange(text)}
          />
          {showWarning && (
            <Text style={styles.warningTextStyle}>
              {COMMON_CONSTS.PASSWORD_IS_NOT_VALID}
            </Text>
          )}

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

      {password && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyleArrow}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow color="red" />
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default DefineYourPassword;
