import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
// import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import Geolocation from '@react-native-community/geolocation';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateDropOff,
  updateGoingTo,
  updateLeavingFrom,
  updatePickUp,
  updateStatsGoingTo,
  updateStatsLeavingFrom,
} from '../../../store/slices/rideSlice';
// import PickUp from '../../Authenticated/PickUp/PickUp';

const Location = ({navigation, route}) => {
  const screen = route.params.screen;
  console.log(screen, 'this is screen ');
  // const [latitude, setLatitude] = useState<number>();
  // const [longitude, setLongitude] = useState<number>();
  // const [locationSelected, setLocationSelected] = useState<string>('');
  const dispatch = useDispatch();
  const states = useSelector(state => state);
  console.log(states, 'this is states');
  const arrowButtonPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      // setLatitude(info?.coords?.latitude);
    });
  }, []);
  const handlePlaceSelected = (data, details) => {
    console.log(screen, 'this is screen guys ');
    const {location} = details.geometry;
    const latitudee = location.lat;
    const longitudee = location.lng;
    // setLatitude(latitudee);
    // setLongitude(longitudee);
    console.log(data?.description, 'this is data description');
    screen === COMMON_CONSTS.LEAVING_FROM
      ? (dispatch(updateLeavingFrom({leavingFrom: data?.description})),
        dispatch(
          updateStatsLeavingFrom({latitude: latitudee, longitude: longitudee}),
        ),
        navigation.goBack())
      : null;
    screen === COMMON_CONSTS.GOING_TO
      ? (dispatch(updateGoingTo({goingTo: data?.description})),
        dispatch(
          updateStatsGoingTo({latitude: latitudee, longitude: longitudee}),
        ),
        navigation.goBack())
      : null;
    // screen === COMMON_CONSTS.GOING_TO
    //   ? dispatch(
    //       updateStatsGoingTo({latitude: latitudee, longitude: longitudee}),
    //     )
    //   : null;
    // screen === COMMON_CONSTS.LEAVING_FROM
    //   ? dispatch(
    //       updateStatsLeavingFrom({latitude: latitudee, longitude: longitudee}),
    //     )
    //   : null;
    screen === COMMON_CONSTS.PICK_UP
      ? (updatePickUp({
          pickUp: data?.description,
          latitude: latitudee,
          longitude: longitudee,
        }),
        navigation.navigate('DropOff'),
        console.log('ai ki hai '))
      : null;
    screen === COMMON_CONSTS.DROP_OFF
      ? updateDropOff({
          dropOff: data?.description,
          latitude: latitudee,
          longitude: longitudee,
        })
      : null;
    // screen === COMMON_CONSTS.PICK_UP || screen === COMMON_CONSTS.DROP_OFF?
  };
  return (
    <View style={styles.container}>
      {/* <CustomTextInput styleInputText={styles.textInputStyle} /> */}
      <View style={styles.leftArrowViewStyle}>
        <TouchableOpacity onPress={() => arrowButtonPress()}>
          <Text style={styles.leftArrowStyle}>{COMMON_CONSTS.LEFT_ARROW}</Text>
        </TouchableOpacity>
      </View>
      <GooglePlacesAutocomplete
        styles={styles.styleTextInput}
        placeholder="Search"
        onPress={(data, details) => handlePlaceSelected(data, details)}
        query={{
          key: 'AIzaSyDUzn63K64-sXadyIwRJExCfMaicagwGq4',
          language: 'en',
        }}
        fetchDetails={true}
      />
      {/* <View style={styles.nameArrowButtonViewStyle}>
        <NameArrowButton name={COMMON_CONSTS.USE_CURRENT_LOCATION} />
      </View> */}

      {/* <View> */}
      {/* <MapView
          style={styles.locationView}
          //specify our coordinates.
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      {/* </View> */}
    </View>
  );
};

export default Location;
