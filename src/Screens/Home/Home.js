//import liraries
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import navigationStrings from '../../navigation/navigationStrings';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import actions from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';
import WrapperContainer from '../../Components/WrapperContainer';
import { cloneDeep, isArray } from 'lodash';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// create a component
const Home = ({ route }) => {
    // -------------useStates-----------------
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [snapState, setSnapState] = useState(0);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        console.log("updated post data", post)
    }, [post])

    useEffect(() => {
        if (isLoading || refresh) {
            let apidata = `?skip=${count}`
            actions.getPost(apidata, {}).then((res) => {
                console.log("GET POST DATA+++++++++++++++++", res?.data)
                setIsLoading(false)
                setRefresh(false)
                if (refresh) {
                    setPost(res?.data)
                } else {
                    setPost([...post, ...res?.data])
                }
            }).catch((error) => {
                console.log(error, "erorroro");
            })
        }
    }, [isLoading, refresh])

    // --------------------like API-------------------
    const _likePost = (element) => {
        const id = element.item.id;
        let likeStatus = Number(element.item.like_status) ? 0 : 1
        console.log("id and like status", id, likeStatus);

        const apiData = {
            post_id: id,
            status: likeStatus
        }
        console.log(`like apiData+++++++++++++`, apiData);

        actions
            .likePost(apiData)
            .then((res) => {
                console.log("like Api response", res)
                let newArray = cloneDeep(post)
                newArray = newArray.map((item, index) => {
                    if (item?.id == id) {
                        item.like_status = likeStatus,
                            item.like_count = likeStatus ? Number(item?.like_count) + 1 : Number(item?.like_count) - 1;
                        return item
                    }
                    else {
                        return item
                    }
                })
                setPost(newArray)
                console.log(newArray, "")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const _commentPost = (element) => {
        navigation.navigate(
            navigationStrings.SHOW_COMMENTS,
            {
                item:element
            }
        )
    }

    //-----------------------on refresh page--------------
    const _refresh = () => {
        setCount(0)
        setRefresh(true)
    }

    const navigation = useNavigation()
    const renderItem = (element, index) => {
        console.log("element to render in flatlist", element, element.item.images.file.length)
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
                <View>
                    {
                        element?.item?.images?.file &&
                            isArray(element?.item?.images?.file) &&
                            element?.item?.images?.file.length ? (
                            <>
                                <Carousel
                                    data={element?.item?.images?.file}
                                    sliderWidth={moderateScale(width - 60)}
                                    itemWidth={moderateScale(width - 5)}
                                    scrollEnabled={true}
                                    horizontal
                                    onSnapToItem={index => setSnapState(index)}
                                    renderItem={(elem, index) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate(navigationStrings.POST_DETAILS,
                                                    { item: element, picShow: elem.item })}
                                            >
                                                <Image source={{ uri: elem.item }} style={styles.postedPic} resizeMode="cover" />
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </>
                        ) : null
                    }
                    {
                        <Pagination
                            dotsLength={
                                element?.item?.images?.file &&
                                    isArray(element?.item?.images?.file) &&
                                    element?.item?.images?.file.length > 1
                                    ? element?.item?.images?.file.length
                                    : []
                            }
                            activeDotIndex={snapState}
                            containerStyle={{ paddingVertical: 0 }}
                            dotColor={colors.themeredColor}
                            dotStyle={{ width: moderateScale(8), height: moderateScale(8), borderRadius: width / 2, marginHorizontal: -5 }}
                            inactiveDotStyle={{ width: moderateScale(17), height: moderateScale(17), borderRadius: width / 2, marginHorizontal: -10 }}
                            inactiveDotColor={'black'}
                            inactiveDotOpacity={0.4}
                            activeOpacity={0.8}
                        />
                    }
                </View>

                {/* -----------------------------------Caption area---------------------------------- */}
                <View style={styles.captionArea}>
                    <Text style={styles.captionTxt}>{element.item.description}</Text>
                    <Text style={styles.uploadTimeTxt}>{element.item.time_ago}</Text>
                    <View style={styles.likeComment}>
                        <TouchableOpacity onPress={() => _commentPost(element)}>
                            <Text style={styles.likeCommentTxt}>{element.item.comment_count} Comments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => _likePost(element)}>
                            <Text style={styles.likeCommentTxt}>{element.item.like_count} Likes</Text>
                        </TouchableOpacity>
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
            <View style={{ paddingBottom: moderateScale(120) }}>
                <FlatList
                    data={post}
                    renderItem={(element, index) => renderItem(element, index)}
                    onEndReached={({ }) => {
                        alert('list ended');
                        console.log("count+++++++", count);
                        setCount(count + 8);
                        setIsLoading(true);
                    }}
                    onEndReachedThreshold={0.5}
                    refreshControl={
                        <RefreshControl
                            onRefresh={_refresh}
                            refreshing={refresh}
                            title="Pull to refresh"
                            tintColor={colors.themeredColor}
                            titleColor="#fff"
                        />
                    }
                    extraData={post}

                />
            </View>
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
        // alignSelf: 'center',
        // height: height / 2.5,
        // width: height/3,
        width: moderateScale(width - 20),
        height: moderateScale(width - 40),
        marginVertical: moderateScaleVertical(10),
        alignSelf: 'center',
    },
    captionArea: {
        paddingBottom: moderateScale(20),
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