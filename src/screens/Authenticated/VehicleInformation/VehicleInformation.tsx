import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useState, memo} from 'react';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {ScrollView} from 'react-native-gesture-handler';
import {useAddVehicleMutation} from '../../../services/modules/addVehicle';

const VehicleInformation = ({navigation}: any) => {
  const [vehicleBrand, setVehicleBrand] = useState<string>('');
  const [vehicleName, setVehicleName] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [vehicleColor, setVehicleColor] = useState<string>('');
  const [vehicleModelYear, setVehicleModelYear] = useState<string>('');
  const [addVehicle, {isLoading, isError, isSuccess}] = useAddVehicleMutation();

  const handleVehicleBrandChange = value => {
    setVehicleBrand(value);
  };
  const handleVehicleNameChange = value => {
    setVehicleName(value);
  };
  const handleVehicleTypeChange = value => {
    setVehicleType(value);
  };
  const handleVehicleColorChange = value => {
    setVehicleColor(value);
  };
  const handleVehicleModelYearChange = value => {
    setVehicleModelYear(value);
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = async () => {
    console.log('pressed');
    const dataa = await addVehicle({
      country: 'India',
      vehicleNumber: null,
      vehicleBrand: vehicleBrand,
      vehicleName: vehicleName,
      vehicleType: vehicleType,
      vehicleColor: vehicleColor,
      vehicleModelYear: vehicleModelYear,
    });
    console.log(dataa, 'thsi is sfdjhkfdsahjkfh');
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => handleBackArrowPress()}
            style={styles.arrowStyle}>
            <SvgLeftArrow width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            {COMMON_CONSTS.ENTER_VEHICLE_DETAILS}
          </Text>
        </View>
        <View style={styles.inputVehicleView}>
          <CustomTextInput
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_BRAND}
            styleInputText={styles.inputTextStyle}
            onChangeTextFunction={value => handleVehicleBrandChange(value)}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_NAME}
            onChangeTextFunction={value => handleVehicleNameChange(value)}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_TYPE}
            onChangeTextFunction={value => handleVehicleTypeChange(value)}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_COLOR}
            onChangeTextFunction={value => handleVehicleColorChange(value)}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_MODEL_YEAR}
            onChangeTextFunction={value => handleVehicleModelYearChange(value)}
          />
        </View>
        {isError && <Text> {COMMON_CONSTS.ERROR}</Text>}
        {isLoading && <ActivityIndicator />}
        {isSuccess && navigation.navigate('Profile')}
        {vehicleBrand &&
          vehicleColor &&
          vehicleModelYear &&
          vehicleName &&
          vehicleType && (
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => handleForwardArrowButtonPress()}>
                <SvgRightArrow />
              </TouchableOpacity>
            </View>
          )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(VehicleInformation);
