import {View} from 'react-native';
import React, {memo} from 'react';
import TabNavigation from '../../../navigators/TabNavigation';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <TabNavigation />
    </View>
  );
};

export default memo(HomeScreen);
