import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState, memo, useEffect} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
// import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
// import {useSelector, useDispatch} from 'react-redux';
// import {updateProfileData} from '../../../store/slices/profileSlice';
// import {useUpdateProfileMutation} from '../../../services/modules/updateProfile';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {SvgRightArrow} from '../../../assets/svg';
import {useLazyVehicleQuery} from '../../../services/modules/getVehicle';

const LicensePlateNumber = ({navigation, route}) => {
  const screen = route?.params?.screen;
  const vehicleId = route?.params?.vehicleId;
  console.log(vehicleId, 'this is vehicle id ');
  const [licensePlateNumber, setLicensePlateNumber] = useState<string>('');
  const [validLicensePlate, setValidLicensePlate] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [vehicle, {isLoading, isError}] = useLazyVehicleQuery();
  const [vehicleData, setVehicleData] = useState<any>('');

  useEffect(() => {
    const fun = async () => {
      if (vehicleId) {
        const data = await vehicle({id: vehicleId});
        console.log(data, 'this is data guys');
        setVehicleData(data?.data);
      }
    };
    fun();
  }, [vehicleId, vehicle]);

  const handleTextChange = value => {
    value.length > 8 && value.length < 12
      ? setValidLicensePlate(true)
      : setValidLicensePlate(false);
    setLicensePlateNumber(value);
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleDoNotKnowLicensePlateOnPress = () => {
    navigation.navigate('VehicleInformation', {
      screen: screen,
      vehicleData: vehicleData,
    });
  };
  const handleSaveButtonPress = async () => {
    if (validLicensePlate) {
      setShowError(false);
      navigation.navigate('VehicleInformation', {
        screen: screen,
        vehicleData: vehicleData,
      });
      // navigation.goBack();
    } else {
      setShowError(true);
    }
  };
  return (
    <View>
      <CustomButton
        btnText={COMMON_CONSTS.X}
        styleTxt={styles.crossStyle}
        styleBtn={styles.crossButtonStyle}
        onPressFunction={() => handleCrossButtonPress()}
      />
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.WHAT_IS_YOUR_LICENSE}
        </Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.PLATE_NUMBERQ}</Text>
      </View>
      <View style={styles.textView}>
        <Text>{COMMON_CONSTS.COUNTRY}</Text>
        <Text>{COMMON_CONSTS.INDIA}</Text>
      </View>
      <View style={styles.inputTextView}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder={COMMON_CONSTS.NUMBER_PLATE}
          onChangeText={value => handleTextChange(value)}
          defaultValue={vehicleData?.vehicle_number}
        />
      </View>
      <View style={styles.nameArrowButtonView}>
        <NameArrowButton
          name={COMMON_CONSTS.I_DONOT_KNOW_MY_LICENSE_PLATE}
          onPressFunction={() => handleDoNotKnowLicensePlateOnPress()}
        />
      </View>
      {showError && <Text>{COMMON_CONSTS.PLATE_ERROR}</Text>}
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR_WHILE_UPDATING}</Text>}
      {licensePlateNumber && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSaveButtonPress()}>
            <SvgRightArrow
              height={25}
              width={25}
              style={styles.buttonTextStyle}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default memo(LicensePlateNumber);
