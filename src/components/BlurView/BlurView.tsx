import React from 'react';
import styles from './styles';
import {BlurView} from '@react-native-community/blur';

const BlurViews = () => {
  return (
    // <View style={styles.mainContainerStyle}>
    <BlurView
      style={styles.container}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white"
    />
    // </View>
  );
};

export default BlurViews;
