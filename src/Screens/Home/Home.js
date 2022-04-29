//import liraries
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { removeLoginLocally } from '../../utils/utils';


// create a component
const Home = ({ navigation }) => {
    const handleLogout = async () =>{
        try{
            await GoogleSignin.signOut();
            actions.Logout();
        }
        catch(error){
            console.log("handleLogout Error", error);
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                <View>
                  <Text>HomeScreen</Text>
                  <Button
                    ButtonText="logout"
                    onPress={handleLogout}
                    />
                </View>

            </SafeAreaView>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
   
});

//make this component available to the app
export default Home;