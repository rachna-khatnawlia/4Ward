//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList, PermissionsAndroid, Alert, TouchableOpacity } from 'react-native';
import HomeHeader from '../../Components/HomeHeader';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import CameraRoll from '@react-native-community/cameraroll';
import imagePath from '../../constants/imagePath';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';
import navigationStrings from '../../navigation/navigationStrings';
import fontFamily from '../../styles/fontFamily';
import ImageCropPicker from 'react-native-image-crop-picker';

// create a component
const Add = ({ navigation }) => {
    const [state, setState] = useState({
        photos: [],
        selectPhoto: ''
    });

    const { photos, selectPhoto } = state;
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    // console.log('show photo', selectPhoto);



    // --------------------------------Android Permissions--------------------------
    const hasAndroidPermission = async () => {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    const hasGalleryPermissions = async () => {

        if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
            return;
        }
        CameraRoll.getPhotos({
            first: 200,
            assetType: 'Photos',
        })
            .then(r => {
                updateState({ photos: r.edges });
                // console.log('image>>>>', r);
                updateState({ selectPhoto: r.edges[0].node.image.uri });
            })
            .catch(err => {
                console.log('erre', err);
            });
    }
    useEffect(() => {
        hasGalleryPermissions();
    }, [])

    // --------------------------------------LAUNCH CAMERA----------------------------
    const launchCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            navigation.navigate(navigationStrings.ADD_INFO, { selectPhoto: res?.path })
        });
    }

    const launchGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log("selected image from gallery", image);
        });
    }

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
    const imageToSwap = element => {
        console.log("index", element.item.node.image)
        updateState({ selectPhoto: element.item.node.image.uri });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor, position: 'relative' }}>

            <HomeHeader headerText={strings.SELECT_PIC} />
            <View>
                <Image
                    style={styles.firstImage}
                    // key={index}
                    source={{ uri: selectPhoto }}
                ></Image>
            </View>
            <ScrollView style={{}}>
                {/* -------------gallery AND RECENTS----------------- */}
                <View style={styles.detailsView}>
                    <View>
                        <Text style={styles.galleryTxt}>{strings.GALLERY}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.recentTxt}>{strings.RECENTS}</Text>
                        <TouchableOpacity style={styles.downwardArrow}>
                            <Image source={imagePath.downwardArrow} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ------------------------Image view-------------------- */}
                <FlatList data={photos}
                    scrollEnabled={true}
                    renderItem={(element) => {
                        // console.log("element", element)
                        let index = element.index
                        // console.log("index of images is:", index)

                        return (
                            <TouchableOpacity
                                onPress={() => imageToSwap(element)}
                            >
                                <Image
                                    key={index}
                                    source={{ uri: element.item.node.image.uri }}
                                    style={styles.galleryPhoto} />
                            </TouchableOpacity>
                        )

                    }}
                    numColumns={3}
                />
            </ScrollView >
            {/* ----------------------camera icon------------------- */}
            <TouchableOpacity onPress={selectImage}>
                <Image source={imagePath.camera} style={styles.cameraIcon} resizeMode="contain" />
            </TouchableOpacity>


        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    detailsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: moderateScale(25),
        paddingLeft: moderateScale(39),
        backgroundColor: colors.inputColor,
        height: moderateScale(56),
        alignItems: 'center',
        borderTopLeftRadius: moderateScale(9),
        borderTopRightRadius: moderateScale(9),
        marginTop: moderateScale(2)
    },
    galleryTxt: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },
    recentTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(14),
        color: colors.white
    },
    downwardArrow: {
        height: moderateScale(15),
        width: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstImage: {
        width: width,
        height: width,
        // borderRadius:width/2
    },
    galleryPhoto: {
        width: width / 3,
        height: width / 3,
        borderWidth: 0.3
    },
    cameraIcon: {
        height: width / 6,
        width: width / 6,
        position: 'relative',
        left: moderateScale(width - 100),
        bottom: moderateScale(80)
    }
});

//make this component available to the app
export default Add;
