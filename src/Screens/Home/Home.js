//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import HomeHeader from '../../Components/HomeHeader';
import { HomePageFlatList } from '../../Components/HomePageFlatList';
import colors from '../../styles/colors';

// create a component
const Home = ({route}) => {
    // const name = route?.params?.userDetails.first_name;
    // console.log("name on home page is ", name)
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <HomeHeader logoImage={true} locationImage={true} />
            <ScrollView>
                <View>
                    <HomePageFlatList />
                </View>
            </ScrollView >
        </SafeAreaView>
    );
};

//make this component available to the app
export default Home;