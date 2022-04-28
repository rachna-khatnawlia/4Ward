import React from 'react';
import Routes from './src/navigation/Routes';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet, Text, View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <View style={{ flex: 1 }}>

      {/* <StatusBar /> */}
      <Provider store={store}>

        <Routes />
      </Provider>


    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
