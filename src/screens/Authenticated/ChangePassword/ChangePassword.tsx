import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, memo, useRef} from 'react';
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
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useUpdatePasswordMutation} from '../../../services/modules/UpdatePassword';

const ChangePassword = ({navigation}: any) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [resetPassword, setResetPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validCurrentPassword, setValidCurrentPassword] =
    useState<boolean>(true);
  const [validResetPassword, setValidResetPassword] = useState<boolean>(true);
  const [validConfirmPassword, setValidConfirmPassword] =
    useState<boolean>(true);
  const [openEye1, setOpenEye1] = useState<boolean>(false);
  const [openEye2, setOpenEye2] = useState<boolean>(false);
  const [openEye3, setOpenEye3] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [updatePassword, {isLoading, isError}] = useUpdatePasswordMutation();
  const [resultApi, setResultApi] = useState<any>();
  const scrollRef: any = useRef();

  const handleCurrentPasswordChange = value => {
    setCurrentPassword(value);
    setValidCurrentPassword(COMMON_CONSTS.PASSWORD_REGEX.test(value));
    scrollRef?.current?.scrollToEnd();
  };
  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
    setValidConfirmPassword(COMMON_CONSTS.PASSWORD_REGEX.test(value));
    scrollRef?.current?.scrollToEnd();
  };
  const handleResetPasswordChange = value => {
    setResetPassword(value);
    setValidResetPassword(COMMON_CONSTS.PASSWORD_REGEX.test(value));
    scrollRef?.current?.scrollToEnd();
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  const handleShowOpenOrCloseEye1 = () => {
    setOpenEye1(!openEye1);
  };
  const handleShowOpenOrCloseEye2 = () => {
    setOpenEye2(!openEye2);
  };
  const handleShowOpenOrCloseEye3 = () => {
    setOpenEye3(!openEye3);
  };
  const handleForwardArrowButtonPress = async () => {
    !validCurrentPassword || !validResetPassword || !validConfirmPassword
      ? setShowWarning(true)
      : setShowWarning(false);

    confirmPassword === resetPassword
      ? setPasswordMatch(true)
      : setPasswordMatch(false);

    if (validConfirmPassword && validCurrentPassword && validResetPassword) {
      const result: any = await updatePassword({
        currentPassword: currentPassword,
        newPassword: resetPassword,
        confirmPassword: confirmPassword,
      });
      setResultApi(result);
      result?.data?.status?.code === 200
        ? navigation.navigate('HomeScreen')
        : null;
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView ref={scrollRef}>
        <View style={styles.fullView}>
          <TouchableOpacity onPress={() => handleBackArrowPress()}>
            <SvgLeftArrow
              width={widthPercentageToDP(8)}
              height={heightPercentageToDP(6)}
              style={styles.arrowStyle}
            />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>
              {COMMON_CONSTS.CHANGE_PASSWORD}
            </Text>
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
                inputTextPlaceholder={COMMON_CONSTS.CURRENT_PASSWORD}
                placeholderTextColor={'#969693'}
                secureTextEntry={!openEye1}
                onChangeTextFunction={text => handleCurrentPasswordChange(text)}
              />
              {currentPassword && (
                <View style={styles.svgOpenCloseStyle}>
                  <TouchableOpacity onPress={handleShowOpenOrCloseEye1}>
                    {openEye1 ? (
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
            <View>
              <CustomTextInput
                styleInputText={styles.textInputStyle}
                inputTextPlaceholder={COMMON_CONSTS.NEW_PASSWORD}
                placeholderTextColor={'#969693'}
                secureTextEntry={!openEye2}
                onChangeTextFunction={text => handleResetPasswordChange(text)}
              />
              {resetPassword && (
                <View style={styles.svgOpenCloseStyle}>
                  <TouchableOpacity onPress={handleShowOpenOrCloseEye2}>
                    {openEye2 ? (
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

            <View>
              <CustomTextInput
                styleInputText={styles.textInputStyle}
                inputTextPlaceholder={COMMON_CONSTS.CONFIRM_NEW_PASSWORD}
                placeholderTextColor={'#969693'}
                secureTextEntry={!openEye3}
                onChangeTextFunction={text => handleConfirmPasswordChange(text)}
              />
              {confirmPassword && (
                <View style={styles.svgOpenCloseStyle}>
                  <TouchableOpacity onPress={handleShowOpenOrCloseEye3}>
                    {openEye3 ? (
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
          {showWarning && (
            <Text style={styles.warningTextStyle}>
              {COMMON_CONSTS.PASSWORD_IS_NOT_VALID}
            </Text>
          )}
          {!passwordMatch && (
            <Text style={styles.warningTextStyle}>
              {
                COMMON_CONSTS.NEW_PASSWORD_AND_CONFIRM_NEW_PASSWORD_DID_NOT_MATCH
              }
            </Text>
          )}
          {isLoading && <ActivityIndicator />}
          {isError && (
            <Text style={styles.errorStyle}>
              {COMMON_CONSTS.ERROR} {':'}{' '}
              {resultApi?.error?.data?.status?.error}
            </Text>
          )}
          {currentPassword && resetPassword && confirmPassword && (
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

export default memo(ChangePassword);
