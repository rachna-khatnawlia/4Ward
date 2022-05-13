//import liraries
import React, { useState } from 'react';
import { styles } from './style';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions/'
import ImagePicker from 'react-native-image-crop-picker';

// create a component
const EditProfile = ({ navigation }) => {
    const userData = useSelector(state => state.UserStatus.userLoginState);
    console.log("userDeatils on home page", userData);

    const [isLoading, setIsLoading] = useState(true);

    // -------------------------------Updata API data-------------------------------------
    const [upDateData, setUpdateData] = useState({
        post:userData?.profile,
        imageType: null,
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        email: userData?.email,
        phone: userData?.phone,
        phoneCode: '+91',
    })

    const { firstName, lastName, email, phone, phoneCode, post } = upDateData;
    const updateState = (data) => setUpdateData(() => ({ ...upDateData, ...data }))

    // ------------------------------Update Entered Password Function----------------------
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
                updateState({ post: res.data})
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }

    // ------------------------------Update Entered Password Function----------------------
    const onEditProfile = async () => {
        console.log("image", post)
        let form = new FormData();
        form.append('first_name', firstName);
        form.append('last_name', lastName);
        form.append('email', email);
        form.append('image', {
          uri: post,
          name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
          type: null,
        });
        
        console.log("udate profile API data : ", form)
        let header = { "Content-Type": "multipart/form-data" }
        actions.editProfile(form, header)
            .then(res => {
                console.log("Edit api res_+++++", res)
                alert("Updated Profile successfully....!!!")
                navigation.goBack();
            })
            .catch(err => {
                console.log(err, 'err');
                alert(err?.message);
            });
    }

    //--------------------------Image Picker Function------------------- 
    const ImgPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image, "my image>>>>>>");
            imageUpload(image.path)
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <ScrollView >
                {/* -------------Backward Arrow--------------- */}
                <BackWardArrow txtOnHeader={strings.PROFILE} />

                <View style={{ marginVertical: moderateScaleVertical(20) }}>
                    <Image source={(post) ? { uri: post } : imagePath.profilePic2} style={styles.profileImage} resizeMode='stretch' />
                    <TouchableOpacity onPress={ImgPicker}>
                        <Image source={imagePath.edit} style={styles.editProfile} />
                    </TouchableOpacity>
                </View>

                <View style={styles.loginContainer}>
                    {/* -------------First Name & Last Name--------------- */}
                    <View style={styles.TwoInputFields}>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.FIRST_NAME}
                                inputContainer={{ marginRight: moderateScale(15) }}
                                value={firstName}
                                onChangeTxt={(firstName) => updateState({ firstName })}
                            />
                        </View>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.LAST_NAME}
                                inputContainer={{ marginLeft: moderateScale(0) }}
                                value={lastName}
                                onChangeTxt={(lastName) => updateState({ lastName })}
                            />
                        </View>
                    </View>

                    {/* -------------Email Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.EMAIL}
                        value={email}
                        onChangeTxt={(email) => updateState({ email })}
                    />

                    {/* -------------Phone Input--------------- */}
                    <View style={commonStyle.phoneInputBox}>
                        <View style={commonStyle.countryPickerBg}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.7, alignItems: 'flex-end' }}>
                            <CommonInput
                                placeholderTxt={strings.MOBILE_NUMBER}
                                inputContainer={{ marginRight: moderateScale(0) }}
                                value={phone}
                                onChangeTxt={(phone) => updateState({ phone })}
                                keyBoardType="numeric"
                                keyboardAppearance='dark'
                                editable={false}
                                selectTextOnFocus={false}
                            />
                        </View>
                    </View>

                </View>

            </ScrollView >
            {/* ------------------Next Button----------------- */}
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <Button
                    ButtonText={strings.SAVE_CHANGES}
                    btnStyle={{ marginVertical: moderateScale(12) }}
                    onPress={onEditProfile}
                />
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};


//make this component available to the app
export default EditProfile;