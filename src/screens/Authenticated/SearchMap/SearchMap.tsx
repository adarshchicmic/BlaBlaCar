import React, {memo} from 'react';
import {View, TouchableOpacity, Dimensions, Text} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import styles from './styles';
import {useSelector} from 'react-redux';
import {SvgLeftArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA: any = 0.1;
const LONGITUDE_DELTA: any = LATITUDE_DELTA * ASPECT_RATIO;

Geocoder.init('AIzaSyDUzn63K64-sXadyIwRJExCfMaicagwGq4'); // Initialize Geocoder with your API key

const SearchMap = ({navigation, route}: any) => {
  const ordinates = route?.params?.ordinates;
  const destinationLatitude = route?.params?.destinationLatitude;
  const destinationLongitude = route?.params?.destinationLongitude;
  const sourceLatitude = route?.params?.sourceLatitude;
  const sourceLongitude = route?.params?.sourceLongitude;

  console.log(
    ordinates,
    destinationLatitude,
    destinationLongitude,
    sourceLatitude,
    sourceLongitude,
    'this is ordinates',
  );
  const states: any = useSelector(state => state);

  const currLocation: any = states?.rideSlice?.statsPickUp;
  const destLocation: any = states?.rideSlice?.statsDropOff;
  console.log(
    currLocation,
    destLocation,
    'this is current location, destlocation',
  );
  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowStyle}>
        <TouchableOpacity
          onPress={() => handleBackArrowPress()}
          style={styles.arrowStyle}>
          <SvgLeftArrow width={35} height={35} />
        </TouchableOpacity>
      </View>
      {ordinates && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currLocation.latitude,
            longitude: currLocation.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker coordinate={currLocation} />
          {destLocation && <Marker coordinate={destLocation} />}

          <Polyline
            coordinates={decodePolyline(ordinates?.points)}
            strokeWidth={18}
            strokeColor="#2dbeff"
          />
        </MapView>
      )}
      {ordinates === undefined && (
        <Text style={styles.errorStyle}>
          {COMMON_CONSTS.ERROR_WHILE_LOADING_DATA}
        </Text>
      )}
    </View>
  );
};

// Helper function to decode the encoded polyline
function decodePolyline(encoded) {
  const poly: any = [];
  let index = 0;
  const len = encoded?.length;
  let lat = 0;
  let lng = 0;

  while (index < len) {
    let b;
    let shift = 0;
    let result = 0;
    do {
      b = encoded?.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded?.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    const point: any = {
      latitude: lat / 1e5,
      longitude: lng / 1e5,
    };
    poly?.push(point);
  }
  return poly;
}

export default memo(SearchMap);
