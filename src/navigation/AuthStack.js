import React from 'react';

import { Login, Login1, SetPassword, SignUp, Tutorial, verifyOtp } from '../Screens';
import navigationStrings from './navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.TUTORIAL} component={Tutorial} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.LOGIN1} component={Login1} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.VERIFY_OTP} component={verifyOtp} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} options={{ headerShown: false }} />
    </>
  );
}
