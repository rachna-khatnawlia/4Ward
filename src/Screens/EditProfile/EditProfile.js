//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { height, moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions/'
import ImagePicker from 'react-native-image-crop-picker';

// create a component
const EditProfile = ({ navigation }) => {
    const userData = useSelector(state => state.UserStatus.userLoginState);
    console.log("userDeatils on home page",userData);
    // -------------------------------SignUp data-------------------------------------
    const [upDateData, setUpdateData] = useState({
        profilePic: imagePath.profilePic2,
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        email: userData?.email,
        phone: userData?.phone,
        phoneCode: '+91',
    })

    const { firstName, lastName, email, phone, phoneCode, profilePic } = upDateData;
    const updateState = (data) => setUpdateData(() => ({ ...upDateData, ...data }))

    const onEditProfile = async () => {
        let editAPIdata = {
            first_name: firstName,
            last_name: lastName,
            email: email,
        }
        console.log("Signup data : ", editAPIdata)
        try {
            const res = await actions.Edit(editAPIdata)
            console.log("Edit api res_+++++", res)
            navigation.navigate(navigationStrings.PROFILE)
            alert("User data updated successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }
    

    const ImgPicker = () =>{
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image,"my image>>>>>>");
          updateState({
            profilePic:image?.sourceURL || image?.path,
            imageType:image?.mime
          })
        });
      }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                {/* -------------Backward Arrow--------------- */}
                <BackWardArrow txtOnHeader={strings.PROFILE} />

                <View style={{ marginVertical: moderateScaleVertical(20) }}>
                    <Image source={profilePic} style={styles.profileImage} resizeMode='contain' />
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
                        <View style={{ flex: 0.7, alignItems: 'flex-end', }}>
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


                    {/* ------------------Next Button----------------- */}
                    <KeyboardAvoidingView>
                        <Button
                            ButtonText={strings.SAVE_CHANGES}
                            btnStyle={{ marginVertical: moderateScale(12) }}
                            onPress={onEditProfile}
                        />
                    </KeyboardAvoidingView>
                </View>

            </SafeAreaView>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    TwoInputFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImage: {
        height: height / 8,
        width: height / 8,
        // height:moderateScale(100),
        // width:moderateScale(100),
        borderRadius: width / 2,
        alignSelf: 'center',
        position: 'relative'
    },
    editProfile: {
        position: 'absolute',
        bottom: moderateScale(5),
        right: moderateScale(150)
    }
});
//make this component available to the app
export default EditProfile;