//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import imagePath from '../../constants/imagePath';
import ImageCropPicker from 'react-native-image-crop-picker';
// create a component
const AddInfo = ({ route }) => {
    const image = route?.params?.image;
    console.log("selected image from add page", image);

    //--------------Fields usestate---------------
    const [postData, setpostData] = useState({
        description: '',
        location: '',
        post: [],
        imageType: null,
    })

    const { description, location, post, imageType } = postData;
    const updateState = (data) => setpostData(() => ({ ...postData, ...data }))

    console.log("post selected on plus button", image);

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
            updateState({ post: post.concat(image.path || image.sourceURL) })
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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <ScrollView>
                <BackWardArrow txtOnHeader={strings.ADD_INFO} />
                <View style={{ marginHorizontal: moderateScale(24), marginBottom: moderateScale(7), flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <View>
                        <Image source={image} style={styles.uploadedImage} />
                    </View>

                    {
                        post ? post.map((element) => {
                            return (
                                <View>
                                    <Image source={{ uri: element }} style={styles.uploadedImage} />
                                    <Image source={imagePath.cross} style={{ position: 'absolute', right: -10, top: 0 }} />
                                </View>
                            )
                        }) : null
                    }

                    <TouchableOpacity style={styles.uploadedImage} onPress={selectImage}>
                        <Image source={imagePath.plus} resizeMode="cover" />
                    </TouchableOpacity>
                </View>

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
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    uploadedImage: {
        height: width / 5.5,
        width: width / 5.5,
        backgroundColor: colors.inputColor,
        borderRadius: moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: moderateScale(16),
        marginVertical: moderateScaleVertical(8),
        position: 'relative'
    }
});

//make this component available to the app
export default AddInfo;
