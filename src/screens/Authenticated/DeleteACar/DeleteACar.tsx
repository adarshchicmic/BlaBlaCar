import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {SvgDanger} from '../../../assets/svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './styles';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useDeleteVehicleMutation} from '../../../services/modules/deleteVehicle/deleteVehicle';

const DeleteACar = ({navigation, route}) => {
  const vehicleId = route.params.vehicleId;
  console.log(vehicleId, 'this is vehicle id ');
  const [deleteVehicle, {isLoading, isError}] = useDeleteVehicleMutation();
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleDeleteVehiclePress = async () => {
    const data: any = await deleteVehicle({vehicleId: vehicleId});
    console.log(data?.data?.status?.code, 'this is data ');
    data?.data?.status?.code ? navigation.navigate('Profile') : null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.svgView}>
        <SvgDanger
          width={widthPercentageToDP(20)}
          height={heightPercentageToDP(10)}
        />
      </View>
      <View>
        <CustomTitleText
          text={
            COMMON_CONSTS.DELETING_A_CAR_FROM_YOUR_PROFILE_MIGHT_MAKE_IT_HARDER
          }
          moreStyle={styles.textStyle}
        />
      </View>
      <View style={styles.crossDeleteView}>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleCrossButtonPress()}>
            <Text style={styles.crossText}>{COMMON_CONSTS.X}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CustomButton
            btnText={COMMON_CONSTS.DELETE_VEHICLE}
            styleBtn={styles.deleteVehicleButton}
            styleTxt={styles.deleteVehicleButtonText}
            onPressFunction={() => handleDeleteVehiclePress()}
          />
        </View>
      </View>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>{COMMON_CONSTS.ERROR}</Text>}
    </View>
  );
};

export default DeleteACar;
