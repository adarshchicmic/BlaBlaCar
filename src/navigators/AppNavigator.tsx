import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Authenticated/Profile/Profile';
import Search from '../screens/ToAuthenticate/Search/Search';
import HomeScreen from '../screens/ToAuthenticate/HomeScreen/HomeScreen';
import DateComponent from '../components/DateComponent/DateComponent';
import NumberOfSeatsToBook from '../screens/ToAuthenticate/NumberOfSeatsToBook/NumberOfSeatsToBook';
import Location from '../screens/ToAuthenticate/Location/Location';
import LikeToBeAddressed from '../screens/ToAuthenticate/LikeToBeAddressed/LikeToBeAddressed';
import EditPersonalDetail from '../screens/Authenticated/EditPersonalDetail/EditPersonalDetail';
import WhatIsYourFirstName from '../screens/Authenticated/WhatIsYourFirstName/WhatIsYourFirstName';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DatePicker" component={DateComponent} />
      <Stack.Screen name="NumberOfSeats" component={NumberOfSeatsToBook} />
      <Stack.Screen name="LikeToBeAddressed" component={LikeToBeAddressed} />
      <Stack.Screen name="EditPersonalDetail" component={EditPersonalDetail} />
      <Stack.Screen
        name="WhatIsYourFirstName"
        component={WhatIsYourFirstName}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
