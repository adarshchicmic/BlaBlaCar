import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {SvgLeftArrow} from '../../../assets/svg';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useUpdateProfilePicMutation} from '../../../services/modules/updateProfilePic';
import {updateImage} from '../../../store/slices/profileSlice';
import {useDispatch} from 'react-redux';

const EditProfilePicture = ({navigation}: any) => {
  const [updateProfilePic, {isLoading, isError}] =
    useUpdateProfilePicMutation();
  const dispatch = useDispatch();

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleTakeAPicturePress = async () => {
    const data = ImagePicker.openCamera({
      width: widthPercentageToDP(100),
      height: heightPercentageToDP(100),
      cropping: true,
    });
    console.log(data, 'this is data ');
    const imageUri: any = await updateProfilePic({image: data});
    dispatch(updateImage({image: imageUri?.data?.data?.image_url}));
  };
  const handleChooseAPicturePress = async () => {
    try {
      const dataa: any = await ImagePicker.openPicker({
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        cropping: true,
      });
      const imageUri: any = await updateProfilePic({image: dataa});
      dispatch(updateImage({image: imageUri?.data?.data?.image_url}));
    } catch (error) {
      console.log(error, 'this is an error');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.buttonView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.CHOOSE_PROFILE_PICTURE}
        </Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.PICTURE}</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          btnText={COMMON_CONSTS.TAKE_A_PICTURE}
          styleBtn={styles.btnStyle}
          styleTxt={styles.btnTextStyle(COMMON_CONSTS.TAKE_A_PICTURE)}
          onPressFunction={() => handleTakeAPicturePress()}
        />
        <CustomButton
          btnText={COMMON_CONSTS.CHOOSE_A_PICTURE}
          styleTxt={styles.btnTextStyle(COMMON_CONSTS.CHOOSE_A_PICTURE)}
          onPressFunction={() => handleChooseAPicturePress()}
        />
      </View>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
    </View>
  );
};

export default EditProfilePicture;
