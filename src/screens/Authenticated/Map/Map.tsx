/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {useSelector, useDispatch} from 'react-redux';
import {useGoogleMutation} from '../../../services/modules/googleLocation';
import {
  SvgDistance,
  SvgLeftArrow,
  SvgRightArrow,
  SvgRoute,
  SvgTime,
} from '../../../assets/svg';
import {
  updateEstimatedTime,
  updateRoadDistanceDuration,
  updateRouteDetail,
} from '../../../store/slices/publishRideSlice';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

Geocoder.init('AIzaSyDUzn63K64-sXadyIwRJExCfMaicagwGq4'); // Initialize Geocoder with your API key

const MapScreen = ({navigation}: any) => {
  // const [currentLocation, setCurrentLocation] = useState<any>(null);
  // const [destination, setDestination] = useState<any>(null);
  const [distance, setDistance] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [route, setRoute] = useState<any>(null);
  const [routeName, setRouteName] = useState<any>(null);
  const [google, {isLoading, isError}] = useGoogleMutation();

  const dispatch = useDispatch();

  const states: any = useSelector(state => state);

  const currLocation: any = states.rideSlice.statsPickUp;
  const destLocation: any = states.rideSlice.statsDropOff;

  useEffect(() => {
    // Get the current device location
    // Geolocation.getCurrentPosition(
    //   (position: any) => {
    //     setCurrentLocation(position.coords);
    //   },
    //   error => console.log(error),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    // );
    handleCalculateRoute();
  }, []);

  const handleCalculateRoute = async () => {
    const val: any = await google({
      currentLatitude: currLocation?.latitude,
      currentLongitude: currLocation?.longitude,
      destLatitude: destLocation?.latitude,
      destLongitude: destLocation?.longitude,
    });

    const data = val?.data;
    if (data.status === 'OK') {
      const routeCoordinates = data.routes[0].overview_polyline.points;
      const dis = data.routes[0].legs[0].distance.text;
      const dur = data.routes[0].legs[0].duration.text;

      const legs: any = [
        {
          distance: data.routes[0].legs[0].distance,
          duration: data.routes[0].legs[0].duration,
        },
      ];
      const overview_polyline = {points: routeCoordinates};
      const route: any = [];
      route.push({legs, overview_polyline});

      dispatch(updateRouteDetail({selectRoute: {route}}));
      dispatch(
        updateRoadDistanceDuration({
          road: data.routes[0].summary,
          distance: dis,
          duration: dur,
        }),
      );
      dispatch(updateEstimatedTime({estimatedTime: dur}));
      setRouteName(data.routes[0].summary);
      setDistance(dis);
      setDuration(dur);
      setRoute(routeCoordinates);
    } else {
      console.log('Error:', data.status);
    }
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleRightArrowButtonPress = () => {
    navigation.navigate('AddStopOver');
  };
  return (
    <View style={styles.container}>
      <View style={styles.arrowStyle}>
        <TouchableOpacity
          onPress={() => handleBackArrowPress()}
          style={styles.arrowStyle}>
          <SvgLeftArrow
            width={widthPercentageToDP(8)}
            height={heightPercentageToDP(6)}
          />
        </TouchableOpacity>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currLocation.latitude,
          longitude: currLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {/* <Marker coordinate={currLocation} /> */}
        {destLocation && <Marker coordinate={destLocation} />}
        {route && (
          <Polyline
            coordinates={decodePolyline(route)}
            strokeWidth={18}
            strokeColor="#2dbeff"
          />
        )}
      </MapView>
      <View style={styles.textView}>
        <View style={styles.svgValView}>
          <SvgDistance width={25} height={25} />
          <Text style={styles.textStyle}>
            {COMMON_CONSTS.ROUTE} : {routeName}
          </Text>
        </View>
        <View style={styles.svgValView}>
          <SvgRoute width={25} height={25} />
          <Text style={styles.textStyle}>
            {COMMON_CONSTS.DURATION} : {duration}
          </Text>
        </View>
        <View style={styles.svgValView}>
          <SvgTime width={25} height={25} />
          <Text style={styles.textStyle}>
            {COMMON_CONSTS.DISTANCE} : {distance}
          </Text>
        </View>
      </View>
      {isError && <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRightArrowButtonPress()}>
        <SvgRightArrow width={25} height={25} />
      </TouchableOpacity>
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

// Helper function to decode the encoded polyline
function decodePolyline(encoded) {
  const poly: any = [];
  let index = 0;
  const len = encoded.length;
  let lat = 0;
  let lng = 0;

  while (index < len) {
    let b;
    let shift = 0;
    let result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    const point: any = {
      latitude: lat / 1e5,
      longitude: lng / 1e5,
    };
    poly.push(point);
  }
  return poly;
}

export default memo(MapScreen);
