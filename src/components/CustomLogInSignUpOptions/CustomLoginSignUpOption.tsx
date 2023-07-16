import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
import styles from './styles';
import CustomButton from '../CustomButton/CustomButton';
import {SvgMail} from './../../assets/svg/index';
interface Props {
  logInOrSignUp: string;
  logInOrSignUpQ: string;
  warning: string;
  navigation?: any;
}
const CustomLoginSignUpOption: React.FC<Props> = ({
  logInOrSignUpQ,
  logInOrSignUp,
  warning,
  navigation,
}: Props) => {
  const onLogInSignUpPress = () => {
    if (logInOrSignUp === COMMON_CONSTS.SIGN_UP) {
      navigation.navigate('SignUpOptions');
    } else {
      navigation.navigate('LogInOptions');
    }
  };
  const onContinueWithEmailPress = () => {
    if (logInOrSignUp === COMMON_CONSTS.SIGN_UP) {
      navigation.navigate('EmailAndPasswordLogIn');
    } else {
      navigation.navigate('EmailSignUp');
    }
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
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
        <Text style={styles.textStyle(1)}>
          {COMMON_CONSTS.HOW_DO_YOU_WANT_TO}
        </Text>
        <Text style={styles.textStyle(1)}>{logInOrSignUpQ}</Text>
      </View>
      <View style={styles.continueWithEmailView}>
        <TouchableOpacity
          style={styles.continueWithEmailView}
          onPress={() => onContinueWithEmailPress()}>
          <SvgMail style={styles.svgStyle} />
          <Text style={styles.continueWithEmail}>
            {COMMON_CONSTS.CONTINUE_WITH_EMAIL}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTextView}>
        <Text style={styles.textStyle(2)}>{warning}</Text>
        <CustomButton
          btnText={logInOrSignUp}
          styleTxt={styles.buttonTextStyle}
          styleBtn={styles.buttonStyle}
          onPressFunction={() => onLogInSignUpPress()}
        />
      </View>
    </View>
  );
};

export default CustomLoginSignUpOption;
