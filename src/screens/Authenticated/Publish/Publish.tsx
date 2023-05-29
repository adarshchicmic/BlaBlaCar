import {View} from 'react-native';
import React, {memo} from 'react';
import PickUp from '../PickUp/PickUp';

const Publish = ({navigation}: any) => {
  return (
    <View>
      <PickUp navigation={navigation} />
    </View>
  );
};

export default memo(Publish);
