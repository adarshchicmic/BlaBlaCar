import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomSearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeLocationView}>
        <View style={styles.textView}>
          <Text style={styles.timeStyle}>17:00</Text>
          <Text>hour</Text>
          <Text style={styles.timeStyle}>18:20</Text>
        </View>
        <View style={styles.leavingAndGoingFromStyle}>
          <Text style={styles.textGoingFrom}>Chandigarh</Text>
          <View style={styles.textGoingTo}>
            <Text style={styles.textGoingFrom}> Patiala</Text>
          </View>
        </View>
        <View style={styles.priceStyle}>
          <Text style={styles.priceText}>150</Text>
        </View>
      </View>
      <View style={styles.timeLocationView}>
        <View>
          <Text style={styles.textGoingFrom}>name</Text>
          <Text>star</Text>
        </View>
        <View style={styles.priceStyle}>
          <Text>svg</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomSearchResult;
