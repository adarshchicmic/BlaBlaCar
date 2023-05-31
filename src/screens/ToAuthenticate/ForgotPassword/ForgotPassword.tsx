import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, memo} from 'react';
import {SvgLeftArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {useForgotPasswordMutation} from '../../../services/modules/ForgotPassword/ForgotPassword';

const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [showValidationError, setShowValidationError] =
    useState<boolean>(false);
  const [forgotPassword, {isLoading, isError}] = useForgotPasswordMutation();
  const handleTextChange = value => {
    setEmail(value);
    setValidEmail(COMMON_CONSTS.EMAIL_REGEX.test(value));
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = async () => {
    if (validEmail) {
      const datat = await forgotPassword({email: email});
      // navigation.navigate('ResetPassword');
      console.log(datat, 'this is result from datat');
    } else {
      setShowValidationError(true);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonGoBackStyle}
        onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow height={25} width={25} />
      </TouchableOpacity>
      <View>
        <Text style={styles.textStyle(1)}>
          {COMMON_CONSTS.PLEASE_ENTER_THE}
        </Text>
        <Text style={styles.textStyle(1)}>
          {COMMON_CONSTS.EMAIL_YOU_SIGNED_UP}
        </Text>
        <Text style={styles.textStyle(1)}>{COMMON_CONSTS.WITH}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.EMAIL}
          onChangeTextFunction={text => handleTextChange(text)}
          autoCapitalizeTextInput={false}
        />
        {showValidationError && (
          <Text style={styles.errorTextStyle}>
            {COMMON_CONSTS.ENTER_VALID_EMAIL}
          </Text>
        )}
      </View>
      {isLoading ? <ActivityIndicator /> : null}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
      {email && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleForwardArrowButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SUBMIT}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default memo(ForgotPassword);
