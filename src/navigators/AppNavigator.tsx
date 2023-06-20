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
import MapScreen from '../screens/Authenticated/Map/Map';
import AddStopOver from '../screens/Authenticated/AddStopover/AddStopOver';
import TimePublish from '../screens/Authenticated/TimePublish/TimePublish';
import MiddleSeatEmpty from '../screens/Authenticated/MiddleSeatEmpty/MiddleSeatEmpty';
import BookInstantly from '../screens/Authenticated/BookInstantly/BookInstantly';
import PricePerSeat from '../screens/Authenticated/PricePerSeat/PricePerSeat';
import AddAboutRide from '../screens/Authenticated/AddAboutRide/AddAboutRide';
import SearchResult from '../screens/Authenticated/SearchResult/SearchResult';
import VehiclePage from '../screens/Authenticated/VehiclePage/VehiclePage';
import DeleteACar from '../screens/Authenticated/DeleteACar/DeleteACar';
import WhichCarYouDriving from '../screens/Authenticated/WhichCarYouDriving/WhichCarYouDriving';
import RideDetail from '../screens/Authenticated/RideDetail/RideDetail';
import CheckDetailAndBook from '../screens/Authenticated/CheckDetailAndBook/CheckDetailAndBook';
import ChangePassword from '../screens/Authenticated/ChangePassword/ChangePassword';
import SearchMap from '../screens/Authenticated/SearchMap/SearchMap';
import RidePlan from '../screens/Authenticated/RidePlan/RidePlan';
import ComingBackAsWell from '../screens/Authenticated/ComingBackAsWell/ComingBackAsWell';
import EditYourPublication from '../screens/Authenticated/EditYourPublication/EditYourPublication';
import ItineraryDetails from '../screens/Authenticated/ItineraryDetails/ItineraryDetails';
import YourProfile from '../screens/Authenticated/YourProfile/YourProfile';
import ChatScreen from '../screens/Authenticated/ChatScreen/ChatScreen';
import Filter from '../screens/Authenticated/FilterPage/Filter';
import BookedScreen from '../screens/Authenticated/BookedScreen/BookedScreen';
import PublishOnline from '../screens/Authenticated/publishOnline/PublishOnline';
import DropOffSearch from '../screens/ToAuthenticate/DropOffSearch/DropOffSearch';
import AddStopOverSearch from '../screens/Authenticated/AddStopOverSearch/AddStopOverSearch';
import WhenAreYouComing from '../screens/Authenticated/WhenAreYouComing/WhenAreYouComing';
import ReturnTime from '../screens/Authenticated/ReturnTime/ReturnTime';
import ReturnPrice from '../screens/Authenticated/ReturnPrice/ReturnPrice';
import SelectPickUpMap from '../screens/Authenticated/SelectPickUpMap/SelectPickUpMap';
import SelectDropOffMap from '../screens/Authenticated/SelectDropOffMap/SelectDropOffMap';
import AddCityMap from '../screens/Authenticated/AddCityMap/AddCityMap';
import LocationMap from '../screens/Authenticated/LocationMap/LocationMap';

const Stack: any = createNativeStackNavigator();
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
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="AddStopOver" component={AddStopOver} />
      <Stack.Screen name="DateComponent" component={DateComponent} />
      <Stack.Screen name="TimePublish" component={TimePublish} />
      <Stack.Screen name="MiddleSeatEmpty" component={MiddleSeatEmpty} />
      <Stack.Screen
        name="NumberOfSeatsToBook"
        component={NumberOfSeatsToBook}
      />
      <Stack.Screen name="BookInstantly" component={BookInstantly} />
      <Stack.Screen name="PricePerSeat" component={PricePerSeat} />
      <Stack.Screen name="AddAboutRide" component={AddAboutRide} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="VehiclePage" component={VehiclePage} />
      <Stack.Screen name="DeleteACar" component={DeleteACar} />
      <Stack.Screen name="WhichCarYouDriving" component={WhichCarYouDriving} />
      <Stack.Screen name="RideDetail" component={RideDetail} />
      <Stack.Screen name="CheckDetailAndBook" component={CheckDetailAndBook} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SearchMap" component={SearchMap} />
      <Stack.Screen name="RidePlan" component={RidePlan} />
      <Stack.Screen name="ComingBackAsWell" component={ComingBackAsWell} />
      <Stack.Screen
        name="EditYourPublication"
        component={EditYourPublication}
      />
      <Stack.Screen name="ItineraryDetails" component={ItineraryDetails} />
      <Stack.Screen name="YourProfile" component={YourProfile} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="BookedScreen" component={BookedScreen} />
      <Stack.Screen name="DropOffSearch" component={DropOffSearch} />
      <Stack.Screen name="PublishOnline" component={PublishOnline} />
      <Stack.Screen name="AddStopOverSearch" component={AddStopOverSearch} />
      <Stack.Screen name="WhenAreYouComing" component={WhenAreYouComing} />
      <Stack.Screen name="ReturnTime" component={ReturnTime} />
      <Stack.Screen name="ReturnPrice" component={ReturnPrice} />
      <Stack.Screen name="SelectDropOffMap" component={SelectDropOffMap} />
      <Stack.Screen name="SelectPickUpMap" component={SelectPickUpMap} />
      <Stack.Screen name="AddCityMap" component={AddCityMap} />
      <Stack.Screen name="LocationMap" component={LocationMap} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
