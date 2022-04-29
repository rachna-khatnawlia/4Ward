import React, { useEffect } from 'react';
import Routes from './src/navigation/Routes';
import {
  StyleSheet, Text, View
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const data = userInfo?.user;
    console.log("console after google Login---",data);
    // actions.loginFunction(data);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log(error);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log(error);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(error);
    } else {
      // some other error happened
      console.log(error);
    }
  }
};

const App = () => {
  
  useEffect(() => {
    GoogleSignin.configure();
  }, [])

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
