//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import imagePath from '../constants/imagePath';
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
            name: 'Russell Gordon',
            image: imagePath.homeFlatListPic1,
            location: 'Sector 28D, Chandigarh',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
            uploaded: '1 hr ago',
            comments: 'Comments 1,254',
            likes: 'Likes 44,686',
            // action: () => PostDetailScreen()
        },
        {
            id: "2",
            profile: imagePath.profilePic2,
            name: 'Lelia Walker',
            location: 'Sector 28D, Chandigarh',
            image: imagePath.homeFlatListPic2,
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
            image: imagePath.homeFlatListPic3,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.',
            uploaded: '1 hr ago',
            comments: 'Comments 1,254',
            likes: 'Likes 44,686',
        },
    ];

    const PostDetailScreen = () => {
        console.log(profile)
        navigation.navigate(navigationStrings.POST_DETAILS,{profile:item.profile})
    }
    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatListContainer}>

                <View style={styles.profileNameContainer}>
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

                <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.POST_DETAILS,{item:item})}>
                    <Image source={item.image} style={styles.postedPic} />
                </TouchableOpacity>

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
        // marginHorizontal: moderateScale(24),
        // paddingHorizontal: moderateScale(8),
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
        color: colors.greyLocation,
        // paddingTop:moderateScale(1)
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
        resizeMode: 'cover',
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