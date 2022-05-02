//import liraries
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, } from 'react-native';
import Button from '../../Components/ButtonComponent';
import HomeHeader from '../../Components/HomeHeader';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import colors from '../../styles/colors';

// create a component
const Profile = () => {
    const handleLogout = async () => {
        try {
            await GoogleSignin.signOut();
            actions.Logout();
        }
        catch (error) {
            console.log("handleLogout Error", error);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>

            <HomeHeader headerText={strings.PROFILE} />

            <ScrollView>
                <View>

                </View>

                <Button
                        ButtonText="logout"
                        onPress={handleLogout}
                    />
            </ScrollView >
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Profile;
