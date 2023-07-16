import {View} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import CustomTitleText from '../../../components/CustomTiteText/CustomTitleText';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';
import {useDispatch} from 'react-redux';
import {updateReturnRide} from '../../../store/slices/publishRideSlice';
import styles from './styles';

const ComingBackAsWell = ({navigation}) => {
  const dispatch = useDispatch();
  const handleYesSurePress = () => {
    dispatch(updateReturnRide({returnRide: 1}));
    navigation.navigate('WhenAreYouComing', {screen: COMMON_CONSTS.RETURN});
  };
  const handleNoPress = () => {
    dispatch(updateReturnRide({returnRide: 0}));
    navigation.navigate('AddAboutRide');
  };
  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <CustomTitleText text={COMMON_CONSTS.COMING_BACK_AS_WELL} />
      <View style={styles.buttonView}>
        <View>
          <NameArrowButton
            name={COMMON_CONSTS.YES_SURE}
            onPressFunction={() => handleYesSurePress()}
          />
        </View>
        <NameArrowButton
          name={COMMON_CONSTS.NO_THANKS}
          onPressFunction={() => handleNoPress()}
        />
      </View>
    </View>
  );
};

export default ComingBackAsWell;
