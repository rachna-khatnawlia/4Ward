import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Add, Home, Notification, Profile, Search } from '../Screens';
import navigationStrings from './navigationStrings';
import colors from '../styles/colors';
import { moderateScale, width } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import { styles } from '../Screens/Login/styles';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, tabBarShowLabel: false, 
                tabBarStyle: { 
                    height: moderateScale(80), 
                    backgroundColor: colors.inputColor,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    borderColor: colors,
                    position: 'absolute'
                },
            })}
        >
            <Tab.Screen
                name={navigationStrings.HOME} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={imagePath.home}
                            style={[styles.tabIcon, { tintColor: focused ? colors.themeredColor : colors.white, }]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.SEARCH} component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={imagePath.search}
                            style={[styles.tabIcon, { tintColor: focused ? colors.themeredColor : colors.white, }]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.ADD} component={Add}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={imagePath.add}
                            style={[styles.tabIcon, { tintColor: focused ? colors.themeredColor : colors.white, }]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.NOTIFICATION} component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={imagePath.notification}
                            style={[styles.tabIcon, { tintColor: focused ? colors.themeredColor : colors.white, }]}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={navigationStrings.PROFILE} component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={imagePath.profile}
                            style={[styles.tabIcon, { tintColor: focused ? colors.themeredColor : colors.white, }]}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    tabIcon: {
        height: moderateScale(width / 20),
        width: moderateScale(width / 20),
        resizeMode: 'contain',
        marginTop: moderateScale(10),
    },
});
