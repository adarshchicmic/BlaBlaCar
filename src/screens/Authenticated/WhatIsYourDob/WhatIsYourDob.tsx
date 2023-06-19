import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow} from '../../../assets/svg';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileData} from '../../../store/slices/profileSlice';
import {useUpdateProfileMutation} from '../../../services/modules/updateProfile';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const WhatIsYourDob = ({navigation}: any) => {
  const [dob, setDob] = useState<string>('');
  const [validDob, setValidDob] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [updateProfile, {isLoading, isError}] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const states: any = useSelector(state => state);
  const dobValue = states?.profileSlice?.profileData?.dob;
  const splitString = dobValue.split('-');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('/');
  const userDetail = states?.profileSlice?.profileData;

  const handleDobChange = value => {
    if (
      (dob[2] !== '/' && value.length === 2) ||
      (dob[5] !== '/' && value.length === 5)
    ) {
      value = value + '/';
    }
    COMMON_CONSTS.DMY_REGEX.test(value)
      ? setValidDob(true)
      : setValidDob(false);

    setDob(value);
  };

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = async () => {
    if (validDob) {
      const dataa: any = await updateProfile({
        email: userDetail?.email,
        firstName: userDetail?.firstName,
        lastName: userDetail?.last_name,
        dob: dob,
        title: userDetail?.title,
        phoneNumber: userDetail?.phone_number,
        bio: userDetail?.bio,
        travelPreferences: userDetail?.travel_preferences,
        postalAddress: userDetail?.postal_address,
      });

      if (dataa?.data?.status?.code === 200) {
        dispatch(updateProfileData({profileData: dataa?.data?.status?.data}));
        navigation.goBack();
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(6)}
          style={styles.arrowStyle}
        />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_DATE_OF}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.BIRTHQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.DATE_MONTH_YEAR}
          onChangeTextFunction={text => handleDobChange(text)}
          keyboardTypeTextInput="numeric"
          //   valueTextInput={dob}
          defaultValue={joinArray}
        />
      </View>
      {showError && <Text>{COMMON_CONSTS.ENTER_VALID_DOB}</Text>}
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR_WHILE_UPDATING}</Text>}
      {dob && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSaveButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS?.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(WhatIsYourDob);
