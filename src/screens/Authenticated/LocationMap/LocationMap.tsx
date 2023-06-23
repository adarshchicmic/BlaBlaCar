import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import styles from './styles';

// import {useDispatch} from 'react-redux';
// import {updatePickUp} from '../../../store/slices/rideSlice';

const LocationMap = ({navigation, route}) => {
  const latitudee = route?.params?.latitude;
  const longitudee = route?.params?.longitude;

  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  // const dispatch = useDispatch();
  useEffect(() => {
    setMarkerPosition({latitude: longitudee, longitude: latitudee});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleMarkerDragEnd = e => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    setMarkerPosition({latitude, longitude});
    // dispatch(updatePickUp({latitude: latitude, longitude: longitude}));
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.customBackArrowButton}>
        <CustomBackArrowButton navigation={navigation} />
      </View>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: markerPosition.latitude,
          longitude: markerPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable
          coordinate={markerPosition}
          onDragEnd={handleMarkerDragEnd}
        />
      </MapView>
    </View>
  );
};

export default LocationMap;
