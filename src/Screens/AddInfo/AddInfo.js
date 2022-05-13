//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import imagePath from '../../constants/imagePath';
import ImageCropPicker from 'react-native-image-crop-picker';
import actions from '../../redux/actions';
import navigationStrings from '../../navigation/navigationStrings';
// create a component
const AddInfo = ({ navigation, route }) => {
    const image = route?.params?.image;
    console.log("selected image from add page>>>>>>>>>>>>>>>>>>>", image);

    //--------------Fields usestate---------------
    const [postData, setpostData] = useState({
        description: '',
        location: '',
        post: [image],
        imageType: null,
    })

    const { description, location, post, imageType } = postData;
    const updateState = (data) => setpostData(() => ({ ...postData, ...data }))

    console.log("concatenated array", post)
    const [isLoading, setIsLoading] = useState(false);

    // --------------------------------------LAUNCH CAMERA----------------------------
    const launchCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    // --------------------------------------LAUNCH GALLERY----------------------------  
    const launchGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log("************************", image);
            imageUpload(image.path)
        });
    }

    // --------------------------------------SELECT OPTIONS----------------------------
    const selectImage = () => {
        Alert.alert(
            "Upload Image",
            "Choose an option",
            [
                {
                    text: "Camera",
                    onPress: launchCamera
                },
                {
                    text: "Gallery",
                    onPress: launchGallery,

                },
                {
                    text: "Cancel",
                    onPress: () => console.log("OK Pressed"),
                    style: "cancel"
                }
            ]
        );

    }

    //--------------------------------delete image on cross button click--------------
    const cancelImage = (index) => {
        console.log("indexxxxxxx>>>>", index)
        let newArray = [...post];
        newArray.splice(index, 1);
        updateState({ post: newArray });

    }

    //---------------------------upload single image and  concat in array-------------
    const imageUpload = (image) => {
        setIsLoading(true);
        let apiData = new FormData()
        apiData.append('image', {
            uri: image,
            name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
            type: 'image/jpeg',
        })
        console.log("single pic API data : ", apiData)
        let header = { "Content-Type": "multipart/form-data" }
        actions.singleImageApi(apiData, header)
            .then(res => {
                console.log("single image api res_+++++", res)
                alert("single image api hit successfully....!!!")
                setIsLoading(false);
                updateState({ post: post.concat(res.data) })
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }

    //--------------------------Send post on POST button--------------------
    const _postApi = () => {
        setIsLoading(true);
        let apiData = new FormData();
        post.map((item) => {
            // console.log('item', item);
            apiData.append('images[]', item)
        });
        apiData.append('description', description)
        apiData.append('latitude', 3.222)
        apiData.append('longitude', 9.45682)
        apiData.append('location_name', location)
        apiData.append('type', 11)

        console.log("Post API data : ", apiData)
        let header = { "Content-Type": "multipart/form-data" }
        actions.post(apiData, header)
            .then(res => {
                console.log("post api res_+++++", res)
                alert(res?.message);
                setIsLoading(false);
                navigation.navigate(navigationStrings.HOME, console.log(apiData))
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <ScrollView>
                <BackWardArrow txtOnHeader={strings.ADD_INFO} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: moderateScale(24), marginBottom: moderateScale(7), flexDirection: 'row' }}>

                        {
                            post ? post.map((element, index) => {
                                return (
                                    <View>
                                        <Image source={{ uri: element }} style={styles.uploadedImage} />
                                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => cancelImage(index)}>
                                            <Image source={imagePath.cross} style={styles.crossIcon} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }) : null
                        }

                        <TouchableOpacity style={styles.uploadedImage} onPress={selectImage}>
                            <Image source={imagePath.plus} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <CommonInput
                    placeholderTxt={strings.WRITE_DESCRIPTION_HERE}
                    inputContainer={{ alignItems: 'flex-start', height: moderateScale(96) }}
                    value={description}
                    onChangeTxt={(description) => updateState({ description })}
                />
                <CommonInput
                    placeholderTxt={strings.ADD_LOCATION}
                    value={location}
                    onChangeTxt={(location) => updateState({ location })}
                />
            </ScrollView >

            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <Button
                    ButtonText={strings.POST}
                    btnStyle={{ marginVertical: moderateScale(12) }}
                    onPress={_postApi}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    uploadedImage: {
        height: width / 4.5,
        width: width / 4.5,
        backgroundColor: colors.inputColor,
        borderRadius: moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: moderateScale(16),
        marginVertical: moderateScaleVertical(8),

        marginRight: moderateScale(12)
    },
    crossIcon: {
        position: 'absolute',
        right: 5,
        top: -100
    }
});

//make this component available to the app
export default AddInfo;