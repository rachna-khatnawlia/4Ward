//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView,  KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import PasswordInput from '../../Components/PasswordInput';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';
import validator from '../../utils/validation';

// create a component
const SignUp = ({ navigation }) => {
    //-------------------------------SignUp data-------------------------------------
    const [signUpData, setSignupData] = useState({
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

    const { firstName, lastName, email, phone, phoneCode, countryCode, deviceToken, deviceType, password } = signUpData;
    const updateState = (data) => setSignupData(() => ({ ...signUpData, ...data }))

    console.log("usestate value", firstName)

    const isValidData = () => {
        const error = validator({ firstName, lastName, email, phone, password});
        if (error) {
          alert(error)
          return;
        }
        return true;
      };

    //-------------------------------SignUp API function------------------------
    const onSignUp = async () => {
        const checkValid = isValidData();
        if (!checkValid) {
          return;
        }    
        let signUpAPIData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: phoneCode,
            country_code: countryCode,
            device_token: deviceToken,
            device_type: deviceType,
            password: password
        }
        console.log("Signup data : ", signUpAPIData)
        try {
            const res = await actions.SignUp(signUpAPIData)
            console.log("singnup api res_+++++", res)
            navigation.navigate(navigationStrings.VERIFY_OTP,{ data: res?.data })
            // alert("User signup successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <ScrollView>
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
                        <View style={{ flex: 0.5 }}>
                            <CommonInput
                                placeholderTxt={strings.FIRST_NAME}
                                inputContainer={{ marginRight: moderateScale(15) }}
                                onChangeTxt={(firstName) => updateState({ firstName })}
                            />
                        </View>
                        <View style={{ flex: 0.5 }}>
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

                    {/* -------------Password Field--------------- */}
                    <PasswordInput
                        placeholderTxt={strings.PASSWORD}
                        onChangeTxt={(password) => updateState({ password })}
                    />
                    {/* -------------Confirm Field--------------- */}
                    {/* <PasswordInput
                        placeholderTxt={strings.CFRM_PASSWORD}
                    /> */}

                </View>

            </ScrollView >
            {/* ------------------Next Button----------------- */}
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <Button
                    ButtonText={strings.NEXT}
                    btnStyle={{ marginVertical: moderateScale(12) }}
                    onPress={onSignUp}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
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