import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow} from '../../../assets/svg';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useUpdateProfileMutation} from '../../../services/modules/updateProfile';
import {updateProfileData} from '../../../store/slices/profileSlice';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import BlurViews from '../../../components/BlurView/BlurView';
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';

const WhatIsYourFirstName = ({navigation}: any) => {
  const [firstName, setFirstName] = useState<string>('');
  const [validFirstName, setValidFirstName] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(true);
  const [updateProfile, {isLoading, isError}] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const states: any = useSelector(state => state);
  const firstNameValue = states?.profileSlice?.profileData?.first_name;
  const userDetail = states?.profileSlice?.profileData;

  const handleFirstNameChange = value => {
    setFirstName(value);
    setValidFirstName(COMMON_CONSTS.NAME_REGEX.test(value));
  };

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = async () => {
    setShowError(validFirstName);
    if (firstName && validFirstName) {
      const dataa: any = await updateProfile({
        email: userDetail?.email,
        firstName: firstName,
        lastName: userDetail?.last_name,
        dob: userDetail?.dob,
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_FIRST}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.NAMEQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.FIRST_NAME}
          onChangeTextFunction={text => handleFirstNameChange(text)}
          defaultValue={firstNameValue}
        />
      </View>
      {isLoading && <BlurViews />}
      {isLoading && <LoadingIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR_WHILE_UPDATING}</Text>}
      {!showError && <Text>{COMMON_CONSTS.NAME_WARN}</Text>}
      {firstName && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyleArrow}
            onPress={() => handleForwardArrowButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(WhatIsYourFirstName);
