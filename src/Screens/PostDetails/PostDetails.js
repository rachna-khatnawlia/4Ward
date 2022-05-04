//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Button from '../../Components/ButtonComponent';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';

// create a component
const PostDetails = ({ navigation, route }) => {
    const profile = route?.params?.item.profile;
    const fullName = route?.params?.item.name;
    const image = route?.params?.item.image;
    const location = route?.params?.item.location;
    const caption = route?.params?.item.caption;
    const uploaded = route?.params?.item.uploaded;
    return (
        <View style={styles.screen}>
            <ImageBackground source={image} style={styles.imgBackground} resizeMode="stretch">
                <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View style={styles.nameLocationContainer}>
                        <View style={styles.profilePhotoBox}>
                            <Image source={profile} style={styles.profilePic} />
                        </View>
                        <View style={styles.nameLocation}>
                            <Text style={styles.name}>{fullName}</Text>
                            <Text style={styles.location}>{location}</Text>
                        </View>
                        <TouchableOpacity style={styles.optionsBox} onPress={() => navigation.goBack()}>
                            <Image source={imagePath.cross} style={styles.optionsImg} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.captionArea}>
                        <Text style={styles.captionTxt}>{caption}</Text>
                        <Text style={styles.uploadTimeTxt}>{uploaded}</Text>
                        <Button ButtonText={strings.VIEW_MAP} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    imgBackground: {
        height: height,
        width: width,
        // resizeMode: 'stretch',
        opacity: 0.9,
    },
    screen: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    nameLocationContainer: {
        // backgroundColor: 'red',
        width: width - 46,
        flexDirection: 'row',
        alignSelf: 'center',
        // marginTop: moderateScale(15),
    },
    profilePhotoBox: {
        marginRight: moderateScale(16),
        // flex:0.12
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameLocation: {
        flex: 0.9,
        justifyContent: 'center'
    },
    name: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },
    location: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        color: colors.white,
        // paddingTop:moderateScale(1)
    },
    optionsBox: {
        flex: 0.1,
        justifyContent: 'center',
    },
    optionsImg: {
        alignSelf: 'flex-end'
    },
    captionArea: {
        paddingVertical: moderateScaleVertical(12),
        paddingHorizontal: width / 20,
    },
    captionTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        lineHeight: moderateScale(20),
        color: colors.white,
        marginBottom: moderateScale(10)
    },
    uploadTimeTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        color: colors.greyUploadTime,
        marginBottom: moderateScale(12)
    },

});

//make this component available to the app
export default PostDetails;
