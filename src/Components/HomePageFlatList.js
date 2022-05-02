//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import imagePath from '../constants/imagePath';

import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

export const DATA = [
    {
        id: "1",
        profile: imagePath.profilePic1,
        name: 'Russell Gordon',
        image: imagePath.homeFlatListPic1,
        location: 'Sector 28D, Chandigarh',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
        uploaded: '1 hr ago',
        comments: 'Comments 1,254',
        likes: 'Likes 44,686'
    },
    {
        id: "2",
        profile: imagePath.profilePic2,
        name: 'Lelia Walker',
        location: 'Sector 28D, Chandigarh',
        image: imagePath.homeFlatListPic1,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
        uploaded: '1 hr ago',
        comments: 'Comments 1,254',
        likes: 'Likes 44,686'
    },
    {
        id: "3",
        profile: imagePath.profilePic1,
        name: 'Fannie Kim',
        location: 'Sector 28D, Chandigarh',
        image: imagePath.homeFlatListPic1,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
        uploaded: '1 hr ago',
        comments: 'Comments 1,254',
        likes: 'Likes 44,686'
    },
];


// create a component
export const HomePageFlatList = ({ item }) => {
    return (
        <View style={styles.flatListContainer}>

            <View style={styles.profileName}>
                <View style={styles.profilePhotoBox}>
                    <Image source={item.profile} style={styles.profilePhoto} />
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

            <View style={{}}>
                <Image source={item.image} style={styles.postedPic} />
            </View>

            <View style={styles.captionArea}>
                <Text style={styles.captionTxt}>{item.caption}</Text>
                <Text style={styles.uploadTimeTxt}>{item.uploaded}</Text>
                <View style={styles.likeComment}>
                    <Text style={styles.likeCommentTxt}>{item.comments}</Text>
                    <Text style={styles.likeCommentTxt}>{item.likes}</Text>
                        <Image source={imagePath.share} style={styles.shareImg}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: colors.inputColor,
        marginHorizontal: moderateScale(24),
        borderRadius: moderateScale(8),
        marginVertical: moderateScaleVertical(12),
        paddingHorizontal: moderateScale(8),
    },
    profileName: {
        flex: 0.05,
        flexDirection: 'row',
        marginVertical: moderateScaleVertical(16)
    },
    profilePhotoBox: {
        marginLeft: moderateScale(5),
        marginRight: moderateScale(16),
    },
    profilePhoto: {
        height: moderateScale(40),
        width: moderateScale(40),
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
        color: colors.white
    },
    location:{
        fontFamily:fontFamily.barlowRegular,
        fontSize:textScale(13),
        color:colors.greyLocation,
        // paddingTop:moderateScale(1)
    },
    likeComment: {
        flexDirection: 'row',
        justifyContent:'space-between'
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
        height: moderateScale(400),
        resizeMode: 'cover',
        width: moderateScale(315)
    },
    captionArea:{
        paddingVertical:moderateScaleVertical(12),
        paddingHorizontal:moderateScale(10)
    },
    captionTxt:{
        fontFamily:fontFamily.barlowRegular,
        fontSize:textScale(14),
        lineHeight:moderateScale(20),
        color:colors.white,
        marginBottom:moderateScale(10)
    },
    uploadTimeTxt:{
        fontFamily:fontFamily.barlowRegular,
        fontSize:textScale(13),
        color:colors.greyUploadTime,
        marginBottom:moderateScale(12)
    },
    likeCommentTxt:{
        fontFamily:fontFamily.barlowRegular,
        fontSize:textScale(15),
        color:colors.white,
        paddingRight:moderateScale(16)
    },
    shareImg:{
        alignSelf:'center',
    }

});