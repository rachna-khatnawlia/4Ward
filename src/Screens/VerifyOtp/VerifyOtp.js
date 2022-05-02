//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../../Components/ButtonComponent';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const VerifyOtp = ({ navigation, route }) => {
    const phoneNumber = route?.params?.phone;
    const phoneCode = route?.params?.code

    const [code, setCode] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <BackWardArrow />
            <ScrollView >
                <View style={{ height: height }}>

                    <View style={commonStyle.welcome}>
                        <Text style={styles.showNo}>{strings.SEND_OTP} {phoneCode}  {phoneNumber}</Text>
                        <Text style={styles.editNo}>{strings.EDIT_OTP_NO}</Text>
                    </View>

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

                        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(100) }}>
                            <Button
                                ButtonText={strings.VERIFY}
                                btnStyle={{ marginVertical: moderateScale(12) }}
                                onPress={() => navigation.navigate(navigationStrings.LOGIN1)}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    otpPassword: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(24),
        marginBottom: moderateScale(15)
    },

    flexView: {
        flex: 0.15,
        marginRight: moderateScale(30),
    },

    showNo: {
        fontFamily: fontFamily.barlowBold,
        fontSize: textScale(23),
        color: colors.white
    },
    editNo: {
        color: colors.Forgot,
        fontSize: textScale(15),
        fontFamily: fontFamily.barlowRegular,
        marginVertical: moderateScaleVertical(10)
    },
    resendeOtp: {
        marginHorizontal: moderateScale(24),
        color: colors.Forgot,
        fontSize: textScale(15),
        fontFamily: fontFamily.barlowRegular,
    }

});
//make this component available to the app
export default VerifyOtp;