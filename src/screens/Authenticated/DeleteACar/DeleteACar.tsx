import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
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

  const [deleteVehicle, {isLoading, isError}] = useDeleteVehicleMutation();
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleDeleteVehiclePress = async () => {
    const data: any = await deleteVehicle({vehicleId: vehicleId});
    data?.data?.status?.code ? navigation.navigate('HomeScreen') : null;
  };
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default DeleteACar;
