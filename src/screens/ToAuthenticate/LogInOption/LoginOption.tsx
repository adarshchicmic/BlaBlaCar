import {View} from 'react-native';
import React from 'react';
import CustomLoginSignUpOption from '../../../components/CustomLogInSignUpOptions/CustomLoginSignUpOption';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';

const LoginOption = ({navigation}: any) => {
  return (
    <View>
      <CustomLoginSignUpOption
        warning={COMMON_CONSTS.NOT_A_MEMBER_YET}
        logInOrSignUp={COMMON_CONSTS.SIGN_UP}
        logInOrSignUpQ={COMMON_CONSTS.LOG_INQ}
        navigation={navigation}
      />
    </View>
  );
};

export default LoginOption;
