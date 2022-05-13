import React, { useEffect } from 'react';
import Routes from './src/navigation/Routes';
import {
  StyleSheet, Text, View
} from 'react-native';

import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { getItem, getLoginLocally } from './src/utils/utils';
import actions from './src/redux/actions';
import types from './src/redux/types';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const { dispatch } = store;

  useEffect(() => {
    GoogleSignin.configure();

    getItem('introdata').then((res)=>{
      console.log(res,"getItem>>>res");
      if(res != null){
        actions.Intro(res)
      }
    })

    getLoginLocally().then((res) => {
      console.log("GetLoginValue", res);
      dispatch({
        type: types.LOGIN,
        payload: res
      })
    })
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
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
