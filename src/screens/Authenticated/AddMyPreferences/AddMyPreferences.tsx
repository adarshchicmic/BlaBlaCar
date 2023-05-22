import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomButtonEdit from '../../../components/CustomButtonEdit/CustomButtonEdit';

const AddMyPreferences = ({navigation}) => {
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleChattinessPress = () => {
    navigation.navigate('Chattiness');
  };
  const handleMusicPress = () => {
    navigation.navigate('Music');
  };
  const handleSmokingPress = () => {
    navigation.navigate('Smoking');
  };
  const handlePetsPress = () => {
    navigation.navigate('Pets');
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.TRAVEL_PREFERENCES}</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButtonEdit
          first={COMMON_CONSTS.CHATTINESS}
          second={COMMON_CONSTS.IAM_CHATTY_WHEN_I_FEEL_COMFORTABLE}
          onPressFunction={() => handleChattinessPress()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.MUSIC}
          second={COMMON_CONSTS.I_LL_JAM_DEPENDING_ON_THE_MOOD}
          onPressFunction={() => handleMusicPress()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.SMOKING}
          second={COMMON_CONSTS.I_LL_JAM_DEPENDING_ON_THE_MOOD}
          onPressFunction={() => handleSmokingPress()}
        />
        <CustomButtonEdit
          first={COMMON_CONSTS.PETS}
          second={COMMON_CONSTS.I_LL_TRAVEL_WITH_PETS_DEPENDING_ON_THE_ANIMALS}
          onPressFunction={() => handlePetsPress()}
        />
      </View>
    </View>
  );
};

export default AddMyPreferences;
