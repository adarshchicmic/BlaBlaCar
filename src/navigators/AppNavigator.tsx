import React from 'react';
import SelectSignUpLogIn from '../screens/ToAuthenticate/SelectSignUpLogin/SelectSignUpLogIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="first" component={SelectSignUpLogIn} />
      <Stack.Screen name="second" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
