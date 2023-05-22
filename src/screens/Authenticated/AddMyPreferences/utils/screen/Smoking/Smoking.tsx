import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../../../../shared/Constants/Constants';
import styles from './styles';
import RadioForm from 'react-native-simple-radio-button';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Smoking = ({navigation}) => {
  const [buttonSelected, setSelectedButton] = useState<string>('');
  const options = [
    {
      label: COMMON_CONSTS.I_AM_FINE_WITH_SMOKING,
      value: COMMON_CONSTS.I_AM_FINE_WITH_SMOKING,
    },
    {
      label: COMMON_CONSTS.CIGARETTE_BREAKS_OUTSIDE_THE_CAR_ARE_OK,
      value: COMMON_CONSTS.CIGARETTE_BREAKS_OUTSIDE_THE_CAR_ARE_OK,
    },
    {
      label: COMMON_CONSTS.PLEASE_NO_SMOKING_IN_THE_CAR,
      value: COMMON_CONSTS.PLEASE_NO_SMOKING_IN_THE_CAR,
    },
  ];
  const handleRadioPress = value => {
    console.log(value);
    setSelectedButton(value);
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = () => {
    console.log('Button Pressed');
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.SMOKING}</Text>
      </View>
      <View style={styles.buttonViewMore}>
        <RadioForm
          radio_props={options}
          initial={buttonSelected}
          onPress={value => handleRadioPress(value)}
          buttonColor={'#2196f3'}
          buttonInnerColor={'#2196f3'}
          buttonSize={widthPercentageToDP(20)}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => handleSaveButtonPress()}>
          <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SAVE}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Smoking;
