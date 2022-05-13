//import liraries
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../navigation/WrapperContainer';
import colors from '../../styles/colors';
import strings from '../../constants/lang/index';
import navigationStrings from '../../navigation/navigationStrings';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import actions from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';


// create a component
const Home = ({ route }) => {
    const [post, setPost] = useState()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        actions.getPost().then((res) => {
            // console.log(res.data, "getPostData++++++++++")
            setIsLoading(false);
            setPost(res.data)
        })
    }, [])
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
    const renderItem = (element, index) => {
        console.log("element to render in flatlist", element)
        return (
            <View style={styles.flatListContainer}>

                {/* -------------------------Profile Photo, name, location and options icon------------ */}
                <View style={styles.profileNameContainer}>
                    <View style={styles.profilePhotoBox}>
                        <Image source={{ uri: element.item.user.profile }} style={styles.profilePhoto} resizeMode='stretch' />
                    </View>
                    <View style={styles.nameLocation}>
                        <View>
                            <Text style={styles.name}>{element.item.user.first_name} {element.item.user.last_name}</Text>
                        </View>
                        <View>
                            <Text style={styles.location}>{element.item.location_name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.optionsBox}>
                        <Image source={imagePath.dots} style={styles.optionsImg} />
                    </TouchableOpacity>
                </View>

                {/* ---------------------------------------Posted Image------------------------------- */}
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.POST_DETAILS, { item: element })}>
                    <Image source={element.item.images.file} style={styles.postedPic} resizeMode="cover" />
                </TouchableOpacity>

                {/* -----------------------------------Caption area---------------------------------- */}
                <View style={styles.captionArea}>
                    <Text style={styles.captionTxt}>{element.item.description}</Text>
                    <Text style={styles.uploadTimeTxt}>{element.item.time_ago}</Text>
                    <View style={styles.likeComment}>
                        <Text style={styles.likeCommentTxt}>{element.item.comment_count} Comments</Text>
                        <Text style={styles.likeCommentTxt}>{element.item.like_count} Likes</Text>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image source={imagePath.share} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <WrapperContainer isLoading={isLoading} withModal={isLoading}>
            <HomeHeader logoImage={true} locationImage={true} />
            <ScrollView>
                <View>
                    <FlatList
                        data={post}
                        renderItem={(element, index) => renderItem(element, index)}
                    />
                </View>
            </ScrollView >
        </WrapperContainer>
    );
};

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
        height: width / 8.3,
        width: width / 8.3,
        borderRadius: moderateScale(50),
        // backgroundColor:'yello'
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
//make this component available to the app
export default Home;