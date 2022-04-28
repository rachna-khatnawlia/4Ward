//import liraries
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import Authstack from './AuthStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

// create a component
const Routes = () => {
  const userData = useSelector(state => state.UserStatus.userLoginState);
  console.log("userData on route page", userData);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {false ? MainStack(Stack) : Authstack(Stack)}
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

//make this component available to the app
export default Routes;


