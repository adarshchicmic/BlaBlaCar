import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Authenticated/Profile/Profile';
import Search from '../screens/ToAuthenticate/Search/Search';
import HomeScreen from '../screens/ToAuthenticate/HomeScreen/HomeScreen';
import DateComponent from '../components/DateComponent/DateComponent';
import NumberOfSeatsToBook from '../screens/ToAuthenticate/NumberOfSeatsToBook/NumberOfSeatsToBook';
import Location from '../screens/ToAuthenticate/Location/Location';
import EditPersonalDetail from '../screens/Authenticated/EditPersonalDetail/EditPersonalDetail';
import WhatIsYourFirstName from '../screens/Authenticated/WhatIsYourFirstName/WhatIsYourFirstName';
import WhatIsYourLastName from '../screens/Authenticated/WhatIsYourLastName/WhatIsYourLastName';
import WhatIsYourDob from '../screens/Authenticated/WhatIsYourDob/WhatIsYourDob';
import WhatIsYourEmail from '../screens/Authenticated/WhatIsYourEmail/WhatIsYourEmail';
import AddUpdateBio from '../screens/Authenticated/AddUpdateBio/AddUpdateBio';
import LicensePlateNumber from '../screens/Authenticated/LicensePlateNumber/LicensePlateNumber';
import AddMyPreferences from '../screens/Authenticated/AddMyPreferences/AddMyPreferences';
import Chattiness from '../screens/Authenticated/AddMyPreferences/utils/screen/Chattiness/Chattiness';
import Music from '../screens/Authenticated/AddMyPreferences/utils/screen/Music/Music';
import Pets from '../screens/Authenticated/AddMyPreferences/utils/screen/Pets/Pets';
import Smoking from '../screens/Authenticated/AddMyPreferences/utils/screen/Smoking/Smoking';
import Publish from '../screens/Authenticated/Publish/Publish';
import DropOff from '../screens/ToAuthenticate/DropOff/DropOff';
import VehicleInformation from '../screens/Authenticated/VehicleInformation/VehicleInformation';
import EditProfilePicture from '../screens/Authenticated/EditProfilePicture/EditProfilePicture';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Publish" component={Publish} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DatePicker" component={DateComponent} />
      <Stack.Screen name="NumberOfSeats" component={NumberOfSeatsToBook} />
      <Stack.Screen name="EditPersonalDetail" component={EditPersonalDetail} />
      <Stack.Screen
        name="WhatIsYourFirstName"
        component={WhatIsYourFirstName}
      />
      <Stack.Screen name="WhatIsYourLastName" component={WhatIsYourLastName} />
      <Stack.Screen name="WhatIsYourDob" component={WhatIsYourDob} />
      <Stack.Screen name="WhatIsYourEmail" component={WhatIsYourEmail} />
      <Stack.Screen name="AddUpdateBio" component={AddUpdateBio} />
      <Stack.Screen name="LicensePlateNumber" component={LicensePlateNumber} />
      <Stack.Screen name="AddMyPreferences" component={AddMyPreferences} />
      <Stack.Screen name="Chattiness" component={Chattiness} />
      <Stack.Screen name="Music" component={Music} />
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="Smoking" component={Smoking} />
      <Stack.Screen name="DropOff" component={DropOff} />
      <Stack.Screen name="VehicleInformation" component={VehicleInformation} />
      <Stack.Screen name="EditProfilePicture" component={EditProfilePicture} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
