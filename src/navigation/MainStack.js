import React from 'react';
import { Home, SetPassword } from '../Screens';
import BottomTabNavigation from './BottomTabNavigation';
import navigationStrings from './navigationStrings';

export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      <Stack.Screen name={navigationStrings.HOME} component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} options={{ headerShown: false }} />

    </>
  );
}