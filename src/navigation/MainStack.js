import React from 'react';
import { EditProfile, PostDetails, SetPassword } from '../Screens';
import BottomTabNavigation from './BottomTabNavigation';
import navigationStrings from './navigationStrings';

export default function (Stack) {

  return (
    <>
      <Stack.Screen name={navigationStrings.BOTTOM_TAB} component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.POST_DETAILS} component={PostDetails} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile} options={{ headerShown: false }} />
    </>
  );
}