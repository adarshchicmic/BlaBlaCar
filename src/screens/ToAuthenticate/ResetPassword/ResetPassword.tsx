import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {
  SvgCloseEye,
  SvgLeftArrow,
  SvgOpenEye,
  SvgRightArrow,
} from '../../../assets/svg';
import {ScrollView} from 'react-native-gesture-handler';
import {useResetPasswordMutation} from '../../../services/modules/resetPassword/resetPassword';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ResetPassword = ({navigation, route}: any) => {
  const email = route.params.email;
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [openEye, setOpenEye] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [resetPassword, {isLoading, isError}] = useResetPasswordMutation();

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
    !validPassword ? setShowWarning(true) : setShowWarning(false);

    if (validPassword) {
      const result: any = await resetPassword({
        email: email,
        password: password,
      });
      result?.data?.code === 200
        ? navigation.navigate('EmailAndPasswordLogIn')
        : null;
      console.log(result, 'this is result');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.fullView}>
          <TouchableOpacity onPress={() => handleBackArrowPress()}>
            <SvgLeftArrow
              width={widthPercentageToDP(8)}
              height={heightPercentageToDP(6)}
              style={styles.arrowStyle}
            />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>{COMMON_CONSTS.RESET_PASSWORD}</Text>
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
          {isLoading && <ActivityIndicator />}
          {isError && (
            <Text style={styles.errorStyle}>
              {COMMON_CONSTS.ERROR} {}
            </Text>
          )}
          {password && (
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.buttonStyleArrow}
                onPress={() => handleForwardArrowButtonPress()}>
                <SvgRightArrow color="red" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(ResetPassword);
