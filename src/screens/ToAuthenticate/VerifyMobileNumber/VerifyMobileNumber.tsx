import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, memo} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {SvgDownArrow, SvgFlag, SvgRightArrow} from '../../../assets/svg';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {useVerifyMobileMutation} from '../../../services/modules/verifyMobile/verifyMobile';
import {useSelector} from 'react-redux';

import {useSignUpMutation} from '../../../services/modules/signUp';

const VerifyMobileNumber = ({navigation}: any) => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [validMobileNumber, setValidMobileNumber] = useState<boolean>(false);
  const [showErrorMobile, setShowErrorMobile] = useState<boolean>(false);
  const [dataFromSignUp, setDataFromSignUp] = useState<any>({});
  const [dataFromVerify, setDataFromVerify] = useState<any>({});

  const [
    verifyMobile,
    {isLoading: isLoadingVerifyMobile, isError: isErrorVerifyMobile},
  ] = useVerifyMobileMutation();
  const [signUp, {isLoading: isLoadingsignOut, isError}] = useSignUpMutation();

  const states: any = useSelector(state => state);
  const handleMobileNumberChange = value => {
    setMobileNumber(value);
    setValidMobileNumber(COMMON_CONSTS.MOBILE_REGEX.test(value));
  };
  const handleCrossButtonPress = async () => {
    const result: any = await signUp({
      email: states?.userSlice?.user?.email,
      password: states?.userSlice?.user?.password,
      firstName: states?.userSlice?.user?.firstName,
      lastName: states?.userSlice?.user?.lastName,
      dob: states?.userSlice?.user?.dob,
      title: states?.userSlice?.user?.title,
    });
    setDataFromSignUp(result);
    result?.error?.status === 422 ? navigation.popToTop() : null;
  };
  const handleForwardArrowButtonPress = async () => {
    if (validMobileNumber) {
      const val = await verifyMobile({mobileNumber: mobileNumber});

      setDataFromVerify(val);
      // navigation.navigate('SMSCode');
      setShowErrorMobile(false);
    } else {
      setShowErrorMobile(true);
    }
  };
  const handleDoItLater = async () => {
    const result: any = await signUp({
      email: states?.userSlice?.user?.email,
      password: states?.userSlice?.user?.password,
      firstName: states?.userSlice?.user?.firstName,
      lastName: states?.userSlice?.user?.lastName,
      dob: states?.userSlice?.user?.dob,
      title: states?.userSlice?.user?.title,
    });

    setDataFromSignUp(result);
  };
  return (
    <View style={styles.container}>
      <CustomButton
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        styleBtn={styles.crossButtonStyle}
        onPressFunction={() => handleCrossButtonPress()}
      />
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.PLEASE_VERIFY_YOUR}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.MOBILE_NUMBER}</Text>
      </View>

      <View style={styles.flagTextInputViewStyle}>
        <View style={styles.svgViewStyle}>
          <View style={styles.svgStyle}>
            <SvgFlag width={25} height={25} style={styles.svgArrowStyle} />
            <Text style={styles.textNineOneStyle}>
              {COMMON_CONSTS.NINE_ONE}
            </Text>
            <SvgDownArrow width={15} height={15} style={styles.svgArrowStyle} />
          </View>
        </View>
        <TextInput
          style={styles.textInputStyle}
          placeholder={COMMON_CONSTS.MOBILE_PHONE}
          placeholderTextColor={'#929693'}
          inputMode={'numeric'}
          onChangeText={handleMobileNumberChange}
        />
      </View>
      {isError && (
        <Text style={styles.errorStyle}>
          {COMMON_CONSTS.ERROR} {'   '}{' '}
          {dataFromSignUp?.error?.data?.staus?.error}
        </Text>
      )}
      {isErrorVerifyMobile && (
        <Text style={styles.errorStyle}>
          {COMMON_CONSTS.ERROR} {'   '}{' '}
          {dataFromVerify?.error?.data?.status?.error}
        </Text>
      )}
      {showErrorMobile && (
        <Text style={styles.errorStyle}>
          {COMMON_CONSTS.ERROR} {'  '} {'  '}
          {COMMON_CONSTS.ENTER_VALID_MOBILE}
        </Text>
      )}
      <View style={styles.doItLaterStyle}>
        <NameArrowButton
          name={COMMON_CONSTS.I_WILL_DO_IT_LATER}
          onPressFunction={() => handleDoItLater()}
        />
      </View>
      {(isLoadingVerifyMobile || isLoadingsignOut) && <ActivityIndicator />}
      {mobileNumber && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyleArrow}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow color="red" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default memo(VerifyMobileNumber);
