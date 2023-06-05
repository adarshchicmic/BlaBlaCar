import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectSignUpLogIn from '../screens/ToAuthenticate/SelectSignUpLogin/SelectSignUpLogIn';
import LoginOption from '../screens/ToAuthenticate/LogInOption/LoginOption';
import SignUpOption from '../screens/ToAuthenticate/SignUpOption/SignUpOption';
import EmailAndPasswordLogIn from '../screens/ToAuthenticate/EmailAndPasswordLogIn/EmailAndPasswordLogIn';
import EmailSignUp from '../screens/ToAuthenticate/EmailSignUp/EmailSignUp';
import FirstNameLastName from '../screens/ToAuthenticate/FirstNameLastName/FirstNameLastName';
import DateOfBirth from '../screens/ToAuthenticate/DateOfBirth/DateOfBirth';
import LikeToBeAddressed from '../screens/ToAuthenticate/LikeToBeAddressed/LikeToBeAddressed';
import DefineYourPassword from '../screens/ToAuthenticate/DefineYourPassword/DefineYourPassword';
// import HomeScreen from '../screens/ToAuthenticate/HomeScreen/HomeScreen';
import DateComponent from '../components/DateComponent/DateComponent';
import NumberOfSeatsToBook from '../screens/ToAuthenticate/NumberOfSeatsToBook/NumberOfSeatsToBook';
import VerifyMobileNumber from '../screens/ToAuthenticate/VerifyMobileNumber/VerifyMobileNumber';
import SMSCode from '../screens/ToAuthenticate/SMSCode/SMSCode';
import ForgotPassword from '../screens/ToAuthenticate/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/ToAuthenticate/ResetPassword/ResetPassword';
import VerifyOtp from '../screens/ToAuthenticate/VerifyOtp/VerifyOtp';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SelectSignUpLogIn">
      <Stack.Screen name="SelectSignUpLogIn" component={SelectSignUpLogIn} />
      <Stack.Screen name="LogInOptions" component={LoginOption} />
      <Stack.Screen name="SignUpOptions" component={SignUpOption} />
      <Stack.Screen
        name="EmailAndPasswordLogIn"
        component={EmailAndPasswordLogIn}
      />
      <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
      <Stack.Screen name="FirstNameLastName" component={FirstNameLastName} />
      <Stack.Screen name="DateOfBirth" component={DateOfBirth} />
      <Stack.Screen name="LikeToBeAddressed" component={LikeToBeAddressed} />
      <Stack.Screen name="DefineYourPassword" component={DefineYourPassword} />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="DatePicker" component={DateComponent} />
      <Stack.Screen name="NumberOfSeats" component={NumberOfSeatsToBook} />
      <Stack.Screen name="VerifyMobileNumber" component={VerifyMobileNumber} />
      <Stack.Screen name="SMSCode" component={SMSCode} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
