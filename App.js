import React, { useEffect } from 'react';
import Routes from './src/navigation/Routes';
import {
  StyleSheet, Text, View
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { getItem, getLoginLocally } from './src/utils/utils';
import actions from './src/redux/actions';
import types from './src/redux/types';



const App = () => {
  const { dispatch } = store;

  useEffect(() => {
    GoogleSignin.configure();

    // getItem('intro').then((res)=>{
    //   if(!!res){
    //     actions.Intro()
    //   }
    // })

    getLoginLocally().then((res) => {
      console.log("GetLoginValue", res);
      dispatch({
        type: types.LOGIN,
        payload: res
      })
    })

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
