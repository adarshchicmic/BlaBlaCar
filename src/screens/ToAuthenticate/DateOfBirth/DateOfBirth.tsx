import {View, Text, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {updateDob} from '../../../store/slices/UserSlice';
const DateOfBirth = ({navigation}: any) => {
  const [dob, setDob] = useState<string>('');
  const [validDob, setValidDob] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDobChange = value => {
    if (
      (dob[2] !== '/' && value.length === 2) ||
      (dob[5] !== '/' && value.length === 5)
    ) {
      value = value + '/';
      console.log(value, 'jfsdakljfashlkj');
    }
    COMMON_CONSTS.DMY_REGEX.test(value)
      ? setValidDob(true)
      : setValidDob(false);
    console.log(value, 'this is value ');

    setDob(value);
  };
  const states = useSelector(state => state);
  console.log(states, 'ye states hai ');

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = () => {
    if (validDob) {
      navigation.navigate('LikeToBeAddressed');
      dispatch(updateDob({dob: dob}));
    } else {
      null;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.WHATS_YOUR_DATE_OF}</Text>
        <Text style={styles.textStyle}>{COMMON_CONSTS.BIRTHQ}</Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.DATE_MONTH_YEAR}
          onChangeTextFunction={text => handleDobChange(text)}
          keyboardTypeTextInput="numeric"
          valueTextInput={dob}
        />
      </View>

      {dob && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow />
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default DateOfBirth;
