import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {useDispatch} from 'react-redux';
import {updateDob} from '../../../store/slices/UserSlice';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const DateOfBirth = ({navigation}: any) => {
  const [dob, setDob] = useState<string>('');
  const [validDob, setValidDob] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDobChange = value => {
    if (
      (dob[2] !== '/' && value.length === 2) ||
      (dob[5] !== '/' && value.length === 5)
    ) {
      value = value + '/';
    }
    COMMON_CONSTS.DMY_REGEX.test(value)
      ? setValidDob(true)
      : setValidDob(false);

    setDob(value);
    if (showError) {
      setShowError(false);
    }
  };

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = () => {
    if (validDob) {
      navigation.navigate('LikeToBeAddressed');
      dispatch(updateDob({dob: dob}));
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow
          width={widthPercentageToDP(8)}
          height={heightPercentageToDP(5)}
          style={styles.arrowStyle}
        />
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
      {showError && (
        <Text style={styles.errorTextStyle}>
          {COMMON_CONSTS.ENTER_VALID_DOB}
        </Text>
      )}

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

export default memo(DateOfBirth);
