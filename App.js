import React from 'react';
import Routes from './src/navigation/Routes';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet, Text
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* <Provider store={store}> */}

        <Routes />
      {/* </Provider> */}


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
