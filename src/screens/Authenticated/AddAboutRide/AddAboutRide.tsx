import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SvgLeftArrow} from '../../../assets/svg';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {usePublishRideMutation} from '../../../services/modules/PublishRide';
import {useSelector} from 'react-redux';

const AddAboutRide = ({navigation}) => {
  const [text, setText] = useState('');

  const [publish, {isLoading, isError}] = usePublishRideMutation();

  const states: any = useSelector(state => state);
  console.log(states, 'this is statesjhdsjkahkjh');

  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  const handleInputTextChange = value => {
    setText(value);
  };
  const handlePublishRide = async () => {
    console.log('hkdshkjlsd');
    const datata = await publish({
      source: states.rideSlice.pickUp,
      destination: states.rideSlice.dropOff,
      sourceLongitude: states.rideSlice.statsPickUp.longitude,
      sourceLatitude: states.rideSlice.statsPickUp.latitude,
      destinationLatitude: states.rideSlice.statsDropOff.latitude,
      destinationLongitude: states.rideSlice.statsDropOff.longitude,
      passsengerCount: states.rideSlice.numberOfSeats,
      addCity: 'Punjab',
      addCityLongitude: 77.102493,
      addCityLatitude: 28.70406,
      date: states.publishRideSlice.date,
      time: states.publishRideSlice.time,
      setPrice: states.publishRideSlice.set_price,
      aboutRide: text,
      vehicleId: 11,
      bookInstantly: states.publishRideSlice.bookInstantly,
      midSeat: states.publishRideSlice.midSeat,
      estimatedTime: states.publishRideSlice.select_route.estimatedTime,
    });
    console.log(datata, 'jkldshkjhfjkshkj');
    datata.data.status === 200 ? navigation.navigate('HomeScreen') : null;
  };
  return (
    <View>
      <View style={styles.arrowStyle}>
        <TouchableOpacity
          onPress={() => handleBackArrowPress()}
          style={styles.arrowStyle}>
          <SvgLeftArrow width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.ANYTHING_TO_ADD_ABOUT_YOUR_RIDE}
        </Text>
      </View>
      <View style={styles.buttonView}>
        <CustomTextInput
          onChangeTextFunction={text => handleInputTextChange(text)}
          styleInputText={styles.textInputStyle}
        />
      </View>
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
      {isLoading && <ActivityIndicator />}
      {text && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePublishRide()}>
          <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.PUBLISH}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddAboutRide;
