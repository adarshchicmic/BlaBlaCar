/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/ToAuthenticate/Search/Search';
import Publish from '../screens/Authenticated/Publish/Publish';
import YourRides from '../screens/ToAuthenticate/Your Rides/YourRides';
import Inbox from '../screens/Authenticated/Inbox/Inbox';
import Profile from '../screens/Authenticated/Profile/Profile';
import {
  SvgChat,
  SvgProfile,
  SvgPublish,
  SvgRides,
  SvgSearch,
} from '../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
interface Props {
  width: number;
  height: number;
}
const Tab: any = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <SvgSearch
              width={widthPercentageToDP(6)}
              height={heightPercentageToDP(6)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Publish"
        component={Publish}
        options={{
          tabBarIcon: () => (
            <SvgPublish
              width={widthPercentageToDP(6)}
              height={heightPercentageToDP(6)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="YourRides"
        component={YourRides}
        options={{
          tabBarIcon: () => (
            <SvgRides
              width={widthPercentageToDP(6)}
              height={heightPercentageToDP(6)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: () => (
            <SvgChat
              width={widthPercentageToDP(6)}
              height={heightPercentageToDP(6)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <SvgProfile
              width={widthPercentageToDP(6)}
              height={heightPercentageToDP(6)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
