import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import styles from './styles';

const PickUp = ({navigation}: any) => {
  //   const handleCrossButtonPress = () => {
  //     navigation.goBack();
  //   };
  const handleButtonPress = () => {
    console.log(navigation, 'this is navigation');
    navigation.navigate('Location', {screen: COMMON_CONSTS.PICK_UP});
  };
  return (
    <View>
      {/* <View>
        <CustomButton
          btnText={COMMON_CONSTS.X}
          styleTxt={styles.crossStyle}
          styleBtn={styles.crossButtonStyle}
          onPressFunction={() => handleCrossButtonPress()}
        />
      </View> */}
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{COMMON_CONSTS.PICK_UP}</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          btnText={COMMON_CONSTS.ENTER_THE_FULL_ADDRESS}
          styleBtn={styles.buttonStyle}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={() => handleButtonPress()}
        />
      </View>
    </View>
  );
};

export default PickUp;
