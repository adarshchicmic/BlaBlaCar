import {ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

const LoadingIndicator = () => {
  return <ActivityIndicator style={styles.container} />;
};

export default LoadingIndicator;
