import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';

const SelectSignUpLogIn = ({navigation}: any) => {
  const onPressSignUp = () => {
    navigation.navigate('SignUpOptions');
  };
  const onPressLogIn = () => {
    console.log('login button pressed');
    navigation.navigate('LogInOptions');
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/images/selectSignUpLogin.jpg')}
        />
      </View>
      <View style={styles.textButtonViewStyle}>
        <View style={styles.pickYourRideViewStyle}>
          <Text style={styles.pickYourRideStyle}>
            {COMMON_CONSTS.YOUR_PICK_OF_RIDES_AT}
          </Text>
          {/* <Text style={styles.pickYourRideStyle}>
            {COMMON_CONSTS.LOW_PRICES}
          </Text> */}
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            btnText={COMMON_CONSTS.SIGN_UP}
            styleBtn={styles.buttonStyle('SignUp')}
            styleTxt={styles.buttonTextStyle('SignUp')}
            onPressFunction={() => onPressSignUp()}
          />
          <CustomButton
            btnText={COMMON_CONSTS.LOG_IN}
            styleBtn={styles.buttonStyle('LogIn')}
            styleTxt={styles.buttonTextStyle('LogIn')}
            onPressFunction={() => onPressLogIn()}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(SelectSignUpLogIn);
