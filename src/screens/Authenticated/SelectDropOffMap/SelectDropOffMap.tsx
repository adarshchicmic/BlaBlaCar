import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SvgRightArrow} from '../../../assets/svg';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {updatePickUp} from '../../../store/slices/rideSlice';

const SelectDropOffMap = ({navigation, route}) => {
  const latitude = route?.params?.latitude;
  const longitude = route?.params?.longitude;
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setMarkerPosition({latitude: latitude, longitude: longitude});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleMarkerDragEnd = e => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    setMarkerPosition({latitude, longitude});
    dispatch(updatePickUp({latitude: latitude, longitude: longitude}));
  };
  const handleForwardArrowButtonPress = () => {
    navigation.navigate('MapScreen');
  };
  return (
    <View style={{flex: 1}}>
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
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => handleForwardArrowButtonPress()}>
          <SvgRightArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectDropOffMap;
