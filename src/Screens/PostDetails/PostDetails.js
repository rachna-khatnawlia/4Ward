//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Button from '../../Components/ButtonComponent';
import imagePath from '../../constants/imagePath';
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
        <View style={styles.mainContainer}>
            {/* <ImageBackground source={image} style={styles.imgBackground}> */}
                <SafeAreaView>

                <View>
                <View style={styles.profileNameContainer}>
                    <View style={styles.profilePhotoBox}>
                        <Image source={profile} style={styles.profilePhoto} />
                    </View>
                    <View style={styles.nameLocation}>
                        <View>
                            <Text style={styles.name}>{fullName}</Text>
                        </View>
                        <View>
                            <Text style={styles.location}>{location}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.optionsBox}>
                        <Image source={imagePath.dots} style={styles.optionsImgj} />
                    </TouchableOpacity>
                </View>
                </View>
                {/* <View>

                    <Button ButtonText="VIEW MAP" />
                </View> */}
                </SafeAreaView>
            {/* </ImageBackground> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        // width: width - 46,
        // paddingVertical: moderateScaleVertical(10),
        alignSelf: 'center'

    },
    imgBackground: {
        height: height,
        width: width,
        resizeMode: 'center', 
        // justifyContent: 'space-between',
    },
    profileNameContainer: {
        flex: 0.05,
        flexDirection: 'row',
        marginVertical: moderateScaleVertical(16),
        paddingHorizontal: moderateScale(12)
    },
    profilePhotoBox: {
        marginRight: moderateScale(16),
    },
    profilePhoto: {
        height: height / 20,
        width: width / 10,
        borderRadius: moderateScale(50),
        resizeMode: 'cover',
    },
    nameLocation: {
        flex: 0.9,
        justifyContent: 'center'
    },
    name: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: 'red'
    },
    location: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        color: colors.greyLocation,
        // paddingTop:moderateScale(1)
    },
});

//make this component available to the app
export default PostDetails;
