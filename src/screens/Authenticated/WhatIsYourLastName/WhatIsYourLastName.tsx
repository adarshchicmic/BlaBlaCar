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
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateProfileMutation} from '../../../services/modules/updateProfile';
import {updateProfileData} from '../../../store/slices/profileSlice';

const WhatIsYourLastName = ({navigation}: any) => {
  const [lastName, setLastName] = useState<string>('');
  const [validLastName, setValidLastName] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(true);
  const dispatch = useDispatch();
  const [updateProfile, {isLoading, isError}] = useUpdateProfileMutation();
  const states: any = useSelector(state => state);
  const lastNameValue = states?.profileSlice?.profileData?.last_name;
  const userDetail = states?.profileSlice?.profileData;

  const handleLastNameChange = value => {
    setLastName(value);
    setValidLastName(COMMON_CONSTS.NAME_REGEX.test(value));
    console.log(COMMON_CONSTS.NAME_REGEX.test(value));
  };
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = async () => {
    setShowError(validLastName);
    if (lastName && validLastName) {
      const dataa: any = await updateProfile({
        email: userDetail?.email,
        firstName: userDetail?.first_name,
        lastName: lastName,
        dob: userDetail?.dob,
        title: userDetail?.title,
        phoneNumber: userDetail?.phone_number,
        bio: userDetail?.bio,
        travelPreferences: userDetail?.travel_preferences,
        postalAddress: userDetail?.postal_address,
      });
      console.log(dataa, 'this is dataa');
      if (dataa?.data?.status?.code === 200) {
        dispatch(updateProfileData({profileData: dataa?.data?.status?.data}));
        navigation.goBack();
      }
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHAT_IS_YOUR_LAST}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.NAMEQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          inputTextPlaceholder={COMMON_CONSTS.LAST_NAME}
          placeholderTextColor={'#969693'}
          onChangeTextFunction={text => handleLastNameChange(text)}
          defaultValue={lastNameValue}
        />
      </View>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR_WHILE_UPDATING}</Text>}
      {!showError && <Text>{COMMON_CONSTS.NAME_WARN}</Text>}
      {lastName && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyleArrow}
            onPress={() => handleSaveButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(WhatIsYourLastName);
