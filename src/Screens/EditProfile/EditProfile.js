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

// create a component
const EditProfile = ({ navigation }) => {
    // -------------------------------SignUp data-------------------------------------
    const [upDateData, setUpdateData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        phoneCode: '+91',
        countryCode: 'IN',
        deviceToken: '132456',
        deviceType: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
        password: ''
    })

    const { firstName, lastName, email, phone, phoneCode, countryCode, deviceToken, deviceType, password } = upDateData;
    const updateState = (data) => setUpdateData(() => ({ ...upDateData, ...data }))

    // console.log("usestate value", firstName)

    // const onSignUp = async () => {
    //     let signUpAPIData = {
    //         first_name: firstName,
    //         last_name: lastName,
    //         email: email,
    //         phone: phone,
    //         phone_code: phoneCode,
    //         country_code: countryCode,
    //         device_token: deviceToken,
    //         device_type: deviceType,
    //         password: password
    //     }
    //     console.log("Signup data : ", signUpAPIData)
    //     try {
    //         const res = await actions.SignUp(signUpAPIData)
    //         console.log("singnup api res_+++++", res)
    //         navigation.navigate(navigationStrings.VERIFY_OTP, {
    //             phone:phone, 
    //             code: phoneCode
    //         })
    //         alert("User signup successfully....!!!")
    //     } catch (error) {
    //         console.log("error raised", error)
    //         alert(error?.message)
    //     }
    // }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                {/* -------------Backward Arrow--------------- */}
                <BackWardArrow txtOnHeader={strings.PROFILE}/>

                <View style={{marginVertical:moderateScaleVertical(20)}}>
                    <Image source={imagePath.profilePic2} style={styles.profileImage} resizeMode='contain'/>
                    <Image source={imagePath.edit} style={styles.editProfile}/>
                </View>

                <View style={styles.loginContainer}>
                    {/* -------------First Name & Last Name--------------- */}
                    <View style={styles.TwoInputFields}>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.FIRST_NAME}
                                inputContainer={{ marginRight: moderateScale(15) }}
                                onChangeTxt={(firstName) => updateState({ firstName })}
                                />
                        </View>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.LAST_NAME}
                                inputContainer={{ marginLeft: moderateScale(0) }}
                                onChangeTxt={(lastName) => updateState({ lastName })}
                            />
                        </View>
                    </View>

                    {/* -------------Email Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.EMAIL}
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
                                onChangeTxt={(phone) => updateState({ phone })}
                                keyBoardType="numeric"
                                keyboardAppearance='dark'
                            />
                        </View>
                    </View>


                    {/* ------------------Next Button----------------- */}
                    <KeyboardAvoidingView>
                        <Button
                            ButtonText={strings.SAVE_CHANGES}
                            btnStyle={{ marginVertical: moderateScale(12) }}
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
    profileImage:{
        height:height/8,
        width:height/8,
        // height:moderateScale(100),
        // width:moderateScale(100),
        borderRadius:width/2,
        alignSelf:'center',
        position:'relative'
    },
    editProfile:{
        position:'absolute',
        bottom:moderateScale(5),
        right:moderateScale(150)
    }
});
//make this component available to the app
export default EditProfile;