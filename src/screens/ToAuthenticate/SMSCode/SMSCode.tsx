import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import {SvgLeftArrow, SvgRightArrow} from '../../../assets/svg';
import {useSelector} from 'react-redux';

import NameArrowButton from '../../../components/NameArrowButton/NameArrowButton';

const SMSCode = ({navigation}: any) => {
  const [code, setCode] = useState<string>('');

  //   const dispatch = useDispatch();

  const handleTextChange = value => {
    setCode(value);
  };
  const states = useSelector(state => state);

  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const handleForwardArrowButtonPress = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={handleBackArrowPress}>
        <SvgLeftArrow width={25} height={25} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.ENTER_THE_CODE_WEHAVE}
        </Text>
        <Text style={styles.textStyle}>
          {COMMON_CONSTS.JUST_SENT_YOU_BY_SMS}
        </Text>
      </View>
      <View>
        <CustomTextInput
          styleInputText={styles.textInputStyle}
          placeholderTextColor={'#969693'}
          inputTextPlaceholder={COMMON_CONSTS.FOUR_DIGIT_CODE}
          onChangeTextFunction={text => handleTextChange(text)}
          inputMode="numeric"
          maxLength={4}
        />
      </View>
      <View style={styles.resendCodeView}>
        <NameArrowButton name={COMMON_CONSTS.RESEND_CODE} />
      </View>

      {code && (
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleForwardArrowButtonPress()}>
            <SvgRightArrow color="red" />
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(SMSCode);
