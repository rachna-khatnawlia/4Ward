//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import navigationStrings from '../navigation/navigationStrings';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';


// create a component
export const HomePageFlatList = () => {
    console.log(height, width)
    const DATA = [
        {
            id: "1",
            profile: imagePath.profilePic1,
            name: strings.HOME_NAME1,
            location: strings.HOME_LOC,
            image: imagePath.homeFlatListPic4,
            caption: strings.HOME_CAPTION,
            uploaded: strings.HOME_UPLOAD_TIME,
            comments: strings.HOME_COMMENTS,
            likes: strings.HOME_LIKES,
        },
        {
            id: "2",
            profile: imagePath.profilePic2,
            name: strings.HOME_NAME2,
            location: strings.HOME_LOC,
            image: imagePath.homeFlatListPic1,
            caption: strings.HOME_CAPTION,
            uploaded: strings.HOME_UPLOAD_TIME,
            comments: strings.HOME_COMMENTS,
            likes: strings.HOME_LIKES,
        },
        {
            id: "3",
            profile: imagePath.profilePic1,
            name: strings.HOME_NAME3,
            location: strings.HOME_LOC,
            image: imagePath.homeFlatListPic3,
            caption: strings.HOME_CAPTION,
            uploaded: strings.HOME_UPLOAD_TIME,
            comments: strings.HOME_COMMENTS,
            likes: strings.HOME_LIKES,
        },
    ];

    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatListContainer}>

                {/* -------------------------Profile Photo, name, location and options icon------------ */}
                <View style={styles.profileNameContainer}>
                    <View style={styles.profilePhotoBox}>
                        <Image source={item.profile} style={styles.profilePhoto} resizeMode='contain' />
                    </View>
                    <View style={styles.nameLocation}>
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.optionsBox}>
                        <Image source={imagePath.dots} style={styles.optionsImg} />
                    </TouchableOpacity>
                </View>

                {/* ---------------------------------------Posted Image------------------------------- */}
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.POST_DETAILS, { item: item })}>
                    <Image source={item.image} style={styles.postedPic} resizeMode="cover" />
                </TouchableOpacity>

                {/* -----------------------------------Caption area---------------------------------- */}
                <View style={styles.captionArea}>
                    <Text style={styles.captionTxt}>{item.caption}</Text>
                    <Text style={styles.uploadTimeTxt}>{item.uploaded}</Text>
                    <View style={styles.likeComment}>
                        <Text style={styles.likeCommentTxt}>{item.comments}</Text>
                        <Text style={styles.likeCommentTxt}>{item.likes}</Text>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image source={imagePath.share} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: colors.inputColor,
        borderRadius: moderateScale(8),
        marginVertical: moderateScaleVertical(10),
        width: width - 46,
        alignSelf: 'center'
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
        color: colors.greyLocation,
    },
    likeComment: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionsBox: {
        flex: 0.05,
        justifyContent: 'center',
    },
    optionsImg: {
        alignSelf: 'flex-end'
    },
    postedPic: {
        alignSelf: 'center',
        height: height / 2.5,
        width: width - 62,
    },
    captionArea: {
        paddingVertical: moderateScaleVertical(12),
        paddingHorizontal: width / 20
    },
    captionTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(14),
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
    likeCommentTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        color: colors.white,
        paddingRight: moderateScale(16)
    },

});