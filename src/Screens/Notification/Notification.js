//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import HomeHeader from '../../Components/HomeHeader';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';


const DATA = [
    {
        id: "1",
        profile: imagePath.profilePic1,
        title: 'Russell Gordon ',
        time: '20 min ago'
        // onPress:
    },
    {
        id: "2",
        profile: imagePath.profilePic2,
        title: 'Sara ',
        time: '20 min ago'
    },
    {
        id: "3",
        profile: imagePath.profilePic1,
        title: 'Raphel ',
        time: '20 min ago'
    },
    {
        id: "4",
        profile: imagePath.profilePic2,
        title: 'Syker John ',
        time: '20 min ago'
    },
];

// create a component
const Notification = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.notificationConatiner}>
                <View style={styles.notification}>
                    <Image source={item.profile} style={styles.profilePic} />
                        <View>
                            <View style={styles.notificationTitle}>
                                <Text style={[styles.notificationTitletxt, { color: colors.themeredColor }]}>{item.title}</Text>
                                <Text style={styles.notificationTitletxt}>added a new post.</Text>
                            </View>
                            <View>
                                <Text style={styles.uploadTime}>{item.time}</Text>
                            </View>
                        </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor, }}>

            <HomeHeader headerText={strings.NOTIFICATION} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    notificationConatiner: {
        width: width - 23,
        alignSelf: 'flex-end',
    },
    notification: {
        flexDirection: 'row',
        paddingBottom: moderateScale(10),
    },
    profilePic: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: width / 2,
        marginRight: moderateScale(15)
    },
    notificationTitle: {
        flexDirection: 'row',

    },
    notificationTitletxt: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },
    uploadTime: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(12),
        color: colors.greyUploadTime,
        opacity: 0.4,
        paddingBottom: moderateScale(10)
    }
});

//make this component available to the app
export default Notification;
