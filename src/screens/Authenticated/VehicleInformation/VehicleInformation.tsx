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
import {useSelector} from 'react-redux';

const VehicleInformation = ({navigation, route}: any) => {
  const screen = route?.params?.screen;
  const [vehicleBrand, setVehicleBrand] = useState<string>('');
  const [vehicleName, setVehicleName] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [vehicleColor, setVehicleColor] = useState<string>('');
  const [vehicleModelYear, setVehicleModelYear] = useState<string>('');
  const states: any = useSelector(state => state);
  const [addVehicle, {isLoading, isError, isSuccess}] = useAddVehicleMutation();
  let scrollV: any = useRef();
  console.log(states, 'this is states');
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
    const result: any = await addVehicle({
      country: 'India',
      vehicleNumber: states?.vehicleSlice?.vehicle?.vehicleNumber,
      vehicleBrand: vehicleBrand,
      vehicleName: vehicleName,
      vehicleType: vehicleType,
      vehicleColor: vehicleColor,
      vehicleModelYear: vehicleModelYear,
    });
    console.log(result, 'this is data from vehicle addd');
    if (screen === COMMON_CONSTS.ABOUT_YOU) {
      result?.data?.status?.code === 201
        ? navigation.navigate('HomeScreen')
        : null;
    }
    if (screen === COMMON_CONSTS.ADD_ABOUT_RIDE) {
      result?.data?.status?.code === 201
        ? navigation.navigate('AddAboutRide')
        : null;
    }
    if (screen === COMMON_CONSTS.EDIT_INFO) {
      result?.data?.status?.code === 201
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
