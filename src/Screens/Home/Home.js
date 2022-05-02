//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import { DATA, HomePageFlatList } from '../../Components/HomePageFlatList';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <HomeHeader logoImage={true} locationImage={true} />

            <ScrollView>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={HomePageFlatList}
                    />

                </View>

            </ScrollView >
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

//make this component available to the app
export default Home;