import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, memo} from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileData} from '../../../store/slices/profileSlice';
import {useUpdateProfileMutation} from '../../../services/modules/updateProfile';

const AddUpdateBio = ({navigation}) => {
  const [bio, setBio] = useState<string>('');
  const [validBio, setValidBio] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);
  const [updateProfile, {isLoading, isError}] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const states: any = useSelector(state => state);
  const bioValue = states?.profileSlice?.profileData?.bio;
  const userDetail = states?.profileSlice?.profileData;
  const handleTextChange = value => {
    console.log(value);
    value.split(' ').filter(word => word !== '').length > 10
      ? (setValidBio(true), console.log('true'))
      : setValidBio(false);
    setBio(value);
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = async () => {
    if (validBio) {
      setShowError(false);
      const dataa: any = await updateProfile({
        email: userDetail?.email,
        firstName: userDetail?.firstName,
        lastName: userDetail?.last_name,
        dob: userDetail?.dob,
        title: userDetail?.title,
        phoneNumber: userDetail?.phone_number,
        bio: bio,
        travelPreferences: userDetail?.travel_preferences,
        postalAddress: userDetail?.postal_address,
      });
      console.log(dataa, 'this is dataa');
      if (dataa?.data?.status?.code === 200) {
        dispatch(updateProfileData({profileData: dataa?.data?.status?.data}));
        navigation.goBack();
      }
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
          {COMMON_CONSTS.WHAT_WOULD_YOU_LIKE}
        </Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.OTHER_MEMBERS_TO}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.KNOW_ABOUT_YOUQ}</Text>
      </View>
      <View style={styles.inputTextView}>
        <CustomTextInput
          inputTextPlaceholder={COMMON_CONSTS.EXAMPLE}
          multiline={true}
          styleInputText={styles.inputTextStyle}
          onChangeTextFunction={value => handleTextChange(value)}
          defaultValue={bioValue}
        />
      </View>
      {showError && <Text>{COMMON_CONSTS.ERROR_BIO}</Text>}
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR_WHILE_UPDATING}</Text>}
      {bio && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSaveButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS?.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default memo(AddUpdateBio);
