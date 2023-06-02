import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';

interface Props {
  timeStart: any;
  timeEnd: any;
  time: any;
  leavingFrom: any;
  goingTo: any;
  price: any;
  name: any;
  imageUri: any;
}

const CustomSearchResult = ({
  timeStart,
  timeEnd,
  time,
  leavingFrom,
  goingTo,
  price,
  name,
  imageUri,
}: Props) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.timeLocationView}>
        <View style={styles.textView}>
          <Text style={styles.timeStyle}>
            {(timeStart?.getHours() - 5).toString().padStart(2, '0') +
              ':' +
              (timeStart?.getMinutes() - 30).toString().padStart(2, '0')}
          </Text>
          <Text>
            {(time?.getHours() - 5).toString().padStart(2, '0') +
              'h' +
              (time?.getMinutes() - 30).toString().padStart(2, '0') +
              'm'}
          </Text>
          <Text style={styles.timeStyle}>
            {(timeEnd.getHours() - 5).toString().padStart(2, '0') +
              ':' +
              (timeEnd.getMinutes() - 30).toString().padStart(2, '0')}
          </Text>
        </View>
        <View style={styles.leavingAndGoingFromStyle}>
          <Text style={styles.textGoingFrom}>
            {leavingFrom.slice(0, 30) + '..'}
          </Text>
          <View style={styles.textGoingTo}>
            <Text style={styles.textGoingFrom}>
              {goingTo.slice(0, 30) + '..'}
            </Text>
          </View>
        </View>
        <View style={styles.priceStyle}>
          <Text style={styles.priceText}>₹{price}</Text>
        </View>
      </View>
      <View style={styles.nameSvgView}>
        <View>
          <Image style={styles.imageStyle} source={{uri: imageUri}} />
        </View>
        <View>
          <Text style={styles.textGoingFrom}>{name}</Text>
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
