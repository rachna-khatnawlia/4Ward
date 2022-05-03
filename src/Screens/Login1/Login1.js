//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import PasswordInput from '../../Components/PasswordInput';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import actions from '../../redux/actions';

import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const Login1 = ({ navigation }) => {
    const [loginData, setloginData] = useState({
        phone: '',
        password: '',
        loginType: 'user login'
    })

    const { phone, password, loginType } = loginData;
    const updateState = (data) => setloginData(() => ({ ...loginData, ...data }))

    const handleLogin = async (data) => {
        console.log("loginData", phone, password)

        let apiData = {
            phone: phone,
            phone_code: "+91",
            device_token: 'dtLFa9OM6UEbsHD1Cv_S-O:APA91bEO2rU_o3T5DkrZ32zzQwpbATBOf4kw0ASjzVmiKRDaDcOfrtv_fQVmF24Z7OLILBehOJob9V43i4og7LgPwrWE0TuECQaiDHRT3GBp9rMwbfya51vgbn8BovWFo4wiuY0KB6Cw',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            loginType: loginType,
            password: password
        }
        try {
            const res = await actions.Login(apiData)
            console.log("Login api result +++++", res)
            alert("User Login successfully....!!!");
            navigation.navigate(navigationStrings.HOME)
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }

    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                <BackWardArrow />
                <View style={commonStyle.welcome}>
                    <Text style={commonStyle.welcomeHeading}>Welcome Back!</Text>
                    <Text style={commonStyle.welcomeDes}>We are happy to see. You can login to continue.</Text>
                </View>

                <View style={styles.loginContainer}>

                    <View style={commonStyle.phoneInputBox}>
                        <View style={commonStyle.countryPickerBg}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.7, alignItems: 'flex-end' }}>
                            <CommonInput
                                placeholderTxt={strings.MOBILE_NUMBER}
                                inputContainer={{ marginRight: moderateScale(0) }}
                                onChangeTxt={(phone) => updateState({ phone })}
                            />
                        </View>
                    </View>

                    <PasswordInput
                        placeholderTxt='Password'
                        onChangeTxt={(password) => updateState({ password })}
                    />
                    <View style={styles.otpPassword}>
                        <View style={styles.otpPassword1}>
                            <Text style={styles.otpPassword1Txt}> Use OTP</Text>
                        </View>
                        <TouchableOpacity style={styles.otpPassword2} onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)}>
                            <Text style={styles.otpPassword2Txt}>Forgot Password? </Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                            <Button
                                ButtonText={strings.LOGIN}
                                btnStyle={{ marginVertical: moderateScale(12) }}
                                onPress={handleLogin}
                            />
                        </View>
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
    otpPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(24),
        marginBottom: moderateScale(15)
    },
    otpPassword1: {
        flex: 0.5
    },
    otpPassword1Txt: {
        color: colors.white,
        fontSize: textScale(13),
        fontFamily: fontFamily.barlowRegular
    },
    otpPassword2: {
        flex: 0.5,
        alignItems: 'flex-end',
    },
    otpPassword2Txt: {
        color: colors.Forgot,
        fontSize: textScale(13),
        fontFamily: fontFamily.barlowRegular
    },

});
//make this component available to the app
export default Login1;