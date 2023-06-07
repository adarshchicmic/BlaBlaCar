import {View, Text} from 'react-native';
import React from 'react';
import CustomButtonEdit from '../CustomButtonEdit/CustomButtonEdit';
import styles from './styles';

const CustomLeavingFromGoingToButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>CustomLeavingFromGoingToButton</Text>
      <View style={styles.timePipeButtonView}>
        <View style={styles.timeViewStyle}>
          <Text style={styles.textStyle}>08:00</Text>
          <Text style={styles.textStyle}> jsdlfjl</Text>
        </View>
        <View style={styles.pipeMainView}>
          <View style={styles.oStyle} />
          <View style={styles.pipeViewStyle} />
          <View style={styles.oStyle} />
        </View>
        <View style={styles.butoonViewStyle}>
          <CustomButtonEdit
            first={'df'}
            second={'second'}
            firstStyle={styles.firstStyle}
            secondStyle={styles.secondStyle}
            containerStyle={styles.containerStyle}
          />
          <CustomButtonEdit
            first={'df'}
            second={'second'}
            firstStyle={styles.firstStyle}
            secondStyle={styles.secondStyle}
            containerStyle={styles.containerStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomLeavingFromGoingToButton;
