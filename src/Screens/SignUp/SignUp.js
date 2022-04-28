//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const SignUp = ({ navigation }) => {
    //-------------------------------SignUp data-------------------------------------
    const [signUpData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        phoneCode: '',
        countryCode: '',
        deviceToken: '',
        deviceType: '',
        password: ''
    })

    const { firstName, lastName, email, phone, phoneCode, countryCode, deviceToken, deviceType, password } = signUpData;
    const updateState = (data) => setSignupData(() => ({ ...signUpData, ...data }))

    console.log("usestate value", firstName)

    const onSignUp = async () => {
        let signUpAPIData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: '91',
            country_code: 'IN',
            device_token: 'dtLFa9OM6UEbsHD1Cv_S-O:APA91bEO2rU_o3T5DkrZ32zzQwpbATBOf4kw0ASjzVmiKRDaDcOfrtv_fQVmF24Z7OLILBehOJob9V43i4og7LgPwrWE0TuECQaiDHRT3GBp9rMwbfya51vgbn8BovWFo4wiuY0KB6Cw',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password
        }
        console.log("Signup data : ", signUpAPIData)
        try {
            const res = await actions.SignUp(signUpAPIData)
            console.log("singnup api res_+++++", res)
            navigation.navigate(navigationStrings.VERIFY_OTP, {phone:phone})
            alert("User signup successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                {/* -------------Backward Arrow--------------- */}
                <BackWardArrow />

                {/* -------------Welcome Page Text--------------- */}
                <View style={commonStyle.welcome}>
                    <Text style={commonStyle.welcomeHeading}>{strings.CR_NW_ACCOUNT}</Text>
                    <Text style={commonStyle.welcomeDes}>{strings.CR_NW_ACCOUNT_TEXT}</Text>
                </View>

                <View style={styles.loginContainer}>
                    {/* -------------First Name & Last Name--------------- */}
                    <View style={styles.TwoInputFields}>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.FIRST_NAME}
                                secureTextEntry={false}
                                inputContainer={{ marginRight: moderateScale(15) }}
                                onChangeTxt={(firstName) => updateState({ firstName })}
                                />
                        </View>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.LAST_NAME}
                                secureTextEntry={false}
                                inputContainer={{ marginLeft: moderateScale(0) }}
                                onChangeTxt={(lastName) => updateState({ lastName })}
                            />
                        </View>
                    </View>

                    {/* -------------Email Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.EMAIL}
                        secureTextEntry={false}
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
                            />
                        </View>
                    </View>

                    {/* -------------Password Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.PASSWORD}
                        secureTextEntry={true}
                        onChangeTxt={(password) => updateState({ password })}
                    />
                    {/* -------------Confirm Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.CFRM_PASSWORD}
                        secureTextEntry={true}
                    />

                    {/* ------------------Next Button----------------- */}
                    <KeyboardAvoidingView>
                        <Button
                            ButtonText={strings.NEXT}
                            btnStyle={{ marginVertical: moderateScale(12) }}
                            onPress={onSignUp}
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
    }
});
//make this component available to the app
export default SignUp;