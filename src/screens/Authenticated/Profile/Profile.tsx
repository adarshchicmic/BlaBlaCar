import {View} from 'react-native';
import React, {memo} from 'react';
import ProfileNavigation from '../../../navigators/ProfileNavigation';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileNavigation />
    </View>
  );
};

export default memo(Profile);
