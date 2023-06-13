import {View} from 'react-native';
import React, {memo} from 'react';
import CustomLoginSignUpOption from '../../../components/CustomLogInSignUpOptions/CustomLoginSignUpOption';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';

const SignUpOption = ({navigation}: any) => {
  return (
    <View>
      <CustomLoginSignUpOption
        warning={COMMON_CONSTS.ALREADY_A_MEMBER}
        logInOrSignUp={COMMON_CONSTS.LOG_IN}
        logInOrSignUpQ={COMMON_CONSTS.SIGN_UPQ}
        navigation={navigation}
      />
    </View>
  );
};
export default memo(SignUpOption);
