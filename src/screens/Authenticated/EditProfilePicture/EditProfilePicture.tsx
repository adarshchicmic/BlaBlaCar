import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
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
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';
import BlurViews from '../../../components/BlurView/BlurView';

const EditProfilePicture = ({navigation}: any) => {
  const [updateProfilePic, {isLoading, isError}] =
    useUpdateProfilePicMutation();
  const dispatch = useDispatch();

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleTakeAPicturePress = async () => {
    try {
      const dataa: any = await ImagePicker.openCamera({
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        cropping: true,
      });

      const imageUri: any = await updateProfilePic({image: dataa});
      dispatch(updateImage({image: imageUri?.data?.data?.image_url}));
    } catch (error) {}
  };
  const handleChooseAPicturePress = async () => {
    try {
      const dataa: any = await ImagePicker.openPicker({
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        cropping: true,
      });

      const imageUri: any = await updateProfilePic({image: dataa});
      dispatch(updateImage({image: imageUri?.data?.status?.image_url}));
      imageUri?.data?.status?.code === 200
        ? navigation.reset({index: 1, routes: [{name: 'HomeScreen'}]})
        : null;
    } catch (error) {
      console.log(error, 'this is an error');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(6)}
          style={styles.arrowStyle}
        />
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
          styleBtn={styles.buttonStyle}
          btnText={COMMON_CONSTS.CHOOSE_A_PICTURE}
          styleTxt={styles.btnTextStyle(COMMON_CONSTS.CHOOSE_A_PICTURE)}
          onPressFunction={() => handleChooseAPicturePress()}
        />
      </View>
      {isLoading && <BlurViews />}
      {isLoading && <LoadingIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
    </View>
  );
};

export default memo(EditProfilePicture);
