//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../../Components/ButtonComponent';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { height, moderateScale  } from '../../styles/responsiveSize';
import { styles } from './style';

// create a component
const VerifyOtp = ({ navigation, route }) => {
    const phoneNumber = route?.params?.phone;
    const phoneCode = route?.params?.code;

    const apiData = route?.params?.data;
    console.log("NEW USER DATA IS:", apiData);

    const otp = apiData?.otp
    console.log(otp, 'otpdata--');

    const [code, setCode] = useState();

    
    const signupWithOtp = () =>{
        
        if (otp == code) {
            actions.loginFunction(apiData)
            alert("Login successfully")
        } else {
            alert("wrong OTP")
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <BackWardArrow />
            <ScrollView >
                <View style={{ height: height }}>

                    {/* ---------------welcome msg on Otp Verify---------------- */}
                    <View style={commonStyle.welcome}>
                        <Text style={styles.showNo}>{strings.SEND_OTP} {phoneCode}  {phoneNumber}</Text>
                        <Text style={styles.editNo}>{strings.EDIT_OTP_NO}</Text>
                    </View>

                    {/* -----------------Smooth Input-------------- */}
                    <View style={{ marginHorizontal: moderateScale(40) }}>
                        <SmoothPinCodeInput
                            value={code}
                            onTextChange={code => setCode(code)}
                            cellStyle={{
                                borderRadius: moderateScale(5),
                                marginLeft: moderateScale(15),
                                backgroundColor: colors.inputColor
                            }}
                        />
                    </View>

                </View>
            </ScrollView >
            <View>
                <View style={styles.loginContainer}>
                    <Text style={styles.resendeOtp}>{strings.REESEND_CODE}</Text>
                    <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                            <Button
                                ButtonText={strings.VERIFY}
                                btnStyle={{ marginVertical: moderateScale(12) }}
                                onPress={signupWithOtp}
                            />
                    </KeyboardAvoidingView>
                </View>
            </View>

        </SafeAreaView>
    );
};

//make this component available to the app
export default VerifyOtp;