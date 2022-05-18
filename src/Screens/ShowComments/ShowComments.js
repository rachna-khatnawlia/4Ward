//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, textScale, width } from '../../styles/responsiveSize';

// create a component
const ShowComments = ({ navigation,route }) => {
    // console.log(route?.params?.item?.item?.user?.profile)
    const profile = route?.params?.item?.item?.user?.profile;
    const fname = route?.params?.item?.item?.user?.first_name;
    const lname = route?.params?.item?.item?.name?.last_name;
    const caption = route?.params?.item?.item?.description;
    const uploaded = route?.params?.item?.item?.time_ago;

    return (
        <WrapperContainer>
            <View style={styles.commentcontainer}>
                <View style={styles.nameLocationContainer}>
                    <Image source={{ uri: profile }} style={styles.profilePic} />
                    <View style={styles.nameLocation}>
                        <Text style={styles.name}>{fname} {lname}</Text>
                    </View>
                    <TouchableOpacity style={styles.optionsBox} onPress={() => navigation.goBack()}>
                        <Image source={imagePath.cross} style={styles.optionsImg} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: moderateScale(15) }}>
                    <Text style={styles.caption}>{caption}</Text>
                    <Text style={styles.caption}>{uploaded}</Text>
                </View>

            </View>

            <ScrollView style={{}}>
            </ScrollView>

            {/* ----------------------Comment----------------- */}
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ flexDirection: 'row' }}>
                    <CommonInput
                        placeholderTxt="Comment"
                        inputContainer={{ flex: 0.74 }}
                    />
                    <Button
                        ButtonText="Post"
                        btnStyle={{ width: moderateScale(46), flex: 0.2, height: moderateScale(55) }}
                    />

                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    commentcontainer: {
        // backgroundColor:'red',
        width: width - moderateScale(46),
        alignSelf: 'center',
    },
    nameLocationContainer: {
        width: width - 46,
        flexDirection: 'row',
        alignSelf: 'center',
        // backgroundColor:'yellow'
    },
    profilePhotoBox: {
        marginRight: moderateScale(16),
    },
    profilePic: {
        height: moderateScale(45),
        width: moderateScale(45),
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameLocation: {
        flex: 0.9,
        justifyContent: 'center',
        marginLeft: moderateScale(12)
    },
    name: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },

    caption: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(14),
        marginLeft: moderateScale(7),
        color: colors.greyTutText
    },
    optionsBox: {
        flex: 0.1,
        justifyContent: 'center',
    },

    location: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        // color: colors.white,
        color: 'black',
        // paddingTop:moderateScale(1)
    },
});

//make this component available to the app
export default ShowComments;
