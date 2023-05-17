import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {SvgDownArrow, SvgFlag, SvgRightArrow} from '../../../assets/svg';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {useVerifyMobileMutation} from '../../../services/modules/verifyMobile/verifyMobile';
import {useSelector, useDispatch} from 'react-redux';

import {useSignUpMutation} from '../../../services/modules/signUp';

const VerifyMobileNumber = ({navigation}: any) => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [validMobileNumber, setValidMobileNumber] = useState<boolean>(false);
  const [verifyMobile, {data: verifyData, isLoading: isLoadingVerifyMobile}] =
    useVerifyMobileMutation();
  const [
    signUp,
    {data: signUpData, isLoading: isLoadingsignOut, isError, isSuccess},
  ] = useSignUpMutation();
  const states: any = useSelector(state => state);
  console.log(states?.userSlice?.user, 'this is response from signUp detail');
  const handleMobileNumberChange = value => {
    console.log(value, 'this is mobile number');
    setMobileNumber(value);
    setValidMobileNumber(COMMON_CONSTS.MOBILE_REGEX.test(value));
  };
  const handleCrossButtonPress = async () => {
    await signUp({
      email: states?.userSlice?.user?.email,
      password: states?.userSlice?.user?.password,
      firstName: states?.userSlice?.user?.firstName,
      lastName: states?.userSlice?.user?.lastName,
      dob: states?.userSlice?.user?.dob,
      title: states?.userSlice?.user?.title,
    });
  };
  const handleForwardArrowButtonPress = async () => {
    if (validMobileNumber) {
      console.log(mobileNumber, 'this is mobileNumber');
      const val = await verifyMobile({mobileNumber: mobileNumber});
      console.log(val, 'this is result from verify');
      navigation.navigate('SMSCode');
    }
  };
  const handleDoItLater = async () => {
    console.log('button Pressed ');
    const dataa: any = await signUp({
      email: states?.userSlice?.user?.email,
      password: states?.userSlice?.user?.password,
      firstName: states?.userSlice?.user?.firstName,
      lastName: states?.userSlice?.user?.lastName,
      dob: states?.userSlice?.user?.dob,
      title: states?.userSlice?.user?.title,
    });
    console.log(dataa, 'this is dataa');
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
      {isError && <Text> error</Text>}
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

export default VerifyMobileNumber;
