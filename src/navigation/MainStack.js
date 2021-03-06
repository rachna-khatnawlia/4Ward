import React from 'react';
import { AddInfo, EditProfile, PostDetails, SetPassword, ShowComments } from '../Screens';
import BottomTabNavigation from './BottomTabNavigation';
import navigationStrings from './navigationStrings';

export default function (Stack) {

  return (
    <>
      <Stack.Screen name={navigationStrings.BOTTOM_TAB} component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.POST_DETAILS} component={PostDetails} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.ADD_INFO} component={AddInfo} options={{ headerShown: false }} />
      <Stack.Screen name={navigationStrings.SHOW_COMMENTS} component={ShowComments} options={{ headerShown: false }} />

    </>
  );
}