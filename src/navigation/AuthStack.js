import React from 'react';

import { Login, Tutorial } from '../Screens';
import navigationStrings from './navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.TUTORIAL} component={Tutorial} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
    </>
  );
}
