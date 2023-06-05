import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../../../../shared/Constants/Constants';
import styles from './styles';
import RadioForm from 'react-native-simple-radio-button';
import {useDispatch} from 'react-redux';
import {updateMusic} from '../../../../../../store/slices/travelPreferences';

const Music = ({navigation}) => {
  const [buttonSelected, setSelectedButton] = useState<string>('');
  const dispatch = useDispatch();
  const options = [
    {
      label: COMMON_CONSTS.ITS_ALL_ABOUT_PLAYLIST,
      value: COMMON_CONSTS.ITS_ALL_ABOUT_PLAYLIST,
    },
    {
      label: COMMON_CONSTS.I_LL_JAM_DEPENDING_ON_THE_MOOD,
      value: COMMON_CONSTS.I_LL_JAM_DEPENDING_ON_THE_MOOD,
    },
    {
      label: COMMON_CONSTS.SILENCE_IS_GOLDEN,
      value: COMMON_CONSTS.SILENCE_IS_GOLDEN,
    },
  ];
  const handleRadioPress = value => {
    setSelectedButton(value);
  };
  const handleCrossButtonPress = () => {
    navigation.goBack();
  };
  const handleSaveButtonPress = () => {
    navigation.goBack();
    dispatch(updateMusic({music: buttonSelected}));
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
        <Text style={styles.textStyle}>{COMMON_CONSTS.MUSIC}</Text>
      </View>
      <View style={styles.buttonViewMore}>
        <RadioForm
          radio_props={options}
          initial={buttonSelected}
          onPress={value => handleRadioPress(value)}
          buttonColor={'#2196f3'}
          buttonInnerColor={'#2196f3'}
          buttonSize={20}
        />
      </View>
      {buttonSelected && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleSaveButtonPress()}>
            <Text style={styles.buttonTextStyle}>{COMMON_CONSTS.SAVE}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default memo(Music);
