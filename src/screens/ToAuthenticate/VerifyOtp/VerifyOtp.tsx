import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import styles from './styles';
import {useVerifyOtpMutation} from '../../../services/modules/verifyOtp';

const VerifyOtp = ({navigation, route}) => {
  const email = route?.params?.email;
  const [otp, setOtp] = useState('');
  const [verifyOtp, {isLoading, isError}] = useVerifyOtpMutation();

  const handleChangeOtp = value => {
    setOtp(value);
  };
  const handleVerifyButtonPress = async () => {
    const result: any = await verifyOtp({otp: otp, email: email});

    result?.data?.code === 200
      ? navigation.navigate('ResetPassword', {email: email})
      : null;
  };
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.VERIFY_OTP} />
      <View style={styles.inputTextView}>
        <CustomTextInput
          styleInputText={styles.inputTextStyle}
          inputTextPlaceholder={COMMON_CONSTS.OTP}
          maxLength={4}
          onChangeTextFunction={value => handleChangeOtp(value)}
          keyboardTypeTextInput={'numeric'}
        />
      </View>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
      {otp && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleVerifyButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS?.VERIFY}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default VerifyOtp;
