//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';

// create a component
const ShowComments = ({ navigation, route }) => {
    // console.log(route?.params?.item?.item?.id);
    const post_id = route?.params?.item?.item?.id;
    const profile = route?.params?.item?.item?.user?.profile;
    const fname = route?.params?.item?.item?.user?.first_name;
    const lname = route?.params?.item?.item?.name?.last_name;
    const caption = route?.params?.item?.item?.description;
    const uploaded = route?.params?.item?.item?.time_ago;

    const [commentToBePosted, setcommentToBePosted] = useState('');
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (isLoading || refresh) {

            let apidata = `?post_id=${post_id}&skip=${count}`
            console.log("get comment apiData +++++++++++", apidata)

            actions
                .getComment(apidata)
                .then((res) => {
                    // console.log("COMMENT API DATA++++++", res?.data)
                    if (refresh) {
                        setComment(res?.data)
                    } else {
                        setComment([...comment, ...res.data]);
                    }
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log("comment error", err);
                });
        }
    }, [isLoading, refresh])

    const _commentView = ({ item, index }) => {
        // console.log("comment view", element)
        return (
            <View style={{ marginVertical: moderateScale(5) }}>
                {/* ------name and profile of user commenting---------- */}
                <View style={styles.nameLocationContainer}>
                    <Image source={{ uri: profile }} style={styles.profilePicComment} />
                    <View style={styles.nameLocation}>
                        <Text style={styles.nameComment}>{item.user.first_name} {item.user.last_name} </Text>
                    </View>
                </View>
                {/* --------------------comment--------------- */}
                <View style={styles.commentBox}>
                    <Text style={styles.caption}>{item.comment} ({item.time_ago})</Text>
                </View>
            </View>
        )
    }

    const _postComment = () => {
        let apidata = `?post_id=${post_id}&comment=${commentToBePosted}`

        console.log("COMMENT POST DATA++++++++++++++++++", apidata);

        actions
            .postComment(apidata)
            .then((res) => {
                console.log("POST COMMENT API", res)

                alert(res?.message)
            }).catch(err => {
                console.log(err)
                alert(err)
            })
    }

    const _loadMoreComments = () => {
        // alert("end")
        console.log('count++++++++++', count)
        setCount(count + 15)
        setIsLoading(true)

    }

    const _refreshComments = () => {
        setCount(0);
        setRefresh(true)
    }

    return (
        <WrapperContainer isLoading={isLoading} withModal={isLoading}>
            {/* --------------_Comments Heading--------------- */}
            <Text style={[styles.name, { textAlign: 'center', marginVertical: moderateScale(5) }]}>Comments</Text>
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
                <Text style={styles.commentedBy}>Commented By</Text>
            </View>

            {/* --------------Comments View-------------------- */}
            <FlatList
                data={comment}
                keyExtractor={(item, index) => String(index)}
                renderItem={_commentView}
                onEndReached={_loadMoreComments}
                refreshControl={
                    <RefreshControl
                        onRefresh={_refreshComments}
                        refreshing={refresh}
                        title="Pull to refresh"
                        tintColor={colors.themeredColor}
                        titleColor="#fff"
                    />
                }
            // inverted={true}
            />

            {/* ------------CommentInput and Button----------------- */}
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ flexDirection: 'row' }}>
                    <CommonInput
                        value={commentToBePosted}
                        onChangeTxt={(commentToBePosted) => setcommentToBePosted(commentToBePosted)}
                        placeholderTxt="Comment"
                        inputContainer={{ flex: 0.74 }}
                    />
                    <Button
                        ButtonText="Post"
                        btnStyle={{ width: moderateScale(46), flex: 0.2, height: moderateScale(55) }}
                        onPress={_postComment}
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
    commentedBy: {
        marginLeft: moderateScale(5),
        marginVertical: moderateScale(10),
        fontSize: textScale(13),
        color: colors.white
    },
    commentBox: {
        marginHorizontal: moderateScale(62)
    },
    profilePicComment: {
        height: moderateScale(35),
        width: moderateScale(35),
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameComment: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(14),
        color: colors.white
    }

});

//make this component available to the app
export default ShowComments;
