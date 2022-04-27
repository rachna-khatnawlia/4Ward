//import liraries
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { } from 'react-native';
import MainStack from './MainStack';
import Authstack from './AuthStack';

const Stack = createStackNavigator();

// create a component
const Routes = () => {
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


