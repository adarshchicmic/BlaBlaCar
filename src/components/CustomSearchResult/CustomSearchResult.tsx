import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';

interface Props {
  timeStart: any;
  timeEnd: any;
  time: any;
  leavingFrom: any;
  goingTo: any;
  price?: any;
  name: any;
  imageUri: any;
  data?: any;
  navigation?: any;
  show: boolean;
  ordinates?: any;
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
  data,
  navigation,
  show,
  ordinates,
}: Props) => {
  const handleOnPress = () => {
    show
      ? navigation.navigate('RideDetail', {data: data})
      : navigation.navigate('Map', {
          screen: COMMON_CONSTS.BOOK,
          ordinates: ordinates,
        });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!show}
      onPress={() => handleOnPress()}>
      <View style={styles.timeLocationView}>
        <View style={styles.textView}>
          <Text style={styles.timeStyle}>
            {timeStart?.getUTCHours().toString().padStart(2, '0') +
              ':' +
              timeStart?.getUTCMinutes().toString().padStart(2, '0')}
          </Text>
          <Text>
            {time?.getUTCHours().toString().padStart(2, '0') +
              'h' +
              time?.getUTCMinutes().toString().padStart(2, '0') +
              'm'}
          </Text>
          <Text style={styles.timeStyle}>
            {timeEnd.getUTCHours().toString().padStart(2, '0') +
              ':' +
              timeEnd.getMinutes().toString().padStart(2, '0')}
          </Text>
        </View>
        <View style={styles.pipeMainView}>
          <View style={styles.oStyle} />
          <View style={styles.pipeViewStyle} />
          <View style={styles.oStyle} />
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
        {show && (
          <View style={styles.priceStyle}>
            <Text style={styles.priceText}>₹{price}</Text>
          </View>
        )}
      </View>
      {show && (
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
      )}
    </TouchableOpacity>
  );
};

export default memo(CustomSearchResult);
