import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomBackArrowButton from '../../../components/CustomBackArrowButton/CustomBackArrowButton';
import styles from './styles';
import {COMMON_CONSTS} from '../../../shared/Constants/Constants';
import {useSelector} from 'react-redux';

const YourProfile = ({navigation, route}) => {
  const name = route?.params?.name;
  const imageUri = route?.params?.imageUri;
  const states: any = useSelector(state => state);

  return (
    <View>
      <CustomBackArrowButton navigation={navigation} />
      <View style={styles.userNamePictureView}>
        <View style={styles.textView}>
          <Text style={styles.titleTextStyle}>{name}</Text>
        </View>
        <View>
          <Image style={styles.imageStyle} source={{uri: imageUri}} />
        </View>
      </View>
      <View style={styles.aboutView}>
        <Text style={styles.aboutStyle}>
          {COMMON_CONSTS.ABOUT} {name}
        </Text>
        <Text style={styles.textStyle}>
          {states?.preferencesSlice?.chattiness}
        </Text>
      </View>
    </View>
  );
};

export default YourProfile;
