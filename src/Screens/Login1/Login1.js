//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const Login1 = ({ navigation }) => {
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
                        <View style={{ flex: 0.7, alignItems: 'flex-end',}}>
                            <CommonInput
                                placeholderTxt={strings.MOBILE_NUMBER}
                                inputContainer={{ marginRight:moderateScale(0),}}
                            />
                        </View>
                    </View>

                    <CommonInput
                        placeholderTxt='Password'
                        secureTextEntry={true}
                    />
                    <View style={styles.otpPassword}>
                        <View style={styles.otpPassword1}>
                            <Text style={styles.otpPassword1Txt}> Use OTP</Text>
                        </View>
                        <TouchableOpacity style={styles.otpPassword2}>
                            <Text style={styles.otpPassword2Txt}>Forgot Password? </Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                            <Button
                                ButtonText={strings.LOGIN}
                                btnStyle={{ marginVertical: moderateScale(12) }}
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