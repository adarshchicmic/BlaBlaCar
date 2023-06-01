import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import AppNavigator from './AppNavigator';

const ApplicationNavigator = () => {
  const states: any = useSelector(state => state);

  return (
    <NavigationContainer>
      {states?.userSlice?.token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
