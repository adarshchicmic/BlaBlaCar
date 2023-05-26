import {View} from 'react-native';
import React from 'react';
import StatusBarr from './components/StatusBar/StatusBar';
import ApplicationNavigator from './navigators/ApplicationNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';
// import AppNavigator from './navigators/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBarr backgroundColor="#fff" />
        <ApplicationNavigator />
      </View>
    </Provider>
  );
};

export default App;
