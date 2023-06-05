import {SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import TabNavigation from '../../../navigators/TabNavigation';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TabNavigation />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
