//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image,  } from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import strings from '../../constants/lang';
import colors from '../../styles/colors';

// create a component
const Search = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>

            <HomeHeader headerText={strings.SEARCH} />

            <ScrollView>
                <View>

                </View>

            </ScrollView >
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
 
});

//make this component available to the app
export default Search;
