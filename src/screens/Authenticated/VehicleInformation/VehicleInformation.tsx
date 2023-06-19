import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState, memo, useRef, useEffect} from 'react';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {ScrollView} from 'react-native-gesture-handler';
import {useAddVehicleMutation} from '../../../services/modules/addVehicle';
import {useUpdateVehicleMutation} from '../../../services/modules/editVehicle/editVehicle';
import {useSelector} from 'react-redux';

const VehicleInformation = ({navigation, route}: any) => {
  const screen = route?.params?.screen;
  const vehicleData = route?.params?.vehicleData;
  // console.log(vehicleData, 'this is vehicle data guys ');
  const [vehicleBrand, setVehicleBrand] = useState<string>('');
  const [vehicleName, setVehicleName] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [vehicleColor, setVehicleColor] = useState<string>('');
  const [vehicleModelYear, setVehicleModelYear] = useState<any>('');
  const states: any = useSelector(state => state);
  const [addVehicle, {isLoading, isError}] = useAddVehicleMutation();
  const [updateVehicle, {isLoading: isLoadingUpdate, isError: isErrorUpdate}] =
    useUpdateVehicleMutation();
  let scrollV: any = useRef();

  useEffect(() => {
    console.log(vehicleData, 'UseEffect hai ye ');
    setVehicleColor(vehicleData?.vehicle_color);
    setVehicleBrand(vehicleData?.vehicle_brand);
    setVehicleType(vehicleData?.vehicle_type);
    setVehicleModelYear(vehicleData?.vehicle_model_year);
    setVehicleName(vehicleData?.vehicle_name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(vehicleData?.vehicle_model_year);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // const keyboardDidShow = () => {
  //   scrollV.scrollTo({y: 220, animated: true});
  // };
  const handleVehicleBrandChange = value => {
    setVehicleBrand(value);
    scrollV.current.scrollToEnd();
  };
  const handleVehicleNameChange = value => {
    setVehicleName(value);
    scrollV.current.scrollToEnd();
  };
  const handleVehicleTypeChange = value => {
    setVehicleType(value);
    scrollV.current.scrollToEnd();
  };
  const handleVehicleColorChange = value => {
    setVehicleColor(value);
    scrollV.current.scrollToEnd();
  };
  const handleVehicleModelYearChange = value => {
    setVehicleModelYear(value);
    scrollV.current.scrollToEnd();
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  const handleForwardArrowButtonPress = async () => {
    if (screen === COMMON_CONSTS.ABOUT_YOU) {
      const result: any = await addVehicle({
        country: 'India',
        vehicleNumber: states?.vehicleSlice?.vehicle?.vehicleNumber,
        vehicleBrand: vehicleBrand,
        vehicleName: vehicleName,
        vehicleType: vehicleType,
        vehicleColor: vehicleColor,
        vehicleModelYear: vehicleModelYear,
      });
      result?.data?.status?.code === 201
        ? navigation.navigate('HomeScreen')
        : null;
    }
    if (screen === COMMON_CONSTS.ADD_ABOUT_RIDE) {
      const result: any = await addVehicle({
        country: 'India',
        vehicleNumber: states?.vehicleSlice?.vehicle?.vehicleNumber,
        vehicleBrand: vehicleBrand,
        vehicleName: vehicleName,
        vehicleType: vehicleType,
        vehicleColor: vehicleColor,
        vehicleModelYear: vehicleModelYear,
      });
      console.log(result, 'thisis result ');
      result?.data?.status?.code === 201
        ? navigation.navigate('AddAboutRide', {
            screen: COMMON_CONSTS.UPDATE_VEHICLE,
          })
        : null;
    }
    if (screen === COMMON_CONSTS.EDIT_INFO) {
      const result: any = await updateVehicle({
        country: 'India',
        vehicleNumber: states?.vehicleSlice?.vehicle?.vehicleNumber,
        vehicleBrand: vehicleBrand,
        vehicleName: vehicleName,
        vehicleType: vehicleType,
        vehicleColor: vehicleColor,
        vehicleModelYear: vehicleModelYear,
        vehicleId: vehicleData?.id,
      });
      console.log(result, 'this is result from updateVehicle');
      result?.data?.status?.code === 200
        ? navigation.navigate('HomeScreen')
        : null;
    }

    // if (screen === COMMON_CONSTS.EDIT_INFO) {

    // }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
      enabled>
      <ScrollView
        ref={scrollV}
        // contentContainerStyle={{flex: 1}}
        bounces={false}>
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
            defaultValue={vehicleData?.vehicle_brand}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_NAME}
            onChangeTextFunction={value => handleVehicleNameChange(value)}
            defaultValue={vehicleData?.vehicle_name}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_TYPE}
            onChangeTextFunction={value => handleVehicleTypeChange(value)}
            defaultValue={vehicleData?.vehicle_type}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_COLOR}
            onChangeTextFunction={value => handleVehicleColorChange(value)}
            defaultValue={vehicleData?.vehicle_color}
          />
          <CustomTextInput
            styleInputText={styles.inputTextStyle}
            inputTextPlaceholder={COMMON_CONSTS.VEHICLE_MODEL_YEAR}
            onChangeTextFunction={value => handleVehicleModelYearChange(value)}
            keyboardTypeTextInput="numeric"
            defaultValue={vehicleData?.vehicle_model_year?.toString()}
          />
        </View>
        {isError || isErrorUpdate ? (
          <Text style={styles.errorStyle}>{COMMON_CONSTS.ERROR}</Text>
        ) : null}

        {isLoading || isLoadingUpdate ? <ActivityIndicator /> : null}
        {(vehicleBrand &&
          vehicleColor &&
          vehicleModelYear &&
          vehicleName &&
          vehicleType) ||
        screen === COMMON_CONSTS?.EDIT_INFO ? (
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => handleForwardArrowButtonPress()}>
              <SvgRightArrow />
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(VehicleInformation);
