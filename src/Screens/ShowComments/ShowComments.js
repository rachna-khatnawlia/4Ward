//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, RefreshControl, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';
import { styles } from './styles';

// create a component
const ShowComments = ({ navigation, route }) => {
    // console.log(route?.params?.item?.item?.id);
    const post_id = route?.params?.item?.item?.id;
    const profile = route?.params?.item?.item?.user?.profile;
    const fname = route?.params?.item?.item?.user?.first_name;
    const lname = route?.params?.item?.item?.name?.last_name;
    const caption = route?.params?.item?.item?.description;
    const uploaded = route?.params?.item?.item?.time_ago;


    // --------------useStates------------
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

    //---------------Show User Comments--------------
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


    //---------------Post new comment-------------
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

    //-----------load more comments on onEndReached
    const _loadMoreComments = () => {
        // alert("end")
        console.log('count++++++++++', count)
        setCount(count + 15)
        setIsLoading(true)
    }

    //----------Show New comments on refresh
    const _refreshComments = () => {
        setCount(0);
        setRefresh(true)
    }

    return (
        <WrapperContainer isLoading={isLoading} withModal={isLoading}>
            {/* --------------_Comments Heading--------------- */}
            <Text style={[styles.name, styles.commentsHeading ]}>{strings.COMMENTS}</Text>
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
                <Text style={styles.commentedBy}>{strings.COMMENTED_BY}</Text>
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
                        title={strings.PULL_TO_REFRESH}
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


//make this component available to the app
export default ShowComments;