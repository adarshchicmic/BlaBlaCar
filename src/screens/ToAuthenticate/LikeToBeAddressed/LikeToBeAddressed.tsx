import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {SvgLeftArrow} from '../../../assets/svg';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {updateTitle} from '../../../store/slices/UserSlice';

const LikeToBeAddressed = ({navigation}: any) => {
  const dispatch = useDispatch();
  const handleBackArrowPress = () => {
    navigation.goBack();
  };
  const missOrMadamPress = () => {
    console.log('missOrMadam');
    dispatch(updateTitle({title: 'Miss / Madam'}));
    navigation.navigate('DefineYourPassword');
  };
  const sirPress = () => {
    console.log('sir');
    dispatch(updateTitle({title: 'Sir'}));
    navigation.navigate('DefineYourPassword');
  };
  const ratherNotToSayPress = () => {
    console.log('reather not to say');
    dispatch(updateTitle({title: COMMON_CONSTS.RATHER_NOT_TO_SAY}));
    navigation.navigate('DefineYourPassword');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonGoBackStyle}
        onPress={() => handleBackArrowPress()}>
        <SvgLeftArrow height={25} width={25} />
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text style={styles.textStyle(1)}>
          {COMMON_CONSTS.HOW_WOULD_YOU_LIKE}
        </Text>
        <Text style={styles.textStyle(1)}>{COMMON_CONSTS.TO_BE_ADDRESSED}</Text>
      </View>

      <TouchableOpacity
        style={styles.continueWithEmailView}
        onPress={() => missOrMadamPress()}>
        <Text style={styles.continueWithEmail}>
          {COMMON_CONSTS.MISS_OR_MADAM}
        </Text>
        <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.continueWithEmailView}
        onPress={() => sirPress()}>
        <Text style={styles.continueWithEmail}>{COMMON_CONSTS.SIR}</Text>
        <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.continueWithEmailView}
        onPress={() => ratherNotToSayPress()}>
        <Text style={styles.continueWithEmail}>
          {COMMON_CONSTS.RATHER_NOT_TO_SAY}
        </Text>
        <Text style={styles.arrowStyle}>{COMMON_CONSTS.ARROW}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(LikeToBeAddressed);
