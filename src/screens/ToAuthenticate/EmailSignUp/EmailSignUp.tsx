import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo, useRef} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {useDispatch} from 'react-redux';
import {updateEmail} from '../../../store/slices/UserSlice';
import {useEmailExistMutation} from '../../../services/modules/checkEmailExist';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';

const EmailSignUp = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [emailExist, {isLoading, isError}] = useEmailExistMutation();
  const [showValidationError, setShowValidationError] =
    useState<boolean>(false);
  const [emailAlreadyExist, setEmailAlreadyExist] = useState<boolean>(false);
  const dispatch = useDispatch();
  const refInput: any = useRef();

  const handleTextChange = value => {
    if (emailAlreadyExist) {
      setEmailAlreadyExist(false);
    }
    if (showValidationError) {
      setShowValidationError(!COMMON_CONSTS.EMAIL_REGEX.test(value));
    }
    setEmail(value);
    setValidEmail(COMMON_CONSTS.EMAIL_REGEX.test(value));
  };

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = async () => {
    // const res = await emailExist({email: email});

    refInput?.current?.blur();
    if (validEmail) {
      const result: any = await emailExist({email: email});
      result?.error?.data?.status?.code === 422
        ? setEmailAlreadyExist(true)
        : navigation.navigate('FirstNameLastName');
      dispatch(updateEmail({email: email}));
    } else {
      setShowValidationError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={handleBackArrowPress}>
        <SvgLeftArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(5)}
          style={styles.arrowStyle}
        />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_EMAILQ}</Text>
      </View>
      <View>
        <CustomTextInput
          autoCapitalizeTextInput={'none'}
          refInput={refInput}
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.EMAIL}
          onChangeTextFunction={text => handleTextChange(text)}
        />
        {showValidationError && (
          <Text style={styles.errorTextStyle}>
            {COMMON_CONSTS.ENTER_VALID_EMAIL}
          </Text>
        )}
      </View>
      {isError && (
        <Text style={styles.errorTextStyle}>{COMMON_CONSTS.ERROR}</Text>
      )}
      {emailAlreadyExist && (
        <Text style={styles.errorTextStyle}>
          {COMMON_CONSTS.EMAIL_ALREADY_EXIST}
        </Text>
      )}
      {email && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow color="red" />
          </TouchableOpacity>
        </View>
      )}
      {isLoading && <BlurView />}
      {isLoading && <LoadingIndicator />}
    </KeyboardAvoidingView>
  );
};

export default memo(EmailSignUp);
