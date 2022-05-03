//import liraries
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import Authstack from './AuthStack';
import IntroStack from './IntroStack';

import { useSelector } from 'react-redux';
import navigationStrings from './navigationStrings';
import { SetPassword } from '../Screens';

const Stack = createStackNavigator();

// create a component
const Routes = () => {
  const userData = useSelector(state => state.UserStatus.userLoginState);
  // const intro = useSelector(state => state.intro)
  // console.log('ruh',intro)
  // console.log("userData on route page", userData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {!!intro ? IntroStack(Stack)  : Authstack(Stack)} */}

        {userData ? MainStack(Stack) : Authstack(Stack)}
        <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Routes;


