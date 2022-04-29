import React from 'react';

import { Tutorial } from '../Screens';
import navigationStrings from './navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.TUTORIAL} component={Tutorial} options={{ headerShown: false }} />
    </>
  );
}
