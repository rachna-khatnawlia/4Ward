//import liraries
import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import { HomePageFlatList } from '../../Components/HomePageFlatList';
import colors from '../../styles/colors';

// create a component
const Home = () => {
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