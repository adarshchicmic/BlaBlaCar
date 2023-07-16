/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Search from '../screens/ToAuthenticate/Search/Search';
import Publish from '../screens/Authenticated/Publish/Publish';
import YourRides from '../screens/ToAuthenticate/Your Rides/YourRides';
import Inbox from '../screens/Authenticated/Inbox/Inbox';

import {
  SvgChat,
  SvgProfile,
  SvgPublish,
  SvgRides,
  SvgSearch,
} from '../assets/svg';
import AboutYou from '../screens/Authenticated/AboutYou/AboutYou';
import {COMMON_CONSTS} from '../shared/Constants/Constants';
import Account from '../screens/Authenticated/Account/Account';
import {RFValue} from 'react-native-responsive-fontsize';
interface Props {
  width: number;
  height: number;
}
const Tab: any = createMaterialTopTabNavigator();
const ProfileNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: RFValue(15), fontWeight: '600'},
      }}>
      <Tab.Screen
        options={{tabBarLabel: 'About you'}}
        name={'About You'}
        component={AboutYou}
      />
      <Tab.Screen name={COMMON_CONSTS.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
};

export default ProfileNavigation;
