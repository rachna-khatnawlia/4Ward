//import liraries
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import MainStack from './MainStack';
import Authstack from './AuthStack';
import IntroStack from './IntroStack';

const Stack = createStackNavigator();

// create a component
const Routes = () => {
  const userData = useSelector(state => state.UserStatus.userLoginState);
  const intro = useSelector(state => state?.introReducer?.introData)
  console.log('ruh', intro)
  console.log("userData on route page", intro, userData || userData?.access_token);
  // console.log("access token",userData?.access_token)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          intro ?
            IntroStack(Stack)
            :
            userData && userData?.access_token ? MainStack(Stack) : Authstack(Stack)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Routes;


