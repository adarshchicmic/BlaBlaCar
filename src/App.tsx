import {View, SafeAreaView} from 'react-native';
import React from 'react';
import StatusBarr from './components/StatusBar/StatusBar';
import ApplicationNavigator from './navigators/ApplicationNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import AppNavigator from './navigators/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBarr backgroundColor="#fff" />
        <SafeAreaView
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100),
          }}>
          <ApplicationNavigator />
        </SafeAreaView>
      </View>
    </Provider>
  );
};

export default App;
