//import liraries
import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import PasswordInput from '../../Components/PasswordInput';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import actions from '../../redux/actions';
import { moderateScale } from '../../styles/responsiveSize';
import { styles } from './style';

// create a component
const Login1 = ({ navigation }) => {

    //--------------Fields ustate---------------
    const [loginData, setloginData] = useState({
        phone: '',
        password: '',
        loginType: 'user login'
    })

    const { phone, password, loginType } = loginData;
    const updateState = (data) => setloginData(() => ({ ...loginData, ...data }))

    //---------------Login Function-------------
    const handleLogin = async (data) => {
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
            // console.log("Login api result +++++", res)
            alert("User Login successfully....!!!");
            navigation.navigate(navigationStrings.BOTTOM_TAB)
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <ScrollView>
                <BackWardArrow />
                <View style={commonStyle.welcome}>
                    <Text style={commonStyle.welcomeHeading}>{strings.WELCOME_BACK}</Text>
                    <Text style={commonStyle.welcomeDes}>{strings.LOGIN1_MSG}</Text>
                </View>

                <View style={styles.loginContainer}>

                    <View style={commonStyle.phoneInputBox}>
                        {/* -------------------Phone no-------------------- */}
                        <View style={commonStyle.countryPickerBg}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.7, alignItems: 'flex-end' }}>
                            <CommonInput
                                placeholderTxt={strings.MOBILE_NUMBER}
                                keyboardType="numeric"
                                inputContainer={{ marginRight: moderateScale(0) }}
                                onChangeTxt={(phone) => updateState({ phone })}
                            />
                        </View>
                    </View>

                    {/* ---------------------Password Input------------ */}
                    <PasswordInput
                        placeholderTxt='Password'
                        onChangeTxt={(password) => updateState({ password })}
                    />
                    {/* --------------OTP and Forget Password------------ */}
                    <View style={styles.otpPassword}>
                        <View style={styles.otpPassword1}>
                            <Text style={styles.otpPassword1Txt}>{strings.USE_OTP}</Text>
                        </View>
                        <TouchableOpacity style={styles.otpPassword2}>
                            <Text style={styles.otpPassword2Txt}>{strings.FORGET_PASS}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >

            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <Button
                    ButtonText={strings.LOGIN}
                    btnStyle={{ marginVertical: moderateScale(12) }}
                    onPress={handleLogin}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

//make this component available to the app
export default Login1;